// 8 Skybox-Ansätze zur Magnetfeldwahrnehmung — Three.js TSL (WebGPU)
// Alle Modi teilen sich eine einstellbare Feldachse (Deklination + Achsen-Höhe)
// und werden über Gewichts-Uniforms in EINEM Shader gemischt.
// Farben, Frequenzen, Drift usw. sind Uniforms -> Dev-Tools ändern sie live.

import * as THREE from 'three';
import {
  Fn, float, vec3, positionWorld, cameraPosition, normalize, dot, abs, max, clamp,
  pow, exp, fract, floor, sin, cos, mix, smoothstep, length, atan, acos, time,
  oneMinus, uniform, cross
} from 'three/tsl';

const rad = d => d * Math.PI / 180;
const DEG = 0.0174533; // Grad -> Radiant im Shader

// ---------- einstellbare Uniforms (Dev-Tools) ----------

export const field = {
  decl: uniform(rad(0)),   // Deklination: Drehung der Feldachse um die Hochachse
  elev: uniform(rad(20)),  // Höhe der Achse über dem Nordhorizont (physisch korrekt: negativ)
};

export const globalU = {
  speed: uniform(1),
};

// Mischgewichte der 9 Modi
export const weights = [
  uniform(1), uniform(0), uniform(0), uniform(0), uniform(0),
  uniform(0), uniform(0), uniform(0), uniform(0)
];

const col = hex => uniform(new THREE.Color(hex));

export const modeU = {
  aurora: {
    intensity: uniform(1), speed: uniform(1),
    breite: uniform(0.5),      // azimutale Ausdehnung um Nord
    hoehe: uniform(0.95),      // obere Kante der Vorhänge (Elevation)
    sterne: uniform(1),
    sar: uniform(1),           // roter Süd-Bogen
    colLow: col(0x0dff73),     // Vorhänge unten
    colHigh: col(0x8c26e6),    // Vorhänge oben
  },
  lines: {
    freq: uniform(18), pulse: uniform(1), pole: uniform(1), speed: uniform(1),
    wobble: uniform(1.4),      // Verwacklung der Linien
    dashFreq: uniform(1.6),    // Dichte der Energiepulse
    ringFreq: uniform(20),     // Ringdichte um den Nordpol
    colLine: col(0x4de6ff),
    colPoleN: col(0x73ffff),
    colPoleS: col(0xff4da6),
  },
  bird: {
    grain: uniform(26), contrast: uniform(0.95), ring: uniform(0.55), speed: uniform(1),
    driftRicht: uniform(60),   // Drift-Richtung des Noise in Grad (0 = Nord, 90 = Ost)
    driftTempo: uniform(0.4),
    driftVertikal: uniform(0.25),
    stretch: uniform(1),       // Anisotropie des Noise entlang der Feldachse
    blobSchwelle: uniform(0.42), // ab welcher Achsen-Nähe das Muster beginnt
    sued: uniform(0.55),       // warmer Gegenfleck
    breathe: uniform(1),       // Atmen des Musters
    colMuster: col(0x0f0a38),
    colSued: col(0xf27326),
  },
  spectrum: {
    rings: uniform(36), pole: uniform(1), speed: uniform(1),
    ringStaerke: uniform(1),
    zenit: uniform(1),         // Zenit-Abdunklung
    bleiche: uniform(0.6),     // Ost/West-Entsättigung
    colN: col(0x1433ff),
    colS: col(0xff520f),
  },
  filings: {
    density: uniform(11), strength: uniform(1), speed: uniform(1),
    streck: uniform(2.0),      // Streckung der Filamente (klein = länger)
    pole: uniform(0.35),       // Sog-Glühen am Pol
    schwelle: uniform(0.46),   // Noise-Schwelle (klein = dichter)
    colN: col(0x081242),
    colS: col(0x731f08),
  },
  moire: {
    freq: uniform(30), speed: uniform(1),
    versatz: uniform(0.06),    // Kippung des zweiten Wellensystems
    kontrast: uniform(1),
    grundhelligkeit: uniform(1),
    colA: col(0x33e6ff),       // Richtung Nord
    colB: col(0xffb833),       // Richtung Süd
  },
  plasma: {
    fluss: uniform(1),         // Strömungstempo entlang der Meridiane
    turbulenz: uniform(1),
    dichte: uniform(5),        // azimutale Dichte der Ströme
    hell: uniform(1.4),
    speed: uniform(1),
    colA: col(0x14e6b8),
    colB: col(0xd433ff),
  },
  polar: {
    staerke: uniform(1),
    groesse: uniform(1.5),     // Ausdehnung der Büschel
    rotation: uniform(0),      // Grad, dreht die Lappen um die Achse
    tempo: uniform(0.15),      // langsame Eigenrotation
    sued: uniform(0.5),        // gespiegelte Büschel an der Anti-Achse
    speed: uniform(1),
    colA: col(0x7a29cc),       // violette Lappen
    colB: col(0xe6d24d),       // gelbe Lappen
  },
  birdspec: {
    grund: uniform(0.22),      // Grund-Rauschen auf der gesamten Skybox
    polV: uniform(1.2),        // Verstärkung an den Polen
    polBreite: uniform(2.5),   // wie eng die Polzonen sind (hoch = enger)
    grain: uniform(30),        // Körnung
    contrast: uniform(0.9),
    driftRicht: uniform(60),   // Drift-Richtung in Grad (0 = Nord, 90 = Ost)
    driftTempo: uniform(0.4),
    driftVertikal: uniform(0.25),
    stretch: uniform(1),       // Anisotropie entlang der Feldachse
    schimmer: uniform(0.7),    // irisierendes Flirren in den Polzonen
    breathe: uniform(1),
    speed: uniform(1),
    colN: col(0x1a0f4d),       // Muster am Nordpol (kühl)
    colS: col(0x6b1f0a),       // Muster am Südpol (warm)
  },
};

