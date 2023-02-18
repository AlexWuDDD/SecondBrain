import React, { useEffect } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style';

import { setUsername, setPassword, checkLogin, selectIsLoginned } from './features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

  const dispatch = useDispatch();
  const isLoginned = useSelector(selectIsLoginned);
  const nav = useNavigate();


  const handleUsernameInput = (e)=>{
    dispatch(setUsername(e.target.value));
  }
  
  const handlePasswordInput = (e)=>{
    dispatch(setPassword(e.target.value));
  }

  const handleLogin = ()=>{
    let ignore = false;
    dispatch(checkLogin(ignore));
    return ()=>{
      ignore = true;
    }
  }

  useEffect(()=>{
    if(isLoginned){
      return nav("/");
    }
  }, [isLoginned, nav]);

  return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder='账号' onChange={handleUsernameInput}></Input>
        <Input placeholder='密码' type='password' onChange={handlePasswordInput}></Input>
        <Button onClick={handleLogin}>登陆</Button>
      </LoginBox>
    </LoginWrapper>
  )
}

export default Login;