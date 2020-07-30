export function isScroller(element) {
  return getComputedStyle(element).overflowY === "scroll";
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

export function getScroller(element) {
  return bfsScroller(element) || traceScroller(element) || window;
}

export function onTop(scroller) {
  if (scroller === window) {
    return window.pageYOffset === 0;
  } else {
    return scroller.scrollTop === 0;
  }
}
