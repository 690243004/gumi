# Tab

常见的标签栏

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Tab, TabPanel } from 'gumi'
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

## 可触摸

可以设置`touchable`，开启触摸切换页签

```html
<gu-tab v-model="active" animatable touchable>
  ...
</gu-tab>
```

## Props

| 属性名     | 类型    | 默认值 | 说明                           |
| :--------- | :------ | :----- | :----------------------------- |
| animatable | boolean | false  | 页签切换时，是否添加过渡效果   |
| duration   | number  | 300    | 页签过渡时间，单位为`ms`       |
| fixed      | boolean | false  | 是否添加固钉效果               |
| lazyRender | boolean | true   | 是否懒加载视图                 |
| rate       | number  | 0.26   | 下划线占标签宽度的百分比       |
| scrollspy  | boolean | false  | 是否可以滚动                   |
| scrollNum  | number  | 4      | 超过该数量，tab 标签会进行滚动 |
| touchable  | boolean | false  | 是否可以通过触摸切换标签       |
| value      | Number  | 0      | 当前页签索引                   |

## Events

## Events

| 事件名 | 回调参数       | 说明                   |
| ------ | -------------- | ---------------------- |
| change | index : number | 切换标签后，触发该事件 |

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/senior/tab ':include :type=iframe frameborder=no')

</div>

</div>
