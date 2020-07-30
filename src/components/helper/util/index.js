import Vue from 'vue'

const COMPONENT_NAME = 'glow'
const COMPONENT_PREFIX = 'gl'
/**
 * 判断是否对象
 * @param {*} val 目标对象
 */
export function isPlainObject(val) {
  return toString.call(val) === '[object Object]'
}

// 是否定义
export function isDef(target) {
  return target !== undefined
}

export function addUnit(value) {
  return value === 0 ? undefined : value + '' + 'px'
}

// 深合并
export function deepMerge(...objs) {
  // 使用Object.create(null) 创造的对象没有原型，所以比较节省内存
  const result = Object.create(null)
  // 遍历每一个入参对象
  objs.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key]
        // 判断该属性是不是一个对象
        if (isPlainObject(val)) {
          // 判断result该属性是否已存在
          if (isPlainObject(result[key])) {
            // 将其继续合并
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}

// css 命名规范
// 子元素(使用--链接) : glow-pull-refresh--main
// 状态(使用__链接) : glow-pull-refresh--main__primary
// 子结构最好不超过3层
// 创造命名空间
export const createNamespace = function (namespace) {
  function createComponent(Component) {
    Object.defineProperty(Component, 'name', {
      get() {
        return `${COMPONENT_PREFIX}-${namespace}`
      },
      set() {}
    })
    return Component
  }
  function bem(classes) {
    if (typeof classes === 'undefined') {
      return `${COMPONENT_NAME}-${namespace} `
    } else if (typeof classes === 'string') {
      return `${COMPONENT_NAME}-${namespace}--${classes}`
    } else if (Array.isArray(classes)) {
      return classes.map((item) => bem(item)).join(' ')
    } else if (typeof classes === 'object') {
      const classNames = []
      Object.keys(classes).forEach((key) => {
        classes[key] ? classNames.push(`${COMPONENT_NAME}-${namespace}--${key}`) : undefined
      })
      return classNames.join(' ')
    } else {
      console.log('error : bem can not matching')
    }
  }
  return [createComponent, bem]
}

export function mount(Component, config) {
  const instance = new Vue({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(
        Component,
        deepMerge(
          {
            props: this.$props
          },
          config
        )
      )
    }
  })
  document.body.appendChild(instance.$el)
  return instance
}

export function addTransitionEndEvent(element, callback) {
  // 浏览器检测
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  }
  Object.keys(transitions).forEach((key) => {
    const targetTransitionName = getComputedStyle(element)[key]
    if (targetTransitionName) {
      element.addEventListener(transitions[key], callback)
    }
  })
}

export function addAnimateEndEvent(element, callback) {
  // 浏览器检测
  const transitions = {
    animation: 'animationend',
    webkitAnimation: 'webkitAnimationEnd',
    oanimation: 'oanimationen',
    oAnimation: 'oAnimationEnd ',
    msAnimation: 'msAnimationEnd'
  }
  let relase
  Object.keys(transitions).forEach((key) => {
    const targetTransitionName = getComputedStyle(element)[key]
    if (targetTransitionName) {
      element.addEventListener(transitions[key], callback)
      relase = () => element.removeEventListener(transitions[key], callback)
    }
  })
  return relase
}

export function getParentVNode(context, componentName) {
  if (!context.$parent) return
  if (context.$parent.$vnode.componentOptions.tag === 'componentName') {
    return context.$parnet
  } else {
    return getParentVNode(context.$parent, componentName)
  }
}
