const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  //entry: './src/index.js',
  
  // entry:{
  //   index: './src/index.js',
  // },

  entry:{
    index: './src/index.js',
    search: './src/search.js'
  },
  
  output: {
    //filename: 'main.js',
    filename: '[name].js',

    path: path.resolve(__dirname, 'dist'), //绝对路径
  },

  module:{
    rules:[
      {
        //你想匹配哪些文件
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
    ]
  },

  plugins: [
    //单入口
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    // })

    //多入口
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify:{
        //删除index.html中的注释
        removeComments: true,
        //删除index.html中的空格
        collapseWhitespace: true,
        //删除各种html标签属性的双引号
        removeAttributeQuotes: true,
      }
    }),
    new HtmlWebpackPlugin({
      template: './search.html',
      filename: 'search.html',
      chunks: ['search']
    })
  ]

};