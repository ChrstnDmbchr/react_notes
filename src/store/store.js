import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = applyMiddleware(promise(), thunk, createLogger());

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
    persistedReducer,
    {},
    middleware
);

export let persistor = persistStore(store);

window.state = store.getState();