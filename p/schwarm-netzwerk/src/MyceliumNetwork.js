import * as THREE from "three";
import { normalizeNodeSource } from "./objectAdapters.js";
import { insertNearestLink } from "./utils.js";

const DEFAULT_OPTIONS = {
	radius: 235,
	neighbourLinks: 4,
	radialArms: 8,
	branchDepth: 3,
	segments: 18,
	maxDepth: 7.5,
	baseColor: "#73f7ff",
	hotspotColor: "#d7ff9a",
	baseAlpha: 0.2,
	hotspotAlpha: 0.72,
	hotspotStrength: 2.8,
	hotspotSpeed: 4.8,
};

const previous = new THREE.Vector3();
const current = new THREE.Vector3();

function createMyceliumMaterial(color, baseAlpha, glowStrength, constantBase, hotspotSpeed) {
	return new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 },
			uColor: { value: new THREE.Color(color) },
			uBaseAlpha: { value: baseAlpha },
			uGlowStrength: { value: glowStrength },
			uConstantBase: { value: constantBase ? 1 : 0 },
			uHotspotSpeed: { value: hotspotSpeed },
		},
		vertexShader: `
			attribute float phase;
			varying float vPhase;

			void main() {
				vPhase = phase;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,
		fragmentShader: `
			uniform float uTime;
			uniform vec3 uColor;
			uniform float uBaseAlpha;
			uniform float uGlowStrength;
			uniform int uConstantBase;
			uniform float uHotspotSpeed;
			varying float vPhase;

			void main() {
				if (uConstantBase == 1) {
					gl_FragColor = vec4(uColor, uBaseAlpha);
					return;
				}

				float movingHotspot = sin(vPhase * 38.0 - uTime * uHotspotSpeed);
				float localHotspot = sin(vPhase * 93.0 + uTime * 0.42);
				float pulse = smoothstep(0.93, 1.0, movingHotspot * 0.72 + localHotspot * 0.28);
				gl_FragColor = vec4(uColor * (1.0 + pulse * uGlowStrength), pulse * uBaseAlpha);
			}
		`,
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthTest: true,
		depthWrite: false,
		toneMapped: false,
	});
}

function cubicPoint(target, start, controlA, controlB, end, t) {
	const inverse = 1 - t;
	const startWeight = inverse * inverse * inverse;
	const controlAWeight = 3 * inverse * inverse * t;
	const controlBWeight = 3 * inverse * t * t;
	const endWeight = t * t * t;
	return target
		.copy(start)
		.multiplyScalar(startWeight)
		.addScaledVector(controlA, controlAWeight)
		.addScaledVector(controlB, controlBWeight)
		.addScaledVector(end, endWeight);
}

export class MyceliumNetwork {
	constructor(options = {}) {
		this.options = { ...DEFAULT_OPTIONS, ...options };
		this.mushrooms = [];
		this.group = new THREE.Group();
		this.group.name = "mycelium-network";

		this.armMaterial = createMyceliumMaterial(
			this.options.baseColor,
			this.options.baseAlpha,
			1,
			true,
			this.options.hotspotSpeed,
		);
		this.glowMaterial = createMyceliumMaterial(
			this.options.hotspotColor,
			this.options.hotspotAlpha,
			this.options.hotspotStrength,
			false,
			this.options.hotspotSpeed,
		);

		this.armGeometry = new THREE.BufferGeometry();
		this.glowGeometry = new THREE.BufferGeometry();
		this.arms = new THREE.LineSegments(this.armGeometry, this.armMaterial);
		this.glowArms = new THREE.LineSegments(this.glowGeometry, this.glowMaterial);
		this.glowArms.position.y = 0.04;
		this.arms.frustumCulled = false;
		this.glowArms.frustumCulled = false;
		this.group.add(this.arms, this.glowArms);
	}

	setMushrooms(mushrooms) {
		this.mushrooms = normalizeNodeSource(Array.from(mushrooms), "mushroom");
	}

	setOptions(options) {
		this.options = { ...this.options, ...options };
		this.armMaterial.uniforms.uColor.value.set(this.options.baseColor);
		this.armMaterial.uniforms.uBaseAlpha.value = this.options.baseAlpha;
		this.glowMaterial.uniforms.uColor.value.set(this.options.hotspotColor);
		this.glowMaterial.uniforms.uBaseAlpha.value = this.options.hotspotAlpha;
		this.glowMaterial.uniforms.uGlowStrength.value = this.options.hotspotStrength;
		this.glowMaterial.uniforms.uHotspotSpeed.value = this.options.hotspotSpeed;
	}

	rebuild() {
		const positions = [];
		const phases = [];

		for (let i = 0; i < this.mushrooms.length; i += 1) {
			this.#addMushroomNeighbourLinks(positions, phases, i);
			this.#addMushroomRadialGrowth(positions, phases, this.mushrooms[i].position, i);
		}

		for (let i = 0; i < this.mushrooms.length; i += 1) {
			const source = this.mushrooms[i].position;
			const opposite = this.mushrooms[(i * 13 + 5) % this.mushrooms.length]?.position;
			if (!opposite) continue;
			const midpoint = this.#clampPoint(
				new THREE.Vector3()
					.copy(source)
					.lerp(opposite, 0.5)
					.add(new THREE.Vector3(Math.sin(i * 1.7) * 16, 0, Math.cos(i * 2.1) * 16)),
			);
			this.#addArm(positions, phases, source, midpoint, 0.53 + i * 0.029, 1);
			this.#addArm(positions, phases, midpoint, opposite, 0.79 + i * 0.037, 1);
		}

		this.armGeometry.dispose();
		this.glowGeometry.dispose();
		this.armGeometry = new THREE.BufferGeometry();
		this.armGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
		this.armGeometry.setAttribute("phase", new THREE.Float32BufferAttribute(phases, 1));
		this.glowGeometry = this.armGeometry.clone();
		this.arms.geometry = this.armGeometry;
		this.glowArms.geometry = this.glowGeometry;
	}

	update(_delta, elapsed) {
		this.armMaterial.uniforms.uTime.value = elapsed;
		this.glowMaterial.uniforms.uTime.value = elapsed;
	}

	#addMushroomNeighbourLinks(positions, phases, sourceIndex) {
		const start = this.mushrooms[sourceIndex].position;
		const nearest = [];

		for (let i = 0; i < this.mushrooms.length; i += 1) {
			if (i === sourceIndex) continue;
			insertNearestLink(nearest, i, start.distanceToSquared(this.mushrooms[i].position), this.options.neighbourLinks);
		}

		for (let i = 0; i < nearest.length; i += 1) {
			const end = this.mushrooms[nearest[i].index].position;
			const phase = sourceIndex * 0.071 + i * 0.19;
			this.#addArm(positions, phases, start, end, phase, i < 2 ? 2 : 1);
			const midpoint = new THREE.Vector3().copy(start).lerp(end, 0.46);
			const angle = Math.atan2(end.z - start.z, end.x - start.x) + (i % 2 === 0 ? 1 : -1) * 0.82;
			this.#addBranchingArm(positions, phases, midpoint, angle, 18 + i * 5, 1, phase + 0.37, 1);
		}
	}

	#addMushroomRadialGrowth(positions, phases, mushroomPosition, sourceIndex) {
		for (let arm = 0; arm < this.options.radialArms; arm += 1) {
			const angle =
				(sourceIndex * 2.399963 + arm * ((Math.PI * 2) / this.options.radialArms)) %
				(Math.PI * 2);
			const length = 24 + Math.random() * 68;
			const phase = sourceIndex * 0.043 + arm * 0.113;
			this.#addBranchingArm(
				positions,
				phases,
				mushroomPosition,
				angle,
				length,
				this.options.branchDepth,
				phase,
				arm % 3 === 0 ? 2 : 1,
			);
		}
	}

	#addBranchingArm(positions, phases, start, angle, length, depth, phaseOffset, thicknessRepeats) {
		const end = this.#clampPoint(
			new THREE.Vector3(
				start.x + Math.cos(angle) * length,
				start.y - (0.36 + depth * 0.18 + Math.random() * 0.55),
				start.z + Math.sin(angle) * length,
			),
		);
		this.#addArm(positions, phases, start, end, phaseOffset, thicknessRepeats);
		if (depth <= 0) return end;

		const branchCount = Math.max(2, depth + 1);
		for (let branch = 0; branch < branchCount; branch += 1) {
			const branchT = 0.24 + branch * (0.56 / branchCount);
			const branchStart = this.#clampPoint(
				new THREE.Vector3()
					.copy(start)
					.lerp(end, branchT)
					.add(new THREE.Vector3(0, -0.24 - Math.random() * 0.8, 0)),
			);
			const sideSign = branch % 2 === 0 ? 1 : -1;
			const branchAngle =
				angle +
				sideSign *
					(0.36 + depth * 0.18 + branch * 0.1 + Math.sin(phaseOffset * 19.0 + branch) * 0.12);
			const branchLength = length * (0.36 + Math.random() * 0.16);
			this.#addBranchingArm(
				positions,
				phases,
				branchStart,
				branchAngle,
				branchLength,
				depth - 1,
				phaseOffset + branch * 0.173 + depth * 0.41,
				1,
			);
		}

		return end;
	}

	#addArm(positions, phases, start, end, phaseOffset, thicknessRepeats) {
		const side = new THREE.Vector3(
			Math.sin(phaseOffset * 13.7),
			0,
			Math.cos(phaseOffset * 9.1),
		).normalize();
		const distance = start.distanceTo(end);
		const bend = Math.min(24, Math.max(5, distance * 0.2));
		const controlA = new THREE.Vector3()
			.copy(start)
			.lerp(end, 0.34)
			.addScaledVector(side, bend * Math.sin(phaseOffset * 8.0));
		const controlB = new THREE.Vector3()
			.copy(start)
			.lerp(end, 0.7)
			.addScaledVector(side, bend * Math.cos(phaseOffset * 6.3) * -0.72);
		const depthSag =
			0.7 +
			Math.min(this.options.maxDepth, distance * 0.045) +
			Math.abs(Math.sin(phaseOffset * 12.0)) * 2.1;
		controlA.y -= depthSag * 0.46;
		controlB.y -= depthSag * 0.86;

		for (let repeat = 0; repeat < thicknessRepeats; repeat += 1) {
			const strandOffset = (repeat - (thicknessRepeats - 1) * 0.5) * 0.58;
			for (let segment = 0; segment < this.options.segments; segment += 1) {
				const t0 = segment / this.options.segments;
				const t1 = (segment + 1) / this.options.segments;
				const wiggle0 =
					Math.sin(t0 * Math.PI * 3.0 + phaseOffset * 11.0) * 2.1 +
					Math.sin(t0 * Math.PI * 7.0 + phaseOffset * 5.0) * 0.72;
				const wiggle1 =
					Math.sin(t1 * Math.PI * 3.0 + phaseOffset * 11.0) * 2.1 +
					Math.sin(t1 * Math.PI * 7.0 + phaseOffset * 5.0) * 0.72;

				cubicPoint(previous, start, controlA, controlB, end, t0).addScaledVector(side, wiggle0 + strandOffset);
				cubicPoint(current, start, controlA, controlB, end, t1).addScaledVector(side, wiggle1 + strandOffset);
				previous.y -= Math.sin(t0 * Math.PI) * depthSag;
				current.y -= Math.sin(t1 * Math.PI) * depthSag;
				previous.y += 0.12 + Math.sin((t0 + phaseOffset) * 18.0) * 0.06;
				current.y += 0.12 + Math.sin((t1 + phaseOffset) * 18.0) * 0.06;

				positions.push(previous.x, previous.y, previous.z, current.x, current.y, current.z);
				phases.push(t0 + phaseOffset, t1 + phaseOffset);
			}
		}
	}

	#clampPoint(point) {
		const horizontalLengthSq = point.x * point.x + point.z * point.z;
		if (horizontalLengthSq > this.options.radius * this.options.radius) {
			const horizontalScale = this.options.radius / Math.sqrt(horizontalLengthSq);
			point.x *= horizontalScale;
			point.z *= horizontalScale;
		}
		point.y = THREE.MathUtils.clamp(point.y, -this.options.maxDepth, 0.24);
		return point;
	}

	dispose() {
		this.armGeometry.dispose();
		this.glowGeometry.dispose();
		this.armMaterial.dispose();
		this.glowMaterial.dispose();
	}
}
