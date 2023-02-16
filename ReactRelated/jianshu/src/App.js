import { Fragment } from "react";
import { GlobalStyle } from "./style";
import "./statics/iconfont/iconfont.css";
import Header from "./common/header";
import {
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";


function App() {
  return (
    <Fragment >
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
