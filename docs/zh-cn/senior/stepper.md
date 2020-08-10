# Stepper

常见的步进器组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Stepper } from 'gumi'
export default {
  components: {
    [Stepper.name]: Stepper
  }
}
```

## 基础用法

可以设置双向绑定关联步进器的值

```html
<gu-stepper v-model="num"></gu-stepper>
```

## 禁用状态

可以设置`disabled`禁用步进器

```html
<gu-stepper disabled></gu-stepper>
```

## Props

| 属性名   | 类型    | 默认值  | 说明                          |
| :------- | :------ | :------ | :---------------------------- |
| disabled | boolean | `false` | 是否为禁用状态                |
| max      | number  | `null`  | 步进器最大值                  |
| min      | number  | `null`  | 步进器最小值                  |
| value    | Number  | `0`     | 步进器对应值                  |
| zeroHide | boolean | `true`  | 步进器为 0 是是否隐藏部分视图 |

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/senior/stepper ':include :type=iframe frameborder=no ')

</div>

</div>
