// SmellVolume.js
// -----------------------------------------------------------------------------
// Volumetrische Geruchs-/Rauchwolke als echtes 3D-Dichtefeld (Three.js WebGPU/TSL).
//
// Anders als die Partikel-Variante (SmellPlume) wird hier ein Eulersches
// Dichtefeld auf einem festen 3D-Gitter simuliert (Stable-Fluids-Stil) und per
// Volume-Raymarching gerendert. Ergebnis: eine weiche, diffuse, "echte" Wolke —
// auf Kosten deutlich hoeherer Rechenlast (Grid^3 Zellen + Steps pro Pixel).
//
// Simulation — drei getrennte Compute-Paesse pro Frame (Ping-Pong A<->B):
//
//   1. ADVEKTION  (A -> B)  semi-Lagrange: pro Zelle rueckwaerts entlang des
//      Geschwindigkeitsfelds laufen und dort trilinear die alte Dichte sampeln.
//      Bedingungslos stabil, egal wie gross dt * v wird.
//      Das Velocity-Feld wird analytisch aufgebaut: Wind (konstant, divergenz-
//      frei) + Curl Noise (rot eines Rauschfelds => ebenfalls divergenzfrei)
//      + Auftrieb. Dadurch braucht es keinen Pressure-Solve — die Stroemung
//      ist per Konstruktion (naeherungsweise) inkompressibel.
//
//   2. DIFFUSION  (B -> A)  ein Jacobi-/Blur-Schritt: Zelle mit dem Mittel der
//      6 Nachbarn mischen. In echter Luft ist molekulare Diffusion fast
//      irrelevant — hier bewusst schwach, nur fuer weiche Kanten.
//
//   3. DISSIPATION + INJECTION  (A in-place)  exponentielles Verblassen
//      density *= exp(-decay*dt) (frameraten-unabhaengig), danach Dichte an
//      der Quelle (gaussfoermig) hinzufuegen: kontinuierlich (injectionRate)
//      und/oder als Einmal-Impuls (inject()).
//
// Rendering — Box-Raymarching im Fragment-Shader (TSL):
//   Ray = Kamera -> Boxoberflaeche, Slab-Test gegen die Volumen-AABB, dann in
//   festen Schritten durchs Feld marschieren, Dichte trilinear sampeln und
//   front-to-back alpha-kompositieren. Optional einfaches Single-Scattering:
//   pro Sample ein kurzer Sekundaer-Marsch Richtung Licht (Selbstabschattung).
//
// Alles bleibt auf der GPU (kein Readback). Ping-Pong ist so verkettet, dass
// das Ergebnis eines Frames immer in Buffer A liegt — das Render-Material
// liest daher konstant aus A und muss nie umgebunden werden.
//
// Public API:
//   const vol = new SmellVolume(renderer, options)   // renderer.init() vorher!
//   scene.add(vol.mesh)
//   vol.update(dt)                 // 3 Compute-Paesse dispatchen
//   vol.inject(worldPos, amount)   // Einmal-Impuls (z.B. "Puff")
//   vol.setWind(dirVec3, strength)
//   vol.setSource(worldPos)
//   vol.setParams({...})           // alle Parameter; gridResolution baut neu
//   vol.clear()                    // Feld auf 0 setzen
//   vol.dispose()
//
// Abhaengigkeit: ausschliesslich Three.js.
// -----------------------------------------------------------------------------

import * as THREE from 'three';
import { MeshBasicNodeMaterial } from 'three/webgpu';
import {
  Fn, If, Loop, Break, uniform, instancedArray, instanceIndex, storage,
  float, int, ivec3, vec3, vec4, min, max,
  texture3D, textureStore,
  cameraPosition, positionWorld, screenCoordinate,
  mx_noise_vec3,
} from 'three/tsl';

// Obergrenze der Raymarch-Schleife (fest im Shader verbacken; die tatsaechliche
// Schrittzahl ist ein Uniform und jederzeit ohne Rebuild bis hierhin regelbar).
const MAX_STEPS = 256;

// Sekundaer-Samples Richtung Licht fuer das Single-Scattering (JS-seitig
// entrollt — klein halten, Kosten sind steps * LIGHT_STEPS * 8 Buffer-Reads).
const LIGHT_STEPS = 3;

