# Radio

常见的单选框组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Radio, RadioGroup } from 'gumi'
export default {
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup
  }
}
```

## 基础用法

可以设置双向绑定关联对应的的单选框

```html
<gu-radio-group v-model="active">
  <gu-radio>选项 1</gu-radio>
  <gu-radio>选项 2</gu-radio>
</gu-radio-group>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/radio ':include :type=iframe frameborder=no')

</div>

</div>
