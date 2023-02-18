import {WriteWrapper} from "./style";

import {selectIsLoginned} from "../login/features/loginSlice"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Write() {

  const isLoginned = useSelector(selectIsLoginned);
  const nav = useNavigate();

  useEffect(()=>{
    if(!isLoginned){
      return nav("/login");
    }
  }, [isLoginned, nav]);

  return (
    <WriteWrapper>写文章</WriteWrapper>
  )
}

export default Write;