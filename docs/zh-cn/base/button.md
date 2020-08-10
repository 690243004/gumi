# Button

常见的操作按钮

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Button } from 'gumi'
export default {
  components: {
    [Button.name]: Button
  }
}
```

## 基础类型

按钮默认底色为白色，灰色边框，另外还有 4 种类型

```html
<gu-button>默认</gu-button>
<gu-button type="primary">主要</gu-button>
<gu-button type="success">成功</gu-button>
<gu-button type="danger">危险</gu-button>
<gu-button type="warn">警告</gu-button>
```

## 朴素按钮

可以设置`plain`属性获得无底色、有边框的按钮

```html
<gu-button plain type="primary">主要</gu-button> <gu-button plain type="success">成功</gu-button>
```

## 按钮大小

按钮大小分为`small` `normal` `large`三种，其中默认为`normal`

```html
<gu-button size="small">小按钮</gu-button>
<gu-button type="primary">默认</gu-button>
<gu-button size="large" type="success">大按钮</gu-button>
```

## 禁用状态

可以设置`disabled` 将按钮设置为禁用状态，禁用状态期间，按钮不能点击且不会触发点击事件

```html
<gu-button disabled>禁用</gu-button>
```

## 圆角按钮

可以设置`round`属性获得圆角按钮。

```html
<gu-button round type="primary">圆角按钮</gu-button>
```

## 块状元素

按钮默认类型为`inline-block`，设置`block`属性后，可以获得类型为`block`的按钮

```html
<gu-button block round size="large" type="primary">提交订单</gu-button>
```

## 按钮链接

可以设置`link`或者`href`属性获得点击即跳转路由或者其它网站的按钮

```html
<gu-button link="/">首页</gu-button> <gu-button type="primary" href="https://cn.bing.com/">必应</gu-button>
```

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/base/button ':include :type=iframe frameborder=no ')

</div>

</div>

## Props

|  属性名  |       类型       |  默认值   |                           说明                           |
| :------: | :--------------: | :-------: | :------------------------------------------------------: |
|  block   |     boolean      |  `false`  |          该值为`true`时，组件展示模式为块状类型          |
| disabled |     boolean      |  `false`  |                       是否禁用按钮                       |
|   href   |      string      |  `null`   |                     点击按钮跳转地址                     |
|   link   | string \| object |  `null`   |        点击按钮跳转路由地址，可以接收一个路由对象        |
|  plain   |     boolean      |  `false`  |                      是否为朴素按钮                      |
|   size   |      string      | `normal`  |       按钮大小，可设置为`normal`、`small`、`large`       |
|  round   |     boolean      |  `false`  |                      是否为圆角按钮                      |
|   type   |      string      | `default` | 按钮类型，可设置为`primary`、`scucess`、`danger`、`warn` |

## Events

| 事件名 | 回调参数      | 说明                         |
| ------ | ------------- | ---------------------------- |
| click  | event : Event | 点击按钮，不为禁用状态时触发 |
