import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: 'header',
  initialState:{
    searchFocused: false,
  },

  reducers:{
    setSearchFocused: (state, action)=>{
      state.searchFocused = action.payload;
    }
  }
});


export const {setSearchFocused} = headerSlice.actions;
export default headerSlice.reducer;
export const selectSearchFocused = state => state.header.searchFocused;