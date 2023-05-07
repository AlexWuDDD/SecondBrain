# README

## 超文本

原先一个个单一的文本，通过超链接将其联系起来，由原先的单一的文本变成了可无限延伸、扩展的超级文本

## HTTP语义

- GET 获取数据
  - 获取资源（文件）
- POST 创建数据
  - 注册
- PUT 更新数据
  - 修改个人信息，修改密码
- DELETE 删除数据
  - 删除一条评论

> 增删改查
> 这些方法虽然由各自的语义，但是并不是强制性的

## RESTful 接口设计

- 一种接口设计风格，充分利用HTTP方法的语义
- GET
  - https://api/user?id=1
- POST
  - http://api/user
- PUT
  - http://api/user
- DELETE
  - htto://api/user
- 后端可以根据不同的请求语义来判断具体的行为

## GET和POST方法的对比

- 语义
  - GET: 获取数据
  - POST：创建数据
- 发送数据
  - GET通过地址在请求头中携带数据
    - 能够携带的数据量和地址的长度有关系，一般最多就几K
  - POST既可以通过地址在请求头中携带数据，也可以通过请求体携带数据
    - 能携带的数据量理论上是无限的
  - 携带少量数据，可以使用GET请求，大量的数据恶意使用POST请求
- 缓存
  - GET可以被缓存、POST不会被缓存
- 安全性

## HTTP状态码

- 定义服务器对请求的处理结果，是服务器返回的
- 状态码的语义
  - 100~199：代表请求已被接受，需要继续处理
    - websocket
  - 200~299：成功
    - 200
  - 300~399：重定向
    - 301: Moved Permanently
    - 302: Move Temporarily
    - 304：Not Modified
  - 400~499：请求错误
    - 404: Not Found
  - 500~599: 服务器错误
    - 500: Internal Server Error
  