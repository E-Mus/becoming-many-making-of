// SmellPlume.js
// -----------------------------------------------------------------------------
// GPU-Partikel-Simulation einer Geruchsfahne (Three.js WebGPU / TSL).
//
// Physikalisches Vorbild: eine reale Geruchsfahne wird vom Wind getragen
// (Advektion) und von Turbulenz zu duennen, maeandernden Filamenten gestreckt
// und gefaltet. Reine Diffusion ist vernachlaessigbar. Der Look entsteht aus
// Wind + Curl Noise (divergenzfrei => wirkt wie inkompressible Luft) +
// Lebensdauer (Fade-in / Fade-out).
//
// Alles laeuft auf der GPU: persistente Storage-Buffer, ein Init- und ein
// Update-Compute-Pass, gerendert mit SpriteNodeMaterial. Kein Per-Frame-Readback,
// keine Allocs pro Frame.
//
// Public API:
//   new SmellPlume(scene, renderer, options)
//   update(dt)        -> aktualisiert Zeit/Delta-Uniforms
//   compute()         -> dispatcht den Compute-Pass (Init einmalig, dann Update)
//   setSource(vec3)
//   setWind(vec3)
//   setParams({...})
//   dispose()
//
// Abhaengigkeit: ausschliesslich Three.js.
// -----------------------------------------------------------------------------

import * as THREE from 'three';
import { SpriteNodeMaterial } from 'three/webgpu';
import {
  Fn, instanceIndex, instancedArray, uniform,
  float, vec2, vec3, uv,
  sin, fract, mix, smoothstep, If, PI,
  mx_noise_vec3,
} from 'three/tsl';

// -----------------------------------------------------------------------------
// TSL-Hilfsfunktionen (modul-global, als echte WGSL/GLSL-Funktionen via setLayout)
// -----------------------------------------------------------------------------

// Billiger Hash: float-seed -> pseudo-zufaellig in [0,1).
const hash = Fn( ( [ n ] ) => {
  return fract( sin( n ).mul( 43758.5453123 ) );
} ).setLayout( {
  name: 'plumeHash', type: 'float',
  inputs: [ { name: 'n', type: 'float' } ],
} );

// Curl Noise: rot(F) eines 3D-Rauschfelds ueber finite Differenzen.
// Das Ergebnis ist divergenzfrei (nabla . curl == 0) und verhaelt sich wie ein
// inkompressibles Stroemungsfeld -> erzeugt die charakteristischen Filamente.
const curlNoise = Fn( ( [ p ] ) => {
  const e = float( 0.08 );            // Sample-Abstand fuer die Ableitung
  const dx = vec3( e, 0.0, 0.0 );
  const dy = vec3( 0.0, e, 0.0 );
  const dz = vec3( 0.0, 0.0, e );

  // Vektorpotential F = mx_noise_vec3(p) an sechs Nachbarpunkten.
  const px0 = mx_noise_vec3( p.sub( dx ) ), px1 = mx_noise_vec3( p.add( dx ) );
  const py0 = mx_noise_vec3( p.sub( dy ) ), py1 = mx_noise_vec3( p.add( dy ) );
  const pz0 = mx_noise_vec3( p.sub( dz ) ), pz1 = mx_noise_vec3( p.add( dz ) );

  // curl = ( dFz/dy - dFy/dz , dFx/dz - dFz/dx , dFy/dx - dFx/dy )
  const cx = py1.z.sub( py0.z ).sub( pz1.y.sub( pz0.y ) );
  const cy = pz1.x.sub( pz0.x ).sub( px1.z.sub( px0.z ) );
  const cz = px1.y.sub( px0.y ).sub( py1.x.sub( py0.x ) );

  return vec3( cx, cy, cz ).div( e.mul( 2.0 ) );
} ).setLayout( {
  name: 'plumeCurlNoise', type: 'vec3',
  inputs: [ { name: 'p', type: 'vec3' } ],
} );

// -----------------------------------------------------------------------------

