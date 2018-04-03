export const ActionTypes = Object.freeze({
	OPEN: '@@LAYERPOPUP/OPEN',
	HIDE: '@@LAYERPOPUP/HIDE',
	CLEAR: '@@LAYERPOPUP/CLEAR'
});

export function show(key, component) {
	return {
		type: ActionTypes.OPEN,
		payload: {
			key,
			component
		}
	}
}

export function hide(key) {
	return {
		type: ActionTypes.HIDE,
		payload: {
			key
		}
	}
}

export function clear() {
	return {
		type: ActionTypes.CLEAR,
		payload: {}
	}
}