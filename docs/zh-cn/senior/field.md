# Field

风格与单元格组件一致的输入框，可配合单元格使用

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Field } from 'glow-ui'
export default {
  components: {
    [Field.name]: Field
  }
}
```

## 基础用法

可以设置双向绑定与输入框的值关联

```html
<gl-field label="姓名" v-model="name"></gl-field>
```

## 必填

可以设置`required`属性获得有必填图标的输入框

```html
<gl-field required label="姓名" value="雷电芽衣"></gl-field>
```

## 右对齐

可以设置`align-right`属性获得右对齐的输入框

```html
<gl-field align-right label="公司"></gl-field>
```

## 使用 slot

可以设置名称为`button`插槽

```html
<gl-field label="短信验证">
  <template #button>
    <gl-button size="small" type="primary">发送验证码</gl-button>
  </template>
</gl-field>
```

## 文本框

可以设置`textarea`属性获得输入框的文本框

```html
<gl-field textarea v-model="remark" label="留言"></gl-field>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/field ':include :type=iframe')

</div>

</div>
