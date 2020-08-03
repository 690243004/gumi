// 这个类用于 模拟Touch事件Touoches项
class Touch {
  constructor(event) {
    this.clientX = event.clientX
    this.clientY = event.clientY
    this.force = 1 // 压力
    this.identifier = 1 // 接触点数量
    this.radiusX = 11.5 // 接触半径
    this.radiusY = 11.5
    this.rotationAngle = 0
    this.screenX = event.screenX
    this.screenY = event.screenY
    this.pageX = event.pageX
    this.pageY = event.pageY
    this.taget = event.taget
  }
}

// 存放鼠标按下时对应元素
let element = null

// 派发touch事件
function dispatchTouchEvent(event) {
  const eventMap = {
    mousedown: 'touchstart',
    mousemove: 'touchmove',
    mouseup: 'touchend'
  }
  const { type } = event
  if (Object.keys(eventMap).includes(type)) {
    const simulateEvent = document.createEvent('Event')
    simulateEvent.initEvent(eventMap[type], true, true)
    simulateEvent.altKey = event.altKey
    simulateEvent.ctrlKey = event.ctrlKey
    simulateEvent.metaKey = event.metaKey
    simulateEvent.shiftKey = event.shiftKey
    simulateEvent.touches = [new Touch(event)]
    simulateEvent.changedTouches = [new Touch(event)]
    element.dispatchEvent(simulateEvent)
    type === 'mouseup' && (element = null)
  }
}

document.addEventListener('mousedown', function (event) {
  element = event.target
  dispatchTouchEvent(event)
})

document.addEventListener('mousemove', function (event) {
  if (!element) return
  dispatchTouchEvent(event)
})

document.addEventListener('mouseup', function (event) {
  dispatchTouchEvent(event)
})
