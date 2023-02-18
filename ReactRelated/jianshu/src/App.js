import { Fragment } from "react";
import { GlobalStyle } from "./style";
import "./statics/iconfont/iconfont.css";
import Header from "./common/header";

import Router from "./routers";

function App() {
  return (
    <Fragment >
      <GlobalStyle/>
      <Header/>
      <Router/>
    </Fragment>
  );
}

export default App;