const DEFAULTS = {
  particleCount:  200000,                       // auf WebGPU problemlos
  webglMaxCount:  60000,                         // Auto-Reduktion im WebGL-Fallback

  source:         new THREE.Vector3( 0, 1.2, 0 ),
  sourceRadius:   0.09,                          // Streuung an der Quelle

  windDirection:  new THREE.Vector3( 1, 0.1, 0.35 ),
  windStrength:   0.65,

  turbulence:     1.9,                            // Curl-Staerke (formt die Filamente)
  noiseScale:     0.55,
  buoyancy:       0.85,                           // Auftrieb (warme Quelle)
  drag:           0.9,                            // Geschwindigkeitserhalt / 60fps-Frame

  maxLife:        7.0,
  emissionRate:   0.7,                            // Ejektions-/Streu-Staerke beim Recyclen

  baseSize:       0.1,
  color1:         0x35b7ff,                       // jung / Kern (Cyan)
  color2:         0x5326e6,                       // alt / Rand (Violett)
  intensity:      0.9,
  opacity:        0.9,
  blending:       'additive',                     // 'additive' | 'normal' (Spec-Default: additiv)
};

export class SmellPlume {

  constructor( scene, renderer, options = {} ) {
    this.scene = scene;
    this.renderer = renderer;

    // Backend erst nach renderer.init() verlaesslich. Der Aufrufer soll init()
    // vor dem Konstruktor awaiten (siehe README).
    this.isWebGPU = !! ( renderer.backend && renderer.backend.isWebGPUBackend );
    this.backendName = this.isWebGPU ? 'WebGPU' : 'WebGL';

    this.params = Object.assign( {}, DEFAULTS, options );
    this.params.source = ( options.source || DEFAULTS.source ).clone();
    this.params.windDirection = ( options.windDirection || DEFAULTS.windDirection ).clone();

    // Im WebGL-Fallback Partikelzahl automatisch senken.
    this._requestedCount = this.params.particleCount;
    if ( ! this.isWebGPU ) {
      this.params.particleCount = Math.min( this.params.particleCount, this.params.webglMaxCount );
    }

    this._identity = new THREE.Matrix4();
    this._initUniforms();
    this._build();
  }

  // --- Uniforms (einmal erzeugt, danach nur .value aktualisiert) --------------
  _initUniforms() {
    const p = this.params;
    this.uni = {
      source:       uniform( p.source.clone() ),
      sourceRadius: uniform( p.sourceRadius ),
      windDir:      uniform( p.windDirection.clone() ),
      windStrength: uniform( p.windStrength ),
      turbulence:   uniform( p.turbulence ),
      noiseScale:   uniform( p.noiseScale ),
      buoyancy:     uniform( p.buoyancy ),
      drag:         uniform( p.drag ),
      maxLife:      uniform( p.maxLife ),
      emission:     uniform( p.emissionRate ),
      baseSize:     uniform( p.baseSize ),
      intensity:    uniform( p.intensity ),
      opacity:      uniform( p.opacity ),
      color1:       uniform( new THREE.Color( p.color1 ) ),
      color2:       uniform( new THREE.Color( p.color2 ) ),
      time:         uniform( 0 ),
      delta:        uniform( 0 ),
    };
  }

  // --- Buffer + Compute + Mesh (auf-/abbaubar bei particleCount-Aenderung) -----
  _build() {
    const count = this.count = this.params.particleCount;

    // Persistente GPU-Buffer.
    this.posBuf  = instancedArray( count, 'vec3' );
    this.velBuf  = instancedArray( count, 'vec3' );
    this.ageBuf  = instancedArray( count, 'float' );
    this.lifeBuf = instancedArray( count, 'float' );

    this._buildCompute();
    this._buildMesh();
    this._needsInit = true;
  }

