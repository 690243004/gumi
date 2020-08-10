const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = [
  // npm publish package
  merge(common, {
    ...commonConfig,
    mode: 'production',
    optimization: {
      minimize: false
    },
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
        filename: 'index.css'
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
    optimization: {
      minimize: false
    },
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
        filename: 'index.css'
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
      path: path.resolve(__dirname, '../dist'),
      filename: 'gumi.min.js',
      libraryTarget: 'var'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index.css'
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      })
    ]
  })
]
