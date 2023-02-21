function AlexPromise(executor){
  this.status = "pending";
  this.result = undefined;
  this.cb = [];

  let _this = this;

  function resolve(res){

    if(_this.status !== "pending") return;
    _this.status = "fulfilled";
    _this.result = res;
    _this.cb.forEach(item=>{item.successCB && item.successCB(_this.result)})
  }

  function reject(err){

    if(_this.status !== "pending") return;
    _this.status = "rejected";
    _this.result = err;
    _this.cb.forEach(item=>{item.failCB && item.failCB(_this.result)})
  }
  executor(resolve, reject);
}

AlexPromise.prototype.then = function(successCB, failCB){
  if(this.status === "fulfilled"){
    successCB && successCB(this.result);
  }
  else if(this.status === "rejected"){
    failCB && failCB(this.result);
  }
  else if(this.status === "pending"){
    this.cb.push({
      successCB: successCB,
      failCB: failCB
    })
  }
}