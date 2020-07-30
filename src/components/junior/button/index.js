import { createNamespace } from '../../helper/util'
import globalMixin from '../../helper/mixins/global'
import './index.scss'
const _createNamespace = createNamespace('button')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    link: [String, Object],
    href: String,
    disabled: Boolean,
    round: Boolean,
    block: Boolean,
    partLine: Boolean,
    plain: Boolean
  },
  mixins: [globalMixin],
  methods: {
    onClick(e) {
      e.stopPropagation()
      if (this.disabled) return
      this.$emit('click')
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
