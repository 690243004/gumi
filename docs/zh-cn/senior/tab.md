# Tab

常见的标签栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Tab } from 'glow-ui'
export default {
  components: {
    [Tab.name]: Tab,
    [TabPanel.name]: TabPanel
  }
}
```

## 基础用法

```html
<gl-tab v-model="active">
  <gl-tab-panel title="标签栏1">
    <div class="content1">内容1</div>
  </gl-tab-panel>
  <gl-tab-panel title="标签栏2">
    <div class="content2">内容2</div>
  </gl-tab-panel>
</gl-tab>
```

## 过度

可以设置`animatable`属性让标签切换时增加过度效果

```html
<gl-tab v-model="active" animatable>
  <gl-tab-panel title="标签栏1">
    <div class="content1">内容1</div>
  </gl-tab-panel>
  <gl-tab-panel title="标签栏2">
    <div class="content2">内容2</div>
  </gl-tab-panel>
</gl-tab>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/tab ':include :type=iframe')

</div>

</div>
