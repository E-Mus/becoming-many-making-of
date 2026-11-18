// Weiße Landschaft + Magnetfeld-Skybox — Three.js WebGPU
import * as THREE from 'three';
import GUI from 'three/addons/libs/lil-gui.module.min.js';
import { createSkyMaterial, MODES, field, globalU, weights, modeU } from './sky.js';

const rad = d => d * Math.PI / 180;

// ---------- Renderer / Szene ----------

const canvas = document.getElementById('c');
const renderer = new THREE.WebGPURenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 80, 480);

const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 2500);
camera.rotation.order = 'YXZ';

// ---------- Terrain ----------

function terrainH(x, z) {
  return Math.sin(x * 0.018) * Math.cos(z * 0.021) * 5.0
       + Math.sin(x * 0.05 + 2.1) * Math.cos(z * 0.043 + 1.3) * 1.8
       + Math.sin(x * 0.11 + 4.2) * Math.cos(z * 0.093 + 2.2) * 0.6;
}

const groundGeo = new THREE.PlaneGeometry(700, 700, 170, 170);
groundGeo.rotateX(-Math.PI / 2);
{
  const pos = groundGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setY(i, terrainH(pos.getX(i), pos.getZ(i)));
  }
  groundGeo.computeVertexNormals();
}
const ground = new THREE.Mesh(
  groundGeo,
  new THREE.MeshStandardMaterial({ color: 0xf7f7fa, roughness: 0.95, flatShading: true })
);
ground.receiveShadow = true;
scene.add(ground);

// ---------- Bäume (weiße Winterbäume) ----------

function makeTree(scale) {
  const g = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0xd9d5cf, roughness: 0.9 });
  const crownMat = new THREE.MeshStandardMaterial({ color: 0xf4f6f8, roughness: 0.85, flatShading: true });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.10 * scale, 0.18 * scale, 1.4 * scale, 6), trunkMat);
  trunk.position.y = 0.7 * scale;
  trunk.castShadow = true;
  g.add(trunk);
  const tiers = [[2.2, 1.7, 1.15], [1.7, 1.5, 1.95], [1.15, 1.3, 2.7]];
  for (const [r, h, y] of tiers) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r * 0.8 * scale, h * scale, 7), crownMat);
    cone.position.y = y * scale;
    cone.castShadow = true;
    g.add(cone);
  }
  return g;
}

for (let i = 0; i < 70; i++) {
  const a = Math.random() * Math.PI * 2;
  const r = 14 + Math.random() * 240;
  const x = Math.cos(a) * r, z = Math.sin(a) * r;
  const tree = makeTree(0.8 + Math.random() * 1.6);
  tree.position.set(x, terrainH(x, z), z);
  tree.rotation.y = Math.random() * Math.PI * 2;
  scene.add(tree);
}

// ---------- Gras (instanziert, hell) ----------

{
  const bladeGeo = new THREE.ConeGeometry(0.035, 0.5, 4);
  bladeGeo.translate(0, 0.25, 0);
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0xe6ece6, roughness: 0.9 });
  const count = 6000;
  const grass = new THREE.InstancedMesh(bladeGeo, bladeMat, count);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const euler = new THREE.Euler();
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 2 + Math.pow(Math.random(), 0.6) * 90;
    p.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    p.y = terrainH(p.x, p.z);
    euler.set((Math.random() - 0.5) * 0.35, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.35);
    q.setFromEuler(euler);
    const sc = 0.6 + Math.random() * 1.1;
    s.set(sc, sc, sc);
    m.compose(p, q, s);
    grass.setMatrixAt(i, m);
  }
  scene.add(grass);
}

// ---------- Felsen ----------

{
  const rockMat = new THREE.MeshStandardMaterial({ color: 0xdcdde2, roughness: 0.8, flatShading: true });
  for (let i = 0; i < 28; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 8 + Math.random() * 180;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4 + Math.random() * 1.4, 0), rockMat);
    rock.position.set(x, terrainH(x, z) + 0.15, z);
    rock.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    rock.scale.y = 0.6 + Math.random() * 0.5;
    rock.castShadow = true;
    scene.add(rock);
  }
}

// ---------- Licht ----------

