import { createSlice } from "@reduxjs/toolkit";

export const submitFormSlice = createSlice({
  name: "submitForm",
  initialState: { value: false },
  reducers: {
    setSubmitAvaliable: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default submitFormSlice.reducer;

export const { setSubmitAvaliable } = submitFormSlice.actions;
