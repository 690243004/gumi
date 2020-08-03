module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    parser: 'babel-eslint'
  },
  extends: [
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  // 你的脚本运行在什么地方 ?
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  // 额外的全局变量
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // rules：开启规则和发生错误时报告的等级
  // 0或'off'：关闭规则。
  // 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）。
  // 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    // 添加自定义规则
    'prettier/prettier': 1,
    // 是否能使用console.log
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'eslint-disable no-unused-vars': '1',
    // 必须使用全等
    eqeqeq: ['warn', 'always'],
    // 首选const
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }]
  }
}
