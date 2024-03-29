import { LEFT_KEYCODE, RIGHT_KEYCODE } from '../constants.js';

const Keyboard = {
  bindEvent(slider){
    document.addEventListener('keyup', ev=>{
      if(ev.keyCode === LEFT_KEYCODE) slider.prev();
      if(ev.keyCode === RIGHT_KEYCODE) slider.next();
    }, false);
  }
};

export default Keyboard;