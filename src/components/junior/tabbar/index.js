import globalMixin from '../../helper/mixins/global'
import { createNamespace } from '../../helper/util'
const _createNamespace = createNamespace('tabbar')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  data() {
    return {
      childrenNode: [],
      tabbarStyle: {}
    }
  },
  props: {
    activeColor: String,
    bottom: Boolean,
    color: String,
    route: Boolean,
    value: [String, Number],
  },
  methods: {
    onChange(index) {
      this.$emit('input', index)
      this.$emit('change', index)
      if (this.route) {
        this.$router.push(index)
      }
    }
  },
  mounted() {
    if (this.bottom) {
      this.tabbarStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0
      }
    }
  },
  mixins: [globalMixin],
  render(h) {
    return h(
      'div',
      {
        class: bem(),
        style: this.tabbarStyle
      },
      this.slot.default
    )
  }
})
