import * as THREE from "three";
import { normalizeNodeSource } from "./objectAdapters.js";
import { insertNearestLink } from "./utils.js";

const DEFAULT_OPTIONS = {
	maxNodes: 128,
	nearestLinks: 2,
	linkSegments: 6,
	linkRadius: 0.24,
	glowRadius: 0.78,
	linkColor: "#ffe45c",
	glowColor: "#ffd400",
	signalCoreColor: "#fff15a",
	signalHaloColor: "#ffd400",
	signalSpeed: 2.45,
	signalTravelSeconds: 0.52,
	signalSize: 10,
	networkIntensity: 0.7,
	curveStrength: 0.032,
	endpointPadding: 0.28,
};

const curvePoint = new THREE.Vector3();
const curveNext = new THREE.Vector3();
const curveMid = new THREE.Vector3();
const curveOffset = new THREE.Vector3();
const curveAxis = new THREE.Vector3();
const tubeMatrix = new THREE.Matrix4();
const tubeQuaternion = new THREE.Quaternion();
const tubeScale = new THREE.Vector3();
const tubeUp = new THREE.Vector3(0, 1, 0);
const signalPoint = new THREE.Vector3();

function pingPong(value) {
	const wrapped = value % 2;
	return wrapped <= 1 ? wrapped : 2 - wrapped;
}

function curvedLinkPoint(start, end, t, phase, target, curveStrength) {
	curveMid.copy(start).lerp(end, 0.5);
	curveAxis.copy(end).sub(start);
	curveOffset.set(
		Math.sin(phase * 5.1),
		Math.cos(phase * 3.7) * 0.45,
		Math.sin(phase * 2.9 + 1.3),
	);
	if (curveAxis.lengthSq() > 0.0001) curveOffset.cross(curveAxis).normalize();

	const arcStrength = Math.min(8, Math.max(2.4, curveAxis.length() * curveStrength));
	const arc = Math.sin(t * Math.PI) * arcStrength;
	return target.copy(start).lerp(end, t).addScaledVector(curveOffset, arc);
}

function setTubeSegmentInstance(mesh, index, start, end, radius) {
	curveAxis.copy(end).sub(start);
	const length = curveAxis.length();
	if (length <= 0.001) {
		tubeMatrix.makeScale(0, 0, 0);
		mesh.setMatrixAt(index, tubeMatrix);
		return;
	}

	curveMid.copy(start).add(end).multiplyScalar(0.5);
	tubeQuaternion.setFromUnitVectors(tubeUp, curveAxis.normalize());
	tubeScale.set(radius, length, radius);
	tubeMatrix.compose(curveMid, tubeQuaternion, tubeScale);
	mesh.setMatrixAt(index, tubeMatrix);
}

export class SwarmNetwork {
	constructor(options = {}) {
		this.options = { ...DEFAULT_OPTIONS, ...options };
		this.nodes = [];
		this.group = new THREE.Group();
		this.group.name = "swarm-network";

		const tubeInstanceCount = this.options.maxNodes * this.options.nearestLinks * this.options.linkSegments;
		this.lineGeometry = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true);
		this.lineMaterial = new THREE.MeshBasicMaterial({
			color: this.options.linkColor,
			transparent: true,
			opacity: 0.18 + this.options.networkIntensity * 0.18,
			depthTest: true,
			depthWrite: false,
			toneMapped: false,
		});
		this.lines = new THREE.InstancedMesh(this.lineGeometry, this.lineMaterial, tubeInstanceCount);
		this.lines.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.lines.frustumCulled = false;
		this.group.add(this.lines);

		this.glowMaterial = new THREE.MeshBasicMaterial({
			color: this.options.glowColor,
			transparent: true,
			opacity: 0.025 + this.options.networkIntensity * 0.045,
			blending: THREE.AdditiveBlending,
			depthTest: true,
			depthWrite: false,
			toneMapped: false,
		});
		this.glowLines = new THREE.InstancedMesh(this.lineGeometry, this.glowMaterial, tubeInstanceCount);
		this.glowLines.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.glowLines.frustumCulled = false;
		this.group.add(this.glowLines);

