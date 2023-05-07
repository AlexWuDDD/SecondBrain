const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'images/[hash][ext]'
  },
  module:{
    rules: [
      {
        test:  /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/resource'
      },
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
    })
  ],
}