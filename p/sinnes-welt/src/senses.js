// Sinnes-System: globale Uniforms + Material-Fabrik.
// Jedes Material mischt seine Emission aus den aktiven Sinnen zusammen —
// die Sinne überlagern sich additiv, Gewichte 0..1 blenden sie ein/aus.
import * as THREE from 'three/webgpu';
import {
  uniform, time, positionWorld, normalWorld, cameraPosition,
  mix, step, abs, max, exp, sin, mx_noise_float,
} from 'three/tsl';

export const U = {
  // Sinnes-Gewichte (0 = aus)
  visW: uniform(1),
  echoW: uniform(0),
  thermW: uniform(0),
  uvW: uniform(0),

  sunDir: uniform(new THREE.Vector3(0.4, 0.8, 0.2)),

  // --- Echoortung ---
  ringDist: uniform(-999),               // aktueller Radius des Schallimpulses (in JS getrieben)
  echoRange: uniform(70),
  ringWidth: uniform(2.2),
  echoNear: uniform(new THREE.Color('#9be7ff')),
  echoFar: uniform(new THREE.Color('#000010')),
  echoTint: uniform(new THREE.Color('#66f2ff')),
  echoDepthAmt: uniform(0.4),            // Stärke der permanenten Tiefenkarte
  ringAmt: uniform(1.4),                 // Helligkeit des wandernden Rings
  trailAmt: uniform(0.55),               // Nachleuchten hinter dem Ring
  trailDecay: uniform(0.09),             // Abklingen des Nachleuchtens pro Meter
  rimAmt: uniform(0.5),                  // Kantenleuchten (Silhouetten)
  rimPow: uniform(2.5),
  blinkAmt: uniform(1.6),                // Aufblitzen ganzer Objekte beim Ringdurchgang

  // --- Thermalsicht ---
  tMin: uniform(2),
  tMax: uniform(44),
  thermGamma: uniform(1),
  thermIntensity: uniform(1.15),
  sunHeat: uniform(7),                   // °C zusätzliche Aufheizung sonnenzugewandter Flächen
  thermNoiseScale: uniform(0.3),
  thermNoiseAmt: uniform(2.5),
  heartRate: uniform(5),
  heartAmp: uniform(4),
  pal0: uniform(new THREE.Color('#10002b')),
  pal1: uniform(new THREE.Color('#b3005a')),
  pal2: uniform(new THREE.Color('#ff8c00')),
  pal3: uniform(new THREE.Color('#ffffdf')),

  // --- UV ---
  uvIntensity: uniform(1.2),
};

export const PALETTES = {
  'Ironbow':   ['#10002b', '#b3005a', '#ff8c00', '#ffffdf'],
  'Regenbogen':['#1500ff', '#00e5ff', '#ffe100', '#ff2000'],
  'Weißglut':  ['#000000', '#4a4a4a', '#a8a8a8', '#ffffff'],
  'Schwarzglut':['#ffffff', '#a8a8a8', '#4a4a4a', '#000000'],
  'Arktis':    ['#020412', '#123a8a', '#2fa8d8', '#eaffff'],
  'Medizin':   ['#0b0033', '#5a00a8', '#ff3d6e', '#fff2a8'],
};

/**
 * Erzeugt ein Material, das alle Sinne kennt.
 * opts: color, roughness, metalness, temp (°C), alive (bool), glow (sichtbare Eigen-
 * Emission, z.B. Feuer/Fenster), fluor (UV-Fluoreszenzfarbe), echoRefl (0..1, wie
 * stark Schall reflektiert wird), sunHeatMul (wie stark die Sonne aufheizt),
 * flash (geteiltes uniform für Objekt-Blinken), tempU/glowU (geteilte Uniforms),
 * albedoNoise (organische Farbvariation).
 */
export function makeSenseMaterial(opts = {}) {
  const mat = new THREE.MeshStandardNodeMaterial({
    color: new THREE.Color(opts.color ?? '#888888'),
    roughness: opts.roughness ?? 0.9,
    metalness: opts.metalness ?? 0.0,
  });

  const u = {
    temp: opts.tempU ?? uniform(opts.temp ?? 14),
    alive: uniform(opts.alive ? 1 : 0),
    flash: opts.flash ?? uniform(0),
    glow: opts.glowU ?? uniform(new THREE.Color(opts.glow ?? '#000000')),
    fluor: uniform(new THREE.Color(opts.fluor ?? '#000000')),
    echoRefl: uniform(opts.echoRefl ?? 1),
    sunHeatMul: uniform(opts.sunHeatMul ?? 1),
  };

  if (opts.albedoNoise) {
    const v = mx_noise_float(positionWorld.mul(0.16)).mul(0.35).add(1.0);
    mat.colorNode = uniform(new THREE.Color(opts.color)).mul(v.clamp(0.55, 1.45));
  }

  const d = positionWorld.sub(cameraPosition).length();

  // ---------- Echoortung ----------
  const dn = d.div(U.echoRange).clamp(0, 1);
  const depthLayer = mix(U.echoNear, U.echoFar, dn).mul(U.echoDepthAmt);

  const diff = U.ringDist.sub(d);
  const ringBand = abs(diff).div(U.ringWidth).oneMinus().max(0).pow(2).mul(U.ringAmt);
  const trail = exp(max(diff, 0).mul(U.trailDecay).negate()).mul(step(0, diff)).mul(U.trailAmt);

  const viewDir = cameraPosition.sub(positionWorld).normalize();
  const rim = normalWorld.dot(viewDir).clamp(0, 1).oneMinus().pow(U.rimPow).mul(U.rimAmt);
  const flash = u.flash.mul(U.blinkAmt);

  const pulseGlow = ringBand.add(trail).add(rim).add(flash).mul(dn.oneMinus());
  const echo = depthLayer.add(U.echoTint.mul(pulseGlow)).mul(u.echoRefl).mul(U.echoW);

  // ---------- Thermalsicht ----------
  const sunWarm = normalWorld.dot(U.sunDir).max(0).mul(U.sunHeat).mul(u.sunHeatMul);
  const tNoise = mx_noise_float(positionWorld.mul(U.thermNoiseScale)).mul(U.thermNoiseAmt);
  const beat = sin(time.mul(U.heartRate)).mul(0.5).add(0.5).pow(4).mul(U.heartAmp).mul(u.alive);
  const tempC = u.temp.add(sunWarm).add(tNoise).add(beat);

  const tt = tempC.sub(U.tMin).div(U.tMax.sub(U.tMin)).clamp(0, 1).pow(U.thermGamma);
  const c01 = mix(U.pal0, U.pal1, tt.mul(3).clamp(0, 1));
  const c12 = mix(c01, U.pal2, tt.mul(3).sub(1).clamp(0, 1));
  const c23 = mix(c12, U.pal3, tt.mul(3).sub(2).clamp(0, 1));
  const thermal = c23.mul(U.thermIntensity).mul(U.thermW);

  // ---------- UV (Fluoreszenz) ----------
  const uvPattern = mx_noise_float(positionWorld.mul(2.5)).mul(0.35).add(0.85);
  const uvLayer = u.fluor.mul(uvPattern).mul(U.uvIntensity).mul(U.uvW);

  // ---------- sichtbare Eigen-Emission (Feuer, Fenster) ----------
  const glowLayer = u.glow.mul(U.visW);

  mat.emissiveNode = echo.add(thermal).add(uvLayer).add(glowLayer);

  return { material: mat, u };
}