const hemi = new THREE.HemisphereLight(0xffffff, 0xccccdd, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
sun.position.set(60, 90, 40); // steht im Süden (+z)
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -120; sun.shadow.camera.right = 120;
sun.shadow.camera.top = 120; sun.shadow.camera.bottom = -120;
sun.shadow.camera.far = 400;
scene.add(sun);

// ---------- Skybox (kombinierter Shader, gemischt über Gewichte) ----------

const skyMesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 64, 32), createSkyMaterial());
skyMesh.frustumCulled = false;
scene.add(skyMesh);

const modeNameEl = document.getElementById('modeName');
const modeDescEl = document.getElementById('modeDesc');
const buttons = [...document.querySelectorAll('#modes button')];

// Ziel-Gewichte für weiches Überblenden
const wTarget = weights.map((w, i) => i === 0 ? 1 : 0);

function setMode(i) {
  for (let j = 0; j < weights.length; j++) wTarget[j] = j === i ? 1 : 0;
  modeNameEl.textContent = MODES[i].name;
  modeDescEl.textContent = MODES[i].desc;
  buttons.forEach((b, j) => b.classList.toggle('active', j === i));
}
buttons.forEach((b, i) => b.addEventListener('click', () => setMode(i)));

function setMixedLabel() {
  modeNameEl.textContent = 'Eigener Mix';
  modeDescEl.textContent = 'Mischung mehrerer Ansätze über die Dev-Tools.';
  buttons.forEach(b => b.classList.remove('active'));
}

// Umgebungslicht/Nebel = gewichteter Mittelwert der Modus-Presets
const envColors = MODES.map(m => ({
  fog: new THREE.Color(m.env.fog),
  hemiSky: new THREE.Color(m.env.hemiSky),
  hemiGround: new THREE.Color(m.env.hemiGround),
  dir: new THREE.Color(m.env.dir),
  hemiI: m.env.hemiI,
  dirI: m.env.dirI
}));

function applyEnv() {
  let sum = 0;
  for (const w of weights) sum += w.value;
  if (sum < 1e-4) return;
  const acc = { fog: [0, 0, 0], hemiSky: [0, 0, 0], hemiGround: [0, 0, 0], dir: [0, 0, 0], hemiI: 0, dirI: 0 };
  for (let i = 0; i < weights.length; i++) {
    const w = weights[i].value / sum;
    if (w === 0) continue;
    const e = envColors[i];
    for (const k of ['fog', 'hemiSky', 'hemiGround', 'dir']) {
      acc[k][0] += e[k].r * w; acc[k][1] += e[k].g * w; acc[k][2] += e[k].b * w;
    }
    acc.hemiI += e.hemiI * w;
    acc.dirI += e.dirI * w;
  }
  scene.fog.color.setRGB(...acc.fog);
  hemi.color.setRGB(...acc.hemiSky);
  hemi.groundColor.setRGB(...acc.hemiGround);
  sun.color.setRGB(...acc.dir);
  hemi.intensity = acc.hemiI;
  sun.intensity = acc.dirI;
}

// ---------- Dev-Tools (lil-gui) ----------

const gui = new GUI({ title: 'Dev-Tools' });

// Magnetfeld / Feldachse
const fieldP = {
  deklination: 0,
  achsenHoehe: 20,
  physikalisch() {
    // Mitteleuropa: Inklination ≈ 65,6° (Feld zeigt nach Norden UND in den Boden),
    // Deklination ≈ +3,5° — der "Nordpunkt" liegt also unter dem Horizont.
    fieldP.deklination = 3.5;
    fieldP.achsenHoehe = -65.6;
    applyField();
  },
  kuenstlerisch() {
    fieldP.deklination = 0;
    fieldP.achsenHoehe = 20;
    applyField();
  }
};
function applyField() {
  field.decl.value = rad(fieldP.deklination);
  field.elev.value = rad(fieldP.achsenHoehe);
}
const fMag = gui.addFolder('Magnetfeld');
fMag.add(fieldP, 'deklination', -180, 180, 0.5).name('Deklination °').onChange(applyField).listen();
fMag.add(fieldP, 'achsenHoehe', -85, 85, 0.5).name('Achsen-Höhe °').onChange(applyField).listen();
fMag.add(fieldP, 'physikalisch').name('Physikalisch korrekt (DE: −65,6°)');
fMag.add(fieldP, 'kuenstlerisch').name('Künstlerisch (+20° über Horizont)');

