import { createSlice } from "@reduxjs/toolkit";

export const QuantityProductsSlice = createSlice({
  name: "quantityProducts",
  initialState: { value: 0 },
  reducers: {
    setQuantity: (state, action) => {
      let quantity = 0;
      action.payload.map((product) => {
        quantity += product.count;
      });
      state.value = quantity;
    },
  },
});

export default QuantityProductsSlice.reducer;

export const { setQuantity } = QuantityProductsSlice.actions;
