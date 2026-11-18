# swarm_network Architecture

## Modul-Kern

Der Kern besteht aus zwei getrennten Plain-JavaScript-Klassen:

- `SwarmNetwork`
- `MyceliumNetwork`

Beide Klassen nehmen Objektlisten entgegen. Sie besitzen keine eigenen Vogel- oder Pilzmodelle und keine Abhaengigkeit zu ICAROS, Svelte, Vite oder Neural Flight.

## Inputs

Beide Netzwerke akzeptieren:

- `THREE.Object3D[]`
- oder Objekte mit mindestens `{ position: THREE.Vector3 }`

Die Klassen kopieren keine Modelle. Sie lesen nur Positionen und erzeugen daraus visuelle Netzwerke.

## SwarmNetwork

Erzeugt zwischen uebergebenen beweglichen Objekten:

- Verbindungshoehren als `InstancedMesh`
- leichte Glow-Roehren
- jeweils ein Signalpartikel pro Verbindung

Wichtige Methoden:

- `setNodes(nodes)`
- `setOptions(options)`
- `update(delta, elapsed)`
- `dispose()`

## MyceliumNetwork

Erzeugt auf Basis uebergebener Pilz-/Objektpositionen:

- konstante Myzel-Basislinien
- lokale pulsierende Hotspots
- rekursiv verzweigte unterirdische Arme

Wichtige Methoden:

- `setMushrooms(mushrooms)`
- `rebuild()`
- `setOptions(options)`
- `update(delta, elapsed)`
- `dispose()`

## Demo

Die Demo ist absichtlich rudimentaer:

- einfache Kugeln als bewegliche Schwarm-Knoten
- einfache Pilz-Platzhalter als Myzel-Knoten
- Grid-Boden
- freie WASD/Maus-Kamera

Sie ist nicht Teil des Modul-Kerns.
