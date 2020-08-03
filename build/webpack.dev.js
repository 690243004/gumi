const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, '../src/index.js')
  },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js'
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    index: 'index.html',
    contentBase: path.join(__dirname, '../public')
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  // 配置插件
  plugins: [
    //配置热更新模块对象
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      chunks: ['bundle'],
      title: 'Gumi UI'
    })
  ]
})
