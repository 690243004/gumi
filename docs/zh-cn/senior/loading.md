# Loading

显示加载动画的组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Loading } from 'glow-ui'
export default {
  components: {
    [Loading.name]: Loading
  }
}
```

## 基础用法

默认为纯 CSS 实现的圆环加载动画，必须设置`backgoundColor`属性与组件的父元素一致

```html
<gl-loading backgroundColor="#f9f9f9" />
```

## 条状类型

可以设置`type`属性为`bar`，获得条状加载中组件

```html
<gl-loading type="bar" />
```

## 文字

可以设置`title`属性，将文字显示在加载中组件下方

```html
<gl-loading type="bar" title="加载中" />
```

## 颜色

可以设置`color`属性切换加载中组件的颜色

```html
<gl-loading backgroundColor="#f9f9f9" color="#66ccff" />
```

## 文本框

可以设置`textarea`属性获得输入框的文本框

```html
<gl-field textarea v-model="remark" label="留言"></gl-field>
```

## 大小

可以设置`size`属性改变加载中组件的大小，单位为像素

```html
<gl-loading backgroundColor="#f9f9f9" color="#66ccff" size="80" />
```

## 继承父节点宽度

可以设置`inherit`继承父组件的宽度为加载中组件的大小

```html
<gl-loading backgroundColor="#f9f9f9" color="#66ccff" inherit />
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/loading ':include :type=iframe')

</div>

</div>
