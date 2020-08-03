# 导航栏

页面顶部区域的导航栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Navigation } from 'gumi'
export default {
  components: {
    [Navigation.name]: Navigation
  }
}
```

## 基础用法

可以设置`title`属性定义导航栏标题

```html
<gu-navigation title="导航栏"></gu-navigation>
```

## 类型

可以设置`type`属性为`primary`将导航栏的背景颜色设置为主题色

```html
<gu-cell value="雷电芽衣" label="昵称"></gu-cell>
```

## 返回

可以设置`back`属性，获得有返回图标的单元格

```html
<gu-navigation back type="primary" title="返回"></gu-navigation>
```

## 固定

可以设置`fixed`将导航栏固定

```html
<gu-navigation fixed back type="primary" title="使用固钉"></gu-navigation>
```

## 属性

可以设置`meta`属性

```html
<gu-cell meta="菊花花" is-link value="雷电芽衣" label="昵称"></gu-cell>
```

## 左侧图标

可以设置`icon`属性配置左侧的图标

```html
<gu-cell icon="cart" is-link label="购物车"></gu-cell>
```

## Props

| 属性名 |  类型   |  默认值   |       说明       |
| :----: | :-----: | :-------: | :--------------: |
|  back  | boolean |  `false`  | 是否显示返回按钮，若为`true`<br/>点击返回时会自动调用`router.go(-1)` |
| fixed  | boolean |  `false`  |  是否固定在顶部  |
| title  | string  |  `null`   |    导航栏标题    |
|  type  | string  | `default` |    导航栏类型    |



## Events

| 事件名    | 回调参数      | 说明                     |
| --------- | ------------- | ------------------------ |
| leftClick | event : Event | 点击导航栏左侧图标时触发 |
| rigtClick | event : Event | 点击导航栏右侧图标时触发 |

## Slots 

| 插槽名称 | 说明           |
| -------- | -------------- |
| icon  | 导航栏左侧图标     |
| right     | 导航栏右侧图标 |
| title     | 导航栏标题     |


</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/navigation ':include :type=iframe frameborder=no')

</div>

</div>
