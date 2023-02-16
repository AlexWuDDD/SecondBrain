import React, { Fragment } from 'react';
import {
  HomeWrapper,
  HomeLeft, HomeRight
} from "./style.js";

import shouye1 from "../../statics/img/shouye1.png"

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

function Home() {
  return (
    <Fragment>
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src={shouye1} alt="首页图片"></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    </Fragment>
  )
}

export default Home;