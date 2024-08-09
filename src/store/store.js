import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "../slice/phoneSlice";

export const store = configureStore({
  reducer: {
    products: phoneReducer,
  },
});
