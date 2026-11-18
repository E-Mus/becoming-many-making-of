import * as THREE from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { U, PALETTES } from './senses.js';
import { buildWorld, heightAt } from './world.js';

const errBox = document.getElementById('err');
window.addEventListener('error', (e) => { errBox.textContent = String(e.message); });

// ---------------------------------------------------------------- Renderer
const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 600);
camera.position.set(20, 9, 26);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 2, 4);
controls.enableDamping = true;
controls.maxDistance = 160;

// ---------------------------------------------------------------- Licht
const sun = new THREE.DirectionalLight('#fff2dd', 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -70; sun.shadow.camera.right = 70;
sun.shadow.camera.top = 70; sun.shadow.camera.bottom = -70;
sun.shadow.camera.far = 300;
sun.shadow.bias = -0.001;
scene.add(sun, sun.target);
const hemi = new THREE.HemisphereLight('#bcd8ff', '#3a4a2a', 0.5);
scene.add(hemi);

scene.fog = new THREE.Fog('#87b5e0', 60, 260);

// ---------------------------------------------------------------- Welt
const world = buildWorld(scene);

// ---------------------------------------------------------------- Parameter
const P = {
  // Sinne
  visOn: true, visW: 1,
  echoOn: false, echoW: 1,
  thermOn: false, thermW: 1,
  uvOn: false, uvW: 1,

  // Sichtbares Licht
  sonnenIntensitaet: 3, umgebungslicht: 0.5, sonnenHoehe: 40, sonnenAzimut: 35,
  himmel: '#87b5e0', nebel: 0.45,

  // Echoortung
  reichweite: 70,
  tiefenkarte: 0.4, farbeNah: '#9be7ff', farbeFern: '#000010', echoFarbe: '#66f2ff',
  impulse: true, autoImpuls: true, intervall: 2.6, schallGeschw: 26,
  ringBreite: 2.2, ringStaerke: 1.4,
  nachleuchten: 0.55, nachleuchtAbfall: 0.09,
  kantenleuchten: 0.5, kantenSchaerfe: 2.5,
  objektBlinken: true, blinkStaerke: 1.6, blinkAbfall: 2.5,

  // Thermal
  palette: 'Ironbow',
  tempMin: 2, tempMax: 44, kontrast: 1, intensitaet: 1.15,
  sonnenHeizung: 7, rauschStaerke: 2.5, rauschSkala: 0.3,
  herzRate: 5, herzStaerke: 4,
  farbKalt: '#10002b', farbKuehl: '#b3005a', farbWarm: '#ff8c00', farbHeiss: '#ffffdf',

  // UV
  uvIntensitaet: 1.2,

  impulsSenden: () => { pulseStart = elapsed; },
};

function effVis() { return P.visOn ? P.visW : 0; }

function updateWeights() {
  U.visW.value = effVis();
  U.echoW.value = P.echoOn ? P.echoW : 0;
  U.thermW.value = P.thermOn ? P.thermW : 0;
  U.uvW.value = P.uvOn ? P.uvW : 0;
  sun.intensity = P.sonnenIntensitaet * effVis();
  hemi.intensity = P.umgebungslicht * effVis();
}

const _bg = new THREE.Color();
function updateSky() {
  _bg.set(P.himmel).multiplyScalar(effVis());
  scene.background = _bg;
  scene.fog.color.copy(_bg);
  scene.fog.near = THREE.MathUtils.lerp(150, 40, P.nebel);
  scene.fog.far = THREE.MathUtils.lerp(500, 140, P.nebel);
}

function updateSun() {
  const el = THREE.MathUtils.degToRad(P.sonnenHoehe);
  const az = THREE.MathUtils.degToRad(P.sonnenAzimut);
  const dir = new THREE.Vector3(
    Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)
  );
  sun.position.copy(dir).multiplyScalar(120);
  sun.target.position.set(0, 0, 0);
  U.sunDir.value.copy(dir);
}

// ---------------------------------------------------------------- GUI
const gui = new GUI({ title: 'Sinne & Welt' });

const fS = gui.addFolder('Sinne (überlagerbar)');
fS.add(P, 'visOn').name('1 · Sichtbares Licht').onChange(updateWeights);
fS.add(P, 'visW', 0, 1).name('… Stärke').onChange(updateWeights);
fS.add(P, 'echoOn').name('2 · Echoortung').onChange(updateWeights);
fS.add(P, 'echoW', 0, 1).name('… Stärke').onChange(updateWeights);
fS.add(P, 'thermOn').name('3 · Thermalsicht').onChange(updateWeights);
fS.add(P, 'thermW', 0, 1).name('… Stärke').onChange(updateWeights);
fS.add(P, 'uvOn').name('4 · UV (Fluoreszenz)').onChange(updateWeights);
fS.add(P, 'uvW', 0, 1).name('… Stärke').onChange(updateWeights);

