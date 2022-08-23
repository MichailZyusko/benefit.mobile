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
    incrementProductQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementProductQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity -= 1;

        if (product.quantity === 0) {
          state.products = state.products.filter(p => p.id !== action.payload);
        }
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  decrementProductQuantity,
  incrementProductQuantity,
} = cartScreenSlice.actions;

export const selectCartScreen = (state: any) => state.cartScreen;

export const cartScreenReducer = cartScreenSlice.reducer;
