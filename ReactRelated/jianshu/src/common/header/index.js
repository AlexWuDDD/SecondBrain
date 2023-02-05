import React from 'react';
import PropTypes from 'prop-types';

import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from "./style.js";

function Header() {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavSearch></NavSearch>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>Aa</NavItem>
      </Nav>
      <Addition>
        <Button className="writing">写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header;