// Modi mischen
const mixKeys = ['Aurora', 'Feldlinien', 'Vogelblick', 'Spektrum', 'Eisenspäne', 'Moiré', 'Plasma', 'Polarisation', 'Vogelspektrum'];
const mixP = Object.fromEntries(mixKeys.map((k, i) => [k, i === 0 ? 1 : 0]));
const fMix = gui.addFolder('Modi mischen'); fMix.close();
mixKeys.forEach((k, i) => {
  fMix.add(mixP, k, 0, 1, 0.01).listen().onChange(v => {
    weights[i].value = v;
    wTarget[i] = v;
    setMixedLabel();
  });
});
fMix.add({ gleichmix() { mixKeys.forEach((k, i) => { wTarget[i] = 1 / mixKeys.length; }); setMixedLabel(); } }, 'gleichmix').name('Alle gleich mischen');

// Parameter pro Modus
const fAur = gui.addFolder('1 · Aurora'); fAur.close();
fAur.add(modeU.aurora.intensity, 'value', 0, 3, 0.01).name('Intensität');
fAur.add(modeU.aurora.breite, 'value', 0, 1, 0.01).name('Breite (um Nord)');
fAur.add(modeU.aurora.hoehe, 'value', 0.3, 1.5, 0.01).name('Vorhang-Höhe');
fAur.addColor(modeU.aurora.colLow, 'value').name('Farbe unten');
fAur.addColor(modeU.aurora.colHigh, 'value').name('Farbe oben');
fAur.add(modeU.aurora.sar, 'value', 0, 2, 0.01).name('Süd-Bogen (SAR)');
fAur.add(modeU.aurora.sterne, 'value', 0, 2, 0.01).name('Sterne');
fAur.add(modeU.aurora.speed, 'value', 0, 3, 0.01).name('Tempo');

const fLin = gui.addFolder('2 · Feldlinien'); fLin.close();
fLin.add(modeU.lines.freq, 'value', 4, 40, 1).name('Liniendichte');
fLin.add(modeU.lines.wobble, 'value', 0, 3, 0.01).name('Verwacklung');
fLin.add(modeU.lines.pulse, 'value', 0, 3, 0.01).name('Puls-Stärke');
fLin.add(modeU.lines.dashFreq, 'value', 0.5, 5, 0.05).name('Puls-Dichte');
fLin.add(modeU.lines.pole, 'value', 0, 3, 0.01).name('Polglühen');
fLin.add(modeU.lines.ringFreq, 'value', 5, 40, 0.5).name('Ringdichte');
fLin.addColor(modeU.lines.colLine, 'value').name('Linienfarbe');
fLin.addColor(modeU.lines.colPoleN, 'value').name('Nordpol-Farbe');
fLin.addColor(modeU.lines.colPoleS, 'value').name('Südpol-Farbe');
fLin.add(modeU.lines.speed, 'value', 0, 3, 0.01).name('Tempo');

const fBird = gui.addFolder('3 · Vogelblick'); fBird.close();
fBird.add(modeU.bird.grain, 'value', 5, 60, 0.5).name('Körnung');
fBird.add(modeU.bird.contrast, 'value', 0, 1, 0.01).name('Kontrast');
fBird.add(modeU.bird.driftRicht, 'value', 0, 360, 1).name('Noise-Richtung °');
fBird.add(modeU.bird.driftTempo, 'value', 0, 2, 0.01).name('Noise-Drift');
fBird.add(modeU.bird.driftVertikal, 'value', -1, 1, 0.01).name('Drift vertikal');
fBird.add(modeU.bird.stretch, 'value', 0.3, 3, 0.01).name('Anisotropie');
fBird.add(modeU.bird.blobSchwelle, 'value', 0, 0.8, 0.01).name('Muster-Schwelle');
fBird.add(modeU.bird.breathe, 'value', 0, 3, 0.01).name('Atmen');
fBird.add(modeU.bird.ring, 'value', 0, 1, 0.01).name('Farbring');
fBird.addColor(modeU.bird.colMuster, 'value').name('Muster-Farbe');
fBird.add(modeU.bird.sued, 'value', 0, 1.5, 0.01).name('Süd-Fleck');
fBird.addColor(modeU.bird.colSued, 'value').name('Süd-Farbe');
fBird.add(modeU.bird.speed, 'value', 0, 3, 0.01).name('Tempo');

