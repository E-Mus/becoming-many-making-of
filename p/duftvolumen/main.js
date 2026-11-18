// main.js
// -----------------------------------------------------------------------------
// Demo-Buehne fuer SmellVolume: schlichte, sehr helle Welt (weisser Fog, weisser
// Boden, prozedurale Low-Poly-Pflanzen in Weiss/Hellgrau) mit einer sichtbaren
// Geruchsquelle an einer Pflanze, aus der die volumetrische Wolke aufsteigt.
// lil-gui-Panel fuer alle regelbaren Parameter. WebGPU mit automatischem
// WebGL-Fallback (+ forceWebGL via ?webgl).
// -----------------------------------------------------------------------------

import * as THREE from 'three';
import { WebGPURenderer } from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { SmellVolume } from './SmellVolume.js';

// forceWebGL-Schalter zum Testen des Fallbacks: ?webgl in der URL.
const forceWebGL = new URLSearchParams( location.search ).has( 'webgl' );

// Quelle sitzt an der Traegerpflanze; Volumen-Box haengt leicht in Windrichtung.
const SOURCE = new THREE.Vector3( -1.6, 1.35, 0.4 );

let renderer, scene, camera, controls, volume, gui, clock;

init();

async function init() {

  // --- Renderer (WebGPU, faellt automatisch auf WebGL zurueck) ----------------
  renderer = new WebGPURenderer( { antialias: true, forceWebGL } );
  renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xe7e7ee, 1 );
  document.body.appendChild( renderer.domElement );

  await renderer.init();   // WICHTIG: asynchrones Setup abwarten

  // WebGPU-Validierungsfehler sichtbar machen (WGSL-Compile-Fehler etc.).
  renderer.backend?.device?.addEventListener?.( 'uncapturederror', ( e ) => {
    ( window.__gpuErrs ??= [] ).push( String( e.error?.message ) );
    console.error( 'WebGPU:', e.error?.message );
  } );

  // --- Szene: helle, reduzierte Welt ------------------------------------------
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xe7e7ee );
  scene.fog = new THREE.FogExp2( 0xe7e7ee, 0.028 );

  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 300 );
  camera.position.set( 8.5, 4.6, 9.5 );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( SOURCE.x + 1.0, SOURCE.y + 2.2, SOURCE.z );
  controls.enableDamping = true;
  controls.autoRotateSpeed = 0.5;
  // Kamera aus der Volumen-Box heraushalten (FrontSide-Raymarching).
  controls.minDistance = 7.5;
  controls.maxDistance = 40;
  controls.maxPolarAngle = Math.PI * 0.52;
  controls.update();

  // Licht: weiche, helle Ausleuchtung, damit die weisse Geometrie leicht liest.
  scene.add( new THREE.HemisphereLight( 0xffffff, 0xd7d7e0, 1.15 ) );
  const dir = new THREE.DirectionalLight( 0xffffff, 1.35 );
  dir.position.set( 4, 8, 5 );
  scene.add( dir );

  buildWorld();

  // --- Volumetrische Geruchswolke ---------------------------------------------
  volume = new SmellVolume( renderer, {
    center: new THREE.Vector3( SOURCE.x + 1.6, 4.3, SOURCE.z + 0.6 ),
    size:   new THREE.Vector3( 9.5, 8.2, 7.5 ),
    sourcePosition: SOURCE,
    windDirection:  new THREE.Vector3( 1, 0.1, 0.3 ),
    // Licht der Wolke grob an das DirectionalLight der Buehne angelehnt.
    lightDirection: dir.position.clone().normalize(),
  } );
  scene.add( volume.mesh );

  buildGUI();
  updateBadge();

  window.addEventListener( 'resize', onResize );
  clock = new THREE.Clock();
  renderer.setAnimationLoop( animate );

  // Fuer Debugging/Konsole.
  window.__demo = { renderer, scene, camera, volume, THREE };
}