// ---------- Feldgeometrie ----------

const axisDir = () => {
  const ce = cos(field.elev);
  return vec3(sin(field.decl).mul(ce), sin(field.elev), cos(field.decl).mul(ce).negate());
};
const northH = () => vec3(sin(field.decl), 0.0, cos(field.decl).negate());
const eastH = () => vec3(cos(field.decl), 0.0, sin(field.decl));

// Orthonormalbasis quer zur Feldachse (für Azimut-Koordinaten um die Achse)
function axisFrame() {
  const A = axisDir();
  const e1 = normalize(cross(vec3(0.0, 1.0, 0.0), A));
  const e2 = cross(A, e1);
  return { A, e1, e2 };
}

function dirBits(dir) {
  const elev = dir.y;
  const lenXZ = length(dir.xz).max(0.0001);
  const nXZ = dot(dir, northH()).div(lenXZ); // +1 = Blick nach Norden, -1 = Süden
  const eXZ = abs(dot(dir, eastH())).div(lenXZ);
  return { elev, nXZ, eXZ };
}

// ---------- Noise-Helfer ----------

const hash3 = Fn(([p]) => fract(sin(dot(p, vec3(127.1, 311.7, 74.7))).mul(43758.5453)));

const noise3 = Fn(([p]) => {
  const i = floor(p).toVar();
  const f = fract(p).toVar();
  const u = f.mul(f).mul(f.mul(-2.0).add(3.0)).toVar();
  const n000 = hash3(i);
  const n100 = hash3(i.add(vec3(1, 0, 0)));
  const n010 = hash3(i.add(vec3(0, 1, 0)));
  const n110 = hash3(i.add(vec3(1, 1, 0)));
  const n001 = hash3(i.add(vec3(0, 0, 1)));
  const n101 = hash3(i.add(vec3(1, 0, 1)));
  const n011 = hash3(i.add(vec3(0, 1, 1)));
  const n111 = hash3(i.add(vec3(1, 1, 1)));
  const x00 = mix(n000, n100, u.x);
  const x10 = mix(n010, n110, u.x);
  const x01 = mix(n001, n101, u.x);
  const x11 = mix(n011, n111, u.x);
  return mix(mix(x00, x10, u.y), mix(x01, x11, u.y), u.z);
});

