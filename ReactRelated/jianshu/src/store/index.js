import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../common/header/features/headerSlice";

const store = configureStore({

  reducer:{
    header: headerSlice,
  }
});

export default store;