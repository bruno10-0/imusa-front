import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./reducers/stateReducer";
export const store = configureStore({
  reducer: {
    state: stateReducer,
  },
});
