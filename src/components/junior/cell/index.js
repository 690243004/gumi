import globalMixin from '../../helper/mixins/global'
import { createNamespace } from '../../helper/util'
import Icon from '../icon'
const _createNamespace = createNamespace('cell')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  props: {
    // 边框
    border: Boolean,
    // 左侧图标
    icon: String,
    // 是否可以点击
    isLink: Boolean,
    // 标签
    label: String,
    // 说明
    meta: String,
    // 值
    value: [String, Number]
  },
  components: {
    [Icon.name]: Icon
  },
  mixins: [globalMixin],
  methods: {
    onClick(e) {
      if (this.isLink) {
        this.$emit('click', e)
      }
    }
  },
  render(h) {
    // slot better then props
    const icon = h(
      'div',
      {
        class: bem('icon')
      },
      [
        this.slot.icon || this.icon
          ? h(Icon, {
              attrs: { name: this.icon }
            })
          : undefined
      ]
    )

    const label = h(
      'div',
      {
        class: bem('label')
      },
      [this.label || this.slot.default]
    )

    const link = this.isLink
      ? h(Icon, {
          class: bem('link'),
          attrs: {
            name: 'right'
          }
        })
      : undefined

    const meta = h(
      'div',
      {
        class: bem('meta')
      },
      [
        this.slot.meta ||
          h(
            'span',
            {
              class: bem('meta--text')
            },
            this.meta
          )
      ]
    )

    const value = h(
      'div',
      {
        class: bem('value')
      },
      [this.slot.value || this.value, link]
    )

    return h(
      'div',
      {
        class:
          bem() +
          bem({
            border: this.border,
            isLink: this.isLink
          }),
        on: {
          click: this.onClick
        }
      },
      [icon, label, value, meta]
    )
  }
})
