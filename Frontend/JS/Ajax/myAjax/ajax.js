//工具函数
import {serialize, addURLData} from "./utils.js"

//常量
import {HTTP_GET, CONTENT_TYPE_FORM_URLENNCODED, CONTENT_TYPE_JSON} from './constants.js';

//默认参数
import DEFAULTS from "./default";

//Ajax类
class Ajax{
  constructor(url, options){
    this.url = url;
    this.options = Object.assign({}, DEFAULTS, options);

    //初始化
    this.init();
  }

  init(){
    const xhr = new XMLDocument();
    this.xhr = xhr;

    //绑定响应事件处理函数
    this.bindEvents();

    xhr.open(this.options.method, this.url + this.addParams(), true);

    //设置responseType
    this.setResponseType();

    //设置跨域是否携带cookie
    this.setCookie();

    //设置超时
    this.setTimeout();

    //发送请求
    this.sendData();
  }

  //绑定响应事件处理函数
  bindEvents(){

    const xhr = this.xhr;

    const {success, httpCodeError, abort, error, timeout} = this.options;

    xhr.addEventListener('load', ()=>{
      if(this.ok()){
        success(xhr.response, xhr);
      }
      else{
        httpCodeError(xhr.status);
      }
    }, false);

    xhr.addEventListener('error', ()=>{
      error(xhr);
    }, false);

    xhr.addEventListener('abort', ()=>{
      abort();
    }, false);

    xhr.addEventListener('timeout', ()=>{
      timeout();
    }, false);
  }

  //检测响应的HTTP状态码是否正常
  ok(){
    const xhr = this.xhr;
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
  }

  //在地址上添加数据
  addParams(){
    const {params} = this.options;
    if(!params) return '';

    return addURLData(this.url, serialize(params));
  }

  setResponseType(){
    this.xhr.responseType = this.options.responseType;
  }

  setCookie(){
    if(this.options.withCredentials){
      this.xhr.withCredentials = true;
    }
  }

  setTimeout(){

    const {timeoutTime} = this.options;

    if(timeoutTime > 0){
      this.xhr.timeout = timeoutTime;
    }
  }

  sendData(){
    const xhr = this.xhr;
    const data = this.options.data;

    if(!this.isSendData()){
      return xhr.send(null);
    }

    let resultData = null;
    
    //发送
    if(this.isFormData()){
      resultData = data;
    }
    else if(this.isFormURLEncodedData()){
      this.setContentType(CONTENT_TYPE_FORM_URLENNCODED);
      resultData = serialize(data);
    }
    else if(this.isJSONData()){
      this.setContentType(CONTENT_TYPE_JSON);
      resultData = JSON.stringify(data);
    }
    else{
      //发送其他格式的数据
      resultData = data;
    }

    xhr.send(resultData);

  }

  //是否需要使用send发送数据
  isSendData(){
    const {data, method} = this.options;
    if(!data) return false;
    if(HTTP_GET.toUpperCase() === method.toUpperCase()) return false;
    return true;
  }

  //是否发送FormData格式的数据
  isFormData(){
    const {data} = this.options;
    if(!data) return false;
    return data instanceof FormData;
  }

  isFormURLEncodedData(){
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENNCODED.toLowerCase());
  }

  isJSONData(){
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON.toLowerCase());
  }

  setContentType(CONTENT_TYPE = this.options.contentType){
    if(!CONTENT_TYPE) return;
    this.xhr.setContentType('Content-Type',CONTENT_TYPE);
  }

  //获取XHR对象
  getXHR(){
    return this.xhr;
  }

};

export default Ajax;