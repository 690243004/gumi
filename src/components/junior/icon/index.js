import { createNamespace } from '../../helper/util'
const _createNamespace = createNamespace('icon')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  props: {
    name: String,
    size: [String, Number],
    color: String
  },
  render(h) {
    const iconStyle = {}
    if (this.size) {
      iconStyle.fontSize = typeof this.size === 'number' ? this.size + 'px' : this.size
    }
    if (this.color) {
      iconStyle.color = this.color
    }

    return h('i', {
      style: iconStyle,
      class: `${bem()} glow-icon ${this.name}`
    })
  }
})
