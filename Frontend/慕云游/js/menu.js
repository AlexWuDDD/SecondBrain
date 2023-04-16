(function(){
  let banner_nav_ul = document.getElementById('banner-nav-ul');
  let banner_nav = document.getElementById("banner-nav");
  //寻找所有的nav
  let navs = document.querySelectorAll(".banner-nav > ul > li");
  //寻找所有menu
  let menus = document.querySelectorAll(".menus-box .menu");
  /*
  事件委托，必须使用onmouseover事件，而不是onmouseener，
  onmouseover冒泡
  onmouseenter不冒泡
  */
  banner_nav_ul.onmouseover = function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
      let t = e.target.getAttribute('data-t');

      //寻找menu
      let themenu = document.querySelector(".menus-box .menu[data-t='"+t+"']");
      //排他操作，让其他的盒子都去掉current类名
      for(let i = 0; i < menus.length; ++i) {
        menus[i].className = "menu";
        navs[i].className = menus[i].getAttribute('data-t');
      }
      //匹配的这项加上current类名
      themenu.className = "menu current"
      e.target.className = " current"
    }
  }

  //当鼠标离开大盒子的时候
  banner_nav.onmouseleave = function(){
    let len = menus.length;
    for(let i = 0; i < len; i++){
      menus[i].className = "menu";
      navs[i].className = menus[i].getAttribute('data-t');
    } 
  }
})()