import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./ScreenWidthSlice";
import cartToggleReducer from "./CartToggleSlice";
import productListReducer from "./CartProductListSlice";
import quantityProductsReducer from "./QuantityProductsSlice";
import submitFormSliceReducer from "./SubmitFormSlice";

const store = configureStore({
  reducer: {
    width: widthReducer,
    cart: cartToggleReducer,
    productsList: productListReducer,
    quantityProducts: quantityProductsReducer,
    submitFormAvaliable: submitFormSliceReducer,
  },
});

export default store;
