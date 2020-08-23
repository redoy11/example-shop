import { combineReducers, createStore } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import shop, { reducerName as shopReducer } from './ducks/shop';

// reducers

/** Initial reducers in the reducer registry */
const defaultReducers: any = {};

/** Add shop reducer to registry */
defaultReducers[shopReducer] = shop;

/** Create reducers from default reducers obj */
const reducers = combineReducers(defaultReducers);

// store

/** The initial store */
const store = createStore(
  reducers,
  SeamlessImmutable({}),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
