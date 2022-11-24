import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
  hasCompletedIntro?: boolean;
}

const initialState: PreferencesState = {
  hasCompletedIntro: false,
};

const counterSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCompletedIntro(state, action: PayloadAction<boolean>) {
      state.hasCompletedIntro = action.payload;
    },
  },
});

export const { setCompletedIntro } = counterSlice.actions;
export default counterSlice.reducer;
