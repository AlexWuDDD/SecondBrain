import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarpper} from "./style.js";

import { setSearchFocused, selectSearchFocused } from './features/headerSlice.js';

function Header(props) {

  const searchFocused = useSelector(selectSearchFocused);
  const dispatch = useDispatch();

  const nodeRef = useRef(null);

  const handleSearchInputFocus = ()=>{
    dispatch(setSearchFocused(true));
  };

  const handleSerachInputBlur = ()=>{
    dispatch(setSearchFocused(false));
  };

  return (
    <HeaderWrapper>
      <Logo/>
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
          <span className={searchFocused?"focused iconfont":"iconfont"}>&#xe662;</span>
        </SearchWarpper>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
      </Nav>
      <Addition>
        <Button className="writing">
          <span className="iconfont">&#xe600;</span>
          写文章
        </Button>
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