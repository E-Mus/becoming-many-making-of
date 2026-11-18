// main.js
// -----------------------------------------------------------------------------
// Demo-Buehne fuer SmellPlume: schlichte, sehr helle Welt (weisser Fog, weisser
// Boden, prozedurale Low-Poly-Pflanzen in Weiss/Hellgrau) mit einer sichtbaren
// Geruchsquelle, aus der die farbige Fahne aufsteigt. lil-gui-Panel fuer alle
// regelbaren Parameter. WebGPU mit automatischem WebGL-Fallback (+ forceWebGL).
// -----------------------------------------------------------------------------

import * as THREE from 'three';
import { WebGPURenderer } from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { SmellPlume } from './SmellPlume.js';

// forceWebGL-Schalter zum Testen des Fallbacks: ?webgl in der URL.
const forceWebGL = new URLSearchParams( location.search ).has( 'webgl' );

const SOURCE = new THREE.Vector3( -2.4, 1.15, 0.6 );

let renderer, scene, camera, controls, plume, gui, clock;

init();

async function init() {
  // --- Renderer (WebGPU, faellt automatisch auf WebGL zurueck) ----------------
  renderer = new WebGPURenderer( { antialias: true, forceWebGL } );
  renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xe7e7ee, 1 );
  document.body.appendChild( renderer.domElement );

  await renderer.init();   // WICHTIG: asynchrones Setup abwarten

  // --- Szene: helle, reduzierte Welt ------------------------------------------
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xe7e7ee );
  scene.fog = new THREE.FogExp2( 0xe7e7ee, 0.03 );   // weiter weisser Fog

  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 300 );
  camera.position.set( 5.5, 3.4, 7.5 );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( SOURCE.x, SOURCE.y + 1.0, SOURCE.z );
  controls.enableDamping = true;
  controls.autoRotateSpeed = 0.6;
  controls.update();

  // Licht: weiche, helle Ausleuchtung, damit die weisse Geometrie leicht liest.
  scene.add( new THREE.HemisphereLight( 0xffffff, 0xd7d7e0, 1.15 ) );
  const dir = new THREE.DirectionalLight( 0xffffff, 1.35 );
  dir.position.set( 4, 8, 5 );
  scene.add( dir );

  buildWorld();

  // --- Geruchsfahne -----------------------------------------------------------
  plume = new SmellPlume( scene, renderer, {
    particleCount: 200000,
    source: SOURCE,
    windDirection: new THREE.Vector3( 1, 0.12, 0.35 ),
    // Demo-Buehne ist fast weiss: 'normal'-Blending laesst die farbige Fahne
    // klar heraustreten (additiv wuerde auf hellem Grund verblassen). Im Panel
    // umschaltbar; der Modul-Default bleibt additiv wie in der Spec.
    blending: 'normal',
    intensity: 1.0,
    opacity: 0.5,
  } );

  buildGUI();

  // WebGL2 kennt keine Compute-Shader: der WebGPURenderer rendert die Buehne,
  // treibt die Simulation dort aber nicht an. Ehrlicher Hinweis statt einer
  // scheinbar eingefrorenen Fahne.
  if ( ! plume.isWebGPU ) {
    const hint = document.getElementById( 'hint' );
    hint.innerHTML = '<b>WebGL-Fallback aktiv.</b> Die Buehne rendert, aber die ' +
      'GPU-Simulation (Compute) benoetigt <b>WebGPU</b> — die Fahne steht still. ' +
      'Fuer die animierte Simulation einen WebGPU-Browser nutzen.';
  }

  window.addEventListener( 'resize', onResize );
  clock = new THREE.Clock();
  renderer.setAnimationLoop( animate );
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
  const rng = mulberry32( 20260707 );
  const placed = [];
  for ( let i = 0; i < 16; i ++ ) {
    const a = rng() * Math.PI * 2;
    const r = 3 + rng() * 16;
    const x = Math.cos( a ) * r;
    const z = Math.sin( a ) * r;
    const s = 0.7 + rng() * 1.5;
    scene.add( makePlant( x, z, s, rng ) );
    placed.push( new THREE.Vector3( x, 0, z ) );
  }

  // Traegerpflanze direkt an der Quelle (etwas groesser, klar sichtbar).
  scene.add( makePlant( SOURCE.x, SOURCE.z, 1.15, rng ) );

  // Sichtbare Geruchsquelle: kleines, leicht leuchtendes Objekt am source-Punkt.
  const emitter = new THREE.Mesh(
    new THREE.IcosahedronGeometry( 0.11, 0 ),
    new THREE.MeshStandardMaterial( {
      color: 0x8fd0ff, emissive: 0x6a3cff, emissiveIntensity: 0.9, roughness: 0.5,
    } ),
  );
  emitter.position.copy( SOURCE );
  scene.add( emitter );

  // Kleine Schale/Sockel unter der Quelle.
  const bowl = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.16, 0.22, 0.12, 8 ),
    new THREE.MeshStandardMaterial( { color: 0xdedee6, roughness: 0.9 } ),
  );
  bowl.position.set( SOURCE.x, SOURCE.y - 0.12, SOURCE.z );
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

  // 2-3 Kronen-Cluster: Mischung aus Icosahedron (buschig) und Cone (spitz).
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
// GUI
// -----------------------------------------------------------------------------
function buildGUI() {
  gui = new GUI( { title: 'SmellPlume' } );

  const p = plume.params;

  // Backend-Anzeige (WebGPU vs WebGL) + aktive Partikelzahl.
  const info = {
    backend: plume.backendName + ( forceWebGL ? ' (forced)' : '' ),
    active: plume.count.toLocaleString(),
  };
  gui.add( info, 'backend' ).name( 'Backend' ).disable();
  const activeCtrl = gui.add( info, 'active' ).name( 'Partikel aktiv' ).disable();

  const wind = { x: p.windDirection.x, y: p.windDirection.y, z: p.windDirection.z };
  const setWind = () => plume.setWind( new THREE.Vector3( wind.x, wind.y, wind.z ) );
  const fWind = gui.addFolder( 'Wind' );
  fWind.add( p, 'windStrength', 0, 3, 0.01 ).name( 'Staerke' )
    .onChange( v => plume.setParams( { windStrength: v } ) );
  fWind.add( wind, 'x', -1, 1, 0.01 ).name( 'Richtung X' ).onChange( setWind );
  fWind.add( wind, 'y', -1, 1, 0.01 ).name( 'Richtung Y' ).onChange( setWind );
  fWind.add( wind, 'z', -1, 1, 0.01 ).name( 'Richtung Z' ).onChange( setWind );

  const fTurb = gui.addFolder( 'Turbulenz & Kraefte' );
  fTurb.add( p, 'turbulence', 0, 4, 0.01 ).name( 'Turbulenz (Curl)' )
    .onChange( v => plume.setParams( { turbulence: v } ) );
  fTurb.add( p, 'noiseScale', 0.02, 1.5, 0.01 ).name( 'Noise-Scale' )
    .onChange( v => plume.setParams( { noiseScale: v } ) );
  fTurb.add( p, 'buoyancy', -1, 3, 0.01 ).name( 'Auftrieb' )
    .onChange( v => plume.setParams( { buoyancy: v } ) );
  fTurb.add( p, 'drag', 0.8, 1.0, 0.001 ).name( 'Drag' )
    .onChange( v => plume.setParams( { drag: v } ) );

  const fLife = gui.addFolder( 'Lebenszyklus' );
  fLife.add( p, 'maxLife', 1, 16, 0.1 ).name( 'Max. Lebensdauer' )
    .onChange( v => plume.setParams( { maxLife: v } ) );
  fLife.add( p, 'emissionRate', 0, 3, 0.01 ).name( 'Emissionsrate' )
    .onChange( v => plume.setParams( { emissionRate: v } ) );

  const fLook = gui.addFolder( 'Erscheinung' );
  fLook.add( p, 'baseSize', 0.02, 0.5, 0.005 ).name( 'Basisgroesse' )
    .onChange( v => plume.setParams( { baseSize: v } ) );
  fLook.add( p, 'intensity', 0, 3, 0.01 ).name( 'Intensitaet' )
    .onChange( v => plume.setParams( { intensity: v } ) );
  fLook.add( p, 'opacity', 0, 1, 0.01 ).name( 'Deckkraft' )
    .onChange( v => plume.setParams( { opacity: v } ) );
  fLook.addColor( p, 'color1' ).name( 'Farbe jung' )
    .onChange( v => plume.setParams( { color1: v } ) );
  fLook.addColor( p, 'color2' ).name( 'Farbe alt' )
    .onChange( v => plume.setParams( { color2: v } ) );
  fLook.add( p, 'blending', { Additiv: 'additive', Normal: 'normal' } ).name( 'Blending' )
    .onChange( v => plume.setParams( { blending: v } ) );

  const fPerf = gui.addFolder( 'Performance' );
  fPerf.add( { count: plume._requestedCount }, 'count',
    { '50k': 50000, '100k': 100000, '200k': 200000, '400k': 400000 } )
    .name( 'Partikelzahl' )
    .onChange( v => {
      plume.setParams( { particleCount: Number( v ) } );
      info.active = plume.count.toLocaleString();
      activeCtrl.updateDisplay();
    } );

  const view = { forceWebGL, autoRotate: false };
  fPerf.add( view, 'forceWebGL' ).name( 'forceWebGL (reload)' ).onChange( v => {
    const url = new URL( location.href );
    if ( v ) url.searchParams.set( 'webgl', '1' ); else url.searchParams.delete( 'webgl' );
    location.href = url.toString();
  } );
  fPerf.add( view, 'autoRotate' ).name( 'Auto-Rotation' )
    .onChange( v => { controls.autoRotate = v; } );
}

// -----------------------------------------------------------------------------
function animate() {
  const dt = clock.getDelta();
  controls.update();
  plume.update( dt );   // Zeit/Delta-Uniforms
  plume.compute();      // Compute-Pass dispatchen (kein Readback)
  renderer.render( scene, camera );
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
