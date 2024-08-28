import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const authSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    reset: (state) => {
      state.number = initialState.number;
    },
  },
});

// Exporta las acciones creadas
export const { reset, decrement, increment } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
