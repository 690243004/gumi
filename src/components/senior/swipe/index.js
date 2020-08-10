import { createNamespace } from '../../helper/util'
import touchMixin from '../../helper/mixins/touch'
import viewportMixin from '../../helper/mixins/viewport'
import BindEventMixin from '../../helper/mixins/bind-event'
import { ra2 } from '../../helper/dom'
import './index.scss'
const _createNamespace = createNamespace('swipe')
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    autoplay: Number,
    duration: {
      type: Number,
      default: 200
    },
    // 是否循环，默认开启，需要在以下函数做切面
    // onTouchMove : 当为最后一个时，不能让执行next offset > this.containerWidth - this.clientWidth，当为第一个时，不能让他向执行pre
    // autoPlay : 当自动播放到最后一个时，应执行pre函数，当回到第一个时，应该执行next函数
    loop: {
      type: Boolean,
      default: true
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: 0,
      isSwiping: true, // 是否取消过度效果，在触摸时和瞬移时用到
      isRight: true,
      moveX: 0,
      swipes: []
    }
  },
  computed: {
    count() {
      return this.swipes.length
    },
    containerWidth() {
      return this.clientWidth * this.count
    },
    computedStyle() {
      return {
        width: `${this.containerWidth}px`,
        display: 'flex',
        transitionDuration: this.isSwiping ? '0ms' : `${this.duration}ms`,
        transform: `translateX(${this.moveX}px)`
      }
    },
    firstSwipe() {
      return this.swipes[0]
    },
    lastSwipe() {
      return this.swipes[this.swipes.length - 1]
    },
    minDistant() {
      return Math.abs(this.clientWidth / 4)
    },
    onFirst() {
      return this.active === 0
    },
    onLast() {
      return this.active === this.count - 1
    }
  },
  methods: {
    autoPlay() {
      if (this.count === 1 || this.isSwiping || !this.autoplay) return
      this.clear()
      this.timer = setTimeout(() => {
        this.correctPosition()
        // 在位置矫正后的第二帧才执行下一页的请求
        ra2(() => {
          this.isSwiping = false
          if (!this.loop) {
            this.isRight = this.onLast ? false : true
            this.isRight ? this.next() : this.pre()
          } else {
            this.next()
          }
          this.autoPlay()
        })
      }, this.autoplay)
    },
    clear() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    correctPosition() {
      this.isSwiping = true
      this.swipes.forEach((item) => (item.offset = 0))
      if (this.active > this.count - 1) {
        this.moveX = 0
        this.active = 0
      } else if (this.active < 0) {
        this.moveX = (this.count - 1) * this.clientWidth * -1
        this.active = this.count - 1
      }
    },
    getIndicator() {
      if (!this.showIndicator) return
      return this.swipes.map((item, index) => {
        const isActive =
          (index === 0 && this.active === this.count) ||
          (this.active === -1 && index === this.count - 1) ||
          this.active === index
        return this.$createElement('div', {
          class: bem([
            'indicator',
            {
              'indicator--active': isActive
            }
          ])
        })
      })
    },
    next() {
      this.correctPosition()
      this.isSwiping = false
      if (this.onLast) {
        this.moveFirstElement()
        this.moveX = -1 * this.containerWidth
      } else {
        this.moveX = (this.active + 1) * this.clientWidth * -1
      }
      this.active++
    },
    moveLastElement() {
      this.lastSwipe.offset = this.containerWidth * -1
    },
    moveFirstElement() {
      this.firstSwipe.offset = this.containerWidth
    },

    onTouchStart() {
      if (this.count === 1) return
      this.isSwiping = true
      this.clear()
      this.correctPosition()
      this.originalTranslateX = this.moveX
    },
    onTouchMove() {
      if (this.count === 1) return
      const distance = this.originalTranslateX + this.deltaX
      if (this.onLast && !this.loop && this.deltaX < 0) {
        return this.resetTouchStatus()
      }
      if (this.count >= 3) {
        if (this.onLast) {
          this.moveFirstElement()
        }
        if (this.onFirst) {
          this.moveLastElement()
        }
      } else if (this.count === 2) {
        if (this.onFirst) {
          if (distance > 0) {
            this.moveLastElement()
          } else {
            this.correctPosition()
          }
        } else {
          if (distance < -1 * this.clientWidth) {
            this.moveFirstElement()
          } else {
            this.correctPosition()
          }
        }
      }
      this.moveX = distance
    },
    onTouchEnd() {
      if (this.count === 1) return
      this.isSwiping = false
      if (this.offsetX < this.minDistant) {
        this.moveX = this.originalTranslateX
      } else {
        ra2(() => {
          this.horizonDirection === 'left' ? this.next() : this.pre()
        })
      }
      this.autoPlay()
    },
    pre() {
      this.correctPosition()
      this.isSwiping = false
      if (this.onFirst) {
        this.moveLastElement()
        this.moveX = this.clientWidth
      } else {
        this.moveX = (this.active - 1) * this.clientWidth * -1
      }
      this.active--
    },
    setup() {
      this.isSwiping = true
      ra2(() => {
        this.isSwiping = false
        this.autoPlay()
      })
    }
  },
  mixins: [
    touchMixin(),
    viewportMixin,
    BindEventMixin(function (bind) {
      bind(this.$el, 'touchstart', this.touchStart)
      bind(this.$el, 'touchmove', this.touchMove)
      bind(this.$el, 'touchend', this.touchEnd)
      bind(this.$el, 'touchstart', this.onTouchStart)
      bind(this.$el, 'touchmove', this.onTouchMove)
      bind(this.$el, 'touchend', this.onTouchEnd)
    })
  ],
  watch: {
    count() {
      this.setup()
    }
  },
  mounted() {
    this.setup()
  },
  destoryed() {
    this.clear()
  },
  render(h) {
    return h(
      'div',
      {
        class: bem()
      },
      [
        h(
          'div',
          {
            class: bem('content'),
            style: this.computedStyle
          },
          this.$slots.default
        ),
        h(
          'div',
          {
            class: bem('bottom')
          },
          this.getIndicator()
        )
      ]
    )
  }
})
