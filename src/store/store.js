import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./ScreenWidthSlice";
import cartToggleReducer from "./CartToggleSlice";
import productListReducer from "./CartProductListSlice";

const store = configureStore({
  reducer: {
    width: widthReducer,
    cart: cartToggleReducer,
    productsList: productListReducer,
  },
});

export default store;
