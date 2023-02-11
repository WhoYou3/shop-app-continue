import { createSlice } from "@reduxjs/toolkit";

export const CartToggleSlice = createSlice({
  name: "cart",
  initialState: { value: false },
  reducers: {
    setCart: (state) => {
      state.value = !state.value;
    },
  },
});

export default CartToggleSlice.reducer;

export const { setCart } = CartToggleSlice.actions;