const fSpec = gui.addFolder('4 · Spektrum'); fSpec.close();
fSpec.addColor(modeU.spectrum.colN, 'value').name('Farbe Nord');
fSpec.addColor(modeU.spectrum.colS, 'value').name('Farbe Süd');
fSpec.add(modeU.spectrum.rings, 'value', 6, 80, 1).name('Ringdichte');
fSpec.add(modeU.spectrum.ringStaerke, 'value', 0, 3, 0.01).name('Ring-Stärke');
fSpec.add(modeU.spectrum.pole, 'value', 0, 3, 0.01).name('Polglühen');
fSpec.add(modeU.spectrum.zenit, 'value', 0, 1, 0.01).name('Zenit-Dunkel');
fSpec.add(modeU.spectrum.bleiche, 'value', 0, 1, 0.01).name('Ost/West-Bleiche');
fSpec.add(modeU.spectrum.speed, 'value', 0, 3, 0.01).name('Tempo');

const fFil = gui.addFolder('5 · Eisenspäne'); fFil.close();
fFil.add(modeU.filings.density, 'value', 2, 30, 0.5).name('Filamentdichte');
fFil.add(modeU.filings.strength, 'value', 0, 1.5, 0.01).name('Stärke');
fFil.add(modeU.filings.streck, 'value', 0.5, 6, 0.05).name('Streckung');
fFil.add(modeU.filings.schwelle, 'value', 0.2, 0.7, 0.01).name('Dichte-Schwelle');
fFil.add(modeU.filings.pole, 'value', 0, 2, 0.01).name('Polglühen');
fFil.addColor(modeU.filings.colN, 'value').name('Farbe Nord');
fFil.addColor(modeU.filings.colS, 'value').name('Farbe Süd');
fFil.add(modeU.filings.speed, 'value', 0, 3, 0.01).name('Tempo');

const fMoi = gui.addFolder('6 · Moiré'); fMoi.close();
fMoi.add(modeU.moire.freq, 'value', 5, 80, 0.5).name('Wellendichte');
fMoi.add(modeU.moire.versatz, 'value', 0, 0.3, 0.005).name('Achsen-Versatz');
fMoi.add(modeU.moire.kontrast, 'value', 0, 2, 0.01).name('Kontrast');
fMoi.add(modeU.moire.grundhelligkeit, 'value', 0, 2, 0.01).name('Grundhelligkeit');
fMoi.addColor(modeU.moire.colA, 'value').name('Farbe Nord');
fMoi.addColor(modeU.moire.colB, 'value').name('Farbe Süd');
fMoi.add(modeU.moire.speed, 'value', 0, 3, 0.01).name('Tempo');

const fPla = gui.addFolder('7 · Plasma'); fPla.close();
fPla.add(modeU.plasma.fluss, 'value', 0, 3, 0.01).name('Fluss-Tempo');
fPla.add(modeU.plasma.turbulenz, 'value', 0, 3, 0.01).name('Turbulenz');
fPla.add(modeU.plasma.dichte, 'value', 1, 12, 0.1).name('Strom-Dichte');
fPla.add(modeU.plasma.hell, 'value', 0, 3, 0.01).name('Helligkeit');
fPla.addColor(modeU.plasma.colA, 'value').name('Farbe A');
fPla.addColor(modeU.plasma.colB, 'value').name('Farbe B');
fPla.add(modeU.plasma.speed, 'value', 0, 3, 0.01).name('Tempo');

