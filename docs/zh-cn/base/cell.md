# Cell

常见的单元格，可用于渲染条目

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Cell } from 'gumi'
export default {
  components: {
    [Cell.name]: Cell
  }
}
```

## 基础用法

可以设置`label`与`value`分别设置单元格左侧与右侧的值

```html
<gu-cell value="雷电芽衣" label="昵称"></gu-cell>
```

## 边框

可以设置`border`获得有下边框的单元格

```html
<gu-cell value="雷电芽衣" label="昵称"></gu-cell>
```

## 显示链接

可以设置`is-link`获得显示链接图标的单元格

```html
<gu-cell is-link value="女">性别</gu-cell>
```

## 描述

可以设置`meta`属性，为单元格增加描述

```html
<gu-cell meta="菊花花" is-link value="雷电芽衣" label="昵称"></gu-cell>
```

## 左侧图标

可以设置`icon`属性配置左侧的图标

```html
<gu-cell icon="cart" is-link label="购物车"></gu-cell>
```

## Props 

| 属性名 |  类型   |  默认值   |                           说明                           |
| :----: | :-----: | :-------: | :------------------------------------------------------: |
| border | boolean |  `false`  |                      是否显示下边框                      |
|  icon  | string  |  `null`   |             左侧图标名称，详情请看`icon`组件             |
| isLink | boolean |  `false`  |                     单元格是否能点击                     |
| label  | string  |  `null`   |                      单元格左侧标签                      |
|  meta  | string  | `string`  |                        单元格描述                        |
|  size  | string  | `normal`  |       按钮大小，可设置为`normal`、`small`、`large`       |
| round  | boolean |  `false`  |                      是否为圆角按钮                      |
|  type  | string  | `default` | 按钮类型，可设置为`primary`、`scucess`、`danger`、`warn` |



## Events

| 事件名 | 回调参数      | 说明                                         |
| ------ | ------------- | -------------------------------------------- |
| click  | event : Event | 若`isLink`为`true`，则点击单元格时触发该事件 |



## Slots 

| 插槽名称 | 说明           |
| -------- | -------------- |
| default  | 单元格标签     |
| icon     | 单元格左侧图标 |
| meta     | 单元格描述     |



</div>

<div class="mdoc-section">



[cinwell website](http://localhost:8080/#/base/cell ':include :type=iframe frameborder=no')

</div>

</div>