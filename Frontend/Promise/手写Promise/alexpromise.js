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

  if(!successCB){
    successCB = res => res
  }

  if(!failCB){
    failCB = err => err
  }

  return new AlexPromise((resolve, reject)=>{
    if(this.status === "fulfilled"){
      let result = successCB && successCB(this.result);
      if(result instanceof AlexPromise){
        result.then(res=>{
          resolve(res);
        }, err=>{
          reject(err);
        })
      }else{
        resolve(result);
      }
    }
    else if(this.status === "rejected"){
      let result = failCB && failCB(this.result);
      if(result instanceof AlexPromise){
        result.then(res=>{
          resolve(res);
        }, err=>{
          reject(err);
        })
      }else{
        reject(result);
      }
    }
    else if(this.status === "pending"){
      this.cb.push({
        successCB: ()=>{
          let result = successCB(this.result);
          if(result instanceof AlexPromise){
            result.then(res=>{
              resolve(res);
            }, err=>{
              reject(err);
            })
          }else{
            resolve(result);
          }
        },
        failCB: ()=>{
          let result = failCB(this.result);
          if(result instanceof AlexPromise){
            result.then(res=>{
              resolve(res);
            }, err=>{
              reject(err);
            })
          }else{
            reject(result);
          }
        }
      })
    }
  })
}

AlexPromise.prototype.catch = function(failCB){
  this.then(undefined, failCB);
}