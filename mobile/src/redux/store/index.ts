import {configureStore} from '@reduxjs/toolkit';
import {homeScreenReducer} from '../../screens/home/slicer';
import {cartScreenReducer} from '../../screens/cart/slicer';
import {productCardReducer} from '../../components/ProductCard/slicer';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
    cartScreen: cartScreenReducer,
    productCard: productCardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
