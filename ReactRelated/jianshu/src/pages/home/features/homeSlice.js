import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../mock/mockapi";

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    topicList: [],
  },

  reducers:{
    setTopicList: (state, action)=>{
      state.topicList = action.payload;
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
export const { setTopicList } = homeSlice.actions;