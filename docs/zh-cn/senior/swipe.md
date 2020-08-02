# Swipe

常见的轮播图组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Swipe, SwipeItem } from 'glow-ui'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
```

## 基础用法

```html
<gl-swipe>
  <gl-swipe-item>
    <img src="/scenery_1.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_2.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_3.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_4.jpg" />
  </gl-swipe-item>
</gl-swipe>
```

## 自动播放

可以设置`autoplay`获得自动播放的轮播图

```html
<gl-swipe autoplay="2000">
  <gl-swipe-item>
    <img src="/scenery_1.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_2.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_3.jpg" />
  </gl-swipe-item>
  <gl-swipe-item>
    <img src="/scenery_4.jpg" />
  </gl-swipe-item>
</gl-swipe>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/swipe ':include :type=iframe ')

</div>

</div>
