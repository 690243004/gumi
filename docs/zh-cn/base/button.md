# Button

常见的操作按钮

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Button } from 'glow-ui'
export default {
  components: {
    [Button.name]: Button
  }
}
```

## 基础类型

按钮默认底色为白色，灰色边框，另外还有 4 种类型

```html
<gl-button>默认</gl-button>
<gl-button type="primary">主要</gl-button>
<gl-button type="success">成功</gl-button>
<gl-button type="danger">危险</gl-button>
<gl-button type="warn">警告</gl-button>
```

## 朴素按钮

可以设置`plain`属性获得无底色、有边框的按钮

```html
<gl-button plain type="primary">主要</gl-button> <gl-button plain type="success">成功</gl-button>
```

## 按钮大小

按钮大小分为`small` `normal` `large`三种，其中默认为`normal`

```html
<gl-button size="small">小按钮</gl-button>
<gl-button type="primary">默认</gl-button>
<gl-button size="large" type="success">大按钮</gl-button>
```

## 禁用状态

可以设置`disabled` 将按钮设置为禁用状态，禁用状态期间，按钮不能点击且不会触发点击事件

```html
<gl-button disabled>禁用</gl-button>
```

## 圆角按钮

可以设置`round`属性获得圆角按钮。

```html
<gl-button round type="primary">圆角按钮</gl-button>
```

## 块状元素

按钮默认类型为`inline-block`，设置`block`属性后，可以获得类型为`block`的按钮

```html
<gl-button block round size="large" type="primary">提交订单</gl-button>
```

## 按钮链接

可以设置`link`或者`href`属性获得点击即跳转路由或者其它网站的按钮

```html
<gl-button link="/">首页</gl-button> <gl-button type="primary" href="https://cn.bing.com/">必应</gl-button>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/button ':include :type=iframe ')

</div>

</div>
