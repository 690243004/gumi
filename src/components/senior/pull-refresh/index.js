// 导入组件工具
import { createNamespace } from '../../helper/util'
// 导入获取滚动对象方法
import { getScroller, onTop } from '../../helper/dom/scroll'
// 导入触摸混合函数
import touchMixin from '../../helper/mixins/touch'
// 导入全局混合对象
import globalMixin from '../../helper/mixins/global'
// 导入绑定时间混合函数
import BindEventMixin from '../../helper/mixins/bind-event'
// 导入样式
import './index.scss'
// 导入加载中组件
import Loading from '../loading'
// 柯里化获取命名函数数组
const _createNamespace = createNamespace('pull-refresh')
// 提取命名函数数组
const [createComponent, bem] = _createNamespace

// 下拉中
const PULL = Symbol()
// 回弹
const REBOUNCE = Symbol()
// 加载中
const LOADING = Symbol()

// 通过数据做出相应的动作 -> 通过数据将组件状态改变，然后再执行相应动作
// 这样做的好处在于代码的可读性提高
export default createComponent({
  props: {
    distance: {
      type: Number,
      default: 200
    },
    value: Boolean
  },
  data() {
    return {
      trackStyle: null,
      onTransition: false,
      status: REBOUNCE
    }
  },
  mixins: [
    globalMixin,
    touchMixin(),
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el)
      }
      bind(this.$el, 'touchstart', (e) => {
        document.body.style.overscrollBehaviorY = 'contain'
        this.touchStart(e)
      })
      bind(this.$el, 'touchmove', (e) => {
        if (this.status === LOADING || this.deltaY < 0 || !onTop(this.scroller)) {
          return
        }
        // Please remove e.preventDefault(), because event.cancelable of touchmove is false
        if (e.cancelable) {
          e.preventDefault()
        }
        this.touchMove(e)
      })
      bind(this.$el, 'touchend', (e) => {
        this.onTouchEnd(e)
        document.body.style.overscrollBehaviorY = null
      })
    })
  ],
  watch: {
    status(value) {
      if (value === LOADING) {
        this._onLoading()
      } else if (value === REBOUNCE) {
        this._onRebouce()
      }
    },

    deltaY() {
      if (this.status === LOADING || !onTop(this.scroller)) return
      this.status = PULL
      this._onPull()
    },
    value(val) {
      if (!val) {
        this.status = REBOUNCE
      }
    },
    direction() {}
  },
  methods: {
    _setHeight(height) {
      let _height
      if (height === 0) {
        _height = 0
      } else {
        _height = height + 'px'
      }
      this.trackStyle = {
        transform: `translate3d(0,${_height},0)`
      }
    },
    _onPull() {
      if (this.deltaY > 0) {
        if (this.deltaY <= this.distance) {
          this.onTransition = false
          this._setHeight(this.deltaY)
        }
      } else {
        this._setHeight(0)
      }
    },
    _onLoading() {
      this.onTransition = true
      this._setHeight(50)
      this.$emit('input', true)
      this.$emit('load')
    },
    _onRebouce() {
      this.onTransition = true
      this._setHeight(0)
    },
    onTouchEnd() {
      if (this.status === LOADING || !onTop(this.scroller)) return
      if (this.deltaY > Math.floor(this.distance / 2)) {
        this.status = LOADING
      } else {
        this.status = REBOUNCE
      }
    }
  },
  render(h) {
    const trackLoading =
      this.status === LOADING
        ? h(
            'div',
            {
              class: bem('track--loadingWrapper')
            },
            [
              h(Loading, {
                props: {
                  backgroundColor: '#f9f9f9',
                  inherit: true
                }
              })
            ]
          )
        : h()

    const trackText = h(
      'div',
      {
        class: bem('track--text'),
        directives: [
          {
            name: 'show',
            value: this.status === PULL
          }
        ]
      },
      '松手加载更多'
    )

    const header = h(
      'div',
      {
        class: bem(['track--header'], {
          'track--header__loading': this.status === LOADING
        })
      },
      [trackLoading, trackText]
    )

    const track = h(
      'div',
      {
        class: bem(['track']),
        style: {
          ...this.trackStyle,
          transitionDuration: this.onTransition ? '300ms' : null
        }
      },
      [header, this.slot.default]
    )
    return h(
      'div',
      {
        class: bem()
      },
      [track]
    )
  }
})
