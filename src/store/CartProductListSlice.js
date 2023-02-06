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
    incrementProducts: (state, action) => {
      const existingProductIndex = state.value.findIndex(
        (product) => product.short === action.payload.short
      );
      state.value[existingProductIndex].count += 1;
      state.value[existingProductIndex].cost += action.payload.singleCost;
    },
    decrementProducts: (state, action) => {
      const existingProductIndex = state.value.findIndex(
        (product) => product.short === action.payload.short
      );
      state.value[existingProductIndex].count -= 1;
      state.value[existingProductIndex].cost -= action.payload.singleCost;
      if (state.value[existingProductIndex].count < 1) {
        console.log("tutaj test");
        state.value = state.value.filter(
          (element, index) => index !== existingProductIndex
        );
      }
    },
  },
});

export default CartProductListSlice.reducer;

export const { setProductToList, decrementProducts, incrementProducts } =
  CartProductListSlice.actions;
