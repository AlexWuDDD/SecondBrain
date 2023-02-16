import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../mock/mockapi";

export const headerSlice = createSlice({
  name: 'header',
  initialState:{
    searchFocused: false,
    searchList: [],
    searchPage: 1,
    searchTotalPage: 1,
    searchListMouseIn: false,
  },

  reducers:{
    setSearchFocused: (state, action)=>{
      state.searchFocused = action.payload;
    },
    setSearchList: (state, action)=>{
      state.searchList = action.payload;
    },
    setSearchTotalPage:(state, action) =>{
      state.searchTotalPage = action.payload;
    },
    setSearchListMouseIn:(state, action)=>{
      state.searchListMouseIn = action.payload;
    },
    changeSerachPage:(state, action)=>{
      state.searchPage = state.searchPage+1;
      if(state.searchPage > state.searchTotalPage){
        state.searchPage = 1;
      }
    }
  }
});


export const fetchSearchList = (ignore)=>{
  return async(dispatch, getState) =>{
    try{
      const searchList = getState().header.searchList;
      if(searchList.length === 0){
        const result = await axios.get("/api/searchlist");
        if(!ignore){
          dispatch(setSearchList(result.data.list));
          dispatch(setSearchTotalPage(result.data.list.length/10));
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }
}


export const {setSearchFocused, 
  setSearchList, 
  setSearchTotalPage, 
  setSearchListMouseIn,
  changeSerachPage,
} = headerSlice.actions;
export default headerSlice.reducer;
export const selectSearchFocused = state => state.header.searchFocused;
export const selectSearchList = state => state.header.searchList;
export const selectSearchPage = state => state.header.searchPage;
export const selectSearchListMouseIn = state => state.header.searchListMouseIn;