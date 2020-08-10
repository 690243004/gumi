# 弹出框

常见的弹出框

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Popup } from 'gumi'
export default {
  components: {
    [Popup.name]: Popup
  }
}
```

## 基础用法

可以设置双向绑定控制弹出框出现

```html
<gu-popup v-model="isShowPopup"></gu-popup>
```

## 指定位置

可以设置`position`属性，控制弹出框的弹出方向，分别为`top` `Bottom` `left` `right`

```html
<gu-popup position="top" v-model="isShowPopup"></gu-popup>
```

## 圆角

可以设置`round`属性，获得具有圆角的弹出框 (注意 : 当`position`为`left`或者`right`无效)

```html
<gu-popup round v-model="isShowPopup"></gu-popup>
```

## Props

|  属性名  |  类型   |  默认值  |                         说明                         |
| :------: | :-----: | :------: | :--------------------------------------------------: |
| overlay  | boolean |  `true`  |                    是否显示遮罩层                    |
| position | string  | `bottom` | 弹出位置，可以设置为`top`、`bottom`、`left`、`right` |
|  round   | boolean | `false`  |                      是否为圆角                      |
|  value   | boolean | `false`  |                    是否显示弹出层                    |

## Slots

| 插槽名称 | 说明       |
| -------- | ---------- |
| default  | 弹出层内容 |

</div>

<div class="mdoc-section">

[cinwell website](https://www.zdxhyangyan.cn/github/gumi/site/#/base/popup ':include :type=iframe frameborder=no')

</div>

</div>
