import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'production' ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		name: 'ISCWS',
		actionsBlacklist: [],
		trace: true,
		traceLimit: 15,
	}) : compose;

export const createGlobalStore = () => {
	const sagas = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(
				sagas,
			),
		),
	);
	sagas.run(rootSaga);
	return store;
};