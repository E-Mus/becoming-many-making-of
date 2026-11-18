# swarm_network

Plain-JavaScript-Modul fuer Becoming Many.

Enthalten:

- `SwarmNetwork`: erzeugt Verbindungen und Signalpartikel zwischen uebergebenen beweglichen Objekten.
- `MyceliumNetwork`: erzeugt ein unterirdisches Myzelnetz auf Basis uebergebener Pilz-/Objektpositionen.
- `index.html`: minimale Demo ohne ICAROS, Svelte, Vite oder TypeScript.

## Nutzung

```js
import { MyceliumNetwork, SwarmNetwork } from "./src/index.js";

const swarm = new SwarmNetwork();
swarm.setNodes(birdObjects); // THREE.Object3D[] oder { position }[]
scene.add(swarm.group);

const mycelium = new MyceliumNetwork();
mycelium.setMushrooms(mushroomObjects); // THREE.Object3D[] oder { position }[]
mycelium.rebuild();
scene.add(mycelium.group);

function frame(delta, elapsed) {
	swarm.update(delta, elapsed);
	mycelium.update(delta, elapsed);
}
```

## Demo starten

In diesem Ordner:

```sh
python3 -m http.server 8080
```

Dann `http://localhost:8080` oeffnen.

