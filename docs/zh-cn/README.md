# Gumi {docsify-ignore-all}

> 轻量级移动端 UI 框架

## 安装

## npm 安装

```
npm i gumi --save
```

## cdn

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gumi/dist/index.css" />
<!-- 引入组件 -->
<script src="https://cdn.jsdelivr.net/npm/gumi/dist/gumi.min.js"></script>
```

## 导入

全局加载

```js
import { install } from 'gumi'
import Vue from 'vue'
install(Vue)
```

按需加载

```js
import { Button } from 'gumi'
Vue.component(Button.name, Button)
```

<!-- https://www.zdxhyangyan.cn/test/mobile/glow -->
