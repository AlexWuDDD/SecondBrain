import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../mock/mockapi";

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    topicList: [],
    showScroll: false,
  },

  reducers:{
    setTopicList: (state, action)=>{
      state.topicList = action.payload;
    },
    setShowScroll: (state, action)=>{
      state.showScroll = action.payload;
    }
  }
});


export const fetchtopicList = (ignore)=>{
  return async(dispatch, getState) =>{
    try{
      const result = await axios.get("/api/topiclist");
      if(!ignore){
        dispatch(setTopicList(result.data.list));
      }
    }
    catch(err){
      console.log(err);
    }
  }
}

export default homeSlice.reducer;
export const selectTopicList = state => state.home.topicList;
export const selectShowScroll = state => state.home.showScroll;
export const { setTopicList, setShowScroll } = homeSlice.actions;