const fbm = Fn(([p]) => {
  const q = p.toVar();
  const amp = float(0.5).toVar();
  const acc = float(0.0).toVar();
  for (let i = 0; i < 4; i++) {
    acc.addAssign(noise3(q).mul(amp));
    q.assign(q.mul(2.07).add(vec3(11.5, 21.7, 31.9)));
    amp.mulAssign(0.5);
  }
  return acc;
});

const stars = Fn(([d, t]) => {
  const p = d.mul(150.0);
  const cell = floor(p);
  const f = fract(p);
  const h = hash3(cell);
  const core = oneMinus(smoothstep(0.0, 0.35, length(f.sub(0.5))));
  const twinkle = sin(t.mul(2.0).add(h.mul(80.0))).mul(0.4).add(0.8);
  return smoothstep(0.965, 1.0, h).mul(core).mul(twinkle);
});

// ---------- Modus 1: Aurora-Kompass ----------
const auroraSky = Fn(([dir]) => {
  const U = modeU.aurora;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev, nXZ } = dirBits(dir);

  const base = mix(vec3(0.07, 0.10, 0.20), vec3(0.005, 0.008, 0.03), smoothstep(0.0, 0.6, elev)).toVar();

  const starI = stars(dir, t).mul(smoothstep(0.02, 0.2, elev)).mul(U.sterne);
  base.addAssign(vec3(starI));

  // Aurora: nur Norden, vertikale Vorhänge
  const nn = smoothstep(float(0.55).sub(U.breite.mul(1.4)), 0.55, nXZ);
  const hb = smoothstep(0.02, 0.18, elev).mul(oneMinus(smoothstep(0.30, U.hoehe, elev)));
  const rays = fbm(vec3(dir.x.mul(7.0), t.mul(0.10), dir.z.mul(7.0)));
  const curt = fbm(vec3(dir.x.mul(3.0), elev.mul(2.5).sub(t.mul(0.12)), dir.z.mul(3.0)));
  const rayI = pow(smoothstep(0.35, 0.85, rays), 2.0).mul(2.4);
  const A = rayI.mul(hb).mul(nn).mul(smoothstep(0.25, 0.75, curt).mul(1.5).add(0.3)).mul(U.intensity);
  const aurCol = mix(U.colLow, U.colHigh, smoothstep(0.05, 0.75, elev));
  base.addAssign(aurCol.mul(A));

  // Süden: schwacher roter SAR-Bogen
  const ss = smoothstep(0.15, 0.75, nXZ.negate());
  const sband = smoothstep(0.03, 0.15, elev).mul(oneMinus(smoothstep(0.18, 0.50, elev)));
  const sdrift = fbm(vec3(dir.x.mul(4.0), t.mul(0.05), dir.z.mul(4.0))).mul(0.8).add(0.2);
  base.addAssign(vec3(0.8, 0.1, 0.25).mul(ss).mul(sband).mul(sdrift).mul(0.5).mul(U.sar).mul(U.intensity));

  // Horizontschimmer über dem Schnee
  base.addAssign(vec3(0.5, 0.6, 0.8).mul(oneMinus(smoothstep(0.0, 0.18, abs(elev)))).mul(0.25));
  return base;
});

// ---------- Modus 2: Feldlinien-Dom ----------
const fieldlineSky = Fn(([dir]) => {
  const U = modeU.lines;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev } = dirBits(dir);

  const base = mix(vec3(0.05, 0.06, 0.16), vec3(0.01, 0.01, 0.06), smoothstep(0.0, 0.7, elev)).toVar();
  base.addAssign(vec3(stars(dir, t).mul(0.7).mul(smoothstep(0.02, 0.2, elev))));

  // Linienschar in Nord-Süd-Richtung, leicht verwackelt
  const u = dot(dir, eastH());
  const wob = fbm(dir.mul(2.5)).sub(0.5).mul(U.wobble);
  const lineField = abs(sin(u.mul(U.freq).add(wob)));
  const lines = pow(oneMinus(lineField), 24.0);

  // Energiepulse laufen entlang der Bögen zum Nordpol
  const ang = atan(dir.y, dot(dir, northH()));
  const dash = pow(fract(ang.mul(U.dashFreq).add(t.mul(0.45))), 6.0);
  const vis = smoothstep(-0.05, 0.10, elev);
  base.addAssign(U.colLine.mul(lines).mul(dash.mul(2.2).mul(U.pulse).add(0.25)).mul(vis));

  // Polpunkte: Nord grell, Süd als Gegenpol (horizontal gespiegelt)
  const An = axisDir();
  const As = vec3(An.x.negate(), An.y, An.z.negate());
  base.addAssign(U.colPoleN.mul(pow(max(dot(dir, An), 0.0), 200.0)).mul(2.2).mul(U.pole));
  base.addAssign(U.colPoleS.mul(pow(max(dot(dir, As), 0.0), 120.0)).mul(1.4).mul(U.pole));

  // Ringe um den Nordpol, die nach außen pulsieren
  const angN = acos(clamp(dot(dir, An), -1.0, 1.0));
  const ring = pow(abs(sin(angN.mul(U.ringFreq).sub(t.mul(0.8)))), 30.0).mul(exp(angN.mul(-2.4)));
  base.addAssign(vec3(0.2, 0.7, 1.0).mul(ring).mul(0.5).mul(U.pole));
  return base;
});

