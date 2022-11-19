import { configureStore, Middleware } from '@reduxjs/toolkit';
import { homeScreenReducer } from '../../screens/home/slicer';
import { cartScreenReducer } from '../../screens/cart/slicer';
import { modalWindowReducer } from '../../components/ModalWindow/slicer';

const middlewares: Middleware[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
    cartScreen: cartScreenReducer,
    modalWindow: modalWindowReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});
