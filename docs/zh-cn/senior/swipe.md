# Swipe

常见的轮播图组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { Swipe, SwipeItem } from 'gumi'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
```

## 基础用法

```html
<gu-swipe>
  <gu-swipe-item>
    <img src="/scenery_1.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_2.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_3.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_4.jpg" />
  </gu-swipe-item>
</gu-swipe>
```

## 自动播放

可以设置`autoplay`获得自动播放的轮播图

```html
<gu-swipe autoplay="2000">
  <gu-swipe-item>
    <img src="/scenery_1.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_2.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_3.jpg" />
  </gu-swipe-item>
  <gu-swipe-item>
    <img src="/scenery_4.jpg" />
  </gu-swipe-item>
</gu-swipe>
```

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/swipe ':include :type=iframe frameborder=no ')

</div>

</div>
