# Cell

常见的单元格，可用于渲染条目

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Cell } from 'glow-ui'
export default {
  components: {
    [Cell.name]: Cell
  }
}
```

## 基础用法

可以设置`label`与`value`分别设置单元格左侧与右侧的值

```html
<gl-cell value="雷电芽衣" label="昵称"></gl-cell>
```

## 边框

可以设置`border`获得有下边框的单元格

```html
<gl-cell value="雷电芽衣" label="昵称"></gl-cell>
```

## 显示链接

可以设置`is-link`获得显示链接图标的单元格

```html
<gl-cell is-link value="女">性别</gl-cell>
```

## 属性

可以设置`meta`属性

```html
<gl-cell meta="菊花花" is-link value="雷电芽衣" label="昵称"></gl-cell>
```

## 左侧图标

可以设置`icon`属性配置左侧的图标

```html
<gl-cell icon="cart" is-link label="购物车"></gl-cell>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/cell ':include :type=iframe')

</div>

</div>