// ---------- Modus 3: Vogelblick (Radikalpaar) ----------
const birdSky = Fn(([dir]) => {
  const U = modeU.bird;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev } = dirBits(dir);

  const base = mix(vec3(0.98, 0.98, 1.0), vec3(0.55, 0.68, 0.92), smoothstep(0.0, 0.75, elev)).toVar();

  const Axis = axisDir();
  const al = dot(dir, Axis);

  // Noise-Drift: Richtung in Grad (0=Nord, 90=Ost), Tempo + vertikale Komponente
  const dRad = U.driftRicht.mul(DEG);
  const drift = vec3(sin(dRad), U.driftVertikal, cos(dRad).negate()).mul(t.mul(U.driftTempo));

  // Anisotropie: Noise entlang der Feldachse strecken/stauchen
  const pAniso = dir.add(Axis.mul(dot(dir, Axis)).mul(U.stretch.sub(1.0)));

  // körniges Radikalpaar-Muster, atmet langsam
  const breathe = sin(t.mul(0.5)).mul(0.04).mul(U.breathe);
  const blob = smoothstep(U.blobSchwelle, U.blobSchwelle.add(0.46), al.add(breathe));
  const grain = fbm(pAniso.mul(U.grain).add(drift));
  const patt = blob.mul(smoothstep(0.34, 0.66, grain));
  base.assign(mix(base, U.colMuster, patt.mul(U.contrast)));

  // irisierender Ring (Interferenz)
  const ringM = smoothstep(0.18, 0.40, al).mul(oneMinus(smoothstep(0.52, 0.78, al)));
  const ph = al.mul(34.0).sub(t.mul(1.2));
  const irid = vec3(
    sin(ph).mul(0.5).add(0.5),
    sin(ph.add(2.09)).mul(0.5).add(0.5),
    sin(ph.add(4.18)).mul(0.5).add(0.5)
  );
  base.assign(mix(base, irid, ringM.mul(U.ring)));

  // Süden: warmer Gegenfleck auf der Anti-Achse
  const south = smoothstep(0.45, 0.90, al.negate());
  const sGrain = smoothstep(0.30, 0.70, fbm(dir.mul(18.0).sub(vec3(0.0, 0.0, t.mul(0.2)))));
  base.assign(mix(base, U.colSued, south.mul(sGrain).mul(U.sued)));

  // Horizont weiß auslaufen lassen
  base.assign(mix(base, vec3(0.97, 0.97, 1.0), oneMinus(smoothstep(0.0, 0.10, abs(elev))).mul(0.7)));
  return base;
});

