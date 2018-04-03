import {ActionTypes as types} from './ConfigAction';

const initialState = {
	language:'korean',
}

export default function ConfigReducer(state = initialState, action) {
	switch(action.type)	 {
		case types.CHANGE_LANGUAGE:
			return Object.assign(state, {
				language:action.payload.language
			});
		default:
			return state;
	}
}