const DEFAULTS = {
  // --- Gitter / Volumen ------------------------------------------------------
  gridResolution: 64,                             // Zellen pro Achse (N^3 gesamt)
  webglGridResolution: 32,                        // Auto-Preset im WebGL-Fallback
  center: new THREE.Vector3( 0, 4.2, 0 ),         // Volumen-AABB (Weltkoordinaten)
  size:   new THREE.Vector3( 9, 8, 7 ),

  // --- Quelle ----------------------------------------------------------------
  sourcePosition: new THREE.Vector3( 0, 1.2, 0 ),
  sourceRadius:   0.45,                           // Gauss-Radius der Quelle (Welt)
  injectionRate:  14.0,                           // Dichte/s im Quellzentrum

  // --- Stroemung (Velocity-Feld) ----------------------------------------------
  windDirection:  new THREE.Vector3( 1, 0.1, 0.3 ),
  windStrength:   0.7,                            // Welt-Einheiten/s
  turbulence:     1.5,                            // Curl-Noise-Staerke
  noiseScale:     0.5,                            // Frequenz des Curl-Felds
  buoyancy:       0.55,                           // konstanter Auftrieb (+Y)

  // --- Feld-Dynamik ------------------------------------------------------------
  diffusion:      0.02,                           // 0..1 Blend Richtung Nachbarmittel
  decay:          0.35,                           // 1/s exponentielles Verblassen
  maxDensity:     2.5,                            // Sicherheits-Klemme gegen Aufschaukeln

  // --- Rendering ---------------------------------------------------------------
  raymarchSteps:  96,
  webglRaymarchSteps: 48,                         // Auto-Preset im WebGL-Fallback
  color:          0x6a3cff,                       // [AKZENTFARBE] — Violett der Serie
  densityScale:   1.0,                            // Multiplikator aufs Feld
  absorption:     7.0,                            // Extinktion (Beer-Lambert)
  scattering:     0.8,                            // 0 = aus, 1 = volle Selbstabschattung
  ambient:        0.45,                           // Grundhelligkeit im Schatten
  lightDirection: new THREE.Vector3( 0.45, 0.8, 0.4 ),
  edgeFade:       2.0,                            // weicher Rand, in Zellen
};

export class SmellVolume {

