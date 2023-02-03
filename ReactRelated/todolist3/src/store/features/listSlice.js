import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: [],
  },
  reducers:{}
})

export const {} = listSlice.actions
export default listSlice.reducer
export const selectList = state => state.list.value