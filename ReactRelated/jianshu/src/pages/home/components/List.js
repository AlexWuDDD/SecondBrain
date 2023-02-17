import React from 'react'
import { 
  ListItem, 
  ListWrappoer,
  ListItemTitle,
  ListItemInfo,
  ListItemIcon,
  LoadMore,

} from '../style';

import sunset from '../../../statics/img/sunset-glow-7425170_640.jpg'
import { Link } from 'react-router-dom';

function List() {

  const getMoreList = ()=>{

  }

  return (
    <ListWrappoer>
      <ListItem>
        <ListItemTitle>
          <Link to="/detail">落日余晖中，终将迎来新的一天</Link>
        </ListItemTitle>
        <img className='pic' src={sunset} alt=''></img>
        <ListItemInfo>
          天已近黄昏，太阳慢慢地钻进薄薄的云层，变成了一个红红的圆球。西边天际出现了比胖娃娃的脸蛋还要红还要娇嫩的粉红色。太阳的周围最红，红得那样迷人。红向四周蔓延着，蔓延了半个天空，一层比一层逐渐淡下去，直到变成了灰白色。
        </ListItemInfo>
        <ListItemIcon></ListItemIcon>
      </ListItem>
      <LoadMore onClick={getMoreList}>更多文字</LoadMore>
    </ListWrappoer>
  )
}

export default List;