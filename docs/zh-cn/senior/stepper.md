# Stepper

常见的步进器组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Stepper } from 'glow-ui'
export default {
  components: {
    [Stepper.name]: Stepper
  }
}
```

## 基础用法

可以设置双向绑定关联步进器的值

```html
<gl-stepper v-model="num"></gl-stepper>
```

## 禁用状态

可以设置`disabled`禁用步进器

```html
<gl-stepper disabled></gl-stepper>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/stepper ':include :type=iframe ')

</div>

</div>
