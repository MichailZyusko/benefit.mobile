import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  quantity: 0,
};

export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    incrementQuantity: state => {
      if (state.quantity < Number.MAX_SAFE_INTEGER) {
        state.quantity += 1;
      }
    },
    decrementQuantity: state => {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
  },
});

export const {incrementQuantity, decrementQuantity} = productCardSlice.actions;

export const selectProductCard = (state: any) => state.productCard;

export const productCardReducer = productCardSlice.reducer;
