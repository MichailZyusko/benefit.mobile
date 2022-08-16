import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types';

const initialState = {
  products: [],
} as {
  products: Product[];
};

export const cartScreenSlice = createSlice({
  name: 'cartScreen',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addProductToCart, removeProductFromCart} =
  cartScreenSlice.actions;

export const selectCartScreen = (state: any) => state.cartScreen;

export const cartScreenReducer = cartScreenSlice.reducer;
