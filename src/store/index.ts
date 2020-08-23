import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import shop, {
  reducerName as shopReducer,
  fetchShopItemsEpic,
} from './ducks/shop';

// reducers

/** Initial reducers in the reducer registry */
const defaultReducers: any = {};

/** Add shop reducer to registry */
defaultReducers[shopReducer] = shop;

/** Create reducers from default reducers obj */
const reducers = combineReducers(defaultReducers);

// epics

/** Create root epics */
export const rootEpic = combineEpics(fetchShopItemsEpic);

// middlewares

/** Create the epic middleware */
const epicMiddleware = createEpicMiddleware();

// Redux Dev Tools

/** Create composer for redux dev tools */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store

/** The initial store */
const store = createStore(
  reducers,
  SeamlessImmutable({}),
  composeEnhancers(applyMiddleware(epicMiddleware))
);

/** Start the epic middleware */
epicMiddleware.run(rootEpic);

export default store;
