import {configureStore} from '@reduxjs/toolkit';
import {homeScreenReducer} from '../../screens/home/slicer';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
  },
});
