import {ActionTypes as types} from './LayerPopupAction';
import simpleDotProp from '../simpleDotProp';

const initialState = {
	layers: {},
}

export default function LayerPopupReducer(state = initialState, action) {
	switch(action.type) {
		case types.OPEN:
			return simpleDotProp.set(state, {
				layers:{...state.layers, [action.payload.key]:action.payload.component}
			})
		case types.HIDE:
			const layers = {...state.layers};
			delete layers[action.payload.key];
			return simpleDotProp.set(state, {layers})
		case types.CLEAR:
			return simpleDotProp.set(state, {layers: []})
		default:
			return state;
	}
}