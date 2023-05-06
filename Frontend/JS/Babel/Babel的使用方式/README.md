# README

## 使用Babel前的准备工作

### 1.什么是Node.js和npm

- Node.js是个平台或者工具，对应浏览器
  - 后端的Javascript = ECMAScript + IO + File + ...等服务器端的操作
- npm: node包管理工具
- npm install

```shell
#初始化项目
npm init

npm install --save-dev @babel/core @babel/cli
```

> "build": "babel src -d dist", -d : -out-dir

```shell
npm install @babel/preset-env --save-dev
```

> babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

```shell
npm run build
```
