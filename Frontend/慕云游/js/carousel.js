/**
 * 轮播图特效
 * 日期：2023-4-16
 * 姓名：Alex Wu
 */
(function() {
  let carousel_list = document.getElementById("carousel_list");
  let leftbtn = document.getElementById("leftbtn");
  let rightbtn = document.getElementById("rightbtn");
  let circles_ol = document.getElementById("circles_ol");
  let circles_ol_lis = circles_ol.getElementsByTagName("li");
  let banner = document.getElementById("banner");

  //克隆第一张li
  let clone_li = carousel_list.firstElementChild.cloneNode(true);
  //上树
  carousel_list.appendChild(clone_li);

  //当前正在显示的图片序号
  let idx = 0;

  //节流锁
  let lock= true;

  //右按钮事件监听
  rightbtn.onclick = right_btn_handle;
  
  //右按钮事件处理函数
  function right_btn_handle() {

    //判断节流锁的状态，如果是关闭的，那么就什么都不做
    if(!lock){
      return;
    }

    //关锁
    lock = false;

    //加上过度
    carousel_list.style.transition = "transform .5s ease 0s";
    //idx+1
    ++idx;
    //拉动
    carousel_list.style.transform = "translateX(" + -16.66*idx + "%)";

    //判断是否是最后一张，那么就要瞬间移动回来
    if(idx > 4){
      //全局图片序号为0
      idx = 0;
      setTimeout(function(){
        //去掉过渡
        carousel_list.style.transition = "none";
        //删除transform属性
        carousel_list.style.transform = "none";
      }, 500);
    }
    //设置小圆点
    setCircles();

    //开锁，动画结束之后
    setTimeout(function(){
      lock = true;
    }, 500);
  }

  //左按钮事件监听
  leftbtn.onclick = function() {

    //判断节流锁的状态，如果是关闭的，那么就什么都不做
    if(!lock){
      return;
    }

    //关锁
    lock = false;

    //左按钮很特殊，要先写if语句，而不是idx--
    if(idx == 0){
      //瞬间拉动到最后
      carousel_list.style.transition = "none";
      //拉倒最后(瞬间移动)
      carousel_list.style.transform = "translateX(" + -16.66*5 + "%)";
      //改变idx
      idx = 4;
      setTimeout(function(){
        carousel_list.style.transition = "transform .5s ease 0s";
        carousel_list.style.transform = "translateX(" + -16.66*4 + "%)";
      }, 0)
    }
    else{
      idx--;
      carousel_list.style.transform = "translateX(" + -16.66*idx + "%)";
    }

    //设置小圆点
    setCircles();

    //开锁，动画结束之后
    setTimeout(function(){
      lock = true;
    }, 500);
  }

  //设置小圆点的current在谁身上,序号为idx的小圆点才有current类名，其他的都没有
  function setCircles(){
    //遍历0,1,2,3,4
    for(let i = 0; i < circles_ol_lis.length; i++){
      if(i == idx){
        circles_ol_lis[i].className = "current";
      }
      else{
        circles_ol_lis[i].className = "";
      }
    }
  }

  //事件委托，小圆点的监听
  circles_ol.onclick = function(e){
    if(e.target.tagName.toLowerCase() == "li"){
      //得到li身上data-n屬性的値
      let n = e.target.getAttribute("data-n");

      //改变idx
      idx = n;

      //拉动
      carousel_list.style.transform = "translateX(" + -16.66*idx + "%)";
    
      setCircles();
    }
  }  

  //定时器，自动轮播
  let timer = setInterval(right_btn_handle, 2000);

  //鼠标进入，自动轮播就暂定
  banner.onmouseenter = function(){
    clearInterval(timer);
  }

  banner.onmouseleave = function(){
    //设表先关
    clearInterval(timer);
    timer = setInterval(right_btn_handle, 2000);
  }
})()