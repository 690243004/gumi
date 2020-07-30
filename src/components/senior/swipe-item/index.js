import { createNamespace } from '../../helper/util'
const _createNamespace = createNamespace('swipe-item')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  data() {
    return {
      offset: 0
    }
  },
  beforeCreate() {
    this.$parent.swipes.push(this)
  },
  computed: {
    computedStyle() {
      return {
        width: this.$parent.clientWidth + 'px',
        transform: `translateX(${this.offset}px)`
      }
    }
  },
  destory() {
    this.$parent.splice(this.$parent.swipes.indexOf(this), 1)
  },
  render(h) {
    return h(
      'div',
      {
        class: bem(),
        style: this.computedStyle
      },
      this.$slots.default
    )
  }
})