// ---------- Modus 4: Kompass-Spektrum ----------
const compassSky = Fn(([dir]) => {
  const U = modeU.spectrum;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev, nXZ, eXZ } = dirBits(dir);

  const c = mix(U.colS, U.colN, smoothstep(-0.9, 0.9, nXZ)).toVar();

  // Ost/West neutral ausbleichen
  c.assign(mix(c, vec3(0.90, 0.91, 0.95), pow(eXZ, 4.0).mul(U.bleiche)));

  // Zenit abdunkeln für Tiefe
  c.assign(mix(c, c.mul(0.22).add(vec3(0.01, 0.01, 0.06)), smoothstep(0.2, 0.85, elev).mul(U.zenit)));

  const An = axisDir();
  const As = vec3(An.x.negate(), An.y, An.z.negate());

  // Ringe: am Nordpol schnell nach außen, am Südpol langsam nach innen
  const angN = acos(clamp(dot(dir, An), -1.0, 1.0));
  const ringsN = pow(sin(angN.mul(U.rings).sub(t.mul(2.2))).mul(0.5).add(0.5), 12.0).mul(exp(angN.mul(-1.1)));
  const angS = acos(clamp(dot(dir, As), -1.0, 1.0));
  const ringsS = pow(sin(angS.mul(U.rings).mul(0.66).add(t.mul(1.4))).mul(0.5).add(0.5), 10.0).mul(exp(angS.mul(-1.3)));
  c.addAssign(vec3(0.5, 0.8, 1.5).mul(ringsN).mul(1.6).mul(U.ringStaerke));
  c.addAssign(vec3(1.4, 0.55, 0.25).mul(ringsS).mul(1.1).mul(U.ringStaerke));

  // Polglühen
  c.addAssign(vec3(0.6, 0.8, 1.4).mul(pow(max(dot(dir, An), 0.0), 30.0)).mul(1.5).mul(U.pole));
  c.addAssign(vec3(1.4, 0.7, 0.3).mul(pow(max(dot(dir, As), 0.0), 30.0)).mul(1.2).mul(U.pole));

  // Horizont aufhellen
  c.assign(mix(c, vec3(0.96, 0.94, 0.95), oneMinus(smoothstep(0.0, 0.10, abs(elev))).mul(0.35)));
  return c;
});

// ---------- Modus 5: Eisenspäne-Himmel ----------
const filingsSky = Fn(([dir]) => {
  const U = modeU.filings;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev, nXZ } = dirBits(dir);

  const base = mix(vec3(0.96, 0.96, 0.98), vec3(0.62, 0.66, 0.78), smoothstep(0.0, 0.8, elev)).toVar();

  // Filamente radial zum magnetischen Nordpol (wie Eisenspäne)
  const { A: An, e1, e2 } = axisFrame();
  const az = atan(dot(dir, e2), dot(dir, e1));
  const angN = acos(clamp(dot(dir, An), -1.0, 1.0));
  const p = vec3(sin(az).mul(U.density), cos(az).mul(U.density), angN.mul(U.streck).sub(t.mul(0.22)));
  const fil = pow(smoothstep(U.schwelle, U.schwelle.add(0.26), fbm(p)), 1.3);
  const side = nXZ.mul(0.5).add(0.5);
  const filCol = mix(U.colS, U.colN, side);
  const strength = abs(nXZ).mul(0.55).add(0.45);
  base.assign(mix(base, filCol, clamp(fil.mul(strength).mul(U.strength), 0.0, 1.0)));

  // Sog-Glühen direkt am Pol
  base.addAssign(vec3(0.9, 0.95, 1.3).mul(pow(max(dot(dir, An), 0.0), 90.0)).mul(U.pole));
  return base;
});

// ---------- Modus 6: Moiré-Interferenz ----------
const moireSky = Fn(([dir]) => {
  const U = modeU.moire;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev, nXZ } = dirBits(dir);

  // Dämmerungshimmel als Bühne
  const base = mix(vec3(0.13, 0.09, 0.22), vec3(0.03, 0.02, 0.09), smoothstep(0.0, 0.7, elev))
    .mul(U.grundhelligkeit).toVar();
  base.addAssign(vec3(stars(dir, t).mul(0.5).mul(smoothstep(0.05, 0.25, elev))));

  // zwei Wellensysteme um leicht gegeneinander gekippte Achsen
  const A1 = axisDir();
  const A2 = normalize(A1.add(vec3(0.0, U.versatz, 0.0)));
  const angA = acos(clamp(dot(dir, A1), -1.0, 1.0));
  const angB = acos(clamp(dot(dir, A2), -1.0, 1.0));
  const m = sin(angA.mul(U.freq).sub(t.mul(0.6))).mul(sin(angB.mul(U.freq).add(t.mul(0.4))));
  const mm = pow(m.mul(0.5).add(0.5), 3.0).mul(U.kontrast);

  // Nord = kühl, Süd = warm
  const mCol = mix(U.colB, U.colA, smoothstep(-0.8, 0.8, nXZ));
  base.addAssign(mCol.mul(mm));

  // Polglühen als Ankerpunkt
  base.addAssign(U.colA.mul(pow(max(dot(dir, A1), 0.0), 80.0)).mul(1.2));

  base.addAssign(vec3(0.35, 0.25, 0.5).mul(oneMinus(smoothstep(0.0, 0.15, abs(elev)))).mul(0.3));
  return base;
});

