import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./ScreenWidthSlice";

const store = configureStore({
  reducer: {
    width: widthReducer,
  },
});

export default store;