  _buildCompute() {
    const U = this.uni;

    // Kleine gestreute Position um die Quelle (annaehernd Kugel).
    const spawnOffset = ( seed ) => vec3(
      hash( seed.add( 1.0 ) ).sub( 0.5 ),
      hash( seed.add( 2.0 ) ).sub( 0.5 ),
      hash( seed.add( 3.0 ) ).sub( 0.5 ),
    ).mul( U.sourceRadius );

    // Startgeschwindigkeit: vor allem nach oben, leicht seitlich gestreut,
    // skaliert mit der Emissionsrate.
    const spawnVelocity = ( seed ) => vec3(
      hash( seed.add( 4.0 ) ).sub( 0.5 ).mul( 0.6 ),
      hash( seed.add( 5.0 ) ).mul( 0.7 ).add( 0.3 ),
      hash( seed.add( 6.0 ) ).sub( 0.5 ).mul( 0.6 ),
    ).mul( U.emission );

    // ---- Init-Pass: Partikel streuen, Alter ueber die Lebensdauer staffeln ----
    this.computeInit = Fn( () => {
      const i = float( instanceIndex );
      const seed = i.mul( 0.0171 );

      const pos  = this.posBuf.element( instanceIndex );
      const vel  = this.velBuf.element( instanceIndex );
      const age  = this.ageBuf.element( instanceIndex );
      const life = this.lifeBuf.element( instanceIndex );

      const lf = U.maxLife.mul( mix( 0.4, 1.0, hash( seed.add( 8.0 ) ) ) );

      pos.assign( U.source.add( spawnOffset( seed ) ) );
      vel.assign( spawnVelocity( seed ).mul( 0.4 ) );
      life.assign( lf );
      // Gestaffeltes Startalter => sofort ein kontinuierlicher Strom, kein Puff.
      age.assign( hash( seed.add( 7.0 ) ).mul( lf ) );
    } )().compute( this.count );

    // ---- Update-Pass: Kraefte integrieren, Lifecycle/Recycling ----------------
    this.computeUpdate = Fn( () => {
      const pos  = this.posBuf.element( instanceIndex );
      const vel  = this.velBuf.element( instanceIndex );
      const age  = this.ageBuf.element( instanceIndex );
      const life = this.lifeBuf.element( instanceIndex );
      const dt = U.delta;

      // Advektion: Grundwind.
      const wind = U.windDir.mul( U.windStrength );

      // Turbulenz: Curl Noise. Das Noise-Feld driftet langsam mit der Zeit,
      // damit die Filamente leben statt statisch zu stehen.
      const samplePos = pos.mul( U.noiseScale )
        .add( vec3( 0.0, U.time.mul( 0.15 ), U.time.mul( 0.05 ) ) );
      const curl = curlNoise( samplePos ).mul( U.turbulence );

      // Buoyancy: leichter Auftrieb (warme Quelle).
      const buoyancy = vec3( 0.0, U.buoyancy, 0.0 );

      const acc = wind.add( curl ).add( buoyancy );

      vel.addAssign( acc.mul( dt ) );
      // Drag framerate-stabil: retention^(dt*60) statt naivem vel*=drag.
      vel.mulAssign( U.drag.pow( dt.mul( 60.0 ) ) );

      pos.addAssign( vel.mul( dt ) );
      age.addAssign( dt );

      // Recycling: abgelaufene Partikel an der Quelle neu streuen.
      If( age.greaterThan( life ), () => {
        const i = float( instanceIndex );
        // Salt aus der Zeit => bei jedem Neustart andere Streuung (kein Muster).
        const seed = i.mul( 0.0193 ).add( U.time.mul( 1.7 ) );

        pos.assign( U.source.add( spawnOffset( seed ) ) );
        vel.assign( spawnVelocity( seed ) );
        age.assign( 0.0 );
        life.assign( U.maxLife.mul( mix( 0.4, 1.0, hash( seed.add( 8.0 ) ) ) ) );
      } );
    } )().compute( this.count );
  }

  _buildMesh() {
    const U = this.uni;

    // Lebensphase 0..1 aus den Buffern, per-Instanz im Render-Graph gelesen.
    const lifeN = this.ageBuf.toAttribute()
      .div( this.lifeBuf.toAttribute() )
      .clamp( 0.0, 1.0 );

    // Weicher runder Falloff im Sprite-Quad (aus dem UV).
    const soft = smoothstep( 0.5, 0.0, uv().distance( vec2( 0.5, 0.5 ) ) );

    const material = new SpriteNodeMaterial();
    material.positionNode = this.posBuf.toAttribute();
    material.scaleNode    = U.baseSize.mul( mix( 0.5, 1.6, lifeN ) );   // waechst mit life
    material.colorNode    = mix( U.color1, U.color2, lifeN ).mul( U.intensity );
    // Verblassen: sin(life*pi) => Fade-in + Fade-out.
    material.opacityNode  = sin( lifeN.mul( PI ) ).mul( soft ).mul( U.opacity );

    material.transparent = true;
    material.depthWrite  = false;
    material.depthTest   = true;
    material.blending    = this._threeBlending( this.params.blending );

    this.material = material;

    const geometry = new THREE.PlaneGeometry( 1, 1 );
    const mesh = new THREE.InstancedMesh( geometry, material, this.count );
    mesh.frustumCulled = false;

    // instanceMatrix auf Identitaet setzen (positionNode uebernimmt die Lage,
    // aber der Instanz-Transform darf nicht die Null-Matrix bleiben).
    for ( let i = 0; i < this.count; i ++ ) mesh.setMatrixAt( i, this._identity );
    mesh.instanceMatrix.needsUpdate = true;

    this.mesh = mesh;
    this.scene.add( mesh );
  }

