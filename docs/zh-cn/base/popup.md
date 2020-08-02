# 弹出框

常见的弹出框

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Popup } from 'glow-ui'
export default {
  components: {
    [Popup.name]: Popup
  }
}
```

## 基础用法

可以设置双向绑定控制弹出框出现

```html
<gl-popup v-model="isShowPopup"></gl-popup>
```

## 指定位置

可以设置`position`属性，控制弹出框的弹出方向，分别为`top` `Bottom` `left` `right`

```html
<gl-popup position="top" v-model="isShowPopup"></gl-popup>
```

## 圆角

可以设置`round`属性，获得具有圆角的弹出框 (注意 : 当`position`为`left`或者`right`无效)

```html
<gl-popup round v-model="isShowPopup"></gl-popup>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/popup ':include :type=iframe')

</div>

</div>
