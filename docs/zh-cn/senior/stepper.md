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

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/stepper ':include :type=iframe frameborder=no ')

</div>

</div>
