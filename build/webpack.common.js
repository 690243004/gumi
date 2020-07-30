const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: ['url-loader?limit=17631&name=[hash:8]-[name].[ext]']
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    // 省略后缀x
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, '../src/'),
      '@c': path.join(__dirname, '../src/components'),
      '@u': path.join(__dirname, '../src/utils')
    }
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
}

module.exports = config
