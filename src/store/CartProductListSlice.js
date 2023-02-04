import { createSlice } from "@reduxjs/toolkit";

export const CartProductListSlice = createSlice({
  name: "cartProductList",
  initialState: { value: [] },
  reducers: {
    setProductToList: (state, action) => {
      const existingProductIndex = state.value.findIndex(
        (product) => product.short === action.payload.short
      );
      if (existingProductIndex === -1) {
        state.value.push(action.payload);
      } else {
        state.value[existingProductIndex].count += +action.payload.count;
        state.value[existingProductIndex].cost += +action.payload.cost;
      }
    },
  },
});

export default CartProductListSlice.reducer;

export const { setProductToList } = CartProductListSlice.actions;
