// Aufbau der Demo-Welt: Terrain, Vegetation, Bauwerke, Feuer und Lebewesen.
import * as THREE from 'three/webgpu';
import { uniform } from 'three/tsl';
import { makeSenseMaterial } from './senses.js';

// ---------------------------------------------------------------- Rauschen
function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, y) {
  let f = 0, amp = 0.5, s = 1;
  for (let i = 0; i < 4; i++) { f += amp * vnoise(x * s, y * s); s *= 2; amp *= 0.5; }
  return f;
}
function sstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

const POND = { x: -18, z: 8, r: 6.5 };

export function heightAt(x, z) {
  let h = (fbm(x * 0.02 + 10, z * 0.02 + 10) - 0.5) * 16;
  h *= 0.25 + 0.75 * sstep(10, 45, Math.hypot(x, z));      // Mitte sanft halten
  const dp = Math.hypot(x - POND.x, z - POND.z);
  h = THREE.MathUtils.lerp(-1.4, h, sstep(POND.r - 1, POND.r + 4.5, dp)); // Teichmulde
  return h;
}

// ---------------------------------------------------------------- Helfer
function mesh(geo, senseMat, opts = {}) {
  const m = new THREE.Mesh(geo, senseMat.material);
  m.castShadow = opts.cast ?? true;
  m.receiveShadow = opts.receive ?? true;
  return m;
}

