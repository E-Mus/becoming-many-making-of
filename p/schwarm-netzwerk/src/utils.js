import * as THREE from "three";

export function disposeObjectTree(object) {
	const geometries = new Set();
	const materials = new Set();

	object.traverse((child) => {
		if (
			child instanceof THREE.Mesh ||
			child instanceof THREE.LineSegments ||
			child instanceof THREE.Points ||
			child instanceof THREE.InstancedMesh
		) {
			geometries.add(child.geometry);
			if (Array.isArray(child.material)) {
				for (const material of child.material) materials.add(material);
			} else {
				materials.add(child.material);
			}
		}
	});

	for (const geometry of geometries) geometry.dispose();
	for (const material of materials) material.dispose();
}

export function insertNearestLink(nearest, index, distanceSq, limit) {
	for (let i = 0; i < nearest.length; i += 1) {
		if (distanceSq >= nearest[i].distanceSq) continue;
		nearest.splice(i, 0, { index, distanceSq });
		nearest.length = Math.min(nearest.length, limit);
		return;
	}

	if (nearest.length < limit) nearest.push({ index, distanceSq });
}