		this.particleGeometry = new THREE.BufferGeometry();
		this.particlePositions = new THREE.BufferAttribute(new Float32Array(this.options.maxNodes * this.options.nearestLinks * 3), 3).setUsage(THREE.DynamicDrawUsage);
		this.particleAlphas = new THREE.BufferAttribute(new Float32Array(this.options.maxNodes * this.options.nearestLinks), 1).setUsage(THREE.DynamicDrawUsage);
		this.particleSizes = new THREE.BufferAttribute(new Float32Array(this.options.maxNodes * this.options.nearestLinks), 1).setUsage(THREE.DynamicDrawUsage);
		this.particleGeometry.setAttribute("position", this.particlePositions);
		this.particleGeometry.setAttribute("alpha", this.particleAlphas);
		this.particleGeometry.setAttribute("size", this.particleSizes);
		this.particleGeometry.setDrawRange(0, 0);
		this.particleMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uCoreColor: { value: new THREE.Color(this.options.signalCoreColor) },
				uHaloColor: { value: new THREE.Color(this.options.signalHaloColor) },
			},
			vertexShader: `
				attribute float alpha;
				attribute float size;
				varying float vAlpha;

				void main() {
					vAlpha = alpha;
					vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
					gl_PointSize = size * (320.0 / -mvPosition.z);
					gl_Position = projectionMatrix * mvPosition;
				}
			`,
			fragmentShader: `
				uniform vec3 uCoreColor;
				uniform vec3 uHaloColor;
				varying float vAlpha;

				void main() {
					vec2 centeredUv = gl_PointCoord - vec2(0.5);
					float distanceToCenter = length(centeredUv);
					if (distanceToCenter > 0.5) discard;

					float core = smoothstep(0.22, 0.02, distanceToCenter);
					float halo = smoothstep(0.5, 0.12, distanceToCenter);
					vec3 color = mix(uHaloColor, uCoreColor, core);
					gl_FragColor = vec4(color, halo * vAlpha);
				}
			`,
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthTest: true,
			depthWrite: false,
			toneMapped: false,
		});
		this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
		this.particles.frustumCulled = false;
		this.group.add(this.particles);
	}

	setNodes(nodes) {
		this.nodes = normalizeNodeSource(Array.from(nodes), "swarm-node").slice(0, this.options.maxNodes);
	}

	setOptions(options) {
		this.options = { ...this.options, ...options };
		this.lineMaterial.color.set(this.options.linkColor);
		this.glowMaterial.color.set(this.options.glowColor);
		this.particleMaterial.uniforms.uCoreColor.value.set(this.options.signalCoreColor);
		this.particleMaterial.uniforms.uHaloColor.value.set(this.options.signalHaloColor);
	}

	update(_delta, elapsed) {
		const positions = this.particlePositions.array;
		const alphas = this.particleAlphas.array;
		const sizes = this.particleSizes.array;
		let linkCount = 0;
		let particleCount = 0;
		const maxLinks = this.options.maxNodes * this.options.nearestLinks;

		for (let i = 0; i < this.nodes.length && linkCount < maxLinks; i += 1) {
			const nearest = [];
			const a = this.nodes[i];

			for (let j = 0; j < this.nodes.length; j += 1) {
				if (i === j) continue;
				insertNearestLink(nearest, j, a.position.distanceToSquared(this.nodes[j].position), this.options.nearestLinks);
			}

			for (let n = 0; n < nearest.length && linkCount < maxLinks; n += 1) {
				const b = this.nodes[nearest[n].index];
				const distance = Math.sqrt(nearest[n].distanceSq);
				const closeness = 1 / (1 + distance * 0.018);
				const phase = i * 0.137 + nearest[n].index * 0.071;

				for (let segment = 0; segment < this.options.linkSegments; segment += 1) {
					const t0 = segment / this.options.linkSegments;
					const t1 = (segment + 1) / this.options.linkSegments;
					curvedLinkPoint(a.position, b.position, t0, phase, curvePoint, this.options.curveStrength);
					curvedLinkPoint(a.position, b.position, t1, phase, curveNext, this.options.curveStrength);
					const instanceIndex = linkCount * this.options.linkSegments + segment;
					setTubeSegmentInstance(this.lines, instanceIndex, curvePoint, curveNext, this.options.linkRadius * (0.82 + closeness * 0.32));
					setTubeSegmentInstance(this.glowLines, instanceIndex, curvePoint, curveNext, this.options.glowRadius * (0.86 + closeness * 0.25));
				}

				const raw = (elapsed * this.options.signalSpeed) / this.options.signalTravelSeconds + phase;
				const t = this.options.endpointPadding + pingPong(raw) * (1 - this.options.endpointPadding * 2);
				curvedLinkPoint(a.position, b.position, t, phase, signalPoint, this.options.curveStrength);

				const offset = particleCount * 3;
				positions[offset] = signalPoint.x;
				positions[offset + 1] = signalPoint.y;
				positions[offset + 2] = signalPoint.z;
				alphas[particleCount] = (0.7 + closeness * 0.28) * this.options.networkIntensity;
				sizes[particleCount] = this.options.signalSize * (0.8 + closeness * 0.7);
				particleCount += 1;
				linkCount += 1;
			}
		}

		this.lines.count = linkCount * this.options.linkSegments;
		this.glowLines.count = linkCount * this.options.linkSegments;
		this.particleGeometry.setDrawRange(0, particleCount);
		this.lines.instanceMatrix.needsUpdate = true;
		this.glowLines.instanceMatrix.needsUpdate = true;
		this.lineMaterial.opacity = 0.18 + this.options.networkIntensity * 0.18;
		this.glowMaterial.opacity = 0.025 + this.options.networkIntensity * 0.045;
		this.particlePositions.needsUpdate = true;
		this.particleAlphas.needsUpdate = true;
		this.particleSizes.needsUpdate = true;
	}

	dispose() {
		this.lineGeometry.dispose();
		this.lineMaterial.dispose();
		this.glowMaterial.dispose();
		this.particleGeometry.dispose();
		this.particleMaterial.dispose();
	}
}
