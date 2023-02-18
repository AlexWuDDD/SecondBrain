import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import "../../../mock/mockapi";

const detailSlice = createSlice({
  name: 'detail',
  initialState:{
    title: '',
    content: '<p>111111111111111111111</p>',
  },
  reducers: {

  }
});


export default detailSlice.reducer;

export const selectContent = state => state.detail.content;