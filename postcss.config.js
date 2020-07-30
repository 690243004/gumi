module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px-to-viewport')({
      viewportWidth: 750, //根据视觉稿的宽度进行设置
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [], //忽略转换的css选择器
      minPixelValue: 1,
      mediaQuery: false
    })
  ]
}
