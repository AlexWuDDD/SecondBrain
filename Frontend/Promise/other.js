function ajax(url){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //传结果
      resolve(["1111","2222","3333"]);
      //reject({code:401, info:"aaaaa"})
    }, 2000);
  });
}

let pajax = ajax("11111");

//这里的res就是上面resolve传的值
pajax.then((res)=>{
  console.log(res);
  console.log("请求成功");
  console.log(pajax);
}).catch((err)=>{
  console.log("请求失败," + err);
  console.log(pajax);
});
console.log()
