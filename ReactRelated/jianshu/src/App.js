import { Fragment } from "react";
import { GlobalStyle } from "./style";
import "./statics/iconfont/iconfont.css";
import Header from "./common/header";

function App() {
  return (
    <Fragment >
      <GlobalStyle/>
      <Header/>
    </Fragment>
  );
}

export default App;
