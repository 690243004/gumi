# 底部标签栏

当需要进行页面切换时，可以设置底部标签栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Tabbar, TabbarItem } from 'gumi'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
```

## 基础用法

可以设置`icon`属性，定义标签图标.

```html
<gu-tabbar v-model="active">
  <gu-tabbar-item icon="home">首页</gu-tabbar-item>
  <gu-tabbar-item icon="sort">分类</gu-tabbar-item>
  <gu-tabbar-item icon="cart">购物车</gu-tabbar-item>
  <gu-tabbar-item icon="my">我的</gu-tabbar-item>
</gu-tabbar>
```

## 颜色

可以设置`activeColor`属性，定义标签激活时颜色

```html
<gu-tabbar activeColor="#66ccff" v-model="activeSecond">
  ...
</gu-tabbar>
```

## 使用名称

可以设置`name`属性，改变工具栏项的索引

```html
<gu-tabbar @change="onTabbarChange" activeColor="#66ccff" v-model="activeThird">
  <gu-tabbar-item name="home" icon="home">首页</gu-tabbar-item>
  <gu-tabbar-item name="sort" icon="sort">分类</gu-tabbar-item>
  <gu-tabbar-item name="cart" icon="cart">购物车</gu-tabbar-item>
  <gu-tabbar-item name="user" icon="my">我的</gu-tabbar-item>
</gu-tabbar>
```

## 路由控制

可以设置`route`将底部标签栏与`router`同步

```html
<gu-tabbar @change="onTabbarChange" activeColor="#66ccff" route>
  <gu-tabbar-item name="/" icon="home">首页</gu-tabbar-item>
  <gu-tabbar-item name="/base/tabbar" icon="my">工具栏</gu-tabbar-item>
</gu-tabbar>
```

## Props

| 属性名 |  类型   |  默认值   |       说明       |
| ---- | :-----: | ------- | -------------- |
|  activeColor  | string |  `null`  | 标签激活时颜色 |
| bottom | boolean |  `false`  |  是否固定在页面底部  |
| color | string |  `null`  |    标签未激活时颜色    |
| route       | boolean  | `false` |    是否同步`vue`路由    |


## Events

| 事件名 | 回调参数      | 说明                                         |
| ------ | ------------- | -------------------------------------------- |
| change  | name : string | 标签对应索引 |


</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/tabbar ':include :type=iframe frameborder=no')

</div>

</div>
