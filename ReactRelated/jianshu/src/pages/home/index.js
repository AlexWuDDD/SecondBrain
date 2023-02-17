import React, { Fragment, useCallback, useEffect } from 'react';
import {
  HomeWrapper,
  HomeLeft, HomeRight, BackTop
} from "./style.js";

import shouye1 from "../../statics/img/shouye1.png"

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { useDispatch, useSelector } from 'react-redux';

import { selectShowScroll, setShowScroll } from './features/homeSlice.js';

function Home() {

  const showScroll = useSelector(selectShowScroll);
  const dispatch = useDispatch();

  const handleScrollTop = ()=>{
    window.scrollTo(0, 0);
  }

  const onScroll = useCallback((e)=>{
    if(e.target.documentElement.scrollTop >= 200){
      dispatch(setShowScroll(true));
    }
    else{
      dispatch(setShowScroll(false));
    }
  }, [dispatch])

  useEffect(()=>{
    window.addEventListener('scroll', onScroll);

    return ()=>{
      window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

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
        {showScroll? <BackTop onClick={handleScrollTop}>回到顶部</BackTop>: null}
      </HomeWrapper>
    </Fragment>
  )
}

export default Home;