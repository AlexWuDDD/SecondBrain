(function(){
  let backtotop = document.getElementById('backtotop');
  let timer = null;
  backtotop.onclick = function(){
    //设表先关
    clearInterval(timer);
    timer = setInterval(function(){
      document.documentElement.scrollTop -= 100;
      if(document.documentElement.scrollTop <= 0){
        clearInterval(timer);
      }
    }, 20)
  }

  //监听页面的滚动
  window.onscroll = function(){
    //卷动值
    let screenTop = document.documentElement.scrollTop || window.screenY;
    if(screenTop == 0){
      backtotop.style.display = 'none';
    }
    else{
      backtotop.style.display = 'block';
    }
  }
})()