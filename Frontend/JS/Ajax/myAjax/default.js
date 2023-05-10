import {CONTENT_TYPE_FORM_URLENNCODED} from "./constants";

//默认参数
const DEFAULTS = {
  method: 'GET',
  //请求头携带的数据
  params: null,
  //params:{
  //  username: 'alex',
  //  age: 18
  //}
  //username=alex&age=18
  //请求体携带的数据
  data: null,
  //data:{
  //  username: 'alex',
  //  age: 18
  //}
  //data: FormData数据

  contentType: CONTENT_TYPE_FORM_URLENNCODED,
  responseType: '',
  timeoutTime: 0,
  withCredentials: false, //带不带cookie

  //方法
  success(){},
  httpCodeError(){},
  error(){},
  abort(){},
  timeout(){}
}

export default DEFAULTS;