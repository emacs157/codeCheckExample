import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combinedReducers } from './reducers/index';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	combinedReducers,
	undefined,
	// {
	// 	_persist: {
	// 		version: 1,
	// 		rehydrated: true,
	// 	},
	// },
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