export function buildWorld(scene) {
  const echoTargets = [];   // {obj, flash} — Objekte, die beim Ringdurchgang blinken
  const creatures = [];     // {group, update(dt, t)}
  const registerEcho = (obj, flash) => echoTargets.push({ obj, flash });

  // ---------------- Terrain ----------------
  const terrGeo = new THREE.PlaneGeometry(240, 240, 180, 180);
  terrGeo.rotateX(-Math.PI / 2);
  const pos = terrGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)));
  }
  terrGeo.computeVertexNormals();
  const terrMat = makeSenseMaterial({ color: '#4f6836', temp: 14, albedoNoise: true, sunHeatMul: 1.2 });
  const terrain = mesh(terrGeo, terrMat, { cast: false });
  scene.add(terrain);

  // ---------------- Teich (Wasser: kalt, schluckt Schall) ----------------
  const water = mesh(
    new THREE.CircleGeometry(POND.r, 40).rotateX(-Math.PI / 2),
    makeSenseMaterial({ color: '#1d4a63', roughness: 0.15, metalness: 0.55, temp: 8, echoRefl: 0.3, sunHeatMul: 0.15 }),
    { cast: false }
  );
  water.position.set(POND.x, -0.55, POND.z);
  scene.add(water);

  // ---------------- Bäume ----------------
  const treeSpots = [];
  const clearOf = (x, z) =>
    Math.hypot(x - POND.x, z - POND.z) > POND.r + 3 &&
    Math.hypot(x - 16, z + 14) > 8 &&        // Hütte
    Math.hypot(x, z - 10) > 5;               // Lagerfeuer
  let seed = 1;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  for (let i = 0; i < 22; i++) {
    let x, z, tries = 0;
    do { x = (rnd() - 0.5) * 170; z = (rnd() - 0.5) * 170; } while (!clearOf(x, z) && ++tries < 20);
    treeSpots.push([x, z]);
    const g = new THREE.Group();
    const flash = uniform(0);
    const h = 2 + rnd() * 2;
    const trunk = mesh(new THREE.CylinderGeometry(0.16 + rnd() * 0.12, 0.28 + rnd() * 0.15, h, 7),
      makeSenseMaterial({ color: '#5d4a33', temp: 13, flash }));
    trunk.position.y = h / 2;
    g.add(trunk);
    // Lebendes Laub: Chlorophyll fluoresziert unter UV schwach rot
    for (let k = 0; k < 2 + Math.floor(rnd() * 2); k++) {
      const r = 0.9 + rnd() * 0.9;
      const leaf = mesh(new THREE.IcosahedronGeometry(r, 1),
        makeSenseMaterial({ color: '#3f6d2f', temp: 16, flash, fluor: '#4a0a14', albedoNoise: true }));
      leaf.position.set((rnd() - 0.5) * 1.2, h + (rnd() - 0.2) * 1.1, (rnd() - 0.5) * 1.2);
      g.add(leaf);
    }
    g.position.set(x, heightAt(x, z), z);
    scene.add(g);
    registerEcho(g, flash);
  }

  // Tote Bäume: gleiche Form, aber kalt und kahl
  for (let i = 0; i < 6; i++) {
    let x, z, tries = 0;
    do { x = (rnd() - 0.5) * 160; z = (rnd() - 0.5) * 160; } while (!clearOf(x, z) && ++tries < 20);
    const g = new THREE.Group();
    const flash = uniform(0);
    const dead = () => makeSenseMaterial({ color: '#5b5245', temp: 12, flash });
    const h = 2.5 + rnd() * 1.5;
    const trunk = mesh(new THREE.CylinderGeometry(0.1, 0.24, h, 6), dead());
    trunk.position.y = h / 2;
    g.add(trunk);
    for (let k = 0; k < 3; k++) {
      const br = mesh(new THREE.CylinderGeometry(0.03, 0.08, 1.2 + rnd(), 5), dead());
      br.position.y = h * (0.5 + rnd() * 0.45);
      br.rotation.set((rnd() - 0.5) * 1.6, rnd() * Math.PI * 2, (rnd() - 0.5) * 1.6);
      g.add(br);
    }
    g.position.set(x, heightAt(x, z), z);
    scene.add(g);
    registerEcho(g, flash);
  }

  // ---------------- Felsen (heizen in der Sonne stark auf) ----------------
  for (let i = 0; i < 14; i++) {
    const x = (rnd() - 0.5) * 170, z = (rnd() - 0.5) * 170;
    if (!clearOf(x, z)) continue;
    const flash = uniform(0);
    const rock = mesh(new THREE.DodecahedronGeometry(0.5 + rnd() * 1.4, 0),
      makeSenseMaterial({ color: '#7c7f83', temp: 13, sunHeatMul: 2.2, flash, roughness: 0.95 }));
    rock.position.set(x, heightAt(x, z) + 0.2, z);
    rock.scale.y = 0.6 + rnd() * 0.5;
    rock.rotation.y = rnd() * Math.PI;
    scene.add(rock);
    registerEcho(rock, flash);
  }

  // ---------------- Blumen & Pilze (UV-Fluoreszenz) ----------------
  for (let i = 0; i < 36; i++) {
    const x = (rnd() - 0.5) * 120, z = (rnd() - 0.5) * 120;
    if (!clearOf(x, z)) continue;
    const g = new THREE.Group();
    const stem = mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.3, 5),
      makeSenseMaterial({ color: '#3c5c28', temp: 15 }), { cast: false });
    stem.position.y = 0.15;
    const bloom = mesh(new THREE.IcosahedronGeometry(0.09, 1),
      makeSenseMaterial({ color: '#c34a7a', temp: 15, fluor: '#ff2bd6' }), { cast: false });
    bloom.position.y = 0.34;
    g.add(stem, bloom);
    g.position.set(x, heightAt(x, z), z);
    scene.add(g);
  }
  for (let c = 0; c < 4; c++) {
    const cx = (rnd() - 0.5) * 100, cz = (rnd() - 0.5) * 100;
    if (!clearOf(cx, cz)) continue;
    for (let i = 0; i < 5; i++) {
      const x = cx + (rnd() - 0.5) * 2, z = cz + (rnd() - 0.5) * 2;
      const g = new THREE.Group();
      const stem = mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.22, 6),
        makeSenseMaterial({ color: '#cfc7b4', temp: 14 }), { cast: false });
      stem.position.y = 0.11;
      const cap = mesh(new THREE.ConeGeometry(0.14, 0.14, 8),
        makeSenseMaterial({ color: '#8a6d4f', temp: 14, fluor: '#2bff9d' }), { cast: false });
      cap.position.y = 0.26;
      g.add(stem, cap);
      g.position.set(x, heightAt(x, z), z);
      scene.add(g);
    }
  }

  // ---------------- Lagerfeuer (tot, aber heiß!) ----------------
  const fire = new THREE.Group();
  const fireGlow = uniform(new THREE.Color('#000000'));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const st = mesh(new THREE.DodecahedronGeometry(0.22, 0),
      makeSenseMaterial({ color: '#6e6e6e', temp: 40, sunHeatMul: 0.5 }));
    st.position.set(Math.cos(a) * 1.1, 0.12, Math.sin(a) * 1.1);
    fire.add(st);
  }
  for (let i = 0; i < 3; i++) {
    const log = mesh(new THREE.CylinderGeometry(0.09, 0.11, 1.4, 6),
      makeSenseMaterial({ color: '#3a2a1a', temp: 160 }));
    log.rotation.z = Math.PI / 2.3;
    log.rotation.y = i * 2.1;
    log.position.y = 0.25;
    fire.add(log);
  }
  const flames = [];
  for (let i = 0; i < 3; i++) {
    const fl = mesh(new THREE.ConeGeometry(0.28 - i * 0.06, 0.9 + i * 0.35, 7),
      makeSenseMaterial({ color: '#100500', temp: 340, glowU: fireGlow, echoRefl: 0.1 }), { cast: false });
    fl.position.set((i - 1) * 0.16, 0.6 + i * 0.15, (i - 1) * 0.1);
    fire.add(fl);
    flames.push(fl);
  }
  const fireLight = new THREE.PointLight('#ff9040', 0, 22, 1.6);
  fireLight.position.y = 1.2;
  fire.add(fireLight);
  fire.position.set(0, heightAt(0, 10), 10);
  scene.add(fire);

  // ---------------- Hütte (bewohnt: warme Fenster + heißer Schornstein) ----------------
  const hut = new THREE.Group();
  const hutFlash = uniform(0);
  const walls = mesh(new THREE.BoxGeometry(6, 2.8, 5),
    makeSenseMaterial({ color: '#8d7b64', temp: 18, sunHeatMul: 1.5, flash: hutFlash }));
  walls.position.y = 1.4;
  const roof = mesh(new THREE.ConeGeometry(4.6, 1.8, 4),
    makeSenseMaterial({ color: '#6b3f2e', temp: 16, sunHeatMul: 1.8, flash: hutFlash }));
  roof.position.y = 3.7;
  roof.rotation.y = Math.PI / 4;
  const chimney = mesh(new THREE.BoxGeometry(0.5, 1.6, 0.5),
    makeSenseMaterial({ color: '#5a5a5a', temp: 70, flash: hutFlash }));
  chimney.position.set(1.6, 4.3, 1);
  const winMat = makeSenseMaterial({ color: '#332211', temp: 32, glow: '#b97b2f', echoRefl: 0.5 });
  for (const wx of [-1.6, 1.6]) {
    const win = mesh(new THREE.PlaneGeometry(0.9, 0.9), winMat, { cast: false });
    win.position.set(wx, 1.5, 2.51);
    hut.add(win);
  }
  const door = mesh(new THREE.PlaneGeometry(1.1, 2), makeSenseMaterial({ color: '#241a10', temp: 17 }), { cast: false });
  door.position.set(0, 1.0, 2.505);
  hut.add(walls, roof, chimney, door);
  hut.position.set(16, heightAt(16, -14), -14);
  scene.add(hut);
  registerEcho(hut, hutFlash);

  // ---------------- Statue: sieht lebendig aus, ist aber kalt ----------------
  const statue = new THREE.Group();
  const statueFlash = uniform(0);
  const stone = () => makeSenseMaterial({ color: '#9a9aa2', temp: 13, sunHeatMul: 1.6, flash: statueFlash });
  const sockel = mesh(new THREE.BoxGeometry(1.2, 0.5, 1.2), stone());
  sockel.position.y = 0.25;
  const torso = mesh(new THREE.CapsuleGeometry(0.32, 0.9, 4, 10), stone());
  torso.position.y = 1.35;
  const kopf = mesh(new THREE.SphereGeometry(0.24, 12, 10), stone());
  kopf.position.y = 2.2;
  statue.add(sockel, torso, kopf);
  statue.position.set(-6, heightAt(-6, 4), 4);
  scene.add(statue);
  registerEcho(statue, statueFlash);

  // ---------------- Lebewesen ----------------
  function makeWanderer(group, speed, yOff, hop = 0) {
    let target = new THREE.Vector3();
    const pick = () => {
      const a = rnd() * Math.PI * 2, r = 8 + rnd() * 28;
      target.set(group.position.x + Math.cos(a) * r, 0, group.position.z + Math.sin(a) * r);
      target.x = THREE.MathUtils.clamp(target.x, -85, 85);
      target.z = THREE.MathUtils.clamp(target.z, -85, 85);
    };
    pick();
    return (dt, t) => {
      const dx = target.x - group.position.x, dz = target.z - group.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 1) { pick(); return; }
      group.position.x += (dx / dist) * speed * dt;
      group.position.z += (dz / dist) * speed * dt;
      const bounce = hop ? Math.abs(Math.sin(t * hop)) * 0.25 : Math.sin(t * 5) * 0.03;
      group.position.y = heightAt(group.position.x, group.position.z) + yOff + bounce;
      const ry = Math.atan2(dx, dz);
      group.rotation.y += (ry - group.rotation.y + Math.PI * 3) % (Math.PI * 2) * 0.05 - 0;
      group.rotation.y = ry; // direkt ausrichten, ruckelfrei genug für die Demo
    };
  }

  // Rehe
  for (let i = 0; i < 4; i++) {
    const g = new THREE.Group();
    const flash = uniform(0);
    const fur = () => makeSenseMaterial({ color: '#7a5b3a', temp: 38, alive: true, flash, fluor: '#141c3a' });
    const body = mesh(new THREE.CapsuleGeometry(0.42, 1.0, 4, 10), fur());
    body.rotation.x = Math.PI / 2;
    body.position.y = 1.0;
    g.add(body);
    const neck = mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.7, 7), fur());
    neck.position.set(0, 1.45, 0.75);
    neck.rotation.x = -0.5;
    g.add(neck);
    const head = mesh(new THREE.SphereGeometry(0.2, 10, 8), fur());
    head.position.set(0, 1.75, 0.95);
    g.add(head);
    for (const ex of [-0.09, 0.09]) {
      const ear = mesh(new THREE.ConeGeometry(0.06, 0.2, 5), fur());
      ear.position.set(ex, 1.98, 0.9);
      g.add(ear);
    }
    for (const [lx, lz] of [[-0.24, 0.42], [0.24, 0.42], [-0.24, -0.42], [0.24, -0.42]]) {
      const leg = mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.95, 6), fur());
      leg.position.set(lx, 0.48, lz);
      g.add(leg);
    }
    g.position.set((rnd() - 0.5) * 50, 0, (rnd() - 0.5) * 50);
    scene.add(g);
    registerEcho(g, flash);
    creatures.push({ group: g, update: makeWanderer(g, 1.6 + rnd(), 0) });
  }

  // Kaninchen
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group();
    const flash = uniform(0);
    const fur = () => makeSenseMaterial({ color: '#9a8a72', temp: 39, alive: true, flash });
    const body = mesh(new THREE.SphereGeometry(0.22, 10, 8), fur());
    body.scale.set(1, 0.9, 1.3);
    body.position.y = 0.22;
    const head = mesh(new THREE.SphereGeometry(0.13, 8, 8), fur());
    head.position.set(0, 0.36, 0.24);
    g.add(body, head);
    for (const ex of [-0.05, 0.05]) {
      const ear = mesh(new THREE.BoxGeometry(0.04, 0.22, 0.06), fur());
      ear.position.set(ex, 0.53, 0.2);
      g.add(ear);
    }
    g.position.set((rnd() - 0.5) * 60, 0, (rnd() - 0.5) * 60);
    scene.add(g);
    registerEcho(g, flash);
    creatures.push({ group: g, update: makeWanderer(g, 2.5 + rnd() * 1.5, 0, 7) });
  }

  // Vögel (kreisen)
  for (let i = 0; i < 3; i++) {
    const g = new THREE.Group();
    const flash = uniform(0);
    const feather = () => makeSenseMaterial({ color: '#3a3f4a', temp: 41, alive: true, flash });
    const body = mesh(new THREE.ConeGeometry(0.12, 0.55, 6), feather(), { cast: false });
    body.rotation.x = Math.PI / 2;
    const head = mesh(new THREE.SphereGeometry(0.08, 8, 6), feather(), { cast: false });
    head.position.set(0, 0.02, 0.32);
    g.add(body, head);
    const cx = (rnd() - 0.5) * 40, cz = (rnd() - 0.5) * 40;
    const R = 10 + rnd() * 10, h0 = 10 + rnd() * 6, w = (0.25 + rnd() * 0.2) * (i % 2 ? 1 : -1);
    scene.add(g);
    registerEcho(g, flash);
    creatures.push({
      group: g,
      update: (dt, t) => {
        const a = t * w + i * 2.1;
        g.position.set(cx + Math.cos(a) * R, h0 + Math.sin(t * 0.7 + i) * 2, cz + Math.sin(a) * R);
        g.rotation.y = -a + (w > 0 ? 0 : Math.PI);
      },
    });
  }

  // ---------------- Update ----------------
  let flick = 0;
  function update(dt, t, effVis) {
    for (const c of creatures) c.update(dt, t);
    // Feuer-Flackern (sichtbare Emission + Punktlicht nur im sichtbaren Sinn)
    flick += (Math.random() - 0.5) * 8 * dt;
    flick = THREE.MathUtils.clamp(flick * 0.94, -0.5, 0.5);
    const k = 1 + flick + Math.sin(t * 11) * 0.15;
    fireGlow.value.setRGB(2.4 * k, 1.0 * k, 0.25 * k);
    fireLight.intensity = Math.max(0, 60 * k * effVis);
    for (let i = 0; i < flames.length; i++) {
      flames[i].scale.set(1 + flick * 0.4, 1 + Math.sin(t * 13 + i * 2) * 0.18 + flick * 0.5, 1 + flick * 0.4);
    }
  }

  return { update, echoTargets };
}
