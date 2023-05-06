# Webpack核心概念

## 1.entry

- 指定入口文件
  - 单入口
  - 多入口

## 2.output

## 3.loader

### 什么是loader

- webpack js/css/图片
- loader让webpack能够处理那些非JS文件的模块
- babel
  - babel-loader

```shell
npm install -D babel-loader @babel/core @babel/preset-env
npm install -D core-js
```

- 配置babel-loader
- 引入core-js
- 打包并测试

## 4. plugins

- 插件
- loader被用于帮助webpack处理各种模块，而插件则可以用于执行范围更广的任务
- [link](https://webpack.js.org/plugins/)

### html-webpack-plugin
