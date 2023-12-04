import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/carts/cartSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});
