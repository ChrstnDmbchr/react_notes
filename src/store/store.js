import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(rootReducer, middleware);

export default store;