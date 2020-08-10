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

## Props(Radio-Group)

| 属性名 | 类型             | 默认值 | 说明               |
| :----- | :--------------- | :----- | :----------------- |
| value  | string \| number | `null` | 单选框组当前选择项 |

## Props (Radio)

| 属性名 | 类型             | 默认值 | 说明           |
| :----- | :--------------- | :----- | :------------- |
| name   | string \| number | `null` | 单选框对应索引 |

## Events(Radio-Group)

| 事件名 | 回调参数      | 说明                       |
| ------ | ------------- | -------------------------- |
| change | name : string | 选择单选框时，会触发该事件 |

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/senior/radio ':include :type=iframe frameborder=no')

</div>

</div>
