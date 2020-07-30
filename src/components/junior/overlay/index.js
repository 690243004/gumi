import { createNamespace } from '../../helper/util'
import './index.scss'
const _createNamespace = createNamespace('overlay')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    zIndex: {
      type: Number,
      default: 2000
    },
    value: Boolean
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        display: this.value ? 'block' : 'none'
      }
    }
  },
  methods: {
    onClick(e) {
      e.stopPropagation()
      this.$emit('click')
    }
  },
  render(h) {
    return h(
      'transition',
      {
        attrs: {
          name: 'glow-overlay-fade'
        }
      },
      [
        h('div', {
          class: bem() + bem(this.value ? 'active' : 'unactive'),
          style: {
            zIndex: this.zIndex
          },
          directives: [
            {
              name: 'show',
              value: this.value
            }
          ],
          on: {
            click: this.onClick
          }
        })
      ]
    )
  }
})
