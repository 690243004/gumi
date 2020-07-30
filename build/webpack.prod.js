const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const commonConfig = {
  optimization: {
    minimize: false
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       name: 'commons', // 提取出来的文件命名
    //       // name： ‘common/common’ //  即先生成common文件夹
    //       chunks: 'initial', // initial表示提取入口文件的公共css及
    //       // chunks: 'all' // 提取所有文件的公共部分
    //       // test： '/\.css$/'  // 只提取公共css ，命名可改styles
    //       minChunks: 2, // 表示提取公共部分最少的文件数
    //       minSize: 0 // 表示提取公共部分最小的大小
    //       // 如果发现页面中未引用公共文件，加上enforce: true
    //     }
    //   }
    // }
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
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    })
  ]
}

module.exports = [
  merge(common, {
    ...commonConfig,
    mode: 'production',
    // target: 'node',
    entry: {
      bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
      path: path.resolve(__dirname, '../mobile'),
      filename: 'bundle.js',
      libraryTarget: 'var'
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        chunks: ['bundle'],
        title: 'Glow UI'
      })
    ]
  })
]
