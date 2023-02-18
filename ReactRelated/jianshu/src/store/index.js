import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../common/header/features/headerSlice";
import detailSlice  from "../pages/detail/features/detailSlice";
import homeSlice from "../pages/home/features/homeSlice";
import loginSlice from "../pages/login/features/loginSlice";

const store = configureStore({

  reducer:{
    header: headerSlice,
    home: homeSlice,
    detail: detailSlice,
    login: loginSlice,
  }
});

export default store;