import React, { useEffect } from 'react'

import { 
  TopicWrapper, TopicItem

} from '../style';

import { fetchtopicList, selectTopicList } from '../features/homeSlice';

import { useDispatch, useSelector } from 'react-redux';

function Topic() {

  const topicList = useSelector(selectTopicList);

  const dispatch = useDispatch();

  useEffect(()=>{
    let ignore = false;
    dispatch(fetchtopicList(ignore));
    return ()=>{
      ignore = true;
    }
  },[dispatch])

  const getTopicList = ()=>{
    if(topicList.length > 0){
      const ret = []
      for(let i = 0; i < topicList.length; ++i){
        let id = topicList[i]["id"];
        let title = topicList[i]["title"];
        let imgUrl = topicList[i]["imgUrl"];
        ret.push(
          <TopicItem key = {id}>
            <img className='icon-size' alt={title} src={imgUrl}></img>
            {title}
          </TopicItem>  
        )
      }
      return ret;
    }
    return null;

  }

  return (
    <TopicWrapper>
      {getTopicList()}
    </TopicWrapper>
  )
}

export default Topic;