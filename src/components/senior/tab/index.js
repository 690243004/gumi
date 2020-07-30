import { createNamespace } from '../../helper/util'
import { ra1, ra2, getScroller } from '../../helper/dom'
import touchMixin from '../../helper/mixins/touch'
import BindEventMixin from '../../helper/mixins/bind-event'
import './index.scss'
const _createNamespace = createNamespace('tab')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    value: {
      type: Number,
      default: 0
    },
    rate: {
      tyep: Number,
      default: 0.26
    },
    scrollNum: {
      type: Number,
      default: 4
    },
    duration: {
      type: Number,
      default: 0.3
    },
    scrollspy: [Boolean],
    touchable: [Boolean],
    animatable: [Boolean],
    fixed: [Boolean],
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenNodes: [],
      inited: false,
      lineStyle: {},
      labelStyle: {},
      wrapStyle: {},
      mainStyle: {},
      activeLabelVNode: undefined
    }
  },
  computed: {
    count() {
      return this.childrenNodes.length
    },
    active() {
      return this.childrenNodes.findIndex((node) => node.index === this.value)
    }
  },
  mixins: [
    touchMixin(),
    BindEventMixin(function (bind) {
      if (this.touchable) {
        bind(window, 'touchstart', this.touchStart)
        bind(window, 'touchmove', this.touchMove)
        bind(window, 'touchend', this.touchEnd)
      }
      if (this.fixed) {
        if (!this.scroller) {
          this.scroller = getScroller(this.$el)
        }
        bind(this.scroller, 'scroll', this.check)
      }
    })
  ],
  methods: {
    check() {
      this.$nextTick(() => {
        const el = this.$el
        const scrollerRect = el.getBoundingClientRect()
        const wrapStyle = {}
        if (scrollerRect.top < 0) {
          wrapStyle.position = 'fixed'
          wrapStyle.top = 0
          wrapStyle.zIndex = 1000
        }
        wrapStyle.overflowX = this.touchable ? 'hidden' : 'scroll'
        this.wrapStyle = wrapStyle
      })
    },
    initialize() {
      this.$nextTick(() => {
        if (this.active > -1) {
          const el = this.activeLabelVNode.elm
          if (el) {
            const elWidth = parseInt(getComputedStyle(el).width),
              elLeft = this.active * elWidth + 0.5 * elWidth - (this.rate / 2) * elWidth

            const lineStyle = {
              width: `${this.rate * elWidth}px`,
              transform: `translateX(${elLeft}px)`
            }

            if (this.inited) {
              lineStyle.transitionDuration = `${this.duration}s`
            }

            this.lineStyle = lineStyle

            if (this.scrollspy && this.count > this.scrollNum) {
              const listWidth = parseInt(getComputedStyle(this.$el).width),
                offsetCenter = Math.floor((listWidth - elWidth) / 2),
                leftDistance = this.active * elWidth,
                maxScrollLeft = this.count * elWidth - Math.floor((this.count * elWidth) / listWidth) * listWidth,
                nextScrollLeft = leftDistance - offsetCenter

              this.scrollTo(nextScrollLeft < 0 ? 0 : nextScrollLeft > maxScrollLeft ? maxScrollLeft : nextScrollLeft)
            }
          }
        }
      })
    },
    getLabels() {
      const _h = this.$createElement
      return this.childrenNodes.map((node, index) => {
        const _name = node.name || index,
          isActive = this.value === _name,
          _vnode = _h(
            'div',
            {
              class: bem([
                'label--item',
                {
                  'label--item__active': isActive
                }
              ]),
              style: this.labelStyle,
              on: {
                click: (e) => {
                  e.stopPropagation()
                  this.$emit('input', _name)
                }
              }
            },
            node.title
          )
        if (isActive) {
          this.activeLabelVNode = _vnode
        }
        return _vnode
      })
    },
    scrollTo(x, offset = 5) {
      const labelList = this.$refs.labelList,
        currentScrollLeft = labelList.scrollLeft

      if (currentScrollLeft > x) {
        if (currentScrollLeft - offset < x) {
          return (labelList.scrollLeft = x)
        }
        ra1(() => {
          labelList.scrollLeft -= offset
          this.scrollTo(x, offset)
        })
      } else {
        if (currentScrollLeft + offset > x) {
          return (labelList.scrollLeft = x)
        }
        ra1(() => {
          labelList.scrollLeft += offset
          this.scrollTo(x, offset)
        })
      }
    },
    setup() {
      if (this.scrollspy && this.count > this.scrollNum) {
        this.labelStyle.flexBasis = '22%'
      }
      ra2(() => {
        this.labelStyle.transitionDuration = `${this.duration - 0.1}s`
      })
      this.$nextTick(() => {
        this.inited = true
      })
    }
  },
  watch: {
    value: {
      handler() {
        this.initialize()
      }
    },
    horizonDirection: function (val) {
      if (!this.touchable) return
      if (this.offsetX > 20) {
        if (val === 'left') {
          if (this.active === this.count - 1) return
          this.$emit('input', this.childrenNodes[this.active + 1].index)
        } else if (val === 'right') {
          if (this.active === 0) return
          this.$emit('input', this.childrenNodes[this.active - 1].index)
        }
      }
    },
    active() {
      if (this.animatable) {
        if (this.inited) {
          this.mainStyle.transitionDuration = `${this.duration}s`
        }
      }
      this.mainStyle.transform = `translate3d(-${this.active * 100}%,0px,0px)`
    }
  },
  mounted() {
    this.initialize()
    this.setup()
  },
  render(h) {
    const labels = this.getLabels()
    const tabLine = h('div', {
      class: bem('line'),
      style: this.lineStyle
    })
    return h(
      'div',
      {
        class: bem()
      },
      [
        h(
          'div',
          {
            class: bem('label'),
            ref: 'labelList',
            style: this.wrapStyle
          },
          [labels, tabLine]
        ),
        h(
          'div',
          {
            class: bem('main'),
            style: this.mainStyle
          },
          this.$slots.default
        )
      ]
    )
  }
})
