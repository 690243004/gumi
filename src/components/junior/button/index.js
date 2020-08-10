import { createNamespace } from '../../helper/util'
import globalMixin from '../../helper/mixins/global'
import './index.scss'
const _createNamespace = createNamespace('button')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    // 块状
    block: Boolean,
    // 禁用状态
    disabled: Boolean,
    // 重定向连接
    href: String,
    // 路由连接
    link: [String, Object],
    // 朴素按钮
    plain: Boolean,
    // 按钮大小
    size: {
      type: String,
      default: 'normal'
    },
    // 圆角
    round: Boolean,
    // 按钮类型
    type: {
      type: String,
      default: 'default'
    }
  },
  mixins: [globalMixin],
  methods: {
    onClick(e) {
      e.stopPropagation()
      if (this.disabled) return
      this.$emit('click', e)
      if (this.href) {
        return (window.location.href = this.href)
      }
      if (this.link) {
        this.$router.push(this.link)
      }
    }
  },
  render(h) {
    return h(
      'div',
      {
        class:
          bem() +
          bem([
            this.type,
            this.size,
            {
              round: this.round,
              block: this.block,
              plain: this.plain,
              disabled: this.disabled
            }
          ]),
        on: {
          click: this.onClick
        }
      },
      this.slot.default
    )
  }
})
