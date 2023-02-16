import Mock from "mockjs";

export const apisearchlist =  Mock.mock("/api/searchlist", {
  "list|50": ["@cword(2,3)"]
})

export const apitopiclist =  Mock.mock("/api/topiclist", {
  "list": [
    {
      id: 1,
      title: "社会热点",
      imgUrl:'https://img.icons8.com/emoji/48/null/joker-.png'
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:'https://img.icons8.com/emoji/48/null/artist-palette.png'
    },
    {
      id: 3,
      title: "管理",
      imgUrl:'https://img.icons8.com/emoji/48/null/-emoji-admission.png'
    },
    {
      id: 4,
      title: "飞镖",
      imgUrl:'https://img.icons8.com/emoji/48/null/bullseye.png'
    },
    {
      id: 5,
      title: "烟花",
      imgUrl:'https://img.icons8.com/emoji/48/null/fireworks.png'
    },
    {
      id: 6,
      title: "伴手礼",
      imgUrl:'https://img.icons8.com/emoji/48/null/wrapped-gift.png'
    },
    {
      id: 7,
      title: "游戏竞技",
      imgUrl:'https://img.icons8.com/emoji/48/null/video-game.png'
    },
    {
      id: 8,
      title: "民俗风情",
      imgUrl:'https://img.icons8.com/emoji/48/null/wind-chime.png'
    },    
    {
      id: 9,
      title: "麻将",
      imgUrl:'https://img.icons8.com/emoji/48/null/mahjong-red-dragon.png'
    },
    {
      id: 10,
      title: "运动",
      imgUrl:'https://img.icons8.com/emoji/48/null/lacrosse-emoji.png'
    },      
  ]
})