const fL = gui.addFolder('Sichtbares Licht').close();
fL.add(P, 'sonnenIntensitaet', 0, 8).name('Sonnenintensität').onChange(updateWeights);
fL.add(P, 'umgebungslicht', 0, 2).name('Umgebungslicht').onChange(updateWeights);
fL.add(P, 'sonnenHoehe', 3, 89).name('Sonnenhöhe °').onChange(updateSun);
fL.add(P, 'sonnenAzimut', 0, 360).name('Sonnenrichtung °').onChange(updateSun);
fL.addColor(P, 'himmel').name('Himmelsfarbe');
fL.add(P, 'nebel', 0, 1).name('Nebel');

const fE = gui.addFolder('Echoortung').close();
fE.add(P, 'reichweite', 10, 160).name('Reichweite (m)').onChange(v => U.echoRange.value = v);
fE.add(P, 'tiefenkarte', 0, 1.5).name('Tiefenkarte · Stärke').onChange(v => U.echoDepthAmt.value = v);
fE.addColor(P, 'farbeNah').name('Farbe nah').onChange(v => U.echoNear.value.set(v));
fE.addColor(P, 'farbeFern').name('Farbe fern').onChange(v => U.echoFar.value.set(v));
fE.addColor(P, 'echoFarbe').name('Echo-Farbe').onChange(v => U.echoTint.value.set(v));
const fE2 = fE.addFolder('Impulse (Ping)');
fE2.add(P, 'impulse').name('Impulse aktiv');
fE2.add(P, 'autoImpuls').name('automatisch senden');
fE2.add(P, 'impulsSenden').name('▶ Impuls jetzt (Leertaste)');
fE2.add(P, 'intervall', 0.5, 8).name('Intervall (s)');
fE2.add(P, 'schallGeschw', 5, 80).name('Ausbreitung (m/s)');
fE2.add(P, 'ringBreite', 0.3, 8).name('Ringbreite').onChange(v => U.ringWidth.value = v);
fE2.add(P, 'ringStaerke', 0, 4).name('Ringhelligkeit').onChange(v => U.ringAmt.value = v);
fE2.add(P, 'nachleuchten', 0, 2).name('Nachleuchten').onChange(v => U.trailAmt.value = v);
fE2.add(P, 'nachleuchtAbfall', 0.01, 0.5).name('… Abfall/m').onChange(v => U.trailDecay.value = v);
const fE3 = fE.addFolder('Objekt-Reaktion');
fE3.add(P, 'objektBlinken').name('Objekte blinken');
fE3.add(P, 'blinkStaerke', 0, 4).name('Blink-Helligkeit').onChange(v => U.blinkAmt.value = v);
fE3.add(P, 'blinkAbfall', 0.5, 10).name('Blink-Abklingen');
fE3.add(P, 'kantenleuchten', 0, 2).name('Kantenleuchten').onChange(v => U.rimAmt.value = v);
fE3.add(P, 'kantenSchaerfe', 0.5, 8).name('… Schärfe').onChange(v => U.rimPow.value = v);

const fT = gui.addFolder('Thermalsicht').close();
const palCtrls = [];
fT.add(P, 'palette', Object.keys(PALETTES)).name('Palette').onChange(name => {
  const [c0, c1, c2, c3] = PALETTES[name];
  P.farbKalt = c0; P.farbKuehl = c1; P.farbWarm = c2; P.farbHeiss = c3;
  U.pal0.value.set(c0); U.pal1.value.set(c1); U.pal2.value.set(c2); U.pal3.value.set(c3);
  palCtrls.forEach(c => c.updateDisplay());
});
palCtrls.push(
  fT.addColor(P, 'farbKalt').name('Farbe kalt').onChange(v => U.pal0.value.set(v)),
  fT.addColor(P, 'farbKuehl').name('Farbe kühl').onChange(v => U.pal1.value.set(v)),
  fT.addColor(P, 'farbWarm').name('Farbe warm').onChange(v => U.pal2.value.set(v)),
  fT.addColor(P, 'farbHeiss').name('Farbe heiß').onChange(v => U.pal3.value.set(v)),
);
fT.add(P, 'tempMin', -20, 30).name('Skala min °C').onChange(v => U.tMin.value = v);
fT.add(P, 'tempMax', 20, 400).name('Skala max °C').onChange(v => U.tMax.value = v);
fT.add(P, 'kontrast', 0.3, 3).name('Kontrast (Gamma)').onChange(v => U.thermGamma.value = v);
fT.add(P, 'intensitaet', 0, 3).name('Intensität').onChange(v => U.thermIntensity.value = v);
fT.add(P, 'sonnenHeizung', 0, 25).name('Sonnenaufheizung °C').onChange(v => U.sunHeat.value = v);
fT.add(P, 'rauschStaerke', 0, 10).name('Materialrauschen °C').onChange(v => U.thermNoiseAmt.value = v);
fT.add(P, 'rauschSkala', 0.05, 2).name('… Skala').onChange(v => U.thermNoiseScale.value = v);
fT.add(P, 'herzRate', 0.5, 15).name('Herzschlag-Rate').onChange(v => U.heartRate.value = v);
fT.add(P, 'herzStaerke', 0, 15).name('Herzschlag °C').onChange(v => U.heartAmp.value = v);

