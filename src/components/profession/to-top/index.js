import Icon from '../../junior/icon'
import { createNamespace } from '../../helper/util'
import { getScroller } from '../../helper/dom/scroll'
import BindEventMixin from '../../helper/mixins/bind-event'
import './index.scss'

const _createNamespace = createNamespace('to-top')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    top: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    check() {
      const top = this.scroller.pageYOffset || this.scroller.scrollTop
      if (top > this.top) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
    toTop() {
      const top = this.scroller.pageYOffset || this.scroller.scrollTop
      if (top > 0) {
        window.requestAnimationFrame(this.toTop.bind(this))
        this.scroller.scrollTo(0, top - top / 8)
      }
    }
  },
  mixins: [
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el)
      }
      console.log(this.scroller)
      bind(this.scroller, 'scroll', this.check)
    })
  ],

  render(h) {
    const self = this
    return h(
      'div',
      {
        class: bem(),
        on: {
          click: function (event) {
            event.stopPropagation()
            self.toTop()
          }
        },
        directives: [
          {
            name: 'show',
            value: this.visible
          }
        ]
      },
      [
        h(
          'div',
          {
            class: bem('dot')
          },
          [
            h(Icon, {
              props: {
                name: 'to-top',
                color: '#ffffff'
              }
            })
          ]
        )
      ]
    )
  }
})
