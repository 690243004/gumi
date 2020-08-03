# Tab

常见的标签栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Tab } from 'gumi'
export default {
  components: {
    [Tab.name]: Tab,
    [TabPanel.name]: TabPanel
  }
}
```

## 基础用法

```html
<gu-tab v-model="active">
  <gu-tab-panel title="标签栏1">
    <div class="content1">内容1</div>
  </gu-tab-panel>
  <gu-tab-panel title="标签栏2">
    <div class="content2">内容2</div>
  </gu-tab-panel>
</gu-tab>
```

## 过度

可以设置`animatable`属性让标签切换时增加过度效果

```html
<gu-tab v-model="active" animatable>
  <gu-tab-panel title="标签栏1">
    <div class="content1">内容1</div>
  </gu-tab-panel>
  <gu-tab-panel title="标签栏2">
    <div class="content2">内容2</div>
  </gu-tab-panel>
</gu-tab>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/tab ':include :type=iframe frameborder=no')

</div>

</div>
