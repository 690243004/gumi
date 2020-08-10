# Field

风格与单元格组件一致的输入框，可配合单元格使用

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Field } from 'gumi'
export default {
  components: {
    [Field.name]: Field
  }
}
```

## 基础用法

可以设置双向绑定与输入框的值关联

```html
<gu-field label="姓名" v-model="name"></gu-field>
```

## 必填

可以设置`required`属性获得有必填图标的输入框

```html
<gu-field required label="姓名" value="雷电芽衣"></gu-field>
```

## 右对齐

可以设置`align-right`属性获得右对齐的输入框

```html
<gu-field align-right label="公司"></gu-field>
```

## 使用 slot

可以设置名称为`button`插槽

```html
<gu-field label="短信验证">
  <template #button>
    <gu-button size="small" type="primary">发送验证码</gu-button>
  </template>
</gu-field>
```

## 文本框

可以设置`textarea`属性获得输入框的文本框

```html
<gu-field textarea v-model="remark" label="留言"></gu-field>
```

## Props

| 属性名     | 类型           | 默认值  | 说明                        |
| :--------- | :------------- | :------ | :-------------------------- |
| alignRight | boolean        | `false` | 是否右对齐输入框            |
| border     | boolean        | `false` | 是否显示                    |
| label      | string         | `null`  | 输入框标签                  |
| password   | boolean        | `false` | 是否为密码框，同`input`属性 |
| require    | boolean        | `false` | 是否显示必填图标            |
| textarea   | boolean        | `false` | 输入框是否为文本框          |
| value      | string\|number | `null`  | 输入框的值                  |

## Slots

| 插槽名称 | 说明                                 |
| -------- | ------------------------------------ |
| label    | 输入框标签                           |
| button   | 提供给按钮等元素使用的输入框右侧插槽 |

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/senior/field ':include :type=iframe frameborder=no')

</div>

</div>
