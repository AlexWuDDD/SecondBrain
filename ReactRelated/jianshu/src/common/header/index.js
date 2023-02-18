import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

import {HeaderWrapper, Logo, 
  Nav, NavItem, NavSearch, 
  Addition, Button, 
  SearchWarpper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, 
  SearchInfoItem, SearchInfoList

} from "./style.js";

import { setSearchFocused, selectSearchFocused, 
  fetchSearchList, selectSearchList,
  selectSearchPage,
  setSearchListMouseIn, selectSearchListMouseIn,
  changeSerachPage,
} from './features/headerSlice.js';

import { selectIsLoginned, setIsLoginned } from '../../pages/login/features/loginSlice.js';

import { Link, redirect } from 'react-router-dom';

function Header(props) {

  const searchFocused = useSelector(selectSearchFocused);
  const searchList = useSelector(selectSearchList);
  const searchPage = useSelector(selectSearchPage);
  const searchListMouseIn = useSelector(selectSearchListMouseIn);

  const isLoginned = useSelector(selectIsLoginned);

  const dispatch = useDispatch();

  const nodeRef = useRef(null);


  const handleSearchInputFocus = ()=>{
    dispatch(setSearchFocused(true));
  };

  const handleSerachInputBlur = ()=>{
    dispatch(setSearchFocused(false));
  };

  useEffect(()=>{
    let ignore = false;
    if(searchFocused){
      dispatch(fetchSearchList(ignore));
      return ()=>{
        ignore = true;
      }
    }
  }, [searchFocused, dispatch])

  const spinIconRef = useRef(null);

  const getListArea = ()=>{

    const pageList = []

    if(searchList.length > 0){
      for(let i = (searchPage-1) * 10; i < searchPage * 10; ++i){
        pageList.push(
          <SearchInfoItem key={searchList[i]}>{searchList[i]}</SearchInfoItem>
        );
      }
    }

    if(searchFocused || searchListMouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnterInSearchList}
          onMouseLeave={handleMouseLeaveInSearchList}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={handleSearchPageChange}>
              <span ref={spinIconRef} className="iconfont spin">&#xe857;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    }
    return null;
  }

  const handleMouseEnterInSearchList = ()=>{
    dispatch(setSearchListMouseIn(true));
  }

  const handleMouseLeaveInSearchList = ()=>{
    dispatch(setSearchListMouseIn(false));
  }

  const handleSearchPageChange = ()=>{
    let originAngle = spinIconRef.current.style.transform.replace(/[^0-9]/ig, '');
    if(originAngle){
      originAngle = parseInt(originAngle, 10);
    }
    else{
      originAngle = 0;
    }
    // spinIconRef.current.style.transform = "rotate(360deg)";
    spinIconRef.current.style.transform = "rotate(" + (originAngle + 360) + "deg)";
    dispatch(changeSerachPage());    
  }

  const handleExit = ()=>{
    dispatch(setIsLoginned(false));
    redirect("/login");
  }

  return (
    <HeaderWrapper>
      <Link to='/'><Logo/></Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <SearchWarpper>
          <CSSTransition
            in={searchFocused}
            nodeRef={nodeRef}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              ref={nodeRef}
              className={searchFocused?"focused":""}
              onFocus={handleSearchInputFocus}
              onBlur={handleSerachInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={searchFocused?"focused iconfont zoom":"iconfont zoom"}>&#xe662;</span>
          {getListArea()}
        </SearchWarpper>
        {
          isLoginned?
          <NavItem className='right' onClick={handleExit}>退出</NavItem>:
          <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
        }
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
      </Nav>
      <Addition>
        <Link to="/write">
          <Button className="writing">
            <span className="iconfont">&#xe600;</span>
            写文章
          </Button>
        </Link>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// Header.propTypes = {

// }

// Header.defaultProps = {

// }

export default Header;