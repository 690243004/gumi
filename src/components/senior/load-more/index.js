import { createNamespace } from '../../helper/util'
import { isHidden } from '../../helper/dom'
import { getScroller } from '../../helper/dom/scroll'
import BindEventMixin from '../../helper/mixins/bind-event'
import touchMixin from '../../helper/mixins/touch'
import './index.scss'
const _createNamespace = createNamespace('load-more')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    imediateCheck: Boolean,
    finished: {
      type: Boolean,
      default: false
    },
    finishedText: {
      type: String,
      default: '已没有更多数据'
    },
    offset: {
      type: Number,
      default: 30
    },
    valueText: {
      type: String,
      default: '正在加载更多'
    },
    value: Boolean
  },
  data() {
    return {
      isInit: true,
      error: false
    }
  },
  mixins: [
    touchMixin(),
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el)
      }
      bind(this.scroller, 'scroll', this.check)
    })
  ],
  mounted() {
    if (this.imediateCheck) {
      this.check()
    }
  },
  methods: {
    check() {
      this.$nextTick(() => {
        if (this.finished || this.value || this.error) {
          return
        }
        const el = this.$el,
          scroller = this.scroller,
          offset = this.offset
        let scrollerRect
        // 如果是普通元素
        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect()
        } else {
          // 如果是window 元素滚动
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          }
        }
        const scrollClientHeight = scrollerRect.bottom - scrollerRect.top
        if (!scrollClientHeight || isHidden(el)) {
          return false
        }
        const placeholderRect = this.$refs.placeholder.getBoundingClientRect()
        const isReactEdg = placeholderRect.bottom - scrollerRect.bottom < offset
        if (isReactEdg) {
          this.$emit('input', true)
          this.$emit('load')
        }
      })
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: bem()
      },
      [
        this.$slots.default,
        h(
          'div',
          {
            class: bem('holder'),
            direcitives: [
              {
                name: 'show',
                value: this.value
              }
            ]
          },
          [
            h(
              'div',
              {
                class: bem('holder-text'),
                ref: 'placeholder'
              },
              [this.finished ? this.finishedText : this.valueText]
            )
          ]
        )
      ]
    )
  }
})
