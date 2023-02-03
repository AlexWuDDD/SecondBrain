import { configureStore } from "@reduxjs/toolkit";
import inputValueSlice from "./features/inputValueSlice";
import listSlice from "./features/listSlice";

const store = configureStore({
  reducer: {
    inputValue: inputValueSlice,
    list: listSlice,
  }
});

export default store;
