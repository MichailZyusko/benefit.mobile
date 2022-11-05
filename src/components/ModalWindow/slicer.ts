import { createSlice } from '@reduxjs/toolkit';
import ProductDto from '../../api/products/product.dto';

const initialState = {
  product: null,
} as {
  product: ProductDto | null;
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: (state) => {
      state.product = null;
    },
    // incrementQuantityModal: (state) => {
    //   if (state.product) {
    //     state.product = {
    //       ...state.product,
    //       quantity: state.product.quantity + 1,
    //     };
    //   }
    // },
    // decrementQuantityModal: (state) => {
    //   if (state.product) {
    //     state.product = {
    //       ...state.product,
    //       quantity: state.product.quantity - 1,
    //     };
    //   }
    // },
  },
});

export const {
  setProduct,
  removeProduct,
  // incrementQuantityModal,
  // decrementQuantityModal,
} = modalWindowSlice.actions;

export const selectModalWindow = (state: any) => state.modalWindow;

export const modalWindowReducer = modalWindowSlice.reducer;
