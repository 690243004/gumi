# Icon

图标组件，可使用`gumi`自带的图标

<div class="mdoc">
<div class="mdoc-main">
## 导入

```js
import { Icon } from 'gumi'
export default {
  components: {
    [Icon.name]: Icon
  }
}
```

## 基础用法

可以设置`name`属性为`gumi`自带`ui`图标

```html
<gu-icon name="top" />
```

## 大小

可以设置`size`属性，控制组件大小，默认为像素

```html
<gu-icon :size="20" name="top" />
```

## 颜色

可以设置`color`属性，获得指定颜色的图标

```html
<gu-icon color="#66ccff" name="top" />
```

## Props

| 属性名 |      类型      | 默认值 |         说明         |
| :----: | :------------: | :----: | :------------------: |
| color  |     string     | `null` |       图标颜色       |
|  name  |     string     | `null` |       图标名称       |
|  size  | string\|number | `null` | 图标大小，默认为`px` |

</div>

<div class="mdoc-section">

[cinwell website](http://localhost:8080/#/base/icon ':include :type=iframe frameborder=no')

</div>
</div>
