import { createSlice } from '@reduxjs/toolkit';

export interface SampleState {
  count: number;
}

const initialState: SampleState = {
  count: 0,
};

export const sampleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = sampleSlice.actions;

export default sampleSlice.reducer;
