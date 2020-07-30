export function ra2(callback) {
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

export function ra1(callback) {
  requestAnimationFrame(callback);
}

// 测试浏览器是否支持passive属性

export let supportPassive = false;

try {
  let opts = {};
  Object.defineProperties(opts, "passive", {
    get: function get() {
      supportPassive = true;
    }
  });
  window.addEventListener("test-passive", null, opts);
} catch (e) {
  // console.log(e);
}

export function on(target, event, handler, passive) {
  if (typeof passive === "undefined") {
    passive = false;
  }
  target.addEventListener(
    event,
    handler,
    supportPassive
      ? {
          capture: false,
          passive: passive
        }
      : false
  );
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler);
}

export function getClientRect(element) {
  return element.getBoundingClientRect();
}

export function isScroller(element) {
  return getComputedStyle(element).overflow === "scroll";
}

export function traceScroller(element) {
  if (!element || element === document) return false;
  if (isScroller(element)) return element;
  return traceScroller(element.parentNode);
}

// 广度优先搜索
export function bfsScroller(element) {
  const queue = [];
  queue.push(element);
  while (queue.length > 0) {
    const cNode = queue.shift();
    const children = Array.from(cNode.childNodes).filter(
      item => item.nodeType === 1
    );
    if (children && children.length > 0) {
      queue.push(...children);
    }
    if (isScroller(cNode)) {
      return cNode;
    }
  }
}

export function hasScrollbar() {
  return (
    getScrollHeight() >
    (window.innerHeight || document.documentElement.clientHeight)
  );
}

export function cacPixel(value) {
  return (value * document.documentElement.clientWidth) / 750;
}

export function resize(callback) {
  const _resize = window.onresize;
  window.onresize = _resize
    ? () => {
        _resize();
        callback();
      }
    : callback;
}

export const scrollUtil = (function() {
  const cache = [];
  const addEvent = callback => {
    if (!cache.includes(callback)) {
      cache.push(callback);
    }
    return () => {
      removeEvent(callback);
    };
  };
  const removeEvent = callback => {
    const index = cache.findIndex(callback);
    if (typeof index !== "undefined") {
      cache.splice(index, 1);
    }
  };
  const _scroll = window.onscroll;
  if (_scroll) {
    window.onscroll = () => {
      _scroll();
      cache.forEach(cb => cb());
    };
  } else {
    window.onscroll = () => cache.forEach(cb => cb());
  }
  return { addEvent, removeEvent };
})();

export function getScrollHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}

// 获取视口高度
export function getWindowHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

export function createElement(tagName, props) {
  const element = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    if (key === "on") {
      Object.keys(props.on).forEach(event =>
        element.addEventListener(event, props.on[event])
      );
    } else {
      element.setAttribute(key, props[key]);
    }
  });
  return element;
}

export function bindEvent(element, name, callback, options) {
  element.addEventListener(name, callback, options);
}

export function getScroller(element, outter) {
  let scroller;
  if (outter) {
    scroller = traceScroller(element) || window;
  } else {
    scroller = bfsScroller(element) || traceScroller(element) || window;
  }
  return scroller;
}

export function isHidden(el) {
  const style = window.getComputedStyle(el);
  const hidden = style.display === "none";
  // 还有以下情况也视为隐藏
  // 1. 父元素display 为 noen
  // 2. 它设置了fixed
  const parentHidden = el.offsetParent === null && style.position !== "fixed";
  return hidden || parentHidden;
}
