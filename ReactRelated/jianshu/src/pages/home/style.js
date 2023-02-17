import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;

  .banner-img{
    width: 625px;
    height: 270px;
  }
`


export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.span`
  margin-left: 18px;
  margin-bottom: 18px;
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  .icon-size{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListWrappoer = styled.div`
  width: 625px;
`

export const ListItem = styled.div`
  overflow: hidden;
  .pic{
    float: right;
    width:125px;
    height: 100px;
    display: inline-block;
  }
  padding-bottom: 10px;
  border-bottom: 2px solid #dcdcdc;
`

export const ListItemTitle = styled.div`
  width: 500px;
  float: left;
  line-height: 27px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

export const ListItemInfo = styled.div`
  font-height: 24x;
  font-size: 13px;
  color: #999;
`

export const ListItemIcon = styled.div`
`

export const LoadMore = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 40px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
  border-radius: 5px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`