// ---------- Modus 7: Plasma-Strom ----------
const plasmaSky = Fn(([dir]) => {
  const U = modeU.plasma;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev } = dirBits(dir);

  const base = mix(vec3(0.02, 0.06, 0.09), vec3(0.005, 0.01, 0.03), smoothstep(0.0, 0.7, elev)).toVar();
  base.addAssign(vec3(stars(dir, t).mul(0.6).mul(smoothstep(0.05, 0.25, elev))));

  // Ströme fließen entlang der Meridiane der Feldachse zum Pol
  const { A: An, e1, e2 } = axisFrame();
  const az = atan(dot(dir, e2), dot(dir, e1));
  const angN = acos(clamp(dot(dir, An), -1.0, 1.0));

  const warp = fbm(dir.mul(3.0).add(vec3(t.mul(0.05)))).sub(0.5).mul(U.turbulenz).mul(2.0);
  const v = fbm(vec3(
    sin(az).mul(U.dichte),
    cos(az).mul(U.dichte),
    angN.mul(4.0).sub(t.mul(U.fluss).mul(0.6)).add(warp)
  ));
  const streak = pow(smoothstep(0.38, 0.80, v), 1.5);

  // Farbfeld wandert langsam durch die Ströme
  const cSel = fbm(dir.mul(2.0).add(vec3(0.0, t.mul(0.06), 0.0)));
  const pCol = mix(U.colA, U.colB, smoothstep(0.3, 0.7, cSel));

  // zum Pol hin heller (Trichterwirkung)
  const funnel = exp(angN.mul(-0.5)).mul(1.1).add(0.25);
  base.addAssign(pCol.mul(streak).mul(funnel).mul(U.hell));

  // Polauge
  base.addAssign(vec3(1.0).mul(pow(max(dot(dir, An), 0.0), 150.0)).mul(1.5));
  return base;
});

// ---------- Modus 8: Polarisation (Haidinger-Büschel) ----------
const polarSky = Fn(([dir]) => {
  const U = modeU.polar;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev } = dirBits(dir);

  const base = mix(vec3(0.97, 0.97, 1.0), vec3(0.62, 0.72, 0.92), smoothstep(0.0, 0.8, elev)).toVar();

  const { A: An, e1, e2 } = axisFrame();
  const az = atan(dot(dir, e2), dot(dir, e1));
  const angN = acos(clamp(dot(dir, An), -1.0, 1.0));
  const rot = U.rotation.mul(DEG).add(t.mul(U.tempo));

  // Doppellappen: violett wo sin(2az) > 0, gelb wo < 0 — um den Nordpunkt
  const lobes = sin(az.mul(2.0).add(rot));
  const fallN = exp(angN.div(U.groesse).mul(-1.6));
  const vio = smoothstep(0.0, 0.55, lobes).mul(fallN);
  const yel = smoothstep(0.0, 0.55, lobes.negate()).mul(fallN);
  base.assign(mix(base, U.colA, vio.mul(U.staerke).min(1.0)));
  base.assign(mix(base, U.colB, yel.mul(U.staerke).min(1.0)));

  // Anti-Achse (Süden): gespiegelte, schwächere Büschel mit getauschten Farben
  const angS = acos(clamp(dot(dir, An.negate()), -1.0, 1.0));
  const fallS = exp(angS.div(U.groesse).mul(-1.6));
  base.assign(mix(base, U.colB, smoothstep(0.0, 0.55, lobes).mul(fallS).mul(U.staerke).mul(U.sued).min(1.0)));
  base.assign(mix(base, U.colA, smoothstep(0.0, 0.55, lobes.negate()).mul(fallS).mul(U.staerke).mul(U.sued).min(1.0)));

  // feine Interferenzringe im Zentrum
  const ringlets = pow(abs(sin(angN.mul(40.0).sub(t.mul(0.5)))), 20.0).mul(exp(angN.mul(-3.0)));
  base.addAssign(vec3(1.0, 0.95, 0.8).mul(ringlets).mul(0.5));

  base.assign(mix(base, vec3(0.97, 0.97, 1.0), oneMinus(smoothstep(0.0, 0.10, abs(elev))).mul(0.7)));
  return base;
});

