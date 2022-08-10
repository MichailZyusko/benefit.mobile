import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  isListEnd: false,
  page: 0,
  search: '',
  products: [],
};

export const homeScreenSlice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    onEndReached: state => {
      if (!state.isListEnd) {
        state.page += 1;
      }
    },
    onSearch: (state, action) => {
      state.search = action.payload;
      state.isListEnd = false;
      state.page = 0;
    },
    API_REQUEST: state => {
      console.log('API_REQUEST');
      if (state.page === 0) {
        state.loading = true;
      }
      state.moreLoading = true;
      state.error = null;
    },
    API_SUCCESS: (state, action) => {
      console.log('API_SUCCESS');
      if (state.page === 0) {
        state.products = action.payload;
        state.loading = false;
      } else {
        state.products = state.products.concat(action.payload);
        state.moreLoading = false;
      }
      state.error = null;
    },
    API_FAILURE: (state, action) => {
      console.log('API_FAILURE');
      state.loading = false;
      state.error = action.payload;
    },
    API_LIST_END: state => {
      console.log('API_LIST_END');
      state.isListEnd = true;
    },
  },
});

export const {
  onEndReached,
  onSearch,
  API_LIST_END,
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
} = homeScreenSlice.actions;

export const selectHomeScreen = (state: any) => state.homeScreen;

export const homeScreenReducer = homeScreenSlice.reducer;
