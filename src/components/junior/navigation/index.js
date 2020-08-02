import globalMixin from '../../helper/mixins/global'
import { createNamespace } from '../../helper/util'
import Affix from '../affix'
import Icon from '../icon'
const _createNamespace = createNamespace('navigation')
const [createComponent, bem] = _createNamespace
import './index.scss'
export default createComponent({
  props: {
    title: String,
    back: Boolean,
    more: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    fixed: Boolean
  },
  mixins: [globalMixin],
  methods: {
    onLeftIconClick() {
      this.$emit('onLeftClick')
      if (this.back) {
        this.$router.go(-1)
      }
    },
    onRightIconClick() {
      this.$emit('onRightClick')
    }
  },
  render(h) {
    let iconNode, rightIconNode

    if (this.back) {
      iconNode = h(Icon, {
        props: {
          name: 'left'
        }
      })
    } else if (this.slot.icon) {
      iconNode = this.slot.icon
    }

    if (this.more) {
      rightIconNode = h(Icon, {
        props: {
          name: 'more'
        }
      })
    }
    if (this.slot.right) {
      rightIconNode = this.slot.right
    }

    const icon = h(
      'div',
      {
        class: bem('icon'),
        on: {
          click: this.onLeftIconClick
        }
      },
      [iconNode]
    )

    const title = h(
      'div',
      {
        class: bem('title')
      },
      [this.slot.title || this.title]
    )

    const rightIcon = h(
      'div',
      {
        class: bem('right-icon'),
        on: {
          click: this.onRightIconClick
        }
      },
      [rightIconNode]
    )

    let navigation = h(
      'div',
      {
        class: bem() + bem(this.type)
      },
      [icon, title, rightIcon]
    )

    if (this.fixed) {
      navigation = h(Affix, {}, [navigation])
    }

    return navigation
  }
})