// -----------------------------------------------------------------------------
// Prozedurale Low-Poly-Welt (alles im Code, keine externen Modelle)
// -----------------------------------------------------------------------------
function buildWorld() {

  // Boden: grosse helle Kreisflaeche.
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry( 60, 64 ),
    new THREE.MeshStandardMaterial( { color: 0xf1f1f5, roughness: 0.95, metalness: 0.0 } ),
  );
  ground.rotation.x = - Math.PI / 2;
  scene.add( ground );

  // Pflanzen/Baeume locker verteilt (deterministischer Pseudo-Zufall).
  const rng = mulberry32( 30260707 );
  for ( let i = 0; i < 18; i ++ ) {
    const a = rng() * Math.PI * 2;
    const r = 4.5 + rng() * 16;
    const x = Math.cos( a ) * r;
    const z = Math.sin( a ) * r;
    const s = 0.7 + rng() * 1.5;
    scene.add( makePlant( x, z, s, rng ) );
  }

  // Traegerpflanze direkt an der Quelle (etwas groesser, klar sichtbar).
  scene.add( makePlant( SOURCE.x, SOURCE.z, 1.2, rng ) );

  // Sichtbare Geruchsquelle: kleines, leicht leuchtendes Objekt am source-Punkt.
  const emitter = new THREE.Mesh(
    new THREE.IcosahedronGeometry( 0.12, 0 ),
    new THREE.MeshStandardMaterial( {
      color: 0x8fd0ff, emissive: 0x6a3cff, emissiveIntensity: 0.9, roughness: 0.5,
    } ),
  );
  emitter.position.copy( SOURCE );
  scene.add( emitter );

  // Kleine Schale/Sockel unter der Quelle.
  const bowl = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.17, 0.24, 0.12, 8 ),
    new THREE.MeshStandardMaterial( { color: 0xdedee6, roughness: 0.9 } ),
  );
  bowl.position.set( SOURCE.x, SOURCE.y - 0.14, SOURCE.z );
  scene.add( bowl );
}

// Eine Pflanze: getaperter Stamm (Zylinder) + wenige Icosahedron-/Cone-Kronen.
function makePlant( x, z, scale, rng ) {
  const g = new THREE.Group();
  g.position.set( x, 0, z );
  g.scale.setScalar( scale );
  g.rotation.y = rng() * Math.PI * 2;

  const trunkMat = new THREE.MeshStandardMaterial( { color: 0xcfcfd8, roughness: 0.95 } );
  const leafMat  = new THREE.MeshStandardMaterial( { color: 0xf4f4f8, roughness: 0.9, flatShading: true } );

  const trunkH = 1.1 + rng() * 0.6;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.05, 0.09, trunkH, 6 ),
    trunkMat,
  );
  trunk.position.y = trunkH / 2;
  g.add( trunk );

  const clusters = 2 + Math.floor( rng() * 2 );
  for ( let i = 0; i < clusters; i ++ ) {
    const useCone = rng() > 0.55;
    const rad = 0.32 + rng() * 0.28;
    const geo = useCone
      ? new THREE.ConeGeometry( rad, rad * 1.8, 6 )
      : new THREE.IcosahedronGeometry( rad, 0 );
    const leaf = new THREE.Mesh( geo, leafMat );
    leaf.position.set(
      ( rng() - 0.5 ) * 0.5,
      trunkH + rng() * 0.7,
      ( rng() - 0.5 ) * 0.5,
    );
    leaf.rotation.set( rng() * 0.4, rng() * Math.PI, rng() * 0.4 );
    g.add( leaf );
  }
  return g;
}

// -----------------------------------------------------------------------------
// GUI + Backend-Badge
// -----------------------------------------------------------------------------
function updateBadge() {
  const badge = document.getElementById( 'badge' );
  // Nur den Text-Knoten ersetzen — #fps-Span im Badge muss erhalten bleiben.
  badge.firstChild.textContent = 'Backend: ' + volume.backendName + ( forceWebGL ? ' (forced)' : '' );
  badge.classList.toggle( 'webgl', ! volume.isWebGPU );
  if ( ! volume.isWebGPU ) {
    document.getElementById( 'warn' ).style.display = 'block';
  }
}

