import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/carts/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
