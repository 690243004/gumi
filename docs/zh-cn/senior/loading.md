# Loading

显示加载动画的组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Loading } from 'gumi'
export default {
  components: {
    [Loading.name]: Loading
  }
}
```

## 基础用法

默认为纯 CSS 实现的圆环加载动画，必须设置`backgoundColor`属性与组件的父元素一致

```html
<gu-loading backgroundColor="#f9f9f9" />
```

## 条状类型

可以设置`type`属性为`bar`，获得条状加载中组件

```html
<gu-loading type="bar" />
```

## 颜色

可以设置`color`属性切换加载中组件的颜色

```html
<gu-loading backgroundColor="#f9f9f9" color="#66ccff" />
```

## 文本框

可以设置`textarea`属性获得输入框的文本框

```html
<gu-field textarea v-model="remark" label="留言"></gu-field>
```

## 大小

可以设置`size`属性改变加载中组件的大小，单位为像素

```html
<gu-loading backgroundColor="#f9f9f9" color="#66ccff" size="80" />
```

## 继承父节点宽度

可以设置`inherit`继承父组件的宽度为加载中组件的大小

```html
<gu-loading backgroundColor="#f9f9f9" color="#66ccff" inherit />
```



## Props

| 属性名          | 类型           | 默认值    | 说明                                              |
| :-------------- | :------------- | :-------- | :------------------------------------------------ |
| backgroundColor | string         | `#f5f5f5` | 当类型为`round`时，需要设置该属性为父元素背景颜色 |
| barNum          | number         | `4`       | 类型为`bar`时可以调整对应条状物个数               |
| barDistance     | number         | `3`       | 类型为`bar`时可以调整条状物之间的距离             |
| color           | string         | `null`    | 组件颜色                                          |
| duration        | number         | `2000`    | 动画间隔，单位为`ms`                              |
| inherit         | boolean        | `false`   | 是否继承父组件宽度，用于自适应布局                |
| size            | string\|number | `40`      | 组件大小，单位为`px`                              |
| type            | string         | `round`   | 加载中组件类型，可以设置`round`、`bar`            |

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/loading ':include :type=iframe frameborder=no')

</div>

</div>
