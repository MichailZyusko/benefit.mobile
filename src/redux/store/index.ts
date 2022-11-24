import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { homeScreenReducer } from '../../screens/home/slicer';
import { cartScreenReducer } from '../../screens/cart/slicer';
import { modalWindowReducer } from '../../components/ModalWindow/slicer';
import preferences from '../reducers/preferences';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middlewares: Middleware[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['preferences'],
};

const rootReducer = combineReducers({
  homeScreen: homeScreenReducer,
  cartScreen: cartScreenReducer,
  modalWindow: modalWindowReducer,
  preferences: preferences,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});
export const persistor = persistStore(store);