  constructor( renderer, options = {} ) {

    this.renderer = renderer;

    const p = this.params = { ...DEFAULTS, ...options };
    p.center         = ( options.center ?? DEFAULTS.center ).clone();
    p.size           = ( options.size ?? DEFAULTS.size ).clone();
    p.sourcePosition = ( options.sourcePosition ?? DEFAULTS.sourcePosition ).clone();
    p.windDirection  = ( options.windDirection ?? DEFAULTS.windDirection ).clone().normalize();
    p.lightDirection = ( options.lightDirection ?? DEFAULTS.lightDirection ).clone().normalize();

    // WebGL-Fallback: Volumen-Sim + Raymarching sind dort deutlich teurer.
    // Wenn der Nutzer nichts Eigenes vorgibt, Low-Res-Preset verwenden.
    this.isWebGPU = renderer.backend?.isWebGPUBackend === true;
    if ( ! this.isWebGPU ) {
      if ( options.gridResolution === undefined ) p.gridResolution = p.webglGridResolution;
      if ( options.raymarchSteps === undefined )  p.raymarchSteps  = p.webglRaymarchSteps;
      console.warn(
        `SmellVolume: WebGL-Fallback aktiv — Grid auf ${ p.gridResolution }^3, ` +
        `Raymarch-Steps auf ${ p.raymarchSteps } reduziert. WebGPU empfohlen.`
      );
    }

    this.backendName = this.isWebGPU ? 'WebGPU' : 'WebGL2 (Fallback)';

    this._noiseOffset = new THREE.Vector3();       // laesst das Curl-Feld mitwandern

    this._buildUniforms();

    // Render-Mesh: Einheitsbox, per Transform auf die Volumen-AABB gelegt.
    // FrontSide + depthWrite off: Wolke wird nach der opaken Welt gezeichnet.
    this.mesh = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), null );
    this.mesh.renderOrder = 10;
    this.mesh.frustumCulled = true;

    this._build();                                  // Buffer + Compute + Material
    this._syncVolumeTransform();
  }

  // ---------------------------------------------------------------------------
  // Uniforms — leben unabhaengig vom Grid und ueberleben einen Rebuild.
  // ---------------------------------------------------------------------------
  _buildUniforms() {

    const p = this.params;

    this.uniforms = {
      dt:             uniform( 0.016 ),
      volMin:         uniform( new THREE.Vector3() ),
      volMax:         uniform( new THREE.Vector3() ),
      cellSize:       uniform( new THREE.Vector3() ),      // Weltgroesse einer Zelle

      windDirection:  uniform( p.windDirection.clone() ),
      windStrength:   uniform( p.windStrength ),
      turbulence:     uniform( p.turbulence ),
      noiseScale:     uniform( p.noiseScale ),
      noiseOffset:    uniform( new THREE.Vector3() ),
      buoyancy:       uniform( p.buoyancy ),

      diffusion:      uniform( p.diffusion ),
      decay:          uniform( p.decay ),
      maxDensity:     uniform( p.maxDensity ),

      sourcePosition: uniform( p.sourcePosition.clone() ),
      sourceRadius:   uniform( p.sourceRadius ),
      injectionRate:  uniform( p.injectionRate ),

      impulsePosition: uniform( new THREE.Vector3() ),
      impulseRadius:   uniform( p.sourceRadius * 1.6 ),
      impulseAmount:   uniform( 0 ),

      steps:          uniform( Math.min( p.raymarchSteps, MAX_STEPS ) ),
      color:          uniform( new THREE.Color( p.color ) ),
      densityScale:   uniform( p.densityScale ),
      absorption:     uniform( p.absorption ),
      scattering:     uniform( p.scattering ),
      ambient:        uniform( p.ambient ),
      lightDirection: uniform( p.lightDirection.clone() ),
      lightStep:      uniform( 0.4 ),                       // wird in _syncVolumeTransform gesetzt
      edgeFade:       uniform( p.edgeFade ),
    };
  }

  // AABB / Zellgroesse aus center+size ableiten und Mesh darueberlegen.
  _syncVolumeTransform() {

    const { center, size, gridResolution: N } = this.params;
    const u = this.uniforms;

    u.volMin.value.copy( center ).addScaledVector( size, -0.5 );
    u.volMax.value.copy( center ).addScaledVector( size,  0.5 );
    u.cellSize.value.copy( size ).divideScalar( N );

    // Licht-Schrittweite ~ einige Zellen, skaliert mit dem Volumen.
    u.lightStep.value = ( size.y / N ) * 3.0;

    this.mesh.position.copy( center );
    this.mesh.scale.copy( size );
  }

  // ---------------------------------------------------------------------------
  // Grid-abhaengiger Teil: Storage-Buffer, Compute-Paesse, Render-Material.
  // Wird bei gridResolution-Wechsel komplett neu aufgebaut.
  // ---------------------------------------------------------------------------
  _build() {

    const N  = this.params.gridResolution;
    const N2 = N * N;
    const count = N2 * N;
    const u = this.uniforms;

    this.gridResolution = N;
    this.cellCount = count;

    // --- Dichtefeld als Ping-Pong-Paar (float pro Zelle, Index x + y*N + z*N^2)
    const bufA = this._densityA = instancedArray( count, 'float' );
    const bufB = this._densityB = instancedArray( count, 'float' );

    // WebGL2-Fallback: Storage-Buffer koennen dort nur als Textur (PBO) mit
    // dynamischem Index gelesen werden — fuer trilineares Sampling noetig.
    if ( ! this.isWebGPU ) {
      bufA.setPBO?.( true );
      bufB.setPBO?.( true );
    }

    // WebGPU-Schnellpfad fuers Rendering: das fertige Feld wird zusaetzlich in
    // eine echte 3D-Textur geschrieben (textureStore im Injection-Pass). Das
    // Raymarching sampelt dann hardware-trilinear (1 Fetch statt 8 Buffer-Reads
    // pro Sample) — der mit Abstand groesste Performance-Hebel.
    const useTex3D = this.isWebGPU && typeof THREE.Storage3DTexture === 'function';
    this._densityTex?.dispose();
    this._densityTex = null;
    if ( useTex3D ) {
      const tex = this._densityTex = new THREE.Storage3DTexture( N, N, N );
      tex.type = THREE.HalfFloatType;     // rgba16float: storage-schreibbar + filterbar
      tex.generateMipmaps = false;        // sonst versucht three 2D-Mip-Views pro "Layer"
      tex.name = 'SmellVolumeDensity';
    }

    // --- TSL-Helfer (Closures ueber N und die Buffer) ---------------------------

    // Flacher Buffer-Index aus Ganzzahl-Koordinaten (int-Nodes).
    const flatIndex = ( x, y, z ) => z.mul( N2 ).add( y.mul( N ) ).add( x );

    // Zellkoordinaten (x,y,z) aus dem 1D-instanceIndex (uint-Arithmetik).
    const cellOf = ( i ) => {
      const z  = i.div( N2 );
      const xy = i.sub( z.mul( N2 ) );
      const y  = xy.div( N );
      const x  = xy.sub( y.mul( N ) );
      return { x, y, z };
    };

    // Trilineares Sampling eines Dichte-Buffers an einer kontinuierlichen
    // Gitterposition p (Zellzentren liegen bei i + 0.5). Raender geklemmt.
    const makeSampler = ( buf ) => Fn( ( [ p ] ) => {

      const pc = p.sub( 0.5 ).clamp( vec3( 0.0 ), vec3( N - 1 ) ).toVar();
      const i0 = pc.floor().toVar();
      const f  = pc.sub( i0 ).toVar();

      const x0 = int( i0.x ).toVar(), y0 = int( i0.y ).toVar(), z0 = int( i0.z ).toVar();
      const x1 = min( x0.add( 1 ), N - 1 ).toVar();
      const y1 = min( y0.add( 1 ), N - 1 ).toVar();
      const z1 = min( z0.add( 1 ), N - 1 ).toVar();

      const at = ( x, y, z ) => buf.element( flatIndex( x, y, z ) );

      // 8 Ecken -> 4 -> 2 -> 1 (lerp-Kaskade)
      const c00 = at( x0, y0, z0 ).mix( at( x1, y0, z0 ), f.x );
      const c10 = at( x0, y1, z0 ).mix( at( x1, y1, z0 ), f.x );
      const c01 = at( x0, y0, z1 ).mix( at( x1, y0, z1 ), f.x );
      const c11 = at( x0, y1, z1 ).mix( at( x1, y1, z1 ), f.x );

      return c00.mix( c10, f.y ).mix( c01.mix( c11, f.y ), f.z );
    } );

    const sampleA = makeSampler( bufA );
    const sampleB = makeSampler( bufB );

    // Weicher Rand: 1 im Inneren, faellt ueber edgeFade Zellen auf 0 an den
    // AABB-Flaechen ab. Dient (a) als Randbedingung "Dichte laeuft hinaus"
    // fuer die Advektion und (b) gegen harte Box-Kanten im Rendering.
    const edgeMask = Fn( ( [ p ] ) => {
      const d = min( p, vec3( N ).sub( p ) );
      return d.x.min( d.y ).min( d.z ).div( u.edgeFade ).clamp( 0.0, 1.0 );
    } );

    // Zellzentrum -> Weltposition.
    const worldOf = ( p ) => u.volMin.add( p.mul( u.cellSize ) );

    // Analytisches Velocity-Feld (Welt-Einheiten/s):
    //   Wind (konstant) + Curl Noise (divergenzfrei) + Auftrieb.
    // Das Rauschfeld wird ueber noiseOffset mit dem Wind mitbewegt ("frozen
    // turbulence"), sonst wirkt die Turbulenz wie an Ort und Stelle festgenagelt.
    const velocityAt = Fn( ( [ wp ] ) => {

      const wind = u.windDirection.mul( u.windStrength );

      const q = wp.mul( u.noiseScale ).add( u.noiseOffset ).toVar();
      const e = float( 0.18 );
      const dx = vec3( e, 0.0, 0.0 );
      const dy = vec3( 0.0, e, 0.0 );
      const dz = vec3( 0.0, 0.0, e );

      // Vektorpotential F = mx_noise_vec3(q); curl = rot(F) via finite Differenzen.
      const px0 = mx_noise_vec3( q.sub( dx ) ), px1 = mx_noise_vec3( q.add( dx ) );
      const py0 = mx_noise_vec3( q.sub( dy ) ), py1 = mx_noise_vec3( q.add( dy ) );
      const pz0 = mx_noise_vec3( q.sub( dz ) ), pz1 = mx_noise_vec3( q.add( dz ) );

      const curl = vec3(
        py1.z.sub( py0.z ).sub( pz1.y.sub( pz0.y ) ),
        pz1.x.sub( pz0.x ).sub( px1.z.sub( px0.z ) ),
        px1.y.sub( px0.y ).sub( py1.x.sub( py0.x ) ),
      ).div( e.mul( 2.0 ) );

      return wind
        .add( curl.mul( u.turbulence ) )
        .add( vec3( 0.0, u.buoyancy, 0.0 ) );
    } );

    // -------------------------------------------------------------------------
    // PASS 1 — ADVEKTION (A -> B), semi-Lagrange.
    // Rueckwaerts entlang v laufen und dort die alte Dichte trilinear sampeln:
    //   d_neu(x) = d_alt(x - v(x)*dt)
    // Unbedingt stabil; numerische Daempfung wirkt hier sogar als Weichzeichner.
    // -------------------------------------------------------------------------
    this._advectPass = Fn( () => {

      const { x, y, z } = cellOf( instanceIndex );
      const p  = vec3( float( x ), float( y ), float( z ) ).add( 0.5 ).toVar();
      const wp = worldOf( p ).toVar();

      const vGrid = velocityAt( wp ).div( u.cellSize );      // Welt/s -> Zellen/s
      const src   = p.sub( vGrid.mul( u.dt ) ).toVar();      // Startpunkt rueckwaerts

      // edgeMask(src): was von ausserhalb kaeme, ist 0 -> Fahne verlaesst die Box.
      bufB.element( instanceIndex ).assign( sampleA( src ).mul( edgeMask( src ) ) );

    } )().compute( count );

    // -------------------------------------------------------------------------
    // PASS 2 — DIFFUSION (B -> A), ein Jacobi-/Blur-Schritt.
    // Zelle Richtung Mittel der 6 Nachbarn blenden. k wird auf 60 fps normiert,
    // damit der Look nicht von der Framerate abhaengt. In Luft real ~0 — hier
    // nur ein Hauch fuer weiche Kanten (diffusion=0 => reine Kopie B->A).
    // -------------------------------------------------------------------------
    this._diffusePass = Fn( () => {

      const { x, y, z } = cellOf( instanceIndex );
      const xi = int( x ).toVar(), yi = int( y ).toVar(), zi = int( z ).toVar();

      const xm = max( xi.sub( 1 ), 0 ),     ym = max( yi.sub( 1 ), 0 ),     zm = max( zi.sub( 1 ), 0 );
      const xp = min( xi.add( 1 ), N - 1 ), yp = min( yi.add( 1 ), N - 1 ), zp = min( zi.add( 1 ), N - 1 );

      const at = ( a, b, c ) => bufB.element( flatIndex( a, b, c ) );

      const center = bufB.element( instanceIndex );
      const avg = at( xm, yi, zi ).add( at( xp, yi, zi ) )
        .add( at( xi, ym, zi ) ).add( at( xi, yp, zi ) )
        .add( at( xi, yi, zm ) ).add( at( xi, yi, zp ) )
        .div( 6.0 );

      // Auf 60 fps normiert, aber hart bei 0.5 gedeckelt — sonst flutet ein
      // einziger langsamer Frame (grosses dt) das ganze Volumen mit Blur.
      const k = u.diffusion.mul( u.dt.mul( 60.0 ) ).clamp( 0.0, 0.5 );
      bufA.element( instanceIndex ).assign( center.mix( avg, k ) );

    } )().compute( count );

    // -------------------------------------------------------------------------
    // PASS 3 — DISSIPATION + INJECTION (A in-place; rein zellenlokal).
    // Dissipation: d *= exp(-decay*dt)  (frameraten-unabhaengiges Verblassen).
    // Injection:   gaussfoermig um sourcePosition (kontinuierlich, Rate/s)
    //              plus optionaler Einmal-Impuls von inject().
    // -------------------------------------------------------------------------
    this._injectPass = Fn( () => {

      const { x, y, z } = cellOf( instanceIndex );
      const p  = vec3( float( x ), float( y ), float( z ) ).add( 0.5 );
      const wp = worldOf( p ).toVar();

      const d = bufA.element( instanceIndex ).toVar();

      // Dissipation ("Verblassen")
      d.mulAssign( u.decay.mul( u.dt ).negate().exp() );

      // Kontinuierliche Quelle
      const rs = wp.sub( u.sourcePosition ).div( u.sourceRadius ).toVar();
      d.addAssign( rs.dot( rs ).negate().exp().mul( u.injectionRate ).mul( u.dt ) );

      // Einmal-Impuls (inject()); impulseAmount wird JS-seitig nach dem Frame genullt.
      const ri = wp.sub( u.impulsePosition ).div( u.impulseRadius ).toVar();
      d.addAssign( ri.dot( ri ).negate().exp().mul( u.impulseAmount ) );

      const dFinal = d.min( u.maxDensity ).toVar();
      bufA.element( instanceIndex ).assign( dFinal );

      // "Publish": Frame-Ergebnis zusaetzlich in die 3D-Textur schreiben,
      // damit das Raymarching hardware-gefiltert sampeln kann (nur WebGPU).
      if ( useTex3D ) {
        textureStore( this._densityTex, ivec3( int( x ), int( y ), int( z ) ), vec4( dFinal ) );
      }

    } )().compute( count );

    // Feld auf 0 setzen (fuer clear()).
    this._clearPass = Fn( () => {
      bufA.element( instanceIndex ).assign( 0.0 );
      bufB.element( instanceIndex ).assign( 0.0 );
      if ( useTex3D ) {
        const { x, y, z } = cellOf( instanceIndex );
        textureStore( this._densityTex, ivec3( int( x ), int( y ), int( z ) ), vec4( 0.0 ) );
      }
    } )().compute( count );

    // -------------------------------------------------------------------------
    // RENDERING — Box-Raymarching, front-to-back Alpha-Compositing.
    // Liest immer aus Buffer A (dort landet das Frame-Ergebnis). Fuer den
    // Fragment-Shader read-only binden (WGSL erlaubt kein read_write im Fragment).
    // -------------------------------------------------------------------------
    // Dichte-Sampling fuers Raymarching, an Gitterposition gp (Zellkoordinaten):
    //  - WebGPU:  3D-Textur, hardware-trilinear, explizites LOD 0 (sampleLevel —
    //             Pflicht, weil wir in einer Schleife mit Break sampeln).
    //  - WebGL2:  manuelles trilineares Sampling aus dem Storage-Buffer.
    //             Achtung: toReadOnly() mutiert den Node (kein Klon) — deshalb
    //             ein eigener Storage-Node ueber DASSELBE Attribut nur fuers Lesen.
    let sampleR;
    if ( useTex3D ) {
      const tex = this._densityTex;
      sampleR = ( gp ) => texture3D( tex, gp.div( N ), 0 ).r;
    } else {
      const renderBuf = storage( bufA.value, 'float', count );
      renderBuf.toReadOnly?.();
      if ( ! this.isWebGPU ) renderBuf.setPBO?.( true );
      sampleR = makeSampler( renderBuf );
    }

    const raymarch = Fn( () => {

      // Ray in Weltkoordinaten: Kamera -> Fragment auf der Boxoberflaeche.
      const ro = cameraPosition.toVar();
      const rd = positionWorld.sub( cameraPosition ).normalize().toVar();

      // Slab-Test gegen die Volumen-AABB -> Eintritts-/Austrittsdistanz.
      const inv  = vec3( 1.0 ).div( rd ).toVar();
      const tA   = u.volMin.sub( ro ).mul( inv );
      const tB   = u.volMax.sub( ro ).mul( inv );
      const tMin = min( tA, tB ), tMax = max( tA, tB );
      const tIn  = tMin.x.max( tMin.y ).max( tMin.z ).max( 0.0 ).toVar();
      const tOut = tMax.x.min( tMax.y ).min( tMax.z ).toVar();

      const stepLen = tOut.sub( tIn ).max( 0.0 ).div( u.steps ).toVar();

      // Start-Jitter pro Pixel gegen Banding (billiger Screen-Space-Hash).
      const jitter = screenCoordinate.x.mul( 12.9898 )
        .add( screenCoordinate.y.mul( 78.233 ) )
        .sin().mul( 43758.5453 ).fract();

      const t     = tIn.add( stepLen.mul( jitter ) ).toVar();
      const acc   = vec3( 0.0 ).toVar();     // vor-multiplizierte Farbe
      const trans = float( 1.0 ).toVar();    // Transmission (Restdurchlaessigkeit)

      // Licht-Schrittvektor in Gitterkoordinaten (fuer die Schatten-Taps).
      const lStep = u.lightDirection.mul( u.lightStep ).div( u.cellSize ).toVar();

      Loop( MAX_STEPS, ( { i } ) => {

        If(
          float( i ).greaterThanEqual( u.steps )
            .or( t.greaterThan( tOut ) )
            .or( trans.lessThan( 0.01 ) ),      // frueh raus, wenn schon opak
          () => { Break(); },
        );

        const wp = ro.add( rd.mul( t ) );
        const gp = wp.sub( u.volMin ).div( u.cellSize ).toVar();

        const d = sampleR( gp ).mul( edgeMask( gp ) ).mul( u.densityScale ).toVar();

        If( d.greaterThan( 0.001 ), () => {

          // Beer-Lambert: Deckkraft dieses Segments.
          const a = float( 1.0 ).sub( d.mul( u.absorption ).mul( stepLen ).negate().exp() ).toVar();

          // Optionales Single-Scattering: kurzer Marsch Richtung Licht,
          // akkumulierte optische Dichte -> Selbstabschattung.
          const light = float( 1.0 ).toVar();
          If( u.scattering.greaterThan( 0.001 ), () => {
            let od = float( 0.0 );
            for ( let s = 1; s <= LIGHT_STEPS; s ++ ) {
              const lp = gp.add( lStep.mul( s ) );
              od = od.add( sampleR( lp ).mul( edgeMask( lp ) ) );
            }
            const shade = od.mul( u.densityScale ).mul( u.absorption )
              .mul( u.lightStep ).negate().exp();
            light.assign( float( 1.0 ).mix( shade, u.scattering ) );
          } );

          // Monochrome Wolke: Akzentfarbe, moduliert von ambient..1 durch das Licht.
          const col = u.color.mul( u.ambient.add( light.mul( float( 1.0 ).sub( u.ambient ) ) ) );

          // Front-to-back Compositing.
          acc.addAssign( col.mul( a.mul( trans ) ) );
          trans.mulAssign( float( 1.0 ).sub( a ) );
        } );

        t.addAssign( stepLen );
      } );

      const alpha = float( 1.0 ).sub( trans );
      // Vor-multiplizierte Farbe zurueck in "straight alpha" fuer normales Blending.
      return vec4( acc.div( alpha.max( 1e-4 ) ), alpha );
    } );

    const material = new MeshBasicNodeMaterial();
    material.colorNode  = raymarch();
    material.transparent = true;
    material.side        = THREE.FrontSide;
    material.depthWrite  = false;
    material.fog         = false;
    material.name        = 'SmellVolumeMaterial';

    this.mesh.material?.dispose();
    this.mesh.material = material;

    this._needsClearReset = false;
  }

  // ---------------------------------------------------------------------------
  // Frame-Update: Uniforms aktualisieren und die drei Compute-Paesse dispatchen.
  // Kein Readback — alles bleibt auf der GPU.
  // ---------------------------------------------------------------------------
  update( dt ) {

    const u = this.uniforms;
    const p = this.params;

    // Grosse dt-Spruenge (Tab-Wechsel etc.) klemmen — semi-Lagrange bliebe zwar
    // stabil, aber Injection/Dissipation wuerden sichtbar springen.
    dt = Math.min( Math.max( dt, 0 ), 1 / 30 );
    u.dt.value = dt;

    // Curl-Feld mit dem Wind mitschieben (Turbulenz "schwimmt" in der Stroemung),
    // plus langsames Eigenleben in Y, damit auch bei Windstille etwas passiert.
    this._noiseOffset.addScaledVector( p.windDirection, - p.windStrength * p.noiseScale * dt * 0.7 );
    this._noiseOffset.y -= dt * 0.12;
    u.noiseOffset.value.copy( this._noiseOffset );

    // 1. Advektion (A -> B)   2. Diffusion (B -> A)   3. Dissipation+Injection (A)
    this.renderer.compute( this._advectPass );
    this.renderer.compute( this._diffusePass );
    this.renderer.compute( this._injectPass );

    // Einmal-Impuls ist verbraucht.
    if ( u.impulseAmount.value !== 0 ) u.impulseAmount.value = 0;
  }

  // Einmalige Dichte-Injektion (z.B. "Puff" beim Klick).
  inject( worldPos, amount = 1.0, radius ) {
    const u = this.uniforms;
    u.impulsePosition.value.copy( worldPos );
    u.impulseRadius.value = radius ?? this.params.sourceRadius * 1.6;
    u.impulseAmount.value += amount;
  }

  setWind( direction, strength ) {
    if ( direction !== undefined ) {
      this.params.windDirection.copy( direction ).normalize();
      this.uniforms.windDirection.value.copy( this.params.windDirection );
    }
    if ( strength !== undefined ) {
      this.params.windStrength = strength;
      this.uniforms.windStrength.value = strength;
    }
  }

  setSource( worldPos ) {
    this.params.sourcePosition.copy( worldPos );
    this.uniforms.sourcePosition.value.copy( worldPos );
  }

  // Feld leeren (dispatcht einen Clear-Pass beim naechsten Aufruf sofort).
  clear() {
    this.renderer.compute( this._clearPass );
  }

  // ---------------------------------------------------------------------------
  // Zentrale Parameter-Schnittstelle. gridResolution loest einen Rebuild aus
  // (neue Buffer + Shader), alles andere sind reine Uniform-Updates.
  // ---------------------------------------------------------------------------
  setParams( opts = {} ) {

    const u = this.uniforms;
    const p = this.params;

    let rebuild = false;

    for ( const [ key, value ] of Object.entries( opts ) ) {
      switch ( key ) {

        case 'gridResolution':
          if ( value !== p.gridResolution ) { p.gridResolution = value; rebuild = true; }
          break;

        case 'raymarchSteps':
          p.raymarchSteps = Math.min( value, MAX_STEPS );
          u.steps.value = p.raymarchSteps;
          break;

        case 'color':
          p.color = value;
          u.color.value.set( value );
          break;

        case 'windDirection':  this.setWind( value, undefined ); break;
        case 'windStrength':   this.setWind( undefined, value ); break;
        case 'sourcePosition': this.setSource( value ); break;

        case 'lightDirection':
          p.lightDirection.copy( value ).normalize();
          u.lightDirection.value.copy( p.lightDirection );
          break;

        case 'center':
        case 'size':
          p[ key ].copy( value );
          this._syncVolumeTransform();
          break;

        default:
          // Skalare 1:1 auf gleichnamige Uniforms (turbulence, diffusion, decay,
          // injectionRate, densityScale, absorption, scattering, ambient, ...).
          if ( key in p ) p[ key ] = value;
          if ( u[ key ] !== undefined && typeof value === 'number' ) u[ key ].value = value;
          break;
      }
    }

    if ( rebuild ) {
      this._build();
      this._syncVolumeTransform();
    }
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.mesh.material?.dispose();
    this.mesh.removeFromParent();
    this._densityTex?.dispose();
    this._densityTex = null;
    // Storage-Attribute dem Renderer/GC ueberlassen; Referenzen kappen.
    this._densityA = this._densityB = null;
    this._advectPass = this._diffusePass = this._injectPass = this._clearPass = null;
  }
}
