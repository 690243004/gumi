# LoadMore

当动态渲染分页列表时，可以使用加载更多组件

<div class="mdoc">
<div class="mdoc-main">

## 导入

```js
import { LoadMore } from 'gumi'
export default {
  components: {
    [LoadMore.name]: LoadMore
  }
}
```

## 基础用法

加载更多组件会自动检查列表是否到达了底部，所以首屏加载的数据最好占满一屏幕内容使其滚动

```html
<gu-load-more @load="onLoad" v-model="loading" :finished="finished">
  <div class="load-more-content-item" v-for="(item, index) in array" :key="index">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vitae rerum illo tempora quas placeat sunt aliquam
    provident, deserunt cum optio consequatur nulla tenetur libero voluptatibus ipsa accusantium nemo explicabo!
  </div>
</gu-load-more>
```

```js
export default {
  data() {
    return {
      array: new Array(10).fill(''),
      loading: false,
      finished: false
    }
  },
  methods: {
    setup() {
      this.array = []
      for (let index = 1; index <= 12; index++) {
        this.array.push(index)
      }
    },
    onLoad() {
      setTimeout(() => {
        if (this.array.length >= 30) {
          return (this.finished = true)
        }
        const lastItem = this.array[this.array.length - 1]
        for (let index = 1; index <= 12; index++) {
          this.array.push(lastItem + index)
        }
        this.loading = false
      }, 1000)
    }
  }
}
```

## Props

| 属性名        | 类型    | 默认值           | 说明                                                       |
| :------------ | :------ | :--------------- | :--------------------------------------------------------- |
| imediateCheck | boolean | `false`          | 组件加载后，立即检查是否到达底部，若是则立即执行 load 方法 |
| finished      | boolean | `false`          | 是否已没有更多数据加载                                     |
| finishedText  | string  | `已没有更多数据` | 没有更多数据加载时底部显示文字                             |
| offset        | number  | `30`             | 该值表示距离底部的距离，会触发加载事件                     |
| valueText     | string  | `正在加载更多`   | 加载时底部显示文字                                         |
| value         | boolean | false            | 是否为加载中状态                                           |

## Events

| 事件名 | 回调参数 | 说明                     |
| ------ | -------- | ------------------------ |
| load   |      `null`    | 列表到底部时会触发该事件 |

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/senior/loadMore ':include :type=iframe frameborder=no ')

</div>

</div>
