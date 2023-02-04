import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "../../mock/mockapi";

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: [],
  },
  reducers:{
    addListItem: (state, action)=>{
      state.value.push(action.payload);
    },
    deleteListItem: (state, action)=>{
      let index = action.payload;
      state.value.splice(index, 1);
    },
    setList:(state, action)=>{
      state.value = action.payload
    }
  }
})

export const fetchTodolist = ignore => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const result = await axios.get('/api/todolist');
      // dispatch an action when we get the response back
      if(!ignore){
        dispatch(setList(result.data.list));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export const {addListItem, deleteListItem, setList} = listSlice.actions
export default listSlice.reducer
export const selectList = state => state.list.value