const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //使用style-loader和css-loader
        // use: ["style-loader", "css-loader"] 
        //使用css插件
        use: [MiniCssExtractPlugin.loader, "css-loader"] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify:{
        //删除index.html中的注释
        removeComments: false,
        //删除index.html中的空格
        collapseWhitespace: false,
        //删除各种html标签属性的双引号
        removeAttributeQuotes: false,
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
  ],
};