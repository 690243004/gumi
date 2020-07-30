// 导入组件工具
import { createNamespace, isDef } from '../../helper/util'
// 导入样式
import './index.scss'
// 柯里化获取命名函数数组
const _createNamespace = createNamespace('loading')
// 提取命名函数数组
const [createComponent, bem] = _createNamespace

export default createComponent({
  props: {
    // 文字
    title: String,
    // 加载样式类型
    type: {
      type: String,
      default: 'round'
    },
    // 加载动画时间 默认2000ms
    duration: {
      type: [Number, String],
      default: 2000
    },
    // loading组件大小
    size: {
      type: [Number, String],
      default: 40
    },
    // loading颜色
    color: String,
    // round 类型 loading背景颜色必须与父元素的背景颜色一致 默认为 #f5f5f5
    backgroundColor: {
      type: String,
      default: '#f5f5f5'
    },
    // 条状物数量 默认为 4
    barNum: {
      type: Number,
      default: 4
    },
    // 条状物之间的间隔
    barDistance: {
      type: Number,
      default: 3
    },
    // 是否继承父节点的宽度(用于自适应布局)
    inherit: Boolean
  },
  data() {
    return {
      width: parseInt(this.size)
    }
  },
  mounted() {
    this.getInheritWidth()
  },
  methods: {
    getInheritWidth() {
      if (this.inherit) {
        this.$nextTick(() => {
          if (this.$el.parentNode) {
            this.width = parseInt(window.getComputedStyle(this.$el.parentNode).width)
          } else {
            this.width = document.documentElement.clientWidth || document.body.clientWidth
          }
          console.log(this.width)
        })
      }
    }
  },
  render(h) {
    // 提取props
    const { title, type, duration, backgroundColor, color } = this
    // 定义临时变量
    let text, shape
    // 创建text节点
    if (isDef(title)) {
      text = h(
        'div',
        {
          class: bem('text')
        },
        title
      )
    }
    // 获取width
    const _width = this.width
    // 获取动画duration
    const _duration = parseInt(duration)

    if (type === 'round') {
      // 创建圆形加载节点
      const _delay = duration - 500 + 'ms'
      const _holderWidth = _width / 2 + 5
      shape = [
        h('div', {
          class: bem('round'),
          style: {
            width: _width + 'px',
            height: _width + 'px',
            color
          }
        }),
        h('div', {
          class: bem('round__before'),
          style: {
            backgroundColor,
            animationDelay: _delay,
            animationDuration: _duration + 'ms',
            width: _holderWidth + 'px',
            height: _holderWidth * 2 + 'px',
            borderRadius: `${_holderWidth}px 0 0 ${_holderWidth}px`,
            transformOrigin: `${_holderWidth}px ${_holderWidth}px`
          }
        }),
        h('div', {
          class: bem('round__after'),
          style: {
            backgroundColor,
            animationDuration: _duration + 'ms',
            width: _holderWidth + 'px',
            height: _holderWidth * 2 + 'px',
            borderRadius: `0 ${_holderWidth}px ${_holderWidth}px 0`
          }
        })
      ]
    } else if (type === 'bar') {
      // 创建条状加载节点
      const { barNum, barDistance } = this
      shape = []
      const _rectTotalWidth = _width - (barNum + 1) * barDistance
      for (let index = 0; index < barNum; index++) {
        shape.push(
          h('div', {
            class: bem('rect'),
            style: {
              margin: index === 0 ? `0 ${barDistance}px` : `0 ${barDistance}px 0 0`,
              width: _rectTotalWidth / barNum + 'px',
              height: _width + 'px',
              animationDuration: _duration + 'ms',
              animationDelay: -1 * _duration + index * 100 + 'ms'
            }
          })
        )
      }
    }
    // 返回渲染所需vnode
    return h(
      'div',
      {
        class: bem(),
        style: {
          width: _width + 'px'
        }
      },
      [shape, text]
    )
  }
})