// ---------- Modus 9: Vogelspektrum ----------
// Wie Vogelblick, aber das Rauschen liegt auf der GESAMTEN Skybox und
// verdichtet sich axial an beiden magnetischen Polen (Radikalpaar-artig):
// kühles Muster am Nordpol, warmes am Südpol, dazwischen neutral und leise.
const birdSpectrumSky = Fn(([dir]) => {
  const U = modeU.birdspec;
  const t = time.mul(globalU.speed).mul(U.speed);
  const { elev } = dirBits(dir);

  const base = mix(vec3(0.98, 0.98, 1.0), vec3(0.55, 0.68, 0.92), smoothstep(0.0, 0.75, elev)).toVar();

  const Axis = axisDir();
  const al = dot(dir, Axis);   // signiert: +1 Nordpol, -1 Südpol
  const axial = abs(al);       // axiale Polnähe (beide Pole gleich)

  // Polzonen: 0 am "Äquator"-Ring, 1 an den Polen; atmet leicht
  const breathe = sin(t.mul(0.5)).mul(0.05).mul(U.breathe);
  const poleZone = pow(clamp(axial.add(breathe), 0.0, 1.0), U.polBreite);

  // Noise-Drift + Anisotropie wie beim Vogelblick
  const dRad = U.driftRicht.mul(DEG);
  const drift = vec3(sin(dRad), U.driftVertikal, cos(dRad).negate()).mul(t.mul(U.driftTempo));
  const pAniso = dir.add(Axis.mul(dot(dir, Axis)).mul(U.stretch.sub(1.0)));

  const g1 = fbm(pAniso.mul(U.grain).add(drift));
  const grain = smoothstep(0.34, 0.66, g1);

  // Intensität: überall Grund-Rauschen, an den Polen verstärkt
  const inten = clamp(U.grund.add(poleZone.mul(U.polV)), 0.0, 1.2);
  const patt = grain.mul(inten).mul(U.contrast);

  // Farbe: neutral am Äquator, kühl am Nord-, warm am Südpol
  const colPole = mix(U.colS, U.colN, smoothstep(-0.6, 0.6, al));
  const colGrain = mix(vec3(0.45, 0.47, 0.55), colPole, smoothstep(0.15, 0.75, axial));
  base.assign(mix(base, colGrain, clamp(patt, 0.0, 1.0)));

  // irisierendes Flirren, nur in den Polzonen
  const ph = g1.mul(25.0).sub(t.mul(1.4));
  const irid = vec3(
    sin(ph).mul(0.5).add(0.5),
    sin(ph.add(2.09)).mul(0.5).add(0.5),
    sin(ph.add(4.18)).mul(0.5).add(0.5)
  );
  base.addAssign(irid.mul(grain).mul(poleZone).mul(U.schimmer).mul(0.6));

  // Horizont weiß auslaufen lassen
  base.assign(mix(base, vec3(0.97, 0.97, 1.0), oneMinus(smoothstep(0.0, 0.10, abs(elev))).mul(0.6)));
  return base;
});

// ---------- kombiniertes Material + Metadaten ----------

export function createSkyMaterial() {
  const mat = new THREE.MeshBasicNodeMaterial({ side: THREE.BackSide, depthWrite: false });
  mat.fog = false;
  const dir = normalize(positionWorld.sub(cameraPosition));
  mat.colorNode = auroraSky(dir).mul(weights[0])
    .add(fieldlineSky(dir).mul(weights[1]))
    .add(birdSky(dir).mul(weights[2]))
    .add(compassSky(dir).mul(weights[3]))
    .add(filingsSky(dir).mul(weights[4]))
    .add(moireSky(dir).mul(weights[5]))
    .add(plasmaSky(dir).mul(weights[6]))
    .add(polarSky(dir).mul(weights[7]))
    .add(birdSpectrumSky(dir).mul(weights[8]));
  return mat;
}

