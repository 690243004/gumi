const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const commonConfig = {
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = [
  // mobile-site output configuration
  merge(common, {
    ...commonConfig,
    mode: 'production',
    entry: {
      bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, '../public/'), to: path.resolve(__dirname, '../dist/') }]
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        chunks: ['bundle'],
        title: 'Gumi UI'
      })
    ]
  }),
  // npm publish package
  merge(common, {
    ...commonConfig,
    mode: 'production',
    entry: {
      index: path.resolve(__dirname, '../src/components')
    },
    output: {
      path: path.resolve(__dirname, '../es'),
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'common.css'
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      })
    ]
  }),
  merge(common, {
    ...commonConfig,
    mode: 'production',
    entry: {
      index: path.resolve(__dirname, '../src/components')
    },
    output: {
      path: path.resolve(__dirname, '../lib'),
      filename: '[name].js',
      libraryTarget: 'commonjs'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'common.css'
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      })
    ]
  })
]