  _threeBlending( name ) {
    return name === 'normal' ? THREE.NormalBlending : THREE.AdditiveBlending;
  }

  _teardown() {
    if ( this.mesh ) {
      this.scene.remove( this.mesh );
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      this.mesh = null;
    }
    this.posBuf = this.velBuf = this.ageBuf = this.lifeBuf = null;
    this.computeInit = this.computeUpdate = null;
  }

  // --- Public API ------------------------------------------------------------

  update( dt ) {
    // dt begrenzen, damit ein Tab-Wechsel keinen Sprung verursacht.
    const d = Math.min( Math.max( dt, 0.0 ), 0.05 );
    this.uni.delta.value = d;
    this.uni.time.value += d;
  }

  compute() {
    if ( this._needsInit ) {
      this.renderer.computeAsync( this.computeInit );
      this._needsInit = false;
    }
    this.renderer.computeAsync( this.computeUpdate );
  }

  setSource( v ) {
    this.params.source.copy( v );
    this.uni.source.value.copy( v );
  }

  setWind( v ) {
    this.params.windDirection.copy( v );
    this.uni.windDir.value.copy( v );
  }

  setParams( o = {} ) {
    const U = this.uni, p = this.params;

    if ( o.windStrength !== undefined ) U.windStrength.value = p.windStrength = o.windStrength;
    if ( o.turbulence   !== undefined ) U.turbulence.value   = p.turbulence   = o.turbulence;
    if ( o.noiseScale   !== undefined ) U.noiseScale.value   = p.noiseScale   = o.noiseScale;
    if ( o.buoyancy     !== undefined ) U.buoyancy.value     = p.buoyancy     = o.buoyancy;
    if ( o.drag         !== undefined ) U.drag.value         = p.drag         = o.drag;
    if ( o.maxLife      !== undefined ) U.maxLife.value      = p.maxLife      = o.maxLife;
    if ( o.emissionRate !== undefined ) U.emission.value     = p.emissionRate = o.emissionRate;
    if ( o.baseSize     !== undefined ) U.baseSize.value     = p.baseSize     = o.baseSize;
    if ( o.sourceRadius !== undefined ) U.sourceRadius.value = p.sourceRadius = o.sourceRadius;
    if ( o.intensity    !== undefined ) U.intensity.value    = p.intensity    = o.intensity;
    if ( o.opacity      !== undefined ) U.opacity.value      = p.opacity      = o.opacity;

    if ( o.color1 !== undefined ) { p.color1 = o.color1; U.color1.value.set( o.color1 ); }
    if ( o.color2 !== undefined ) { p.color2 = o.color2; U.color2.value.set( o.color2 ); }

    if ( o.windDirection !== undefined ) this.setWind( o.windDirection );
    if ( o.source        !== undefined ) this.setSource( o.source );

    if ( o.blending !== undefined && o.blending !== p.blending ) {
      p.blending = o.blending;
      if ( this.material ) {
        this.material.blending = this._threeBlending( o.blending );
        this.material.needsUpdate = true;
      }
    }

    // particleCount: kompletter Neuaufbau der Buffer/Compute/Mesh.
    if ( o.particleCount !== undefined ) {
      let n = o.particleCount;
      this._requestedCount = n;
      if ( ! this.isWebGPU ) n = Math.min( n, p.webglMaxCount );
      if ( n !== this.count ) {
        p.particleCount = n;
        this._teardown();
        this._build();
      }
    }
  }

  dispose() {
    this._teardown();
  }
}
