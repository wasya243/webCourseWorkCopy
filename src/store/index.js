import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['alert']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);
  return {store, persistor};
};
