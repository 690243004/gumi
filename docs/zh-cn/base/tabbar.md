# 底部标签栏

当需要进行页面切换时，可以设置底部标签栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Tabbar, TabbarItem } from 'glow-ui'
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
<gl-tabbar v-model="active">
  <gl-tabbar-item icon="home">首页</gl-tabbar-item>
  <gl-tabbar-item icon="sort">分类</gl-tabbar-item>
  <gl-tabbar-item icon="cart">购物车</gl-tabbar-item>
  <gl-tabbar-item icon="my">我的</gl-tabbar-item>
</gl-tabbar>
```

## 颜色

可以设置`activeColor`属性，定义标签激活时颜色

```html
<gl-tabbar activeColor="#66ccff" v-model="activeSecond">
  ...
</gl-tabbar>
```

## 使用名称

可以设置`name`属性，改变工具栏项的索引

```html
<gl-tabbar @change="onTabbarChange" activeColor="#66ccff" v-model="activeThird">
  <gl-tabbar-item name="home" icon="home">首页</gl-tabbar-item>
  <gl-tabbar-item name="sort" icon="sort">分类</gl-tabbar-item>
  <gl-tabbar-item name="cart" icon="cart">购物车</gl-tabbar-item>
  <gl-tabbar-item name="user" icon="my">我的</gl-tabbar-item>
</gl-tabbar>
```

## 路由控制

可以设置`route`将底部标签栏与`router`同步

```html
<gl-tabbar @change="onTabbarChange" activeColor="#66ccff" route>
  <gl-tabbar-item name="/" icon="home">首页</gl-tabbar-item>
  <gl-tabbar-item name="/base/tabbar" icon="my">工具栏</gl-tabbar-item>
</gl-tabbar>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/tabbar ':include :type=iframe')

</div>

</div>
