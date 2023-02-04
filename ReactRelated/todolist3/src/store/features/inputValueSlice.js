import { createSlice } from "@reduxjs/toolkit";

export const inputValueSlice = createSlice({
  name: 'inputValie',
  initialState: {
    value: null,
  },
  reducers:{
    setInputValue: (state, action)=>{
      state.value = action.payload;
    }
  }
})

export const setInputValueAsync = input => dispatch => {
  setTimeout(()=>{
    dispatch(setInputValue(input))
  }, 3000)
}


export const {setInputValue} = inputValueSlice.actions
export default inputValueSlice.reducer
export const selectInputValue = state => state.inputValue.value