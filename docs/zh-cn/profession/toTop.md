# ToTop (1.1.2 新增)

回到顶部组件，常用于长列表

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { ToTop } from 'gumi'
export default {
  components: {
    [ToTop.name]: ToTop
  }
}
```

## 基础用法

可以设置`top`属性指定当外层滚动元素滚动条滚动了多少才显示该组件，默认为`100`

```html
<gu-to-top :top="100" />
```

## Props

| 属性名 | 类型   | 默认值 | 说明                                                   |
| :----- | :----- | :----- | :----------------------------------------------------- |
| top    | Number | `100`  | 滚动元素滚动条的滚动高度大于该值时，会显示回到顶部组件 |

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/profession/toTop ':include :type=iframe frameborder=no')

</div>

</div>
