import {configureStore} from '@reduxjs/toolkit';
import {homeScreenReducer} from '../../screens/home/slicer';
import {cartScreenReducer} from '../../screens/cart/slicer';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
    cartScreen: cartScreenReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
