import * as THREE from "three";
import { MyceliumNetwork, SwarmNetwork } from "../src/index.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x020817, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x020817, 120, 760);

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 42, 270);
scene.add(camera);

scene.add(new THREE.AmbientLight(0xb9d8ff, 0.45));
const sun = new THREE.DirectionalLight(0xb9d8ff, 1.0);
sun.position.set(80, 150, 120);
scene.add(sun);

const floor = new THREE.GridHelper(560, 24, 0x174a96, 0x0b2a5e);
floor.position.y = 0;
scene.add(floor);

const birdObjects = [];
const birdGeometry = new THREE.SphereGeometry(1.8, 12, 8);
const birdMaterial = new THREE.MeshStandardMaterial({
	color: 0x2b211d,
	roughness: 0.65,
	metalness: 0.02,
});

for (let i = 0; i < 64; i += 1) {
	const mesh = new THREE.Mesh(birdGeometry, birdMaterial);
	const angle = Math.random() * Math.PI * 2;
	const radius = 18 + Math.sqrt(Math.random()) * 96;
	mesh.position.set(Math.cos(angle) * radius, 38 + (Math.random() - 0.5) * 80, Math.sin(angle) * radius);
	mesh.userData.velocity = new THREE.Vector3(
		Math.random() - 0.5,
		(Math.random() - 0.5) * 0.35,
		Math.random() - 0.5,
	)
		.normalize()
		.multiplyScalar(18 + Math.random() * 24);
	scene.add(mesh);
	birdObjects.push(mesh);
}

const mushroomObjects = [];
const stemGeometry = new THREE.CylinderGeometry(0.48, 0.66, 4.2, 8);
const capGeometry = new THREE.SphereGeometry(1.7, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.58);
const stemMaterial = new THREE.MeshStandardMaterial({ color: 0xd8c79d, roughness: 0.88 });
const capMaterial = new THREE.MeshStandardMaterial({ color: 0xb57938, roughness: 0.74 });

for (let i = 0; i < 34; i += 1) {
	const group = new THREE.Group();
	const angle = Math.random() * Math.PI * 2;
	const radius = 26 + Math.sqrt(Math.random()) * 205;
	const scale = 0.72 + Math.random() * 1.15;
	group.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
	group.scale.setScalar(scale);

	const stem = new THREE.Mesh(stemGeometry, stemMaterial);
	stem.position.y = 2.1;
	const cap = new THREE.Mesh(capGeometry, capMaterial);
	cap.position.y = 4.25;
	group.add(stem, cap);
	scene.add(group);
	mushroomObjects.push(group);
}

const swarmNetwork = new SwarmNetwork({
	maxNodes: 80,
	nearestLinks: 2,
	signalSpeed: 2.6,
	networkIntensity: 0.65,
});
swarmNetwork.setNodes(birdObjects);
scene.add(swarmNetwork.group);

const myceliumNetwork = new MyceliumNetwork({
	radius: 235,
	branchDepth: 3,
});
myceliumNetwork.setMushrooms(mushroomObjects);
myceliumNetwork.rebuild();
scene.add(myceliumNetwork.group);

const keys = new Set();
let yaw = 0;
let pitch = -0.1;
let mouseLook = false;
window.addEventListener("keydown", (event) => keys.add(event.code));
window.addEventListener("keyup", (event) => keys.delete(event.code));
window.addEventListener("mousedown", () => {
	mouseLook = true;
});
window.addEventListener("mouseup", () => {
	mouseLook = false;
});
window.addEventListener("mousemove", (event) => {
	if (!mouseLook) return;
	yaw -= event.movementX * 0.0032;
	pitch = THREE.MathUtils.clamp(pitch - event.movementY * 0.0032, -1.2, 1.2);
});

function updateCamera(delta) {
	const forwardInput = (keys.has("KeyW") ? 1 : 0) - (keys.has("KeyS") ? 1 : 0);
	const rightInput = (keys.has("KeyD") ? 1 : 0) - (keys.has("KeyA") ? 1 : 0);
	const verticalInput = (keys.has("Space") ? 1 : 0) - (keys.has("ShiftLeft") ? 1 : 0);
	const forward = new THREE.Vector3(Math.sin(yaw), 0, -Math.cos(yaw));
	const right = new THREE.Vector3(Math.cos(yaw), 0, Math.sin(yaw));
	const movement = new THREE.Vector3();
	movement.addScaledVector(forward, forwardInput);
	movement.addScaledVector(right, rightInput);
	movement.y += verticalInput;
	if (movement.lengthSq() > 0) camera.position.add(movement.normalize().multiplyScalar(80 * delta));
	camera.rotation.set(pitch, yaw, 0, "YXZ");
}

function updateDemoBirds(delta, elapsed) {
	for (const bird of birdObjects) {
		bird.position.addScaledVector(bird.userData.velocity, delta);
		const pulseRadius = 126 + Math.sin(elapsed * 0.35 + bird.id) * 18;
		if (bird.position.length() > pulseRadius) {
			bird.userData.velocity.addScaledVector(bird.position.clone().normalize(), -28 * delta);
		}
		bird.userData.velocity.clampLength(12, 44);
	}
}

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
	const delta = Math.min(clock.getDelta(), 1 / 30);
	const elapsed = clock.elapsedTime;
	updateCamera(delta);
	updateDemoBirds(delta, elapsed);
	swarmNetwork.update(delta, elapsed);
	myceliumNetwork.update(delta, elapsed);
	renderer.render(scene, camera);
});

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

