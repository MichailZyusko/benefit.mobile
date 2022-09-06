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
      const product = state.products.find(p => p.id === action.payload.id);
      console.log(product, action.payload);

      if (product) {
        product.quantity++;
      } else {
        state.products.push({...action.payload, quantity: 1});
      }

      console.log(state.products);
    },
    removeProductFromCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);

      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        state.products = state.products.filter(p => p.id !== action.payload.id);
      }
    },
  },
});

export const {addProductToCart, removeProductFromCart} =
  cartScreenSlice.actions;

export const selectCartScreen = (state: any) => state.cartScreen;

export const cartScreenReducer = cartScreenSlice.reducer;
