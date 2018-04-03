import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combinedReducers from './combinedReducers'

let createStoreWithMiddleware;
if (process.env.NODE_ENV === 'production') {
	const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
	});
	createStoreWithMiddleware = applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
	)(createStore);
} else {
	const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
	});
	createStoreWithMiddleware = applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
	)(createStore);
}

export default function ConfigStore(initialState) {
	return createStoreWithMiddleware(combinedReducers, initialState);
};