const fPol = gui.addFolder('8 · Polarisation'); fPol.close();
fPol.add(modeU.polar.staerke, 'value', 0, 2, 0.01).name('Stärke');
fPol.add(modeU.polar.groesse, 'value', 0.5, 3, 0.01).name('Größe');
fPol.add(modeU.polar.rotation, 'value', 0, 360, 1).name('Rotation °');
fPol.add(modeU.polar.tempo, 'value', 0, 1, 0.005).name('Eigenrotation');
fPol.add(modeU.polar.sued, 'value', 0, 1, 0.01).name('Süd-Spiegelung');
fPol.addColor(modeU.polar.colA, 'value').name('Farbe 1 (violett)');
fPol.addColor(modeU.polar.colB, 'value').name('Farbe 2 (gelb)');
fPol.add(modeU.polar.speed, 'value', 0, 3, 0.01).name('Tempo');

const fBsp = gui.addFolder('9 · Vogelspektrum'); fBsp.close();
fBsp.add(modeU.birdspec.grund, 'value', 0, 1, 0.01).name('Grund-Rauschen');
fBsp.add(modeU.birdspec.polV, 'value', 0, 3, 0.01).name('Pol-Verstärkung');
fBsp.add(modeU.birdspec.polBreite, 'value', 0.5, 8, 0.05).name('Pol-Enge');
fBsp.add(modeU.birdspec.grain, 'value', 5, 80, 0.5).name('Körnung');
fBsp.add(modeU.birdspec.contrast, 'value', 0, 1.2, 0.01).name('Kontrast');
fBsp.add(modeU.birdspec.driftRicht, 'value', 0, 360, 1).name('Noise-Richtung °');
fBsp.add(modeU.birdspec.driftTempo, 'value', 0, 2, 0.01).name('Noise-Drift');
fBsp.add(modeU.birdspec.driftVertikal, 'value', -1, 1, 0.01).name('Drift vertikal');
fBsp.add(modeU.birdspec.stretch, 'value', 0.3, 3, 0.01).name('Anisotropie');
fBsp.add(modeU.birdspec.schimmer, 'value', 0, 2, 0.01).name('Schimmer');
fBsp.add(modeU.birdspec.breathe, 'value', 0, 3, 0.01).name('Atmen');
fBsp.addColor(modeU.birdspec.colN, 'value').name('Farbe Nordpol');
fBsp.addColor(modeU.birdspec.colS, 'value').name('Farbe Südpol');
fBsp.add(modeU.birdspec.speed, 'value', 0, 3, 0.01).name('Tempo');

// Global
const globalP = { belichtung: 1.1 };
const fGlob = gui.addFolder('Global'); fGlob.close();
fGlob.add(globalP, 'belichtung', 0.3, 2.5, 0.01).name('Belichtung').onChange(v => renderer.toneMappingExposure = v);
fGlob.add(globalU.speed, 'value', 0, 3, 0.01).name('Zeit global');

// ---------- Steuerung: Ziehen = Umschauen, WASD = Gehen ----------

let yaw = 0, pitch = 0.02; // yaw 0 => Blick nach Norden (-Z)
window.__look = (y, p) => { yaw = y; if (p !== undefined) pitch = p; };
window.__state = () => ({ yaw, pitch, dragging });
window.__sky = { modeU, field, globalU, weights }; // Debug-Zugriff auf alle Uniforms
camera.position.set(0, terrainH(0, 0) + 1.7, 0);

let dragging = false, lastX = 0, lastY = 0;
canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener('pointermove', e => {
  if (!dragging) return;
  yaw -= (e.clientX - lastX) * 0.0028;
  pitch -= (e.clientY - lastY) * 0.0028;
  pitch = Math.max(-1.45, Math.min(1.45, pitch));
  lastX = e.clientX; lastY = e.clientY;
});
canvas.addEventListener('pointerup', () => dragging = false);

const keys = {};
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return; // GUI-Eingaben nicht abfangen
  keys[e.code] = true;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= MODES.length) setMode(n - 1);
});
addEventListener('keyup', e => keys[e.code] = false);

// ---------- Kompass-HUD ----------

const compass = document.getElementById('compass');
const cctx = compass.getContext('2d');
const DPR = Math.min(devicePixelRatio, 2);
const CW = 440, CH = 46;
compass.width = CW * DPR; compass.height = CH * DPR;
compass.style.width = CW + 'px'; compass.style.height = CH + 'px';
cctx.scale(DPR, DPR);
const CARDINALS = { 0: 'N', 45: 'NO', 90: 'O', 135: 'SO', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };

