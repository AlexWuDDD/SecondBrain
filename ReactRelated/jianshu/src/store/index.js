import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../common/header/features/headerSlice";
import homeSlice from "../pages/home/features/homeSlice";

const store = configureStore({

  reducer:{
    header: headerSlice,
    home: homeSlice,
  }
});

export default store;