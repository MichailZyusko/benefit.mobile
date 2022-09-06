import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  product: null,
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: state => {
      state.product = null;
    },
  },
});

export const {setProduct, removeProduct} = modalWindowSlice.actions;

export const selectModalWindow = (state: any) => state.modalWindow;

export const modalWindowReducer = modalWindowSlice.reducer;
