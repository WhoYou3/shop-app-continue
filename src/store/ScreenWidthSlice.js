import { createSlice } from "@reduxjs/toolkit";

export const ScreenWidthSlice = createSlice({
  name: "width",
  initialState: { value: 0 },
  reducers: {
    setWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default ScreenWidthSlice.reducer;

export const { setWidth } = ScreenWidthSlice.actions;
