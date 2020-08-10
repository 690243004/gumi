import { createNamespace } from '../../helper/util'
import './index.scss'
const _createNamespace = createNamespace('icon')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    color: String,
    name: String,
    size: [String, Number]
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
