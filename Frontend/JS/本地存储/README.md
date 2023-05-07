# README

## Cookie

- Cookie是什么
  - Cookie全称是HTTP Cookie，简称Cookie
  - 是浏览器存储数据的一种方式
  - 因为**存储在用户本地**，而不是存储在服务器上，是本地存储
  - 一般**会自动随着浏览器每次清脆发送到服务器端**
- Cookie有什么用
  - 利用Cooie跟踪统计用户访问该网站的习惯
    - 比如什么时间访问
    - 访问了哪些页面
    - 在每个网页的停留时间等
- 获取cookie
  - document.cookie

- Cookie的属性
  - Name: 名称
  - Value: 值
  - 最重要的两个属性，创建Cookie时必须填写，其他属性可以使用默认值
  - Cookie的名称或值如果包含非英文字母，则写入时需要使用encodeURIComponent()编码，读取时使用decodeURIComponent()解码
  - Expires/Max-Age: 失效（到期）世间
    - 对于失效的Cookie，会被浏览器清除
    - 如果没有设置失效（到期）时间，这样的Cookie称为会话Cookie
      - 它存在内存中，当会话结束，也就是浏览器关闭时，Cookie消失

    ```js
    //3, 想长时间存在，设置Expires或Max-Age
    //expires: 值为Date类型
    document.cookie=`username=zs; expires=${new Date('2023-5-07 8:19:00')}`;
    //max-age：值为数字，表示当前时间+多少秒后过期，单位是秒
    document.cookie='age=18; max-age=10';
    //如果max-age的值是0或负数，则Cookie会被删除
    ```

  - Domain
    - 限定了Cookie访问的范围（不同域名）
  - 添加属性

    ```js
      //使用JS只能读写当前域或父域的Cookie，无法读写其他域的Cookie
      document.cookie = 'username=alex; domain=www.imooc.com';

      //www.imooc.com m.imooc.com 当前域
      //父域：.imooc.com

    ```

  - Path
    - 先顶了访问Cookie的范围（同一个域名下）

    ```js
      //使用JS只能读写当前域或父域的Cookie，无法读写其他域的Cookie
      document.cookie = 'username=alex; path=/course/list';
      //只能读写当前路径和上级路径的Cookie，无法读写下级路径的Cookie
    ```
  
  - 只有Name、Domain、Path这3个字段都相同的时候，才是同一个Cookie
  - HttpOnly
    - 只要设置了HttpOnly属性的Cookie不能通过JS去访问
  - Secure 安全标志
    - 限定了只有在使用了https而不是http的情况下才可以发送给服务端
  - Domain、Path、Secure都要满足条件，还不能过期的Cookie才能随着请求发送到服务器端

### Cookie的注意事项
  
- 前后端都可以写入和获取Cookie
- Cookie有数量限制
  - 每个域名下的Cookie数量限制，取决于浏览器
  - 当超过单个域名限制之后，再设置Cookie，浏览器就会清除以前设置的Cookie
- Cookie有大小限制
  - 每个Cookie的存储容量很小，最多只有4KB左右，取决于浏览器

## localStorage

- localStorage也是一种浏览器存储数据的方式（本地存储），它只存储在本地，不会发送到服务器端
- 单个域名下的localStorage总大小有限制，取决于浏览器

- [操作localStorage](./%E6%93%8D%E4%BD%9ClocalStorage.html)

### 注意事项

- 存储期限
  - 持久化的本地存储，除非手动清除，否则数据室永远不会过期的
  - sessionStorage
    - 当会话结束（比如关闭浏览器）的时候，sessionStorage中的数据会被清空
- 键和值的类型
  - 只能是字符串类型
  - 不是字符串类型，也会转换成字符串类型再存进去
- 不同域名下能够共用localStorage
  - 不能
- 兼容性
  - IE8以上
  - [Can I Use](https://caniuse.com/)