export const MODES = [
  {
    name: '1 · Aurora-Kompass',
    desc: 'Polarlicht-Vorhänge tanzen nur am Nordhimmel — nach Süden bleibt ein blasser roter SAR-Bogen unter Sternen.',
    env: { fog: 0x0a1226, hemiSky: 0x99ccbb, hemiGround: 0x2a3450, hemiI: 0.42, dir: 0xaaccff, dirI: 0.55 }
  },
  {
    name: '2 · Feldlinien-Dom',
    desc: 'Leuchtende Feldlinien spannen sich von Süd nach Nord über den Himmel; Energiepulse wandern zum grellen Nordpol-Punkt.',
    env: { fog: 0x0b1030, hemiSky: 0x66aaff, hemiGround: 0x111a33, hemiI: 0.55, dir: 0x88eeff, dirI: 0.5 }
  },
  {
    name: '3 · Vogelblick',
    desc: 'Radikalpaar-Sehen wie bei Zugvögeln: ein körniges Interferenzmuster verdichtet sich beim Blick nach Norden, umringt von irisierenden Farben.',
    env: { fog: 0xf2f4fa, hemiSky: 0xffffff, hemiGround: 0xccccdd, hemiI: 1.0, dir: 0xfff4e0, dirI: 1.4 }
  },
  {
    name: '4 · Kompass-Spektrum',
    desc: 'Der Himmel als Farbkompass: kaltes Blau im Norden, glühendes Orange im Süden, pulsierende Ringe um beide magnetische Pole.',
    env: { fog: 0xd8ccd8, hemiSky: 0xeeddff, hemiGround: 0x998899, hemiI: 0.8, dir: 0xffe8d0, dirI: 1.1 }
  },
  {
    name: '5 · Eisenspäne-Himmel',
    desc: 'Wie Eisenspäne im Feld: Filamente laufen radial auf den Nordpol zu — stahlblau nach Norden, rostrot nach Süden.',
    env: { fog: 0xeceef4, hemiSky: 0xffffff, hemiGround: 0xbbbbcc, hemiI: 0.9, dir: 0xfff0dd, dirI: 1.2 }
  },
  {
    name: '6 · Moiré-Interferenz',
    desc: 'Zwei gegeneinander gekippte Wellensysteme um die Feldachse überlagern sich zu wandernden Schwebungsmustern — kühl im Norden, warm im Süden.',
    env: { fog: 0x241a38, hemiSky: 0x9977cc, hemiGround: 0x221833, hemiI: 0.5, dir: 0xbb99ff, dirI: 0.5 }
  },
  {
    name: '7 · Plasma-Strom',
    desc: 'Leuchtende Plasmaströme fließen entlang der Feldmeridiane und werden zum Nordpol hin gebündelt; Turbulenz verwirbelt sie.',
    env: { fog: 0x061620, hemiSky: 0x77aabb, hemiGround: 0x0a1420, hemiI: 0.4, dir: 0xccaaee, dirI: 0.45 }
  },
  {
    name: '8 · Polarisation',
    desc: 'Wie Haidinger-Büschel: violett-gelbe Doppellappen rotieren um den magnetischen Nordpunkt — im Süden gespiegelt und schwächer.',
    env: { fog: 0xf4f2fa, hemiSky: 0xffffff, hemiGround: 0xd8d4e6, hemiI: 1.0, dir: 0xfff8e8, dirI: 1.3 }
  },
  {
    name: '9 · Vogelspektrum',
    desc: 'Das Radikalpaar-Rauschen liegt über dem gesamten Himmel und verdichtet sich an beiden magnetischen Polen — kühl im Norden, warm im Süden, irisierend in den Polzonen.',
    env: { fog: 0xf0f2f8, hemiSky: 0xffffff, hemiGround: 0xc8c8d8, hemiI: 0.95, dir: 0xfff2dd, dirI: 1.35 }
  }
];
