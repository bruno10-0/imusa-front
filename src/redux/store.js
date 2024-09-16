import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ahut/ahutReducer";
import RegisterSlice from "./reducers/RegisterSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: RegisterSlice,
  },
});
