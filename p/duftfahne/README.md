# SmellPlume

Performante GPU-Partikel-Simulation einer **Geruchsfahne** in Three.js (WebGPU / TSL).
Keine glatte Kugel-Wolke, sondern duenne, maeandernde **Filamente** — erzeugt aus
**Wind (Advektion) + Curl Noise (Turbulenz) + Lebensdauer**. Reine Diffusion ist,
wie in der Realitaet, vernachlaessigbar.

## Starten

Wegen ES-Modulen und Import-Map muss die Seite ueber HTTP laufen (nicht per
`file://`):

```bash
cd ChemischeWahnrmungExperiment2

# Variante A (Python):
python3 -m http.server 8000            # -> http://localhost:8000

# Variante B (Node, mitgeliefert):
node server.mjs                        # -> http://localhost:8123
```

Browser mit **WebGPU** (Chrome/Edge aktuell, Safari TP, Firefox Nightly) liefert die
volle Partikelzahl. Ohne WebGPU faellt `WebGPURenderer` automatisch auf **WebGL2**
zurueck; die Partikelzahl wird dann automatisch reduziert.

- Fallback erzwingen zum Testen: `http://localhost:8000/?webgl`
- Das aktive Backend (WebGPU/WebGL) und die aktive Partikelzahl stehen im GUI-Panel.

## Aufbau

| Datei            | Inhalt                                                            |
|------------------|-------------------------------------------------------------------|
| `SmellPlume.js`  | Einbettbares Modul, nur von Three.js abhaengig                    |
| `main.js`        | Demo-Buehne (weisse Welt, prozedurale Pflanzen, lil-gui)          |
| `index.html`     | Import-Map (three r171, TSL, lil-gui) + Bootstrap                 |

## Modul-API

```js
import { SmellPlume } from './SmellPlume.js';

const renderer = new WebGPURenderer({ antialias: true, forceWebGL: false });
await renderer.init();                       // asynchrones Setup abwarten

const plume = new SmellPlume(scene, renderer, {
  particleCount: 200000,
  source: new THREE.Vector3(0, 1.2, 0),
  windDirection: new THREE.Vector3(1, 0.1, 0.3),
});

// Im Animation-Loop:
plume.update(dt);   // Zeit-/Delta-Uniforms aktualisieren
plume.compute();    // Compute-Pass dispatchen (Init einmalig, dann Update)
renderer.render(scene, camera);
```

Weitere Methoden: `setSource(vec3)`, `setWind(vec3)`, `setParams({...})`, `dispose()`.

### Parameter (`options` / `setParams`)

| Parameter        | Bedeutung                                                       |
|------------------|-----------------------------------------------------------------|
| `particleCount`  | Partikelzahl (Default 200k; im WebGL-Fallback autom. gedeckelt) |
| `windDirection`  | Grundwind-Richtung (`Vector3`)                                  |
| `windStrength`   | Windstaerke (Advektion)                                         |
| `turbulence`     | Curl-Noise-Staerke (formt die Filamente)                       |
| `noiseScale`     | Ortsfrequenz des Rauschfelds                                    |
| `buoyancy`       | Auftrieb nach oben (warme Quelle)                              |
| `drag`           | Geschwindigkeitserhalt pro 60-fps-Frame (0.8–1.0)              |
| `maxLife`        | maximale Lebensdauer eines Partikels (s)                       |
| `emissionRate`   | Ejektions-/Streu-Staerke beim Recyceln an der Quelle           |
| `baseSize`       | Basis-Sprite-Groesse                                           |
| `color1`/`color2`| Farbverlauf jung -> alt (ueber `life` interpoliert)            |
| `intensity`      | Farb-/Helligkeitsfaktor                                        |
| `opacity`        | globale Deckkraft                                              |
| `blending`       | `'additive'` (Default) oder `'normal'`                         |

## Funktionsweise

- **Persistente GPU-Buffer** (`instancedArray`): `position`, `velocity`, `age`,
  `maxLife`. Simulation komplett auf der GPU, **kein Per-Frame-Readback**.
- **Init-Compute-Pass**: Partikel an der Quelle streuen, `age` ueber die
  Lebensdauer gestaffelt -> sofort ein kontinuierlicher Strom.
- **Update-Compute-Pass** pro Frame, je Partikel via `instanceIndex`:
  - Advektion (Grundwind), Curl Noise (divergenzfreie Turbulenz -> Filamente),
    Buoyancy (Auftrieb), Drag; danach `position += velocity·dt`, `age += dt`.
  - **Recycling**: bei `age > maxLife` an der Quelle neu streuen.
- **Rendering**: `SpriteNodeMaterial`, additives Blending, `depthWrite: false`.
  Deckkraft ueber `sin(life·π)` (Fade-in + Fade-out), Groesse waechst mit `life`,
  Farbe interpoliert `color1 -> color2` ueber die Lebensphase.

Curl Noise wird in TSL aus `mx_noise_vec3` per finiter Differenzen als Rotation
`∇ × F` berechnet — divergenzfrei, also wie inkompressible Luft.

## Hinweise / Grenzen

- **Additiv auf hellem Grund**: additives Blending *hellt nur auf*. Auf reinem
  Weiss bliebe die Fahne unsichtbar, daher ist der Hintergrund bewusst ein sehr
  helles Grau. Fuer maximalen Kontrast auf hellem Grund im Panel auf
  `Blending: Normal` umschalten.
- **Compute im WebGL-Fallback**: Compute-Shader sind eine WebGPU-Funktion. Je nach
  Browser/Three-Version ist der Compute-Pfad auf dem WebGL2-Backend
  eingeschraenkt. Fuer die volle, animierte Simulation WebGPU verwenden; der
  Fallback dient primaer der Darstellung und wird mit reduzierter Partikelzahl
  gefahren. Das aktive Backend steht im Panel.
- Die CDN-Version ist auf `three@0.171.0` gepinnt. Fuer ein anderes Release die
  drei `three*`-Eintraege in der Import-Map in `index.html` konsistent anheben.