const fwd = new THREE.Vector3();
function drawCompass() {
  camera.getWorldDirection(fwd);
  let heading = Math.atan2(fwd.x, -fwd.z) * 180 / Math.PI;
  if (heading < 0) heading += 360;

  cctx.clearRect(0, 0, CW, CH);
  cctx.fillStyle = 'rgba(10,12,20,0.55)';
  cctx.beginPath(); cctx.roundRect(0, 0, CW, CH, 10); cctx.fill();

  const pxPerDeg = 3.4;
  cctx.textAlign = 'center';
  for (let d = -70; d <= 70; d += 5) {
    let deg = Math.round((heading + d) / 5) * 5;
    const off = (deg - heading + 540) % 360 - 180;
    const x = CW / 2 + off * pxPerDeg;
    if (x < 8 || x > CW - 8) continue;
    const norm = ((deg % 360) + 360) % 360;
    const label = CARDINALS[norm];
    if (label) {
      cctx.fillStyle = label === 'N' ? '#ff5f6d' : label === 'S' ? '#ffb35c' : '#e8ecf5';
      cctx.font = '600 15px system-ui';
      cctx.fillText(label, x, 20);
      cctx.fillRect(x - 1, 26, 2, 12);
    } else {
      cctx.fillStyle = 'rgba(232,236,245,0.45)';
      cctx.fillRect(x - 0.5, norm % 15 === 0 ? 28 : 31, 1, norm % 15 === 0 ? 10 : 6);
    }
  }
  // Mittelmarker + Gradzahl
  cctx.fillStyle = '#ffffff';
  cctx.beginPath();
  cctx.moveTo(CW / 2 - 5, 2); cctx.lineTo(CW / 2 + 5, 2); cctx.lineTo(CW / 2, 9);
  cctx.fill();
  cctx.font = '600 11px system-ui';
  cctx.fillStyle = 'rgba(232,236,245,0.8)';
  cctx.fillText(Math.round(heading) + '°', CW / 2, CH - 4);
}

// ---------- Loop ----------

const clock = new THREE.Clock();

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);

  // weiches Überblenden der Modus-Gewichte
  const blend = Math.min(1, dt * 3.5);
  for (let i = 0; i < weights.length; i++) {
    const w = weights[i];
    const diff = wTarget[i] - w.value;
    if (diff !== 0) {
      w.value = Math.abs(diff) < 0.003 ? wTarget[i] : w.value + diff * blend;
      mixP[mixKeys[i]] = w.value;
    }
  }
  applyEnv();

  camera.rotation.set(pitch, yaw, 0);

  const speed = (keys['ShiftLeft'] || keys['ShiftRight']) ? 14 : 6;
  let mx = 0, mz = 0;
  if (keys['KeyW'] || keys['ArrowUp']) mz -= 1;
  if (keys['KeyS'] || keys['ArrowDown']) mz += 1;
  if (keys['KeyA'] || keys['ArrowLeft']) mx -= 1;
  if (keys['KeyD'] || keys['ArrowRight']) mx += 1;
  if (mx || mz) {
    const len = Math.hypot(mx, mz);
    const sinY = Math.sin(yaw), cosY = Math.cos(yaw);
    camera.position.x += ((mx * cosY + mz * sinY) / len) * speed * dt;
    camera.position.z += ((mz * cosY - mx * sinY) / len) * speed * dt;
    camera.position.x = Math.max(-300, Math.min(300, camera.position.x));
    camera.position.z = Math.max(-300, Math.min(300, camera.position.z));
  }
  camera.position.y = terrainH(camera.position.x, camera.position.z) + 1.7;

  skyMesh.position.copy(camera.position);
  drawCompass();
  renderer.render(scene, camera);
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---------- Start ----------

const backendEl = document.getElementById('backend');
renderer.init().then(() => {
  backendEl.textContent = renderer.backend.isWebGPUBackend ? 'WebGPU' : 'WebGL2-Fallback';
  setMode(0);
  applyEnv();
  renderer.setAnimationLoop(animate);
}).catch(err => {
  backendEl.textContent = 'Fehler: ' + err.message;
  console.error(err);
});