function buildGUI() {

  gui = new GUI( { title: 'SmellVolume' } );
  const p = volume.params;

  const info = {
    backend: volume.backendName + ( forceWebGL ? ' (forced)' : '' ),
    grid: `${ p.gridResolution }^3 = ${ ( p.gridResolution ** 3 ).toLocaleString() } Zellen`,
  };
  gui.add( info, 'backend' ).name( 'Backend' ).disable();
  const gridInfo = gui.add( info, 'grid' ).name( 'Gitter' ).disable();

  // --- Wind / Stroemung --------------------------------------------------------
  const wind = { x: p.windDirection.x, y: p.windDirection.y, z: p.windDirection.z };
  const setWind = () => volume.setWind( new THREE.Vector3( wind.x, wind.y, wind.z ) );
  const fWind = gui.addFolder( 'Wind & Turbulenz' );
  fWind.add( p, 'windStrength', 0, 3, 0.01 ).name( 'Windstaerke' )
    .onChange( v => volume.setParams( { windStrength: v } ) );
  fWind.add( wind, 'x', -1, 1, 0.01 ).name( 'Richtung X' ).onChange( setWind );
  fWind.add( wind, 'y', -1, 1, 0.01 ).name( 'Richtung Y' ).onChange( setWind );
  fWind.add( wind, 'z', -1, 1, 0.01 ).name( 'Richtung Z' ).onChange( setWind );
  fWind.add( p, 'turbulence', 0, 4, 0.01 ).name( 'Turbulenz (Curl)' )
    .onChange( v => volume.setParams( { turbulence: v } ) );
  fWind.add( p, 'noiseScale', 0.05, 1.5, 0.01 ).name( 'Noise-Scale' )
    .onChange( v => volume.setParams( { noiseScale: v } ) );
  fWind.add( p, 'buoyancy', -1, 2, 0.01 ).name( 'Auftrieb' )
    .onChange( v => volume.setParams( { buoyancy: v } ) );

  // --- Feld-Dynamik -------------------------------------------------------------
  const fField = gui.addFolder( 'Feld (Sim-Schritte)' );
  fField.add( p, 'diffusion', 0, 0.5, 0.005 ).name( 'Diffusion' )
    .onChange( v => volume.setParams( { diffusion: v } ) );
  fField.add( p, 'decay', 0, 2, 0.01 ).name( 'Dissipation (decay/s)' )
    .onChange( v => volume.setParams( { decay: v } ) );
  fField.add( p, 'injectionRate', 0, 50, 0.1 ).name( 'Injektionsrate' )
    .onChange( v => volume.setParams( { injectionRate: v } ) );
  fField.add( p, 'sourceRadius', 0.1, 1.5, 0.01 ).name( 'Quellradius' )
    .onChange( v => volume.setParams( { sourceRadius: v } ) );
  fField.add( { puff: () => volume.inject( SOURCE, 2.5 ) }, 'puff' ).name( 'Puff! (inject)' );
  fField.add( { clear: () => volume.clear() }, 'clear' ).name( 'Feld leeren' );

  // --- Erscheinung ---------------------------------------------------------------
  const fLook = gui.addFolder( 'Erscheinung' );
  fLook.addColor( p, 'color' ).name( 'Farbe (Akzent)' )
    .onChange( v => volume.setParams( { color: v } ) );
  fLook.add( p, 'densityScale', 0, 4, 0.01 ).name( 'Dichte-Skalierung' )
    .onChange( v => volume.setParams( { densityScale: v } ) );
  fLook.add( p, 'absorption', 0.5, 20, 0.1 ).name( 'Absorption' )
    .onChange( v => volume.setParams( { absorption: v } ) );
  fLook.add( p, 'scattering', 0, 1, 0.01 ).name( 'Scattering (Licht)' )
    .onChange( v => volume.setParams( { scattering: v } ) );
  fLook.add( p, 'ambient', 0, 1, 0.01 ).name( 'Ambient' )
    .onChange( v => volume.setParams( { ambient: v } ) );

  // --- Performance ----------------------------------------------------------------
  const fPerf = gui.addFolder( 'Performance' );
  fPerf.add( p, 'raymarchSteps', 16, 256, 1 ).name( 'Raymarch-Steps' )
    .onChange( v => volume.setParams( { raymarchSteps: v } ) );
  fPerf.add( { grid: p.gridResolution }, 'grid',
    { '32^3': 32, '48^3': 48, '64^3': 64, '96^3': 96, '128^3': 128 } )
    .name( 'Grid-Aufloesung' )
    .onChange( v => {
      volume.setParams( { gridResolution: Number( v ) } );
      info.grid = `${ v }^3 = ${ ( Number( v ) ** 3 ).toLocaleString() } Zellen`;
      gridInfo.updateDisplay();
    } );

  const view = { forceWebGL, autoRotate: false, paused: false };
  fPerf.add( view, 'forceWebGL' ).name( 'forceWebGL (reload)' ).onChange( v => {
    const url = new URL( location.href );
    if ( v ) url.searchParams.set( 'webgl', '1' ); else url.searchParams.delete( 'webgl' );
    location.href = url.toString();
  } );
  fPerf.add( view, 'autoRotate' ).name( 'Auto-Rotation' )
    .onChange( v => { controls.autoRotate = v; } );
  fPerf.add( view, 'paused' ).name( 'Sim pausieren' );

  gui._view = view;
}

// -----------------------------------------------------------------------------
let fpsTime = 0, fpsFrames = 0;

function animate() {
  const dt = clock.getDelta();
  controls.update();

  if ( ! gui._view.paused ) volume.update( dt );   // 3 Compute-Paesse, kein Readback
  renderer.render( scene, camera );

  // Simple FPS-Anzeige im Badge (alle 0.5 s).
  fpsFrames ++; fpsTime += dt;
  if ( fpsTime >= 0.5 ) {
    document.getElementById( 'fps' ).textContent = ( fpsFrames / fpsTime ).toFixed( 0 ) + ' fps';
    fpsTime = 0; fpsFrames = 0;
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

// Deterministischer PRNG fuer reproduzierbare Buehnen-Layouts.
function mulberry32( a ) {
  return function () {
    a |= 0; a = ( a + 0x6D2B79F5 ) | 0;
    let t = Math.imul( a ^ ( a >>> 15 ), 1 | a );
    t = ( t + Math.imul( t ^ ( t >>> 7 ), 61 | t ) ) ^ t;
    return ( ( t ^ ( t >>> 14 ) ) >>> 0 ) / 4294967296;
  };
}
