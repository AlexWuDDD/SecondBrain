import { createSlice } from "@reduxjs/toolkit";

export const inputValueSlice = createSlice({
  name: 'inputValie',
  initialState: {
    value: null,
  },
  reducers:{}
})

export const {} = inputValueSlice.actions
export default inputValueSlice.reducer
export const selectInputValue = state => state.inputValue.value