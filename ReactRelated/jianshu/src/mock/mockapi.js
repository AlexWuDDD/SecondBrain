import Mock from "mockjs";

export default Mock.mock("/api/searchlist", {
  "list|50": ["@cword(2,3)"]
})