import {configureStore} from '@reduxjs/toolkit';
import {homeScreenReducer} from '../../screens/home/slicer';
import {cartScreenReducer} from '../../screens/cart/slicer';
import {modalWindowReducer} from '../../components/ModalWindow/slicer';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
    cartScreen: cartScreenReducer,
    modalWindow: modalWindowReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
