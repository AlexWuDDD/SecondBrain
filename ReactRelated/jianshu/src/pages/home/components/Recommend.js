import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style';

import daily from "../../../statics/img/banner-s-daily-e6f6601abc495573a.png"
import club from "../../../statics/img/banner-s-club-aa8bdf19f8cf729a75.png"

function Recommend() {
  return (
    <RecommendWrapper>
      <RecommendItem imgUrl={daily}></RecommendItem>
      <RecommendItem imgUrl={club}></RecommendItem>
    </RecommendWrapper>
  )
}

export default Recommend;