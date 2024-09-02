import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ahut/ahutReducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
