import Mock from 'mockjs'

export default Mock.mock("/api/todolist", {
  // 随机生成长度为3的list数组，数组元素是3-10个字范围内的中文单词
  "list|3":["@cword(3,10)"]
})