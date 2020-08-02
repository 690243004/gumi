# 导航栏

页面顶部区域的导航栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Navigation } from 'glow-ui'
export default {
  components: {
    [Navigation.name]: Navigation
  }
}
```

## 基础用法

可以设置`title`属性定义导航栏标题

```html
<gl-navigation title="导航栏"></gl-navigation>
```

## 类型

可以设置`type`属性为`primary`将导航栏的背景颜色设置为主题色

```html
<gl-cell value="雷电芽衣" label="昵称"></gl-cell>
```

## 返回

可以设置`back`属性，获得有返回图标的单元格

```html
<gl-navigation back type="primary" title="返回"></gl-navigation>
```

## 固定

可以设置`fixed`将导航栏固定

```html
<gl-navigation fixed back type="primary" title="使用固钉"></gl-navigation>
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

[cinwell website](http://localhost:8080/#/base/navigation ':include :type=iframe')

</div>

</div>