const fU = gui.addFolder('UV-Sicht').close();
fU.add(P, 'uvIntensitaet', 0, 4).name('Fluoreszenz-Intensität').onChange(v => U.uvIntensity.value = v);

// ---------------------------------------------------------------- Tastatur
const keys = new Set();
addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  keys.add(e.code);
  const toggles = { Digit1: 'visOn', Digit2: 'echoOn', Digit3: 'thermOn', Digit4: 'uvOn' };
  if (toggles[e.code]) {
    P[toggles[e.code]] = !P[toggles[e.code]];
    updateWeights();
    gui.controllersRecursive().forEach(c => c.updateDisplay());
  }
  if (e.code === 'Space') { P.impulsSenden(); e.preventDefault(); }
});
addEventListener('keyup', (e) => keys.delete(e.code));

const _fwd = new THREE.Vector3(), _right = new THREE.Vector3(), _move = new THREE.Vector3();
function moveCamera(dt) {
  camera.getWorldDirection(_fwd);
  _fwd.y = 0; _fwd.normalize();
  _right.crossVectors(_fwd, camera.up);
  _move.set(0, 0, 0);
  if (keys.has('KeyW')) _move.add(_fwd);
  if (keys.has('KeyS')) _move.sub(_fwd);
  if (keys.has('KeyD')) _move.add(_right);
  if (keys.has('KeyA')) _move.sub(_right);
  if (keys.has('KeyE')) _move.y += 1;
  if (keys.has('KeyQ')) _move.y -= 1;
  if (_move.lengthSq() === 0) return;
  _move.normalize().multiplyScalar((keys.has('ShiftLeft') ? 30 : 11) * dt);
  camera.position.add(_move);
  controls.target.add(_move);
  const minY = heightAt(camera.position.x, camera.position.z) + 0.6;
  if (camera.position.y < minY) camera.position.y = minY;
}

// ---------------------------------------------------------------- Echo-Impulse
let elapsed = 0;
let pulseStart = -100;
const _wp = new THREE.Vector3();

function updateEcho(dt) {
  if (!P.impulse) {
    U.ringDist.value = -999;
    for (const t of world.echoTargets) t.flash.value = 0;
    return;
  }
  if (P.autoImpuls && elapsed - pulseStart > P.intervall) pulseStart = elapsed;
  const ringDist = (elapsed - pulseStart) * P.schallGeschw;
  U.ringDist.value = ringDist;

  const decay = Math.exp(-dt * P.blinkAbfall);
  const active = P.objektBlinken && P.echoOn && ringDist <= P.reichweite;
  for (const t of world.echoTargets) {
    let band = 0;
    if (active) {
      t.obj.getWorldPosition(_wp);
      const d = _wp.distanceTo(camera.position);
      const w = P.ringBreite * 1.5;
      band = Math.exp(-((d - ringDist) ** 2) / (2 * w * w));
    }
    t.flash.value = Math.max(t.flash.value * decay, band);
  }
}

// ---------------------------------------------------------------- Loop
updateWeights();
updateSun();
updateSky();

// Für Tests/Automatisierung von außen erreichbar
window.API = { P, U, updateWeights, updateSun, gui, pulse: P.impulsSenden };

const clock = new THREE.Clock();
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;
  controls.update();
  moveCamera(dt);
  world.update(dt, elapsed, effVis());
  updateEcho(dt);
  updateSky();
  renderer.render(scene, camera);
}

renderer.init().then(() => {
  const isGPU = !!(renderer.backend && renderer.backend.isWebGPUBackend);
  document.getElementById('badge').textContent = isGPU ? '⚡ WebGPU aktiv' : 'WebGL2-Fallback (kein WebGPU verfügbar)';
  renderer.setAnimationLoop(tick);
}).catch((e) => {
  errBox.textContent = 'Renderer-Fehler: ' + e.message;
});

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
