import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../mock/mockapi";

const loginSlice = createSlice({
  'name': 'login',
  'initialState': {
    'isLoginned': false,
    'username': '',
    'password': '',
  },
  reducers: {
    setIsLoginned: (state, action)=>{
      state.isLoginned = action.payload;
    },
    setUsername:(state, action)=>{
      state.username = action.payload;
    },
    setPassword:(state, action)=>{
      state.password = action.payload;
    },
  }
});

export const checkLogin = (ignore)=>{
  return async(dispatch, getState) =>{
    try{
      const username = getState().login.username;
      const password = getState().login.password;
      const result = await axios.get("/api/login?username=" + username + '&password='+ password);
      if(!ignore){
        if(result.data.success === true){
          dispatch(setIsLoginned(true));
        }
        else{
          dispatch(setIsLoginned(false));
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }
}

export default loginSlice.reducer;
export const selectIsLoginned  = state => state.login.isLoginned;
export const {setUsername, setPassword, setIsLoginned} = loginSlice.actions;
