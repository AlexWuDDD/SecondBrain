import React from 'react'
import {DetailWrapper, 
  Header, 
  Content,
} from "./style.js"

// import salaryImg from "../../statics/img/97dc589bcf1b1cb4cbbe023a73066f72.jpg"

import { selectContent } from './features/detailSlice.js'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Datail() {

  const {id} = useParams();
  console.log(id);

  // const params = useParams();
  // console.log(params);

  // const location = useLocation();
  // console.log(location.search);




  const content = useSelector(selectContent);

  return (
    <DetailWrapper>
      <Header>得知同学的工资，大姑姐的退休综合症消失了</Header>
      <Content dangerouslySetInnerHTML={{__html: content}}>
        {/* <img src={salaryImg} alt=''></img>
        <p>大姑姐退休后，得了退休综合症，每天心烦意乱，动不动就发脾气，家人劝说无果，只能由她作了，上周末她参加了一场婚宴，这个病给治了。</p>
        <p>上周末，大姑姐高中同学的孩子结婚，这几年受yi情影响，同学们好久没有聚会了，正好趁这个机会聚聚，叙叙旧。</p>
        <p>大姑姐最近因为退休的事儿心情不好，本来准备让好朋友把礼金捎去，人不去了，后来架不住好友的软磨硬泡，还是去了。</p> */}
      </Content>
    </DetailWrapper>
  )
}

export default Datail;