import {LayerKeyGen} from './LayerKeyGen';
import {EventName} from './EventName';

export default class LayerPopup {
	static show(layerComponent) {
		const layerKey = LayerKeyGen.getLayerKey();
		var evt = new CustomEvent(EventName.showLayer, {
			detail: {
				layerKey,
				layerComponent
			}
		});
		

		document.dispatchEvent(evt);
		return layerKey;
	}

	static hide(layerKey) {
		var evt = new CustomEvent(EventName.hideLayer, {
			detail: {
				layerKey
			}
		});
		document.dispatchEvent(evt);
	}

	static clear() {
		var evt = new CustomEvent(EventName.clearLayer, {
			detail: {}
		});
		document.dispatchEvent(evt);
	}
}