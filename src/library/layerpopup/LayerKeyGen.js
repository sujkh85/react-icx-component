export class LayerKeyGen
{
	static _layerKey = 10000;
	static getLayerKey() {
		LayerKeyGen._layerKey ++;
		return LayerKeyGen._layerKey;
	}

	static reset() {
		if (LayerKeyGen._layerKey > 100000) {
			LayerKeyGen._layerKey = 10000;
		}
	}
}