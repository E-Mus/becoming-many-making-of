export function normalizeNodeSource(source, fallbackIdPrefix = "node") {
	return source.map((item, index) => {
		if (item?.isObject3D) {
			return {
				id: item.name || `${fallbackIdPrefix}-${index}`,
				object: item,
				position: item.position,
			};
		}

		if (!item?.position) {
			throw new Error("Network nodes need either THREE.Object3D or { position } objects.");
		}

		return {
			id: item.id || `${fallbackIdPrefix}-${index}`,
			object: item.object,
			position: item.position,
		};
	});
}

