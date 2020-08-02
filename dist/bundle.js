/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (false) {}
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(6).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*! eruda v2.3.3 https://eruda.liriliri.io/ */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=31)}([function(t,e,n){"use strict";(function(t,r,i){n.d(e,"bb",(function(){return j})),n.d(e,"Y",(function(){return A})),n.d(e,"U",(function(){return S})),n.d(e,"ab",(function(){return P})),n.d(e,"ib",(function(){return N})),n.d(e,"Z",(function(){return I})),n.d(e,"zb",(function(){return W})),n.d(e,"t",(function(){return X})),n.d(e,"v",(function(){return J})),n.d(e,"w",(function(){return Z})),n.d(e,"x",(function(){return et})),n.d(e,"y",(function(){return nt})),n.d(e,"A",(function(){return rt})),n.d(e,"C",(function(){return it})),n.d(e,"Eb",(function(){return at})),n.d(e,"E",(function(){return ot})),n.d(e,"G",(function(){return ct})),n.d(e,"qb",(function(){return ht})),n.d(e,"N",(function(){return dt})),n.d(e,"T",(function(){return mt})),n.d(e,"u",(function(){return yt})),n.d(e,"X",(function(){return $t})),n.d(e,"m",(function(){return Ot})),n.d(e,"L",(function(){return Et})),n.d(e,"H",(function(){return jt})),n.d(e,"tb",(function(){return St})),n.d(e,"I",(function(){return Tt})),n.d(e,"K",(function(){return Ct})),n.d(e,"M",(function(){return Pt})),n.d(e,"O",(function(){return Dt})),n.d(e,"P",(function(){return Mt})),n.d(e,"Q",(function(){return zt})),n.d(e,"R",(function(){return Ht})),n.d(e,"S",(function(){return Ut})),n.d(e,"V",(function(){return Kt})),n.d(e,"W",(function(){return Gt})),n.d(e,"db",(function(){return Vt})),n.d(e,"eb",(function(){return Xt})),n.d(e,"o",(function(){return Jt})),n.d(e,"rb",(function(){return ne})),n.d(e,"yb",(function(){return re})),n.d(e,"gb",(function(){return ie})),n.d(e,"xb",(function(){return ae})),n.d(e,"s",(function(){return oe})),n.d(e,"hb",(function(){return se})),n.d(e,"jb",(function(){return ue})),n.d(e,"lb",(function(){return le})),n.d(e,"mb",(function(){return ce})),n.d(e,"B",(function(){return pe})),n.d(e,"Db",(function(){return de})),n.d(e,"r",(function(){return ge})),n.d(e,"F",(function(){return me})),n.d(e,"z",(function(){return be})),n.d(e,"j",(function(){return ye})),n.d(e,"n",(function(){return we})),n.d(e,"fb",(function(){return xe})),n.d(e,"p",(function(){return ke})),n.d(e,"wb",(function(){return Oe})),n.d(e,"b",(function(){return Ee})),n.d(e,"f",(function(){return Ae})),n.d(e,"g",(function(){return ze})),n.d(e,"l",(function(){return He})),n.d(e,"c",(function(){return Ge})),n.d(e,"e",(function(){return qe})),n.d(e,"J",(function(){return Xe})),n.d(e,"kb",(function(){return Qe})),n.d(e,"k",(function(){return Ze})),n.d(e,"a",(function(){return nn})),n.d(e,"nb",(function(){return rn})),n.d(e,"ob",(function(){return an})),n.d(e,"pb",(function(){return on})),n.d(e,"Ab",(function(){return un})),n.d(e,"cb",(function(){return cn})),n.d(e,"h",(function(){return hn})),n.d(e,"D",(function(){return pn})),n.d(e,"i",(function(){return fn})),n.d(e,"sb",(function(){return dn})),n.d(e,"d",(function(){return mn})),n.d(e,"ub",(function(){return bn})),n.d(e,"vb",(function(){return yn})),n.d(e,"Bb",(function(){return wn})),n.d(e,"Cb",(function(){return xn})),n.d(e,"Fb",(function(){return kn})),n.d(e,"Gb",(function(){return $n})),n.d(e,"Hb",(function(){return On}));var a,o,s,u,l,c,_,h,p,f,d,v,g,m,b,y,w,x,k,$=n(12),O=n.n($),E={},j=E.last=function(t){var e=t?t.length:0;if(e)return t[e-1]},A=E.isUndef=function(t){return void 0===t},S=(E.types={},E.isObj=function(t){var e=O()(t);return!!t&&("function"===e||"object"===e)}),T=E.has=(a=Object.prototype.hasOwnProperty,function(t,e){return a.call(t,e)}),C=E.slice=function(t,e,n){var r=t.length;e=null==e?0:e<0?Math.max(r+e,0):Math.min(e,r),n=null==n?r:n<0?Math.max(r+n,0):Math.min(n,r);for(var i=[];e<n;)i.push(t[e++]);return i},P=E.keys=Object.keys?Object.keys:function(t){var e=[];for(var n in t)T(t,n)&&e.push(n);return e},R=E.freeze=function(t){return Object.freeze?Object.freeze(t):(P(t).forEach((function(e){Object.getOwnPropertyDescriptor(t,e).configurable&&Object.defineProperty(t,e,{writable:!1,configurable:!1})})),t)},D=E.reverse=function(t){var e=t.length,n=Array(e);e--;for(var r=0;r<=e;r++)n[e-r]=t[r];return n},L=E.isBrowser="object"===("undefined"==typeof window?"undefined":O()(window))&&"object"===("undefined"==typeof document?"undefined":O()(document))&&9===document.nodeType,N=E.noop=function(){},M=E.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},F=E.splitCase=(o=/([A-Z])/g,s=/[_.\- ]+/g,u=/(^-)|(-$)/g,function(t){return(t=t.replace(o,"-$1").toLowerCase().replace(s,"-").replace(u,"")).split("-")}),z=E.camelCase=function(t){function e(t,e){this[e]=t.replace(/\w/,(function(t){return t.toUpperCase()}))}return function(t){var n=F(t),r=n[0];return n.shift(),n.forEach(e,n),r+=n.join("")}}(),I=E.kebabCase=function(t){return F(t).join("-")},B=E.clamp=function(t,e,n){return A(n)&&(n=e,e=void 0),!A(e)&&t<e?e:t>n?n:t},H=E.idxOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},U=E.create=function(t){t=function(t){if(!S(t))return{};if(e)return e(t);function n(){}return n.prototype=t,new n};var e=Object.create;return t}({}),K=E.inherits=function(t,e){t.prototype=U(e.prototype)},W=E.toStr=function(t){return null==t?"":t.toString()},G=E.debounce=function(t,e,n){var r;return function(){var i=this,a=arguments,o=function(){r=null,t.apply(i,a)};n||clearTimeout(r),n&&r||(r=setTimeout(o,e))}},q=E.ucs2={encode:function(t){return String.fromCodePoint.apply(String,t)},decode:function(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);56320==(64512&a)?e.push(((1023&i)<<10)+(1023&a)+65536):(e.push(i),n--)}else e.push(i)}return e}},V=E.utf8=function(t){t={encode:function(t){for(var e=q.decode(t),n="",r=0,i=e.length;r<i;r++)n+=c(e[r]);return n},decode:function(t,l){e=q.decode(t),n=0,r=e.length,i=0,a=0,o=0,s=128,u=191;for(var c,h=[];!1!==(c=_(l));)h.push(c);return q.encode(h)}};var e,n,r,i,a,o,s,u,l=String.fromCharCode;function c(t){if(0==(4294967168&t))return l(t);var e,n,r="";for(0==(4294965248&t)?(e=1,n=192):0==(4294901760&t)?(e=2,n=224):0==(4292870144&t)&&(e=3,n=240),r+=l((t>>6*e)+n);e>0;){r+=l(128|63&t>>6*(e-1)),e--}return r}function _(t){for(;;){if(n>=r&&o){if(t)return h();throw new Error("Invalid byte index")}if(n===r)return!1;var l=e[n];if(n++,o){if(l<s||l>u){if(t)return n--,h();throw new Error("Invalid continuation byte")}if(s=128,u=191,i=i<<6|63&l,++a===o){var c=i;return i=0,o=0,a=0,c}}else{if(0==(128&l))return l;if(192==(224&l))o=1,i=31&l;else if(224==(240&l))224===l&&(s=160),237===l&&(u=159),o=2,i=15&l;else{if(240!=(248&l)){if(t)return h();throw new Error("Invalid UTF-8 detected")}240===l&&(s=144),244===l&&(u=143),o=3,i=7&l}}}}function h(){var t=n-a-1;return n=t+1,i=0,o=0,a=0,s=128,u=191,e[t]}return t}({}),X=E.detectOs=function(t){if(t=(t=t||(L?navigator.userAgent:"")).toLowerCase(),e("windows phone"))return"windows phone";if(e("win"))return"windows";if(e("android"))return"android";if(e("ipad")||e("iphone")||e("ipod"))return"ios";if(e("mac"))return"os x";if(e("linux"))return"linux";function e(e){return t.indexOf(e)>-1}return"unknown"},Y=E.restArgs=function(t,e){return e=null==e?t.length-1:+e,function(){var n,r=Math.max(arguments.length-e,0),i=new Array(r);for(n=0;n<r;n++)i[n]=arguments[n+e];switch(e){case 0:return t.call(this,i);case 1:return t.call(this,arguments[0],i);case 2:return t.call(this,arguments[0],arguments[1],i)}var a=new Array(e+1);for(n=0;n<e;n++)a[n]=arguments[n];return a[e]=i,t.apply(this,a)}},Q=E.optimizeCb=function(t,e,n){if(A(e))return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,a){return t.call(e,n,r,i,a)}}return function(){return t.apply(e,arguments)}},J=E.endWith=function(t,e){var n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n},Z=E.escape=function(t){var e=(t=function(t){return r.test(t)?t.replace(i,a):t}).map={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},n="(?:"+P(e).join("|")+")",r=new RegExp(n),i=new RegExp(n,"g"),a=function(t){return e[t]};return t}({}),tt=E.escapeJsStr=function(t){t=function(t){return W(t).replace(e,(function(t){switch(t){case'"':case"'":case"\\":return"\\"+t;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))};var e=/["'\\\n\r\u2028\u2029]/g;return t}({}),et=E.escapeJsonStr=function(t){return tt(t).replace(/\\'/g,"'").replace(/\t/g,"\\t")},nt=E.escapeRegExp=function(t){return t.replace(/\W/g,"\\$&")},rt=E.fileSize=function(t){t=function(t){if(t<=0)return"0";var n=Math.floor(Math.log(t)/Math.log(1024));return+(t/Math.pow(2,10*n)).toFixed(2)+e[n]};var e=["","K","M","G","T"];return t}({}),it=E.fullUrl=(l=document.createElement("a"),function(t){return l.href=t,l.protocol+"//"+l.host+l.pathname+l.search+l.hash}),at=E.upperFirst=function(t){return t.length<1?t:t[0].toUpperCase()+t.slice(1)},ot=E.getObjType=function(t){return t.constructor&&t.constructor.name?t.constructor.name:at({}.toString.call(t).replace(/(\[object )|]/g,""))},st=E.identity=function(t){return t},ut=E.objToStr=(c=Object.prototype.toString,function(t){return c.call(t)}),lt=E.isArgs=function(t){return"[object Arguments]"===ut(t)},ct=E.isArr=Array.isArray?Array.isArray:function(t){return"[object Array]"===ut(t)},_t=E.castPath=function(t){t=function(t,r){if(ct(t))return t;if(r&&T(r,t))return[t];var i=[];return t.replace(e,(function(t,e,r,a){i.push(r?a.replace(n,"$1"):e||t)})),i};var e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g;return t}({}),ht=E.safeGet=function(t,e){var n;for(n=(e=_t(e,t)).shift();!A(n);){if(null==(t=t[n]))return;n=e.shift()}return t},pt=E.flatten=function(t){return function t(e,n){for(var r,i=e.length,a=-1;i--;)r=e[++a],ct(r)?t(r,n):n.push(r);return n}(t,[])},ft=E.isDate=function(t){return"[object Date]"===ut(t)},dt=E.isFn=function(t){var e=ut(t);return"[object Function]"===e||"[object GeneratorFunction]"===e||"[object AsyncFunction]"===e},vt=E.getProto=(_=Object.getPrototypeOf,h={}.constructor,function(t){if(S(t)){if(_)return _(t);var e=t.__proto__;return e||null===e?e:dt(t.constructor)?t.constructor.prototype:t instanceof h?h.prototype:void 0}}),gt=E.isMiniProgram="undefined"!=typeof wx&&dt(wx.openLocation),mt=E.isNum=function(t){return"[object Number]"===ut(t)},bt=E.isArrLike=(p=Math.pow(2,53)-1,function(t){if(!t)return!1;var e=t.length;return mt(e)&&e>=0&&e<=p&&!dt(t)}),yt=E.each=function(t,e,n){var r,i;if(e=Q(e,n),bt(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var a=P(t);for(r=0,i=a.length;r<i;r++)e(t[a[r]],a[r],t)}return t},wt=E.createAssigner=function(t,e){return function(n){return yt(arguments,(function(r,i){if(0!==i){var a=t(r);yt(a,(function(t){e&&!A(n[t])||(n[t]=r[t])}))}})),n}},xt=E.extendOwn=wt(P),kt=E.values=function(t){var e=[];return yt(t,(function(t){e.push(t)})),e},$t=E.isStr=function(t){return"[object String]"===ut(t)},Ot=E.contain=function(t,e){return $t(t)?t.indexOf(e)>-1:(bt(t)||(t=kt(t)),H(t,e)>=0)},Et=E.isEmpty=function(t){return null==t||(bt(t)&&(ct(t)||$t(t)||lt(t))?0===t.length:0===P(t).length)},jt=E.isBool=function(t){return!0===t||!1===t},At=E.isBuffer=function(t){return null!=t&&(!!t._isBuffer||t.constructor&&dt(t.constructor.isBuffer)&&t.constructor.isBuffer(t))},St=E.startWith=function(t,e){return 0===t.indexOf(e)},Tt=E.isCrossOrig=(f=window.location.origin,function(t){return!St(t,f)}),Ct=E.isEl=function(t){return!(!t||1!==t.nodeType)},Pt=E.isErr=function(t){return"[object Error]"===ut(t)},Rt=E.root=L?window:t,Dt=E.isHidden=function(t){var e=Rt.getComputedStyle,n=Rt.document;function r(t,e){return t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom}return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.display,o=void 0===a||a,s=i.visibility,u=void 0!==s&&s,l=i.opacity,c=void 0!==l&&l,_=i.size,h=void 0!==_&&_,p=i.viewport,f=void 0!==p&&p,d=i.overflow,v=void 0!==d&&d;if(o)return null===t.offsetParent;var g=e(t);if(u&&"hidden"===g.visibility)return!0;if(c){if("0"===g.opacity)return!0;for(var m=t;m=m.parentElement;){var b=e(m);if("0"===b.opacity)return!0}}var y=t.getBoundingClientRect();if(h&&(0===y.width||0===y.height))return!0;if(f){var w={top:0,left:0,right:n.documentElement.clientWidth,bottom:n.documentElement.clientHeight};return r(y,w)}if(v)for(var x=t;x=x.parentElement;){var k=e(x),$=k.overflow;if("scroll"===$||"hidden"===$){var O=x.getBoundingClientRect();if(r(y,O))return!0}}return!1}}(),Lt=E.isMatch=function(t,e){var n=P(e),r=n.length;if(null==t)return!r;t=Object(t);for(var i=0;i<r;i++){var a=n[i];if(e[a]!==t[a]||!(a in t))return!1}return!0},Nt=E.memoize=function(t,e){var n=function n(r){var i=n.cache,a=""+(e?e.apply(this,arguments):r);return T(i,a)||(i[a]=t.apply(this,arguments)),i[a]};return n.cache={},n},Mt=E.isMobile=(d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i,Nt((function(t){return t=t||(L?navigator.userAgent:""),d.test(t)||v.test(t.substr(0,4))}))),Ft=E.prefix=function(t){(t=Nt((function(t){if(t=t.replace(n,""),t=z(t),T(r,t))return t;for(var i=e.length;i--;){var a=e[i]+at(t);if(T(r,a))return a}return t}))).dash=Nt((function(e){var r=t(e);return(n.test(r)?"-":"")+I(r)}));var e=["O","ms","Moz","Webkit"],n=/^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,r=document.createElement("p").style;return t}({}),zt=E.isNaN=function(t){return mt(t)&&t!==+t},It=E.isNil=function(t){return null==t},Bt=E.toSrc=function(t){t=function(t){if(It(t))return"";try{return e.call(t)}catch(t){}try{return t+""}catch(t){}return""};var e=Function.prototype.toString;return t}({}),Ht=E.isNative=function(t){t=function(t){return!!S(t)&&(dt(t)?n.test(Bt(t)):r.test(Bt(t)))};var e=Object.prototype.hasOwnProperty,n=new RegExp("^"+Bt(e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),r=/^\[object .+?Constructor\]$/;return t}({}),Ut=E.isNull=function(t){return null===t},Kt=E.isPrimitive=function(t){var e=O()(t);return null==t||"function"!==e&&"object"!==e},Wt=E.isPromise=function(t){return S(t)&&dt(t.then)&&dt(t.catch)},Gt=E.isRegExp=function(t){return"[object RegExp]"===ut(t)},qt=E.isSorted=(g={},(g=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.defComparator,n=0,r=t.length;n<r-1;n++)if(e(t[n],t[n+1])>0)return!1;return!0}).defComparator=function(t,e){return t<e?-1:t>e?1:0},g),Vt=E.loadJs=function(t,e){var n=document.createElement("script");n.src=t,n.onload=function(){var t=n.readyState&&"complete"!=n.readyState&&"loaded"!=n.readyState;e&&e(!t)},n.onerror=function(){e(!1)},document.body.appendChild(n)},Xt=E.lowerCase=function(t){return W(t).toLocaleLowerCase()},Yt=E.repeat=function(t,e){var n="";if(e<1)return"";for(;e>0;)1&e&&(n+=t),e>>=1,t+=t;return n},Qt=E.lpad=function(t,e,n){var r=(t=W(t)).length;return n=n||" ",r<e&&(t=(Yt(n,e-r)+t).slice(-e)),t},Jt=E.dateFormat=function(t){t=function(o,s,u,l){1===arguments.length&&$t(o)&&!i.test(o)&&(s=o,o=void 0),o=o||new Date,ft(o)||(o=new Date(o));var c=(s=W(t.masks[s]||s||t.masks.default)).slice(0,4);"UTC:"!==c&&"GMT:"!==c||(s=s.slice(4),u=!0,"GMT:"===c&&(l=!0));var _=u?"getUTC":"get",h=o[_+"Date"](),p=o[_+"Day"](),f=o[_+"Month"](),d=o[_+"FullYear"](),v=o[_+"Hours"](),g=o[_+"Minutes"](),m=o[_+"Seconds"](),b=o[_+"Milliseconds"](),y=u?0:o.getTimezoneOffset(),w={d:h,dd:e(h),ddd:t.i18n.dayNames[p],dddd:t.i18n.dayNames[p+7],m:f+1,mm:e(f+1),mmm:t.i18n.monthNames[f],mmmm:t.i18n.monthNames[f+12],yy:W(d).slice(2),yyyy:d,h:v%12||12,hh:e(v%12||12),H:v,HH:e(v),M:g,MM:e(g),s:m,ss:e(m),l:e(b,3),L:e(Math.round(b/10)),t:v<12?"a":"p",tt:v<12?"am":"pm",T:v<12?"A":"P",TT:v<12?"AM":"PM",Z:l?"GMT":u?"UTC":(W(o).match(r)||[""]).pop().replace(a,""),o:(y>0?"-":"+")+e(100*Math.floor(Math.abs(y)/60)+Math.abs(y)%60,4),S:["th","st","nd","rd"][h%10>3?0:(h%100-h%10!=10)*h%10]};return s.replace(n,(function(t){return t in w?w[t]:t.slice(1,t.length-1)}))};var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Qt(W(t),e,"0")},n=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,r=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/\d/,a=/[^-+\dA-Z]/g;return t.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},t.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},t}({}),Zt=E.ltrim=(m=/^\s+/,function(t,e){if(null==e)return t.replace(m,"");for(var n,r,i=0,a=t.length,o=e.length,s=!0;s&&i<a;)for(s=!1,n=-1,r=t.charAt(i);++n<o;)if(r===e[n]){s=!0,i++;break}return i>=a?"":t.substr(i,a)}),te=E.matcher=function(t){return t=xt({},t),function(e){return Lt(e,t)}},ee=E.memStorage=function(t){t={getItem:function(t){return(n[t]?e[t]:this[t])||null},setItem:function(t,r){n[t]?e[t]=r:this[t]=r},removeItem:function(t){n[t]?delete e[t]:delete this[t]},key:function(t){var e=r();return t>=0&&t<e.length?e[t]:null},clear:function(){for(var t,n=i(),r=0;t=n[r];r++)delete this[t];n=a();for(var o,s=0;o=n[s];s++)delete e[o]}},Object.defineProperty(t,"length",{enumerable:!1,configurable:!0,get:function(){return r().length}});var e={},n={getItem:1,setItem:1,removeItem:1,key:1,clear:1,length:1};function r(){return i().concat(a())}function i(){return P(t).filter((function(t){return!n[t]}))}function a(){return P(e)}return t}({}),ne=E.safeStorage=function(t,e){var n;switch(A(e)&&(e=!0),t){case"local":n=window.localStorage;break;case"session":n=window.sessionStorage}try{var r="test-localStorage-"+Date.now();n.setItem(r,r);var i=n.getItem(r);if(n.removeItem(r),i!==r)throw new Error}catch(t){return e?ee:void 0}return n},re=E.toNum=function(t){if(mt(t))return t;if(S(t)){var e=dt(t.valueOf)?t.valueOf():t;t=S(e)?e+"":e}return $t(t)?+t:0===t?t:+t},ie=E.ms=function(t){t=function(t){if($t(t)){var i=t.match(r);return i?re(i[1])*e[i[2]||"ms"]:0}for(var a=t,o="ms",s=0,u=n.length;s<u;s++)if(a>=e[n[s]]){o=n[s];break}return+(a/e[o]).toFixed(2)+o};var e={ms:1,s:1e3};e.m=60*e.s,e.h=60*e.m,e.d=24*e.h,e.y=365.25*e.d;var n=["y","d","h","m","s"],r=/^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;return t}({}),ae=E.toInt=function(t){return t?(t=re(t))-t%1:0===t?t:0},oe=E.detectBrowser=function(t){t=function(t){var a=i(t=(t=t||(L?navigator.userAgent:"")).toLowerCase(),"msie ");if(a)return{version:a,name:"ie"};if(n.test(t))return{version:11,name:"ie"};for(var o=0,s=r.length;o<s;o++){var u=r[o],l=t.match(e[u]);if(null!=l){var c=ae(l[1].split(".")[0]);return"opera"===u&&(c=i(t,"version/")||c),{name:u,version:c}}}return{name:"unknown",version:-1}};var e={edge:/edge\/([0-9._]+)/,firefox:/firefox\/([0-9.]+)(?:\s|$)/,opera:/opera\/([0-9.]+)(?:\s|$)/,android:/android\s([0-9.]+)/,ios:/version\/([0-9._]+).*mobile.*safari.*/,safari:/version\/([0-9._]+).*safari/,chrome:/(?!chrom.*opr)chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/},n=/trident\/7\./,r=P(e);function i(t,e){var n=t.indexOf(e);if(n>-1)return ae(t.substring(n+e.length,t.indexOf(".",n)))}return t}({}),se=E.nextTick=function(t){function e(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}return"object"===(void 0===r?"undefined":O()(r))&&r.nextTick?r.nextTick:"function"==typeof i?function(t){i(e(t))}:function(t){setTimeout(e(t),0)}}(),ue=E.now=Date.now?Date.now:function(){return(new Date).getTime()},le=E.perfNow=function(t){var e,n=Rt.performance,r=Rt.process;if(n&&n.now)t=function(){return n.now()};else if(r&&r.hrtime){var i=function(){var t=r.hrtime();return 1e9*t[0]+t[1]};e=i()-1e9*r.uptime(),t=function(){return(i()-e)/1e6}}else e=ue(),t=function(){return ue()-e};return t}({}),ce=E.pick=function(t,e,n){if($t(e)&&(e=[e]),ct(e)){var r=e;e=function(t,e){return Ot(r,e)}}var i={},a=function(t,n){e(t,n)&&(i[n]=t)};return n&&(a=function(t,n){e(t,n)||(i[n]=t)}),yt(t,a),i},_e=E.property=function(t){return ct(t)?function(e){return ht(e,t)}:(e=t,function(t){return null==t?void 0:t[e]});var e},he=E.safeCb=function(t,e,n){return null==t?st:dt(t)?Q(t,e,n):S(t)&&!ct(t)?te(t):_e(t)},pe=E.filter=function(t,e,n){var r=[];return e=he(e,n),yt(t,(function(t,n,i){e(t,n,i)&&r.push(t)})),r},fe=E.difference=Y((function(t,e){return e=pt(e),pe(t,(function(t){return!Ot(e,t)}))})),de=E.unique=function(t){function e(t,e){return t===e}return function(t,n){return n=n||e,pe(t,(function(t,e,r){for(var i=r.length;++e<i;)if(n(t,r[e]))return!1;return!0}))}}(),ve=E.allKeys=(b=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.prototype,r=void 0===n||n,i=e.unenumerable,a=void 0!==i&&i,o=e.symbol,s=void 0!==o&&o,u=[];if((a||s)&&b){var l=P;a&&b&&(l=b);do{u=u.concat(l(t)),s&&y&&(u=u.concat(y(t)))}while(r&&(t=vt(t))&&t!==Object.prototype);u=de(u)}else if(r)for(var c in t)u.push(c);else u=P(t);return u}),ge=E.defaults=wt(ve,!0),me=E.highlight=function(t){t=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ge(a,e),r=r.replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=n[i];var o=0,s=[];yt(i,(function(e){e.language&&(r=r.replace(e.re,(function(n,r){return s[o++]=t(r,e.language,a),n.replace(r,"___subtmpl"+(o-1)+"___")})))})),yt(i,(function(t,e){n[t.language]||(r=r.replace(t.re,"___"+e+"___$1___end"+e+"___"))}));var u=[];return r=r.replace(/___(?!subtmpl)\w+?___/g,(function(t){var e="end"===t.substr(3,3),n=(e?t.substr(6):t.substr(3)).replace(/_/g,""),r=u.length>0?u[u.length-1]:null;return!e&&(null==r||n==r||null!=r&&i[r]&&null!=i[r].embed&&i[r].embed.indexOf(n)>-1)?(u.push(n),t):e&&n==r?(u.pop(),t):""})),yt(i,(function(t,e){r=r.replace(new RegExp("___end"+e+"___","g"),"</span>").replace(new RegExp("___"+e+"___","g"),'<span style="'+a[t.style]+'">')})),yt(i,(function(t){t.language&&(r=r.replace(/___subtmpl\d+___/g,(function(t){var e=parseInt(t.replace(/___subtmpl(\d+)___/,"$1"),10);return s[e]})))})),r};var e={comment:"color:#63a35c;",string:"color:#183691;",number:"color:#0086b3;",keyword:"color:#a71d5d;",operator:"color:#994500;"},n={js:{comment:{re:/(\/\/.*|\/\*([\s\S]*?)\*\/)/g,style:"comment"},string:{re:/(('.*?')|(".*?"))/g,style:"string"},numbers:{re:/(-?(\d+|\d+\.\d+|\.\d+))/g,style:"number"},keywords:{re:/(?:\b)(function|for|foreach|while|if|else|elseif|switch|break|as|return|this|class|self|default|var|const|let|false|true|null|undefined)(?:\b)/gi,style:"keyword"},operator:{re:/(\+|-|\/|\*|%|=|&lt;|&gt;|\||\?|\.)/g,style:"operator"}}};return n.html={comment:{re:/(&lt;!--([\s\S]*?)--&gt;)/g,style:"comment"},tag:{re:/(&lt;\/?\w(.|\n)*?\/?&gt;)/g,style:"keyword",embed:["string"]},string:n.js.string,css:{re:/(?:&lt;style.*?&gt;)([\s\S]*)?(?:&lt;\/style&gt;)/gi,language:"css"},script:{re:/(?:&lt;script.*?&gt;)([\s\S]*?)(?:&lt;\/script&gt;)/gi,language:"js"}},n.css={comment:n.js.comment,string:n.js.string,numbers:{re:/((-?(\d+|\d+\.\d+|\.\d+)(%|px|em|pt|in)?)|#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g,style:"number"},keywords:{re:/(@\w+|:?:\w+|[a-z-]+:)/g,style:"keyword"}},t}({}),be=E.extend=wt(ve),ye=E.clone=function(t){return S(t)?ct(t)?t.slice():be({},t):t},we=E.copy=function(t,e){e=e||N;var n=document.createElement("textarea"),r=document.body;be(n.style,{fontSize:"12pt",border:"0",padding:"0",margin:"0",position:"absolute",left:"-9999px"}),n.value=t,r.appendChild(n),n.setAttribute("readonly",""),n.select(),n.setSelectionRange(0,t.length);try{document.execCommand("copy"),e()}catch(t){e(t)}finally{r.removeChild(n)}},xe=E.map=function(t,e,n){e=he(e,n);for(var r=!bt(t)&&P(t),i=(r||t).length,a=Array(i),o=0;o<i;o++){var s=r?r[o]:o;a[o]=e(t[s],s,t)}return a},ke=E.decodeUriComponent=function(t){function e(t){return+("0x"+t)}t=function(t){try{return decodeURIComponent(t)}catch(i){var r=t.match(n);return r?(yt(r,(function(n){t=t.replace(n,function(t){t=t.split("%").slice(1);var n=xe(t,e);return t=q.encode(n),t=V.decode(t,!0)}(n))})),t):t}};var n=/(%[a-f0-9]{2})+/gi;return t}({}),$e=E.cookie=function(t){var e={path:"/"};function n(n,r,i){if(!A(r)){if(i=ge(i=i||{},e),mt(i.expires)){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}return r=encodeURIComponent(r),n=encodeURIComponent(n),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join(""),t}for(var o=document.cookie?document.cookie.split("; "):[],s=n?void 0:{},u=0,l=o.length;u<l;u++){var c=o[u],_=c.split("="),h=ke(_.shift());if(c=_.join("="),c=ke(c),n===h){s=c;break}n||(s[h]=c)}return s}return t={get:n,set:n,remove:function(t,e){return(e=e||{}).expires=-1,n(t,"",e)}}}({}),Oe=E.toArr=function(t){return t?ct(t)?t:bt(t)&&!$t(t)?xe(t):[t]:[]},Ee=E.Class=function(t){var e=(t=function(t,n){return e.extend(t,n)}).Base=function t(e,n,r){r=r||{};var i=n.className||ht(n,"initialize.name")||"";delete n.className;var a=function(){var t=Oe(arguments);return this.initialize&&this.initialize.apply(this,t)||this};if(!gt)try{a=new Function("toArr","return function "+i+"(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(Oe)}catch(t){}return K(a,e),a.prototype.constructor=a,a.extend=function(e,n){return t(a,e,n)},a.inherits=function(t){K(a,t)},a.methods=function(t){return be(a.prototype,t),a},a.statics=function(t){return be(a,t),a},a.methods(n).statics(r),a}(Object,{className:"Base",callSuper:function(t,e,n){return t.prototype[e].apply(this,n)},toString:function(){return this.constructor.name}});return t}({}),je=E.Enum=Ee({initialize:function(t){ct(t)?(this.size=t.length,yt(t,(function(t,e){this[t]=e}),this)):(this.size=P(t).length,yt(t,(function(t,e){this[e]=t}),this)),R(this)}}),Ae=E.MutationObserver=function(t){return(t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)||(t=Ee({initialize:function(){},observe:function(){},disconnect:function(){},takeRecords:function(){}})),t}({}),Se=E.Select=function(t){var e=new(t=Ee({className:"Select",initialize:function(t){return this.length=0,t?$t(t)?e.find(t):void(t.nodeType&&(this[0]=t,this.length=1)):this},find:function(e){var n=new t;return this.each((function(){!function(t,e){for(var n=e.length,r=t.length,i=0;i<n;i++)t[r++]=e[i];t.length=r}(n,this.querySelectorAll(e))})),n},each:function(t){return yt(this,(function(e,n){t.call(e,n,e)})),this}}))(document);return t}({}),Te=E.$safeEls=function(t){return Oe($t(t)?new Se(t):t)},Ce=E.$attr=function(t){return(t=function(t,e,n){if(t=Te(t),A(n)&&$t(e))return function(t,e){return t.getAttribute(e)}(t[0],e);var r=e;S(r)||((r={})[e]=n),function(t,e){yt(t,(function(t){yt(e,(function(e,n){t.setAttribute(n,e)}))}))}(t,r)}).remove=function(t,e){t=Te(t),e=Oe(e),yt(t,(function(t){yt(e,(function(e){t.removeAttribute(e)}))}))},t}({}),Pe=E.$css=function(t){t=function(t,n,r){if(t=Te(t),A(r)&&$t(n))return function(t,e){return t.style[Ft(e)]||getComputedStyle(t,"").getPropertyValue(e)}(t[0],n);var i=n;S(i)||((i={})[n]=r),function(t,n){yt(t,(function(t){var r=";";yt(n,(function(t,n){n=Ft.dash(n),r+=n+":"+function(t,n){return mt(n)&&!Ot(e,I(t))?n+"px":n}(n,t)+";"})),t.style.cssText+=r}))}(t,i)};var e=["column-count","columns","font-weight","line-weight","opacity","z-index","zoom"];return t}({}),Re=E.$data=function(t,e,n){var r=e;return $t(e)&&(r="data-"+e),S(e)&&(r={},yt(e,(function(t,e){r["data-"+e]=t}))),Ce(t,r,n)},De=E.$insert=function(t){function e(t){return function(e,n){e=Te(e),yt(e,(function(e){e.insertAdjacentHTML(t,n)}))}}return{before:e("beforebegin"),after:e("afterend"),append:e("beforeend"),prepend:e("afterbegin")}}(),Le=E.$offset=function(t){var e=(t=Te(t))[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},Ne=E.$property=function(t){function e(t){return function(e,n){var r=(e=Te(e))[0];if(A(n))return r?r[t]:"";r&&yt(e,(function(e){e[t]=n}))}}return{html:e("innerHTML"),text:e("textContent"),val:e("value")}}(),Me=E.$remove=function(t){t=Te(t),yt(t,(function(t){var e=t.parentNode;e&&e.removeChild(t)}))},Fe=E.$show=function(t){t=function(t){t=Te(t),yt(t,(function(t){(function(t){return"none"==getComputedStyle(t,"").getPropertyValue("display")})(t)&&(t.style.display=function(t){var n,r;e[t]||(n=document.createElement(t),document.documentElement.appendChild(n),r=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==r&&(r="block"),e[t]=r);return e[t]}(t.nodeName))}))};var e={};return t}({}),ze=E.Stack=Ee({initialize:function(){this.clear()},clear:function(){this._items=[],this.size=0},push:function(t){return this._items.push(t),++this.size},pop:function(){if(this.size)return this.size--,this._items.pop()},peek:function(){return this._items[this.size-1]},forEach:function(t,e){e=arguments.length>1?e:this;for(var n=this._items,r=this.size-1,i=0;r>=0;r--,i++)t.call(e,n[r],i,this)},toArr:function(){return D(this._items)}}),Ie=E.delegate=function(t){function e(){return!0}function n(){return!1}function r(e){var n,r=this.events[e.type],a=i.call(this,e,r);e=new t.Event(e);for(var o,s,u=0;(s=a[u++])&&!e.isPropagationStopped();)for(e.curTarget=s.el,o=0;(n=s.handlers[o++])&&!e.isImmediatePropagationStopped();)!1===n.handler.apply(s.el,[e])&&(e.preventDefault(),e.stopPropagation())}function i(t,e){var n,r,i,a,o=t.target,s=[],u=e.delegateCount;if(o.nodeType)for(;o!==this;o=o.parentNode||this){for(r=[],a=0;a<u;a++)void 0===r[n=(i=e[a]).selector+" "]&&(r[n]=Ot(this.querySelectorAll(n),o)),r[n]&&r.push(i);r.length&&s.push({el:o,handlers:r})}return u<e.length&&s.push({el:this,handlers:e.slice(u)}),s}return t={add:function(t,e,n,i){var a,o={selector:n,handler:i};t.events||(t.events={}),(a=t.events[e])||((a=t.events[e]=[]).delegateCount=0,t.addEventListener(e,(function(){r.apply(t,arguments)}),!1)),n?a.splice(a.delegateCount++,0,o):a.push(o)},remove:function(t,e,n,r){var i=t.events;if(i&&i[e])for(var a,o=i[e],s=o.length;s--;)a=o[s],n&&a.selector!=n||a.handler!=r||(o.splice(s,1),a.selector&&o.delegateCount--)},Event:Ee({className:"Event",initialize:function(t){this.origEvent=t},isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var t=this.origEvent;this.isDefaultPrevented=e,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.origEvent;this.isPropagationStopped=e,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.origEvent;this.isImmediatePropagationStopped=e,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}})}}({}),Be=E.$event=function(t){function e(t){return function(e,n,r,i){e=Te(e),A(i)&&(i=r,r=void 0),yt(e,(function(e){Ie[t](e,n,r,i)}))}}return{on:e("add"),off:e("remove")}}(),He=E.concat=function(){for(var t=Oe(arguments),e=[],n=0,r=t.length;n<r;n++)e=e.concat(Oe(t[n]));return e},Ue=E.meta=function(t){(t=function(t,i){if(A(t))return a={},n((function(t,e){a[t]=e})),a;var a;if($t(t)&&A(i)||ct(t))return function(t){if(!$t(t)){var e={};return n((function(n,r){Ot(t,n)&&(e[n]=r)})),e}var i=r(t);if(i)return i.getAttribute("content")}(t);var o=t;S(o)||((o={})[t]=i),function(t){yt(t,(function(t,n){var i=r(n);if(i)return i.setAttribute("content",t);(i=e.createElement("meta")).setAttribute("name",n),i.setAttribute("content",t),e.head.appendChild(i)}))}(o)}).remove=function(t){t=Oe(t),yt(t,(function(t){var n=r(t);n&&e.head.removeChild(n)}))};var e=document;function n(t){var n=e.querySelectorAll("meta");yt(n,(function(e){var n=e.getAttribute("name"),r=e.getAttribute("content");n&&r&&t(n,r)}))}function r(t){return e.querySelector('meta[name="'+t+'"]')}return t}({}),Ke=E.partial=Y((function(t,e){return function(){var n=[];return n=(n=n.concat(e)).concat(Oe(arguments)),t.apply(this,n)}})),We=E.once=Ke(M,2),Ge=E.Emitter=function(t){return t=Ee({initialize:function(){this._events=this._events||{}},on:function(t,e){return this._events[t]=this._events[t]||[],this._events[t].push(e),this},off:function(t,e){if(T(this._events,t))return this._events[t].splice(this._events[t].indexOf(e),1),this},once:function(t,e){return this.on(t,We(e)),this},emit:function(t){if(T(this._events,t)){var e=C(arguments,1);return yt(this._events[t],(function(t){t.apply(this,e)}),this),this}}},{mixin:function(e){yt(["on","off","once","emit"],(function(n){e[n]=t.prototype[n]})),e._events=e._events||{}}})}({}),qe=E.Logger=function(t){return t=Ge.extend({initialize:function(e,n){this.name=e,this.setLevel(A(n)?t.level.DEBUG:n),this.callSuper(Ge,"initialize",arguments)},setLevel:function(e){return $t(e)?((e=t.level[e.toUpperCase()])&&(this._level=e),this):(mt(e)&&(this._level=e),this)},getLevel:function(){return this._level},formatter:function(t,e){return e},trace:function(){return this._log("trace",arguments)},debug:function(){return this._log("debug",arguments)},info:function(){return this._log("info",arguments)},warn:function(){return this._log("warn",arguments)},error:function(){return this._log("error",arguments)},_log:function(e,n){return 0===(n=Oe(n)).length?this:(this.emit("all",e,ye(n)),t.level[e.toUpperCase()]<this._level||(this.emit(e,ye(n)),("debug"===e?console.log:console[e]).apply(console,this.formatter(e,n))),this)}},{level:new je({TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5})})}({}),Ve=E.MediaQuery=Ge.extend({className:"MediaQuery",initialize:function(t){var e=this;this.callSuper(Ge,"initialize"),this._mql=window.matchMedia(t),this._mql.addListener((function(){e.emit(e.isMatch()?"match":"unmatch")}))},isMatch:function(){return this._mql.matches}}),Xe=E.isDarkMode=(w=new Ve("(prefers-color-scheme: dark)"),function(){return w.isMatch()}),Ye=E.Store=Ge.extend({initialize:function(t){this.callSuper(Ge,"initialize",arguments),this._data=t||{},this.save(this._data)},set:function(t,e){var n;$t(t)?(n={})[t]=e:S(t)&&(n=t);var r=this;yt(n,(function(t,e){var n=r._data[e];r._data[e]=t,r.emit("change",e,t,n)})),this.save(this._data)},get:function(t){var e=this._data;if($t(t))return e[t];var n={};return yt(t,(function(t){n[t]=e[t]})),n},remove:function(t){t=Oe(t);var e=this._data;yt(t,(function(t){delete e[t]})),this.save(e)},clear:function(){this._data={},this.save(this._data)},each:function(t){yt(this._data,t)},save:function(t){this._data=t}}),Qe=E.orientation=function(t){var e=window.screen;return t={get:function(){if(e){var t=ht(e,"orientation.type");if(t)return t.split("-").shift()}return window.innerWidth>window.innerHeight?"landscape":"portrait"}},Ge.mixin(t),window.addEventListener("orientationchange",(function(){setTimeout((function(){t.emit("change",t.get())}),200)}),!1),t}({}),Je=E.mapObj=function(t,e,n){e=he(e,n);for(var r=P(t),i=r.length,a={},o=0;o<i;o++){var s=r[o];a[s]=e(t[s],s,t)}return a},Ze=E.cloneDeep=(x={},x=function(t){return ct(t)?t.map((function(t){return x(t)})):S(t)&&!dt(t)?Je(t,(function(t){return x(t)})):t}),tn=E.some=function(t,e,n){e=he(e,n);for(var r=!bt(t)&&P(t),i=(r||t).length,a=0;a<i;a++){var o=r?r[a]:a;if(e(t[o],o,t))return!0}return!1},en=E.$class=function(t){function e(t){return $t(t)?t.split(/\s+/):Oe(t)}return t={add:function(n,r){n=Te(n);var i=e(r);yt(n,(function(e){var n=[];yt(i,(function(r){t.has(e,r)||n.push(r)})),0!==n.length&&(e.className+=(e.className?" ":"")+n.join(" "))}))},has:function(t,e){t=Te(t);var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return tn(t,(function(t){return n.test(t.className)}))},toggle:function(e,n){e=Te(e),yt(e,(function(e){if(!t.has(e,n))return t.add(e,n);t.remove(e,n)}))},remove:function(t,n){t=Te(t);var r=e(n);yt(t,(function(t){yt(r,(function(e){t.classList.remove(e)}))}))}}}({}),nn=E.$=function(t){t=function(t){return new Se(t)},Se.methods({offset:function(){return Le(this)},hide:function(){return this.css("display","none")},show:function(){return Fe(this),this},first:function(){return t(this[0])},last:function(){return t(j(this))},get:function(t){return this[t]},eq:function(e){return t(this[e])},on:function(t,e,n){return Be.on(this,t,e,n),this},off:function(t,e,n){return Be.off(this,t,e,n),this},html:function(t){var e=Ne.html(this,t);return A(t)?e:this},text:function(t){var e=Ne.text(this,t);return A(t)?e:this},val:function(t){var e=Ne.val(this,t);return A(t)?e:this},css:function(t,n){var r=Pe(this,t,n);return e(t,n)?r:this},attr:function(t,n){var r=Ce(this,t,n);return e(t,n)?r:this},data:function(t,n){var r=Re(this,t,n);return e(t,n)?r:this},rmAttr:function(t){return Ce.remove(this,t),this},remove:function(){return Me(this),this},addClass:function(t){return en.add(this,t),this},rmClass:function(t){return en.remove(this,t),this},toggleClass:function(t){return en.toggle(this,t),this},hasClass:function(t){return en.has(this,t)},parent:function(){return t(this[0].parentNode)},append:function(t){return De.append(this,t),this},prepend:function(t){return De.prepend(this,t),this},before:function(t){return De.before(this,t),this},after:function(t){return De.after(this,t),this}});var e=function(t,e){return A(e)&&$t(t)};return t}({}),rn=E.pxToNum=function(t){return re(t.replace("px",""))},an=E.raf=function(t){var e,n,r=0;if(L){e=window.requestAnimationFrame,n=window.cancelAnimationFrame;for(var i=["ms","moz","webkit","o"],a=0,o=i.length;a<o&&!e;a++)e=window[i[a]+"RequestAnimationFrame"],n=window[i[a]+"CancelAnimationFrame"]||window[i[a]+"CancelRequestAnimationFrame"]}return n=n||function(t){clearTimeout(t)},(e=e||function(t){var e=ue(),n=Math.max(0,16-(e-r)),i=setTimeout((function(){t(e+n)}),n);return r=e+n,i}).cancel=n,e}(),on=E.rmCookie=function(t){var e,n=window.location,r=n.hostname,i=n.pathname,a=r.split("."),o=i.split("/"),s="",u=o.length;if(!p())for(var l=a.length-1;l>=0;l--){var c=a[l];if(""!==c){if(p({domain:s=""===s?c:c+"."+s,path:e="/"})||p({domain:s}))return;for(var _=0;_<u;_++){var h=o[_];if(""!==h){if(p({domain:s,path:e+=h})||p({path:e}))return;if(p({domain:s,path:e+="/"})||p({path:e}))return}}}}function p(e){return e=e||{},$e.remove(t,e),!$e.get(t)}},sn=E.rtrim=function(t){var e=/\s+$/;return function(t,n){if(null==n)return t.replace(e,"");for(var r,i,a=t.length-1,o=n.length,s=!0;s&&a>=0;)for(s=!1,r=-1,i=t.charAt(a);++r<o;)if(i===n[r]){s=!0,a--;break}return a>=0?t.substring(0,a+1):""}}(),un=E.trim=function(t){var e=/^\s+|\s+$/g;return function(t,n){return null==n?t.replace(e,""):Zt(sn(t,n),n)}}(),ln=E.extractUrls=function(t){t=function(t){var n=Oe(t.match(e));return de(xe(n,(function(t){return un(t)})))};var e=/((https?)|(ftp)):\/\/[\w.]+[^ \f\n\r\t\v"\\<>[\]\u2100-\uFFFF(),]*/gi;return t}({}),cn=E.linkify=function(t){function e(t){return'<a href="'+t+'">'+t+"</a>"}return function(t,n){n=n||e;var r=ln(t);return yt(r,(function(e){t=t.replace(new RegExp(nt(e),"g"),n)})),t}}(),_n=E.query=function(t){t={parse:function(t){var n={};return t=un(t).replace(e,""),yt(t.split("&"),(function(t){var e=t.split("="),r=e.shift(),i=e.length>0?e.join("="):null;r=decodeURIComponent(r),i=decodeURIComponent(i),A(n[r])?n[r]=i:ct(n[r])?n[r].push(i):n[r]=[n[r],i]})),n},stringify:function(e,n){return pe(xe(e,(function(e,r){return S(e)&&Et(e)?"":ct(e)?t.stringify(e,r):(n?encodeURIComponent(n):encodeURIComponent(r))+"="+encodeURIComponent(e)})),(function(t){return t.length>0})).join("&")}};var e=/^(\?|#|&)/g;return t}({}),hn=E.Url=function(t){t=Ee({className:"Url",initialize:function(e){!e&&L&&(e=window.location.href),be(this,t.parse(e||""))},setQuery:function(t,e){var n=this.query;return S(t)?yt(t,(function(t,e){n[e]=t})):n[t]=e,this},rmQuery:function(t){var e=this.query;return ct(t)||(t=Oe(t)),yt(t,(function(t){delete e[t]})),this},toString:function(){return t.stringify(this)}},{parse:function(t){var i={protocol:"",auth:"",hostname:"",hash:"",query:{},port:"",pathname:"",slashes:!1},a=un(t),o=!1,s=a.match(e);if(s&&(s=s[0],i.protocol=s.toLowerCase(),a=a.substr(s.length)),s&&(o="//"===a.substr(0,2))&&(a=a.slice(2),i.slashes=!0),o){for(var u=a,l=-1,c=0,_=r.length;c<_;c++){var h=a.indexOf(r[c]);-1!==h&&(-1===l||h<l)&&(l=h)}l>-1&&(u=a.slice(0,l),a=a.slice(l));var p=u.lastIndexOf("@");-1!==p&&(i.auth=decodeURIComponent(u.slice(0,p)),u=u.slice(p+1)),i.hostname=u;var f=u.match(n);f&&(":"!==(f=f[0])&&(i.port=f.substr(1)),i.hostname=u.substr(0,u.length-f.length))}var d=a.indexOf("#");-1!==d&&(i.hash=a.substr(d),a=a.slice(0,d));var v=a.indexOf("?");return-1!==v&&(i.query=_n.parse(a.substr(v+1)),a=a.slice(0,v)),i.pathname=a||"/",i},stringify:function(t){var e=t.protocol+(t.slashes?"//":"")+(t.auth?encodeURIComponent(t.auth)+"@":"")+t.hostname+(t.port?":"+t.port:"")+t.pathname;return Et(t.query)||(e+="?"+_n.stringify(t.query)),t.hash&&(e+=t.hash),e}});var e=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,r=["/","?","#"];return t}({}),pn=E.getFileName=function(t){var e=j(t.split("/"));return e.indexOf("?")>-1&&(e=un(e.split("?")[0])),""===e&&(e=(t=new hn(t)).hostname),e},fn=E.ajax=function(t){function e(t,e,n,r){return dt(e)&&(r=n,n=e,e={}),{url:t,data:e,success:n,dataType:r}}return(t=function(e){ge(e,t.setting);var n,r=e.type,i=e.url,a=e.data,o=e.dataType,s=e.success,u=e.error,l=e.timeout,c=e.complete,_=e.xhr();return _.onreadystatechange=function(){if(4===_.readyState){var t;clearTimeout(n);var e=_.status;if(e>=200&&e<300||304===e){t=_.responseText,"xml"===o&&(t=_.responseXML);try{"json"===o&&(t=JSON.parse(t))}catch(t){}s(t,_)}else u(_);c(_)}},"GET"===r?(a=_n.stringify(a),i+=i.indexOf("?")>-1?"&"+a:"?"+a):"application/x-www-form-urlencoded"===e.contentType?S(a)&&(a=_n.stringify(a)):"application/json"===e.contentType&&S(a)&&(a=JSON.stringify(a)),_.open(r,i,!0),_.setRequestHeader("Content-Type",e.contentType),l>0&&(n=setTimeout((function(){_.onreadystatechange=N,_.abort(),u(_,"timeout"),c(_)}),l)),_.send("GET"===r?null:a),_}).setting={type:"GET",success:N,error:N,complete:N,dataType:"json",contentType:"application/x-www-form-urlencoded",data:{},xhr:function(){return new XMLHttpRequest},timeout:0},t.get=function(){return t(e.apply(null,arguments))},t.post=function(){var n=e.apply(null,arguments);return n.type="POST",t(n)},t}({}),dn=E.sortKeys=function(t){t=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ge(n,e);var r=n.deep,i=n.comparator,a=[],o=[];function s(t){var e,n=a.indexOf(t);if(n>-1)return o[n];if(ct(t)){e=[],a.push(t),o.push(e);for(var u=0,l=t.length;u<l;u++){var c=t[u];r&&S(c)?e[u]=s(c):e[u]=c}}else{e={},a.push(t),o.push(e);for(var _=P(t).sort(i),h=0,p=_.length;h<p;h++){var f=_[h],d=t[f];r&&S(d)?e[f]=s(d):e[f]=d}}return e}return s(t)};var e={deep:!1,comparator:qt.defComparator};return t}({}),vn=E.type=function(t){t=function(t){var n,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null===t&&(n="Null"),void 0===t&&(n="Undefined"),zt(t)&&(n="NaN"),At(t)&&(n="Buffer"),n||(n=ut(t).match(e))&&(n=n[1]),n?r?Xt(n):n:""};var e=/^\[object\s+(.*?)]$/;return t}({}),gn=E.stringify=function(t,e){return JSON.stringify(t,function(){var t=[],e=[];return function(n,r){if(t.length>0){var i=t.indexOf(this);i>-1?(t.splice(i+1),e.splice(i,1/0,n)):(t.push(this),e.push(n));var a=t.indexOf(r);a>-1&&(r=t[0]===r?"[Circular ~]":"[Circular ~."+e.slice(0,a).join(".")+"]")}else t.push(r);return Gt(r)||dt(r)?r="["+at(vn(r))+" "+W(r)+"]":A(r)&&(r=null),r}}(),e)},mn=E.LocalStore=function(t){var e=ne("local");return Ye.extend({initialize:function(t,n){this._name=t,n=n||{};var r=e.getItem(t);try{r=JSON.parse(r)}catch(t){r={}}S(r)||(r={}),n=ge(r,n),this.callSuper(Ye,"initialize",[n])},save:function(t){if(Et(t))return e.removeItem(this._name);e.setItem(this._name,gn(t))}})}(),bn=E.stringifyAll=function(t){function e(e,r,i,a){var o=[];return yt(r,(function(e){var r,s=Object.getOwnPropertyDescriptor(i,e),u=s&&s.get,l=s&&s.set;if(!a.accessGetter&&u)r="(...)";else try{if(r=i[e],Ot(a.ignore,r))return;Wt(r)&&r.catch((function(){}))}catch(t){r=t.message}o.push("".concat(n(e),":").concat(t(r,a))),u&&o.push("".concat(n("get "+W(e)),":").concat(t(s.get,a))),l&&o.push("".concat(n("set "+W(e)),":").concat(t(s.set,a)))})),'"'.concat(e,'":{')+o.join(",")+"}"}function n(t){return'"'.concat(i(t),'"')}function r(t){return'"'.concat(i(W(t)),'"')}function i(t){return tt(t).replace(/\\'/g,"'").replace(/\t/g,"\\t")}t=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.self,s=i.startTime,u=void 0===s?ue():s,l=i.timeout,c=void 0===l?0:l,_=i.depth,h=void 0===_?0:_,p=i.curDepth,f=void 0===p?1:p,d=i.visitor,v=void 0===d?new a:d,g=i.unenumerable,m=void 0!==g&&g,b=i.symbol,y=void 0!==b&&b,w=i.accessGetter,x=void 0!==w&&w,k=i.ignore,$=void 0===k?[]:k,E="",j={visitor:v,unenumerable:m,symbol:y,accessGetter:x,depth:h,curDepth:f+1,timeout:c,startTime:u,ignore:$},A=vn(n,!1);if("String"===A)E=r(n);else if("Number"===A)E=W(n),J(E,"Infinity")&&(E='{"value":"'.concat(E,'","type":"Number"}'));else if("NaN"===A)E='{"value":"NaN","type":"Number"}';else if("Boolean"===A)E=n?"true":"false";else if("Null"===A)E="null";else if("Undefined"===A)E='{"type":"Undefined"}';else if("Symbol"===A){var S="Symbol";try{S=W(n)}catch(t){}E='{"value":'.concat(r(S),',"type":"Symbol"}')}else{if(c&&ue()-u>c)return r("Timeout");if(h&&f>h)return r("{...}");E="{";var T,C=[],R=v.get(n);if(R?(T=R.id,C.push('"reference":'.concat(T))):(T=v.set(n),C.push('"id":'.concat(T))),C.push('"type":"'.concat(A,'"')),J(A,"Function")?C.push('"value":'.concat(r(Bt(n)))):"RegExp"===A&&C.push('"value":'.concat(r(n))),!R){var D=P(n);if(D.length&&C.push(e("enumerable",D,o||n,j)),m){var L=fe(ve(n,{prototype:!1,unenumerable:!0}),D);L.length&&C.push(e("unenumerable",L,o||n,j))}if(y){var N=pe(ve(n,{prototype:!1,symbol:!0}),(function(t){return"symbol"===O()(t)}));N.length&&C.push(e("symbol",N,o||n,j))}var M=vt(n);if(M&&!Ot($,M)){var F='"proto":'.concat(t(M,be(j,{self:o||n})));C.push(F)}}E+=C.join(",")+"}"}return E};var a=Ee({initialize:function(){this.id=0,this.visited=[]},set:function(t){var e=this.visited,n=this.id,r={id:n,val:t};return e.push(r),this.id++,n},get:function(t){for(var e=this.visited,n=0,r=e.length;n<r;n++){var i=e[n];if(t===i.val)return i}return!1}});return t}({}),yn=E.throttle=function(t,e){return G(t,e,!0)},wn=E.uncaught=function(t){var e=[],n=!1;function i(t){if(n)for(var r=0,i=e.length;r<i;r++)e[r](t)}return t={start:function(){n=!0},stop:function(){n=!1},addListener:function(t){e.push(t)},rmListener:function(t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},rmAllListeners:function(){e=[]}},L?(window.addEventListener("error",(function(t){i(t.error)})),window.addEventListener("unhandledrejection",(function(t){i(t.reason)}))):(r.on("uncaughtException",i),r.on("unhandledRejection",i)),t}({}),xn=E.uniqId=(k=0,function(t){var e=++k+"";return t?t+e:e}),kn=E.viewportScale=function(){var t=Ue("viewport");if(!t)return 1;t=xe(t.split(","),(function(t){return un(t)}));var e=.25,n=5,r=1;yt(t,(function(t){var i=(t=t.split("="))[0];t=t[1],"initial-scale"===i&&(r=+t),"maximum-scale"===i&&(n=+t),"minimum-scale"===i&&(e=+t)}));var i=B(r,e,n);return zt(i)?1:i},$n=E.wrap=function(t,e){return Ke(e,t)},On=E.xpath=function(t){for(var e=[],n=document.evaluate(t,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),r=0;r<n.snapshotLength;r++)e.push(n.snapshotItem(r));return e};e.q=E}).call(this,n(16),n(21),n(36).setImmediate)},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(20);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(12),i=n(9);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},function(t,e,n){var r=n(38);function i(e,n,a){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=i=Reflect.get:t.exports=i=function(t,e,n){var i=r(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}},i(e,n,a||e)}t.exports=i},function(t,e,n){var r=n(41);r.registerHelper("repeat",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if(t<1)return e.inverse(this);var n=1,r=0,i=t*n+r,a=r,o="";do{var s={index:a,count:t,start:r,step:n,first:a===r,last:a>=i-n},u=[a,s];o+=e.fn(this,{data:s,blockParams:u}),a+=s.step}while(a<i);return o})),r.registerHelper("class",(function(t){var e=t.split(/\s+/);return e=e.map((function(t){return"eruda-".concat(t)})),'class="'.concat(e.join(" "),'"')})),r.registerHelper("concat",(function(){for(var t="",e=0,n=arguments.length;e<n;e++){var r=arguments[e];"string"==typeof r&&(t+=r)}return t})),t.exports=r},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}var o,s,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!a.test(t))return t;return t.replace(i,o)},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,a=/[&<>"'`=]/;function o(t){return r[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var u=Object.prototype.toString;e.toString=u;var l=function(t){return"function"==typeof t};l(/x/)&&(e.isFunction=l=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)}),e.isFunction=l;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===u.call(t)};e.isArray=c},function(t,e,n){"use strict";var r,i;r=[n(18),n(19),n(70)],void 0===(i=function(t,e,n){return function(t,e,n){var r=function(e,n){return t.js_beautify(e,n)};return r.js=t.js_beautify,r.css=e.css_beautify,r.html=n.html_beautify,r.js_beautify=t.js_beautify,r.css_beautify=e.css_beautify,r.html_beautify=n.html_beautify,r}(t,e,n)}.apply(e,r))||(t.exports=i)},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function i(t,e){var n=e&&e.loc,a=void 0,o=void 0,s=void 0,u=void 0;n&&(a=n.start.line,o=n.end.line,s=n.start.column,u=n.end.column,t+=" - "+a+":"+s);for(var l=Error.prototype.constructor.call(this,t),c=0;c<r.length;c++)this[r[c]]=l[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{n&&(this.lineNumber=a,this.endLineNumber=o,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:u,enumerable:!0})):(this.column=s,this.endColumn=u))}catch(t){}}i.prototype=new Error,e.default=i,t.exports=e.default},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(64),i=n(65),a=n(66),o=n(68);t.exports=function(t,e){return r(t)||i(t,e)||a(t,e)||o()}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=39)}([function(t,e,n){var r=n(9),i=n(4),a=n(23);e=function(t,e,n){var o,s;if(e=a(e,n),r(t))for(o=0,s=t.length;o<s;o++)e(t[o],o,t);else{var u=i(t);for(o=0,s=u.length;o<s;o++)e(t[u[o]],u[o],t)}return t},t.exports=e},function(t,e,n){var r=n(10);e=function(t){return"[object String]"===r(t)},t.exports=e},function(t,e){e=function(t){var e=typeof t;return!!t&&("function"===e||"object"===e)},t.exports=e},function(t,e,n){var r=n(1),i=n(12),a=n(31);e=function(t){return i(r(t)?new a(t):t)},t.exports=e},function(t,e,n){var r=n(11);e=Object.keys?Object.keys:function(t){var e=[];for(var n in t)r(t,n)&&e.push(n);return e},t.exports=e},function(t,e){e=function(t){return void 0===t},t.exports=e},function(t,e,n){var r=n(10);e=function(t){var e=r(t);return"[object Function]"===e||"[object GeneratorFunction]"===e||"[object AsyncFunction]"===e},t.exports=e},function(t,e,n){var r=n(10);e=function(t){return"[object Number]"===r(t)},t.exports=e},function(t,e,n){var r=n(10);e=Array.isArray?Array.isArray:function(t){return"[object Array]"===r(t)},t.exports=e},function(t,e,n){var r=n(7),i=n(6),a=Math.pow(2,53)-1;e=function(t){if(!t)return!1;var e=t.length;return r(e)&&e>=0&&e<=a&&!i(t)},t.exports=e},function(t,e){var n=Object.prototype.toString;e=function(t){return n.call(t)},t.exports=e},function(t,e){var n=Object.prototype.hasOwnProperty;e=function(t,e){return n.call(t,e)},t.exports=e},function(t,e,n){var r=n(9),i=n(47),a=n(8),o=n(1);e=function(t){return t?a(t)?t:r(t)&&!o(t)?i(t):[t]:[]},t.exports=e},function(t,e,n){var r=n(21),i=n(12),a=n(48),o=n(26),s=n(50),u=(e=function(t,e){return u.extend(t,e)}).Base=function t(e,n,u){u=u||{};var l=n.className||o(n,"initialize.name")||"";delete n.className;var c=function(){var t=i(arguments);return this.initialize&&this.initialize.apply(this,t)||this};if(!s)try{c=new Function("toArr","return function "+l+"(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(i)}catch(t){}return a(c,e),c.prototype.constructor=c,c.extend=function(e,n){return t(c,e,n)},c.inherits=function(t){a(c,t)},c.methods=function(t){return r(c.prototype,t),c},c.statics=function(t){return r(c,t),c},c.methods(n).statics(u),c}(Object,{className:"Base",callSuper:function(t,e,n){return t.prototype[e].apply(this,n)},toString:function(){return this.constructor.name}});t.exports=e},function(t,e,n){var r=n(15),i=n(0);e=function(t,e,n){var a=[];return e=r(e,n),i(t,(function(t,n,r){e(t,n,r)&&a.push(t)})),a},t.exports=e},function(t,e,n){var r=n(6),i=n(2),a=n(8),o=n(23),s=n(41),u=n(44),l=n(45);e=function(t,e,n){return null==t?u:r(t)?o(t,e,n):i(t)&&!a(t)?s(t):l(t)},t.exports=e},function(t,e,n){var r=n(17);e=function(t){return r(t).toLocaleLowerCase()},t.exports=e},function(t,e){e=function(t){return null==t?"":t.toString()},t.exports=e},function(t,e){e=function(t){return t.length<1?t:t[0].toUpperCase()+t.slice(1)},t.exports=e},function(t,e,n){var r=n(63),i=n(1),a=n(9),o=n(64);e=function(t,e){return i(t)?t.indexOf(e)>-1:(a(t)||(t=o(t)),r(t,e)>=0)},t.exports=e},function(t,e,n){var r=n(13),i=n(11),a=n(0),o=n(51),s=n(52);e=r({initialize:function(){this._events=this._events||{}},on:function(t,e){return this._events[t]=this._events[t]||[],this._events[t].push(e),this},off:function(t,e){if(i(this._events,t))return this._events[t].splice(this._events[t].indexOf(e),1),this},once:function(t,e){return this.on(t,s(e)),this},emit:function(t){if(i(this._events,t)){var e=o(arguments,1);return a(this._events[t],(function(t){t.apply(this,e)}),this),this}}},{mixin:function(t){a(["on","off","once","emit"],(function(n){t[n]=e.prototype[n]})),t._events=t._events||{}}}),t.exports=e},function(t,e,n){e=n(22)(n(24)),t.exports=e},function(t,e,n){var r=n(5),i=n(0);e=function(t,e){return function(n){return i(arguments,(function(a,o){if(0!==o){var s=t(a);i(s,(function(t){e&&!r(n[t])||(n[t]=a[t])}))}})),n}},t.exports=e},function(t,e,n){var r=n(5);e=function(t,e,n){if(r(e))return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,a){return t.call(e,n,r,i,a)}}return function(){return t.apply(e,arguments)}},t.exports=e},function(t,e,n){var r=n(4),i=n(25),a=n(40),o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols;e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.prototype,u=void 0===n||n,l=e.unenumerable,c=void 0!==l&&l,_=e.symbol,h=void 0!==_&&_,p=[];if((c||h)&&o){var f=r;c&&o&&(f=o);do{p=p.concat(f(t)),h&&s&&(p=p.concat(s(t)))}while(u&&(t=i(t))&&t!==Object.prototype);p=a(p)}else if(u)for(var d in t)p.push(d);else p=r(t);return p},t.exports=e},function(t,e,n){var r=n(2),i=n(6),a=Object.getPrototypeOf,o={}.constructor;e=function(t){if(r(t)){if(a)return a(t);var e=t.__proto__;return e||null===e?e:i(t.constructor)?t.constructor.prototype:t instanceof o?o.prototype:void 0}},t.exports=e},function(t,e,n){var r=n(5),i=n(46);e=function(t,e){var n;for(n=(e=i(e,t)).shift();!r(n);){if(null==(t=t[n]))return;n=e.shift()}return t},t.exports=e},function(t,e){e=function(t,e){return e=null==e?t.length-1:+e,function(){var n,r=Math.max(arguments.length-e,0),i=new Array(r);for(n=0;n<r;n++)i[n]=arguments[n+e];switch(e){case 0:return t.call(this,i);case 1:return t.call(this,arguments[0],i);case 2:return t.call(this,arguments[0],arguments[1],i)}var a=new Array(e+1);for(n=0;n<e;n++)a[n]=arguments[n];return a[e]=i,t.apply(this,a)}},t.exports=e},function(t,e){e=function(t){return!0===t||!1===t},t.exports=e},function(t,e,n){var r=n(7);e=function(t){return r(t)&&t!==+t},t.exports=e},function(t,e,n){var r=n(31),i=n(60),a=n(61),o=n(62),s=n(34),u=n(68),l=n(69),c=n(70),_=n(71),h=n(72),p=n(74),f=n(76),d=n(5),v=n(1);e=function(t){return new r(t)},r.methods({offset:function(){return i(this)},hide:function(){return this.css("display","none")},show:function(){return a(this),this},first:function(){return e(this[0])},last:function(){return e(l(this))},get:function(t){return this[t]},eq:function(t){return e(this[t])},on:function(t,e,n){return h.on(this,t,e,n),this},off:function(t,e,n){return h.off(this,t,e,n),this},html:function(t){var e=u.html(this,t);return d(t)?e:this},text:function(t){var e=u.text(this,t);return d(t)?e:this},val:function(t){var e=u.val(this,t);return d(t)?e:this},css:function(t,e){var n=o(this,t,e);return g(t,e)?n:this},attr:function(t,e){var n=s(this,t,e);return g(t,e)?n:this},data:function(t,e){var n=_(this,t,e);return g(t,e)?n:this},rmAttr:function(t){return s.remove(this,t),this},remove:function(){return c(this),this},addClass:function(t){return p.add(this,t),this},rmClass:function(t){return p.remove(this,t),this},toggleClass:function(t){return p.toggle(this,t),this},hasClass:function(t){return p.has(this,t)},parent:function(){return e(this[0].parentNode)},append:function(t){return f.append(this,t),this},prepend:function(t){return f.prepend(this,t),this},before:function(t){return f.before(this,t),this},after:function(t){return f.after(this,t),this}});var g=function(t,e){return d(e)&&v(t)};t.exports=e},function(t,e,n){var r=n(13),i=n(1),a=n(0),o=new(e=r({className:"Select",initialize:function(t){return this.length=0,t?i(t)?o.find(t):void(t.nodeType&&(this[0]=t,this.length=1)):this},find:function(t){var n=new e;return this.each((function(){!function(t,e){for(var n=e.length,r=t.length,i=0;i<n;i++)t[r++]=e[i];t.length=r}(n,this.querySelectorAll(t))})),n},each:function(t){return a(this,(function(e,n){t.call(e,n,e)})),this}}))(document);t.exports=e},function(t,e,n){var r=n(33);e=function(t){return r(t).join("-")},t.exports=e},function(t,e){var n=/([A-Z])/g,r=/[_.\- ]+/g,i=/(^-)|(-$)/g;e=function(t){return(t=t.replace(n,"-$1").toLowerCase().replace(r,"-").replace(i,"")).split("-")},t.exports=e},function(t,e,n){var r=n(12),i=n(2),a=n(1),o=n(0),s=n(5),u=n(3);(e=function(t,e,n){if(t=u(t),s(n)&&a(e))return function(t,e){return t.getAttribute(e)}(t[0],e);var r=e;i(r)||((r={})[e]=n),function(t,e){o(t,(function(t){o(e,(function(e,n){t.setAttribute(n,e)}))}))}(t,r)}).remove=function(t,e){t=u(t),e=r(e),o(t,(function(t){o(e,(function(e){t.removeAttribute(e)}))}))},t.exports=e},function(t,e){e=function(t,e){var n=[];e=e||1;for(var r=0,i=Math.ceil(t.length/e);r<i;r++){var a=r*e,o=a+e;n.push(t.slice(a,o))}return n},t.exports=e},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(17)),a=r(n(81)),o=r(n(37)),s=r(n(38)),u=r(n(84));e.encode=function(t){return u.default(i.default(t)).replace(/\n/g,"↵").replace(/\f|\r|\t/g,"")},e.getFnAbstract=function(t){return t.length>500&&(t=t.slice(0,500)+"..."),"ƒ "+a.default(function(t){var e=t.match(l);return e?e[0]:t}(t).replace("function",""))};var l=/function(.*?)\((.*?)\)/;function c(t,e){return(t=_(t))>(e=_(e))?1:t<e?-1:0}function _(t){return 95===t?123:t}e.sortObjName=function(t,e){t=i.default(t),e=i.default(e);var n=o.default(t),r=o.default(e);if(!isNaN(n)&&!isNaN(r))return n>r?1:n<r?-1:0;(s.default(t,"get ")||s.default(t,"set "))&&(t=t.slice(4)),(s.default(e,"get ")||s.default(e,"set "))&&(e=e.slice(4));for(var a=t.length,u=e.length,l=a>u?u:a,_=0;_<l;_++){var h=c(t.charCodeAt(_),e.charCodeAt(_));if(0!==h)return h}return a>u?1:a<u?-1:0}},function(t,e,n){var r=n(7),i=n(2),a=n(6),o=n(1);e=function(t){if(r(t))return t;if(i(t)){var e=a(t.valueOf)?t.valueOf():t;t=i(e)?e+"":e}return o(t)?+t:0===t?t:+t},t.exports=e},function(t,e){e=function(t,e){return 0===t.indexOf(e)},t.exports=e},function(t,e,n){"use strict";var r,i,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=o(n(20)),u=o(n(25)),l=o(n(7)),c=o(n(28)),_=o(n(16)),h=o(n(2)),p=o(n(8)),f=o(n(18)),d=o(n(4)),v=o(n(0)),g=o(n(55)),m=o(n(57)),b=o(n(58)),y=o(n(30)),w=o(n(77)),x=o(n(24)),k=o(n(14)),$=o(n(35)),O=o(n(17)),E=o(n(79)),j=o(n(80)),A=n(36),S=o(n(85));n(87);var T="luna-object-viewer-";t.exports=((i=function(t){function e(e,n){var r=void 0===n?{}:n,i=r.unenumerable,a=void 0!==i&&i,o=r.accessGetter,s=void 0!==o&&o,u=t.call(this)||this;return u.$container=y.default(e),u.$container.addClass("luna-object-viewer"),u.unenumerable=a,u.accessGetter=s,u.bindEvent(),u}return a(e,t),e.prototype.set=function(t){this.data=[t],this.visitor=new j.default,this.map={},this.appendTpl()},e.prototype.objToHtml=function(t,e){var n=this,r=this.visitor,i=t,a=!1,o=r.get(t);o&&o.self&&(i=o.self);var s="",l=["enumerable"],c=d.default(t),_=[],h=[],f=[],g={};if(this.unenumerable&&!e&&(l.push("unenumerable"),l.push("symbol"),_=w.default(x.default(t,{prototype:!1,unenumerable:!0}),c),h=k.default(x.default(t,{prototype:!1,symbol:!0}),(function(t){return"symbol"==typeof t}))),p.default(t)&&t.length>100){l.unshift("virtual"),a=!0;var b=0,y={};v.default($.default(t,100),(function(t){var e=Object.create(null),n=b,r="["+n;v.default(t,(function(t){e[b]=t,y[b]=!0,b++}));var i=b-1;g[r+=(i-n>0?" … "+i:"")+"]"]=e})),f=d.default(g),c=k.default(c,(function(t){return!y[t]}))}v.default(l,(function(r){var o=[];o="symbol"===r?h:"unenumerable"===r?_:"virtual"===r?f:c,a||o.sort(A.sortObjName);for(var u=0,l=o.length;u<l;u++){var p=O.default(o[u]),d="",v=Object.getOwnPropertyDescriptor(t,p),b=v&&v.get,y=v&&v.set;if(b&&!n.accessGetter)d="(...)";else try{d="virtual"===r?g[p]:i[p],m.default(d)&&d.catch(E.default)}catch(t){d=t.message}s+=n.createEl(p,t,d,r,e),b&&(s+=n.createEl("get "+p,t,v.get,r,e)),y&&(s+=n.createEl("set "+p,t,v.set,r,e))}}));var j=u.default(t);if(!e&&j)if(""===s){var S=r.set(j,{self:t});this.map[S]=j,s=this.objToHtml(j)}else s+=this.createEl("__proto__",i||t,j,"proto");return s},e.prototype.createEl=function(t,e,n,r,i){void 0===i&&(i=!1);var a=this.visitor,o=typeof n,s=b.default(n,!1);if("virtual"===r&&(s=t),null===n)return"<li>"+y(t)+'<span class="'+T+'null">null</span></li>';if(l.default(n)||c.default(n))return"<li>"+y(t)+'<span class="'+(T+o)+'">'+A.encode(n)+"</span></li>";if("RegExp"===s&&(o="regexp"),"Number"===s&&(o="number"),"Number"===s||"RegExp"===s)return"<li>"+y(t)+'<span class="'+(T+o)+'">'+A.encode(n.value)+"</span></li>";if("Undefined"===s||"Symbol"===s)return"<li>"+y(t)+'<span class="'+T+'special">'+_.default(s)+"</span></li>";if("(...)"===n)return"<li>"+y(t)+'<span class="'+T+'special">'+n+"</span></li>";if(h.default(n)){var u=a.get(n),p=void 0;if(u)p=u.id;else{var d={};"proto"===r&&(d.self=e),p=a.set(n,d),this.map[p]=n}var v=function(t,e){if(e)return"Function"===e?A.getFnAbstract(g.default(t)):"Array"===e?"Array("+t.length+")":e}(n,s)||f.default(o),m="<li "+(i?'data-first-level="true"':"")+' data-object-id="'+p+'"><span class="'+(i?"":T+"expanded "+T+"collapsed")+'"></span>'+y(t)+'<span class="'+T+'open">'+(i?"":v)+'</span><ul class="'+(T+o)+'" '+(i?"":'style="display:none"')+">";return i&&(m+=this.objToHtml(n)),m+'</ul><span class="'+T+'close"></span></li>'}function y(t){if(i)return"";if(h.default(n)&&"virtual"===r)return"";var e=T+"key";return"unenumerable"!==r&&"proto"!==r&&"symbol"!==r||(e=T+"key-lighter"),'<span class="'+e+'">'+A.encode(t)+"</span>: "}return"<li>"+y(t)+'<span class="'+T+typeof n+'">"'+A.encode(n)+'"</span></li>'},e.prototype.appendTpl=function(){this.$container.html(this.objToHtml(this.data,!0))},e.prototype.bindEvent=function(){var t=this;this.$container.on("click","li",(function(e){var n=t.map,r=y.default(this),i=r.data("object-id"),a=y.default(this).find("span").eq(0);if(!r.data("first-level")&&(i&&(r.find("ul").html(t.objToHtml(n[i],!1)),r.rmAttr("data-object-id")),e.stopImmediatePropagation(),a.hasClass(T+"expanded"))){var o=r.find("ul").eq(0);a.hasClass(T+"collapsed")?(a.rmClass(T+"collapsed"),o.show()):(a.addClass(T+"collapsed"),o.hide()),t.emit("change")}}))},e}(s.default)).Static=S.default,i)},function(t,e,n){var r=n(14);function i(t,e){return t===e}e=function(t,e){return e=e||i,r(t,(function(t,n,r){for(var i=r.length;++n<i;)if(e(t,r[n]))return!1;return!0}))},t.exports=e},function(t,e,n){var r=n(42),i=n(43);e=function(t){return t=r({},t),function(e){return i(e,t)}},t.exports=e},function(t,e,n){var r=n(4);e=n(22)(r),t.exports=e},function(t,e,n){var r=n(4);e=function(t,e){var n=r(e),i=n.length;if(null==t)return!i;t=Object(t);for(var a=0;a<i;a++){var o=n[a];if(e[o]!==t[o]||!(o in t))return!1}return!0},t.exports=e},function(t,e){e=function(t){return t},t.exports=e},function(t,e,n){var r=n(8),i=n(26);e=function(t){return r(t)?function(e){return i(e,t)}:(e=t,function(t){return null==t?void 0:t[e]});var e},t.exports=e},function(t,e,n){var r=n(11),i=n(8);e=function(t,e){if(i(t))return t;if(e&&r(e,t))return[t];var n=[];return t.replace(a,(function(t,e,r,i){n.push(r?i.replace(o,"$1"):e||t)})),n};var a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g;t.exports=e},function(t,e,n){var r=n(15),i=n(4),a=n(9);e=function(t,e,n){e=r(e,n);for(var o=!a(t)&&i(t),s=(o||t).length,u=Array(s),l=0;l<s;l++){var c=o?o[l]:l;u[l]=e(t[c],c,t)}return u},t.exports=e},function(t,e,n){var r=n(49);e=function(t,e){t.prototype=r(e.prototype)},t.exports=e},function(t,e,n){var r=n(2);e=function(t){if(!r(t))return{};if(i)return i(t);function e(){}return e.prototype=t,new e};var i=Object.create;t.exports=e},function(t,e,n){var r=n(6);e="undefined"!=typeof wx&&r(wx.openLocation),t.exports=e},function(t,e){e=function(t,e,n){var r=t.length;e=null==e?0:e<0?Math.max(r+e,0):Math.min(e,r),n=null==n?r:n<0?Math.max(r+n,0):Math.min(n,r);for(var i=[];e<n;)i.push(t[e++]);return i},t.exports=e},function(t,e,n){e=n(53)(n(54),2),t.exports=e},function(t,e,n){var r=n(27),i=n(12);e=r((function(t,e){return function(){var n=[];return n=(n=n.concat(e)).concat(i(arguments)),t.apply(this,n)}})),t.exports=e},function(t,e){e=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},t.exports=e},function(t,e,n){var r=n(56);e=function(t){if(r(t))return"";try{return i.call(t)}catch(t){}try{return t+""}catch(t){}return""};var i=Function.prototype.toString;t.exports=e},function(t,e){e=function(t){return null==t},t.exports=e},function(t,e,n){var r=n(2),i=n(6);e=function(t){return r(t)&&i(t.then)&&i(t.catch)},t.exports=e},function(t,e,n){var r=n(10),i=n(29),a=n(16),o=n(59);e=function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null===t&&(e="Null"),void 0===t&&(e="Undefined"),i(t)&&(e="NaN"),o(t)&&(e="Buffer"),e||(e=r(t).match(s))&&(e=e[1]),e?n?a(e):e:""};var s=/^\[object\s+(.*?)]$/;t.exports=e},function(t,e,n){var r=n(6);e=function(t){return null!=t&&(!!t._isBuffer||t.constructor&&r(t.constructor.isBuffer)&&t.constructor.isBuffer(t))},t.exports=e},function(t,e,n){var r=n(3);e=function(t){var e=(t=r(t))[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},t.exports=e},function(t,e,n){var r=n(0),i=n(3);e=function(t){t=i(t),r(t,(function(t){(function(t){return"none"==getComputedStyle(t,"").getPropertyValue("display")})(t)&&(t.style.display=function(t){var e,n;return a[t]||(e=document.createElement(t),document.documentElement.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),a[t]=n),a[t]}(t.nodeName))}))};var a={};t.exports=e},function(t,e,n){var r=n(1),i=n(2),a=n(32),o=n(5),s=n(19),u=n(7),l=n(3),c=n(65),_=n(0);e=function(t,e,n){if(t=l(t),o(n)&&r(e))return function(t,e){return t.style[c(e)]||getComputedStyle(t,"").getPropertyValue(e)}(t[0],e);var p=e;i(p)||((p={})[e]=n),function(t,e){_(t,(function(t){var n=";";_(e,(function(t,e){e=c.dash(e),n+=e+":"+function(t,e){return u(e)&&!s(h,a(t))?e+"px":e}(e,t)+";"})),t.style.cssText+=n}))}(t,p)};var h=["column-count","columns","font-weight","line-weight","opacity","z-index","zoom"];t.exports=e},function(t,e){e=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},t.exports=e},function(t,e,n){var r=n(0);e=function(t){var e=[];return r(t,(function(t){e.push(t)})),e},t.exports=e},function(t,e,n){var r=n(66),i=n(67),a=n(18),o=n(11),s=n(32);(e=r((function(t){if(t=t.replace(l,""),t=i(t),o(c,t))return t;for(var e=u.length;e--;){var n=u[e]+a(t);if(o(c,n))return n}return t}))).dash=r((function(t){var n=e(t);return(l.test(n)?"-":"")+s(n)}));var u=["O","ms","Moz","Webkit"],l=/^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,c=document.createElement("p").style;t.exports=e},function(t,e,n){var r=n(11);e=function(t,e){var n=function(i){var a=n.cache,o=""+(e?e.apply(this,arguments):i);return r(a,o)||(a[o]=t.apply(this,arguments)),a[o]};return n.cache={},n},t.exports=e},function(t,e,n){var r=n(33);function i(t,e){this[e]=t.replace(/\w/,(function(t){return t.toUpperCase()}))}e=function(t){var e=r(t),n=e[0];return e.shift(),e.forEach(i,e),n+e.join("")},t.exports=e},function(t,e,n){var r=n(5),i=n(0),a=n(3);function o(t){return function(e,n){var o=(e=a(e))[0];if(r(n))return o?o[t]:"";o&&i(e,(function(e){e[t]=n}))}}e={html:o("innerHTML"),text:o("textContent"),val:o("value")},t.exports=e},function(t,e){e=function(t){var e=t?t.length:0;if(e)return t[e-1]},t.exports=e},function(t,e,n){var r=n(0),i=n(3);e=function(t){t=i(t),r(t,(function(t){var e=t.parentNode;e&&e.removeChild(t)}))},t.exports=e},function(t,e,n){var r=n(34),i=n(1),a=n(2),o=n(0);n(3),e=function(t,e,n){var s=e;return i(e)&&(s="data-"+e),a(e)&&(s={},o(e,(function(t,e){s["data-"+e]=t}))),r(t,s,n)},t.exports=e},function(t,e,n){var r=n(73),i=n(5),a=n(3),o=n(0);function s(t){return function(e,n,s,u){e=a(e),i(u)&&(u=s,s=void 0),o(e,(function(e){r[t](e,n,s,u)}))}}e={on:s("add"),off:s("remove")},t.exports=e},function(t,e,n){var r=n(13),i=n(19);function a(){return!0}function o(){return!1}function s(t){var n,r=this.events[t.type],i=u.call(this,t,r);t=new e.Event(t);for(var a,o,s=0;(o=i[s++])&&!t.isPropagationStopped();)for(t.curTarget=o.el,a=0;(n=o.handlers[a++])&&!t.isImmediatePropagationStopped();)!1===n.handler.apply(o.el,[t])&&(t.preventDefault(),t.stopPropagation())}function u(t,e){var n,r,a,o,s=t.target,u=[],l=e.delegateCount;if(s.nodeType)for(;s!==this;s=s.parentNode||this){for(r=[],o=0;o<l;o++)void 0===r[n=(a=e[o]).selector+" "]&&(r[n]=i(this.querySelectorAll(n),s)),r[n]&&r.push(a);r.length&&u.push({el:s,handlers:r})}return l<e.length&&u.push({el:this,handlers:e.slice(l)}),u}e={add:function(t,e,n,r){var i,a={selector:n,handler:r};t.events||(t.events={}),(i=t.events[e])||((i=t.events[e]=[]).delegateCount=0,t.addEventListener(e,(function(){s.apply(t,arguments)}),!1)),n?i.splice(i.delegateCount++,0,a):i.push(a)},remove:function(t,e,n,r){var i=t.events;if(i&&i[e])for(var a,o=i[e],s=o.length;s--;)a=o[s],n&&a.selector!=n||a.handler!=r||(o.splice(s,1),a.selector&&o.delegateCount--)},Event:r({className:"Event",initialize:function(t){this.origEvent=t},isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o,preventDefault:function(){var t=this.origEvent;this.isDefaultPrevented=a,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.origEvent;this.isPropagationStopped=a,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.origEvent;this.isImmediatePropagationStopped=a,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}})},t.exports=e},function(t,e,n){var r=n(12),i=n(75),a=n(3),o=n(1),s=n(0);function u(t){return o(t)?t.split(/\s+/):r(t)}e={add:function(t,n){t=a(t);var r=u(n);s(t,(function(t){var n=[];s(r,(function(r){e.has(t,r)||n.push(r)})),0!==n.length&&(t.className+=(t.className?" ":"")+n.join(" "))}))},has:function(t,e){t=a(t);var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return i(t,(function(t){return n.test(t.className)}))},toggle:function(t,n){t=a(t),s(t,(function(t){if(!e.has(t,n))return e.add(t,n);e.remove(t,n)}))},remove:function(t,e){t=a(t);var n=u(e);s(t,(function(t){s(n,(function(e){t.classList.remove(e)}))}))}},t.exports=e},function(t,e,n){var r=n(15),i=n(9),a=n(4);e=function(t,e,n){e=r(e,n);for(var o=!i(t)&&a(t),s=(o||t).length,u=0;u<s;u++){var l=o?o[u]:u;if(e(t[l],l,t))return!0}return!1},t.exports=e},function(t,e,n){var r=n(0),i=n(3);function a(t){return function(e,n){e=i(e),r(e,(function(e){e.insertAdjacentHTML(t,n)}))}}e={before:a("beforebegin"),after:a("afterend"),append:a("beforeend"),prepend:a("afterbegin")},t.exports=e},function(t,e,n){var r=n(27),i=n(78),a=n(14),o=n(19);e=r((function(t,e){return e=i(e),a(t,(function(t){return!o(e,t)}))})),t.exports=e},function(t,e,n){var r=n(8);e=function(t){return function t(e,n){for(var i,a=e.length,o=-1;a--;)i=e[++o],r(i)?t(i,n):n.push(i);return n}(t,[])},t.exports=e},function(t,e){e=function(){},t.exports=e},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(21)),a=function(){function t(){this.id=0,this.visited=[]}return t.prototype.set=function(t,e){var n=this.visited,r=this.id,a={id:r,val:t};return i.default(a,e),n.push(a),this.id++,r},t.prototype.get=function(t){for(var e=this.visited,n=0,r=e.length;n<r;n++){var i=e[n];if(t===i.val)return i}return!1},t}();e.default=a},function(t,e,n){var r=n(82),i=n(83),a=/^\s+|\s+$/g;e=function(t,e){return null==e?t.replace(a,""):r(i(t,e),e)},t.exports=e},function(t,e){var n=/^\s+/;e=function(t,e){if(null==e)return t.replace(n,"");for(var r,i,a=0,o=t.length,s=e.length,u=!0;u&&a<o;)for(u=!1,r=-1,i=t.charAt(a);++r<s;)if(i===e[r]){u=!0,a++;break}return a>=o?"":t.substr(a,o)},t.exports=e},function(t,e){var n=/\s+$/;e=function(t,e){if(null==e)return t.replace(n,"");for(var r,i,a=t.length-1,o=e.length,s=!0;s&&a>=0;)for(s=!1,r=-1,i=t.charAt(a);++r<o;)if(i===e[r]){s=!0,a--;break}return a>=0?t.substring(0,a+1):""},t.exports=e},function(t,e,n){var r=n(4),i=(e=function(t){return o.test(t)?t.replace(s,u):t}).map={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},a="(?:"+r(i).join("|")+")",o=new RegExp(a),s=new RegExp(a,"g"),u=function(t){return i[t]};t.exports=e},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(30)),s=a(n(38)),u=a(n(2)),l=a(n(86)),c=a(n(18)),_=a(n(37)),h=a(n(35)),p=a(n(0)),f=a(n(29)),d=a(n(7)),v=a(n(28)),g=a(n(1)),m=a(n(4)),b=a(n(16)),y=a(n(20)),w=n(36),x="luna-object-viewer-",k=function(t){function e(e){var n=t.call(this)||this;return n.$container=o.default(e),n.$container.addClass("luna-object-viewer"),n.bindEvent(),n}return i(e,t),e.prototype.set=function(t){g.default(t)&&(t=JSON.parse(t)),this.data={id:l.default("json"),enumerable:{0:t}},this.map={},function t(e,n){var r=n.id;if(r||0===r){if(n.type&&s.default(n.type,"Array")&&n.enumerable){var i=function(t,e,n){var r=[],i={};return p.default(t.enumerable,(function(t,e){var n=_.default(e);f.default(n)?i[e]=t:r[n]=t})),r.enumerable=i,r.type=n,r.id=e,t.unenumerable&&(r.unenumerable=t.unenumerable),t.symbol&&(r.symbol=t.symbol),t.proto&&(r.proto=t.proto),r}(n,r,n.type);i.length>100&&(n=function(t){var e=0,n={};p.default(h.default(t,100),(function(t){var r={},i=e;r.type="["+i,r.enumerable={},p.default(t,(function(t){r.enumerable[e]=t,e+=1}));var a=e-1;r.type+=(a-i>0?" … "+a:"")+"]",r.id=l.default("json"),r.jsonSplitArr=!0,n[e]=r}));var r={};return r.enumerable=n,r.id=t.id,r.type=t.type,t.unenumerable&&(r.unenumerable=t.unenumerable),t.symbol&&(r.symbol=t.symbol),t.proto&&(r.proto=t.proto),r}(i))}e[r]=n;var a=[];p.default(["enumerable","unenumerable","symbol"],(function(t){if(n[t])for(var e in n[t])a.push(n[t][e])})),n.proto&&a.push(n.proto);for(var o=0,c=a.length;o<c;o++){var d=a[o];u.default(d)&&t(e,d)}}}(this.map,this.data),this.appendTpl()},e.prototype.objToHtml=function(t,e){var n=this,r="";return p.default(["enumerable","unenumerable","symbol"],(function(i){if(t[i]){var a=m.default(t[i]);a.sort(w.sortObjName);for(var o=0,s=a.length;o<s;o++){var u=a[o];r+=n.createEl(u,t[i][u],i,e)}}})),t.proto&&(""===r?r=this.objToHtml(t.proto):r+=this.createEl("__proto__",t.proto,"proto")),r},e.prototype.createEl=function(t,e,n,r){void 0===r&&(r=!1);var i=typeof e;if(null===e)return"<li>"+_(t)+'<span class="'+x+'null">null</span></li>';if(d.default(e)||v.default(e))return"<li>"+_(t)+'<span class="'+(x+i)+'">'+w.encode(e)+"</span></li>";if("RegExp"===e.type&&(i="regexp"),"Number"===e.type&&(i="number"),"Number"===e.type||"RegExp"===e.type)return"<li>"+_(t)+'<span class="'+(x+i)+'">'+w.encode(e.value)+"</span></li>";if("Undefined"===e.type||"Symbol"===e.type)return"<li>"+_(t)+'<span class="'+x+'special">'+b.default(e.type)+"</span></li>";if("(...)"===e)return"<li>"+_(t)+'<span class="'+x+'special">'+e+"</span></li>";if(u.default(e)){var a=e.id,o=e.reference,s=$(e)||c.default(i),l="<li "+(r?'data-first-level="true"':"")+' data-object-id="'+(o||a)+'"><span class="'+(r?"":x+"expanded "+x+"collapsed")+'"></span>'+_(t)+'<span class="'+x+'open">'+(r?"":s)+'</span><ul class="'+(x+i)+'" '+(r?"":'style="display:none"')+">";return r&&(l+=this.objToHtml(this.map[a])),l+'</ul><span class="'+x+'close"></span></li>'}function _(t){if(r)return"";if(u.default(e)&&e.jsonSplitArr)return"";var i=x+"key";return"unenumerable"!==n&&"proto"!==n&&"symbol"!==n||(i=x+"key-lighter"),'<span class="'+i+'">'+w.encode(t)+"</span>: "}return"<li>"+_(t)+'<span class="'+x+typeof e+'">"'+w.encode(e)+'"</span></li>'},e.prototype.appendTpl=function(){var t=this.map[this.data.id];this.$container.html(this.objToHtml(t,!0))},e.prototype.bindEvent=function(){var t=this;this.$container.on("click","li",(function(e){var n=t.map,r=o.default(this),i=r.data("object-id"),a=o.default(this).find("span").eq(0);if(!r.data("first-level")&&(i&&(r.find("ul").html(t.objToHtml(n[i],!1)),r.rmAttr("data-object-id")),e.stopImmediatePropagation(),a.hasClass(x+"expanded"))){var s=r.find("ul").eq(0);a.hasClass(x+"collapsed")?(a.rmClass(x+"collapsed"),s.show()):(a.addClass(x+"collapsed"),s.hide()),t.emit("change")}}))},e}(y.default);function $(t){var e=t.type,n=t.value;if(e)return"Function"===e?w.getFnAbstract(n):"Array"===e&&t.unenumerable?"Array("+t.unenumerable.length+")":t.type}e.default=k,e.getObjAbstract=$},function(t,e){var n=0;e=function(t){var e=++n+"";return t?t+e:e},t.exports=e},function(t,e,n){}])},function(t,e,n){var r,i;i=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=n(1).Beautifier,i=n(5).Options;t.exports=function(t,e){return new r(t,e).beautify()},t.exports.defaultOptions=function(){return new i}},function(t,e,n){"use strict";var r=n(2).Output,i=n(3).Token,a=n(4),o=n(5).Options,s=n(7).Tokenizer,u=n(7).line_starters,l=n(7).positionable_operators,c=n(7).TOKEN;function _(t,e){return-1!==e.indexOf(t)}function h(t,e){return t&&t.type===c.RESERVED&&t.text===e}function p(t,e){return t&&t.type===c.RESERVED&&_(t.text,e)}var f=["case","return","do","if","throw","else","await","break","continue","async"],d=function(t){for(var e={},n=0;n<t.length;n++)e[t[n].replace(/-/g,"_")]=t[n];return e}(["before-newline","after-newline","preserve-newline"]),v=[d.before_newline,d.preserve_newline],g="BlockStatement",m="Statement",b="ObjectLiteral",y="ArrayLiteral",w="ForInitializer",x="Conditional",k="Expression";function $(t,e){e.multiline_frame||e.mode===w||e.mode===x||t.remove_indent(e.start_line_index)}function O(t){return t===y}function E(t){return _(t,[k,w,x])}function j(t,e){e=e||{},this._source_text=t||"",this._output=null,this._tokens=null,this._last_last_text=null,this._flags=null,this._previous_flags=null,this._flag_store=null,this._options=new o(e)}j.prototype.create_flags=function(t,e){var n=0;return t&&(n=t.indentation_level,!this._output.just_added_newline()&&t.line_indent_level>n&&(n=t.line_indent_level)),{mode:e,parent:t,last_token:t?t.last_token:new i(c.START_BLOCK,""),last_word:t?t.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,alignment:0,line_indent_level:t?t.line_indent_level:n,start_line_index:this._output.get_line_number(),ternary_depth:0}},j.prototype._reset=function(t){var e=t.match(/^[\t ]*/)[0];this._last_last_text="",this._output=new r(this._options,e),this._output.raw=this._options.test_output_raw,this._flag_store=[],this.set_mode(g);var n=new s(t,this._options);return this._tokens=n.tokenize(),t},j.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var t=this._reset(this._source_text),e=this._options.eol;"auto"===this._options.eol&&(e="\n",t&&a.lineBreak.test(t||"")&&(e=t.match(a.lineBreak)[0]));for(var n=this._tokens.next();n;)this.handle_token(n),this._last_last_text=this._flags.last_token.text,this._flags.last_token=n,n=this._tokens.next();return this._output.get_code(e)},j.prototype.handle_token=function(t,e){t.type===c.START_EXPR?this.handle_start_expr(t):t.type===c.END_EXPR?this.handle_end_expr(t):t.type===c.START_BLOCK?this.handle_start_block(t):t.type===c.END_BLOCK?this.handle_end_block(t):t.type===c.WORD||t.type===c.RESERVED?this.handle_word(t):t.type===c.SEMICOLON?this.handle_semicolon(t):t.type===c.STRING?this.handle_string(t):t.type===c.EQUALS?this.handle_equals(t):t.type===c.OPERATOR?this.handle_operator(t):t.type===c.COMMA?this.handle_comma(t):t.type===c.BLOCK_COMMENT?this.handle_block_comment(t,e):t.type===c.COMMENT?this.handle_comment(t,e):t.type===c.DOT?this.handle_dot(t):t.type===c.EOF?this.handle_eof(t):(t.type,c.UNKNOWN,this.handle_unknown(t,e))},j.prototype.handle_whitespace_and_comments=function(t,e){var n=t.newlines,r=this._options.keep_array_indentation&&O(this._flags.mode);if(t.comments_before)for(var i=t.comments_before.next();i;)this.handle_whitespace_and_comments(i,e),this.handle_token(i,e),i=t.comments_before.next();if(r)for(var a=0;a<n;a+=1)this.print_newline(a>0,e);else if(this._options.max_preserve_newlines&&n>this._options.max_preserve_newlines&&(n=this._options.max_preserve_newlines),this._options.preserve_newlines&&n>1){this.print_newline(!1,e);for(var o=1;o<n;o+=1)this.print_newline(!0,e)}};var A=["async","break","continue","return","throw","yield"];j.prototype.allow_wrap_or_preserved_newline=function(t,e){if(e=void 0!==e&&e,!this._output.just_added_newline()){var n=this._options.preserve_newlines&&t.newlines||e;if(_(this._flags.last_token.text,l)||_(t.text,l)){var r=_(this._flags.last_token.text,l)&&_(this._options.operator_position,v)||_(t.text,l);n=n&&r}if(n)this.print_newline(!1,!0);else if(this._options.wrap_line_length){if(p(this._flags.last_token,A))return;this._output.set_wrap_point()}}},j.prototype.print_newline=function(t,e){if(!e&&";"!==this._flags.last_token.text&&","!==this._flags.last_token.text&&"="!==this._flags.last_token.text&&(this._flags.last_token.type!==c.OPERATOR||"--"===this._flags.last_token.text||"++"===this._flags.last_token.text))for(var n=this._tokens.peek();!(this._flags.mode!==m||this._flags.if_block&&h(n,"else")||this._flags.do_block);)this.restore_mode();this._output.add_new_line(t)&&(this._flags.multiline_frame=!0)},j.prototype.print_token_line_indentation=function(t){this._output.just_added_newline()&&(this._options.keep_array_indentation&&t.newlines&&("["===t.text||O(this._flags.mode))?(this._output.current_line.set_indent(-1),this._output.current_line.push(t.whitespace_before),this._output.space_before_token=!1):this._output.set_indent(this._flags.indentation_level,this._flags.alignment)&&(this._flags.line_indent_level=this._flags.indentation_level))},j.prototype.print_token=function(t){if(this._output.raw)this._output.add_raw_token(t);else{if(this._options.comma_first&&t.previous&&t.previous.type===c.COMMA&&this._output.just_added_newline()&&","===this._output.previous_line.last()){var e=this._output.previous_line.pop();this._output.previous_line.is_empty()&&(this._output.previous_line.push(e),this._output.trim(!0),this._output.current_line.pop(),this._output.trim()),this.print_token_line_indentation(t),this._output.add_token(","),this._output.space_before_token=!0}this.print_token_line_indentation(t),this._output.non_breaking_space=!0,this._output.add_token(t.text),this._output.previous_token_wrapped&&(this._flags.multiline_frame=!0)}},j.prototype.indent=function(){this._flags.indentation_level+=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},j.prototype.deindent=function(){this._flags.indentation_level>0&&(!this._flags.parent||this._flags.indentation_level>this._flags.parent.indentation_level)&&(this._flags.indentation_level-=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},j.prototype.set_mode=function(t){this._flags?(this._flag_store.push(this._flags),this._previous_flags=this._flags):this._previous_flags=this.create_flags(null,t),this._flags=this.create_flags(this._previous_flags,t),this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},j.prototype.restore_mode=function(){this._flag_store.length>0&&(this._previous_flags=this._flags,this._flags=this._flag_store.pop(),this._previous_flags.mode===m&&$(this._output,this._previous_flags),this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},j.prototype.start_of_object_property=function(){return this._flags.parent.mode===b&&this._flags.mode===m&&(":"===this._flags.last_token.text&&0===this._flags.ternary_depth||p(this._flags.last_token,["get","set"]))},j.prototype.start_of_statement=function(t){var e=!1;return!!(e=(e=(e=(e=(e=(e=(e=e||p(this._flags.last_token,["var","let","const"])&&t.type===c.WORD)||h(this._flags.last_token,"do"))||!(this._flags.parent.mode===b&&this._flags.mode===m)&&p(this._flags.last_token,A)&&!t.newlines)||h(this._flags.last_token,"else")&&!(h(t,"if")&&!t.comments_before))||this._flags.last_token.type===c.END_EXPR&&(this._previous_flags.mode===w||this._previous_flags.mode===x))||this._flags.last_token.type===c.WORD&&this._flags.mode===g&&!this._flags.in_case&&!("--"===t.text||"++"===t.text)&&"function"!==this._last_last_text&&t.type!==c.WORD&&t.type!==c.RESERVED)||this._flags.mode===b&&(":"===this._flags.last_token.text&&0===this._flags.ternary_depth||p(this._flags.last_token,["get","set"])))&&(this.set_mode(m),this.indent(),this.handle_whitespace_and_comments(t,!0),this.start_of_object_property()||this.allow_wrap_or_preserved_newline(t,p(t,["do","for","if","while"])),!0)},j.prototype.handle_start_expr=function(t){this.start_of_statement(t)||this.handle_whitespace_and_comments(t);var e=k;if("["===t.text){if(this._flags.last_token.type===c.WORD||")"===this._flags.last_token.text)return p(this._flags.last_token,u)&&(this._output.space_before_token=!0),this.print_token(t),this.set_mode(e),this.indent(),void(this._options.space_in_paren&&(this._output.space_before_token=!0));e=y,O(this._flags.mode)&&("["!==this._flags.last_token.text&&(","!==this._flags.last_token.text||"]"!==this._last_last_text&&"}"!==this._last_last_text)||this._options.keep_array_indentation||this.print_newline()),_(this._flags.last_token.type,[c.START_EXPR,c.END_EXPR,c.WORD,c.OPERATOR])||(this._output.space_before_token=!0)}else{if(this._flags.last_token.type===c.RESERVED)"for"===this._flags.last_token.text?(this._output.space_before_token=this._options.space_before_conditional,e=w):_(this._flags.last_token.text,["if","while"])?(this._output.space_before_token=this._options.space_before_conditional,e=x):_(this._flags.last_word,["await","async"])?this._output.space_before_token=!0:"import"===this._flags.last_token.text&&""===t.whitespace_before?this._output.space_before_token=!1:(_(this._flags.last_token.text,u)||"catch"===this._flags.last_token.text)&&(this._output.space_before_token=!0);else if(this._flags.last_token.type===c.EQUALS||this._flags.last_token.type===c.OPERATOR)this.start_of_object_property()||this.allow_wrap_or_preserved_newline(t);else if(this._flags.last_token.type===c.WORD){this._output.space_before_token=!1;var n=this._tokens.peek(-3);if(this._options.space_after_named_function&&n){var r=this._tokens.peek(-4);p(n,["async","function"])||"*"===n.text&&p(r,["async","function"])?this._output.space_before_token=!0:this._flags.mode===b&&("{"!==n.text&&","!==n.text&&("*"!==n.text||"{"!==r.text&&","!==r.text)||(this._output.space_before_token=!0))}}else this.allow_wrap_or_preserved_newline(t);(this._flags.last_token.type===c.RESERVED&&("function"===this._flags.last_word||"typeof"===this._flags.last_word)||"*"===this._flags.last_token.text&&(_(this._last_last_text,["function","yield"])||this._flags.mode===b&&_(this._last_last_text,["{",","])))&&(this._output.space_before_token=this._options.space_after_anon_function)}";"===this._flags.last_token.text||this._flags.last_token.type===c.START_BLOCK?this.print_newline():this._flags.last_token.type!==c.END_EXPR&&this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.END_BLOCK&&"."!==this._flags.last_token.text&&this._flags.last_token.type!==c.COMMA||this.allow_wrap_or_preserved_newline(t,t.newlines),this.print_token(t),this.set_mode(e),this._options.space_in_paren&&(this._output.space_before_token=!0),this.indent()},j.prototype.handle_end_expr=function(t){for(;this._flags.mode===m;)this.restore_mode();this.handle_whitespace_and_comments(t),this._flags.multiline_frame&&this.allow_wrap_or_preserved_newline(t,"]"===t.text&&O(this._flags.mode)&&!this._options.keep_array_indentation),this._options.space_in_paren&&(this._flags.last_token.type!==c.START_EXPR||this._options.space_in_empty_paren?this._output.space_before_token=!0:(this._output.trim(),this._output.space_before_token=!1)),this.deindent(),this.print_token(t),this.restore_mode(),$(this._output,this._previous_flags),this._flags.do_while&&this._previous_flags.mode===x&&(this._previous_flags.mode=k,this._flags.do_block=!1,this._flags.do_while=!1)},j.prototype.handle_start_block=function(t){this.handle_whitespace_and_comments(t);var e=this._tokens.peek(),n=this._tokens.peek(1);"switch"===this._flags.last_word&&this._flags.last_token.type===c.END_EXPR?(this.set_mode(g),this._flags.in_case_statement=!0):this._flags.case_body?this.set_mode(g):n&&(_(n.text,[":",","])&&_(e.type,[c.STRING,c.WORD,c.RESERVED])||_(e.text,["get","set","..."])&&_(n.type,[c.WORD,c.RESERVED]))?_(this._last_last_text,["class","interface"])?this.set_mode(g):this.set_mode(b):this._flags.last_token.type===c.OPERATOR&&"=>"===this._flags.last_token.text?this.set_mode(g):_(this._flags.last_token.type,[c.EQUALS,c.START_EXPR,c.COMMA,c.OPERATOR])||p(this._flags.last_token,["return","throw","import","default"])?this.set_mode(b):this.set_mode(g);var r=!e.comments_before&&"}"===e.text,i=r&&"function"===this._flags.last_word&&this._flags.last_token.type===c.END_EXPR;if(this._options.brace_preserve_inline){var a=0,o=null;this._flags.inline_frame=!0;do{if(a+=1,(o=this._tokens.peek(a-1)).newlines){this._flags.inline_frame=!1;break}}while(o.type!==c.EOF&&(o.type!==c.END_BLOCK||o.opened!==t))}("expand"===this._options.brace_style||"none"===this._options.brace_style&&t.newlines)&&!this._flags.inline_frame?this._flags.last_token.type!==c.OPERATOR&&(i||this._flags.last_token.type===c.EQUALS||p(this._flags.last_token,f)&&"else"!==this._flags.last_token.text)?this._output.space_before_token=!0:this.print_newline(!1,!0):(!O(this._previous_flags.mode)||this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.COMMA||((this._flags.last_token.type===c.COMMA||this._options.space_in_paren)&&(this._output.space_before_token=!0),(this._flags.last_token.type===c.COMMA||this._flags.last_token.type===c.START_EXPR&&this._flags.inline_frame)&&(this.allow_wrap_or_preserved_newline(t),this._previous_flags.multiline_frame=this._previous_flags.multiline_frame||this._flags.multiline_frame,this._flags.multiline_frame=!1)),this._flags.last_token.type!==c.OPERATOR&&this._flags.last_token.type!==c.START_EXPR&&(this._flags.last_token.type!==c.START_BLOCK||this._flags.inline_frame?this._output.space_before_token=!0:this.print_newline())),this.print_token(t),this.indent(),r||this._options.brace_preserve_inline&&this._flags.inline_frame||this.print_newline()},j.prototype.handle_end_block=function(t){for(this.handle_whitespace_and_comments(t);this._flags.mode===m;)this.restore_mode();var e=this._flags.last_token.type===c.START_BLOCK;this._flags.inline_frame&&!e?this._output.space_before_token=!0:"expand"===this._options.brace_style?e||this.print_newline():e||(O(this._flags.mode)&&this._options.keep_array_indentation?(this._options.keep_array_indentation=!1,this.print_newline(),this._options.keep_array_indentation=!0):this.print_newline()),this.restore_mode(),this.print_token(t)},j.prototype.handle_word=function(t){if(t.type===c.RESERVED&&(_(t.text,["set","get"])&&this._flags.mode!==b||"import"===t.text&&"("===this._tokens.peek().text||_(t.text,["as","from"])&&!this._flags.import_block||this._flags.mode===b&&":"===this._tokens.peek().text)&&(t.type=c.WORD),this.start_of_statement(t)?p(this._flags.last_token,["var","let","const"])&&t.type===c.WORD&&(this._flags.declaration_statement=!0):!t.newlines||E(this._flags.mode)||this._flags.last_token.type===c.OPERATOR&&"--"!==this._flags.last_token.text&&"++"!==this._flags.last_token.text||this._flags.last_token.type===c.EQUALS||!this._options.preserve_newlines&&p(this._flags.last_token,["var","let","const","set","get"])?this.handle_whitespace_and_comments(t):(this.handle_whitespace_and_comments(t),this.print_newline()),this._flags.do_block&&!this._flags.do_while){if(h(t,"while"))return this._output.space_before_token=!0,this.print_token(t),this._output.space_before_token=!0,void(this._flags.do_while=!0);this.print_newline(),this._flags.do_block=!1}if(this._flags.if_block)if(!this._flags.else_block&&h(t,"else"))this._flags.else_block=!0;else{for(;this._flags.mode===m;)this.restore_mode();this._flags.if_block=!1,this._flags.else_block=!1}if(this._flags.in_case_statement&&p(t,["case","default"]))return this.print_newline(),this._flags.last_token.type!==c.END_BLOCK&&(this._flags.case_body||this._options.jslint_happy)&&this.deindent(),this._flags.case_body=!1,this.print_token(t),void(this._flags.in_case=!0);if(this._flags.last_token.type!==c.COMMA&&this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.EQUALS&&this._flags.last_token.type!==c.OPERATOR||this.start_of_object_property()||this.allow_wrap_or_preserved_newline(t),h(t,"function"))return(_(this._flags.last_token.text,["}",";"])||this._output.just_added_newline()&&!_(this._flags.last_token.text,["(","[","{",":","=",","])&&this._flags.last_token.type!==c.OPERATOR)&&(this._output.just_added_blankline()||t.comments_before||(this.print_newline(),this.print_newline(!0))),this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD?p(this._flags.last_token,["get","set","new","export"])||p(this._flags.last_token,A)||h(this._flags.last_token,"default")&&"export"===this._last_last_text||"declare"===this._flags.last_token.text?this._output.space_before_token=!0:this.print_newline():this._flags.last_token.type===c.OPERATOR||"="===this._flags.last_token.text?this._output.space_before_token=!0:(this._flags.multiline_frame||!E(this._flags.mode)&&!O(this._flags.mode))&&this.print_newline(),this.print_token(t),void(this._flags.last_word=t.text);var e="NONE";this._flags.last_token.type===c.END_BLOCK?this._previous_flags.inline_frame?e="SPACE":p(t,["else","catch","finally","from"])?"expand"===this._options.brace_style||"end-expand"===this._options.brace_style||"none"===this._options.brace_style&&t.newlines?e="NEWLINE":(e="SPACE",this._output.space_before_token=!0):e="NEWLINE":this._flags.last_token.type===c.SEMICOLON&&this._flags.mode===g?e="NEWLINE":this._flags.last_token.type===c.SEMICOLON&&E(this._flags.mode)?e="SPACE":this._flags.last_token.type===c.STRING?e="NEWLINE":this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD||"*"===this._flags.last_token.text&&(_(this._last_last_text,["function","yield"])||this._flags.mode===b&&_(this._last_last_text,["{",","]))?e="SPACE":this._flags.last_token.type===c.START_BLOCK?e=this._flags.inline_frame?"SPACE":"NEWLINE":this._flags.last_token.type===c.END_EXPR&&(this._output.space_before_token=!0,e="NEWLINE"),p(t,u)&&")"!==this._flags.last_token.text&&(e=this._flags.inline_frame||"else"===this._flags.last_token.text||"export"===this._flags.last_token.text?"SPACE":"NEWLINE"),p(t,["else","catch","finally"])?(this._flags.last_token.type!==c.END_BLOCK||this._previous_flags.mode!==g||"expand"===this._options.brace_style||"end-expand"===this._options.brace_style||"none"===this._options.brace_style&&t.newlines)&&!this._flags.inline_frame?this.print_newline():(this._output.trim(!0),"}"!==this._output.current_line.last()&&this.print_newline(),this._output.space_before_token=!0):"NEWLINE"===e?p(this._flags.last_token,f)||"declare"===this._flags.last_token.text&&p(t,["var","let","const"])?this._output.space_before_token=!0:this._flags.last_token.type!==c.END_EXPR?this._flags.last_token.type===c.START_EXPR&&p(t,["var","let","const"])||":"===this._flags.last_token.text||(h(t,"if")&&h(t.previous,"else")?this._output.space_before_token=!0:this.print_newline()):p(t,u)&&")"!==this._flags.last_token.text&&this.print_newline():this._flags.multiline_frame&&O(this._flags.mode)&&","===this._flags.last_token.text&&"}"===this._last_last_text?this.print_newline():"SPACE"===e&&(this._output.space_before_token=!0),!t.previous||t.previous.type!==c.WORD&&t.previous.type!==c.RESERVED||(this._output.space_before_token=!0),this.print_token(t),this._flags.last_word=t.text,t.type===c.RESERVED&&("do"===t.text?this._flags.do_block=!0:"if"===t.text?this._flags.if_block=!0:"import"===t.text?this._flags.import_block=!0:this._flags.import_block&&h(t,"from")&&(this._flags.import_block=!1))},j.prototype.handle_semicolon=function(t){this.start_of_statement(t)?this._output.space_before_token=!1:this.handle_whitespace_and_comments(t);for(var e=this._tokens.peek();!(this._flags.mode!==m||this._flags.if_block&&h(e,"else")||this._flags.do_block);)this.restore_mode();this._flags.import_block&&(this._flags.import_block=!1),this.print_token(t)},j.prototype.handle_string=function(t){this.start_of_statement(t)?this._output.space_before_token=!0:(this.handle_whitespace_and_comments(t),this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD||this._flags.inline_frame?this._output.space_before_token=!0:this._flags.last_token.type===c.COMMA||this._flags.last_token.type===c.START_EXPR||this._flags.last_token.type===c.EQUALS||this._flags.last_token.type===c.OPERATOR?this.start_of_object_property()||this.allow_wrap_or_preserved_newline(t):this.print_newline()),this.print_token(t)},j.prototype.handle_equals=function(t){this.start_of_statement(t)||this.handle_whitespace_and_comments(t),this._flags.declaration_statement&&(this._flags.declaration_assignment=!0),this._output.space_before_token=!0,this.print_token(t),this._output.space_before_token=!0},j.prototype.handle_comma=function(t){this.handle_whitespace_and_comments(t,!0),this.print_token(t),this._output.space_before_token=!0,this._flags.declaration_statement?(E(this._flags.parent.mode)&&(this._flags.declaration_assignment=!1),this._flags.declaration_assignment?(this._flags.declaration_assignment=!1,this.print_newline(!1,!0)):this._options.comma_first&&this.allow_wrap_or_preserved_newline(t)):this._flags.mode===b||this._flags.mode===m&&this._flags.parent.mode===b?(this._flags.mode===m&&this.restore_mode(),this._flags.inline_frame||this.print_newline()):this._options.comma_first&&this.allow_wrap_or_preserved_newline(t)},j.prototype.handle_operator=function(t){var e="*"===t.text&&(p(this._flags.last_token,["function","yield"])||_(this._flags.last_token.type,[c.START_BLOCK,c.COMMA,c.END_BLOCK,c.SEMICOLON])),n=_(t.text,["-","+"])&&(_(this._flags.last_token.type,[c.START_BLOCK,c.START_EXPR,c.EQUALS,c.OPERATOR])||_(this._flags.last_token.text,u)||","===this._flags.last_token.text);if(this.start_of_statement(t));else{var r=!e;this.handle_whitespace_and_comments(t,r)}if(p(this._flags.last_token,f))return this._output.space_before_token=!0,void this.print_token(t);if("*"!==t.text||this._flags.last_token.type!==c.DOT)if("::"!==t.text){if(this._flags.last_token.type===c.OPERATOR&&_(this._options.operator_position,v)&&this.allow_wrap_or_preserved_newline(t),":"===t.text&&this._flags.in_case)return this.print_token(t),this._flags.in_case=!1,this._flags.case_body=!0,void(this._tokens.peek().type!==c.START_BLOCK?(this.indent(),this.print_newline()):this._output.space_before_token=!0);var i=!0,a=!0,o=!1;if(":"===t.text?0===this._flags.ternary_depth?i=!1:(this._flags.ternary_depth-=1,o=!0):"?"===t.text&&(this._flags.ternary_depth+=1),!n&&!e&&this._options.preserve_newlines&&_(t.text,l)){var s=":"===t.text,h=s&&o,b=s&&!o;switch(this._options.operator_position){case d.before_newline:return this._output.space_before_token=!b,this.print_token(t),s&&!h||this.allow_wrap_or_preserved_newline(t),void(this._output.space_before_token=!0);case d.after_newline:return this._output.space_before_token=!0,!s||h?this._tokens.peek().newlines?this.print_newline(!1,!0):this.allow_wrap_or_preserved_newline(t):this._output.space_before_token=!1,this.print_token(t),void(this._output.space_before_token=!0);case d.preserve_newline:return b||this.allow_wrap_or_preserved_newline(t),i=!(this._output.just_added_newline()||b),this._output.space_before_token=i,this.print_token(t),void(this._output.space_before_token=!0)}}if(e){this.allow_wrap_or_preserved_newline(t),i=!1;var y=this._tokens.peek();a=y&&_(y.type,[c.WORD,c.RESERVED])}else"..."===t.text?(this.allow_wrap_or_preserved_newline(t),i=this._flags.last_token.type===c.START_BLOCK,a=!1):(_(t.text,["--","++","!","~"])||n)&&(this._flags.last_token.type!==c.COMMA&&this._flags.last_token.type!==c.START_EXPR||this.allow_wrap_or_preserved_newline(t),i=!1,a=!1,!t.newlines||"--"!==t.text&&"++"!==t.text||this.print_newline(!1,!0),";"===this._flags.last_token.text&&E(this._flags.mode)&&(i=!0),this._flags.last_token.type===c.RESERVED?i=!0:this._flags.last_token.type===c.END_EXPR?i=!("]"===this._flags.last_token.text&&("--"===t.text||"++"===t.text)):this._flags.last_token.type===c.OPERATOR&&(i=_(t.text,["--","-","++","+"])&&_(this._flags.last_token.text,["--","-","++","+"]),_(t.text,["+","-"])&&_(this._flags.last_token.text,["--","++"])&&(a=!0)),(this._flags.mode!==g||this._flags.inline_frame)&&this._flags.mode!==m||"{"!==this._flags.last_token.text&&";"!==this._flags.last_token.text||this.print_newline());this._output.space_before_token=this._output.space_before_token||i,this.print_token(t),this._output.space_before_token=a}else this.print_token(t);else this.print_token(t)},j.prototype.handle_block_comment=function(t,e){return this._output.raw?(this._output.add_raw_token(t),void(t.directives&&"end"===t.directives.preserve&&(this._output.raw=this._options.test_output_raw))):t.directives?(this.print_newline(!1,e),this.print_token(t),"start"===t.directives.preserve&&(this._output.raw=!0),void this.print_newline(!1,!0)):a.newline.test(t.text)||t.newlines?void this.print_block_commment(t,e):(this._output.space_before_token=!0,this.print_token(t),void(this._output.space_before_token=!0))},j.prototype.print_block_commment=function(t,e){var n,r=function(t){for(var e=[],n=(t=t.replace(a.allLineBreaks,"\n")).indexOf("\n");-1!==n;)e.push(t.substring(0,n)),n=(t=t.substring(n+1)).indexOf("\n");return t.length&&e.push(t),e}(t.text),i=!1,o=!1,s=t.whitespace_before,u=s.length;if(this.print_newline(!1,e),this.print_token_line_indentation(t),this._output.add_token(r[0]),this.print_newline(!1,e),r.length>1){for(i=function(t,e){for(var n=0;n<t.length;n++)if(t[n].trim().charAt(0)!==e)return!1;return!0}(r=r.slice(1),"*"),o=function(t,e){for(var n,r=0,i=t.length;r<i;r++)if((n=t[r])&&0!==n.indexOf(e))return!1;return!0}(r,s),i&&(this._flags.alignment=1),n=0;n<r.length;n++)i?(this.print_token_line_indentation(t),this._output.add_token(r[n].replace(/^\s+/g,""))):o&&r[n]?(this.print_token_line_indentation(t),this._output.add_token(r[n].substring(u))):(this._output.current_line.set_indent(-1),this._output.add_token(r[n])),this.print_newline(!1,e);this._flags.alignment=0}},j.prototype.handle_comment=function(t,e){t.newlines?this.print_newline(!1,e):this._output.trim(!0),this._output.space_before_token=!0,this.print_token(t),this.print_newline(!1,e)},j.prototype.handle_dot=function(t){this.start_of_statement(t)||this.handle_whitespace_and_comments(t,!0),p(this._flags.last_token,f)?this._output.space_before_token=!1:this.allow_wrap_or_preserved_newline(t,")"===this._flags.last_token.text&&this._options.break_chained_methods),this._options.unindent_chained_methods&&this._output.just_added_newline()&&this.deindent(),this.print_token(t)},j.prototype.handle_unknown=function(t,e){this.print_token(t),"\n"===t.text[t.text.length-1]&&this.print_newline(!1,e)},j.prototype.handle_eof=function(t){for(;this._flags.mode===m;)this.restore_mode();this.handle_whitespace_and_comments(t)},t.exports.Beautifier=j},function(t,e,n){"use strict";function r(t){this.__parent=t,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(t,e){this.__cache=[""],this.__indent_size=t.indent_size,this.__indent_string=t.indent_char,t.indent_with_tabs||(this.__indent_string=new Array(t.indent_size+1).join(t.indent_char)),e=e||"",t.indent_level>0&&(e=new Array(t.indent_level+1).join(this.__indent_string)),this.__base_string=e,this.__base_string_length=e.length}function a(t,e){this.__indent_cache=new i(t,e),this.raw=!1,this._end_with_newline=t.end_with_newline,this.indent_size=t.indent_size,this.wrap_line_length=t.wrap_line_length,this.indent_empty_lines=t.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var t=new r(this.__parent);return t.set_indent(this.__indent_count,this.__alignment_count),t},r.prototype.item=function(t){return t<0?this.__items[this.__items.length+t]:this.__items[t]},r.prototype.has_match=function(t){for(var e=this.__items.length-1;e>=0;e--)if(this.__items[e].match(t))return!0;return!1},r.prototype.set_indent=function(t,e){this.is_empty()&&(this.__indent_count=t||0,this.__alignment_count=e||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var t=this.__parent.current_line;return t.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),t.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),t.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===t.__items[0]&&(t.__items.splice(0,1),t.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(t){this.__items.push(t);var e=t.lastIndexOf("\n");-1!==e?this.__character_count=t.length-e:this.__character_count+=t.length},r.prototype.pop=function(){var t=null;return this.is_empty()||(t=this.__items.pop(),this.__character_count-=t.length),t},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var t="";return this.is_empty()?this.__parent.indent_empty_lines&&(t=this.__parent.get_indent_string(this.__indent_count)):(t=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),t+=this.__items.join("")),t},i.prototype.get_indent_size=function(t,e){var n=this.__base_string_length;return e=e||0,t<0&&(n=0),n+=t*this.__indent_size,n+=e},i.prototype.get_indent_string=function(t,e){var n=this.__base_string;return e=e||0,t<0&&(t=0,n=""),e+=t*this.__indent_size,this.__ensure_cache(e),n+=this.__cache[e]},i.prototype.__ensure_cache=function(t){for(;t>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var t=this.__cache.length,e=0,n="";this.__indent_size&&t>=this.__indent_size&&(t-=(e=Math.floor(t/this.__indent_size))*this.__indent_size,n=new Array(e+1).join(this.__indent_string)),t&&(n+=new Array(t+1).join(" ")),this.__cache.push(n)},a.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},a.prototype.get_line_number=function(){return this.__lines.length},a.prototype.get_indent_string=function(t,e){return this.__indent_cache.get_indent_string(t,e)},a.prototype.get_indent_size=function(t,e){return this.__indent_cache.get_indent_size(t,e)},a.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},a.prototype.add_new_line=function(t){return!(this.is_empty()||!t&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},a.prototype.get_code=function(t){this.trim(!0);var e=this.current_line.pop();e&&("\n"===e[e.length-1]&&(e=e.replace(/\n+$/g,"")),this.current_line.push(e)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==t&&(n=n.replace(/[\n]/g,t)),n},a.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},a.prototype.set_indent=function(t,e){return t=t||0,e=e||0,this.next_line.set_indent(t,e),this.__lines.length>1?(this.current_line.set_indent(t,e),!0):(this.current_line.set_indent(),!1)},a.prototype.add_raw_token=function(t){for(var e=0;e<t.newlines;e++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(t.whitespace_before),this.current_line.push(t.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},a.prototype.add_token=function(t){this.__add_space_before_token(),this.current_line.push(t),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},a.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},a.prototype.remove_indent=function(t){for(var e=this.__lines.length;t<e;)this.__lines[t]._remove_indent(),t++;this.current_line._remove_wrap_indent()},a.prototype.trim=function(t){for(t=void 0!==t&&t,this.current_line.trim();t&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},a.prototype.just_added_newline=function(){return this.current_line.is_empty()},a.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},a.prototype.ensure_empty_line_above=function(t,e){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(t)&&i.item(-1)!==e){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},t.exports.Output=a},function(t,e,n){"use strict";t.exports.Token=function(t,e,n,r){this.type=t,this.text=e,this.comments_before=null,this.newlines=n||0,this.whitespace_before=r||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}},function(t,e,n){"use strict";var r="\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",i="\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",a="(?:\\\\u[0-9a-fA-F]{4}|[\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a"+r+"])";e.identifier=new RegExp(a+"(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])*","g"),e.identifierStart=new RegExp(a),e.identifierMatch=new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a"+r+i+"])+"),e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g")},function(t,e,n){"use strict";var r=n(6).Options,i=["before-newline","after-newline","preserve-newline"];function a(t){r.call(this,t,"js");var e=this.raw_options.brace_style||null;"expand-strict"===e?this.raw_options.brace_style="expand":"collapse-preserve-inline"===e?this.raw_options.brace_style="collapse,preserve-inline":void 0!==this.raw_options.braces_on_own_line&&(this.raw_options.brace_style=this.raw_options.braces_on_own_line?"expand":"collapse");var n=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_preserve_inline=!1,this.brace_style="collapse";for(var a=0;a<n.length;a++)"preserve-inline"===n[a]?this.brace_preserve_inline=!0:this.brace_style=n[a];this.unindent_chained_methods=this._get_boolean("unindent_chained_methods"),this.break_chained_methods=this._get_boolean("break_chained_methods"),this.space_in_paren=this._get_boolean("space_in_paren"),this.space_in_empty_paren=this._get_boolean("space_in_empty_paren"),this.jslint_happy=this._get_boolean("jslint_happy"),this.space_after_anon_function=this._get_boolean("space_after_anon_function"),this.space_after_named_function=this._get_boolean("space_after_named_function"),this.keep_array_indentation=this._get_boolean("keep_array_indentation"),this.space_before_conditional=this._get_boolean("space_before_conditional",!0),this.unescape_strings=this._get_boolean("unescape_strings"),this.e4x=this._get_boolean("e4x"),this.comma_first=this._get_boolean("comma_first"),this.operator_position=this._get_selection("operator_position",i),this.test_output_raw=this._get_boolean("test_output_raw"),this.jslint_happy&&(this.space_after_anon_function=!0)}a.prototype=new r,t.exports.Options=a},function(t,e,n){"use strict";function r(t,e){this.raw_options=i(t,e),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(t,e){var n,r={};for(n in t=a(t))n!==e&&(r[n]=t[n]);if(e&&t[e])for(n in t[e])r[n]=t[e][n];return r}function a(t){var e,n={};for(e in t)n[e.replace(/-/g,"_")]=t[e];return n}r.prototype._get_array=function(t,e){var n=this.raw_options[t],r=e||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(t,e){var n=this.raw_options[t];return void 0===n?!!e:!!n},r.prototype._get_characters=function(t,e){var n=this.raw_options[t],r=e||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(t,e){var n=this.raw_options[t];e=parseInt(e,10),isNaN(e)&&(e=0);var r=parseInt(n,10);return isNaN(r)&&(r=e),r},r.prototype._get_selection=function(t,e,n){var r=this._get_selection_list(t,e,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+t+"' can only be one of the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r[0]},r.prototype._get_selection_list=function(t,e,n){if(!e||0===e.length)throw new Error("Selection list cannot be empty.");if(n=n||[e[0]],!this._is_valid_selection(n,e))throw new Error("Invalid Default Value!");var r=this._get_array(t,n);if(!this._is_valid_selection(r,e))throw new Error("Invalid Option Value: The option '"+t+"' can contain only the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r},r.prototype._is_valid_selection=function(t,e){return t.length&&e.length&&!t.some((function(t){return-1===e.indexOf(t)}))},t.exports.Options=r,t.exports.normalizeOpts=a,t.exports.mergeOpts=i},function(t,e,n){"use strict";var r=n(8).InputScanner,i=n(9).Tokenizer,a=n(9).TOKEN,o=n(13).Directives,s=n(4),u=n(12).Pattern,l=n(14).TemplatablePattern;function c(t,e){return-1!==e.indexOf(t)}var _={START_EXPR:"TK_START_EXPR",END_EXPR:"TK_END_EXPR",START_BLOCK:"TK_START_BLOCK",END_BLOCK:"TK_END_BLOCK",WORD:"TK_WORD",RESERVED:"TK_RESERVED",SEMICOLON:"TK_SEMICOLON",STRING:"TK_STRING",EQUALS:"TK_EQUALS",OPERATOR:"TK_OPERATOR",COMMA:"TK_COMMA",BLOCK_COMMENT:"TK_BLOCK_COMMENT",COMMENT:"TK_COMMENT",DOT:"TK_DOT",UNKNOWN:"TK_UNKNOWN",START:a.START,RAW:a.RAW,EOF:a.EOF},h=new o(/\/\*/,/\*\//),p=/0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/,f=/[0-9]/,d=/[^\d\.]/,v=">>> === !== << && >= ** != == <= >> || |> < / - + > : & % ? ^ | *".split(" "),g=">>>= ... >>= <<= === >>> !== **= => ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";g=(g="\\?\\.(?!\\d) "+(g=g.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"))).replace(/ /g,"|");var m,b=new RegExp(g),y="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),w=y.concat(["do","in","of","else","get","set","new","catch","finally","typeof","yield","async","await","from","as"]),x=new RegExp("^(?:"+w.join("|")+")$"),k=function(t,e){i.call(this,t,e),this._patterns.whitespace=this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,/\u2028\u2029/.source);var n=new u(this._input),r=new l(this._input).read_options(this._options);this.__patterns={template:r,identifier:r.starting_with(s.identifier).matching(s.identifierMatch),number:n.matching(p),punct:n.matching(b),comment:n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),block_comment:n.starting_with(/\/\*/).until_after(/\*\//),html_comment_start:n.matching(/<!--/),html_comment_end:n.matching(/-->/),include:n.starting_with(/#include/).until_after(s.lineBreak),shebang:n.starting_with(/#!/).until_after(s.lineBreak),xml:n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),single_quote:r.until(/['\\\n\r\u2028\u2029]/),double_quote:r.until(/["\\\n\r\u2028\u2029]/),template_text:r.until(/[`\\$]/),template_expression:r.until(/[`}\\]/)}};(k.prototype=new i)._is_comment=function(t){return t.type===_.COMMENT||t.type===_.BLOCK_COMMENT||t.type===_.UNKNOWN},k.prototype._is_opening=function(t){return t.type===_.START_BLOCK||t.type===_.START_EXPR},k.prototype._is_closing=function(t,e){return(t.type===_.END_BLOCK||t.type===_.END_EXPR)&&e&&("]"===t.text&&"["===e.text||")"===t.text&&"("===e.text||"}"===t.text&&"{"===e.text)},k.prototype._reset=function(){m=!1},k.prototype._get_next_token=function(t,e){var n=null;this._readWhitespace();var r=this._input.peek();return null===r?this._create_token(_.EOF,""):n=(n=(n=(n=(n=(n=(n=(n=(n=n||this._read_non_javascript(r))||this._read_string(r))||this._read_word(t))||this._read_singles(r))||this._read_comment(r))||this._read_regexp(r,t))||this._read_xml(r,t))||this._read_punctuation())||this._create_token(_.UNKNOWN,this._input.next())},k.prototype._read_word=function(t){var e;return""!==(e=this.__patterns.identifier.read())?(e=e.replace(s.allLineBreaks,"\n"),t.type!==_.DOT&&(t.type!==_.RESERVED||"set"!==t.text&&"get"!==t.text)&&x.test(e)?"in"===e||"of"===e?this._create_token(_.OPERATOR,e):this._create_token(_.RESERVED,e):this._create_token(_.WORD,e)):""!==(e=this.__patterns.number.read())?this._create_token(_.WORD,e):void 0},k.prototype._read_singles=function(t){var e=null;return"("===t||"["===t?e=this._create_token(_.START_EXPR,t):")"===t||"]"===t?e=this._create_token(_.END_EXPR,t):"{"===t?e=this._create_token(_.START_BLOCK,t):"}"===t?e=this._create_token(_.END_BLOCK,t):";"===t?e=this._create_token(_.SEMICOLON,t):"."===t&&d.test(this._input.peek(1))?e=this._create_token(_.DOT,t):","===t&&(e=this._create_token(_.COMMA,t)),e&&this._input.next(),e},k.prototype._read_punctuation=function(){var t=this.__patterns.punct.read();if(""!==t)return"="===t?this._create_token(_.EQUALS,t):"?."===t?this._create_token(_.DOT,t):this._create_token(_.OPERATOR,t)},k.prototype._read_non_javascript=function(t){var e="";if("#"===t){if(this._is_first_token()&&(e=this.__patterns.shebang.read()))return this._create_token(_.UNKNOWN,e.trim()+"\n");if(e=this.__patterns.include.read())return this._create_token(_.UNKNOWN,e.trim()+"\n");t=this._input.next();var n="#";if(this._input.hasNext()&&this._input.testChar(f)){do{n+=t=this._input.next()}while(this._input.hasNext()&&"#"!==t&&"="!==t);return"#"===t||("["===this._input.peek()&&"]"===this._input.peek(1)?(n+="[]",this._input.next(),this._input.next()):"{"===this._input.peek()&&"}"===this._input.peek(1)&&(n+="{}",this._input.next(),this._input.next())),this._create_token(_.WORD,n)}this._input.back()}else if("<"===t&&this._is_first_token()){if(e=this.__patterns.html_comment_start.read()){for(;this._input.hasNext()&&!this._input.testChar(s.newline);)e+=this._input.next();return m=!0,this._create_token(_.COMMENT,e)}}else if(m&&"-"===t&&(e=this.__patterns.html_comment_end.read()))return m=!1,this._create_token(_.COMMENT,e);return null},k.prototype._read_comment=function(t){var e=null;if("/"===t){var n="";if("*"===this._input.peek(1)){n=this.__patterns.block_comment.read();var r=h.get_directives(n);r&&"start"===r.ignore&&(n+=h.readIgnored(this._input)),n=n.replace(s.allLineBreaks,"\n"),(e=this._create_token(_.BLOCK_COMMENT,n)).directives=r}else"/"===this._input.peek(1)&&(n=this.__patterns.comment.read(),e=this._create_token(_.COMMENT,n))}return e},k.prototype._read_string=function(t){if("`"===t||"'"===t||'"'===t){var e=this._input.next();return this.has_char_escapes=!1,e+="`"===t?this._read_string_recursive("`",!0,"${"):this._read_string_recursive(t),this.has_char_escapes&&this._options.unescape_strings&&(e=function(t){for(var e="",n=0,i=new r(t),a=null;i.hasNext();)if((a=i.match(/([\s]|[^\\]|\\\\)+/g))&&(e+=a[0]),"\\"===i.peek()){if(i.next(),"x"===i.peek())a=i.match(/x([0-9A-Fa-f]{2})/g);else{if("u"!==i.peek()){e+="\\",i.hasNext()&&(e+=i.next());continue}a=i.match(/u([0-9A-Fa-f]{4})/g)}if(!a)return t;if((n=parseInt(a[1],16))>126&&n<=255&&0===a[0].indexOf("x"))return t;if(n>=0&&n<32){e+="\\"+a[0];continue}e+=34===n||39===n||92===n?"\\"+String.fromCharCode(n):String.fromCharCode(n)}return e}(e)),this._input.peek()===t&&(e+=this._input.next()),e=e.replace(s.allLineBreaks,"\n"),this._create_token(_.STRING,e)}return null},k.prototype._allow_regexp_or_xml=function(t){return t.type===_.RESERVED&&c(t.text,["return","case","throw","else","do","typeof","yield"])||t.type===_.END_EXPR&&")"===t.text&&t.opened.previous.type===_.RESERVED&&c(t.opened.previous.text,["if","while","for"])||c(t.type,[_.COMMENT,_.START_EXPR,_.START_BLOCK,_.START,_.END_BLOCK,_.OPERATOR,_.EQUALS,_.EOF,_.SEMICOLON,_.COMMA])},k.prototype._read_regexp=function(t,e){if("/"===t&&this._allow_regexp_or_xml(e)){for(var n=this._input.next(),r=!1,i=!1;this._input.hasNext()&&(r||i||this._input.peek()!==t)&&!this._input.testChar(s.newline);)n+=this._input.peek(),r?r=!1:(r="\\"===this._input.peek(),"["===this._input.peek()?i=!0:"]"===this._input.peek()&&(i=!1)),this._input.next();return this._input.peek()===t&&(n+=this._input.next(),n+=this._input.read(s.identifier)),this._create_token(_.STRING,n)}return null},k.prototype._read_xml=function(t,e){if(this._options.e4x&&"<"===t&&this._allow_regexp_or_xml(e)){var n="",r=this.__patterns.xml.read_match();if(r){for(var i=r[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),a=0===i.indexOf("{"),o=0;r;){var u=!!r[1],l=r[2];if(!(r[r.length-1]||"![CDATA["===l.slice(0,8))&&(l===i||a&&l.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(u?--o:++o),n+=r[0],o<=0)break;r=this.__patterns.xml.read_match()}return r||(n+=this._input.match(/[\s\S]*/g)[0]),n=n.replace(s.allLineBreaks,"\n"),this._create_token(_.STRING,n)}}return null},k.prototype._read_string_recursive=function(t,e,n){var r,i;"'"===t?i=this.__patterns.single_quote:'"'===t?i=this.__patterns.double_quote:"`"===t?i=this.__patterns.template_text:"}"===t&&(i=this.__patterns.template_expression);for(var a=i.read(),o="";this._input.hasNext();){if((o=this._input.next())===t||!e&&s.newline.test(o)){this._input.back();break}"\\"===o&&this._input.hasNext()?("x"===(r=this._input.peek())||"u"===r?this.has_char_escapes=!0:"\r"===r&&"\n"===this._input.peek(1)&&this._input.next(),o+=this._input.next()):n&&("${"===n&&"$"===o&&"{"===this._input.peek()&&(o+=this._input.next()),n===o&&(o+="`"===t?this._read_string_recursive("}",e,"`"):this._read_string_recursive("`",e,"${"),this._input.hasNext()&&(o+=this._input.next()))),a+=o+=i.read()}return a},t.exports.Tokenizer=k,t.exports.TOKEN=_,t.exports.positionable_operators=v.slice(),t.exports.line_starters=y.slice()},function(t,e,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(t){this.__input=t||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__input.charAt(this.__position),this.__position+=1),t},i.prototype.peek=function(t){var e=null;return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&(e=this.__input.charAt(t)),e},i.prototype.__match=function(t,e){t.lastIndex=e;var n=t.exec(this.__input);return!n||r&&t.sticky||n.index!==e&&(n=null),n},i.prototype.test=function(t,e){return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&!!this.__match(t,e)},i.prototype.testChar=function(t,e){var n=this.peek(e);return t.lastIndex=0,null!==n&&t.test(n)},i.prototype.match=function(t){var e=this.__match(t,this.__position);return e?this.__position+=e[0].length:e=null,e},i.prototype.read=function(t,e,n){var r,i="";return t&&(r=this.match(t))&&(i+=r[0]),!e||!r&&t||(i+=this.readUntil(e,n)),i},i.prototype.readUntil=function(t,e){var n,r=this.__position;t.lastIndex=this.__position;var i=t.exec(this.__input);return i?(r=i.index,e&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(t){return this.readUntil(t,!0)},i.prototype.get_regexp=function(t,e){var n=null,i="g";return e&&r&&(i="y"),"string"==typeof t&&""!==t?n=new RegExp(t,i):t&&(n=new RegExp(t.source,i)),n},i.prototype.get_literal_regexp=function(t){return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(t){var e=this.__position,n=this.readUntilAfter(t);return this.__position=e,n},i.prototype.lookBack=function(t){var e=this.__position-1;return e>=t.length&&this.__input.substring(e-t.length,e).toLowerCase()===t},t.exports.InputScanner=i},function(t,e,n){"use strict";var r=n(8).InputScanner,i=n(3).Token,a=n(10).TokenStream,o=n(11).WhitespacePattern,s={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},u=function(t,e){this._input=new r(t),this._options=e||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new o(this._input)};u.prototype.tokenize=function(){var t;this._input.restart(),this.__tokens=new a,this._reset();for(var e=new i(s.START,""),n=null,r=[],o=new a;e.type!==s.EOF;){for(t=this._get_next_token(e,n);this._is_comment(t);)o.add(t),t=this._get_next_token(e,n);o.isEmpty()||(t.comments_before=o,o=new a),t.parent=n,this._is_opening(t)?(r.push(n),n=t):n&&this._is_closing(t,n)&&(t.opened=n,n.closed=t,n=r.pop(),t.parent=n),t.previous=e,e.next=t,this.__tokens.add(t),e=t}return this.__tokens},u.prototype._is_first_token=function(){return this.__tokens.isEmpty()},u.prototype._reset=function(){},u.prototype._get_next_token=function(t,e){this._readWhitespace();var n=this._input.read(/.+/g);return n?this._create_token(s.RAW,n):this._create_token(s.EOF,"")},u.prototype._is_comment=function(t){return!1},u.prototype._is_opening=function(t){return!1},u.prototype._is_closing=function(t,e){return!1},u.prototype._create_token=function(t,e){return new i(t,e,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token)},u.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},t.exports.Tokenizer=u,t.exports.TOKEN=s},function(t,e,n){"use strict";function r(t){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=t}r.prototype.restart=function(){this.__position=0},r.prototype.isEmpty=function(){return 0===this.__tokens_length},r.prototype.hasNext=function(){return this.__position<this.__tokens_length},r.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__tokens[this.__position],this.__position+=1),t},r.prototype.peek=function(t){var e=null;return t=t||0,(t+=this.__position)>=0&&t<this.__tokens_length&&(e=this.__tokens[t]),e},r.prototype.add=function(t){this.__parent_token&&(t.parent=this.__parent_token),this.__tokens.push(t),this.__tokens_length+=1},t.exports.TokenStream=r},function(t,e,n){"use strict";var r=n(12).Pattern;function i(t,e){r.call(this,t,e),e?this._line_regexp=this._input.get_regexp(e._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}i.prototype=new r,i.prototype.__set_whitespace_patterns=function(t,e){t+="\\t ",e+="\\n\\r",this._match_pattern=this._input.get_regexp("["+t+e+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+e+"]")},i.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var t=this._input.read(this._match_pattern);if(" "===t)this.whitespace_before_token=" ";else if(t){var e=this.__split(this._newline_regexp,t);this.newline_count=e.length-1,this.whitespace_before_token=e[this.newline_count]}return t},i.prototype.matching=function(t,e){var n=this._create();return n.__set_whitespace_patterns(t,e),n._update(),n},i.prototype._create=function(){return new i(this._input,this)},i.prototype.__split=function(t,e){t.lastIndex=0;for(var n=0,r=[],i=t.exec(e);i;)r.push(e.substring(n,i.index)),n=i.index+i[0].length,i=t.exec(e);return n<e.length?r.push(e.substring(n,e.length)):r.push(""),r},t.exports.WhitespacePattern=i},function(t,e,n){"use strict";function r(t,e){this._input=t,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,e&&(this._starting_pattern=this._input.get_regexp(e._starting_pattern,!0),this._match_pattern=this._input.get_regexp(e._match_pattern,!0),this._until_pattern=this._input.get_regexp(e._until_pattern),this._until_after=e._until_after)}r.prototype.read=function(){var t=this._input.read(this._starting_pattern);return this._starting_pattern&&!t||(t+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),t},r.prototype.read_match=function(){return this._input.match(this._match_pattern)},r.prototype.until_after=function(t){var e=this._create();return e._until_after=!0,e._until_pattern=this._input.get_regexp(t),e._update(),e},r.prototype.until=function(t){var e=this._create();return e._until_after=!1,e._until_pattern=this._input.get_regexp(t),e._update(),e},r.prototype.starting_with=function(t){var e=this._create();return e._starting_pattern=this._input.get_regexp(t,!0),e._update(),e},r.prototype.matching=function(t){var e=this._create();return e._match_pattern=this._input.get_regexp(t,!0),e._update(),e},r.prototype._create=function(){return new r(this._input,this)},r.prototype._update=function(){},t.exports.Pattern=r},function(t,e,n){"use strict";function r(t,e){t="string"==typeof t?t:t.source,e="string"==typeof e?e:e.source,this.__directives_block_pattern=new RegExp(t+/ beautify( \w+[:]\w+)+ /.source+e,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(t+/\sbeautify\signore:end\s/.source+e,"g")}r.prototype.get_directives=function(t){if(!t.match(this.__directives_block_pattern))return null;var e={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(t);n;)e[n[1]]=n[2],n=this.__directive_pattern.exec(t);return e},r.prototype.readIgnored=function(t){return t.readUntilAfter(this.__directives_end_ignore_pattern)},t.exports.Directives=r},function(t,e,n){"use strict";var r=n(12).Pattern,i={django:!1,erb:!1,handlebars:!1,php:!1};function a(t,e){r.call(this,t,e),this.__template_pattern=null,this._disabled=Object.assign({},i),this._excluded=Object.assign({},i),e&&(this.__template_pattern=this._input.get_regexp(e.__template_pattern),this._excluded=Object.assign(this._excluded,e._excluded),this._disabled=Object.assign(this._disabled,e._disabled));var n=new r(t);this.__patterns={handlebars_comment:n.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:n.starting_with(/{{{/).until_after(/}}}/),handlebars:n.starting_with(/{{/).until_after(/}}/),php:n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),erb:n.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:n.starting_with(/{%/).until_after(/%}/),django_value:n.starting_with(/{{/).until_after(/}}/),django_comment:n.starting_with(/{#/).until_after(/#}/)}}a.prototype=new r,a.prototype._create=function(){return new a(this._input,this)},a.prototype._update=function(){this.__set_templated_pattern()},a.prototype.disable=function(t){var e=this._create();return e._disabled[t]=!0,e._update(),e},a.prototype.read_options=function(t){var e=this._create();for(var n in i)e._disabled[n]=-1===t.templating.indexOf(n);return e._update(),e},a.prototype.exclude=function(t){var e=this._create();return e._excluded[t]=!0,e._update(),e},a.prototype.read=function(){var t="";t=this._match_pattern?this._input.read(this._starting_pattern):this._input.read(this._starting_pattern,this.__template_pattern);for(var e=this._read_template();e;)this._match_pattern?e+=this._input.read(this._match_pattern):e+=this._input.readUntil(this.__template_pattern),t+=e,e=this._read_template();return this._until_after&&(t+=this._input.readUntilAfter(this._until_pattern)),t},a.prototype.__set_templated_pattern=function(){var t=[];this._disabled.php||t.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||t.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||t.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(t.push(this.__patterns.django._starting_pattern.source),t.push(this.__patterns.django_value._starting_pattern.source),t.push(this.__patterns.django_comment._starting_pattern.source)),this._until_pattern&&t.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+t.join("|")+")")},a.prototype._read_template=function(){var t="",e=this._input.peek();if("<"===e){var n=this._input.peek(1);this._disabled.php||this._excluded.php||"?"!==n||(t=t||this.__patterns.php.read()),this._disabled.erb||this._excluded.erb||"%"!==n||(t=t||this.__patterns.erb.read())}else"{"===e&&(this._disabled.handlebars||this._excluded.handlebars||(t=(t=(t=t||this.__patterns.handlebars_comment.read())||this.__patterns.handlebars_unescaped.read())||this.__patterns.handlebars.read()),this._disabled.django||(this._excluded.django||this._excluded.handlebars||(t=t||this.__patterns.django_value.read()),this._excluded.django||(t=(t=t||this.__patterns.django_comment.read())||this.__patterns.django.read())));return t},t.exports.TemplatablePattern=a}]),void 0===(r=function(){return{js_beautify:i}}.apply(e,[]))||(t.exports=r)},function(t,e,n){var r,i;i=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([,,function(t,e,n){"use strict";function r(t){this.__parent=t,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(t,e){this.__cache=[""],this.__indent_size=t.indent_size,this.__indent_string=t.indent_char,t.indent_with_tabs||(this.__indent_string=new Array(t.indent_size+1).join(t.indent_char)),e=e||"",t.indent_level>0&&(e=new Array(t.indent_level+1).join(this.__indent_string)),this.__base_string=e,this.__base_string_length=e.length}function a(t,e){this.__indent_cache=new i(t,e),this.raw=!1,this._end_with_newline=t.end_with_newline,this.indent_size=t.indent_size,this.wrap_line_length=t.wrap_line_length,this.indent_empty_lines=t.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var t=new r(this.__parent);return t.set_indent(this.__indent_count,this.__alignment_count),t},r.prototype.item=function(t){return t<0?this.__items[this.__items.length+t]:this.__items[t]},r.prototype.has_match=function(t){for(var e=this.__items.length-1;e>=0;e--)if(this.__items[e].match(t))return!0;return!1},r.prototype.set_indent=function(t,e){this.is_empty()&&(this.__indent_count=t||0,this.__alignment_count=e||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var t=this.__parent.current_line;return t.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),t.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),t.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===t.__items[0]&&(t.__items.splice(0,1),t.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(t){this.__items.push(t);var e=t.lastIndexOf("\n");-1!==e?this.__character_count=t.length-e:this.__character_count+=t.length},r.prototype.pop=function(){var t=null;return this.is_empty()||(t=this.__items.pop(),this.__character_count-=t.length),t},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var t="";return this.is_empty()?this.__parent.indent_empty_lines&&(t=this.__parent.get_indent_string(this.__indent_count)):(t=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),t+=this.__items.join("")),t},i.prototype.get_indent_size=function(t,e){var n=this.__base_string_length;return e=e||0,t<0&&(n=0),n+=t*this.__indent_size,n+=e},i.prototype.get_indent_string=function(t,e){var n=this.__base_string;return e=e||0,t<0&&(t=0,n=""),e+=t*this.__indent_size,this.__ensure_cache(e),n+=this.__cache[e]},i.prototype.__ensure_cache=function(t){for(;t>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var t=this.__cache.length,e=0,n="";this.__indent_size&&t>=this.__indent_size&&(t-=(e=Math.floor(t/this.__indent_size))*this.__indent_size,n=new Array(e+1).join(this.__indent_string)),t&&(n+=new Array(t+1).join(" ")),this.__cache.push(n)},a.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},a.prototype.get_line_number=function(){return this.__lines.length},a.prototype.get_indent_string=function(t,e){return this.__indent_cache.get_indent_string(t,e)},a.prototype.get_indent_size=function(t,e){return this.__indent_cache.get_indent_size(t,e)},a.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},a.prototype.add_new_line=function(t){return!(this.is_empty()||!t&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},a.prototype.get_code=function(t){this.trim(!0);var e=this.current_line.pop();e&&("\n"===e[e.length-1]&&(e=e.replace(/\n+$/g,"")),this.current_line.push(e)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==t&&(n=n.replace(/[\n]/g,t)),n},a.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},a.prototype.set_indent=function(t,e){return t=t||0,e=e||0,this.next_line.set_indent(t,e),this.__lines.length>1?(this.current_line.set_indent(t,e),!0):(this.current_line.set_indent(),!1)},a.prototype.add_raw_token=function(t){for(var e=0;e<t.newlines;e++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(t.whitespace_before),this.current_line.push(t.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},a.prototype.add_token=function(t){this.__add_space_before_token(),this.current_line.push(t),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},a.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},a.prototype.remove_indent=function(t){for(var e=this.__lines.length;t<e;)this.__lines[t]._remove_indent(),t++;this.current_line._remove_wrap_indent()},a.prototype.trim=function(t){for(t=void 0!==t&&t,this.current_line.trim();t&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},a.prototype.just_added_newline=function(){return this.current_line.is_empty()},a.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},a.prototype.ensure_empty_line_above=function(t,e){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(t)&&i.item(-1)!==e){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},t.exports.Output=a},,,,function(t,e,n){"use strict";function r(t,e){this.raw_options=i(t,e),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(t,e){var n,r={};for(n in t=a(t))n!==e&&(r[n]=t[n]);if(e&&t[e])for(n in t[e])r[n]=t[e][n];return r}function a(t){var e,n={};for(e in t)n[e.replace(/-/g,"_")]=t[e];return n}r.prototype._get_array=function(t,e){var n=this.raw_options[t],r=e||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(t,e){var n=this.raw_options[t];return void 0===n?!!e:!!n},r.prototype._get_characters=function(t,e){var n=this.raw_options[t],r=e||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(t,e){var n=this.raw_options[t];e=parseInt(e,10),isNaN(e)&&(e=0);var r=parseInt(n,10);return isNaN(r)&&(r=e),r},r.prototype._get_selection=function(t,e,n){var r=this._get_selection_list(t,e,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+t+"' can only be one of the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r[0]},r.prototype._get_selection_list=function(t,e,n){if(!e||0===e.length)throw new Error("Selection list cannot be empty.");if(n=n||[e[0]],!this._is_valid_selection(n,e))throw new Error("Invalid Default Value!");var r=this._get_array(t,n);if(!this._is_valid_selection(r,e))throw new Error("Invalid Option Value: The option '"+t+"' can contain only the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r},r.prototype._is_valid_selection=function(t,e){return t.length&&e.length&&!t.some((function(t){return-1===e.indexOf(t)}))},t.exports.Options=r,t.exports.normalizeOpts=a,t.exports.mergeOpts=i},,function(t,e,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(t){this.__input=t||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__input.charAt(this.__position),this.__position+=1),t},i.prototype.peek=function(t){var e=null;return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&(e=this.__input.charAt(t)),e},i.prototype.__match=function(t,e){t.lastIndex=e;var n=t.exec(this.__input);return!n||r&&t.sticky||n.index!==e&&(n=null),n},i.prototype.test=function(t,e){return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&!!this.__match(t,e)},i.prototype.testChar=function(t,e){var n=this.peek(e);return t.lastIndex=0,null!==n&&t.test(n)},i.prototype.match=function(t){var e=this.__match(t,this.__position);return e?this.__position+=e[0].length:e=null,e},i.prototype.read=function(t,e,n){var r,i="";return t&&(r=this.match(t))&&(i+=r[0]),!e||!r&&t||(i+=this.readUntil(e,n)),i},i.prototype.readUntil=function(t,e){var n,r=this.__position;t.lastIndex=this.__position;var i=t.exec(this.__input);return i?(r=i.index,e&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(t){return this.readUntil(t,!0)},i.prototype.get_regexp=function(t,e){var n=null,i="g";return e&&r&&(i="y"),"string"==typeof t&&""!==t?n=new RegExp(t,i):t&&(n=new RegExp(t.source,i)),n},i.prototype.get_literal_regexp=function(t){return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(t){var e=this.__position,n=this.readUntilAfter(t);return this.__position=e,n},i.prototype.lookBack=function(t){var e=this.__position-1;return e>=t.length&&this.__input.substring(e-t.length,e).toLowerCase()===t},t.exports.InputScanner=i},,,,,function(t,e,n){"use strict";function r(t,e){t="string"==typeof t?t:t.source,e="string"==typeof e?e:e.source,this.__directives_block_pattern=new RegExp(t+/ beautify( \w+[:]\w+)+ /.source+e,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(t+/\sbeautify\signore:end\s/.source+e,"g")}r.prototype.get_directives=function(t){if(!t.match(this.__directives_block_pattern))return null;var e={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(t);n;)e[n[1]]=n[2],n=this.__directive_pattern.exec(t);return e},r.prototype.readIgnored=function(t){return t.readUntilAfter(this.__directives_end_ignore_pattern)},t.exports.Directives=r},,function(t,e,n){"use strict";var r=n(16).Beautifier,i=n(17).Options;t.exports=function(t,e){return new r(t,e).beautify()},t.exports.defaultOptions=function(){return new i}},function(t,e,n){"use strict";var r=n(17).Options,i=n(2).Output,a=n(8).InputScanner,o=new(0,n(13).Directives)(/\/\*/,/\*\//),s=/\r\n|[\r\n]/,u=/\r\n|[\r\n]/g,l=/\s/,c=/(?:\s|\n)+/g,_=/\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,h=/\/\/(?:[^\n\r\u2028\u2029]*)/g;function p(t,e){this._source_text=t||"",this._options=new r(e),this._ch=null,this._input=null,this.NESTED_AT_RULE={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},this.CONDITIONAL_GROUP_RULE={"@media":!0,"@supports":!0,"@document":!0}}p.prototype.eatString=function(t){var e="";for(this._ch=this._input.next();this._ch;){if(e+=this._ch,"\\"===this._ch)e+=this._input.next();else if(-1!==t.indexOf(this._ch)||"\n"===this._ch)break;this._ch=this._input.next()}return e},p.prototype.eatWhitespace=function(t){for(var e=l.test(this._input.peek()),n=!0;l.test(this._input.peek());)this._ch=this._input.next(),t&&"\n"===this._ch&&(this._options.preserve_newlines||n)&&(n=!1,this._output.add_new_line(!0));return e},p.prototype.foundNestedPseudoClass=function(){for(var t=0,e=1,n=this._input.peek(e);n;){if("{"===n)return!0;if("("===n)t+=1;else if(")"===n){if(0===t)return!1;t-=1}else if(";"===n||"}"===n)return!1;e++,n=this._input.peek(e)}return!1},p.prototype.print_string=function(t){this._output.set_indent(this._indentLevel),this._output.non_breaking_space=!0,this._output.add_token(t)},p.prototype.preserveSingleSpace=function(t){t&&(this._output.space_before_token=!0)},p.prototype.indent=function(){this._indentLevel++},p.prototype.outdent=function(){this._indentLevel>0&&this._indentLevel--},p.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var t=this._source_text,e=this._options.eol;"auto"===e&&(e="\n",t&&s.test(t||"")&&(e=t.match(s)[0]));var n=(t=t.replace(u,"\n")).match(/^[\t ]*/)[0];this._output=new i(this._options,n),this._input=new a(t),this._indentLevel=0,this._nestedLevel=0,this._ch=null;for(var r,p,f=0,d=!1,v=!1,g=!1,m=!1,b=!1,y=this._ch;r=""!==this._input.read(c),p=y,this._ch=this._input.next(),"\\"===this._ch&&this._input.hasNext()&&(this._ch+=this._input.next()),y=this._ch,this._ch;)if("/"===this._ch&&"*"===this._input.peek()){this._output.add_new_line(),this._input.back();var w=this._input.read(_),x=o.get_directives(w);x&&"start"===x.ignore&&(w+=o.readIgnored(this._input)),this.print_string(w),this.eatWhitespace(!0),this._output.add_new_line()}else if("/"===this._ch&&"/"===this._input.peek())this._output.space_before_token=!0,this._input.back(),this.print_string(this._input.read(h)),this.eatWhitespace(!0);else if("@"===this._ch)if(this.preserveSingleSpace(r),"{"===this._input.peek())this.print_string(this._ch+this.eatString("}"));else{this.print_string(this._ch);var k=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);k.match(/[ :]$/)&&(k=this.eatString(": ").replace(/\s$/,""),this.print_string(k),this._output.space_before_token=!0),"extend"===(k=k.replace(/\s$/,""))?m=!0:"import"===k&&(b=!0),k in this.NESTED_AT_RULE?(this._nestedLevel+=1,k in this.CONDITIONAL_GROUP_RULE&&(g=!0)):d||0!==f||-1===k.indexOf(":")||(v=!0,this.indent())}else"#"===this._ch&&"{"===this._input.peek()?(this.preserveSingleSpace(r),this.print_string(this._ch+this.eatString("}"))):"{"===this._ch?(v&&(v=!1,this.outdent()),this.indent(),this._output.space_before_token=!0,this.print_string(this._ch),g?(g=!1,d=this._indentLevel>this._nestedLevel):d=this._indentLevel>=this._nestedLevel,this._options.newline_between_rules&&d&&this._output.previous_line&&"{"!==this._output.previous_line.item(-1)&&this._output.ensure_empty_line_above("/",","),this.eatWhitespace(!0),this._output.add_new_line()):"}"===this._ch?(this.outdent(),this._output.add_new_line(),"{"===p&&this._output.trim(!0),b=!1,m=!1,v&&(this.outdent(),v=!1),this.print_string(this._ch),d=!1,this._nestedLevel&&this._nestedLevel--,this.eatWhitespace(!0),this._output.add_new_line(),this._options.newline_between_rules&&!this._output.just_added_blankline()&&"}"!==this._input.peek()&&this._output.add_new_line(!0)):":"===this._ch?!d&&!g||this._input.lookBack("&")||this.foundNestedPseudoClass()||this._input.lookBack("(")||m||0!==f?(this._input.lookBack(" ")&&(this._output.space_before_token=!0),":"===this._input.peek()?(this._ch=this._input.next(),this.print_string("::")):this.print_string(":")):(this.print_string(":"),v||(v=!0,this._output.space_before_token=!0,this.eatWhitespace(!0),this.indent())):'"'===this._ch||"'"===this._ch?(this.preserveSingleSpace(r),this.print_string(this._ch+this.eatString(this._ch)),this.eatWhitespace(!0)):";"===this._ch?0===f?(v&&(this.outdent(),v=!1),m=!1,b=!1,this.print_string(this._ch),this.eatWhitespace(!0),"/"!==this._input.peek()&&this._output.add_new_line()):(this.print_string(this._ch),this.eatWhitespace(!0),this._output.space_before_token=!0):"("===this._ch?this._input.lookBack("url")?(this.print_string(this._ch),this.eatWhitespace(),f++,this.indent(),this._ch=this._input.next(),")"===this._ch||'"'===this._ch||"'"===this._ch?this._input.back():this._ch&&(this.print_string(this._ch+this.eatString(")")),f&&(f--,this.outdent()))):(this.preserveSingleSpace(r),this.print_string(this._ch),this.eatWhitespace(),f++,this.indent()):")"===this._ch?(f&&(f--,this.outdent()),this.print_string(this._ch)):","===this._ch?(this.print_string(this._ch),this.eatWhitespace(!0),!this._options.selector_separator_newline||v||0!==f||b?this._output.space_before_token=!0:this._output.add_new_line()):">"!==this._ch&&"+"!==this._ch&&"~"!==this._ch||v||0!==f?"]"===this._ch?this.print_string(this._ch):"["===this._ch?(this.preserveSingleSpace(r),this.print_string(this._ch)):"="===this._ch?(this.eatWhitespace(),this.print_string("="),l.test(this._ch)&&(this._ch="")):"!"!==this._ch||this._input.lookBack("\\")?(this.preserveSingleSpace(r),this.print_string(this._ch)):(this.print_string(" "),this.print_string(this._ch)):this._options.space_around_combinator?(this._output.space_before_token=!0,this.print_string(this._ch),this._output.space_before_token=!0):(this.print_string(this._ch),this.eatWhitespace(),this._ch&&l.test(this._ch)&&(this._ch=""));return this._output.get_code(e)},t.exports.Beautifier=p},function(t,e,n){"use strict";var r=n(6).Options;function i(t){r.call(this,t,"css"),this.selector_separator_newline=this._get_boolean("selector_separator_newline",!0),this.newline_between_rules=this._get_boolean("newline_between_rules",!0);var e=this._get_boolean("space_around_selector_separator");this.space_around_combinator=this._get_boolean("space_around_combinator")||e}i.prototype=new r,t.exports.Options=i}]),void 0===(r=function(){return{css_beautify:i}}.apply(e,[]))||(t.exports=r)},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){var n,r,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,l=[],c=!1,_=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):_=-1,l.length&&p())}function p(){if(!c){var t=s(h);c=!0;for(var e=l.length;e;){for(u=l,l=[];++_<e;)u&&u[_].run();_=-1,e=l.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||c||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=c;var i=n(10),a=r(n(13)),o=n(23),s=n(49),u=r(n(24)),l=n(25);e.VERSION="4.7.6";e.COMPILER_REVISION=8;e.LAST_COMPATIBLE_COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},o.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:u.default,log:u.default.log,registerHelper:function(t,e){if("[object Object]"===i.toString.call(t)){if(e)throw new a.default("Arg not supported with multiple helpers");i.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===i.toString.call(t))i.extend(this.partials,t);else{if(void 0===e)throw new a.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===i.toString.call(t)){if(e)throw new a.default("Arg not supported with multiple decorators");i.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){l.resetLoggedProperties()}};var _=u.default.log;e.log=_,e.createFrame=i.createFrame,e.logger=u.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){i.default(t),a.default(t),o.default(t),s.default(t),u.default(t),l.default(t),c.default(t)},e.moveHelperToHooks=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var i=r(n(42)),a=r(n(43)),o=r(n(44)),s=r(n(45)),u=r(n(46)),l=r(n(47)),c=r(n(48))},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(i.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=i.lookupLevel(t),"undefined"!=typeof console&&i.lookupLevel(i.level)<=t){var e=i.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[e].apply(console,r)}}};e.default=i,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createProtoAccessControl=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},e.resultIsAllowed=function(t,e,n){return o("function"==typeof t?e.methods:e.properties,n)},e.resetLoggedProperties=function(){Object.keys(a).forEach((function(t){delete a[t]}))};var r=n(51),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(24)),a=Object.create(null);function o(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==a[t]&&(a[t]=!0,i.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}},function(t,e,n){(e=n(8)(!1)).push([t.i,"@font-face{$ff:eruda-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAvoAAsAAAAAEZgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQAAAAFZHb1PUY21hcAAAAYQAAACVAAACUPKX+h1nbHlmAAACHAAAB1oAAAoQydSW4mhlYWQAAAl4AAAAMQAAADYYn0vGaGhlYQAACawAAAAdAAAAJAgEBBVobXR4AAAJzAAAABcAAABIRAb//GxvY2EAAAnkAAAAJgAAACYRiA/MbWF4cAAACgwAAAAfAAAAIAEjAQ1uYW1lAAAKLAAAASkAAAIWm5e+CnBvc3QAAAtYAAAAjwAAAMnZZQoFeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGQ+zjiBgZWBgamX6QwDA0M/hGZ8zWDEyAEUZWBlZsAKAtJcUxgcPjJ+FGQBcWNYmBgYgTQIMwAA9pkJ13ic7ZHJDcMwDATHtnyf6iNVpKC8Um6aUAUOV5syQmA4EEEJAgn0QBc8ggTNmwbFK6pNrXcstZ541p6kesn3HblRjnOquY3eFC8OjEzMcW9lY+fg5CJHy8A/tpo/v1PWFE2da2uQO6P9lGQ06dIb7a4MBnk0yJNBng3yYrTTshrkzeh3ZTfIh0E+DfJlkLMhfwF2lyt5AAAAeJx1FltsFNf1nntnZ/YxO7PjnZ3ZB55ld9kZ73q9750FO9hYGDDYYLB5NLwMNRgCqFFpkhqFDz6IlKCUqLSfSb7cfkDVRCoVbdWgiqqNqoJUKYR+VMpHP9JWfXzSNu2ue+7sBreV4rXOPfee93OXAME/RtnPiUJIPusEwK0buhQAQxfpR3q4Ows/VOyU0n0TvqakxhW4i/eUE+6+2f1G2EkRT54+ZavER0gA2gFw6PnuO7vgdvfwLujAqZ3do91jO3t8LE+/xe2ALoGYdcBuuo1M3WD50BoJWRwYKiWqQb+i8ksI8DUW69u4yvLrsnZLa7p1Ewz6KnIGLcOwgsiNwutaOEaYZ/cT9gkJkhixvRhtx2412yBGUZXbqJuGaUBWAd2Cetttu03OQMNH9kwPD9fg3uzva93pvScOz0wXS91fvPrk6tUn/7h0fuvExNbzl56UitMzh4/NdadrMHFsH9yrDQ9P74HLVz/++5OrnOEzzum57/nxPnufmKSKUWi6mK2AxIHdnACnnwrQVTAx9blMP8Q0tDkwKDEGQwsfiKo46fPdnw8ZCmCI8F4PX0N8nQ6/WyOKEZq/7/NN4sMHC6FBw4CvSn1MhXVqvy4fsp9hrghg+bH0JtYR2C9Xuj/o3l2BWQ/A3pXuXbYLAcz+D4HHtrZGiAACIUWyHbWIKohOGWOagAqUwTXQfx4H5lmlpiEpGDeGXYG8bloYbr09DjztXCTrUeFpJDMWHwwPUEF/OTuv0Y0F7QUqsCvGFlGIXQh93QwKhpLQL1KBdrpDzs3ji79ZPH7TGfovFN5DHX2+VzLzWjFNtQvU51sxo1ZSv+hfMQcVrv8iFYUd5/9f2kOf1e0eu0fiXt2+qD5fWNB/ilihmOpVyAr2KiTC/XW8R/eq+R0/log3M7/GsEQi5/10bf2i9hn6ff0xO0wGSJrU0DMvc8/SyXPJsmVojkPdAl0BllVoDFu8YYzTZpnCv144deJmPn/zxKmPPkcujC6Nji69zMFYorpJz43lknjom6rsUKFw6+TiraFicejW4slbhULn0z4nAngeWRKbxrKAZwMl0LVeX02ya0Tle8HOZcWYphuNehvcJit2HodCmmlqQZmWDFqGWdHUOvs1U4KZgc3kmfwddgd7imAT5bKSKIk6n9WGF2BOoTlvlJt8Zr0pljIaG3nu7UMvnTm1ZXR0y6kzL53+0sEV80Xj2JXtR2ZwmnE4Z45Mjm0pfQ9eYSNbJ8c2n17649LpzWPFwq1jE6dbpeLuPd/fs7tYSsZHkGXdjwfsARnC3aFAtkxbDc+N9V3h+WZmNJPnmuoiG9+2enf12tSlysi+uZ/M7RupcOTEjm1bqze6P7rcI0492DY1dW316InP6R5jKlm5AdOXPdLd1Wf99xf2V5LwMpFzxqGF9cNq6hZt1N22GcNpRbea45RbVyj9bUktjrTPvvbW9eV2++z16ckrNRViC513a8d32vbO40u9A26otSuT09fPttvL19967Wx7pKiWun9egNg6Dz/6PvwUd2iUJDELuSy2PjY3z8Ig5FoZrQGSKTkSg0O3z52jy+Vk1M+mOocf0nOPHu14+Mbrd5bp8rlk1FLDtx91DoH2xsMdjx7RHKqVCFlbE3wCkG+SO+QxeUo+Ix2edHAnoIXZLeNM2TzLbdc7RN4H2T5BBQVw+HCn4KNHw0ANs/+J4bB6T/wVH6zeDuLcCNLQcL3WMeu9G17GcWF5ptoufzLwRC/65qF/9qhm36okDkPb9vzhsmXqYCY8Y54GjlHT8UQc9INjbc8p29t6DteAXNwQKjfbDko7ksk+VCxtIB6SjIHBcmJjQI7QgNTaLicFNR7bbyRVlpKs0bQSFJgEzJepqCUjFQgaEUGQtKg/LEgCgN8nS8GYEknKkqlZI4mNfllhsrRhdFMiaOrpaEEXFZ8/IscLzZQWEEGkqKka1EMm06KSnIiUIlHGJKG77cz8XGmEsXr9wMLi0vz+kTKl1erc/KL8B18wvKGye0oZ8Adi+Wy9MgmSX27HtXixEtfwzc42DL8ckX+lDwmBsOwXVDWghQWRGcwnFepmVNDLTqKSZ75dsXdLB2enz9I03RfUgnHHTWlBSZYTWSOd95k0FRdC/o2yHApnpCALJMJiVA0aoQF/bWMo4leMZHMoAtQXCInBoGEN5P2iX/D7RFmK2M+le5oycSsvGoKSjNhR1UchKIY3xKImz7JghKKBalpkVAJfILLBtePJSDRlumr3edaoHTy0fHL/3lKZ0XrtwMKXFw/Mlas/tvWEHJ3YpUbjg5bCRpubxaKWlLVQolBNDPA3usUSA35xDBPqjwyoGpN84ZAcEk1JDtvVuF7Uy5viNYeJq/rrhT/NzL0IaT5qax38PmUCxd87SYJTkscFKOLPHtzemfo4AH7vGDH+hWO3zKzNb7h0/tY9rruujjDgDrPqsBvo/NoqWvjfSOXzbj7/bVayUyn734+dSduepEdjlhXrfpfDp/mWbbfyaPo/itrIyAAAeJxjYGRgYABim4vFM+L5bb4ycLMwgMCt/cwpMPr/3///WVhZmIBcDgYQyQAARw4L3AAAAHicY2BkYGBhAAEW1v9///9lYWVgZEAFQgBbzAQjAAAAeJxjYGBgYMGL///HK88KVvMXAFerBEQAAAAAAAAgADQAUgBwALQBAAEiAZAB3AIsAkwCkALQAxIDQATKBQgAAHicY2BkYGAQYmRkYGcAASYg5gJCBob/YD4DAAsEATIAeJxlkD1uwkAUhMdgSAJSghQpKbNVCiKZn5IDQE9Bl8KYtTGyvdZ6QaLLCXKEHCGniHKCHChj82hgLT9/M2/e7soABviFh3p5uG1qvVq4oTpxm/Qg7JOfhTvo40W4S38o3MMbpsJ9POKdO3j+HZ0BSuEW7vEh3Kb/KeyTv4Q7eMK3cJf+j3APK/wJ9/HqDdPIFLEp3FIn+yy0Z3n+rrStUlOoSTA+WwtdaBs6vVHro6oOydS5WMXW5GrOrs4yo0prdjpywda5cjYaxeIHkcmRIoJBgbipDktoJNgjQwh71b3UK6YtKvq1VpggwPgqtWCqaJIhlcaGyTWOrBUOPG1K1zGt+FrO5KS5zGreJCMr/u+6t6MT0Q+wbaZKzDDiE1/kg+YO+T89EV6oAAAAeJxti9EOgjAUQ1fYBg4Vxe/go5ZxEZPJyOUmyN+7yKt9aE+aVhXqkFP/1aFACQ0Diwo1TnBocMYFV7S44Y4OD+U8c9r6SKM0B/LrOYkLnkn6IW1zc+CvNiGS5zqk98K0rnagSEKG8pEtfRY/DyXtpJfo94ppzKPJZCOxaz6GKUekIFpSinrzPCv1BZLnLysA') format('woff')}[class*=' _icon-'],[class^='_icon-']{$ff:eruda-icon!important;$fs:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}._icon-arrow-left:before{$co:'\\f101'}._icon-arrow-right:before{$co:'\\f102'}._icon-caret-down:before{$co:'\\f103'}._icon-caret-right:before{$co:'\\f104'}._icon-clear:before{$co:'\\f105'}._icon-compress:before{$co:'\\f106'}._icon-delete:before{$co:'\\f107'}._icon-error:before{$co:'\\f108'}._icon-expand:before{$co:'\\f109'}._icon-eye:before{$co:'\\f10a'}._icon-play:before{$co:'\\f10b'}._icon-refresh:before{$co:'\\f10c'}._icon-reset:before{$co:'\\f10d'}._icon-search:before{$co:'\\f10e'}._icon-select:before{$co:'\\f10f'}._icon-tool:before{$co:'\\f110'}._icon-warn:before{$co:'\\f111'}",""]),t.exports=e},function(t,e,n){var r,i;
/*!
 * Draggabilly v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */!function(a,o){r=[n(32),n(33)],void 0===(i=function(t,e){return function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}var i=t.jQuery;function a(t,e){this.element="string"==typeof t?document.querySelector(t):t,i&&(this.$element=i(this.element)),this.options=r({},this.constructor.defaults),this.option(e),this._create()}var o=a.prototype=Object.create(n.prototype);a.defaults={},o.option=function(t){r(this.options,t)};var s={relative:!0,absolute:!0,fixed:!0};function u(t,e,n){return n=n||"round",e?Math[n](t/e)*e:t}o._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=r({},this.position);var t=getComputedStyle(this.element);s[t.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},o.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},o.dispatchEvent=function(t,e,n){var r=[e].concat(n);this.emitEvent(t,r),this.dispatchJQueryEvent(t,e,n)},o.dispatchJQueryEvent=function(e,n,r){var i=t.jQuery;if(i&&this.$element){var a=i.Event(n);a.type=e,this.$element.trigger(a,r)}},o._getPosition=function(){var t=getComputedStyle(this.element),e=this._getPositionCoord(t.left,"width"),n=this._getPositionCoord(t.top,"height");this.position.x=isNaN(e)?0:e,this.position.y=isNaN(n)?0:n,this._addTransformPosition(t)},o._getPositionCoord=function(t,n){if(-1!=t.indexOf("%")){var r=e(this.element.parentNode);return r?parseFloat(t)/100*r[n]:0}return parseInt(t,10)},o._addTransformPosition=function(t){var e=t.transform;if(0===e.indexOf("matrix")){var n=e.split(","),r=0===e.indexOf("matrix3d")?12:4,i=parseInt(n[r],10),a=parseInt(n[r+1],10);this.position.x+=i,this.position.y+=a}},o.onPointerDown=function(t,e){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[e])},o.dragStart=function(t,e){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[e]),this.animate())},o.measureContainment=function(){var t=this.getContainer();if(t){var n=e(this.element),r=e(t),i=this.element.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.borderLeftWidth+r.borderRightWidth,s=r.borderTopWidth+r.borderBottomWidth,u=this.relativeStartPosition={x:i.left-(a.left+r.borderLeftWidth),y:i.top-(a.top+r.borderTopWidth)};this.containSize={width:r.width-o-u.x-n.width,height:r.height-s-u.y-n.height}}},o.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},o.onPointerMove=function(t,e,n){this.dispatchJQueryEvent("pointerMove",t,[e,n])},o.dragMove=function(t,e,n){if(this.isEnabled){var r=n.x,i=n.y,a=this.options.grid,o=a&&a[0],s=a&&a[1];r=u(r,o),i=u(i,s),r=this.containDrag("x",r,o),i=this.containDrag("y",i,s),r="y"==this.options.axis?0:r,i="x"==this.options.axis?0:i,this.position.x=this.startPosition.x+r,this.position.y=this.startPosition.y+i,this.dragPoint.x=r,this.dragPoint.y=i,this.dispatchEvent("dragMove",t,[e,n])}},o.containDrag=function(t,e,n){if(!this.options.containment)return e;var r="x"==t?"width":"height",i=u(-this.relativeStartPosition[t],n,"ceil"),a=this.containSize[r];return a=u(a,n,"floor"),Math.max(i,Math.min(a,e))},o.onPointerUp=function(t,e){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[e])},o.dragEnd=function(t,e){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[e]))},o.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame((function(){t.animate()}))}},o.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},o.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},o.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])},o.setPosition=function(t,e){this.position.x=t,this.position.y=e,this.setLeftTop()},o.enable=function(){this.isEnabled=!0},o.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},o.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},o._init=function(){},i&&i.bridget&&i.bridget("draggabilly",a);return a}(a,t,e)}.apply(e,r))||(t.exports=i)}(window)},function(t,e){t.exports={background:"b","background-image":"bi",border:"bo","border-bottom":"bb","border-collapse":"bc","border-left-color":"blc","border-right":"br","border-radius":"bra","border-top":"bt","border-top-color":"btc","box-shadow":"bs","box-sizing":"bsi",clear:"cl",color:"c",content:"co",cursor:"cu",display:"d",flex:"fl","flex-shrink":"fsh",float:"f","font-family":"ff","font-size":"fs","font-weight":"fw",height:"h",left:"l","line-height":"lh",margin:"m","margin-bottom":"mb","margin-left":"ml","margin-top":"mt","min-height":"mh",outline:"ou",overflow:"o","overflow-x":"ox","overflow-y":"oy",padding:"p","padding-bottom":"pb","padding-left":"pl","padding-top":"pt","pointer-events":"pe",position:"po","text-align":"ta","text-transform":"tt",top:"t",transition:"tr","user-select":"us","vertical-aligin":"va",visibility:"v",width:"w","will-change":"wc","white-space":"ws","-webkit-overflow-scrolling":"wos","z-index":"z"}},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=24)}([function(t,e,n){var r=n(5),i=n(4),a=n(17);e=function(t,e,n){var o,s;if(e=a(e,n),r(t))for(o=0,s=t.length;o<s;o++)e(t[o],o,t);else{var u=i(t);for(o=0,s=u.length;o<s;o++)e(t[u[o]],u[o],t)}return t},t.exports=e},function(t,e,n){var r=n(9);e=function(t){return"[object String]"===r(t)},t.exports=e},function(t,e,n){var r=n(1),i=n(8),a=n(13);e=function(t){return i(r(t)?new a(t):t)},t.exports=e},function(t,e){e=function(t){return void 0===t},t.exports=e},function(t,e,n){var r=n(11);e=Object.keys?Object.keys:function(t){var e=[];for(var n in t)r(t,n)&&e.push(n);return e},t.exports=e},function(t,e,n){var r=n(16),i=n(10),a=Math.pow(2,53)-1;e=function(t){if(!t)return!1;var e=t.length;return r(e)&&e>=0&&e<=a&&!i(t)},t.exports=e},function(t,e){e=function(t){var e=typeof t;return!!t&&("function"===e||"object"===e)},t.exports=e},function(t,e,n){var r=n(10),i=n(6),a=n(12),o=n(17),s=n(32),u=n(35),l=n(36);e=function(t,e,n){return null==t?u:r(t)?o(t,e,n):i(t)&&!a(t)?s(t):l(t)},t.exports=e},function(t,e,n){var r=n(5),i=n(19),a=n(12),o=n(1);e=function(t){return t?a(t)?t:r(t)&&!o(t)?i(t):[t]:[]},t.exports=e},function(t,e){var n=Object.prototype.toString;e=function(t){return n.call(t)},t.exports=e},function(t,e,n){var r=n(9);e=function(t){var e=r(t);return"[object Function]"===e||"[object GeneratorFunction]"===e||"[object AsyncFunction]"===e},t.exports=e},function(t,e){var n=Object.prototype.hasOwnProperty;e=function(t,e){return n.call(t,e)},t.exports=e},function(t,e,n){var r=n(9);e=Array.isArray?Array.isArray:function(t){return"[object Array]"===r(t)},t.exports=e},function(t,e,n){var r=n(14),i=n(1),a=n(0),o=new(e=r({className:"Select",initialize:function(t){return this.length=0,t?i(t)?o.find(t):void(t.nodeType&&(this[0]=t,this.length=1)):this},find:function(t){var n=new e;return this.each((function(){!function(t,e){for(var n=e.length,r=t.length,i=0;i<n;i++)t[r++]=e[i];t.length=r}(n,this.querySelectorAll(t))})),n},each:function(t){return a(this,(function(e,n){t.call(e,n,e)})),this}}))(document);t.exports=e},function(t,e,n){var r=n(27),i=n(8),a=n(38),o=n(18),s=n(40),u=(e=function(t,e){return u.extend(t,e)}).Base=function t(e,n,u){u=u||{};var l=n.className||o(n,"initialize.name")||"";delete n.className;var c=function(){var t=i(arguments);return this.initialize&&this.initialize.apply(this,t)||this};if(!s)try{c=new Function("toArr","return function "+l+"(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(i)}catch(t){}return a(c,e),c.prototype.constructor=c,c.extend=function(e,n){return t(c,e,n)},c.inherits=function(t){a(c,t)},c.methods=function(t){return r(c.prototype,t),c},c.statics=function(t){return r(c,t),c},c.methods(n).statics(u),c}(Object,{className:"Base",callSuper:function(t,e,n){return t.prototype[e].apply(this,n)},toString:function(){return this.constructor.name}});t.exports=e},function(t,e,n){var r=n(3),i=n(0);e=function(t,e){return function(n){return i(arguments,(function(a,o){if(0!==o){var s=t(a);i(s,(function(t){e&&!r(n[t])||(n[t]=a[t])}))}})),n}},t.exports=e},function(t,e,n){var r=n(9);e=function(t){return"[object Number]"===r(t)},t.exports=e},function(t,e,n){var r=n(3);e=function(t,e,n){if(r(e))return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,a){return t.call(e,n,r,i,a)}}return function(){return t.apply(e,arguments)}},t.exports=e},function(t,e,n){var r=n(3),i=n(37);e=function(t,e){var n;for(n=(e=i(e,t)).shift();!r(n);){if(null==(t=t[n]))return;n=e.shift()}return t},t.exports=e},function(t,e,n){var r=n(7),i=n(4),a=n(5);e=function(t,e,n){e=r(e,n);for(var o=!a(t)&&i(t),s=(o||t).length,u=Array(s),l=0;l<s;l++){var c=o?o[l]:l;u[l]=e(t[c],c,t)}return u},t.exports=e},function(t,e,n){var r=n(21);e=function(t){return r(t).join("-")},t.exports=e},function(t,e){var n=/([A-Z])/g,r=/[_.\- ]+/g,i=/(^-)|(-$)/g;e=function(t){return(t=t.replace(n,"-$1").toLowerCase().replace(r,"-").replace(i,"")).split("-")},t.exports=e},function(t,e,n){var r=n(44),i=n(1),a=n(5),o=n(45);e=function(t,e){return i(t)?t.indexOf(e)>-1:(a(t)||(t=o(t)),r(t,e)>=0)},t.exports=e},function(t,e,n){var r=n(8),i=n(6),a=n(1),o=n(0),s=n(3),u=n(2);(e=function(t,e,n){if(t=u(t),s(n)&&a(e))return function(t,e){return t.getAttribute(e)}(t[0],e);var r=e;i(r)||((r={})[e]=n),function(t,e){o(t,(function(t){o(e,(function(e,n){t.setAttribute(n,e)}))}))}(t,r)}).remove=function(t,e){t=u(t),e=r(e),o(t,(function(t){o(e,(function(e){t.removeAttribute(e)}))}))},t.exports=e},function(t,e,n){"use strict";var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(25);var a,o,s=i(n(26)),u=i(n(59)),l=i(n(64)),c=i(n(65)),_=function(){function t(t,e){var n=void 0===e?{}:e,r=n.position,i=void 0===r?{x:"right",y:"bottom"}:r,a=n.duration,o=void 0===a?2e3:a;this.notifications=[],this.$container=s.default(t),this.position=i,this.duration=o,this.appendTpl()}return t.prototype.notify=function(t,e){var n=this,r=(void 0===e?{}:e).duration,i=void 0===r?this.duration:r,a=new h(this,t);this.notifications.push(a),this.add(a),i&&setTimeout((function(){return n.remove(a.id)}),i)},t.prototype.dismissAll=function(){for(var t=this.notifications,e=t[0];e;)this.remove(e.id),e=t[0]},t.prototype.add=function(t){this.$notification.append(t.html())},t.prototype.remove=function(t){var e=this.notifications,n=c.default(e,(function(e){return e.id===t}));if(n){this.$notification.find("#"+t).remove();var r=e.indexOf(n);e.splice(r,1)}},t.prototype.appendTpl=function(){var t=this.$container,e=this.position,n=e.x,i=e.y,o="flex-end",s="flex-end";switch(n){case"center":s="center";break;case"left":s="flex-start"}"top"===i&&(o="flex-start"),t.append(u.default(a||(a=r(['\n      <div class="luna-notification" style="justify-content: ',"; align-items: ",'"></div>\n    '],['\n      <div class="luna-notification" style="justify-content: ',"; align-items: ",'"></div>\n    '])),o,s)),this.$notification=t.find(".luna-notification")},t}(),h=function(){function t(t,e){this.container=t,this.content=e,this.id=l.default("luna-notification-")}return t.prototype.html=function(){var t=this.container.position.y;return u.default(o||(o=r(['\n      <div id="','" class="luna-notification-item luna-notification-','">\n        <div class="luna-notification-content">',"</div>\n      </div>\n    "],['\n      <div id="','" class="luna-notification-item luna-notification-','">\n        <div class="luna-notification-content">',"</div>\n      </div>\n    "])),this.id,"bottom"===t?"lower":"upper",this.content)},t}();t.exports=_},function(t,e,n){},function(t,e,n){var r=n(13),i=n(41),a=n(42),o=n(43),s=n(23),u=n(50),l=n(51),c=n(52),_=n(53),h=n(54),p=n(56),f=n(58),d=n(3),v=n(1);e=function(t){return new r(t)},r.methods({offset:function(){return i(this)},hide:function(){return this.css("display","none")},show:function(){return a(this),this},first:function(){return e(this[0])},last:function(){return e(l(this))},get:function(t){return this[t]},eq:function(t){return e(this[t])},on:function(t,e,n){return h.on(this,t,e,n),this},off:function(t,e,n){return h.off(this,t,e,n),this},html:function(t){var e=u.html(this,t);return d(t)?e:this},text:function(t){var e=u.text(this,t);return d(t)?e:this},val:function(t){var e=u.val(this,t);return d(t)?e:this},css:function(t,e){var n=o(this,t,e);return g(t,e)?n:this},attr:function(t,e){var n=s(this,t,e);return g(t,e)?n:this},data:function(t,e){var n=_(this,t,e);return g(t,e)?n:this},rmAttr:function(t){return s.remove(this,t),this},remove:function(){return c(this),this},addClass:function(t){return p.add(this,t),this},rmClass:function(t){return p.remove(this,t),this},toggleClass:function(t){return p.toggle(this,t),this},hasClass:function(t){return p.has(this,t)},parent:function(){return e(this[0].parentNode)},append:function(t){return f.append(this,t),this},prepend:function(t){return f.prepend(this,t),this},before:function(t){return f.before(this,t),this},after:function(t){return f.after(this,t),this}});var g=function(t,e){return d(e)&&v(t)};t.exports=e},function(t,e,n){e=n(15)(n(28)),t.exports=e},function(t,e,n){var r=n(4),i=n(29),a=n(30),o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols;e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.prototype,u=void 0===n||n,l=e.unenumerable,c=void 0!==l&&l,_=e.symbol,h=void 0!==_&&_,p=[];if((c||h)&&o){var f=r;c&&o&&(f=o);do{p=p.concat(f(t)),h&&s&&(p=p.concat(s(t)))}while(u&&(t=i(t))&&t!==Object.prototype);p=a(p)}else if(u)for(var d in t)p.push(d);else p=r(t);return p},t.exports=e},function(t,e,n){var r=n(6),i=n(10),a=Object.getPrototypeOf,o={}.constructor;e=function(t){if(r(t)){if(a)return a(t);var e=t.__proto__;return e||null===e?e:i(t.constructor)?t.constructor.prototype:t instanceof o?o.prototype:void 0}},t.exports=e},function(t,e,n){var r=n(31);function i(t,e){return t===e}e=function(t,e){return e=e||i,r(t,(function(t,n,r){for(var i=r.length;++n<i;)if(e(t,r[n]))return!1;return!0}))},t.exports=e},function(t,e,n){var r=n(7),i=n(0);e=function(t,e,n){var a=[];return e=r(e,n),i(t,(function(t,n,r){e(t,n,r)&&a.push(t)})),a},t.exports=e},function(t,e,n){var r=n(33),i=n(34);e=function(t){return t=r({},t),function(e){return i(e,t)}},t.exports=e},function(t,e,n){var r=n(4);e=n(15)(r),t.exports=e},function(t,e,n){var r=n(4);e=function(t,e){var n=r(e),i=n.length;if(null==t)return!i;t=Object(t);for(var a=0;a<i;a++){var o=n[a];if(e[o]!==t[o]||!(o in t))return!1}return!0},t.exports=e},function(t,e){e=function(t){return t},t.exports=e},function(t,e,n){var r=n(12),i=n(18);e=function(t){return r(t)?function(e){return i(e,t)}:(e=t,function(t){return null==t?void 0:t[e]});var e},t.exports=e},function(t,e,n){var r=n(11),i=n(12);e=function(t,e){if(i(t))return t;if(e&&r(e,t))return[t];var n=[];return t.replace(a,(function(t,e,r,i){n.push(r?i.replace(o,"$1"):e||t)})),n};var a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g;t.exports=e},function(t,e,n){var r=n(39);e=function(t,e){t.prototype=r(e.prototype)},t.exports=e},function(t,e,n){var r=n(6);e=function(t){if(!r(t))return{};if(i)return i(t);function e(){}return e.prototype=t,new e};var i=Object.create;t.exports=e},function(t,e,n){var r=n(10);e="undefined"!=typeof wx&&r(wx.openLocation),t.exports=e},function(t,e,n){var r=n(2);e=function(t){var e=(t=r(t))[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},t.exports=e},function(t,e,n){var r=n(0),i=n(2);e=function(t){t=i(t),r(t,(function(t){(function(t){return"none"==getComputedStyle(t,"").getPropertyValue("display")})(t)&&(t.style.display=function(t){var e,n;return a[t]||(e=document.createElement(t),document.documentElement.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),a[t]=n),a[t]}(t.nodeName))}))};var a={};t.exports=e},function(t,e,n){var r=n(1),i=n(6),a=n(20),o=n(3),s=n(22),u=n(16),l=n(2),c=n(46),_=n(0);e=function(t,e,n){if(t=l(t),o(n)&&r(e))return function(t,e){return t.style[c(e)]||getComputedStyle(t,"").getPropertyValue(e)}(t[0],e);var p=e;i(p)||((p={})[e]=n),function(t,e){_(t,(function(t){var n=";";_(e,(function(t,e){e=c.dash(e),n+=e+":"+function(t,e){return u(e)&&!s(h,a(t))?e+"px":e}(e,t)+";"})),t.style.cssText+=n}))}(t,p)};var h=["column-count","columns","font-weight","line-weight","opacity","z-index","zoom"];t.exports=e},function(t,e){e=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},t.exports=e},function(t,e,n){var r=n(0);e=function(t){var e=[];return r(t,(function(t){e.push(t)})),e},t.exports=e},function(t,e,n){var r=n(47),i=n(48),a=n(49),o=n(11),s=n(20);(e=r((function(t){if(t=t.replace(l,""),t=i(t),o(c,t))return t;for(var e=u.length;e--;){var n=u[e]+a(t);if(o(c,n))return n}return t}))).dash=r((function(t){var n=e(t);return(l.test(n)?"-":"")+s(n)}));var u=["O","ms","Moz","Webkit"],l=/^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,c=document.createElement("p").style;t.exports=e},function(t,e,n){var r=n(11);e=function(t,e){var n=function(i){var a=n.cache,o=""+(e?e.apply(this,arguments):i);return r(a,o)||(a[o]=t.apply(this,arguments)),a[o]};return n.cache={},n},t.exports=e},function(t,e,n){var r=n(21);function i(t,e){this[e]=t.replace(/\w/,(function(t){return t.toUpperCase()}))}e=function(t){var e=r(t),n=e[0];return e.shift(),e.forEach(i,e),n+e.join("")},t.exports=e},function(t,e){e=function(t){return t.length<1?t:t[0].toUpperCase()+t.slice(1)},t.exports=e},function(t,e,n){var r=n(3),i=n(0),a=n(2);function o(t){return function(e,n){var o=(e=a(e))[0];if(r(n))return o?o[t]:"";o&&i(e,(function(e){e[t]=n}))}}e={html:o("innerHTML"),text:o("textContent"),val:o("value")},t.exports=e},function(t,e){e=function(t){var e=t?t.length:0;if(e)return t[e-1]},t.exports=e},function(t,e,n){var r=n(0),i=n(2);e=function(t){t=i(t),r(t,(function(t){var e=t.parentNode;e&&e.removeChild(t)}))},t.exports=e},function(t,e,n){var r=n(23),i=n(1),a=n(6),o=n(0);n(2),e=function(t,e,n){var s=e;return i(e)&&(s="data-"+e),a(e)&&(s={},o(e,(function(t,e){s["data-"+e]=t}))),r(t,s,n)},t.exports=e},function(t,e,n){var r=n(55),i=n(3),a=n(2),o=n(0);function s(t){return function(e,n,s,u){e=a(e),i(u)&&(u=s,s=void 0),o(e,(function(e){r[t](e,n,s,u)}))}}e={on:s("add"),off:s("remove")},t.exports=e},function(t,e,n){var r=n(14),i=n(22);function a(){return!0}function o(){return!1}function s(t){var n,r=this.events[t.type],i=u.call(this,t,r);t=new e.Event(t);for(var a,o,s=0;(o=i[s++])&&!t.isPropagationStopped();)for(t.curTarget=o.el,a=0;(n=o.handlers[a++])&&!t.isImmediatePropagationStopped();)!1===n.handler.apply(o.el,[t])&&(t.preventDefault(),t.stopPropagation())}function u(t,e){var n,r,a,o,s=t.target,u=[],l=e.delegateCount;if(s.nodeType)for(;s!==this;s=s.parentNode||this){for(r=[],o=0;o<l;o++)void 0===r[n=(a=e[o]).selector+" "]&&(r[n]=i(this.querySelectorAll(n),s)),r[n]&&r.push(a);r.length&&u.push({el:s,handlers:r})}return l<e.length&&u.push({el:this,handlers:e.slice(l)}),u}e={add:function(t,e,n,r){var i,a={selector:n,handler:r};t.events||(t.events={}),(i=t.events[e])||((i=t.events[e]=[]).delegateCount=0,t.addEventListener(e,(function(){s.apply(t,arguments)}),!1)),n?i.splice(i.delegateCount++,0,a):i.push(a)},remove:function(t,e,n,r){var i=t.events;if(i&&i[e])for(var a,o=i[e],s=o.length;s--;)a=o[s],n&&a.selector!=n||a.handler!=r||(o.splice(s,1),a.selector&&o.delegateCount--)},Event:r({className:"Event",initialize:function(t){this.origEvent=t},isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o,preventDefault:function(){var t=this.origEvent;this.isDefaultPrevented=a,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.origEvent;this.isPropagationStopped=a,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.origEvent;this.isImmediatePropagationStopped=a,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}})},t.exports=e},function(t,e,n){var r=n(8),i=n(57),a=n(2),o=n(1),s=n(0);function u(t){return o(t)?t.split(/\s+/):r(t)}e={add:function(t,n){t=a(t);var r=u(n);s(t,(function(t){var n=[];s(r,(function(r){e.has(t,r)||n.push(r)})),0!==n.length&&(t.className+=(t.className?" ":"")+n.join(" "))}))},has:function(t,e){t=a(t);var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return i(t,(function(t){return n.test(t.className)}))},toggle:function(t,n){t=a(t),s(t,(function(t){if(!e.has(t,n))return e.add(t,n);e.remove(t,n)}))},remove:function(t,e){t=a(t);var n=u(e);s(t,(function(t){s(n,(function(e){t.classList.remove(e)}))}))}},t.exports=e},function(t,e,n){var r=n(7),i=n(5),a=n(4);e=function(t,e,n){e=r(e,n);for(var o=!i(t)&&a(t),s=(o||t).length,u=0;u<s;u++){var l=o?o[u]:u;if(e(t[l],l,t))return!0}return!1},t.exports=e},function(t,e,n){var r=n(0),i=n(2);function a(t){return function(e,n){e=i(e),r(e,(function(e){e.insertAdjacentHTML(t,n)}))}}e={before:a("beforebegin"),after:a("afterend"),append:a("beforeend"),prepend:a("afterbegin")},t.exports=e},function(t,e,n){var r=n(1),i=n(8),a=n(60),o=n(19),s=n(61);e=function(t){r(t)&&(t=i(t));for(var e="",n=arguments.length,l=new Array(n>1?n-1:0),c=1;c<n;c++)l[c-1]=arguments[c];for(var _=0,h=t.length;_<h;_++)e+=t[_],l[_]&&(e+=l[_]);for(var p=e.split("\n"),f=[],d=0,v=p.length;d<v;d++){var g=p[d],m=g.match(u);m&&f.push(m[1].length)}var b=f.length>0?a.apply(null,f):0;return s(o(p,(function(t){return" "===t[0]?t.slice(b):t})).join("\n"))};var u=/^(\s+)\S+/;t.exports=e},function(t,e){e=function(){for(var t=arguments,e=t[0],n=1,r=t.length;n<r;n++)t[n]<e&&(e=t[n]);return e},t.exports=e},function(t,e,n){var r=n(62),i=n(63),a=/^\s+|\s+$/g;e=function(t,e){return null==e?t.replace(a,""):r(i(t,e),e)},t.exports=e},function(t,e){var n=/^\s+/;e=function(t,e){if(null==e)return t.replace(n,"");for(var r,i,a=0,o=t.length,s=e.length,u=!0;u&&a<o;)for(u=!1,r=-1,i=t.charAt(a);++r<s;)if(i===e[r]){u=!0,a++;break}return a>=o?"":t.substr(a,o)},t.exports=e},function(t,e){var n=/\s+$/;e=function(t,e){if(null==e)return t.replace(n,"");for(var r,i,a=t.length-1,o=e.length,s=!0;s&&a>=0;)for(s=!1,r=-1,i=t.charAt(a);++r<o;)if(i===e[r]){s=!0,a--;break}return a>=0?t.substring(0,a+1):""},t.exports=e},function(t,e){var n=0;e=function(t){var e=++n+"";return t?t+e:e},t.exports=e},function(t,e,n){var r=n(66),i=n(67),a=n(5),o=n(3);e=function(t,e,n){var s=(a(t)?i:r)(t,e,n);if(!o(s)&&-1!==s)return t[s]},t.exports=e},function(t,e,n){var r=n(7),i=n(4);e=function(t,e,n){e=r(e,n);for(var a,o=i(t),s=0,u=o.length;s<u;s++)if(e(t[a=o[s]],a,t))return a},t.exports=e},function(t,e,n){var r=n(7);e=function(t,e,n,i){i=i||1,e=r(e,n);for(var a=t.length,o=i>0?0:a-1;o>=0&&o<a;){if(e(t[o],o,t))return o;o+=i}return-1},t.exports=e}])},function(t,e,n){var r=n(20),i=n(75);function a(e,n,o){return i()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a},function(t,e,n){t.exports=n(102).default},function(t,e,n){var r,i;
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */window,void 0===(i="function"==typeof(r=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],r=n.length;function i(t){var n=getComputedStyle(t);return n||e("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),n}var a,o=!1;function s(e){if(function(){if(!o){o=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(e);var r=i(e);a=200==Math.round(t(r.width)),s.isBoxSizeOuter=a,n.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var u=i(e);if("none"==u.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<r;e++)t[n[e]]=0;return t}();var l={};l.width=e.offsetWidth,l.height=e.offsetHeight;for(var c=l.isBorderBox="border-box"==u.boxSizing,_=0;_<r;_++){var h=n[_],p=u[h],f=parseFloat(p);l[h]=isNaN(f)?0:f}var d=l.paddingLeft+l.paddingRight,v=l.paddingTop+l.paddingBottom,g=l.marginLeft+l.marginRight,m=l.marginTop+l.marginBottom,b=l.borderLeftWidth+l.borderRightWidth,y=l.borderTopWidth+l.borderBottomWidth,w=c&&a,x=t(u.width);!1!==x&&(l.width=x+(w?0:d+b));var k=t(u.height);return!1!==k&&(l.height=k+(w?0:v+y)),l.innerWidth=l.width-(d+b),l.innerHeight=l.height-(v+y),l.outerWidth=l.width+g,l.outerHeight=l.height+m,l}}return s})?r.call(e,n,e,t):r)||(t.exports=i)},function(t,e,n){var r,i;
/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */!function(a,o){r=[n(34)],void 0===(i=function(t){return function(t,e){"use strict";function n(){}var r=n.prototype=Object.create(e.prototype);r.bindHandles=function(){this._bindHandles(!0)},r.unbindHandles=function(){this._bindHandles(!1)},r._bindHandles=function(e){for(var n=(e=void 0===e||e)?"addEventListener":"removeEventListener",r=e?this._touchActionValue:"",i=0;i<this.handles.length;i++){var a=this.handles[i];this._bindStartEvent(a,e),a[n]("click",this),t.PointerEvent&&(a.style.touchAction=r)}},r._touchActionValue="none",r.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var i={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},a={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return r.okayPointerDown=function(t){var e=i[t.target.nodeName],n=a[t.target.type],r=!e||n;return r||this._pointerReset(),r},r.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},r.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,n]),this._dragMove(t,e,n)},r._dragPointerMove=function(t,e){var n={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(n)&&this._dragStart(t,e),n},r.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},r._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},r._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},r.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},r._dragMove=function(t,e,n){this.isDragging&&this.dragMove(t,e,n)},r.dragMove=function(t,e,n){t.preventDefault(),this.emitEvent("dragMove",[t,e,n])},r._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},r.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},r.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},r._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},r.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},n.getPointerPoint=e.getPointerPoint,n}(a,t)}.apply(e,r))||(t.exports=i)}(window)},function(t,e,n){var r,i;
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */!function(a,o){r=[n(35)],void 0===(i=function(t){return function(t,e){"use strict";function n(){}var r=n.prototype=Object.create(e.prototype);r.bindStartEvent=function(t){this._bindStartEvent(t,!0)},r.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},r._bindStartEvent=function(e,n){var r=(n=void 0===n||n)?"addEventListener":"removeEventListener",i="mousedown";t.PointerEvent?i="pointerdown":"ontouchstart"in t&&(i="touchstart"),e[r](i,this)},r.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.getTouch=function(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},r.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},r.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},r.onpointerdown=function(t){this._pointerDown(t,t)},r._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},r.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var i={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return r._bindPostStartEvents=function(e){if(e){var n=i[e.type];n.forEach((function(e){t.addEventListener(e,this)}),this),this._boundPointerEvents=n}},r._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach((function(e){t.removeEventListener(e,this)}),this),delete this._boundPointerEvents)},r.onmousemove=function(t){this._pointerMove(t,t)},r.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},r.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},r._pointerMove=function(t,e){this.pointerMove(t,e)},r.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},r.onmouseup=function(t){this._pointerUp(t,t)},r.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},r.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},r._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},r._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},r._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},r.pointerDone=function(){},r.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},r.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},r._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},r.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}(a,t)}.apply(e,r))||(t.exports=i)}(window)},function(t,e,n){var r,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(r=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},r=n[t]=n[t]||[];return-1==r.indexOf(e)&&r.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=n.indexOf(e);return-1!=r&&n.splice(r,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var r=this._onceEvents&&this._onceEvents[t],i=0;i<n.length;i++){var a=n[i];r&&r[a]&&(this.off(t,a),delete r[a]),a.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?r.call(e,n,e,t):r)||(t.exports=i)},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new a(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new a(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(37),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(16))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,a,o,s,u=1,l={},c=!1,_=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){f(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((a=new MessageChannel).port1.onmessage=function(t){f(t.data)},r=function(t){a.port2.postMessage(t)}):_&&"onreadystatechange"in _.createElement("script")?(i=_.documentElement,r=function(t){var e=_.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(f,0,t)}:(o="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(o)&&f(+e.data.slice(o.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(o+e,"*")}),h.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return l[u]=i,r(u),u++},h.clearImmediate=p}function p(t){delete l[t]}function f(t){if(c)setTimeout(f,0,t);else{var e=l[t];if(e){c=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),c=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(16),n(21))},function(t,e,n){var r=n(1);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_settings{$oy:auto;$wos:touch}#_settings ._separator{$h:10px}#_settings ._text{$p:10px;$c:var(--accent);$fs:12px}#_settings ._color,#_settings ._range,#_settings ._select{$cu:pointer}#_settings ._color ._head,#_settings ._range ._head,#_settings ._select ._head,#_settings ._switch{$p:10px;$b:var(--darker-background);$fs:14px;$bb:1px solid var(--border);$bt:1px solid var(--border);$c:var(--primary);$mt:-1px}#_settings ._color ._head,#_settings ._range ._head,#_settings ._select ._head{$tr:background .3s,color .3s}#_settings ._color ._head span,#_settings ._range ._head span,#_settings ._select ._head span{$f:right}#_settings ._color ._head:active,#_settings ._range ._head:active,#_settings ._select ._head:active{$b:var(--highlight);$c:var(--select-foreground)}#_settings ._color ._head span{$d:inline-block;$bo:1px solid var(--border);$w:15px;$h:15px}#_settings ._select ul{$d:none;$bb:1px solid var(--border);$c:var(--foreground)}#_settings ._select ul._open{$d:block}#_settings ._select ul li{$p:10px;$tr:background .3s,color .3s}#_settings ._select ul li:active{$b:var(--highlight);$c:var(--select-foreground)}#_settings ._color ul{$d:none;$p:10px;$fs:0;$bb:1px solid var(--border)}#_settings ._color ul._open{$d:block}#_settings ._color ul li{$d:inline-block;$w:20px;$bo:1px solid var(--border);$h:20px;margin-right:10px}#_settings ._range ._input-container{$d:none;$p:10px;$bb:1px solid var(--border);$po:relative}#_settings ._range ._input-container._open{$d:block}#_settings ._range ._input-container ._range-track{$h:4px;$w:100%;$p:0 10px;$po:absolute;$l:0;$t:16px}#_settings ._range ._input-container ._range-track ._range-track-bar{$b:var(--darker-background);$bra:2px;$o:hidden;$w:100%;$h:4px}#_settings ._range ._input-container ._range-track ._range-track-bar ._range-track-progress{$h:100%;$b:var(--accent);$w:50%}#_settings ._range ._input-container input{-webkit-appearance:none;$b:0 0;$h:4px;$w:100%;$po:relative;$t:-3px;$m:0 auto;$ou:0;$bra:2px}#_settings ._range ._input-container input::-webkit-slider-thumb{-webkit-appearance:none;$po:relative;$t:0;$z:1;$w:16px;$bo:none;$h:16px;$bra:10px;$bo:1px solid var(--border);$b:radial-gradient(circle at center,var(--dark) 0,var(--dark) 15%,var(--light) 22%,var(--light) 100%)}#_settings ._switch ._checkbox{$f:right;$po:relative;vertical-align:top;$w:46px;$h:20px;$p:3px;$bra:18px;$bo:1px solid var(--border);$cu:pointer;$bi:linear-gradient(to bottom,var(--dark),var(--light) 25px)}#_settings ._switch ._checkbox ._input{$po:absolute;$t:0;$l:0;opacity:0}#_settings ._switch ._checkbox ._label{$pe:none;$po:relative;$d:block;$h:12px;$fs:10px;$tt:uppercase;$b:var(--darker-background);$bra:inherit;$bs:inset 0 1px 2px rgba(0,0,0,.12),inset 0 0 2px rgba(0,0,0,.15);$tr:.15s ease-out;transition-property:opacity background}#_settings ._switch ._checkbox ._label:after,#_settings ._switch ._checkbox ._label:before{$po:absolute;$t:50%;$mt:-.5em;$lh:1;$tr:inherit}#_settings ._switch ._checkbox ._input:checked~._label{$b:var(--accent);$bs:inset 0 1px 2px rgba(0,0,0,.15),inset 0 0 3px rgba(0,0,0,.2)}#_settings ._switch ._checkbox ._input:checked~._label:before{opacity:0}#_settings ._switch ._checkbox ._input:checked~._label:after{opacity:1}#_settings ._switch ._checkbox ._handle{$po:absolute;$pe:none;$t:0;$l:0;$w:18px;$h:18px;$bra:10px;$bs:1px 1px 5px rgba(0,0,0,.2);$bi:linear-gradient(to bottom,var(--light) 40%,var(--dark));$tr:left .15s ease-out}#_settings ._switch ._checkbox ._handle:before{$co:'';$po:absolute;$t:50%;$l:50%;$m:-6px 0 0 -6px;$w:12px;$h:12px;$bra:6px;$bs:inset 0 1px rgba(0,0,0,.02);$bi:linear-gradient(to bottom,var(--dark),var(--light))}#_settings ._switch ._checkbox ._input:checked~._handle{$l:30px;$bs:-1px 1px 5px rgba(0,0,0,.2)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){return' checked="checked" '},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=null!=e?e:t.nullContext||{},l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div id="'+s(o(null!=e?l(e,"id"):e,e))+'" '+(null!=(a=l(n,"class").call(u,"switch",{name:"class",hash:{},data:i}))?a:"")+"> "+s(o(null!=e?l(e,"desc"):e,e))+" <label "+(null!=(a=l(n,"class").call(u,"checkbox",{name:"class",hash:{},data:i}))?a:"")+'><input type="checkbox" '+(null!=(a=l(n,"class").call(u,"input",{name:"class",hash:{},data:i}))?a:"")+' data-id="'+s(o(null!=e?l(e,"id"):e,e))+'" '+(null!=(a=l(n,"if").call(u,null!=e?l(e,"val"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+"> <span "+(null!=(a=l(n,"class").call(u,"label",{name:"class",hash:{},data:i}))?a:"")+"></span> <span "+(null!=(a=l(n,"class").call(u,"handle",{name:"class",hash:{},data:i}))?a:"")+"></span></label></div>"},useData:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var a=i(n(22)),o=r(n(52)),s=r(n(13)),u=i(n(10)),l=i(n(53)),c=r(n(55));function _(){var t=new a.HandlebarsEnvironment;return u.extend(t,a),t.SafeString=o.default,t.Exception=s.default,t.Utils=u,t.escapeExpression=u.escapeExpression,t.VM=l,t.template=function(e){return l.template(e,t)},t}var h=_();h.create=_,c.default(h),h.default=h,e.default=h,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10);e.default=function(t){t.registerHelper("blockHelperMissing",(function(e,n){var i=n.inverse,a=n.fn;if(!0===e)return a(this);if(!1===e||null==e)return i(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var o=r.createFrame(n.data);o.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:o}}return a(e,n)}))},t.exports=e.default},function(t,e,n){"use strict";(function(r){e.__esModule=!0;var i,a=n(10),o=n(13),s=(i=o)&&i.__esModule?i:{default:i};e.default=function(t){t.registerHelper("each",(function(t,e){if(!e)throw new s.default("Must pass iterator to #each");var n,i=e.fn,o=e.inverse,u=0,l="",c=void 0,_=void 0;function h(e,n,r){c&&(c.key=e,c.index=n,c.first=0===n,c.last=!!r,_&&(c.contextPath=_+e)),l+=i(t[e],{data:c,blockParams:a.blockParams([t[e],e],[_+e,null])})}if(e.data&&e.ids&&(_=a.appendContextPath(e.data.contextPath,e.ids[0])+"."),a.isFunction(t)&&(t=t.call(this)),e.data&&(c=a.createFrame(e.data)),t&&"object"==typeof t)if(a.isArray(t))for(var p=t.length;u<p;u++)u in t&&h(u,u,u===t.length-1);else if(r.Symbol&&t[r.Symbol.iterator]){for(var f=[],d=t[r.Symbol.iterator](),v=d.next();!v.done;v=d.next())f.push(v.value);for(p=(t=f).length;u<p;u++)h(u,u,u===t.length-1)}else n=void 0,Object.keys(t).forEach((function(t){void 0!==n&&h(n,u-1),n=t,u++})),void 0!==n&&h(n,u-1,!0);return 0===u&&(l=o(this)),l}))},t.exports=e.default}).call(this,n(16))},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(13),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(10),a=n(13),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new o.default("#if requires exactly one argument");return i.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||i.isEmpty(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,n){if(2!=arguments.length)throw new o.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",(function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),e[0]=i,t.log.apply(t,e)}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",(function(t,e,n){return t?n.lookupProperty(t,e):t}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(10),a=n(13),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new o.default("#with requires exactly one argument");i.isFunction(t)&&(t=t.call(this));var n=e.fn;if(i.isEmpty(t))return e.inverse(this);var r=e.data;return e.data&&e.ids&&((r=i.createFrame(e.data)).contextPath=i.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:r,blockParams:i.blockParams([t],[r&&r.contextPath])})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){a.default(t)};var r,i=n(50),a=(r=i)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10);e.default=function(t){t.registerDecorator("inline",(function(t,e,n,i){var a=t;return e.partials||(e.partials={},a=function(i,a){var o=n.partials;n.partials=r.extend({},o,e.partials);var s=t(i,a);return n.partials=o,s}),e.partials[i.args[0]]=i.fn,a}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createNewLookupObject=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(e))};var r=n(10)},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e>=s.LAST_COMPATIBLE_COMPILER_REVISION&&e<=s.COMPILER_REVISION)return;if(e<s.LAST_COMPATIBLE_COMPILER_REVISION){var r=s.REVISION_CHANGES[n],i=s.REVISION_CHANGES[e];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},e.template=function(t,e){if(!e)throw new o.default("No environment passed to template");if(!t||!t.main)throw new o.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0];var r={strict:function(t,e,n){if(!t||!(e in t))throw new o.default('"'+e+'" not defined in '+t,{loc:n});return t[e]},lookupProperty:function(t,e){var n=t[e];return null==n||Object.prototype.hasOwnProperty.call(t,e)||c.resultIsAllowed(n,r.protoAccessControl,e)?n:void 0},lookup:function(t,e){for(var n=t.length,i=0;i<n;i++){if(null!=(t[i]&&r.lookupProperty(t[i],e)))return t[i][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:i.escapeExpression,invokePartial:function(n,r,a){a.hash&&(r=i.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,a);var s=i.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),u=e.VM.invokePartial.call(this,n,r,s);if(null==u&&e.compile&&(a.partials[a.name]=e.compile(n,t.compilerOptions,e),u=a.partials[a.name](r,s)),null!=u){if(a.indent){for(var l=u.split("\n"),c=0,_=l.length;c<_&&(l[c]||c+1!==_);c++)l[c]=a.indent+l[c];u=l.join("\n")}return u}throw new o.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,i){var a=this.programs[t],o=this.fn(t);return e||i||r||n?a=_(this,t,o,e,n,r,i):a||(a=this.programs[t]=_(this,t,o)),a},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=i.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function a(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=n.data;a._setup(n),!n.partial&&t.useData&&(i=p(e,i));var o=void 0,s=t.useBlockParams?[]:void 0;function u(e){return""+t.main(r,e,r.helpers,r.partials,i,s,o)}return t.useDepths&&(o=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(u=f(t.main,u,r,n.depths||[],i,s))(e,n)}return a.isTop=!0,a._setup=function(a){if(a.partial)r.protoAccessControl=a.protoAccessControl,r.helpers=a.helpers,r.partials=a.partials,r.decorators=a.decorators,r.hooks=a.hooks;else{var o=i.extend({},e.helpers,a.helpers);!function(t,e){Object.keys(t).forEach((function(n){var r=t[n];t[n]=function(t,e){var n=e.lookupProperty;return l.wrapHelper(t,(function(t){return i.extend({lookupProperty:n},t)}))}(r,e)}))}(o,r),r.helpers=o,t.usePartial&&(r.partials=r.mergeIfNeeded(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(r.decorators=i.extend({},e.decorators,a.decorators)),r.hooks={},r.protoAccessControl=c.createProtoAccessControl(a);var s=a.allowCallsToHelperMissing||n;u.moveHelperToHooks(r,"helperMissing",s),u.moveHelperToHooks(r,"blockHelperMissing",s)}},a._child=function(e,n,i,a){if(t.useBlockParams&&!i)throw new o.default("must pass block params");if(t.useDepths&&!a)throw new o.default("must pass parent depths");return _(r,e,t[e],n,0,i,a)},a},e.wrapProgram=_,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;n.fn&&n.fn!==h&&function(){n.data=s.createFrame(n.data);var t=n.fn;a=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=i.extend({},n.partials,t.partials))}();void 0===t&&a&&(t=a);if(void 0===t)throw new o.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=h;var r,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(10)),a=n(13),o=(r=a)&&r.__esModule?r:{default:r},s=n(22),u=n(23),l=n(54),c=n(25);function _(t,e,n,r,i,a,o){function s(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=o;return!o||e==o[0]||e===t.nullContext&&null===o[0]||(s=[e].concat(o)),n(t,e,t.helpers,t.partials,i.data||r,a&&[i.blockParams].concat(a),s)}return(s=f(n,s,t,o,r,a)).program=e,s.depth=o?o.length:0,s.blockParams=i||0,s}function h(){return""}function p(t,e){return e&&"root"in e||((e=e?s.createFrame(e):{}).root=t),e}function f(t,e,n,r,a,o){if(t.decorator){var s={};e=t.decorator(e,s,n,r&&r[0],a,o,r),i.extend(e,s)}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.wrapHelper=function(t,e){if("function"!=typeof t)return t;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=e(n),t.apply(this,arguments)}}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(16))},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){return" <li>"+t.escapeExpression(t.lambda(e,e))+"</li> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=null!=e?e:t.nullContext||{},l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div id="'+s(o(null!=e?l(e,"id"):e,e))+'" '+(null!=(a=l(n,"class").call(u,"select",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(u,"head",{name:"class",hash:{},data:i}))?a:"")+"> "+s(o(null!=e?l(e,"desc"):e,e))+" <span "+(null!=(a=l(n,"class").call(u,"val",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(null!=e?l(e,"val"):e,e))+'</span></div><ul data-id="'+s(o(null!=e?l(e,"id"):e,e))+'"> '+(null!=(a=l(n,"each").call(u,null!=e?l(e,"selections"):e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" </ul></div>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=null!=e?e:t.nullContext||{},l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div id="'+s(o(null!=e?l(e,"id"):e,e))+'" '+(null!=(a=l(n,"class").call(u,"range",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(u,"head",{name:"class",hash:{},data:i}))?a:"")+"> "+s(o(null!=e?l(e,"desc"):e,e))+" <span "+(null!=(a=l(n,"class").call(u,"val",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(null!=e?l(e,"val"):e,e))+"</span></div><div "+(null!=(a=l(n,"class").call(u,"input-container",{name:"class",hash:{},data:i}))?a:"")+' data-id="'+s(o(null!=e?l(e,"id"):e,e))+'"><div '+(null!=(a=l(n,"class").call(u,"range-track",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(u,"range-track-bar",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(u,"range-track-progress",{name:"class",hash:{},data:i}))?a:"")+' style="width: '+s(o(null!=e?l(e,"progress"):e,e))+'%"></div></div></div><input type="range" min="'+s(o(null!=e?l(e,"min"):e,e))+'" max="'+s(o(null!=e?l(e,"max"):e,e))+'" step="'+s(o(null!=e?l(e,"step"):e,e))+'" value="'+s(o(null!=e?l(e,"val"):e,e))+'"></div></div>'},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){return' <li style="background: '+t.escapeExpression(t.lambda(e,e))+'"></li> '},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=null!=e?e:t.nullContext||{},l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div id="'+s(o(null!=e?l(e,"id"):e,e))+'" '+(null!=(a=l(n,"class").call(u,"color",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(u,"head",{name:"class",hash:{},data:i}))?a:"")+"> "+s(o(null!=e?l(e,"desc"):e,e))+" <span "+(null!=(a=l(n,"class").call(u,"val",{name:"class",hash:{},data:i}))?a:"")+' style="background-color: '+s(o(null!=e?l(e,"val"):e,e))+'"></span></div><ul data-id="'+s(o(null!=e?l(e,"id"):e,e))+'"> '+(null!=(a=l(n,"each").call(u,null!=e?l(e,"colors"):e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" </ul></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"._container ._entry-btn{$w:40px;$h:40px;$d:flex;$b:#000;opacity:.3;$bra:10px;$po:relative;$z:1000;$tr:opacity .3s;$c:#fff;$fs:25px;align-items:center;justify-content:center}._container ._entry-btn._active,._container ._entry-btn:active{opacity:.8}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"entry-btn",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-tool",{name:"class",hash:{},data:i}))?a:"")+"></span></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"._container ._nav-bar-container{$po:absolute;$w:100%;$h:40px;$l:0;$t:0;$z:100}._container ._nav-bar-container ._nav-bar{$ox:auto;$wos:touch;$bt:1px solid var(--border);$bb:1px solid var(--border);$w:100%;$h:100%;$b:var(--darker-background);$fs:0;$ws:nowrap}._container ._nav-bar-container ._nav-bar-item{$cu:pointer;$d:inline-block;$h:38px;$lh:38px;$p:0 10px;$c:var(--foreground);$fs:12px;$ta:center;$tt:capitalize;$tr:all .3s}._container ._nav-bar-container ._nav-bar-item:active{$b:var(--highlight);$c:var(--select-foreground)}._container ._nav-bar-container ._nav-bar-item._active{$b:var(--highlight);$c:var(--select-foreground)}._container ._nav-bar-container ._bottom-bar{$tr:left .3s,width .3s;$h:1px;$b:var(--accent);$po:absolute;bottom:0;$l:0}",""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,"._dev-tools{$po:absolute;$w:100%;$h:100%;$l:0;bottom:0;$b:var(--background);$z:500;$d:none;$pt:40px!important;opacity:0;$tr:opacity .3s,height .3s}._dev-tools ._tools{$o:auto;$wos:touch;$h:100%;$w:100%;$po:relative}._dev-tools ._tools ._tool{$po:absolute;$w:100%;$h:100%;$l:0;$t:0;$o:hidden;$d:none}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"dev-tools",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"nav-bar-container",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"nav-bar",{name:"class",hash:{},data:i}))?a:"")+'></div><div class="eruda-bottom-bar"></div></div><div '+(null!=(a=s(n,"class").call(o,"tools",{name:"class",hash:{},data:i}))?a:"")+"></div></div>"},useData:!0})},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}},function(t,e,n){var r=n(67);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){(e=n(8)(!1)).push([t.i,"._container ._abstract ._key{$c:var(--var-color)}._container ._abstract ._number{$c:var(--number-color)}._container ._abstract ._null{$c:var(--operator-color)}._container ._abstract ._string{$c:var(--string-color)}._container ._abstract ._boolean{$c:var(--keyword-color)}._container ._abstract ._special{$c:var(--operator-color)}",""]),t.exports=e},function(t,e,n){var r,i,a;a=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([,,function(t,e,n){"use strict";function r(t){this.__parent=t,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(t,e){this.__cache=[""],this.__indent_size=t.indent_size,this.__indent_string=t.indent_char,t.indent_with_tabs||(this.__indent_string=new Array(t.indent_size+1).join(t.indent_char)),e=e||"",t.indent_level>0&&(e=new Array(t.indent_level+1).join(this.__indent_string)),this.__base_string=e,this.__base_string_length=e.length}function a(t,e){this.__indent_cache=new i(t,e),this.raw=!1,this._end_with_newline=t.end_with_newline,this.indent_size=t.indent_size,this.wrap_line_length=t.wrap_line_length,this.indent_empty_lines=t.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var t=new r(this.__parent);return t.set_indent(this.__indent_count,this.__alignment_count),t},r.prototype.item=function(t){return t<0?this.__items[this.__items.length+t]:this.__items[t]},r.prototype.has_match=function(t){for(var e=this.__items.length-1;e>=0;e--)if(this.__items[e].match(t))return!0;return!1},r.prototype.set_indent=function(t,e){this.is_empty()&&(this.__indent_count=t||0,this.__alignment_count=e||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var t=this.__parent.current_line;return t.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),t.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),t.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===t.__items[0]&&(t.__items.splice(0,1),t.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(t){this.__items.push(t);var e=t.lastIndexOf("\n");-1!==e?this.__character_count=t.length-e:this.__character_count+=t.length},r.prototype.pop=function(){var t=null;return this.is_empty()||(t=this.__items.pop(),this.__character_count-=t.length),t},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var t="";return this.is_empty()?this.__parent.indent_empty_lines&&(t=this.__parent.get_indent_string(this.__indent_count)):(t=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),t+=this.__items.join("")),t},i.prototype.get_indent_size=function(t,e){var n=this.__base_string_length;return e=e||0,t<0&&(n=0),n+=t*this.__indent_size,n+=e},i.prototype.get_indent_string=function(t,e){var n=this.__base_string;return e=e||0,t<0&&(t=0,n=""),e+=t*this.__indent_size,this.__ensure_cache(e),n+=this.__cache[e]},i.prototype.__ensure_cache=function(t){for(;t>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var t=this.__cache.length,e=0,n="";this.__indent_size&&t>=this.__indent_size&&(t-=(e=Math.floor(t/this.__indent_size))*this.__indent_size,n=new Array(e+1).join(this.__indent_string)),t&&(n+=new Array(t+1).join(" ")),this.__cache.push(n)},a.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},a.prototype.get_line_number=function(){return this.__lines.length},a.prototype.get_indent_string=function(t,e){return this.__indent_cache.get_indent_string(t,e)},a.prototype.get_indent_size=function(t,e){return this.__indent_cache.get_indent_size(t,e)},a.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},a.prototype.add_new_line=function(t){return!(this.is_empty()||!t&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},a.prototype.get_code=function(t){this.trim(!0);var e=this.current_line.pop();e&&("\n"===e[e.length-1]&&(e=e.replace(/\n+$/g,"")),this.current_line.push(e)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==t&&(n=n.replace(/[\n]/g,t)),n},a.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},a.prototype.set_indent=function(t,e){return t=t||0,e=e||0,this.next_line.set_indent(t,e),this.__lines.length>1?(this.current_line.set_indent(t,e),!0):(this.current_line.set_indent(),!1)},a.prototype.add_raw_token=function(t){for(var e=0;e<t.newlines;e++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(t.whitespace_before),this.current_line.push(t.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},a.prototype.add_token=function(t){this.__add_space_before_token(),this.current_line.push(t),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},a.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},a.prototype.remove_indent=function(t){for(var e=this.__lines.length;t<e;)this.__lines[t]._remove_indent(),t++;this.current_line._remove_wrap_indent()},a.prototype.trim=function(t){for(t=void 0!==t&&t,this.current_line.trim();t&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},a.prototype.just_added_newline=function(){return this.current_line.is_empty()},a.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},a.prototype.ensure_empty_line_above=function(t,e){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(t)&&i.item(-1)!==e){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},t.exports.Output=a},function(t,e,n){"use strict";t.exports.Token=function(t,e,n,r){this.type=t,this.text=e,this.comments_before=null,this.newlines=n||0,this.whitespace_before=r||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}},,,function(t,e,n){"use strict";function r(t,e){this.raw_options=i(t,e),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(t,e){var n,r={};for(n in t=a(t))n!==e&&(r[n]=t[n]);if(e&&t[e])for(n in t[e])r[n]=t[e][n];return r}function a(t){var e,n={};for(e in t)n[e.replace(/-/g,"_")]=t[e];return n}r.prototype._get_array=function(t,e){var n=this.raw_options[t],r=e||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(t,e){var n=this.raw_options[t];return void 0===n?!!e:!!n},r.prototype._get_characters=function(t,e){var n=this.raw_options[t],r=e||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(t,e){var n=this.raw_options[t];e=parseInt(e,10),isNaN(e)&&(e=0);var r=parseInt(n,10);return isNaN(r)&&(r=e),r},r.prototype._get_selection=function(t,e,n){var r=this._get_selection_list(t,e,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+t+"' can only be one of the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r[0]},r.prototype._get_selection_list=function(t,e,n){if(!e||0===e.length)throw new Error("Selection list cannot be empty.");if(n=n||[e[0]],!this._is_valid_selection(n,e))throw new Error("Invalid Default Value!");var r=this._get_array(t,n);if(!this._is_valid_selection(r,e))throw new Error("Invalid Option Value: The option '"+t+"' can contain only the following values:\n"+e+"\nYou passed in: '"+this.raw_options[t]+"'");return r},r.prototype._is_valid_selection=function(t,e){return t.length&&e.length&&!t.some((function(t){return-1===e.indexOf(t)}))},t.exports.Options=r,t.exports.normalizeOpts=a,t.exports.mergeOpts=i},,function(t,e,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(t){this.__input=t||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__input.charAt(this.__position),this.__position+=1),t},i.prototype.peek=function(t){var e=null;return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&(e=this.__input.charAt(t)),e},i.prototype.__match=function(t,e){t.lastIndex=e;var n=t.exec(this.__input);return!n||r&&t.sticky||n.index!==e&&(n=null),n},i.prototype.test=function(t,e){return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&!!this.__match(t,e)},i.prototype.testChar=function(t,e){var n=this.peek(e);return t.lastIndex=0,null!==n&&t.test(n)},i.prototype.match=function(t){var e=this.__match(t,this.__position);return e?this.__position+=e[0].length:e=null,e},i.prototype.read=function(t,e,n){var r,i="";return t&&(r=this.match(t))&&(i+=r[0]),!e||!r&&t||(i+=this.readUntil(e,n)),i},i.prototype.readUntil=function(t,e){var n,r=this.__position;t.lastIndex=this.__position;var i=t.exec(this.__input);return i?(r=i.index,e&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(t){return this.readUntil(t,!0)},i.prototype.get_regexp=function(t,e){var n=null,i="g";return e&&r&&(i="y"),"string"==typeof t&&""!==t?n=new RegExp(t,i):t&&(n=new RegExp(t.source,i)),n},i.prototype.get_literal_regexp=function(t){return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(t){var e=this.__position,n=this.readUntilAfter(t);return this.__position=e,n},i.prototype.lookBack=function(t){var e=this.__position-1;return e>=t.length&&this.__input.substring(e-t.length,e).toLowerCase()===t},t.exports.InputScanner=i},function(t,e,n){"use strict";var r=n(8).InputScanner,i=n(3).Token,a=n(10).TokenStream,o=n(11).WhitespacePattern,s={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},u=function(t,e){this._input=new r(t),this._options=e||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new o(this._input)};u.prototype.tokenize=function(){var t;this._input.restart(),this.__tokens=new a,this._reset();for(var e=new i(s.START,""),n=null,r=[],o=new a;e.type!==s.EOF;){for(t=this._get_next_token(e,n);this._is_comment(t);)o.add(t),t=this._get_next_token(e,n);o.isEmpty()||(t.comments_before=o,o=new a),t.parent=n,this._is_opening(t)?(r.push(n),n=t):n&&this._is_closing(t,n)&&(t.opened=n,n.closed=t,n=r.pop(),t.parent=n),t.previous=e,e.next=t,this.__tokens.add(t),e=t}return this.__tokens},u.prototype._is_first_token=function(){return this.__tokens.isEmpty()},u.prototype._reset=function(){},u.prototype._get_next_token=function(t,e){this._readWhitespace();var n=this._input.read(/.+/g);return n?this._create_token(s.RAW,n):this._create_token(s.EOF,"")},u.prototype._is_comment=function(t){return!1},u.prototype._is_opening=function(t){return!1},u.prototype._is_closing=function(t,e){return!1},u.prototype._create_token=function(t,e){return new i(t,e,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token)},u.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},t.exports.Tokenizer=u,t.exports.TOKEN=s},function(t,e,n){"use strict";function r(t){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=t}r.prototype.restart=function(){this.__position=0},r.prototype.isEmpty=function(){return 0===this.__tokens_length},r.prototype.hasNext=function(){return this.__position<this.__tokens_length},r.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__tokens[this.__position],this.__position+=1),t},r.prototype.peek=function(t){var e=null;return t=t||0,(t+=this.__position)>=0&&t<this.__tokens_length&&(e=this.__tokens[t]),e},r.prototype.add=function(t){this.__parent_token&&(t.parent=this.__parent_token),this.__tokens.push(t),this.__tokens_length+=1},t.exports.TokenStream=r},function(t,e,n){"use strict";var r=n(12).Pattern;function i(t,e){r.call(this,t,e),e?this._line_regexp=this._input.get_regexp(e._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}i.prototype=new r,i.prototype.__set_whitespace_patterns=function(t,e){t+="\\t ",e+="\\n\\r",this._match_pattern=this._input.get_regexp("["+t+e+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+e+"]")},i.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var t=this._input.read(this._match_pattern);if(" "===t)this.whitespace_before_token=" ";else if(t){var e=this.__split(this._newline_regexp,t);this.newline_count=e.length-1,this.whitespace_before_token=e[this.newline_count]}return t},i.prototype.matching=function(t,e){var n=this._create();return n.__set_whitespace_patterns(t,e),n._update(),n},i.prototype._create=function(){return new i(this._input,this)},i.prototype.__split=function(t,e){t.lastIndex=0;for(var n=0,r=[],i=t.exec(e);i;)r.push(e.substring(n,i.index)),n=i.index+i[0].length,i=t.exec(e);return n<e.length?r.push(e.substring(n,e.length)):r.push(""),r},t.exports.WhitespacePattern=i},function(t,e,n){"use strict";function r(t,e){this._input=t,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,e&&(this._starting_pattern=this._input.get_regexp(e._starting_pattern,!0),this._match_pattern=this._input.get_regexp(e._match_pattern,!0),this._until_pattern=this._input.get_regexp(e._until_pattern),this._until_after=e._until_after)}r.prototype.read=function(){var t=this._input.read(this._starting_pattern);return this._starting_pattern&&!t||(t+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),t},r.prototype.read_match=function(){return this._input.match(this._match_pattern)},r.prototype.until_after=function(t){var e=this._create();return e._until_after=!0,e._until_pattern=this._input.get_regexp(t),e._update(),e},r.prototype.until=function(t){var e=this._create();return e._until_after=!1,e._until_pattern=this._input.get_regexp(t),e._update(),e},r.prototype.starting_with=function(t){var e=this._create();return e._starting_pattern=this._input.get_regexp(t,!0),e._update(),e},r.prototype.matching=function(t){var e=this._create();return e._match_pattern=this._input.get_regexp(t,!0),e._update(),e},r.prototype._create=function(){return new r(this._input,this)},r.prototype._update=function(){},t.exports.Pattern=r},function(t,e,n){"use strict";function r(t,e){t="string"==typeof t?t:t.source,e="string"==typeof e?e:e.source,this.__directives_block_pattern=new RegExp(t+/ beautify( \w+[:]\w+)+ /.source+e,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(t+/\sbeautify\signore:end\s/.source+e,"g")}r.prototype.get_directives=function(t){if(!t.match(this.__directives_block_pattern))return null;var e={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(t);n;)e[n[1]]=n[2],n=this.__directive_pattern.exec(t);return e},r.prototype.readIgnored=function(t){return t.readUntilAfter(this.__directives_end_ignore_pattern)},t.exports.Directives=r},function(t,e,n){"use strict";var r=n(12).Pattern,i={django:!1,erb:!1,handlebars:!1,php:!1};function a(t,e){r.call(this,t,e),this.__template_pattern=null,this._disabled=Object.assign({},i),this._excluded=Object.assign({},i),e&&(this.__template_pattern=this._input.get_regexp(e.__template_pattern),this._excluded=Object.assign(this._excluded,e._excluded),this._disabled=Object.assign(this._disabled,e._disabled));var n=new r(t);this.__patterns={handlebars_comment:n.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:n.starting_with(/{{{/).until_after(/}}}/),handlebars:n.starting_with(/{{/).until_after(/}}/),php:n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),erb:n.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:n.starting_with(/{%/).until_after(/%}/),django_value:n.starting_with(/{{/).until_after(/}}/),django_comment:n.starting_with(/{#/).until_after(/#}/)}}a.prototype=new r,a.prototype._create=function(){return new a(this._input,this)},a.prototype._update=function(){this.__set_templated_pattern()},a.prototype.disable=function(t){var e=this._create();return e._disabled[t]=!0,e._update(),e},a.prototype.read_options=function(t){var e=this._create();for(var n in i)e._disabled[n]=-1===t.templating.indexOf(n);return e._update(),e},a.prototype.exclude=function(t){var e=this._create();return e._excluded[t]=!0,e._update(),e},a.prototype.read=function(){var t="";t=this._match_pattern?this._input.read(this._starting_pattern):this._input.read(this._starting_pattern,this.__template_pattern);for(var e=this._read_template();e;)this._match_pattern?e+=this._input.read(this._match_pattern):e+=this._input.readUntil(this.__template_pattern),t+=e,e=this._read_template();return this._until_after&&(t+=this._input.readUntilAfter(this._until_pattern)),t},a.prototype.__set_templated_pattern=function(){var t=[];this._disabled.php||t.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||t.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||t.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(t.push(this.__patterns.django._starting_pattern.source),t.push(this.__patterns.django_value._starting_pattern.source),t.push(this.__patterns.django_comment._starting_pattern.source)),this._until_pattern&&t.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+t.join("|")+")")},a.prototype._read_template=function(){var t="",e=this._input.peek();if("<"===e){var n=this._input.peek(1);this._disabled.php||this._excluded.php||"?"!==n||(t=t||this.__patterns.php.read()),this._disabled.erb||this._excluded.erb||"%"!==n||(t=t||this.__patterns.erb.read())}else"{"===e&&(this._disabled.handlebars||this._excluded.handlebars||(t=(t=(t=t||this.__patterns.handlebars_comment.read())||this.__patterns.handlebars_unescaped.read())||this.__patterns.handlebars.read()),this._disabled.django||(this._excluded.django||this._excluded.handlebars||(t=t||this.__patterns.django_value.read()),this._excluded.django||(t=(t=t||this.__patterns.django_comment.read())||this.__patterns.django.read())));return t},t.exports.TemplatablePattern=a},,,,function(t,e,n){"use strict";var r=n(19).Beautifier,i=n(20).Options;t.exports=function(t,e,n,i){return new r(t,e,n,i).beautify()},t.exports.defaultOptions=function(){return new i}},function(t,e,n){"use strict";var r=n(20).Options,i=n(2).Output,a=n(21).Tokenizer,o=n(21).TOKEN,s=/\r\n|[\r\n]/,u=/\r\n|[\r\n]/g,l=function(t,e){this.indent_level=0,this.alignment_size=0,this.max_preserve_newlines=t.max_preserve_newlines,this.preserve_newlines=t.preserve_newlines,this._output=new i(t,e)};l.prototype.current_line_has_match=function(t){return this._output.current_line.has_match(t)},l.prototype.set_space_before_token=function(t,e){this._output.space_before_token=t,this._output.non_breaking_space=e},l.prototype.set_wrap_point=function(){this._output.set_indent(this.indent_level,this.alignment_size),this._output.set_wrap_point()},l.prototype.add_raw_token=function(t){this._output.add_raw_token(t)},l.prototype.print_preserved_newlines=function(t){var e=0;t.type!==o.TEXT&&t.previous.type!==o.TEXT&&(e=t.newlines?1:0),this.preserve_newlines&&(e=t.newlines<this.max_preserve_newlines+1?t.newlines:this.max_preserve_newlines+1);for(var n=0;n<e;n++)this.print_newline(n>0);return 0!==e},l.prototype.traverse_whitespace=function(t){return!(!t.whitespace_before&&!t.newlines||(this.print_preserved_newlines(t)||(this._output.space_before_token=!0),0))},l.prototype.previous_token_wrapped=function(){return this._output.previous_token_wrapped},l.prototype.print_newline=function(t){this._output.add_new_line(t)},l.prototype.print_token=function(t){t.text&&(this._output.set_indent(this.indent_level,this.alignment_size),this._output.add_token(t.text))},l.prototype.indent=function(){this.indent_level++},l.prototype.get_full_indent=function(t){return(t=this.indent_level+(t||0))<1?"":this._output.get_indent_string(t)};var c=function(t,e){var n=null,r=null;return e.closed?("script"===t?n="text/javascript":"style"===t&&(n="text/css"),(n=function(t){for(var e=null,n=t.next;n.type!==o.EOF&&t.closed!==n;){if(n.type===o.ATTRIBUTE&&"type"===n.text){n.next&&n.next.type===o.EQUALS&&n.next.next&&n.next.next.type===o.VALUE&&(e=n.next.next.text);break}n=n.next}return e}(e)||n).search("text/css")>-1?r="css":n.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/)>-1?r="javascript":n.search(/(text|application|dojo)\/(x-)?(html)/)>-1?r="html":n.search(/test\/null/)>-1&&(r="null"),r):null};function _(t,e){return-1!==e.indexOf(t)}function h(t,e,n){this.parent=t||null,this.tag=e?e.tag_name:"",this.indent_level=n||0,this.parser_token=e||null}function p(t){this._printer=t,this._current_frame=null}function f(t,e,n,i){this._source_text=t||"",e=e||{},this._js_beautify=n,this._css_beautify=i,this._tag_stack=null;var a=new r(e,"html");this._options=a,this._is_wrap_attributes_force="force"===this._options.wrap_attributes.substr(0,"force".length),this._is_wrap_attributes_force_expand_multiline="force-expand-multiline"===this._options.wrap_attributes,this._is_wrap_attributes_force_aligned="force-aligned"===this._options.wrap_attributes,this._is_wrap_attributes_aligned_multiple="aligned-multiple"===this._options.wrap_attributes,this._is_wrap_attributes_preserve="preserve"===this._options.wrap_attributes.substr(0,"preserve".length),this._is_wrap_attributes_preserve_aligned="preserve-aligned"===this._options.wrap_attributes}p.prototype.get_parser_token=function(){return this._current_frame?this._current_frame.parser_token:null},p.prototype.record_tag=function(t){var e=new h(this._current_frame,t,this._printer.indent_level);this._current_frame=e},p.prototype._try_pop_frame=function(t){var e=null;return t&&(e=t.parser_token,this._printer.indent_level=t.indent_level,this._current_frame=t.parent),e},p.prototype._get_frame=function(t,e){for(var n=this._current_frame;n&&-1===t.indexOf(n.tag);){if(e&&-1!==e.indexOf(n.tag)){n=null;break}n=n.parent}return n},p.prototype.try_pop=function(t,e){var n=this._get_frame([t],e);return this._try_pop_frame(n)},p.prototype.indent_to_tag=function(t){var e=this._get_frame(t);e&&(this._printer.indent_level=e.indent_level)},f.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var t=this._source_text,e=this._options.eol;"auto"===this._options.eol&&(e="\n",t&&s.test(t)&&(e=t.match(s)[0]));var n=(t=t.replace(u,"\n")).match(/^[\t ]*/)[0],r={text:"",type:""},i=new d,c=new l(this._options,n),_=new a(t,this._options).tokenize();this._tag_stack=new p(c);for(var h=null,f=_.next();f.type!==o.EOF;)f.type===o.TAG_OPEN||f.type===o.COMMENT?i=h=this._handle_tag_open(c,f,i,r):f.type===o.ATTRIBUTE||f.type===o.EQUALS||f.type===o.VALUE||f.type===o.TEXT&&!i.tag_complete?h=this._handle_inside_tag(c,f,i,_):f.type===o.TAG_CLOSE?h=this._handle_tag_close(c,f,i):f.type===o.TEXT?h=this._handle_text(c,f,i):c.add_raw_token(f),r=h,f=_.next();return c._output.get_code(e)},f.prototype._handle_tag_close=function(t,e,n){var r={text:e.text,type:e.type};return t.alignment_size=0,n.tag_complete=!0,t.set_space_before_token(e.newlines||""!==e.whitespace_before,!0),n.is_unformatted?t.add_raw_token(e):("<"===n.tag_start_char&&(t.set_space_before_token("/"===e.text[0],!0),this._is_wrap_attributes_force_expand_multiline&&n.has_wrapped_attrs&&t.print_newline(!1)),t.print_token(e)),!n.indent_content||n.is_unformatted||n.is_content_unformatted||(t.indent(),n.indent_content=!1),n.is_inline_element||n.is_unformatted||n.is_content_unformatted||t.set_wrap_point(),r},f.prototype._handle_inside_tag=function(t,e,n,r){var i=n.has_wrapped_attrs,a={text:e.text,type:e.type};if(t.set_space_before_token(e.newlines||""!==e.whitespace_before,!0),n.is_unformatted)t.add_raw_token(e);else if("{"===n.tag_start_char&&e.type===o.TEXT)t.print_preserved_newlines(e)?(e.newlines=0,t.add_raw_token(e)):t.print_token(e);else{if(e.type===o.ATTRIBUTE?(t.set_space_before_token(!0),n.attr_count+=1):(e.type===o.EQUALS||e.type===o.VALUE&&e.previous.type===o.EQUALS)&&t.set_space_before_token(!1),e.type===o.ATTRIBUTE&&"<"===n.tag_start_char&&((this._is_wrap_attributes_preserve||this._is_wrap_attributes_preserve_aligned)&&(t.traverse_whitespace(e),i=i||0!==e.newlines),this._is_wrap_attributes_force)){var s=n.attr_count>1;if(this._is_wrap_attributes_force_expand_multiline&&1===n.attr_count){var u,l=!0,c=0;do{if((u=r.peek(c)).type===o.ATTRIBUTE){l=!1;break}c+=1}while(c<4&&u.type!==o.EOF&&u.type!==o.TAG_CLOSE);s=!l}s&&(t.print_newline(!1),i=!0)}t.print_token(e),i=i||t.previous_token_wrapped(),n.has_wrapped_attrs=i}return a},f.prototype._handle_text=function(t,e,n){var r={text:e.text,type:"TK_CONTENT"};return n.custom_beautifier_name?this._print_custom_beatifier_text(t,e,n):n.is_unformatted||n.is_content_unformatted?t.add_raw_token(e):(t.traverse_whitespace(e),t.print_token(e)),r},f.prototype._print_custom_beatifier_text=function(t,e,n){var r=this;if(""!==e.text){var i,a=e.text,o=1,s="",u="";"javascript"===n.custom_beautifier_name&&"function"==typeof this._js_beautify?i=this._js_beautify:"css"===n.custom_beautifier_name&&"function"==typeof this._css_beautify?i=this._css_beautify:"html"===n.custom_beautifier_name&&(i=function(t,e){return new f(t,e,r._js_beautify,r._css_beautify).beautify()}),"keep"===this._options.indent_scripts?o=0:"separate"===this._options.indent_scripts&&(o=-t.indent_level);var l=t.get_full_indent(o);if(a=a.replace(/\n[ \t]*$/,""),"html"!==n.custom_beautifier_name&&"<"===a[0]&&a.match(/^(<!--|<!\[CDATA\[)/)){var c=/^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(a);if(!c)return void t.add_raw_token(e);s=l+c[1]+"\n",a=c[4],c[5]&&(u=l+c[5]),a=a.replace(/\n[ \t]*$/,""),(c[2]||-1!==c[3].indexOf("\n"))&&(c=c[3].match(/[ \t]+$/))&&(e.whitespace_before=c[0])}if(a)if(i){var _=function(){this.eol="\n"};_.prototype=this._options.raw_options,a=i(l+a,new _)}else{var h=e.whitespace_before;h&&(a=a.replace(new RegExp("\n("+h+")?","g"),"\n")),a=l+a.replace(/\n/g,"\n"+l)}s&&(a=a?s+a+"\n"+u:s+u),t.print_newline(!1),a&&(e.text=a,e.whitespace_before="",e.newlines=0,t.add_raw_token(e),t.print_newline(!0))}},f.prototype._handle_tag_open=function(t,e,n,r){var i=this._get_tag_open_token(e);return(n.is_unformatted||n.is_content_unformatted)&&e.type===o.TAG_OPEN&&0===e.text.indexOf("</")?(t.add_raw_token(e),i.start_tag_token=this._tag_stack.try_pop(i.tag_name)):(t.traverse_whitespace(e),this._set_tag_position(t,e,i,n,r),i.is_inline_element||t.set_wrap_point(),t.print_token(e)),(this._is_wrap_attributes_force_aligned||this._is_wrap_attributes_aligned_multiple||this._is_wrap_attributes_preserve_aligned)&&(i.alignment_size=e.text.length+1),i.tag_complete||i.is_unformatted||(t.alignment_size=i.alignment_size),i};var d=function(t,e){var n;this.parent=t||null,this.text="",this.type="TK_TAG_OPEN",this.tag_name="",this.is_inline_element=!1,this.is_unformatted=!1,this.is_content_unformatted=!1,this.is_empty_element=!1,this.is_start_tag=!1,this.is_end_tag=!1,this.indent_content=!1,this.multiline_content=!1,this.custom_beautifier_name=null,this.start_tag_token=null,this.attr_count=0,this.has_wrapped_attrs=!1,this.alignment_size=0,this.tag_complete=!1,this.tag_start_char="",this.tag_check="",e?(this.tag_start_char=e.text[0],this.text=e.text,"<"===this.tag_start_char?(n=e.text.match(/^<([^\s>]*)/),this.tag_check=n?n[1]:""):(n=e.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/),this.tag_check=n?n[1]:"","{{#>"===e.text&&">"===this.tag_check&&null!==e.next&&(this.tag_check=e.next.text)),this.tag_check=this.tag_check.toLowerCase(),e.type===o.COMMENT&&(this.tag_complete=!0),this.is_start_tag="/"!==this.tag_check.charAt(0),this.tag_name=this.is_start_tag?this.tag_check:this.tag_check.substr(1),this.is_end_tag=!this.is_start_tag||e.closed&&"/>"===e.closed.text,this.is_end_tag=this.is_end_tag||"{"===this.tag_start_char&&(this.text.length<3||/[^#\^]/.test(this.text.charAt(2)))):this.tag_complete=!0};f.prototype._get_tag_open_token=function(t){var e=new d(this._tag_stack.get_parser_token(),t);return e.alignment_size=this._options.wrap_attributes_indent_size,e.is_end_tag=e.is_end_tag||_(e.tag_check,this._options.void_elements),e.is_empty_element=e.tag_complete||e.is_start_tag&&e.is_end_tag,e.is_unformatted=!e.tag_complete&&_(e.tag_check,this._options.unformatted),e.is_content_unformatted=!e.is_empty_element&&_(e.tag_check,this._options.content_unformatted),e.is_inline_element=_(e.tag_name,this._options.inline)||"{"===e.tag_start_char,e},f.prototype._set_tag_position=function(t,e,n,r,i){n.is_empty_element||(n.is_end_tag?n.start_tag_token=this._tag_stack.try_pop(n.tag_name):(this._do_optional_end_element(n)&&(n.is_inline_element||(n.parent&&(n.parent.multiline_content=!0),t.print_newline(!1))),this._tag_stack.record_tag(n),"script"!==n.tag_name&&"style"!==n.tag_name||n.is_unformatted||n.is_content_unformatted||(n.custom_beautifier_name=c(n.tag_check,e)))),_(n.tag_check,this._options.extra_liners)&&(t.print_newline(!1),t._output.just_added_blankline()||t.print_newline(!0)),n.is_empty_element?("{"===n.tag_start_char&&"else"===n.tag_check&&(this._tag_stack.indent_to_tag(["if","unless","each"]),n.indent_content=!0,t.current_line_has_match(/{{#if/)||t.print_newline(!1)),"!--"===n.tag_name&&i.type===o.TAG_CLOSE&&r.is_end_tag&&-1===n.text.indexOf("\n")||n.is_inline_element||n.is_unformatted||t.print_newline(!1)):n.is_unformatted||n.is_content_unformatted?n.is_inline_element||n.is_unformatted||t.print_newline(!1):n.is_end_tag?(n.start_tag_token&&n.start_tag_token.multiline_content||!(n.is_inline_element||r.is_inline_element||i.type===o.TAG_CLOSE&&n.start_tag_token===r||"TK_CONTENT"===i.type))&&t.print_newline(!1):(n.indent_content=!n.custom_beautifier_name,"<"===n.tag_start_char&&("html"===n.tag_name?n.indent_content=this._options.indent_inner_html:"head"===n.tag_name?n.indent_content=this._options.indent_head_inner_html:"body"===n.tag_name&&(n.indent_content=this._options.indent_body_inner_html)),n.is_inline_element||"TK_CONTENT"===i.type||(n.parent&&(n.parent.multiline_content=!0),t.print_newline(!1)))};var v=["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","main","nav","ol","p","pre","section","table","ul"],g=["a","audio","del","ins","map","noscript","video"];f.prototype._do_optional_end_element=function(t){var e=null;if(!t.is_empty_element&&t.is_start_tag&&t.parent){if("body"===t.tag_name)e=e||this._tag_stack.try_pop("head");else if("li"===t.tag_name)e=e||this._tag_stack.try_pop("li",["ol","ul"]);else if("dd"===t.tag_name||"dt"===t.tag_name)e=(e=e||this._tag_stack.try_pop("dt",["dl"]))||this._tag_stack.try_pop("dd",["dl"]);else if("p"===t.parent.tag_name&&-1!==v.indexOf(t.tag_name)){var n=t.parent.parent;n&&-1!==g.indexOf(n.tag_name)||(e=e||this._tag_stack.try_pop("p"))}else"rp"===t.tag_name||"rt"===t.tag_name?e=(e=e||this._tag_stack.try_pop("rt",["ruby","rtc"]))||this._tag_stack.try_pop("rp",["ruby","rtc"]):"optgroup"===t.tag_name?e=e||this._tag_stack.try_pop("optgroup",["select"]):"option"===t.tag_name?e=e||this._tag_stack.try_pop("option",["select","datalist","optgroup"]):"colgroup"===t.tag_name?e=e||this._tag_stack.try_pop("caption",["table"]):"thead"===t.tag_name?e=(e=e||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]):"tbody"===t.tag_name||"tfoot"===t.tag_name?e=(e=(e=(e=e||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]))||this._tag_stack.try_pop("thead",["table"]))||this._tag_stack.try_pop("tbody",["table"]):"tr"===t.tag_name?e=(e=(e=e||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]))||this._tag_stack.try_pop("tr",["table","thead","tbody","tfoot"]):"th"!==t.tag_name&&"td"!==t.tag_name||(e=(e=e||this._tag_stack.try_pop("td",["table","thead","tbody","tfoot","tr"]))||this._tag_stack.try_pop("th",["table","thead","tbody","tfoot","tr"]));return t.parent=this._tag_stack.get_parser_token(),e}},t.exports.Beautifier=f},function(t,e,n){"use strict";var r=n(6).Options;function i(t){r.call(this,t,"html"),1===this.templating.length&&"auto"===this.templating[0]&&(this.templating=["django","erb","handlebars","php"]),this.indent_inner_html=this._get_boolean("indent_inner_html"),this.indent_body_inner_html=this._get_boolean("indent_body_inner_html",!0),this.indent_head_inner_html=this._get_boolean("indent_head_inner_html",!0),this.indent_handlebars=this._get_boolean("indent_handlebars",!0),this.wrap_attributes=this._get_selection("wrap_attributes",["auto","force","force-aligned","force-expand-multiline","aligned-multiple","preserve","preserve-aligned"]),this.wrap_attributes_indent_size=this._get_number("wrap_attributes_indent_size",this.indent_size),this.extra_liners=this._get_array("extra_liners",["head","body","/html"]),this.inline=this._get_array("inline",["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","big","strike","tt"]),this.void_elements=this._get_array("void_elements",["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","basefont","isindex"]),this.unformatted=this._get_array("unformatted",[]),this.content_unformatted=this._get_array("content_unformatted",["pre","textarea"]),this.unformatted_content_delimiter=this._get_characters("unformatted_content_delimiter"),this.indent_scripts=this._get_selection("indent_scripts",["normal","keep","separate"])}i.prototype=new r,t.exports.Options=i},function(t,e,n){"use strict";var r=n(9).Tokenizer,i=n(9).TOKEN,a=n(13).Directives,o=n(14).TemplatablePattern,s=n(12).Pattern,u={TAG_OPEN:"TK_TAG_OPEN",TAG_CLOSE:"TK_TAG_CLOSE",ATTRIBUTE:"TK_ATTRIBUTE",EQUALS:"TK_EQUALS",VALUE:"TK_VALUE",COMMENT:"TK_COMMENT",TEXT:"TK_TEXT",UNKNOWN:"TK_UNKNOWN",START:i.START,RAW:i.RAW,EOF:i.EOF},l=new a(/<\!--/,/-->/),c=function(t,e){r.call(this,t,e),this._current_tag_name="";var n=new o(this._input).read_options(this._options),i=new s(this._input);if(this.__patterns={word:n.until(/[\n\r\t <]/),single_quote:n.until_after(/'/),double_quote:n.until_after(/"/),attribute:n.until(/[\n\r\t =>]|\/>/),element_name:n.until(/[\n\r\t >\/]/),handlebars_comment:i.starting_with(/{{!--/).until_after(/--}}/),handlebars:i.starting_with(/{{/).until_after(/}}/),handlebars_open:i.until(/[\n\r\t }]/),handlebars_raw_close:i.until(/}}/),comment:i.starting_with(/<!--/).until_after(/-->/),cdata:i.starting_with(/<!\[CDATA\[/).until_after(/]]>/),conditional_comment:i.starting_with(/<!\[/).until_after(/]>/),processing:i.starting_with(/<\?/).until_after(/\?>/)},this._options.indent_handlebars&&(this.__patterns.word=this.__patterns.word.exclude("handlebars")),this._unformatted_content_delimiter=null,this._options.unformatted_content_delimiter){var a=this._input.get_literal_regexp(this._options.unformatted_content_delimiter);this.__patterns.unformatted_content_delimiter=i.matching(a).until_after(a)}};(c.prototype=new r)._is_comment=function(t){return!1},c.prototype._is_opening=function(t){return t.type===u.TAG_OPEN},c.prototype._is_closing=function(t,e){return t.type===u.TAG_CLOSE&&e&&((">"===t.text||"/>"===t.text)&&"<"===e.text[0]||"}}"===t.text&&"{"===e.text[0]&&"{"===e.text[1])},c.prototype._reset=function(){this._current_tag_name=""},c.prototype._get_next_token=function(t,e){var n=null;this._readWhitespace();var r=this._input.peek();return null===r?this._create_token(u.EOF,""):n=(n=(n=(n=(n=(n=(n=(n=(n=n||this._read_open_handlebars(r,e))||this._read_attribute(r,t,e))||this._read_raw_content(r,t,e))||this._read_close(r,e))||this._read_content_word(r))||this._read_comment_or_cdata(r))||this._read_processing(r))||this._read_open(r,e))||this._create_token(u.UNKNOWN,this._input.next())},c.prototype._read_comment_or_cdata=function(t){var e=null,n=null,r=null;return"<"===t&&("!"===this._input.peek(1)&&((n=this.__patterns.comment.read())?(r=l.get_directives(n))&&"start"===r.ignore&&(n+=l.readIgnored(this._input)):n=this.__patterns.cdata.read()),n&&((e=this._create_token(u.COMMENT,n)).directives=r)),e},c.prototype._read_processing=function(t){var e=null,n=null;if("<"===t){var r=this._input.peek(1);"!"!==r&&"?"!==r||(n=(n=this.__patterns.conditional_comment.read())||this.__patterns.processing.read()),n&&((e=this._create_token(u.COMMENT,n)).directives=null)}return e},c.prototype._read_open=function(t,e){var n=null,r=null;return e||"<"===t&&(n=this._input.next(),"/"===this._input.peek()&&(n+=this._input.next()),n+=this.__patterns.element_name.read(),r=this._create_token(u.TAG_OPEN,n)),r},c.prototype._read_open_handlebars=function(t,e){var n=null,r=null;return e||this._options.indent_handlebars&&"{"===t&&"{"===this._input.peek(1)&&("!"===this._input.peek(2)?(n=(n=this.__patterns.handlebars_comment.read())||this.__patterns.handlebars.read(),r=this._create_token(u.COMMENT,n)):(n=this.__patterns.handlebars_open.read(),r=this._create_token(u.TAG_OPEN,n))),r},c.prototype._read_close=function(t,e){var n=null,r=null;return e&&("<"===e.text[0]&&(">"===t||"/"===t&&">"===this._input.peek(1))?(n=this._input.next(),"/"===t&&(n+=this._input.next()),r=this._create_token(u.TAG_CLOSE,n)):"{"===e.text[0]&&"}"===t&&"}"===this._input.peek(1)&&(this._input.next(),this._input.next(),r=this._create_token(u.TAG_CLOSE,"}}"))),r},c.prototype._read_attribute=function(t,e,n){var r=null,i="";if(n&&"<"===n.text[0])if("="===t)r=this._create_token(u.EQUALS,this._input.next());else if('"'===t||"'"===t){var a=this._input.next();a+='"'===t?this.__patterns.double_quote.read():this.__patterns.single_quote.read(),r=this._create_token(u.VALUE,a)}else(i=this.__patterns.attribute.read())&&(r=e.type===u.EQUALS?this._create_token(u.VALUE,i):this._create_token(u.ATTRIBUTE,i));return r},c.prototype._is_content_unformatted=function(t){return-1===this._options.void_elements.indexOf(t)&&(-1!==this._options.content_unformatted.indexOf(t)||-1!==this._options.unformatted.indexOf(t))},c.prototype._read_raw_content=function(t,e,n){var r="";if(n&&"{"===n.text[0])r=this.__patterns.handlebars_raw_close.read();else if(e.type===u.TAG_CLOSE&&"<"===e.opened.text[0]){var i=e.opened.text.substr(1).toLowerCase();if("script"===i||"style"===i){var a=this._read_comment_or_cdata(t);if(a)return a.type=u.TEXT,a;r=this._input.readUntil(new RegExp("</"+i+"[\\n\\r\\t ]*?>","ig"))}else this._is_content_unformatted(i)&&(r=this._input.readUntil(new RegExp("</"+i+"[\\n\\r\\t ]*?>","ig")))}return r?this._create_token(u.TEXT,r):null},c.prototype._read_content_word=function(t){var e="";if(this._options.unformatted_content_delimiter&&t===this._options.unformatted_content_delimiter[0]&&(e=this.__patterns.unformatted_content_delimiter.read()),e||(e=this.__patterns.word.read()),e)return this._create_token(u.TEXT,e)},t.exports.Tokenizer=c,t.exports.TOKEN=u}]),r=[n,n(18),n(19)],void 0===(i=function(t){var e=n(18),r=n(19);return{html_beautify:function(t,n){return a(t,n,e.js_beautify,r.css_beautify)}}}.apply(e,r))||(t.exports=i)},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=l(n,"class").call(o,"header",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=l(n,"repeat").call(o,null!=(a=null!=e?l(e,"group"):e)?l(a,"indentLevel"):a,{name:"repeat",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=l(n,"class").call(o,"time-container",{name:"class",hash:{},data:i}))?a:"")+"><span>"+u(s(null!=(a=null!=e?l(e,"headers"):e)?l(a,"time"):a,e))+"</span><span>"+u(s(null!=(a=null!=e?l(e,"headers"):e)?l(a,"from"):a,e))+"</span></div></div> "},2:function(t,e,n,r,i){var a;return" <div "+(null!=(a=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"class").call(null!=e?e:t.nullContext||{},"nesting-level",{name:"class",hash:{},data:i}))?a:"")+"></div> "},4:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"icon-container",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,"icon icon-",null!=e?s(e,"icon"):e,{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+"></span></div> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return(null!=(a=s(n,"if").call(o,null!=e?s(e,"headers"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,null!=e?s(e,"type"):e," log-item",{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"repeat").call(o,null!=(a=null!=e?s(e,"group"):e)?s(a,"indentLevel"):a,{name:"repeat",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?a:"")+" "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"icon"):e,{name:"if",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=s(n,"class").call(o,"count-container hidden",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"count",{name:"class",hash:{},data:i}))?a:"")+"></div></div><div "+(null!=(a=s(n,"class").call(o,"log-content-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"log-content",{name:"class",hash:{},data:i}))?a:"")+">"+(null!=(a=t.lambda(null!=e?s(e,"msg"):e,e))?a:"")+"</div></div></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"._console-container ._logs-container{$oy:auto;$wos:touch;$h:100%;$po:relative;$wc:scroll-position}._console-container ._fake-logs{$po:absolute;$l:0;$t:0;$pe:none;$v:hidden;$w:100%}._console-container ._fake-logs *{$o:hidden;$c:#000;$po:static}._console-container ._logs{$fs:14px;$pt:1px;$po:absolute;$w:100%}._console-container ._log-container{$bsi:content-box}._console-container ._header{$ws:nowrap;$d:flex;$fs:12px;$c:var(--link-color);$bt:1px solid transparent;$bb:1px solid var(--border)}._console-container ._header ._time-container{$ox:auto;$wos:touch;$p:3px 10px}._console-container ._nesting-level{$w:14px;$fsh:0;$mt:-1px;$mb:-1px;$po:relative;$br:1px solid var(--border)}._console-container ._nesting-level._group-closed::before{$co:''}._console-container ._nesting-level::before{$bb:1px solid var(--border);$po:absolute;$t:0;$l:0;$ml:100%;$w:5px;$h:100%;$bsi:border-box}._console-container ._log-item{$po:relative;$d:flex;$bt:1px solid transparent;$bb:1px solid var(--border);$mt:-1px;$mh:24px;$c:var(--foreground)}._console-container ._log-item:after{$co:'';$d:block;$cl:both}._console-container ._log-item a{$c:var(--link-color)!important}._console-container ._log-item ._icon-container{$pt:2px;$m:0 -6px 0 10px}._console-container ._log-item ._icon-container ._icon{$lh:20px;$fs:12px;$c:var(--foreground);$po:relative}._console-container ._log-item ._icon-container ._icon-caret-down,._console-container ._log-item ._icon-container ._icon-caret-right{$l:-2px}._console-container ._log-item ._icon-container ._icon-error{$c:#ef3842}._console-container ._log-item ._icon-container ._icon-warn{$t:-1px;$c:#e8a400}._console-container ._log-item ._count{$b:var(--text-color);$p:2px 4px;$c:#000;$bra:10px;$fs:12px;$f:left;$m:2px -6px 0 10px}._console-container ._log-item ._log-content-wrapper{$fl:1;$o:hidden}._console-container ._log-item ._log-content{$p:3px 0;$m:0 10px;$ox:auto;$wos:touch;$ws:pre-wrap;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}._console-container ._log-item ._log-content *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}._console-container ._log-item._html table,._console-container ._log-item._table table{$w:100%;$bc:collapse;$o:hidden;$c:var(--foreground)}._console-container ._log-item._html table th,._console-container ._log-item._table table th{$b:var(--darker-background)}._console-container ._log-item._html table td,._console-container ._log-item._html table th,._console-container ._log-item._table table td,._console-container ._log-item._table table th{$bo:1px solid var(--border);$p:3px 10px}._console-container ._log-item._html table tr:nth-child(even),._console-container ._log-item._table table tr:nth-child(even){$b:var(--contrast)}._console-container ._log-item._error{$z:50;$b:var(--console-error-background);$c:var(--console-error-foreground);$bt:1px solid var(--console-error-border);$bb:1px solid var(--console-error-border)}._console-container ._log-item._error ._stack{$pl:1.2em;$ws:nowrap}._console-container ._log-item._error ._count{$b:var(--console-error-foreground)}._console-container ._log-item._debug{$z:20}._console-container ._log-item._input{border-bottom-color:transparent}._console-container ._log-item._warn{$z:40;$c:var(--console-warn-foreground);$b:var(--console-warn-background);$bt:1px solid var(--console-warn-border);$bb:1px solid var(--console-warn-border)}._console-container ._log-item._warn ._count{$b:#e8a400}._console-container ._log-item._info{$z:30}._console-container ._log-item._group,._console-container ._log-item._groupCollapsed{$fw:700}",""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,"._container ._console-container{$pt:40px;$pb:24px}._console-container{$w:100%;$h:100%}._console-container._js-input-hidden{$pb:0}._console-container ._control{$po:absolute;$w:100%;$h:40px;$l:0;$t:0;$cu:default;$fs:0;$p:10px 10px 10px 35px;$b:var(--darker-background);$c:var(--primary);$lh:20px;$bb:1px solid var(--border)}._console-container ._control ._icon-clear,._console-container ._control ._icon-search{$d:inline-block;$p:10px;$fs:16px;$po:absolute;$t:1px;$cu:pointer;$tr:color .3s}._console-container ._control ._icon-clear:active,._console-container ._control ._icon-search:active{$c:var(--accent)}._console-container ._control ._icon-clear{padding-right:0;$l:0}._console-container ._control ._icon-search{right:0}._console-container ._control ._filter{$cu:pointer;$fs:12px;$h:20px;$d:inline-block;$m:0 2px;$p:0 4px;$lh:20px;$tr:background .3s,color .3s}._console-container ._control ._filter._active{$b:var(--highlight);$c:var(--select-foreground)}._console-container ._control ._search-keyword{$po:absolute;$lh:20px;max-width:80px;$o:hidden;right:40px;$fs:14px;text-overflow:ellipsis}._console-container ._js-input{$pe:none;$po:absolute;$z:100;$l:0;bottom:0;$w:100%;$bt:1px solid var(--border);$h:24px}._console-container ._js-input ._icon-arrow-right{$lh:23px;$c:var(--accent);$po:absolute;$l:10px;$t:0;$z:10}._console-container ._js-input._active{$h:100%;$pt:40px;$pb:40px;$bt:none}._console-container ._js-input._active ._icon-arrow-right{$d:none}._console-container ._js-input._active textarea{$pl:10px}._console-container ._js-input ._buttons{$d:none;$po:absolute;$l:0;bottom:0;$w:100%;$h:40px;$c:var(--primary);$b:var(--darker-background);$fs:12px;$bt:1px solid var(--border)}._console-container ._js-input ._buttons ._button{$pe:all;$cu:pointer;$w:50%;$d:inline-block;$ta:center;$br:1px solid var(--border);$h:40px;$lh:40px;$tr:background .3s,color .3s}._console-container ._js-input ._buttons ._button:last-child{$br:none}._console-container ._js-input ._buttons ._button:active{$c:var(--select-foreground);$b:var(--highlight)}._console-container ._js-input textarea{$pe:all;$p:3px 10px;$pl:25px;$ou:0;$bo:none;$fs:14px;$w:100%;$h:100%;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;resize:none;$c:var(--primary);$b:var(--background)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"console-container",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"control",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-clear clear-console",{name:"class",hash:{},data:i}))?a:"")+"></span> <span "+(null!=(a=s(n,"class").call(o,"filter active",{name:"class",hash:{},data:i}))?a:"")+' data-filter="all">All</span> <span '+(null!=(a=s(n,"class").call(o,"filter",{name:"class",hash:{},data:i}))?a:"")+' data-filter="error">Error</span> <span '+(null!=(a=s(n,"class").call(o,"filter",{name:"class",hash:{},data:i}))?a:"")+' data-filter="warn">Warning</span> <span '+(null!=(a=s(n,"class").call(o,"filter",{name:"class",hash:{},data:i}))?a:"")+' data-filter="info">Info</span> <span '+(null!=(a=s(n,"class").call(o,"search-keyword",{name:"class",hash:{},data:i}))?a:"")+"></span> <span "+(null!=(a=s(n,"class").call(o,"icon-search search",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"logs-container",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"logs-space",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"fake-logs",{name:"class",hash:{},data:i}))?a:"")+"></div><div "+(null!=(a=s(n,"class").call(o,"logs",{name:"class",hash:{},data:i}))?a:"")+"></div></div></div><div "+(null!=(a=s(n,"class").call(o,"js-input",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"buttons",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"button cancel",{name:"class",hash:{},data:i}))?a:"")+">Cancel</div><div "+(null!=(a=s(n,"class").call(o,"button execute",{name:"class",hash:{},data:i}))?a:"")+">Execute</div></div><span "+(null!=(a=s(n,"class").call(o,"icon-arrow-right",{name:"class",hash:{},data:i}))?a:"")+"></span> <textarea></textarea></div></div>"},useData:!0})},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_network{$pt:36px}#_network ._title{$po:absolute;$w:100%;$h:36px;$l:0;$t:0;$b:var(--darker-background);$p:10px;$c:var(--primary);$h:36px;$bb:1px solid var(--border)}#_network ._title ._btn{$d:flex;$ml:5px;$f:right;$c:var(--primary);$w:18px;$h:18px;justify-content:center;align-items:center;$fs:16px;$cu:pointer;$tr:color .3s}#_network ._title ._btn._search-keyword{$w:auto;max-width:80px;$fs:14px;$o:hidden;text-overflow:ellipsis;$d:inline-block}#_network ._title ._btn:active{$c:var(--accent)}#_network ._requests{$oy:auto;$wos:touch;$h:100%;$bb:1px solid var(--border);$mb:10px}#_network ._requests li{$d:flex;$w:100%;$cu:pointer;$bb:1px solid var(--border);$h:41px;$c:var(--foreground);$ws:nowrap}#_network ._requests li._error span{$c:var(--console-error-foreground)}#_network ._requests li span{$d:block;$lh:40px;$h:40px;$p:0 5px;$fs:12px;vertical-align:top;text-overflow:ellipsis;$o:hidden}#_network ._requests li ._name{$fl:1;$pl:10px}#_network ._requests li ._status{$w:40px}#_network ._requests li ._method,#_network ._requests li ._type{$w:50px}#_network ._requests li ._size{$w:70px}#_network ._requests li ._time{$w:60px;padding-right:10px}#_network ._requests li:nth-child(even){$b:var(--contrast)}#_network ._detail{$po:absolute;$w:100%;$h:100%;$l:0;$t:0;$z:10;$d:none;$pb:40px;$b:var(--background)}#_network ._detail ._http{$oy:auto;$wos:touch;$h:100%}#_network ._detail ._http ._breadcrumb{$b:var(--darker-background);$c:var(--primary);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$mb:10px;word-break:break-all;$p:10px;$fs:16px;$mh:40px;$bb:1px solid var(--border)}#_network ._detail ._http ._section{$bt:1px solid var(--border);$bb:1px solid var(--border);$mb:10px}#_network ._detail ._http ._section h2{$b:var(--darker-background);$c:var(--primary);$p:10px;$fs:14px}#_network ._detail ._http ._section table{$c:var(--foreground)}#_network ._detail ._http ._section table *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}#_network ._detail ._http ._section table td{$fs:12px;$p:5px 10px;word-break:break-all}#_network ._detail ._http ._section table ._key{$ws:nowrap;$fw:700;$c:var(--accent)}#_network ._detail ._http ._data,#_network ._detail ._http ._response{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$ox:auto;$wos:touch;$p:10px;$fs:12px;$mb:10px;$ws:pre-wrap;$bt:1px solid var(--border);$c:var(--foreground);$bb:1px solid var(--border)}#_network ._detail ._back{$po:absolute;$l:0;bottom:0;$c:var(--foreground);$w:100%;$bt:1px solid var(--border);$b:var(--darker-background);$d:block;$h:40px;$lh:40px;text-decoration:none;$ta:center;$mt:10px;$tr:background .3s;$cu:pointer}#_network ._detail ._back:active{$c:var(--select-foreground)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Request<div "+(null!=(a=s(n,"class").call(o,"btn clear-request",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-clear",{name:"class",hash:{},data:i}))?a:"")+"></span></div></div><ul "+(null!=(a=s(n,"class").call(o,"requests",{name:"class",hash:{},data:i}))?a:"")+"></ul><div "+(null!=(a=s(n,"class").call(o,"detail",{name:"class",hash:{},data:i}))?a:"")+"></div>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <pre "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"data",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"data"):e,e))+"</pre> "},3:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"reqHeaders"):e,{name:"each",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" "},4:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <tr><td "+(null!=(a=u(n,"class").call(null!=e?e:t.nullContext||{},"key",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(i&&u(i,"key"),e))+"</td><td>"+s(o(e,e))+"</td></tr> "},6:function(t,e,n,r,i){return" <tr><td>Empty</td></tr> "},8:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"resHeaders"):e,{name:"each",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" "},10:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <pre "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"response",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"resTxt"):e,e))+"</pre> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"http",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"breadcrumb",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?s(e,"url"):e,e))+"</div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"data"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=s(n,"class").call(o,"section",{name:"class",hash:{},data:i}))?a:"")+"><h2>Request Headers</h2><table "+(null!=(a=s(n,"class").call(o,"headers",{name:"class",hash:{},data:i}))?a:"")+"><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"reqHeaders"):e,{name:"if",hash:{},fn:t.program(3,i,0),inverse:t.program(6,i,0),data:i}))?a:"")+" </tbody></table><h2>Response Headers</h2><table "+(null!=(a=s(n,"class").call(o,"headers",{name:"class",hash:{},data:i}))?a:"")+"><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"resHeaders"):e,{name:"if",hash:{},fn:t.program(8,i,0),inverse:t.program(6,i,0),data:i}))?a:"")+" </tbody></table></div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"resTxt"):e,{name:"if",hash:{},fn:t.program(10,i,0),inverse:t.noop,data:i}))?a:"")+" </div><div "+(null!=(a=s(n,"class").call(o,"back",{name:"class",hash:{},data:i}))?a:"")+">Back to the List</div>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"requests"):e,{name:"each",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?a:"")+" "},2:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <li class="eruda-request '+(null!=(a=l(n,"if").call(o,null!=e?l(e,"hasErr"):e,{name:"if",hash:{},fn:t.program(3,i,0),inverse:t.noop,data:i}))?a:"")+'" data-id="'+u(s(i&&l(i,"key"),e))+'"><span '+(null!=(a=l(n,"class").call(o,"name",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"name"):e,e))+"</span><span "+(null!=(a=l(n,"class").call(o,"status",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"status"):e,e))+"</span><span "+(null!=(a=l(n,"class").call(o,"method",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"method"):e,e))+"</span><span "+(null!=(a=l(n,"class").call(o,"type",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"subType"):e,e))+"</span><span "+(null!=(a=l(n,"class").call(o,"size",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"size"):e,e))+"</span><span "+(null!=(a=l(n,"class").call(o,"time",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"displayTime"):e,e))+"</span></li> "},3:function(t,e,n,r,i){return"eruda-error"},5:function(t,e,n,r,i){var a;return" <li><span "+(null!=(a=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"class").call(null!=e?e:t.nullContext||{},"name",{name:"class",hash:{},data:i}))?a:"")+">Empty</span></li> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(a=o(n,"if").call(null!=e?e:t.nullContext||{},null!=e?o(e,"requests"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.program(5,i,0),data:i}))?a:""},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"._elements-highlight{$d:none;$po:absolute;$l:0;right:0;$z:-100;$pe:none!important}._elements-highlight *{$pe:none!important}._elements-highlight ._indicator{$po:absolute;$l:0;right:0;$w:100%;$h:100%}._elements-highlight ._margin{$po:absolute;$z:100}._elements-highlight ._border{$po:absolute;$l:0;right:0;$w:100%;$h:100%;$z:200}._elements-highlight ._padding{$po:absolute;$z:300}._elements-highlight ._content{$po:absolute;$z:400}._elements-highlight ._size{$po:absolute;$t:0;$l:0;$b:#fff;$c:#222;$fs:12px;$h:25px;$lh:25px;$ta:center;$p:0 5px;$ws:nowrap;$ox:hidden;$bs:0 2px 2px 0 rgba(0,0,0,.05),0 1px 4px 0 rgba(0,0,0,.08),0 3px 1px -2px rgba(0,0,0,.2)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"elements-highlight",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"indicator",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"margin",{name:"class",hash:{},data:i}))?a:"")+"></div><div "+(null!=(a=s(n,"class").call(o,"border",{name:"class",hash:{},data:i}))?a:"")+"></div><div "+(null!=(a=s(n,"class").call(o,"padding",{name:"class",hash:{},data:i}))?a:"")+"></div><div "+(null!=(a=s(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"></div></div><div "+(null!=(a=s(n,"class").call(o,"size",{name:"class",hash:{},data:i}))?a:"")+"></div></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_elements{$pb:40px;$fs:14px}#_elements ._show-area{$oy:auto;$wos:touch;$h:100%}#_elements ._parents{$ox:auto;$wos:touch;$b:var(--darker-background);$c:var(--primary);$p:10px;$ws:nowrap;$bb:1px solid var(--border);$cu:pointer;$fs:12px}#_elements ._parents li{$d:inline-block}#_elements ._parents li ._parent{$d:inline-block}#_elements ._parents li:last-child{margin-right:0}#_elements ._parents ._icon-arrow-right{$fs:8px;$po:relative;$t:-1px}#_elements ._breadcrumb{$b:var(--darker-background);$c:var(--primary);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$mb:10px;word-break:break-all;$p:10px;$fs:16px;$mh:40px;$bb:1px solid var(--border);$cu:pointer;$tr:background .3s,color .3s}#_elements ._breadcrumb:active{$b:var(--highlight);$c:var(--select-foreground)}#_elements ._breadcrumb:active span{$c:var(--select-foreground)}#_elements ._section{$bb:1px solid var(--border);$c:var(--foreground);$mb:10px}#_elements ._section h2{$c:var(--primary);$b:var(--darker-background);$bt:1px solid var(--border);$p:10px;$fs:14px;$tr:background .3s}#_elements ._section h2 ._btn{$d:flex;$ml:5px;$f:right;$c:var(--primary);$w:18px;$h:18px;justify-content:center;align-items:center;$fs:16px;$cu:pointer;$tr:color .3s}#_elements ._section h2 ._btn._search-keyword{$w:auto;max-width:80px;$fs:14px;$o:hidden;text-overflow:ellipsis;$d:inline-block}#_elements ._section h2 ._btn:active{$c:var(--accent)}#_elements ._section h2._active-effect{$cu:pointer}#_elements ._section h2._active-effect:active{$b:var(--highlight);$c:var(--select-foreground)}#_elements ._children{$b:var(--darker-background);$c:var(--foreground);$mb:10px!important;$bb:1px solid var(--border)}#_elements ._children li{$ox:auto;$wos:touch;$cu:default;$p:10px;$bt:1px solid var(--border);$ws:nowrap;$tr:background .3s,color .3s}#_elements ._children li span{$tr:color .3s}#_elements ._children li._active-effect{$cu:pointer}#_elements ._children li._active-effect:active{$b:var(--highlight);$c:var(--select-foreground)}#_elements ._children li._active-effect:active span{$c:var(--select-foreground)}#_elements ._attributes{$fs:12px}#_elements ._attributes a{$c:var(--link-color)}#_elements ._attributes ._table-wrapper{$ox:auto;$wos:touch}#_elements ._attributes table td{$p:5px 10px}#_elements ._text-content{$b:#fff}#_elements ._text-content ._content{$ox:auto;$wos:touch;$p:10px}#_elements ._style-color{$po:relative;$t:1px;$w:10px;$h:10px;$bra:50%;margin-right:2px;$bo:1px solid var(--border);$d:inline-block}#_elements ._box-model{$ox:auto;$wos:touch;$c:#222;$fs:12px;$p:10px;$ta:center;$ws:nowrap;$bb:1px solid var(--color)}#_elements ._box-model ._label{$po:absolute;$ml:3px;$p:0 2px}#_elements ._box-model ._bottom,#_elements ._box-model ._left,#_elements ._box-model ._right,#_elements ._box-model ._top{$d:inline-block}#_elements ._box-model ._left,#_elements ._box-model ._right{vertical-align:middle}#_elements ._box-model ._border,#_elements ._box-model ._content,#_elements ._box-model ._margin,#_elements ._box-model ._padding,#_elements ._box-model ._position{$po:relative;$b:#fff;$d:inline-block;$ta:center;vertical-align:middle;$p:3px;$m:3px}#_elements ._box-model ._position{$bo:1px grey dotted}#_elements ._box-model ._margin{$bo:1px dashed;$b:rgba(246,178,107,.66)}#_elements ._box-model ._border{$bo:1px #000 solid;$b:rgba(255,229,153,.66)}#_elements ._box-model ._padding{$bo:1px grey dashed;$b:rgba(147,196,125,.55)}#_elements ._box-model ._content{$bo:1px grey solid;min-width:100px;$b:rgba(111,168,220,.66)}#_elements ._computed-style{$fs:12px}#_elements ._computed-style a{$c:var(--link-color)}#_elements ._computed-style ._table-wrapper{$oy:auto;$wos:touch;max-height:200px;$bt:1px solid var(--border)}#_elements ._computed-style table td{$p:5px 10px}#_elements ._computed-style table td._key{$ws:nowrap;$c:var(--var-color)}#_elements ._styles{$fs:12px}#_elements ._styles ._style-wrapper{$p:10px}#_elements ._styles ._style-wrapper ._style-rules{$bo:1px solid var(--border);$p:10px;$mb:10px}#_elements ._styles ._style-wrapper ._style-rules ._rule{$pl:2em;word-break:break-all}#_elements ._styles ._style-wrapper ._style-rules ._rule a{$c:var(--link-color)}#_elements ._styles ._style-wrapper ._style-rules ._rule span{$c:var(--var-color)}#_elements ._styles ._style-wrapper ._style-rules:last-child{$mb:0}#_elements ._listeners{$fs:12px}#_elements ._listeners ._listener-wrapper{$p:10px}#_elements ._listeners ._listener-wrapper ._listener{$mb:10px;$o:hidden;$bo:1px solid var(--border)}#_elements ._listeners ._listener-wrapper ._listener ._listener-type{$p:10px;$b:var(--darker-background);$c:var(--primary)}#_elements ._listeners ._listener-wrapper ._listener ._listener-content li{$ox:auto;$wos:touch;$p:10px;$bt:none}#_elements ._bottom-bar{$h:40px;$b:var(--darker-background);$po:absolute;$l:0;bottom:0;$w:100%;$fs:0;$bt:1px solid var(--border)}#_elements ._bottom-bar ._btn{$cu:pointer;$ta:center;$c:var(--primary);$fs:14px;$lh:40px;$w:25%;$d:inline-block;$tr:background .3s,color .3s}#_elements ._bottom-bar ._btn:active{$b:var(--highlight);$c:var(--select-foreground)}#_elements ._bottom-bar ._btn._active{$c:var(--accent)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <ul "+(null!=(a=s(n,"class").call(o,"parents",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"parents"):e,{name:"each",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?a:"")+" </ul> "},2:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <li><div "+(null!=(a=u(n,"class").call(o,"parent",{name:"class",hash:{},data:i}))?a:"")+' data-idx="'+t.escapeExpression(s(null!=e?u(e,"idx"):e,e))+'">'+(null!=(a=s(null!=e?u(e,"text"):e,e))?a:"")+"</div><span "+(null!=(a=u(n,"class").call(o,"icon-arrow-right",{name:"class",hash:{},data:i}))?a:"")+"></span></li> "},4:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <ul "+(null!=(a=s(n,"class").call(o,"children",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"children"):e,{name:"each",hash:{},fn:t.program(5,i,0),inverse:t.noop,data:i}))?a:"")+" </ul> "},5:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <li class="eruda-child '+(null!=(a=u(n,"if").call(o,null!=e?u(e,"isCmt"):e,{name:"if",hash:{},fn:t.program(6,i,0),inverse:t.noop,data:i}))?a:"")+" "+(null!=(a=u(n,"if").call(o,null!=e?u(e,"isEl"):e,{name:"if",hash:{},fn:t.program(8,i,0),inverse:t.noop,data:i}))?a:"")+'" data-idx="'+t.escapeExpression(s(null!=e?u(e,"idx"):e,e))+'">'+(null!=(a=s(null!=e?u(e,"text"):e,e))?a:"")+"</li> "},6:function(t,e,n,r,i){return"eruda-green"},8:function(t,e,n,r,i){return"eruda-active-effect"},10:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"attributes"):e,{name:"each",hash:{},fn:t.program(11,i,0),inverse:t.noop,data:i}))?a:"")+" "},11:function(t,e,n,r,i){var a,o=t.lambda,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <tr><td class="eruda-attribute-name-color">'+t.escapeExpression(o(null!=e?s(e,"name"):e,e))+'</td><td class="eruda-string-color">'+(null!=(a=o(null!=e?s(e,"value"):e,e))?a:"")+"</td></tr> "},13:function(t,e,n,r,i){return" <tr><td>Empty</td></tr> "},15:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"styles section",{name:"class",hash:{},data:i}))?a:"")+"><h2>Styles</h2><div "+(null!=(a=s(n,"class").call(o,"style-wrapper",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"styles"):e,{name:"each",hash:{},fn:t.program(16,i,0),inverse:t.noop,data:i}))?a:"")+" </div></div> "},16:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"style-rules",{name:"class",hash:{},data:i}))?a:"")+"><div>"+t.escapeExpression(t.lambda(null!=e?s(e,"selectorText"):e,e))+" {</div> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"style"):e,{name:"each",hash:{},fn:t.program(17,i,0),inverse:t.noop,data:i}))?a:"")+" <div>}</div></div> "},17:function(t,e,n,r,i){var a,o=t.lambda,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(null!=e?e:t.nullContext||{},"rule",{name:"class",hash:{},data:i}))?a:"")+"><span>"+t.escapeExpression(o(i&&s(i,"key"),e))+"</span>: "+(null!=(a=o(e,e))?a:"")+";</div> "},19:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=l(n,"class").call(o,"computed-style section",{name:"class",hash:{},data:i}))?a:"")+"><h2>Computed Style "+(null!=(a=l(n,"if").call(o,null!=e?l(e,"rmDefComputedStyle"):e,{name:"if",hash:{},fn:t.program(20,i,0),inverse:t.program(22,i,0),data:i}))?a:"")+" <div "+(null!=(a=l(n,"class").call(o,"btn computed-style-search",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=l(n,"class").call(o,"icon-search",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "+(null!=(a=l(n,"if").call(o,null!=e?l(e,"computedStyleSearchKeyword"):e,{name:"if",hash:{},fn:t.program(24,i,0),inverse:t.noop,data:i}))?a:"")+" </h2><div "+(null!=(a=l(n,"class").call(o,"box-model",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=l(n,"if").call(o,null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a,{name:"if",hash:{},fn:t.program(26,i,0),inverse:t.noop,data:i}))?a:"")+"<div "+(null!=(a=l(n,"class").call(o,"margin",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(o,"label",{name:"class",hash:{},data:i}))?a:"")+">margin</div><div "+(null!=(a=l(n,"class").call(o,"top",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"margin"):a)?l(a,"top"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"left",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"margin"):a)?l(a,"left"):a,e))+"</div><div "+(null!=(a=l(n,"class").call(o,"border",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(o,"label",{name:"class",hash:{},data:i}))?a:"")+">border</div><div "+(null!=(a=l(n,"class").call(o,"top",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"border"):a)?l(a,"top"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"left",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"border"):a)?l(a,"left"):a,e))+"</div><div "+(null!=(a=l(n,"class").call(o,"padding",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(o,"label",{name:"class",hash:{},data:i}))?a:"")+">padding</div><div "+(null!=(a=l(n,"class").call(o,"top",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"padding"):a)?l(a,"top"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"left",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"padding"):a)?l(a,"left"):a,e))+"</div><div "+(null!=(a=l(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"><span>"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"content"):a)?l(a,"width"):a,e))+"</span>&nbsp;×&nbsp;<span>"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"content"):a)?l(a,"height"):a,e))+"</span></div><div "+(null!=(a=l(n,"class").call(o,"right",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"padding"):a)?l(a,"right"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"bottom",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"padding"):a)?l(a,"bottom"):a,e))+"</div></div><div "+(null!=(a=l(n,"class").call(o,"right",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"border"):a)?l(a,"right"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"bottom",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"border"):a)?l(a,"bottom"):a,e))+"</div></div><div "+(null!=(a=l(n,"class").call(o,"right",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"margin"):a)?l(a,"right"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"bottom",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"margin"):a)?l(a,"bottom"):a,e))+"</div></div>"+(null!=(a=l(n,"if").call(o,null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a,{name:"if",hash:{},fn:t.program(28,i,0),inverse:t.noop,data:i}))?a:"")+" </div><div "+(null!=(a=l(n,"class").call(o,"table-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><table><tbody> "+(null!=(a=l(n,"each").call(o,null!=e?l(e,"computedStyle"):e,{name:"each",hash:{},fn:t.program(30,i,0),inverse:t.noop,data:i}))?a:"")+" </tbody></table></div></div> "},20:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"btn toggle-all-computed-style",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-compress",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "},22:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"btn toggle-all-computed-style",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-expand",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "},24:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"btn search-keyword",{name:"class",hash:{},data:i}))?a:"")+"> "+t.escapeExpression(t.lambda(null!=e?o(e,"computedStyleSearchKeyword"):e,e))+" </div> "},26:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=l(n,"class").call(o,"position",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(o,"label",{name:"class",hash:{},data:i}))?a:"")+">position</div><div "+(null!=(a=l(n,"class").call(o,"top",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a)?l(a,"top"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"left",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a)?l(a,"left"):a,e))+"</div>"},28:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=l(n,"class").call(o,"right",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a)?l(a,"right"):a,e))+"</div><br><div "+(null!=(a=l(n,"class").call(o,"bottom",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=(a=null!=(a=null!=e?l(e,"boxModel"):e)?l(a,"position"):a)?l(a,"bottom"):a,e))+"</div></div>"},30:function(t,e,n,r,i){var a,o=t.lambda,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <tr><td "+(null!=(a=s(n,"class").call(null!=e?e:t.nullContext||{},"key",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(o(i&&s(i,"key"),e))+"</td><td>"+(null!=(a=o(e,e))?a:"")+"</td></tr> "},32:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"listeners section",{name:"class",hash:{},data:i}))?a:"")+"><h2>Event Listeners</h2><div "+(null!=(a=s(n,"class").call(o,"listener-wrapper",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"listeners"):e,{name:"each",hash:{},fn:t.program(33,i,0),inverse:t.noop,data:i}))?a:"")+" </div></div> "},33:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"listener",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"listener-type",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(i&&s(i,"key"),e))+"</div><ul "+(null!=(a=s(n,"class").call(o,"listener-content",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,e,{name:"each",hash:{},fn:t.program(34,i,0),inverse:t.noop,data:i}))?a:"")+" </ul></div> "},34:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <li "+(null!=(a=o(n,"if").call(null!=e?e:t.nullContext||{},null!=e?o(e,"useCapture"):e,{name:"if",hash:{},fn:t.program(35,i,0),inverse:t.noop,data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"listenerStr"):e,e))+"</li> "},35:function(t,e,n,r,i){var a;return null!=(a=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"class").call(null!=e?e:t.nullContext||{},"capture",{name:"class",hash:{},data:i}))?a:""},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return(null!=(a=s(n,"if").call(o,null!=e?s(e,"parents"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=s(n,"class").call(o,"breadcrumb",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=t.lambda(null!=e?s(e,"name"):e,e))?a:"")+" </div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"children"):e,{name:"if",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" <div "+(null!=(a=s(n,"class").call(o,"attributes section",{name:"class",hash:{},data:i}))?a:"")+"><h2>Attributes</h2><div "+(null!=(a=s(n,"class").call(o,"table-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><table><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"attributes"):e,{name:"if",hash:{},fn:t.program(10,i,0),inverse:t.program(13,i,0),data:i}))?a:"")+" </tbody></table></div></div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"styles"):e,{name:"if",hash:{},fn:t.program(15,i,0),inverse:t.noop,data:i}))?a:"")+" "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"computedStyle"):e,{name:"if",hash:{},fn:t.program(19,i,0),inverse:t.noop,data:i}))?a:"")+" "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"listeners"):e,{name:"if",hash:{},fn:t.program(32,i,0),inverse:t.noop,data:i}))?a:"")},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"bottom-bar",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"btn select",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon icon-select",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn refresh",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn highlight",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon icon-eye",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn reset",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon icon-reset",{name:"class",hash:{},data:i}))?a:"")+"></span></div></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"._search-highlight-block{$d:inline}._search-highlight-block ._keyword{$b:var(--console-warn-background);$c:var(--console-warn-foreground)}",""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_snippets{$oy:auto;$wos:touch;$p:10px}#_snippets ._section{$mb:10px;$bo:1px solid var(--border);$o:hidden;$cu:pointer}#_snippets ._section:active ._name{$b:var(--highlight);$c:var(--select-foreground)}#_snippets ._section ._name{$p:10px;$c:var(--primary);$b:var(--darker-background);$tr:background .3s}#_snippets ._section ._name ._btn{$ml:10px;$f:right;$ta:center;$w:18px;$h:18px;$lh:18px;$fs:12px}#_snippets ._section ._description{$c:var(--foreground);$p:10px;$tr:background .3s}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a=t.lambda,o=t.escapeExpression,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <div class="eruda-section eruda-run" data-idx="'+o(a(i&&s(i,"index"),e))+'"><h2 class="eruda-name">'+o(a(null!=e?s(e,"name"):e,e))+' <div class="eruda-btn"><span class="eruda-icon-play"></span></div></h2><div class="eruda-description"> '+o(a(null!=e?s(e,"desc"):e,e))+" </div></div> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"snippets"):e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:""},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_resources{$oy:auto;$wos:touch;$p:10px;$fs:14px}#_resources ._section{$mb:10px;$o:hidden;$bo:1px solid var(--border)}#_resources ._section ._content{$oy:auto;$wos:touch;max-height:400px}#_resources ._section._warn{$bo:1px solid var(--console-warn-border)}#_resources ._section._warn ._title{$b:var(--console-warn-background);$c:var(--console-warn-foreground)}#_resources ._section._danger{$bo:1px solid var(--console-error-border)}#_resources ._section._danger ._title{$b:var(--console-error-background);$c:var(--console-error-foreground)}#_resources ._title{$p:10px;$c:var(--primary);$b:var(--darker-background)}#_resources ._title ._btn{$d:flex;$ml:5px;$f:right;$c:var(--primary);$w:18px;$h:18px;justify-content:center;align-items:center;$fs:16px;$cu:pointer;$tr:color .3s}#_resources ._title ._btn._search-keyword{$w:auto;max-width:80px;$fs:14px;$o:hidden;text-overflow:ellipsis;$d:inline-block}#_resources ._title ._btn:active{$c:var(--accent)}#_resources ._link-list{$fs:12px;$c:var(--foreground)}#_resources ._link-list li{$p:10px;word-break:break-all}#_resources ._link-list li a{$c:var(--link-color)!important}#_resources ._image-list{$c:var(--foreground);$fs:12px;$d:flex;flex-wrap:wrap;$p:10px!important}#_resources ._image-list:after{$co:'';$d:block;$cl:both}#_resources ._image-list li{flex-grow:1;$cu:pointer;$oy:hidden}#_resources ._image-list li._image{$h:100px;$fs:0}#_resources ._image-list li img{$h:100px;min-width:100%;-o-object-fit:cover;object-fit:cover}#_resources table{$c:var(--foreground);$bc:collapse;$w:100%;$fs:12px}#_resources table tr:nth-child(even){$b:var(--contrast)}#_resources table td{$p:10px;word-break:break-all}#_resources table td._key{$ox:auto;$wos:touch;$ws:nowrap;max-width:120px}#_resources table td._control{$p:0;$fs:0;$w:40px}#_resources table td._control ._icon-delete{$cu:pointer;$c:var(--primary);$fs:14px;$d:inline-block;$w:40px;$h:40px;$ta:center;$lh:40px;$tr:color .3s}#_resources table td._control ._icon-delete:active{$c:var(--accent)}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"btn search-keyword",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"localStoreSearchKeyword"):e,e))+"</div>"},3:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"localStoreData"):e,{name:"each",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" "},4:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <tr><td "+(null!=(a=l(n,"class").call(o,"key",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"key"):e,e))+"</td><td "+(null!=(a=l(n,"class").call(o,"storage-val",{name:"class",hash:{},data:i}))?a:"")+' data-key="'+u(s(null!=e?l(e,"key"):e,e))+'" data-type="local">'+u(s(null!=e?l(e,"val"):e,e))+"</td><td "+(null!=(a=l(n,"class").call(o,"control",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=l(n,"class").call(o,"icon-delete delete-storage",{name:"class",hash:{},data:i}))?a:"")+' data-key="'+u(s(null!=e?l(e,"key"):e,e))+'" data-type="local"></span></td></tr> '},6:function(t,e,n,r,i){return" <tr><td>Empty</td></tr> "},8:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"btn search-keyword",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"sessionStoreSearchKeyword"):e,e))+"</div>"},10:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"sessionStoreData"):e,{name:"each",hash:{},fn:t.program(11,i,0),inverse:t.noop,data:i}))?a:"")+" "},11:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <tr><td "+(null!=(a=l(n,"class").call(o,"key",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"key"):e,e))+"</td><td "+(null!=(a=l(n,"class").call(o,"storage-val",{name:"class",hash:{},data:i}))?a:"")+' data-key="'+u(s(null!=e?l(e,"key"):e,e))+'" data-type="session">'+u(s(null!=e?l(e,"val"):e,e))+"</td><td "+(null!=(a=l(n,"class").call(o,"control",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=l(n,"class").call(o,"icon-delete delete-storage",{name:"class",hash:{},data:i}))?a:"")+' data-key="'+u(s(null!=e?l(e,"key"):e,e))+'" data-type="session"></span></td></tr> '},13:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"btn search-keyword",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"cookieSearchKeyword"):e,e))+"</div>"},15:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"cookieData"):e,{name:"each",hash:{},fn:t.program(16,i,0),inverse:t.noop,data:i}))?a:"")+" "},16:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <tr><td "+(null!=(a=l(n,"class").call(o,"key",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"key"):e,e))+"</td><td>"+u(s(null!=e?l(e,"val"):e,e))+"</td><td "+(null!=(a=l(n,"class").call(o,"control",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=l(n,"class").call(o,"icon-delete delete-cookie",{name:"class",hash:{},data:i}))?a:"")+' data-key="'+u(s(null!=e?l(e,"key"):e,e))+'"></span></td></tr> '},18:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"scriptData"):e,{name:"each",hash:{},fn:t.program(19,i,0),inverse:t.noop,data:i}))?a:"")+" "},19:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <li><a href="'+s(o(e,e))+'" target="_blank" '+(null!=(a=u(n,"class").call(null!=e?e:t.nullContext||{},"js-link",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(e,e))+"</a></li> "},21:function(t,e,n,r,i){return" <li>Empty</li> "},23:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"stylesheetData"):e,{name:"each",hash:{},fn:t.program(24,i,0),inverse:t.noop,data:i}))?a:"")+" "},24:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <li><a href="'+s(o(e,e))+'" target="_blank" '+(null!=(a=u(n,"class").call(null!=e?e:t.nullContext||{},"css-link",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(e,e))+"</a></li> "},26:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"iframeData"):e,{name:"each",hash:{},fn:t.program(27,i,0),inverse:t.noop,data:i}))?a:"")+" "},27:function(t,e,n,r,i){var a,o=t.lambda,s=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return' <li><a href="'+s(o(e,e))+'" target="_blank" '+(null!=(a=u(n,"class").call(null!=e?e:t.nullContext||{},"iframe-link",{name:"class",hash:{},data:i}))?a:"")+">"+s(o(e,e))+"</a></li> "},29:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"imageData"):e,{name:"each",hash:{},fn:t.program(30,i,0),inverse:t.noop,data:i}))?a:"")+" "},30:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <li "+(null!=(a=s(n,"class").call(o,"image",{name:"class",hash:{},data:i}))?a:"")+'><img src="'+t.escapeExpression(t.lambda(e,e))+'" data-exclude="true" '+(null!=(a=s(n,"class").call(o,"img-link",{name:"class",hash:{},data:i}))?a:"")+"></li> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"section local-storage",{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Local Storage<div "+(null!=(a=s(n,"class").call(o,"btn refresh-local-storage",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn clear-storage",{name:"class",hash:{},data:i}))?a:"")+' data-type="local"><span '+(null!=(a=s(n,"class").call(o,"icon-clear",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn search",{name:"class",hash:{},data:i}))?a:"")+' data-type="local"><span '+(null!=(a=s(n,"class").call(o,"icon-search",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"localStoreSearchKeyword"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" </h2><div "+(null!=(a=s(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"><table><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"localStoreData"):e,{name:"if",hash:{},fn:t.program(3,i,0),inverse:t.program(6,i,0),data:i}))?a:"")+" </tbody></table></div></div><div "+(null!=(a=s(n,"class").call(o,"section session-storage",{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Session Storage<div "+(null!=(a=s(n,"class").call(o,"btn refresh-session-storage",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn clear-storage",{name:"class",hash:{},data:i}))?a:"")+' data-type="session"><span '+(null!=(a=s(n,"class").call(o,"icon-clear",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn search",{name:"class",hash:{},data:i}))?a:"")+' data-type="session"><span '+(null!=(a=s(n,"class").call(o,"icon-search",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"sessionStoreSearchKeyword"):e,{name:"if",hash:{},fn:t.program(8,i,0),inverse:t.noop,data:i}))?a:"")+" </h2><div "+(null!=(a=s(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"><table><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"sessionStoreData"):e,{name:"if",hash:{},fn:t.program(10,i,0),inverse:t.program(6,i,0),data:i}))?a:"")+" </tbody></table></div></div><div "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,"section cookie ",null!=e?s(e,"cookieState"):e,{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Cookie<div "+(null!=(a=s(n,"class").call(o,"btn refresh-cookie",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn clear-cookie",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-clear",{name:"class",hash:{},data:i}))?a:"")+"></span></div><div "+(null!=(a=s(n,"class").call(o,"btn search",{name:"class",hash:{},data:i}))?a:"")+' data-type="cookie"><span '+(null!=(a=s(n,"class").call(o,"icon-search",{name:"class",hash:{},data:i}))?a:"")+"></span></div> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"cookieSearchKeyword"):e,{name:"if",hash:{},fn:t.program(13,i,0),inverse:t.noop,data:i}))?a:"")+" </h2><div "+(null!=(a=s(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"><table><tbody> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"cookieData"):e,{name:"if",hash:{},fn:t.program(15,i,0),inverse:t.program(6,i,0),data:i}))?a:"")+" </tbody></table></div></div><div "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,"section script ",null!=e?s(e,"scriptState"):e,{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Script<div "+(null!=(a=s(n,"class").call(o,"btn refresh-script",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div></h2><ul "+(null!=(a=s(n,"class").call(o,"link-list",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"scriptData"):e,{name:"if",hash:{},fn:t.program(18,i,0),inverse:t.program(21,i,0),data:i}))?a:"")+" </ul></div><div "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,"section stylesheet ",null!=e?s(e,"stylesheetState"):e,{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Stylesheet<div "+(null!=(a=s(n,"class").call(o,"btn refresh-stylesheet",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div></h2><ul "+(null!=(a=s(n,"class").call(o,"link-list",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"stylesheetData"):e,{name:"if",hash:{},fn:t.program(23,i,0),inverse:t.program(21,i,0),data:i}))?a:"")+" </ul></div><div "+(null!=(a=s(n,"class").call(o,"section iframe",{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">Iframe<div "+(null!=(a=s(n,"class").call(o,"btn refresh-iframe",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div></h2><ul "+(null!=(a=s(n,"class").call(o,"link-list",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"iframeData"):e,{name:"if",hash:{},fn:t.program(26,i,0),inverse:t.program(21,i,0),data:i}))?a:"")+" </ul></div><div "+(null!=(a=s(n,"class").call(o,"section image",{name:"class",hash:{},data:i}))?a:"")+"><h2 "+(null!=(a=s(n,"class").call(o,s(n,"concat").call(o,"title ",null!=e?s(e,"imageState"):e,{name:"concat",hash:{},data:i}),{name:"class",hash:{},data:i}))?a:"")+">Image<div "+(null!=(a=s(n,"class").call(o,"btn refresh-image",{name:"class",hash:{},data:i}))?a:"")+"><span "+(null!=(a=s(n,"class").call(o,"icon-refresh",{name:"class",hash:{},data:i}))?a:"")+"></span></div></h2><ul "+(null!=(a=s(n,"class").call(o,"image-list",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"if").call(o,null!=e?s(e,"imageData"):e,{name:"if",hash:{},fn:t.program(29,i,0),inverse:t.program(21,i,0),data:i}))?a:"")+" </ul></div>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_info{$oy:auto;$wos:touch}#_info li{$m:10px;$bo:1px solid var(--border)}#_info li ._content,#_info li ._title{$p:10px}#_info li ._title{$pb:0;$fs:16px;$c:var(--accent)}#_info li ._content{$m:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$c:var(--foreground);word-break:break-all}#_info li ._content table{$w:100%;$bc:collapse}#_info li ._content table td,#_info li ._content table th{$bo:1px solid var(--border);$p:10px}#_info li ._content *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}#_info li ._content a{$c:var(--link-color)}#_info li ._device-key,#_info li ._system-key{$w:100px}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <li><h2 "+(null!=(a=u(n,"class").call(o,"title",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(s(null!=e?u(e,"name"):e,e))+"</h2><div "+(null!=(a=u(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+">"+(null!=(a=s(null!=e?u(e,"val"):e,e))?a:"")+"</div></li> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<ul> "+(null!=(a=o(n,"each").call(null!=e?e:t.nullContext||{},null!=e?o(e,"infos"):e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+" </ul>"},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,"#_sources{$oy:auto;$wos:touch;$c:var(--foreground)}#_sources ._code-wrapper,#_sources ._raw-wrapper{$ox:auto;$wos:touch;$w:100%;$mh:100%}#_sources ._raw{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$p:10px}#_sources ._code{$fs:12px}#_sources ._code ._content *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}#_sources pre._code{$p:10px}#_sources table._code{$bc:collapse}#_sources table._code ._gutter{$b:var(--background);$c:var(--primary)}#_sources table._code ._line-num{$br:1px solid var(--border);$p:0 3px 0 5px;$ta:right}#_sources table._code ._code-line{$p:0 4px;$ws:pre}#_sources ._image ._breadcrumb{$b:var(--darker-background);$c:var(--primary);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text;$mb:10px;word-break:break-all;$p:10px;$fs:16px;$mh:40px;$bb:1px solid var(--border)}#_sources ._image ._img-container{$ta:center}#_sources ._image ._img-container img{max-width:100%}#_sources ._image ._img-info{$ta:center;$m:20px 0;$c:var(--foreground)}#_sources ._json{$p:0 10px}#_sources ._json *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;$us:text}#_sources iframe{$w:100%;$h:100%}",""]),t.exports=e},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"code-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><table "+(null!=(a=s(n,"class").call(o,"code",{name:"class",hash:{},data:i}))?a:"")+"><tbody><tr><td "+(null!=(a=s(n,"class").call(o,"gutter",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"code"):e,{name:"each",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?a:"")+" </td><td "+(null!=(a=s(n,"class").call(o,"content",{name:"class",hash:{},data:i}))?a:"")+"> "+(null!=(a=s(n,"each").call(o,null!=e?s(e,"code"):e,{name:"each",hash:{},fn:t.program(4,i,0),inverse:t.noop,data:i}))?a:"")+" </td></tr></tbody></table></div> "},2:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"line-num",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?o(e,"idx"):e,e))+"</div> "},4:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <pre "+(null!=(a=o(n,"class").call(null!=e?e:t.nullContext||{},"code-line",{name:"class",hash:{},data:i}))?a:"")+">"+(null!=(a=t.lambda(null!=e?o(e,"val"):e,e))?a:"")+"</pre> "},6:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return" <div "+(null!=(a=s(n,"class").call(o,"code-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><pre "+(null!=(a=s(n,"class").call(o,"code",{name:"class",hash:{},data:i}))?a:"")+">"+(null!=(a=t.lambda(null!=e?s(e,"code"):e,e))?a:"")+"</pre></div> "},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(a=o(n,"if").call(null!=e?e:t.nullContext||{},null!=e?o(e,"showLineNum"):e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.program(6,i,0),data:i}))?a:""},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lambda,u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=l(n,"class").call(o,"image",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=l(n,"class").call(o,"breadcrumb",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"src"):e,e))+"</div><div "+(null!=(a=l(n,"class").call(o,"img-container",{name:"class",hash:{},data:i}))?a:"")+' data-exclude="true"><img src="'+u(s(null!=e?l(e,"src"):e,e))+'"></div><div '+(null!=(a=l(n,"class").call(o,"img-info",{name:"class",hash:{},data:i}))?a:"")+">"+u(s(null!=e?l(e,"width"):e,e))+" × "+u(s(null!=e?l(e,"height"):e,e))+"</div></div>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a;return"<ul "+(null!=(a=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"class").call(null!=e?e:t.nullContext||{},"json",{name:"class",hash:{},data:i}))?a:"")+"></ul>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=null!=e?e:t.nullContext||{},s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div "+(null!=(a=s(n,"class").call(o,"raw-wrapper",{name:"class",hash:{},data:i}))?a:"")+"><div "+(null!=(a=s(n,"class").call(o,"raw",{name:"class",hash:{},data:i}))?a:"")+">"+t.escapeExpression(t.lambda(null!=e?s(e,"val"):e,e))+"</div></div>"},useData:!0})},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var a,o=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<iframe src="'+(null!=(a=t.lambda(null!=e?o(e,"src"):e,e))?a:"")+'"></iframe>'},useData:!0})},function(t,e,n){(e=n(8)(!1)).push([t.i,'.luna-object-viewer{$ox:auto;$wos:touch;$cu:default;$fs:12px;$lh:1.2;$mh:100%;$c:#333;list-style:none!important}.luna-object-viewer>li>.luna-object-viewer-key{$d:none}.luna-object-viewer>li{$p:10px 0}.luna-object-viewer ul{list-style:none!important}.luna-object-viewer ul{$p:0!important;$pl:15px!important;$m:0!important}.luna-object-viewer li{$po:relative;$ws:nowrap;$lh:16px;$mh:16px}.luna-object-viewer span{$po:static!important}.luna-object-viewer li .luna-object-viewer-collapsed~.luna-object-viewer-close:before{$c:#999}.luna-object-viewer-array .luna-object-viewer-object .luna-object-viewer-key{$d:inline}.luna-object-viewer-null{$c:grey}.luna-object-viewer-regexp,.luna-object-viewer-string{$c:#1a1aa6}.luna-object-viewer-number{$c:#1c00cf}.luna-object-viewer-boolean{$c:#881280}.luna-object-viewer-special{$c:grey}.luna-object-viewer-key,.luna-object-viewer-key-lighter{$c:#c80000}.luna-object-viewer-key-lighter{opacity:.6}.luna-object-viewer-expanded:before{$co:"";$w:0;$h:0;$bo:4px solid transparent;$po:absolute;$btc:#333;$l:-12px;$t:6px}.luna-object-viewer-collapsed:before{$co:"";$blc:#333;$btc:transparent;$l:-10px;$t:4px}.luna-object-viewer-hidden~ul{$d:none}',""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,".luna-notification{$po:fixed;$t:0;$l:0;$w:100%;$h:100%;$p:20px;$bsi:border-box;$pe:none;$d:flex;flex-direction:column;$fs:14px}.luna-notification-item{$d:flex;$bs:0 3px 7px 0 rgba(0,0,0,.25);$p:10px 16px;$b:#fff}.luna-notification-lower{$mt:16px}.luna-notification-upper{$mb:16px}",""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,'.luna-object-viewer{$c:var(--primary);$fs:12px!important}.luna-object-viewer>li{$p:10px 0!important}.luna-object-viewer-null{$c:var(--operator-color)}.luna-object-viewer-regexp,.luna-object-viewer-string{$c:var(--string-color)}.luna-object-viewer-number{$c:var(--number-color)}.luna-object-viewer-boolean{$c:var(--keyword-color)}.luna-object-viewer-special{$c:var(--operator-color)}.luna-object-viewer-key,.luna-object-viewer-key-lighter{$c:var(--var-color)}.luna-object-viewer-expanded:before{border-color:transparent;$btc:var(--foreground)}.luna-object-viewer-collapsed:before{$btc:transparent;$blc:var(--foreground)}.luna-notification{$pe:none!important;$p:10px;$z:1000}.luna-notification-item{$z:500;$c:var(--foreground);$b:var(--background);$bs:none;$p:5px 10px;$bo:1px solid var(--border)}.luna-notification-upper{$mb:10px}.luna-notification-lower{$mt:10px}._container{$pe:none;$po:fixed;$l:0;$t:0;$w:100%;$h:100%;$z:100000;$c:var(--foreground);$ff:".SFNSDisplay-Regular","Helvetica Neue","Lucida Grande","Segoe UI",Tahoma,sans-seri;$fs:14px;direction:ltr}._container *{$bsi:border-box;$pe:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;$us:none;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none}._container ul{list-style:none;$p:0;$m:0}._container h1,._container h2,._container h3,._container h4{$m:0}._hidden{$d:none}._tag-name-color{$c:var(--tag-name-color)}._function-color{$c:var(--function-color)}._attribute-name-color{$c:var(--attribute-name-color)}._operator-color{$c:var(--operator-color)}._string-color{$c:var(--string-color)}',""]),t.exports=e},function(t,e,n){(e=n(8)(!1)).push([t.i,"._container a,._container abbr,._container acronym,._container address,._container applet,._container article,._container aside,._container audio,._container b,._container big,._container blockquote,._container canvas,._container caption,._container center,._container cite,._container code,._container dd,._container del,._container details,._container dfn,._container dl,._container dt,._container em,._container embed,._container fieldset,._container figcaption,._container figure,._container footer,._container form,._container h1,._container h2,._container h3,._container h4,._container h5,._container h6,._container header,._container hgroup,._container i,._container iframe,._container img,._container ins,._container kbd,._container label,._container legend,._container li,._container mark,._container menu,._container nav,._container object,._container ol,._container output,._container p,._container pre,._container q,._container ruby,._container s,._container samp,._container section,._container small,._container span,._container strike,._container strong,._container sub,._container summary,._container sup,._container table,._container tbody,._container td,._container tfoot,._container th,._container thead,._container time,._container tr,._container tt,._container u,._container ul,._container var,._container video{$m:0;$p:0;$bo:0;$fs:100%;font:inherit;vertical-align:baseline}._container article,._container aside,._container details,._container figcaption,._container figure,._container footer,._container header,._container hgroup,._container menu,._container nav,._container section{$d:block}._container body{$lh:1}._container ol,._container ul{list-style:none}._container blockquote,._container q{quotes:none}._container blockquote:after,._container blockquote:before,._container q:after,._container q:before{$co:'';$co:none}._container table{$bc:collapse;border-spacing:0}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),a=n(3),o=n.n(a),s=n(4),u=n.n(s),l=n(5),c=n.n(l),_=n(1),h=n.n(_),p=n(27),f=n.n(p),d=n(0),v=new d.c;v.ADD="ADD",v.SHOW="SHOW",v.SCALE="SCALE";var g=v,m=n(6),b=n.n(m),y=Object(d.b)({init:function(t){this._$el=t},show:function(){return this._$el.show(),this},hide:function(){return this._$el.hide(),this},destroy:function(){this._$el.remove()}}),w=["background","foreground","selectForeground","accent","highlight","border","primary","contrast","varColor","stringColor","keywordColor","numberColor","operatorColor","linkColor","textColor","tagNameColor","functionColor","attributeNameColor","commentColor"],x=w.length;function k(t){for(var e={},n=0;n<x;n++)e[w[n]]=t[n];return e}function $(t){return Object(d.G)(t)&&(t=k(t)),t.darkerBackground||(t.darkerBackground=t.contrast),Object(d.z)({consoleWarnBackground:"#332a00",consoleWarnForeground:"#ffcb6b",consoleWarnBorder:"#650",consoleErrorBackground:"#290000",consoleErrorForeground:"#ff8080",consoleErrorBorder:"#5c0000",light:"#ccc",dark:"#aaa"},t)}function O(t){return Object(d.G)(t)&&(t=k(t)),t.darkerBackground||(t.darkerBackground=t.contrast),Object(d.z)({consoleWarnBackground:"#fffbe5",consoleWarnForeground:"#5c5c00",consoleWarnBorder:"#fff5c2",consoleErrorBackground:"#fff0f0",consoleErrorForeground:"#f00",consoleErrorBorder:"#ffd6d6",light:"#fff",dark:"#eee"},t)}var E={Light:O({darkerBackground:"#f3f3f3",background:"#fff",foreground:"#333",selectForeground:"#333",accent:"#1a73e8",highlight:"#eaeaea",border:"#ccc",primary:"#333",contrast:"#f2f7fd",varColor:"#c80000",stringColor:"#1a1aa6",keywordColor:"#881280",numberColor:"#1c00cf",operatorColor:"#808080",linkColor:"#1155cc",textColor:"#8097bd",tagNameColor:"#881280",functionColor:"#222",attributeNameColor:"#994500",commentColor:"#236e25",cssProperty:"#c80000"}),Dark:$({darkerBackground:"#333",background:"#242424",foreground:"#a5a5a5",selectForeground:"#eaeaea",accent:"#555",highlight:"#000",border:"#3d3d3d",primary:"#ccc",contrast:"#0b2544",varColor:"#e36eec",stringColor:"#f29766",keywordColor:"#9980ff",numberColor:"#9980ff",operatorColor:"#7f7f7f",linkColor:"#ababab",textColor:"#42597f",tagNameColor:"#5db0d7",functionColor:"#d5d5d5",attributeNameColor:"#9bbbdc",commentColor:"#747474"}),"Material Oceanic":$(["#263238","#B0BEC5","#FFFFFF","#009688","#425B67","#2A373E","#607D8B","#1E272C","#eeffff","#c3e88d","#c792ea","#f78c6c","#89ddff","#80cbc4","#B0BEC5","#f07178","#82aaff","#ffcb6b","#546e7a"]),"Material Darker":$(["#212121","#B0BEC5","#FFFFFF","#FF9800","#3F3F3F","#292929","#727272","#1A1A1A","#eeffff","#c3e88d","#c792ea","#f78c6c","#89ddff","#80cbc4","#B0BEC5","#f07178","#82aaff","#ffcb6b","#616161"]),"Material Lighter":O(["#FAFAFA","#546E7A","#546e7a","#00BCD4","#E7E7E8","#d3e1e8","#94A7B0","#F4F4F4","#272727","#91B859","#7C4DFF","#F76D47","#39ADB5","#39ADB5","#546E7A","#E53935","#6182B8","#F6A434","#AABFC9"]),"Material Palenight":$(["#292D3E","#A6ACCD","#FFFFFF","#ab47bc","#444267","#2b2a3e","#676E95","#202331","#eeffff","#c3e88d","#c792ea","#f78c6c","#89ddff","#80cbc4","#A6ACCD","#f07178","#82aaff","#ffcb6b","#676E95"]),"Material Deep Ocean":$(["#0F111A","#8F93A2","#FFFFFF","#84ffff","#1F2233","#41465b","#4B526D","#090B10","#eeffff","#c3e88d","#c792ea","#f78c6c","#89ddff","#80cbc4","#8F93A2","#f07178","#82aaff","#ffcb6b","#717CB4"]),"Monokai Pro":$(["#2D2A2E","#fcfcfa","#FFFFFF","#ffd866","#5b595c","#423f43","#939293","#221F22","#FCFCFA","#FFD866","#FF6188","#AB9DF2","#FF6188","#78DCE8","#fcfcfa","#FF6188","#A9DC76","#78DCE8","#727072"]),Dracula:$(["#282A36","#F8F8F2","#8BE9FD","#FF79C5","#6272A4","#21222C","#6272A4","#191A21","#F8F8F2","#F1FA8C","#FF79C6","#BD93F9","#FF79C6","#F1FA8C","#F8F8F2","#FF79C6","#50FA78","#50FA7B","#6272A4"]),"Arc Dark":$(["#2f343f","#D3DAE3","#FFFFFF","#42A5F5","#3F3F46","#404552","#8b9eb5","#262b33","#CF6A4C","#8F9D6A","#9B859D","#CDA869","#A7A7A7","#7587A6","#D3DAE3","#CF6A4C","#7587A6","#F9EE98","#747C84"]),"Atom One Dark":$(["#282C34","#979FAD","#FFFFFF","#2979ff","#383D48","#2e3239","#979FAD","#21252B","#D19A66","#98C379","#C679DD","#D19A66","#61AFEF","#56B6C2","#979FAD","#F07178","#61AEEF","#E5C17C","#59626F"]),"Atom One Light":O(["#FAFAFA","#232324","#232324","#2979ff","#EAEAEB","#DBDBDC","#9D9D9F","#FFFFFF","#986801","#50A14E","#A626A4","#986801","#4078F2","#0184BC","#232324","#E4564A","#4078F2","#C18401","#A0A1A7"]),"Solarized Dark":$(["#002B36","#839496","#FFFFFF","#d33682","#11353F","#0D3640","#586e75","#00252E","#268BD2","#2AA198","#859900","#D33682","#93A1A1","#268BD2","#839496","#268BD2","#B58900","#B58900","#657B83"]),"Solarized Light":O(["#fdf6e3","#586e75","#002b36","#d33682","#F6F0DE","#f7f2e2","#93a1a1","#eee8d5","#268BD2","#2AA198","#859900","#D33682","#657B83","#268BD2","#586e75","#268BD2","#B58900","#657B83","#93A1A1"]),Github:O(["#F7F8FA","#5B6168","#FFFFFF","#79CB60","#CCE5FF","#DFE1E4","#292D31","#FFFFFF","#24292E","#032F62","#D73A49","#005CC5","#D73A49","#005CC5","#5B6168","#22863A","#6F42C1","#6F42C1","#6A737D"]),"Night Owl":$(["#011627","#b0bec5","#ffffff","#7e57c2","#152C3B","#2a373e","#607d8b","#001424","#addb67","#ecc48d","#c792ea","#f78c6c","#c792ea","#80CBC4","#b0bec5","#7fdbca","#82AAFF","#FAD430","#637777"]),"Light Owl":O(["#FAFAFA","#546e7a","#403f53","#269386","#E0E7EA","#efefef","#403F53","#FAFAFA","#0C969B","#c96765","#994cc3","#aa0982","#7d818b","#994cc3","#546e7a","#994cc3","#4876d6","#4876d6","#637777"])},j=n(28),A=n.n(j),S=[],T=1,C=E.Light,P=function t(e,n){e=Object(d.zb)(e);for(var r=0,i=S.length;r<i;r++)if(S[r].css===e)return;n=n||t.container||document.head;var a=document.createElement("style");a.type="text/css",n.appendChild(a);var o={css:e,el:a,container:n};return D(o),S.push(o),o};function R(){Object(d.u)(S,(function(t){return D(t)}))}function D(t){var e=t.css,n=t.el;e=(e=e.replace(/(\d+)px/g,(function(t,e){return+e*T+"px"}))).replace(/_/g,"eruda-"),Object(d.u)(A.a,(function(t,n){e=e.replace(new RegExp(Object(d.y)("$".concat(t,":")),"g"),n+":")}));var r=Object(d.ab)(E.Light);Object(d.u)(r,(function(t){e=e.replace(new RegExp("var\\(--".concat(Object(d.Z)(t),"\\)"),"g"),C[t])})),n.innerText=e}P.setScale=function(t){T=t,R()},P.setTheme=function(t){C=Object(d.X)(t)?E[t]||E.Light:Object(d.r)(t,E.Light),R()},P.getCurTheme=function(){return C},P.getThemes=function(){return E},P.clear=function(){Object(d.u)(S,(function(t){var e=t.container,n=t.el;return e.removeChild(n)})),S=[]},P.remove=function(t){S=Object(d.B)(S,(function(e){return e!==t})),t.container.removeChild(t.el)};var L=P;function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var M=function(t){u()(r,t);var e=N(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(39)),t.name="settings",t._switchTpl=n(40),t._selectTpl=n(56),t._rangeTpl=n(57),t._colorTpl=n(58),t._settings=[],t}return o()(r,[{key:"init",value:function(t){b()(h()(r.prototype),"init",this).call(this,t),this._bindEvent()}},{key:"remove",value:function(t,e){var n=this;return Object(d.X)(t)?this._$el.find(".eruda-text").each((function(){var e=Object(d.a)(this);e.text()===t&&e.remove()})):this._settings=Object(d.B)(this._settings,(function(r){return r.config!==t||r.key!==e||(n._$el.find("#"+r.id).remove(),!1)})),this._cleanSeparator(),this}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style)}},{key:"clear",value:function(){this._settings=[],this._$el.html("")}},{key:"switch",value:function(t,e,n){var r=this._genId("settings");return this._settings.push({config:t,key:e,id:r}),this._$el.append(this._switchTpl({desc:n,key:e,id:r,val:t.get(e)})),this}},{key:"color",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["#2196f3","#707d8b","#f44336","#009688","#ffc107"],i=this._genId("settings");return this._settings.push({config:t,key:e,id:i}),this._$el.append(this._colorTpl({desc:n,colors:r,id:i,val:t.get(e)})),this}},{key:"select",value:function(t,e,n,r){var i=this._genId("settings");return this._settings.push({config:t,key:e,id:i}),this._$el.append(this._selectTpl({desc:n,selections:r,id:i,val:t.get(e)})),this}},{key:"range",value:function(t,e,n,r){var i=r.min,a=void 0===i?0:i,o=r.max,s=void 0===o?1:o,u=r.step,l=void 0===u?.1:u,c=this._genId("settings");this._settings.push({config:t,key:e,min:a,max:s,step:l,id:c});var _=t.get(e);return this._$el.append(this._rangeTpl({desc:n,min:a,max:s,step:l,val:_,progress:F(_,a,s),id:c})),this}},{key:"separator",value:function(){return this._$el.append('<div class="eruda-separator"></div>'),this}},{key:"text",value:function(t){return this._$el.append('<div class="eruda-text">'.concat(t,"</div>")),this}},{key:"_cleanSeparator",value:function(){var t=Object(d.j)(this._$el.get(0).children);function e(t){return"eruda-separator"===t.getAttribute("class")}for(var n=0,r=t.length;n<r-1;n++)e(t[n])&&e(t[n+1])&&Object(d.a)(t[n]).remove()}},{key:"_genId",value:function(){return Object(d.Cb)("eruda-settings")}},{key:"_closeAll",value:function(){this._$el.find(".eruda-open").rmClass("eruda-open")}},{key:"_getSetting",value:function(t){var e;return Object(d.u)(this._settings,(function(n){n.id===t&&(e=n)})),e}},{key:"_bindEvent",value:function(){var t=this;this._$el.on("click",".eruda-checkbox",(function(){var e=Object(d.a)(this).find("input"),n=e.data("id"),r=e.get(0).checked,i=t._getSetting(n);i.config.set(i.key,r)})).on("click",".eruda-select .eruda-head",(function(){var e=Object(d.a)(this).parent().find("ul"),n=e.hasClass("eruda-open");t._closeAll(),n?e.rmClass("eruda-open"):e.addClass("eruda-open")})).on("click",".eruda-select li",(function(){var e=Object(d.a)(this),n=e.parent(),r=e.text(),i=n.data("id"),a=t._getSetting(i);n.rmClass("eruda-open"),n.parent().find(".eruda-head span").text(r),a.config.set(a.key,r)})).on("click",".eruda-range .eruda-head",(function(){var e=Object(d.a)(this).parent().find(".eruda-input-container"),n=e.hasClass("eruda-open");t._closeAll(),n?e.rmClass("eruda-open"):e.addClass("eruda-open")})).on("change",".eruda-range input",(function(){var e=Object(d.a)(this),n=e.parent().data("id"),r=+e.val(),i=t._getSetting(n);i.config.set(i.key,r)})).on("input",".eruda-range input",(function(){var e=Object(d.a)(this),n=e.parent(),r=n.data("id"),i=+e.val(),a=t._getSetting(r),o=a.min,s=a.max;n.parent().find(".eruda-head span").text(i),n.find(".eruda-range-track-progress").css("width",F(i,o,s)+"%")})).on("click",".eruda-color .eruda-head",(function(){var e=Object(d.a)(this).parent().find("ul"),n=e.hasClass("eruda-open");t._closeAll(),n?e.rmClass("eruda-open"):e.addClass("eruda-open")})).on("click",".eruda-color li",(function(){var e=Object(d.a)(this),n=e.parent(),r=e.css("background-color"),i=n.data("id"),a=t._getSetting(i);n.rmClass("eruda-open"),n.parent().find(".eruda-head span").css("background-color",r),a.config.set(a.key,r)}))}}],[{key:"createCfg",value:function(t,e){return new d.d("eruda-"+t,e)}}]),r}(y),F=function(t,e,n){return((t-e)/(n-e)*100).toFixed(2)};function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var I=function(t){u()(r,t);var e=z(r);function r(t){var a;return i()(this,r),(a=e.call(this))._style=L(n(59)),a._$container=t,a._appendTpl(),a._makeDraggable(),a._bindEvent(),a._registerListener(),a}return o()(r,[{key:"hide",value:function(){this._$el.hide()}},{key:"show",value:function(){this._$el.show()}},{key:"setPos",value:function(t){this._isOutOfRange(t)&&(t=this._getDefPos()),this._$el.css({left:t.x,top:t.y}),this.config.set("pos",t)}},{key:"getPos",value:function(){return this.config.get("pos")}},{key:"destroy",value:function(){L.remove(this._style),this._unregisterListener(),this._$el.remove()}},{key:"_isOutOfRange",value:function(t){t=t||this.config.get("pos");var e=this._getDefPos();return t.x>e.x+10||t.x<0||t.y<0||t.y>e.y+10}},{key:"_registerListener",value:function(){var t=this;this._scaleListener=function(){return Object(d.hb)((function(){t._isOutOfRange()&&t._resetPos()}))},g.on(g.SCALE,this._scaleListener)}},{key:"_unregisterListener",value:function(){g.off(g.SCALE,this._scaleListener)}},{key:"_appendTpl",value:function(){var t=this._$container;t.append(n(60)()),this._$el=t.find(".eruda-entry-btn")}},{key:"_resetPos",value:function(t){var e=this.config,n=e.get("pos"),r=this._getDefPos();e.get("rememberPos")&&!t||(n=r),this.setPos(n)}},{key:"_bindEvent",value:function(){var t=this,e=this._draggabilly,n=this._$el;e.on("staticClick",(function(){return t.emit("click")})).on("dragStart",(function(){return n.addClass("eruda-active")})),e.on("dragEnd",(function(){var e=t.config;e.get("rememberPos")&&e.set("pos",{x:Object(d.nb)(t._$el.css("left")),y:Object(d.nb)(t._$el.css("top"))}),n.rmClass("eruda-active")})),d.kb.on("change",(function(){return t._resetPos(!0)})),window.addEventListener("resize",(function(){return t._resetPos()}))}},{key:"_makeDraggable",value:function(){this._draggabilly=new f.a(this._$el.get(0),{containment:!0})}},{key:"initCfg",value:function(t){var e=this.config=M.createCfg("entry-button",{rememberPos:!0,pos:this._getDefPos()});t.separator().switch(e,"rememberPos","Remember Entry Button Position"),this._resetPos()}},{key:"_getDefPos",value:function(){var t=this._$el.get(0).offsetWidth+10;return{x:window.innerWidth-t,y:window.innerHeight-t}}}]),r}(d.c);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var H,U=function(t){u()(r,t);var e=B(r);function r(t){var a;return i()(this,r),(a=e.call(this))._style=L(n(61)),a._$el=t.find(".eruda-nav-bar"),a._$bottomBar=t.find(".eruda-bottom-bar"),a._len=0,a._bindEvent(),a}return o()(r,[{key:"add",value:function(t){var e=this._$el;this._len++;var n=e.find(".eruda-nav-bar-item").last(),r='<div class="eruda-nav-bar-item">'.concat(t,"</div>");n.length>0&&"settings"===n.text()?n.before(r):e.append(r),this.resetBottomBar()}},{key:"remove",value:function(t){this._len--,this._$el.find(".eruda-nav-bar-item").each((function(){var e=Object(d.a)(this);e.text().toLowerCase()===t.toLowerCase()&&e.remove()})),this.resetBottomBar()}},{key:"activateTool",value:function(t){var e=this;this._$el.find(".eruda-nav-bar-item").each((function(){var n=Object(d.a)(this);n.text()===t?(n.addClass("eruda-active"),e.resetBottomBar(),e._scrollItemToView()):n.rmClass("eruda-active")}))}},{key:"destroy",value:function(){L.remove(this._style),this._$el.remove()}},{key:"_scrollItemToView",value:function(){var t,e=this._$el,n=e.find(".eruda-active").get(0),r=e.get(0),i=n.offsetLeft,a=n.offsetWidth,o=r.offsetWidth,s=r.scrollLeft;i<s?t=i:i+a>o+s&&(t=i+a-o),Object(d.T)(t)&&(r.scrollLeft=t)}},{key:"resetBottomBar",value:function(){var t=this._$bottomBar,e=this._$el,n=e.find(".eruda-active").get(0);n&&t.css({width:n.offsetWidth,left:n.offsetLeft-e.get(0).scrollLeft})}},{key:"_bindEvent",value:function(){var t=this,e=this;this._$el.on("click",".eruda-nav-bar-item",(function(){e.emit("showTool",Object(d.a)(this).text())})).on("scroll",(function(){return t.resetBottomBar()}))}}]),r}(d.c),K=H=new d.e("[Eruda]","warn");H.formatter=function(t,e){return e.unshift(this.name),e};var W=n(29),G=n.n(W);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var V=function(t){u()(r,t);var e=q(r);function r(t){var a;return i()(this,r),(a=e.call(this))._style=L(n(62)),a.$container=t,a._isShow=!1,a._opacity=1,a._tools={},a._isResizing=!1,a._resizeTimer=null,a._resizeStartY=0,a._resizeStartSize=0,a._appendTpl(),a._initNavBar(),a._initNotification(),a._bindEvent(),a}return o()(r,[{key:"show",value:function(){var t=this;return this._isShow=!0,this._$el.show(),this._navBar.resetBottomBar(),setTimeout((function(){t._$el.css("opacity",t._opacity)}),50),this.emit("show"),this}},{key:"hide",value:function(){var t=this;return this._isShow=!1,this.emit("hide"),this._$el.css({opacity:0}),setTimeout((function(){return t._$el.hide()}),300),this}},{key:"toggle",value:function(){return this._isShow?this.hide():this.show()}},{key:"add",value:function(t){if(!(t instanceof y)){var e=new y,n=e.init,r=e.show,i=e.hide,a=e.destroy;Object(d.r)(t,{init:n,show:r,hide:i,destroy:a})}var o=t.name;return o?(o=o.toLowerCase(),this._tools[o]?K.warn("Tool ".concat(o," already exists")):(this._$tools.prepend('<div id="eruda-'.concat(o,'" class="eruda-').concat(o,' eruda-tool"></div>')),t.init(this._$tools.find(".eruda-".concat(o,".eruda-tool")),this),t.active=!1,this._tools[o]=t,this._navBar.add(o),this)):K.error("You must specify a name for a tool")}},{key:"remove",value:function(t){var e=this._tools;if(!e[t])return K.warn("Tool ".concat(t," doesn't exist"));this._navBar.remove(t);var n=e[t];if(delete e[t],n.active){var r=Object(d.ab)(e);r.length>0&&this.showTool(e[Object(d.bb)(r)].name)}return n.destroy(),this}},{key:"removeAll",value:function(){var t=this;return Object(d.u)(this._tools,(function(e){return t.remove(e.name)})),this}},{key:"get",value:function(t){var e=this._tools[t];if(e)return e}},{key:"showTool",value:function(t){if(this._curTool===t)return this;this._curTool=t;var e=this._tools,n=e[t];if(n){var r={};return Object(d.u)(e,(function(t){t.active&&(r=t,t.active=!1,t.hide())})),n.active=!0,n.show(),this._navBar.activateTool(t),this.emit("showTool",t,r),this}}},{key:"initCfg",value:function(t){var e=this,n=this.config=M.createCfg("dev-tools",{transparency:1,displaySize:80,theme:Object(d.J)()?"Dark":"Light"});this._setTransparency(n.get("transparency")),this._setDisplaySize(n.get("displaySize")),L.setTheme(n.get("theme")),n.on("change",(function(t,n){switch(t){case"transparency":return e._setTransparency(n);case"displaySize":return e._setDisplaySize(n);case"theme":return L.setTheme(n)}})),t.separator().select(n,"theme","Theme",Object(d.ab)(L.getThemes())).range(n,"transparency","Transparency",{min:.2,max:1,step:.01}).range(n,"displaySize","Display Size",{min:40,max:100,step:1}).separator()}},{key:"notify",value:function(t,e){this._notification.notify(t,e)}},{key:"destroy",value:function(){L.remove(this._style),this.removeAll(),this._navBar.destroy(),this._$el.remove()}},{key:"_setTransparency",value:function(t){Object(d.T)(t)&&(this._opacity=t,this._isShow&&this._$el.css({opacity:t}))}},{key:"_setDisplaySize",value:function(t){Object(d.T)(t)&&this._$el.css({height:t+"%"})}},{key:"_appendTpl",value:function(){var t=this.$container;t.append(n(63)()),this._$el=t.find(".eruda-dev-tools"),this._$tools=this._$el.find(".eruda-tools")}},{key:"_initNavBar",value:function(){var t=this;this._navBar=new U(this._$el.find(".eruda-nav-bar-container")),this._navBar.on("showTool",(function(e){return t.showTool(e)}))}},{key:"_initNotification",value:function(){this._notification=new G.a(this._$el.get(0),{position:{x:"center",y:"top"}})}},{key:"_bindEvent",value:function(){var t=this,e=this._$el.find(".eruda-nav-bar"),n=function(n){n=n.origEvent,t._resizeTimer=setTimeout((function(){n.preventDefault(),n.stopPropagation(),t._isResizing=!0,t._resizeStartSize=t.config.get("displaySize"),t._resizeStartY=o(n),e.css("filter","brightness(1.2)")}),1e3)},r=Object(d.vb)((function(e){return t.config.set("displaySize",e)}),50),i=function(e){if(!t._isResizing)return clearTimeout(t._resizeTimer);e.preventDefault(),e.stopPropagation(),e=e.origEvent;var n=Math.round((t._resizeStartY-o(e))/window.innerHeight*100),i=t._resizeStartSize+n;i<40?i=40:i>100&&(i=100),r(i)},a=function(){clearTimeout(t._resizeTimer),t._isResizing=!1,e.css("filter","brightness(1)")},o=function(t){return t.clientY?t.clientY:t.touches?t.touches[0].clientY:0};e.on("contextmenu",(function(t){return t.preventDefault()}));var s=Object(d.a)(document.documentElement);Object(d.P)()?(e.on("touchstart",n).on("touchmove",i),s.on("touchend",a)):(e.on("mousedown",n),s.on("mousemove",i),s.on("mouseup",a))}}]),r}(d.c),X=n(9),Y=n.n(X),Q=n(14),J=n.n(Q),Z=n(15),tt=n.n(Z),et=!1;var nt=["(...)","undefined","Symbol","Object","ƒ"];function rt(t){var e=Object(d.L)(Object.getOwnPropertyNames(t)),n=Object.getPrototypeOf(t);return e&&n&&n!==Object.prototype}var it=n(11),at=n.n(it),ot=n(17),st=n.n(ot);function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var lt=function(t){u()(n,t);var e=ut(n);function n(t){var r,a=t.type,o=void 0===a?"log":a,s=t.args,u=void 0===s?[]:s,l=t.id,c=t.group,_=void 0===c?{}:c,h=t.targetGroup,p=void 0===h?{}:h,f=t.headers,v=t.ignoreFilter,g=void 0!==v&&v;return i()(this,n),(r=e.call(this)).type=o,r.group=_,r.targetGroup=p,r.args=u,r.count=1,r.id=l,r.headers=f,r.ignoreFilter=g,r.collapsed=!1,r.el=document.createElement("div"),r.el.log=Y()(r),r.height=0,r.width=0,r._$el=Object(d.a)(r.el),r._formatMsg(),r.group&&r.checkGroup(),r}return o()(n,[{key:"checkGroup",value:function(){for(var t=this.group,e=!1;t;){if(t.collapsed){e=!0;break}t=t.parent}return e!==this.collapsed&&(this.collapsed=e,!0)}},{key:"updateIcon",value:function(t){return this._$el.find(".eruda-icon").rmAttr("class").addClass(["eruda-icon","eruda-icon-".concat(t)]),this}},{key:"addCount",value:function(){this.count++;var t=this.count,e=this._$el,n=e.find(".eruda-count-container"),r=e.find(".eruda-icon-container"),i=n.find(".eruda-count");return 2===t&&n.rmClass("eruda-hidden"),i.text(t),r.addClass("eruda-hidden"),this}},{key:"groupEnd",value:function(){return this._$el.find(".eruda-nesting-level:not(.eruda-group-closed)").last().addClass("eruda-group-closed"),this}},{key:"updateTime",value:function(t){var e=this._$el.find(".eruda-time-container");return this.time&&(e.find("span").eq(0).text(t),this.time=t),this}},{key:"isAttached",value:function(){return!!this.el.parentNode}},{key:"updateSize",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.el.offsetHeight,n=this.el.offsetWidth;this.height===e&&this.width===n||(this.height=e,this.width=n,t||this.emit("updateSize"))}},{key:"html",value:function(){return this.el.outerHTML}},{key:"text",value:function(){return this._content.textContent}},{key:"_needSrc",value:function(){var t=this.type,e=this.args;if("html"===t)return!1;for(var n=0,r=e.length;n<r;n++)if(Object(d.U)(e[n]))return!0;return!1}},{key:"extractObj",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.ib,n=this.args,r=this.type,i=function(n){t.src=n,e()};Ot("table"===r||1===n.length&&Object(d.U)(n[0])?n[0]:n,{},i)}},{key:"click",value:function(t){var e=this,r=this.type,i=this.src,a=this.args,o=this._$el;switch(r){case"log":case"warn":case"info":case"debug":case"output":case"table":case"dir":case"group":case"groupCollapsed":if(i||a){var s=o.find(".eruda-json");if(s.hasClass("eruda-hidden")){if("true"!==s.data("init")){if(i){var u=new st.a.Static(s.get(0));u.set(i),u.on("change",(function(){return e.updateSize(!1)}))}else{"table"!==r&&1!==a.length||Object(d.U)(a[0])&&(a=a[0]);var l=new st.a(s.get(0),{unenumerable:n.showUnenumerable,accessGetter:n.showGetterVal});l.set(a),l.on("change",(function(){return e.updateSize(!1)}))}s.data("init","true")}s.rmClass("eruda-hidden")}else s.addClass("eruda-hidden")}else"group"!==r&&"groupCollapsed"!==r||t.toggleGroup(this);break;case"error":o.find(".eruda-stack").toggleClass("eruda-hidden")}this.updateSize(!1)}},{key:"_formatMsg",value:function(){var t=this.args,e=this.type,r=this.id,i=this.headers,a=this.group;t=Object(d.j)(t),this._needSrc()&&!n.lazyEvaluation&&this.extractObj();var o,s,u="";switch("group"!==e&&"groupCollapsed"!==e||0===t.length&&(t=["console.group"]),e){case"log":case"debug":u=vt(t);break;case"dir":u=gt(t);break;case"info":u=vt(t);break;case"warn":o="warn",u=vt(t);break;case"error":Object(d.X)(t[0])&&1!==t.length&&(t=mt(t)),s=t[0],o="error",s=Object(d.M)(s)?s:new Error(vt(t)),this.src=s,u=function(t){var e=t.stack?t.stack.split("\n"):[],n="".concat(t.message||e[0],"<br/>");e=e.filter((function(t){return!ft.test(t)})).map((function(t){return Object(d.w)(t)}));var r='<div class="eruda-stack eruda-hidden">'.concat(e.slice(1).join("<br/>"),"</div>");return n+r.replace(pt,(function(t){return'<a href="'.concat(t,'" target="_blank">').concat(t,"</a>")}))}(s);break;case"table":u=function(t){var e=t[0],n="",r=t[1],i=[];Object(d.X)(r)&&(r=Object(d.wb)(r));Object(d.G)(r)||(r=null);if(!Object(d.U)(e))return vt(t);Object(d.u)(e,(function(t){Object(d.V)(t)?i.push(_t):Object(d.U)(t)&&(i=i.concat(Object(d.ab)(t)))})),(i=Object(d.Db)(i)).sort(),r&&(i=i.filter((function(t){return Object(d.m)(r,t)})));i.length>20&&(i=i.slice(0,20));return Object(d.L)(i)?vt(t):(n+="<table><thead><tr><th>(index)</th>",i.forEach((function(t){return n+="<th>".concat(t===_t?"Value":Object(d.zb)(t),"</th>")})),n+="</tr></thead><tbody>",Object(d.u)(e,(function(t,e){n+="<tr><td>".concat(e,"</td>"),i.forEach((function(e){Object(d.U)(t)?n+=e===_t?"<td></td>":"<td>".concat(ht(t[e]),"</td>"):Object(d.V)(t)&&(n+=e===_t?"<td>".concat(ht(t),"</td>"):"<td></td>")})),n+="</tr>"})),n+="</tbody></table>",n+='<div class="eruda-json eruda-hidden"></div>')}(t);break;case"html":u=t[0];break;case"input":u=dt(t[0]),o="arrow-right";break;case"output":u=vt(t),o="arrow-left";break;case"groupCollapsed":u=vt(t),o="caret-right";break;case"group":u=vt(t),o="caret-down"}this._needSrc()&&n.lazyEvaluation||delete this.args,"error"===e||this.args||(u=Object(d.cb)(u,(function(t){return'<a href="'.concat(t,'" target="_blank">').concat(t,"</a>")}))),u=$t({msg:u,type:e,icon:o,id:r,headers:i,group:a}),this._$el.addClass("eruda-log-container").html(u),this._$content=this._$el.find(".eruda-log-content"),this._content=this._$content.get(0)}}]),n}(d.c);J()(lt,"showGetterVal",!1),J()(lt,"showUnenumerable",!0),J()(lt,"lazyEvaluation",!0);var ct=Object(d.Gb)((function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.topObj,a=r.level,o=void 0===a?0:a,s=r.getterVal,u=void 0!==s&&s,l=r.unenumerable,c=void 0===l||l;et||(L(n(69)),et=!0);var _,h="",p="",f=5,v=[],g=[],m="",b=!1;i=i||e;var y={getterVal:u,unenumerable:c,level:o+1},w=0===o,x='<span class="eruda-key">',k='<span class="eruda-number">',$='<span class="eruda-null">',O='<span class="eruda-string">',E='<span class="eruda-boolean">',j='<span class="eruda-special">',A=function(t){return Object(d.w)(t).replace(/\\n/g,"↵").replace(/\\f|\\r|\\t/g,"").replace(/\\/g,"")},S="</span>",T=function(t){return x+A(t)+S},C=function(t){return k+t+S},P=function(t){return O+t+S},R=function(t){return E+t+S},D=function(t){return $+t+S};function N(t){return t=Object(d.zb)(t),Object(d.m)(nt,t)||Object(d.tb)(t,"Array[")?j+A(t)+S:O+A('"'.concat(t,'"'))+S}function M(n){if(_>f)m=", …";else{var r=T(Object(d.x)(n));if(!u)if(Object.getOwnPropertyDescriptor(e,n).get)return v.push("".concat(r,": ").concat(N("(...)"))),void _++;v.push("".concat(r,": ").concat(t(i[n],y))),_++}}try{p={}.toString.call(e)}catch(t){p="[object Object]"}var F="[object String]"==p,z="[object Array]"==p,I="[object Object]"==p,B="[object Number]"==p,H="[object RegExp]"==p,U="[object Symbol]"==p,K="[object Function]"==p,W="[object Boolean]"==p;if(b)h=N("[circular]");else if(F)h=N(Object(d.x)(e));else if(H)h=P(Object(d.x)(e.toString()));else if(K)h=N("ƒ");else if(z)if(w){h="[";var G=e.length,q="";G>100&&(G=100,q=", …");for(var V=0;V<G;V++)v.push("".concat(t(e[V],y)));h+=v.join(", ")+q+"]"}else h="Array(".concat(e.length,")");else if(I)rt(e)&&(e=Object.getPrototypeOf(e)),g=c?Object.getOwnPropertyNames(e):Object.keys(e),w?(_=1,h="{ ",Object(d.u)(g,M),h+=v.join(", ")+m+" }"):"Object"===(h=Object(d.E)(e))&&(h="{…}");else if(B)h=e+"",h=Object(d.v)(h,"Infinity")||"NaN"===h?'"'.concat(h,'"'):C(h);else if(W)h=R(e?"true":"false");else if(null===e)h=D("null");else if(U)h=N("Symbol");else if(void 0===e)h=N("undefined");else try{rt(e)&&(e=Object.getPrototypeOf(e)),w?(_=1,h="{ ",g=c?Object.getOwnPropertyNames(e):Object.keys(e),Object(d.u)(g,M),h+=v.join(", ")+m+" }"):"Object"===(h=Object(d.E)(e))&&(h="{…}")}catch(t){h=N(e)}return h}),(function(t,e){return'<span class="eruda-abstract">'+t(e,{getterVal:lt.showGetterVal,unenumerable:!1})+"</span>"})),_t="__ErudaValue";function ht(t){return Object(d.U)(t)?"{…}":Object(d.V)(t)?ct(t):Object(d.zb)(t)}var pt=/https?:\/\/([0-9.\-A-Za-z]+)(?::(\d+))?\/[A-Z.a-z0-9/]*\.js/g,ft=/eruda(\.min)?\.js/;function dt(t){var e=L.getCurTheme();return Object(d.F)(at()(t,{indent_size:2}),"js",{keyword:"color:".concat(e.keywordColor),number:"color:".concat(e.numberColor),operator:"color:".concat(e.operatorColor),comment:"color:".concat(e.commentColor),string:"color:".concat(e.stringColor)})}function vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.htmlForEl,r=void 0===n||n,i=Object(d.X)(t[0])&&1!==t.length;i&&(t=mt(t));for(var a=0,o=t.length;a<o;a++){var s=t[a];Object(d.K)(s)&&r?t[a]=xt(s):Object(d.N)(s)?t[a]=wt(s):Object(d.U)(s)?t[a]=yt(s):Object(d.Y)(s)?t[a]="undefined":Object(d.S)(s)?t[a]="null":(s=Object(d.zb)(s),0===a&&i||(s=Object(d.w)(s)),t[a]=s)}return t.join(" ")+'<div class="eruda-json eruda-hidden"></div>'}var gt=function(t){return vt(t,{htmlForEl:!1})};function mt(t){var e=Object(d.w)(t[0]),n=!1,r="";t.shift();for(var i=0,a=e.length;i<a;i++){var o=e[i];if("%"===o&&0!==t.length){i++;var s=t.shift();switch(e[i]){case"i":case"d":r+=Object(d.xb)(s);break;case"f":r+=Object(d.yb)(s);break;case"s":r+=Object(d.zb)(s);break;case"O":Object(d.U)(s)&&(r+=ct(s));break;case"o":Object(d.K)(s)?r+=xt(s):Object(d.U)(s)&&(r+=ct(s));break;case"c":if(e.length<=i+1)break;n&&(r+="</span>"),n=!0,r+='<span style="'.concat(bt(s),'">');break;default:i--,t.unshift(s),r+=o}}else r+=o}return n&&(r+="</span>"),t.unshift(r),t}function bt(t){var e=(t=Object(d.eb)(t)).split(";"),n={};Object(d.u)(e,(function(t){if(Object(d.m)(t,":")){var e=t.split(":"),r=tt()(e,2),i=r[0],a=r[1];n[Object(d.Ab)(i)]=Object(d.Ab)(a)}})),n.display="inline-block",n["max-width"]="100%",n.contain="paint",delete n.width,delete n.height;var r="";return Object(d.u)(n,(function(t,e){r+="".concat(e,":").concat(t,";")})),r}function yt(t){var e=Object(d.E)(t);return"Array"===e&&t.length>1&&(e="(".concat(t.length,")")),"".concat(e," ").concat(ct(t))}function wt(t){return'<pre style="display:inline">'.concat(dt(t.toString()),"</pre>")}function xt(t){return'<pre style="display:inline">'.concat(Object(d.F)(at.a.html(t.outerHTML,{unformatted:[],indent_size:2}),"html"),"</pre>")}var kt=n(71),$t=function(t){return kt(t)};function Ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;Object(d.r)(e,{accessGetter:lt.showGetterVal,unenumerable:lt.showUnenumerable,symbol:lt.showUnenumerable,timeout:1e3}),Et(t,e,(function(t){return n(JSON.parse(t))}))}function Et(t,e,n){var r=Object(d.ub)(t,e);Object(d.hb)((function(){return n(r)}))}function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var At=navigator.userAgent,St=At.indexOf("Android")>-1||At.indexOf("Adr")>-1,Tt=0,Ct=function(t){u()(r,t);var e=jt(r);function r(t){var a;return i()(this,r),(a=e.call(this))._style=L(n(72)),a._$container=t,a._container=t.get(0),a._$el=t.find(".eruda-logs"),a._el=a._$el.get(0),a._$fakeEl=t.find(".eruda-fake-logs"),a._fakeEl=a._$fakeEl.get(0),a._$space=t.find(".eruda-logs-space"),a._space=a._$space.get(0),a._spaceHeight=0,a._topSpaceHeight=0,a._bottomSpaceHeight=0,a._lastScrollTop=0,a._lastTimestamp=0,a._speedToleranceFactor=100,a._maxSpeedTolerance=2e3,a._minSpeedTolerance=100,a._logs=[],a._displayLogs=[],a._timer={},a._count={},a._lastLog={},a._filter="all",a._maxNum="infinite",a._displayHeader=!1,a._asyncRender=!1,a._asyncList=[],a._asyncTimer=null,a._isAtBottom=!0,a._groupStack=new d.g,St&&(a._speedToleranceFactor=800,a._maxSpeedTolerance=3e3,a._minSpeedTolerance=800),a.renderViewport=Object(d.vb)((function(t){a._renderViewport(t)}),16),a._global={copy:function(t){Object(d.X)(t)||(t=JSON.stringify(t,null,2)),Object(d.n)(t)},$:function(){return document.querySelector.apply(document,arguments)},$$:function(){return Object(d.wb)(document.querySelectorAll.apply(document,arguments))},$x:function(t){return Object(d.Hb)(t)},clear:function(){a.clear()},dir:function(t){a.dir(t)},table:function(t,e){a.table(t,e)},keys:d.ab},a._bindEvent(),a}return o()(r,[{key:"renderAsync",value:function(t){this._asyncRender=t}},{key:"setGlobal",value:function(t,e){this._global[t]=e}},{key:"displayHeader",value:function(t){this._displayHeader=t}},{key:"maxNum",value:function(t){var e=this._logs;this._maxNum=t,Object(d.T)(t)&&e.length>t&&(this._logs=e.slice(e.length-t),this.render())}},{key:"displayUnenumerable",value:function(t){lt.showUnenumerable=t}},{key:"displayGetterVal",value:function(t){lt.showGetterVal=t}},{key:"lazyEvaluation",value:function(t){lt.lazyEvaluation=t}},{key:"viewLogInSources",value:function(t){lt.showSrcInSources=t}},{key:"destroy",value:function(){this._style&&L.remove(this._style)}},{key:"filter",value:function(t){return this._filter=t,this.emit("filter",t),this.render()}},{key:"count",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=this._count;return Object(d.Y)(e[t])?e[t]=1:e[t]++,this.info("".concat(t,": ").concat(e[t]))}},{key:"countReset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return this._count[t]=0,this}},{key:"assert",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e)){var r=e.shift();return r?void 0:(0===e.length&&e.unshift("console.assert"),e.unshift("Assertion failed: "),this.insert("error",e))}}},{key:"log",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("log",e)}},{key:"debug",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("debug",e)}},{key:"dir",value:function(t){if(!Object(d.Y)(t))return this.insert("dir",[t])}},{key:"table",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("table",e)}},{key:"time",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return this._timer[t]?this.insert("warn",["Timer '".concat(t,"' already exists")]):(this._timer[t]=Object(d.lb)(),this)}},{key:"timeLog",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=this._timer[t];return e?this.info("".concat(t,": ").concat(Object(d.lb)()-e,"ms")):this.insert("warn",["Timer '".concat(t,"' does not exist")])}},{key:"timeEnd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return this.timeLog(t),delete this._timer[t],this}},{key:"clear",value:function(){return this.silentClear(),this.insert("log",["%cConsole was cleared","color:#808080;font-style:italic;"])}},{key:"silentClear",value:function(){return this._logs=[],this._displayLogs=[],this._lastLog={},this._count={},this._timer={},this._groupStack=new d.g,this._asyncList=[],this._asyncTimer&&(clearTimeout(this._asyncTimer),this._asyncTimer=null),this.render()}},{key:"info",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("info",e)}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("error",e)}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Object(d.L)(e))return this.insert("warn",e)}},{key:"group",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.insert({type:"group",args:e,ignoreFilter:!0})}},{key:"groupCollapsed",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.insert({type:"groupCollapsed",args:e,ignoreFilter:!0})}},{key:"groupEnd",value:function(){this.insert("groupEnd")}},{key:"input",value:function(t){this.insert({type:"input",args:[t],ignoreFilter:!0});try{this.output(this._evalJs(t))}catch(t){this.insert({type:"error",ignoreFilter:!0,args:[t]})}return this}},{key:"output",value:function(t){return this.insert({type:"output",args:[t],ignoreFilter:!0})}},{key:"html",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.insert("html",e)}},{key:"render",value:function(){var t=this._logs;this._$el.html(""),this._isAtBottom=!0,this._updateBottomSpace(0),this._updateTopSpace(0),this._displayLogs=[];for(var e=0,n=t.length;e<n;e++)this._attachLog(t[e]);return this}},{key:"insert",value:function(t,e){var n;this._displayHeader&&(n={time:Pt(),from:Rt()}),this._asyncRender?this.insertAsync(t,e,n):this.insertSync(t,e,n)}},{key:"insertAsync",value:function(t,e,n){this._asyncList.push([t,e,n]),this._handleAsyncList()}},{key:"insertSync",value:function(t,e,n){var r=this,i=this._logs,a=this._groupStack;if("groupEnd"===t)return this._lastLog.groupEnd(),this._groupStack.pop(),this;var o=Object(d.X)(t)?{type:t,args:e}:t;if(a.size>0&&(o.group=a.peek()),Object(d.z)(o,{id:++Tt,headers:n}),"group"===o.type||"groupCollapsed"===o.type){var s={id:Object(d.Cb)("group"),collapsed:!1,parent:a.peek(),indentLevel:a.size+1};"groupCollapsed"===o.type&&(s.collapsed=!0),o.targetGroup=s,a.push(s)}var u=new lt(o);u.on("updateSize",(function(){r._isAtBottom=!1,r.renderViewport()}));var l=this._lastLog;if(Object(d.m)(["html","group","groupCollapsed"],u.type)||l.type!==u.type||u.src||u.args||l.text()!==u.text()?(i.push(u),this._lastLog=u):(l.addCount(),u.time&&l.updateTime(u.time),u=l,this._detachLog(l)),"infinite"!==this._maxNum&&i.length>this._maxNum){var c=i[0];this._detachLog(c),i.shift()}return this._attachLog(u),this.emit("insert",u),this}},{key:"toggleGroup",value:function(t){t.targetGroup.collapsed?this._openGroup(t):this._collapseGroup(t)}},{key:"_updateTopSpace",value:function(t){this._topSpaceHeight=t,this._el.style.top=t+"px"}},{key:"_updateBottomSpace",value:function(t){this._bottomSpaceHeight=t}},{key:"_updateSpace",value:function(t){this._spaceHeight!==t&&(this._spaceHeight=t,this._space.style.height=t+"px")}},{key:"_updateLogSize",value:function(t){var e=this._fakeEl;if(!Object(d.O)(this._fakeEl))return t.isAttached()?void t.updateSize():(e.appendChild(t.el),t.updateSize(),void(e.children>100&&(e.innerHTML="")))}},{key:"_detachLog",value:function(t){var e=this._displayLogs,n=e.indexOf(t);n>-1&&(e.splice(n,1),this.renderViewport())}},{key:"_attachLog",value:function(t){if(this._filterLog(t)&&!t.collapsed){var e=this._displayLogs;if(0===e.length)return e.push(t),void this.renderViewport();var n=Object(d.bb)(e);if(t.id>n.id)return e.push(t),void this.renderViewport();for(var r,i,a=0,o=e.length-1;a<=o;){if((r=e[i=a+Math.floor((o-a)/2)]).id===t.id)return;r.id<t.id?a=i+1:o=i-1}r.id<t.id?e.splice(i+1,0,t):e.splice(i,0,t),this.renderViewport()}}},{key:"_handleAsyncList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=this._asyncList;this._asyncTimer||(this._asyncTimer=setTimeout((function(){t._asyncTimer=null;var e,r,i=!1,a=n.length;a<1e3?(r=200,e=400):a<5e3?(r=500,e=800):a<1e4?(r=800,e=1e3):a<25e3?(r=1e3,e=1200):a<5e4?(r=1500,e=1500):(r=2e3,e=2500),r>a&&(r=a,i=!0);for(var o=0;o<r;o++){var s=n.shift(),u=tt()(s,3),l=u[0],c=u[1],_=u[2];t.insertSync(l,c,_)}i||Object(d.ob)((function(){return t._handleAsyncList(e)}))}),e))}},{key:"_injectGlobal",value:function(){Object(d.u)(this._global,(function(t,e){window[e]||(window[e]=t)}))}},{key:"_clearGlobal",value:function(){Object(d.u)(this._global,(function(t,e){window[e]&&window[e]===t&&delete window[e]}))}},{key:"_evalJs",value:function(t){var e;this._injectGlobal();try{e=eval.call(window,"(".concat(t,")"))}catch(n){e=eval.call(window,t)}return this.setGlobal("$_",e),this._clearGlobal(),e}},{key:"_filterLog",value:function(t){var e=this._filter;if("all"===e)return!0;var n=Object(d.W)(e),r=Object(d.N)(e);return!!t.ignoreFilter||(r?e(t):n?e.test(Object(d.eb)(t.text())):t.type===e)}},{key:"_getLog",value:function(t){for(var e,n=this._logs,r=0,i=n.length;r<i&&(e=n[r]).id!==t;r++);return e}},{key:"_collapseGroup",value:function(t){t.targetGroup.collapsed=!0,t.updateIcon("caret-right"),this._updateGroup(t)}},{key:"_openGroup",value:function(t){t.targetGroup.collapsed=!1,t.updateIcon("caret-down"),this._updateGroup(t)}},{key:"_updateGroup",value:function(t){for(var e=t.targetGroup,n=this._logs,r=n.length,i=n.indexOf(t)+1;i<r;){var a=n[i];if(!a.checkGroup()&&a.group===e)break;a.collapsed?this._detachLog(a):this._attachLog(a),i++}}},{key:"_bindEvent",value:function(){var t=this,e=this;this._$el.on("click",".eruda-log-container",(function(){this.log.click(e)})).on("click",".eruda-icon-caret-down",(function(){var t=Object(d.a)(this).parent().parent().parent();e._collapseGroup(t.get(0).log)})).on("click",".eruda-icon-caret-right",(function(){var t=Object(d.a)(this).parent().parent().parent();e._openGroup(t.get(0).log)})),this._$container.on("scroll",(function(){var e=t._container,n=e.scrollHeight,r=e.offsetHeight,i=e.scrollTop;if(!(i<0||r+i>n)){var a=!1;(n===r||i===n-r)&&(a=!0),t._isAtBottom=a;var o=t._lastScrollTop,s=t._lastTimestamp,u=Object(d.jb)(),l=u-s,c=i-o,_=Math.abs(c/l)*t._speedToleranceFactor;l>1e3&&(_=1e3),_>t._maxSpeedTolerance&&(_=t._maxSpeedTolerance),_<t._minSpeedTolerance&&(_=t._minSpeedTolerance),t._lastScrollTop=i,t._lastTimestamp=u;var h=0,p=0;o<i?(h=t._minSpeedTolerance,p=_):(h=_,p=t._minSpeedTolerance),t._topSpaceHeight<i-h&&t._topSpaceHeight+t._el.offsetHeight>i+r+p||t.renderViewport({topTolerance:2*h,bottomTolerance:2*p})}}))}},{key:"_renderViewport",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.topTolerance,n=void 0===e?500:e,r=t.bottomTolerance,i=void 0===r?500:r,a=this._container,o=this._el;if(!Object(d.O)(a)){for(var s=a.scrollTop,u=a.clientWidth,l=a.offsetHeight,c=s-n,_=s+l+i,h=this._displayLogs,p=0,f=0,v=0,g=h.length,m=this._fakeEl,b=document.createDocumentFragment(),y=[],w=0;w<g;w++){var x=h[w],k=x.width,$=x.height;0!==$&&k===u||(b.appendChild(x.el),y.push(x))}if(y.length>0){m.appendChild(b);for(var O=0,E=y.length;O<E;O++)y[O].updateSize();m.innerHTML=""}for(var j=document.createDocumentFragment(),A=0;A<g;A++){var S=h[A],T=S.el,C=S.height;v>_?f+=C:v+C>c?j.appendChild(T):v<c&&(p+=C),v+=C}for(this._updateSpace(v),this._updateTopSpace(p),this._updateBottomSpace(f);o.firstChild;)o.removeChild(o.lastChild);o.appendChild(j);var P=a.scrollHeight;this._isAtBottom&&s<=P-l&&(a.scrollTop=1e7)}}}]),r}(d.c),Pt=function(){return Object(d.o)("HH:MM:ss ")};function Rt(){for(var t=new Error,e="",n=t.stack?t.stack.split("\n"):"",r=0,i=n.length;r<i;r++)if((e=n[r]).indexOf("winConsole")>-1&&r<i-1){e=n[r+1];break}return e}function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}d.Bb.start();var Lt=function(t){u()(r,t);var e=Dt(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.name,o=void 0===a?"console":a;return i()(this,r),t=e.call(this),J()(Y()(t),"_handleShow",(function(){Object(d.O)(t._$el.get(0))||t._logger.renderViewport()})),J()(Y()(t),"_handleErr",(function(e){t._logger.error(e)})),d.c.mixin(Y()(t)),t.name=o,t._scale=1,t._registerListener(),t}return o()(r,[{key:"init",value:function(t,e){b()(h()(r.prototype),"init",this).call(this,t),this._container=e,this._appendTpl(),this._initLogger(),this._exposeLogger(),this._initCfg(),this._bindEvent()}},{key:"show",value:function(){b()(h()(r.prototype),"show",this).call(this),this._handleShow()}},{key:"overrideConsole",value:function(){var t=this,e=this._origConsole={},n=window.console;return Nt.forEach((function(r){var i=e[r]=d.ib;n[r]&&(i=e[r]=n[r].bind(n)),n[r]=function(){t[r].apply(t,arguments),i.apply(void 0,arguments)}})),this}},{key:"setGlobal",value:function(t,e){this._logger.setGlobal(t,e)}},{key:"restoreConsole",value:function(){var t=this;return this._origConsole?(Nt.forEach((function(e){return window.console[e]=t._origConsole[e]})),delete this._origConsole,this):this}},{key:"catchGlobalErr",value:function(){return d.Bb.addListener(this._handleErr),this}},{key:"ignoreGlobalErr",value:function(){return d.Bb.rmListener(this._handleErr),this}},{key:"destroy",value:function(){this._logger.destroy(),b()(h()(r.prototype),"destroy",this).call(this),this._container.off("show",this._handleShow),this._style&&L.remove(this._style),this.ignoreGlobalErr(),this.restoreConsole(),this._unregisterListener(),this._rmCfg()}},{key:"_enableJsExecution",value:function(t){var e=this._$el,n=e.find(".eruda-console-container"),r=e.find(".eruda-js-input");t?(r.show(),n.rmClass("eruda-js-input-hidden")):(r.hide(),n.addClass("eruda-js-input-hidden"))}},{key:"_registerListener",value:function(){var t=this;this._scaleListener=function(e){return t._scale=e},g.on(g.SCALE,this._scaleListener)}},{key:"_unregisterListener",value:function(){g.off(g.SCALE,this._scaleListener)}},{key:"_appendTpl",value:function(){var t=this._$el;this._style=L(n(73)),t.append(n(74)());var e=t.find(".eruda-js-input"),r=e.find("textarea"),i=e.find(".eruda-buttons");Object.assign(this,{_$control:t.find(".eruda-control"),_$logs:t.find(".eruda-logs-container"),_$inputContainer:e,_$input:r,_$inputBtns:i,_$searchKeyword:t.find(".eruda-search-keyword")})}},{key:"_initLogger",value:function(){var t=this._$control.find(".eruda-filter");(this._logger=new Ct(this._$logs)).on("filter",(function(e){return t.each((function(){var t=Object(d.a)(this),n=t.data("filter")===e;t[n?"addClass":"rmClass"]("eruda-active")}))}))}},{key:"_exposeLogger",value:function(){var t=this,e=this._logger;["filter","html"].concat(Nt).forEach((function(n){return t[n]=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e[n].apply(e,i),t.emit.apply(t,[n].concat(i)),t}}))}},{key:"_bindEvent",value:function(){var t=this,e=this._container,n=this._$input,r=this._$inputBtns,i=this._$control,a=this._$searchKeyword,o=this._logger,s=this.config;i.on("click",".eruda-clear-console",(function(){return o.silentClear()})).on("click",".eruda-filter",(function(){a.text(""),o.filter(Object(d.a)(this).data("filter"))})).on("click",".eruda-search",(function(){var e=prompt("Filter");Object(d.S)(e)||(a.text(e),""!==Object(d.Ab)(e)?t._logger.filter(new RegExp(Object(d.y)(Object(d.eb)(e)))):o.filter("all"))})),r.on("click",".eruda-cancel",(function(){return t._hideInput()})).on("click",".eruda-execute",(function(){var e=n.val().trim();""!==e&&(o.input(e),n.val("").get(0).blur(),t._hideInput())})),n.on("focusin",(function(){return t._showInput()})),o.on("insert",(function(t){"error"===t.type&&s.get("displayIfErr")&&e.showTool("console").show()})),e.on("show",this._handleShow)}},{key:"_hideInput",value:function(){this._$inputContainer.rmClass("eruda-active"),this._$inputBtns.hide()}},{key:"_showInput",value:function(){this._$inputContainer.addClass("eruda-active"),this._$inputBtns.show()}},{key:"_rmCfg",value:function(){var t=this.config,e=this._container.get("settings");e&&e.remove(t,"asyncRender").remove(t,"jsExecution").remove(t,"catchGlobalErr").remove(t,"overrideConsole").remove(t,"displayExtraInfo").remove(t,"displayUnenumerable").remove(t,"displayGetterVal").remove(t,"lazyEvaluation").remove(t,"displayIfErr").remove(t,"maxLogNum").remove(Object(d.Eb)(this.name))}},{key:"_initCfg",value:function(){var t=this,e=this._container,n=this._logger,r=this.config=M.createCfg(this.name,{asyncRender:!0,catchGlobalErr:!0,jsExecution:!0,overrideConsole:!0,displayExtraInfo:!1,displayUnenumerable:!0,displayGetterVal:!0,lazyEvaluation:!0,displayIfErr:!1,maxLogNum:"infinite"}),i=r.get("maxLogNum");i="infinite"===i?i:+i,this._enableJsExecution(r.get("jsExecution")),r.get("asyncRender")&&n.renderAsync(!0),r.get("catchGlobalErr")&&this.catchGlobalErr(),r.get("overrideConsole")&&this.overrideConsole(),n.displayHeader(r.get("displayExtraInfo")),n.displayUnenumerable(r.get("displayUnenumerable")),n.displayGetterVal(r.get("displayGetterVal")),n.lazyEvaluation(r.get("lazyEvaluation")),n.maxNum(i),r.on("change",(function(e,r){switch(e){case"asyncRender":return n.renderAsync(r);case"jsExecution":return t._enableJsExecution(r);case"catchGlobalErr":return r?t.catchGlobalErr():t.ignoreGlobalErr();case"overrideConsole":return r?t.overrideConsole():t.restoreConsole();case"maxLogNum":return n.maxNum("infinite"===r?r:+r);case"displayExtraInfo":return n.displayHeader(r);case"displayUnenumerable":return n.displayUnenumerable(r);case"displayGetterVal":return n.displayGetterVal(r);case"lazyEvaluation":return n.lazyEvaluation(r)}}));var a=e.get("settings");a&&a.text(Object(d.Eb)(this.name)).switch(r,"asyncRender","Asynchronous Rendering").switch(r,"jsExecution","Enable JavaScript Execution").switch(r,"catchGlobalErr","Catch Global Errors").switch(r,"overrideConsole","Override Console").switch(r,"displayIfErr","Auto Display If Error Occurs").switch(r,"displayExtraInfo","Display Extra Information").switch(r,"displayUnenumerable","Display Unenumerable Properties").switch(r,"displayGetterVal","Access Getter Value").switch(r,"lazyEvaluation","Lazy Evaluation").select(r,"maxLogNum","Max Log Number",["infinite","250","125","100","50","10"]).separator()}}]),r}(y),Nt=["log","error","info","warn","dir","time","timeLog","timeEnd","clear","table","assert","count","countReset","debug","group","groupCollapsed","groupEnd"],Mt=n(30),Ft=n.n(Mt);function zt(t){if(!t)return"unknown";var e=t.split(";")[0].split("/");return{type:e[0],subType:Object(d.bb)(e)}}function It(t){var e=encodeURIComponent(t).match(/%[89ABab]/g);return t.length+(e?e.length:0)}function Bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Ht=function(t){u()(n,t);var e=Bt(n);function n(t,r,a){var o;return i()(this,n),(o=e.call(this))._xhr=t,o._reqHeaders={},o._method=r,o._url=Object(d.C)(a),o._id=Object(d.Cb)("request"),o}return o()(n,[{key:"handleSend",value:function(t){Object(d.X)(t)||(t=""),t={name:Object(d.D)(this._url),url:this._url,data:t,method:this._method},Object(d.L)(this._reqHeaders)||(t.reqHeaders=this._reqHeaders),this.emit("send",this._id,t)}},{key:"handleReqHeadersSet",value:function(t,e){t&&e&&(this._reqHeaders[t]=e)}},{key:"handleHeadersReceived",value:function(){var t=this._xhr,e=zt(t.getResponseHeader("Content-Type"));this.emit("update",this._id,{type:e.type,subType:e.subType,size:Kt(t,!0,this._url),time:Object(d.jb)(),resHeaders:Ut(t)})}},{key:"handleDone",value:function(){var t,e,n,r=this,i=this._xhr,a=i.responseType,o="",s=function(){r.emit("update",r._id,{status:i.status,done:!0,size:Kt(i,!1,r._url),time:Object(d.jb)(),resTxt:o})},u=zt(i.getResponseHeader("Content-Type"));"blob"!==a||"text"!==u.type&&"javascript"!==u.subType&&"json"!==u.subType?(""!==a&&"text"!==a||(o=i.responseText),"json"===a&&(o=JSON.stringify(i.response)),s()):(t=i.response,e=function(t,e){e&&(o=e),s()},(n=new FileReader).onload=function(){e(null,n.result)},n.onerror=function(t){e(t)},n.readAsText(t))}}]),n}(d.c);function Ut(t){var e=t.getAllResponseHeaders().split("\n"),n={};return Object(d.u)(e,(function(t){if(""!==(t=Object(d.Ab)(t))){var e=t.split(":",2),r=tt()(e,2),i=r[0],a=r[1];n[i]=Object(d.Ab)(a)}})),n}function Kt(t,e,n){var r=0;function i(){if(!e){var n=t.responseType,i="";""!==n&&"text"!==n||(i=t.responseText),i&&(r=It(i))}}if(Object(d.I)(n))i();else try{r=Object(d.yb)(t.getResponseHeader("Content-Length"))}catch(t){i()}return 0===r&&i(),"".concat(Object(d.A)(r),"B")}function Wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Gt=function(t){u()(n,t);var e=Wt(n);function n(t){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i()(this,n),r=e.call(this),t instanceof window.Request&&(t=t.url),r._url=Object(d.C)(t),r._id=Object(d.Cb)("request"),r._options=a,r._reqHeaders=a.headers||{},r._method=a.method||"GET",r}return o()(n,[{key:"send",value:function(t){var e=this,n=this._options,r=Object(d.X)(n.body)?n.body:"";this._fetch=t,this.emit("send",this._id,{name:Object(d.D)(this._url),url:this._url,data:r,method:this._method}),t.then((function(t){var n=zt((t=t.clone()).headers.get("Content-Type"));return t.text().then((function(r){var i={type:n.type,subType:n.subType,time:Object(d.jb)(),size:qt(t,r),resTxt:r,resHeaders:Vt(t),status:t.status,done:!0};Object(d.L)(e._reqHeaders)||(i.reqHeaders=e._reqHeaders),e.emit("update",e._id,i)})),t}))}}]),n}(d.c);function qt(t,e){var n=0,r=t.headers.get("Content-length");return n=r?Object(d.yb)(r):It(e),"".concat(Object(d.A)(n),"B")}function Vt(t){var e={};return t.headers.forEach((function(t,n){return e[n]=t})),e}function Xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Yt=function(t){u()(r,t);var e=Xt(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(76)),t.name="network",t._requests={},t._tpl=n(77),t._detailTpl=n(78),t._requestsTpl=n(79),t._datailData={},t._isFetchSupported=!1,window.fetch&&(t._isFetchSupported=Object(d.R)(window.fetch)),t}return o()(r,[{key:"init",value:function(t,e){b()(h()(r.prototype),"init",this).call(this,t),this._container=e,this._bindEvent(),this._initCfg(),this.overrideXhr(),this._appendTpl()}},{key:"show",value:function(){b()(h()(r.prototype),"show",this).call(this),this._render()}},{key:"clear",value:function(){this._requests={},this._render()}},{key:"overrideXhr",value:function(){var t=window.XMLHttpRequest.prototype,e=this._origSend=t.send,n=this._origOpen=t.open,r=this._origSetRequestHeader=t.setRequestHeader,i=this;t.open=function(t,e){var r=this,a=r.erudaRequest=new Ht(r,t,e);a.on("send",(function(t,e){return i._addReq(t,e)})),a.on("update",(function(t,e){return i._updateReq(t,e)})),r.addEventListener("readystatechange",(function(){switch(r.readyState){case 2:return a.handleHeadersReceived();case 4:return a.handleDone()}})),n.apply(this,arguments)},t.send=function(t){var n=this.erudaRequest;n&&n.handleSend(t),e.apply(this,arguments)},t.setRequestHeader=function(t,e){var n=this.erudaRequest;n&&n.handleReqHeadersSet(t,e),r.apply(this,arguments)}}},{key:"restoreXhr",value:function(){var t=window.XMLHttpRequest.prototype;this._origOpen&&(t.open=this._origOpen),this._origSend&&(t.send=this._origSend),this._origSetRequestHeader&&(t.setRequestHeader=this._origSetRequestHeader)}},{key:"overrideFetch",value:function(){if(this._isFetchSupported){var t=this._origFetch=window.fetch,e=this;window.fetch=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=Ft()(Gt,r);a.on("send",(function(t,n){return e._addReq(t,n)})),a.on("update",(function(t,n){return e._updateReq(t,n)}));var o=t.apply(void 0,r);return a.send(o),o}}}},{key:"restoreFetch",value:function(){this._isFetchSupported&&this._origFetch&&(window.fetch=this._origFetch)}},{key:"requests",value:function(){var t=[];return Object(d.u)(this._requests,(function(e){t.push(e)})),t}},{key:"_addReq",value:function(t,e){Object(d.r)(e,{name:"",url:"",status:"pending",type:"unknown",subType:"unknown",size:0,data:"",method:"GET",startTime:Object(d.jb)(),time:0,resTxt:"",done:!1}),this._requests[t]=e,this._render()}},{key:"_updateReq",value:function(t,e){var n=this._requests[t];n&&(Object(d.z)(n,e),n.time=n.time-n.startTime,n.displayTime=Object(d.gb)(n.time),n.done&&(n.status<200||n>=300)&&(n.hasErr=!0),this._render())}},{key:"_bindEvent",value:function(){var t=this,e=this._$el,n=this._container,r=this;function i(t,e){var r=n.get("sources");r&&(r.set(t,e),n.showTool("sources"))}e.on("click",".eruda-request",(function(){var t=Object(d.a)(this).data("id"),e=r._requests[t];e.done&&r._showDetail(e)})).on("click",".eruda-clear-request",(function(){return t.clear()})).on("click",".eruda-back",(function(){return t._hideDetail()})).on("click",".eruda-http .eruda-response",(function(){var e=t._detailData,n=e.resTxt;switch(e.subType){case"css":return i("css",n);case"html":return i("html",n);case"javascript":return i("js",n);case"json":return i("object",n)}switch(e.type){case"image":return i("img",e.url)}}))}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style),this.restoreXhr(),this.restoreFetch(),this._rmCfg()}},{key:"_showDetail",value:function(t){t.resTxt&&""===Object(d.Ab)(t.resTxt)&&delete t.resTxt,Object(d.L)(t.resHeaders)&&delete t.resHeaders,this._$detail.html(this._detailTpl(t)).show(),this._detailData=t}},{key:"_hideDetail",value:function(){this._$detail.hide()}},{key:"_rmCfg",value:function(){var t=this.config,e=this._container.get("settings");e&&e.remove(t,"overrideFetch").remove("Network")}},{key:"_appendTpl",value:function(){var t=this._$el;t.html(this._tpl()),this._$detail=t.find(".eruda-detail"),this._$requests=t.find(".eruda-requests")}},{key:"_initCfg",value:function(){var t=this,e=this.config=M.createCfg("network",{overrideFetch:!0});e.get("overrideFetch")&&this.overrideFetch(),e.on("change",(function(e,n){switch(e){case"overrideFetch":return n?t.overrideFetch():t.restoreFetch()}})),this._container.get("settings").text("Network").switch(e,"overrideFetch","Catch Fetch Requests").separator()}},{key:"_render",value:function(){if(this.active){var t={};Object(d.L)(this._requests)||(t.requests=this._requests),this._renderHtml(this._requestsTpl(t))}}},{key:"_renderHtml",value:function(t){t!==this._lastHtml&&(this._lastHtml=t,this._$requests.html(t))}}]),r}(y);function Qt(t){for(var e={},n=0,r=t.length;n<r;n++){var i=t[n];"initial"!==t[i]&&(e[i]=t[i])}return function(t){return Object(d.sb)(t,{comparator:function(t,e){for(var n=t.length,r=e.length,i=n>r?r:n,a=0;a<i;a++){var o=ee(t.charCodeAt(a),e.charCodeAt(a));if(0!==o)return o}return n>r?1:n<r?-1:0}})}(e)}var Jt=Element.prototype,Zt=function(){return!1};Jt.webkitMatchesSelector?Zt=function(t,e){return t.webkitMatchesSelector(e)}:Jt.mozMatchesSelector&&(Zt=function(t,e){return t.mozMatchesSelector(e)});var te=function(){function t(e){i()(this,t),this._el=e}return o()(t,[{key:"getComputedStyle",value:function(){return Qt(window.getComputedStyle(this._el))}},{key:"getMatchedCSSRules",value:function(){var t=this,e=[];return Object(d.u)(document.styleSheets,(function(n){try{if(!n.cssRules)return}catch(t){return}Object(d.u)(n.cssRules,(function(n){var r=!1;try{r=t._elMatchesSel(n.selectorText)}catch(t){}r&&e.push({selectorText:n.selectorText,style:Qt(n.style)})}))})),e}},{key:"_elMatchesSel",value:function(t){return Zt(this._el,t)}}]),t}();function ee(t,e){return(t=ne(t))>(e=ne(e))?1:t<e?-1:0}function ne(t){return 45===t?123:t}var re=function(){function t(e){i()(this,t),this._style=L(n(80)),this._isShow=!1,this._appendTpl(e),this._bindEvent()}return o()(t,[{key:"setEl",value:function(t){this._$target=Object(d.a)(t),this._target=t}},{key:"show",value:function(){this._isShow=!0,this.render(),this._$el.show()}},{key:"destroy",value:function(){L.remove(this._style)}},{key:"hide",value:function(){this._isShow=!1,this._$el.hide()}},{key:"render",value:function(){var t=this._$target.offset(),e=t.left,n=t.width,r=t.top,i=t.height;this._$el.css({left:e,top:r-window.scrollY,width:n,height:i});var a=getComputedStyle(this._target,"");if("none"===a.display)return this._$el.css("visibility","hidden");this._$el.css("visibility","visible");var o=function(t){return Object(d.nb)(a.getPropertyValue(t))},s=o("margin-left"),u=o("margin-right"),l=o("margin-top"),c=o("margin-bottom"),_=o("border-left-width"),h=o("border-right-width"),p=o("border-top-width"),f=o("border-bottom-width"),v=o("padding-left"),g=o("padding-right"),m=o("padding-top"),b=o("padding-bottom"),y=n-_-h,w=i-p-f,x="rgba(246, 178, 107, 0.66)",k="rgba(255, 229, 153, 0.66)",$="rgba(147, 196, 125, 0.55)";this._$margin.css({left:-s,top:-l,width:n+s+u,height:i+l+c,borderTop:"".concat(l,"px solid ").concat(x),borderLeft:"".concat(s,"px solid ").concat(x),borderRight:"".concat(u,"px solid ").concat(x),borderBottom:"".concat(c,"px solid ").concat(x)}),this._$border.css({left:0,top:0,width:n,height:i,borderTop:"".concat(p,"px solid ").concat(k),borderLeft:"".concat(_,"px solid ").concat(k),borderRight:"".concat(h,"px solid ").concat(k),borderBottom:"".concat(f,"px solid ").concat(k)}),this._$padding.css({left:_,top:p,width:y,height:w,borderTop:"".concat(m,"px solid ").concat($),borderLeft:"".concat(v,"px solid ").concat($),borderRight:"".concat(g,"px solid ").concat($),borderBottom:"".concat(b,"px solid ").concat($)}),this._$content.css({left:_+v,top:p+m,width:y-v-g,height:w-m-b,background:"rgba(111, 168, 220, 0.66)"}),this._$size.css({top:-l-(r-l<25?0:25),left:-s}).html("".concat(function(t){var e=t.id,n=t.className,r='<span style="color:#881280;">'.concat(t.tagName.toLowerCase(),"</span>");""!==e&&(r+='<span style="color:1a1aa8;">#'.concat(e,"</span>"));var i="";Object(d.X)(n)&&Object(d.u)(n.split(/\s+/g),(function(t){""!==Object(d.Ab)(t)&&(i+=".".concat(t))}));return r+='<span style="color:1a1aa8;">'.concat(i,"</span>")}(this._target)," | ").concat(n," × ").concat(i))}},{key:"_bindEvent",value:function(){var t=this;window.addEventListener("scroll",(function(){t._isShow&&t.render()}),!1)}},{key:"_appendTpl",value:function(t){t.append(n(81)());var e=this._$el=t.find(".eruda-elements-highlight");this._$margin=e.find(".eruda-margin"),this._$padding=e.find(".eruda-padding"),this._$content=e.find(".eruda-content"),this._$border=e.find(".eruda-border"),this._$size=e.find(".eruda-size")}}]),t}();function ie(t){var e=t.parentNode;if(!e)return!1;for(;e;)if((e=e.parentNode)&&"eruda"===e.id)return!0;return!1}function ae(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var oe=function(t){u()(n,t);var e=ae(n);function n(){var t;i()(this,n),t=e.call(this);var r=Y()(t);return t._startListener=function(t){if(!ie(t.target))return r._timer=setTimeout((function(){r.emit("select",t.target)}),200),!1},t._moveListener=function(){clearTimeout(r._timer)},t._clickListener=function(t){ie(t.target)||(t.preventDefault(),t.stopImmediatePropagation())},t}return o()(n,[{key:"enable",value:function(){function t(t,e){document.body.addEventListener(t,e,!0)}return this.disable(),Object(d.P)()?(t("touchstart",this._startListener),t("touchmove",this._moveListener)):(t("mousedown",this._startListener),t("mousemove",this._moveListener)),t("click",this._clickListener),this}},{key:"disable",value:function(){function t(t,e){document.body.removeEventListener(t,e,!0)}return Object(d.P)()?(t("touchstart",this._startListener),t("touchmove",this._moveListener)):(t("mousedown",this._startListener),t("mousemove",this._moveListener)),t("click",this._clickListener),this}}]),n}(d.c);function se(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var ue=function(t){u()(r,t);var e=se(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(82)),t.name="elements",t._tpl=n(83),t._rmDefComputedStyle=!0,t._highlightElement=!1,t._selectElement=!1,t._observeElement=!0,t._computedStyleSearchKeyword="",t._history=[],d.c.mixin(Y()(t)),t}return o()(r,[{key:"init",value:function(t,e){var i=this;b()(h()(r.prototype),"init",this).call(this,t),this._container=e,t.html('<div class="eruda-show-area"></div>'),this._$showArea=t.find(".eruda-show-area"),t.append(n(84)()),this._htmlEl=document.documentElement,this._highlight=new re(this._container.$container),this._select=new oe,this._bindEvent(),this._initObserver(),this._initCfg(),Object(d.hb)((function(){return i._updateHistory()}))}},{key:"show",value:function(){b()(h()(r.prototype),"show",this).call(this),this._observeElement&&this._enableObserver(),this._curEl||this._setEl(this._htmlEl),this._render()}},{key:"hide",value:function(){return this._disableObserver(),b()(h()(r.prototype),"hide",this).call(this)}},{key:"set",value:function(t){if(t!==this._curEl)return this._setEl(t),this.scrollToTop(),this._render(),this._updateHistory(),this.emit("change",t),this}},{key:"overrideEventTarget",value:function(){var t=ye(),e=this._origAddEvent=t.addEventListener,n=this._origRmEvent=t.removeEventListener;t.addEventListener=function(t,n,r){me(this,t,n,r),e.apply(this,arguments)},t.removeEventListener=function(t,e,r){be(this,t,e,r),n.apply(this,arguments)}}},{key:"scrollToTop",value:function(){this._$showArea.get(0).scrollTop=0}},{key:"restoreEventTarget",value:function(){var t=ye();this._origAddEvent&&(t.addEventListener=this._origAddEvent),this._origRmEvent&&(t.removeEventListener=this._origRmEvent)}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style),this._select.disable(),this._highlight.destroy(),this._disableObserver(),this.restoreEventTarget(),this._rmCfg()}},{key:"_back",value:function(){if(this._curEl!==this._htmlEl){for(var t=this._curParentQueue,e=t.shift();!pe(e);)e=t.shift();this.set(e)}}},{key:"_bindEvent",value:function(){var t=this,e=this,n=this._container,r=this._select;this._$el.on("click",".eruda-child",(function(){var t=Object(d.a)(this).data("idx"),r=e._curEl,i=r.childNodes[t];if(i&&3===i.nodeType){var a;switch(r.tagName){case"SCRIPT":a="js";break;case"STYLE":a="css";break;default:return}var o=n.get("sources");o&&(o.set(a,i.nodeValue),n.showTool("sources"))}else pe(i)?e.set(i):e._render()})).on("click",".eruda-listener-content",(function(){var t=Object(d.a)(this).text(),e=n.get("sources");e&&(e.set("js",t),n.showTool("sources"))})).on("click",".eruda-breadcrumb",(function(){var e=n.get("sources");e&&(e.set("object",t._curEl),n.showTool("sources"))})).on("click",".eruda-parent",(function(){for(var t=Object(d.a)(this).data("idx"),n=e._curEl.parentNode;t--&&n.parentNode;)n=n.parentNode;pe(n)?e.set(n):e._render()})).on("click",".eruda-toggle-all-computed-style",(function(){return t._toggleAllComputedStyle()})).on("click",".eruda-computed-style-search",(function(){var e=prompt("Filter");Object(d.S)(e)||(e=Object(d.Ab)(e),t._computedStyleSearchKeyword=e,t._render())})),this._$el.find(".eruda-bottom-bar").on("click",".eruda-refresh",(function(){t._render(),n.notify("Refreshed")})).on("click",".eruda-highlight",(function(){return t._toggleHighlight()})).on("click",".eruda-select",(function(){return t._toggleSelect()})).on("click",".eruda-reset",(function(){return t.set(t._htmlEl)})),r.on("select",(function(e){return t.set(e)}))}},{key:"_toggleAllComputedStyle",value:function(){this._rmDefComputedStyle=!this._rmDefComputedStyle,this._render()}},{key:"_enableObserver",value:function(){this._observer.observe(this._htmlEl,{attributes:!0,childList:!0,subtree:!0})}},{key:"_disableObserver",value:function(){this._observer.disconnect()}},{key:"_toggleHighlight",value:function(){this._selectElement||(this._$el.find(".eruda-highlight").toggleClass("eruda-active"),this._highlightElement=!this._highlightElement,this._render())}},{key:"_toggleSelect",value:function(){var t=this._select;this._$el.find(".eruda-select").toggleClass("eruda-active"),this._selectElement||this._highlightElement||this._toggleHighlight(),this._selectElement=!this._selectElement,this._selectElement?(t.enable(),this._container.hide()):t.disable()}},{key:"_setEl",value:function(t){this._curEl=t,this._curCssStore=new te(t),this._highlight.setEl(t),this._rmDefComputedStyle=!0;for(var e=[],n=t.parentNode;n;)e.push(n),n=n.parentNode;this._curParentQueue=e}},{key:"_getData",value:function(){var t={},e=this._curEl,n=this._curCssStore,r=e.className,i=e.id,a=e.attributes,o=e.tagName;t.computedStyleSearchKeyword=this._computedStyleSearchKeyword,t.parents=function(t){var e=[],n=0,r=t.parentNode;for(;r&&1===r.nodeType;)e.push({text:fe(r,{noAttr:!0}),idx:n++}),r=r.parentNode;return e.reverse()}(e),t.children=function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n],a=i.nodeType;if(3!==a&&8!==a){var o=!Object(d.X)(i.className);1===a&&"eruda"!==i.id&&(o||i.className.indexOf("eruda")<0)&&e.push({text:fe(i),isEl:!0,idx:n})}else{var s=i.nodeValue.trim();""!==s&&e.push({text:s,isCmt:8===a,idx:n})}}return e}(e.childNodes),t.attributes=de(a),t.name=fe({tagName:o,id:i,className:r,attributes:a});var s=e.erudaEvents;if(s&&0!==Object(d.ab)(s).length&&(t.listeners=s),ge(o))return t;var u=n.getComputedStyle();function l(t){var e=["top","left","right","bottom"];return"position"!==t&&(e=Object(d.fb)(e,(function(e){return"".concat(t,"-").concat(e)}))),"border"===t&&(e=Object(d.fb)(e,(function(t){return"".concat(t,"-width")}))),{top:xe(u[e[0]],t),left:xe(u[e[1]],t),right:xe(u[e[2]],t),bottom:xe(u[e[3]],t)}}var c={margin:l("margin"),border:l("border"),padding:l("padding"),content:{width:xe(u.width),height:xe(u.height)}};"static"!==u.position&&(c.position=l("position")),t.boxModel=c;var _=n.getMatchedCSSRules();_.unshift(function(t){for(var e={selectorText:"element.style",style:{}},n=0,r=t.length;n<r;n++){var i=t[n];e.style[i]=t[i]}return e}(e.style)),_.forEach((function(t){return le(t.style)})),t.styles=_,this._rmDefComputedStyle&&(u=function(t,e){var n={},r=["display","width","height"];return Object(d.u)(e,(function(t){r=r.concat(Object(d.ab)(t.style))})),r=Object(d.Db)(r),Object(d.u)(t,(function(t,e){Object(d.m)(r,e)&&(n[e]=t)})),n}(u,_)),t.rmDefComputedStyle=this._rmDefComputedStyle;var h=Object(d.eb)(t.computedStyleSearchKeyword);return h&&(u=Object(d.mb)(u,(function(t,e){return Object(d.m)(e,h)||Object(d.m)(t,h)}))),le(u),t.computedStyle=u,t}},{key:"_render",value:function(){if(!pe(this._curEl))return this._back();this._highlight[this._highlightElement?"show":"hide"](),this._renderHtml(this._tpl(this._getData()))}},{key:"_renderHtml",value:function(t){t!==this._lastHtml&&(this._lastHtml=t,this._$showArea.html(t))}},{key:"_updateHistory",value:function(){var t=this._container.get("console");if(t){var e=this._history;e.unshift(this._curEl),e.length>5&&e.pop();for(var n=0;n<5;n++)t.setGlobal("$".concat(n),e[n])}}},{key:"_initObserver",value:function(){var t=this;this._observer=new d.f((function(e){Object(d.u)(e,(function(e){return t._handleMutation(e)}))}))}},{key:"_handleMutation",value:function(t){var e,n;if(!ie(t.target))if("attributes"===t.type){if(t.target!==this._curEl)return;this._render()}else if("childList"===t.type){if(t.target===this._curEl)return this._render();var r=t.addedNodes;for(e=0,n=r.length;e<n;e++)if(r[e].parentNode===this._curEl)return this._render();var i=t.removedNodes;for(e=0,n=i.length;e<n;e++)if(i[e]===this._curEl)return this.set(this._htmlEl)}}},{key:"_rmCfg",value:function(){var t=this.config,e=this._container.get("settings");e&&e.remove(t,"overrideEventTarget").remove(t,"observeElement").remove("Elements")}},{key:"_initCfg",value:function(){var t=this,e=this.config=M.createCfg("elements",{overrideEventTarget:!0,observeElement:!0});e.get("overrideEventTarget")&&this.overrideEventTarget(),e.get("observeElement")&&(this._observeElement=!1),e.on("change",(function(e,n){switch(e){case"overrideEventTarget":return n?t.overrideEventTarget():t.restoreEventTarget();case"observeElement":return t._observeElement=n,n?t._enableObserver():t._disableObserver()}}));var n=this._container.get("settings");n&&(n.text("Elements").switch(e,"overrideEventTarget","Catch Event Listeners"),this._observer&&n.switch(e,"observeElement","Auto Refresh"),n.separator())}}]),r}(y);function le(t){Object(d.u)(t,(function(e,n){return t[n]=he(e)}))}var ce=/rgba?\((.*?)\)/g,_e=/url\("?(.*?)"?\)/g;function he(t){return(t=Object(d.zb)(t)).replace(ce,'<span class="eruda-style-color" style="background-color: $&"></span>$&').replace(_e,(function(t,e){return'url("'.concat(we(e),'")')}))}var pe=function(t){return Object(d.K)(t)&&t.parentNode};function fe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.noAttr,r=void 0!==n&&n,i=t.id,a=t.className,o=t.attributes,s='<span class="eruda-tag-name-color">'.concat(t.tagName.toLowerCase(),"</span>");if(""!==i&&(s+='<span class="eruda-function-color">#'.concat(i,"</span>")),Object(d.X)(a)){var u="";Object(d.u)(a.split(/\s+/g),(function(t){""!==t.trim()&&(u+=".".concat(t))})),s+='<span class="eruda-attribute-name-color">'.concat(u,"</span>")}return r||Object(d.u)(o,(function(t){var e=t.name;"id"!==e&&"class"!==e&&"style"!==e&&(s+=' <span class="eruda-attribute-name-color">'.concat(e,'</span><span class="eruda-operator-color">="</span><span class="eruda-string-color">').concat(t.value,'</span><span class="eruda-operator-color">"</span>'))})),s}var de=function(t){return Object(d.fb)(t,(function(t){var e=t.value,n=t.name;return e=Object(d.w)(e),("src"===n||"href"===n)&&!Object(d.tb)(e,"data")&&(e=we(e)),"style"===n&&(e=he(e)),{name:n,value:e}}))};var ve=["script","style","meta","title","link","head"],ge=function(t){return ve.indexOf(t.toLowerCase())>-1};function me(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Object(d.K)(t)&&Object(d.N)(n)&&Object(d.H)(r)){var i=t.erudaEvents=t.erudaEvents||{};i[e]=i[e]||[],i[e].push({listener:n,listenerStr:n.toString(),useCapture:r})}}function be(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Object(d.K)(t)&&Object(d.N)(n)&&Object(d.H)(r)){var i=t.erudaEvents;if(i&&i[e]){for(var a=i[e],o=0,s=a.length;o<s;o++)if(a[o].listener===n){a.splice(o,1);break}0===a.length&&delete i[e],0===Object(d.ab)(i).length&&delete t.erudaEvents}}}var ye=function(){return Object(d.qb)(window,"EventTarget.prototype")||window.Node.prototype},we=function(t){return'<a href="'.concat(t,'" target="_blank">').concat(t,"</a>")};function xe(t,e){if(Object(d.T)(t))return t;if(!Object(d.X)(t))return"‒";var n=Object(d.nb)(t);return Object(d.Q)(n)?t:"position"===e?n:0===n?"‒":n}var ke=null,$e=[{name:"Border All",fn:function(){if(ke)return L.remove(ke),void(ke=null);ke=L("* { outline: 2px dashed #707d8b; outline-offset: -3px; }",document.head)},desc:"Add color borders to all elements"},{name:"Refresh Page",fn:function(){var t=new d.h;t.setQuery("timestamp",Object(d.jb)()),window.location.replace(t.toString())},desc:"Add timestamp to url and refresh"},{name:"Search Text",fn:function(){var t,e,n,r=prompt("Enter the text")||"";""!==Object(d.Ab)(r)&&(t=r,e=document.body,n=new RegExp(t,"ig"),Oe(e,(function(t){var e=Object(d.a)(t);if(e.hasClass("eruda-search-highlight-block"))return document.createTextNode(e.text())})),Oe(e,(function(t){if(3===t.nodeType){var e=t.nodeValue;if((e=e.replace(n,(function(t){return'<span class="eruda-keyword">'.concat(t,"</span>")})))!==t.nodeValue){var r=Object(d.a)(document.createElement("div"));return r.html(e),r.addClass("eruda-search-highlight-block"),r.get(0)}}})))},desc:"Highlight given text on page"},{name:"Edit Page",fn:function(){var t=document.body;t.contentEditable="true"!==t.contentEditable},desc:"Toggle body contentEditable"},{name:"Fit Screen",fn:function(){var t=document.body,e=document.documentElement,n=Object(d.a)(t);if(n.data("scaled"))window.scrollTo(0,+n.data("scaled")),n.rmAttr("data-scaled"),n.css("transform","none");else{var r=Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight),i=Math.max(document.documentElement.clientHeight,window.innerHeight||0),a=i/r;n.css("transform","scale(".concat(a,")")),n.data("scaled",window.scrollY),window.scrollTo(0,r/2-i/2)}},desc:"Scale down the whole page to fit screen"},{name:"Load Fps Plugin",fn:function(){Ee("fps")},desc:"Display page fps"},{name:"Load Features Plugin",fn:function(){Ee("features")},desc:"Browser feature detections"},{name:"Load Timing Plugin",fn:function(){Ee("timing")},desc:"Show performance and resource timing"},{name:"Load Memory Plugin",fn:function(){Ee("memory")},desc:"Display memory"},{name:"Load Code Plugin",fn:function(){Ee("code")},desc:"Edit and run JavaScript"},{name:"Load Benchmark Plugin",fn:function(){Ee("benchmark")},desc:"Run JavaScript benchmarks"},{name:"Load Geolocation Plugin",fn:function(){Ee("geolocation")},desc:"Test geolocation"},{name:"Load Dom Plugin",fn:function(){Ee("dom")},desc:"Navigate dom tree"},{name:"Load Orientation Plugin",fn:function(){Ee("orientation")},desc:"Test orientation api"},{name:"Load Touches Plugin",fn:function(){Ee("touches")},desc:"Visualize screen touches"},{name:"Restore Settings",fn:function(){var t=Object(d.rb)("local"),e=JSON.parse(JSON.stringify(t));Object(d.u)(e,(function(e,n){Object(d.X)(e)&&Object(d.tb)(n,"eruda")&&t.removeItem(n)})),window.location.reload()},desc:"Restore defaults and reload"}];function Oe(t,e){var n=t.childNodes;if(!ie(t)){for(var r=0,i=n.length;r<i;r++){var a=Oe(n[r],e);a&&t.replaceChild(a,n[r])}return e(t)}}function Ee(t){var e="eruda"+Object(d.Eb)(t);if(!window[e]){var n=location.protocol;Object(d.tb)(n,"http")||(n="http:"),Object(d.db)("".concat(n,"//cdn.jsdelivr.net/npm/eruda-").concat(t,"@").concat(je[t]),(function(n){if(!n||!window[e])return K.error("Fail to load plugin "+t);g.emit(g.ADD,window[e]),g.emit(g.SHOW,t)}))}}L(n(85),document.head);var je={fps:"2.0.0",features:"2.0.0",timing:"2.0.0",memory:"2.0.0",code:"2.0.0",benchmark:"2.0.0",geolocation:"2.0.0",dom:"2.0.0",orientation:"2.0.0",touches:"2.0.0"};function Ae(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Se=function(t){u()(r,t);var e=Ae(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(86)),t.name="snippets",t._snippets=[],t._tpl=n(87),t}return o()(r,[{key:"init",value:function(t){b()(h()(r.prototype),"init",this).call(this,t),this._bindEvent(),this._addDefSnippets()}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style)}},{key:"add",value:function(t,e,n){return this._snippets.push({name:t,fn:e,desc:n}),this._render(),this}},{key:"remove",value:function(t){for(var e=this._snippets,n=0,r=e.length;n<r;n++)e[n].name===t&&e.splice(n,1);return this._render(),this}},{key:"run",value:function(t){for(var e=this._snippets,n=0,r=e.length;n<r;n++)e[n].name===t&&this._run(n);return this}},{key:"clear",value:function(){return this._snippets=[],this._render(),this}},{key:"_bindEvent",value:function(){var t=this;this._$el.on("click",".eruda-run",(function(){var e=Object(d.a)(this).data("idx");t._run(e)}))}},{key:"_run",value:function(t){this._snippets[t].fn.call(null)}},{key:"_addDefSnippets",value:function(){var t=this;Object(d.u)($e,(function(e){t.add(e.name,e.fn,e.desc)}))}},{key:"_render",value:function(){this._renderHtml(this._tpl({snippets:this._snippets}))}},{key:"_renderHtml",value:function(t){t!==this._lastHtml&&(this._lastHtml=t,this._$el.html(t))}}]),r}(y);function Te(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return Ce(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){o=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function Ce(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Re=function(t){u()(r,t);var e=Pe(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(88)),t.name="resources",t._localStoreData=[],t._localStoreSearchKeyword="",t._hideErudaSetting=!1,t._sessionStoreData=[],t._sessionStoreSearchKeyword="",t._cookieData=[],t._cookieSearchKeyword="",t._scriptData=[],t._stylesheetData=[],t._iframeData=[],t._imageData=[],t._observeElement=!0,t._tpl=n(89),t}return o()(r,[{key:"init",value:function(t,e){b()(h()(r.prototype),"init",this).call(this,t),this._container=e,this.refresh(),this._bindEvent(),this._initObserver(),this._initCfg()}},{key:"refresh",value:function(){return this.refreshLocalStorage().refreshSessionStorage().refreshCookie().refreshScript().refreshStylesheet().refreshIframe().refreshImage()._render()}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),this._disableObserver(),L.remove(this._style),this._rmCfg()}},{key:"refreshScript",value:function(){var t=[];return Object(d.a)("script").each((function(){var e=this.src;""!==e&&t.push(e)})),t=Object(d.Db)(t),this._scriptData=t,this}},{key:"refreshStylesheet",value:function(){var t=[];return Object(d.a)("link").each((function(){"stylesheet"===this.rel&&t.push(this.href)})),t=Object(d.Db)(t),this._stylesheetData=t,this}},{key:"refreshIframe",value:function(){var t=[];return Object(d.a)("iframe").each((function(){var e=Object(d.a)(this).attr("src");e&&t.push(e)})),t=Object(d.Db)(t),this._iframeData=t,this}},{key:"refreshLocalStorage",value:function(){return this._refreshStorage("local"),this}},{key:"refreshSessionStorage",value:function(){return this._refreshStorage("session"),this}},{key:"_refreshStorage",value:function(t){var e=this,n=Object(d.rb)(t,!1);if(n){var r=[];n=JSON.parse(JSON.stringify(n)),Object(d.u)(n,(function(t,n){Object(d.X)(t)&&(e._hideErudaSetting&&(Object(d.tb)(n,"eruda")||"active-eruda"===n)||r.push({key:n,val:Le(t,200)}))})),this["_"+t+"StoreData"]=r}}},{key:"refreshCookie",value:function(){var t=[],e=document.cookie;return""!==Object(d.Ab)(e)&&Object(d.u)(document.cookie.split(";"),(function(e){e=e.split("=");var n=Object(d.Ab)(e.shift());e=Object(d.p)(e.join("=")),t.push({key:n,val:e})})),this._cookieData=t,this}},{key:"refreshImage",value:function(){var t=[],e=this._performance=window.webkitPerformance||window.performance;e&&e.getEntries?this._performance.getEntries().forEach((function(e){("img"===e.initiatorType||Me(e.name))&&t.push(e.name)})):Object(d.a)("img").each((function(){var e=Object(d.a)(this),n=e.attr("src");"true"!==e.data("exclude")&&t.push(n)}));return(t=Object(d.Db)(t)).sort(),this._imageData=t,this}},{key:"show",value:function(){return b()(h()(r.prototype),"show",this).call(this),this._observeElement&&this._enableObserver(),this.refresh()}},{key:"hide",value:function(){return this._disableObserver(),b()(h()(r.prototype),"hide",this).call(this)}},{key:"_bindEvent",value:function(){var t=this,e=this,n=this._$el,r=this._container;function i(t,e){var n=r.get("sources");if(n)return n.set(t,e),r.showTool("sources"),!0}function a(t){return function(e){if(r.get("sources")){e.preventDefault();var n=Object(d.a)(this).attr("href");"iframe"===t||Object(d.I)(n)?i("iframe",n):Object(d.i)({url:n,success:function(e){i(t,e)},dataType:"raw"})}}}n.on("click",".eruda-refresh-local-storage",(function(){r.notify("Refreshed"),t.refreshLocalStorage()._render()})).on("click",".eruda-refresh-session-storage",(function(){r.notify("Refreshed"),t.refreshSessionStorage()._render()})).on("click",".eruda-refresh-cookie",(function(){r.notify("Refreshed"),t.refreshCookie()._render()})).on("click",".eruda-refresh-script",(function(){r.notify("Refreshed"),t.refreshScript()._render()})).on("click",".eruda-refresh-stylesheet",(function(){r.notify("Refreshed"),t.refreshStylesheet()._render()})).on("click",".eruda-refresh-iframe",(function(){r.notify("Refreshed"),t.refreshIframe()._render()})).on("click",".eruda-refresh-image",(function(){r.notify("Refreshed"),t.refreshImage()._render()})).on("click",".eruda-search",(function(){var t=Object(d.a)(this).data("type"),n=prompt("Filter");if(!Object(d.S)(n)){switch(n=Object(d.Ab)(n),t){case"local":e._localStoreSearchKeyword=n;break;case"session":e._sessionStoreSearchKeyword=n;break;case"cookie":e._cookieSearchKeyword=n}e._render()}})).on("click",".eruda-delete-storage",(function(){var t=Object(d.a)(this),n=t.data("key");"local"===t.data("type")?(localStorage.removeItem(n),e.refreshLocalStorage()._render()):(sessionStorage.removeItem(n),e.refreshSessionStorage()._render())})).on("click",".eruda-delete-cookie",(function(){var t=Object(d.a)(this).data("key");Object(d.pb)(t),e.refreshCookie()._render()})).on("click",".eruda-clear-storage",(function(){"local"===Object(d.a)(this).data("type")?(Object(d.u)(e._localStoreData,(function(t){return localStorage.removeItem(t.key)})),e.refreshLocalStorage()._render()):(Object(d.u)(e._sessionStoreData,(function(t){return sessionStorage.removeItem(t.key)})),e.refreshSessionStorage()._render())})).on("click",".eruda-clear-cookie",(function(){Object(d.u)(t._cookieData,(function(t){return Object(d.pb)(t.key)})),t.refreshCookie()._render()})).on("click",".eruda-storage-val",(function(){var t=Object(d.a)(this),e=t.data("key"),n="local"===t.data("type")?localStorage.getItem(e):sessionStorage.getItem(e);try{i("object",JSON.parse(n))}catch(t){i("raw",n)}})).on("click",".eruda-img-link",(function(){i("img",Object(d.a)(this).attr("src"))})).on("click",".eruda-css-link",a("css")).on("click",".eruda-js-link",a("js")).on("click",".eruda-iframe-link",a("iframe")),d.kb.on("change",(function(){return t._render()}))}},{key:"_rmCfg",value:function(){var t=this.config,e=this._container.get("settings");e&&e.remove(t,"hideErudaSetting").remove(t,"observeElement").remove("Resources")}},{key:"_initCfg",value:function(){var t=this,e=this.config=M.createCfg("resources",{hideErudaSetting:!0,observeElement:!0});e.get("hideErudaSetting")&&(this._hideErudaSetting=!0),e.get("observeElement")||(this._observeElement=!1),e.on("change",(function(e,n){switch(e){case"hideErudaSetting":return void(t._hideErudaSetting=n);case"observeElement":return t._observeElement=n,n?t._enableObserver():t._disableObserver()}})),this._container.get("settings").text("Resources").switch(e,"hideErudaSetting","Hide Eruda Setting").switch(e,"observeElement","Auto Refresh Elements").separator()}},{key:"_render",value:function(){var t=this._cookieData,e=this._scriptData,n=this._stylesheetData,r=this._imageData,i=this._localStoreSearchKeyword,a=this._sessionStoreSearchKeyword,o=this._cookieSearchKeyword;function s(t,e){return(e=Object(d.eb)(e))?Object(d.B)(t,(function(t){var n=t.key,r=t.val;return Object(d.m)(Object(d.eb)(n),e)||Object(d.m)(Object(d.eb)(r),e)})):t}this._renderHtml(this._tpl({localStoreData:s(this._localStoreData,i),localStoreSearchKeyword:i,sessionStoreData:s(this._sessionStoreData,a),sessionStoreSearchKeyword:a,cookieData:s(t,o),cookieSearchKeyword:o,cookieState:De("cookie",t.length),scriptData:e,scriptState:De("script",e.length),stylesheetData:n,stylesheetState:De("stylesheet",n.length),iframeData:this._iframeData,imageData:r,imageState:De("image",r.length)}))}},{key:"_renderHtml",value:function(t){t!==this._lastHtml&&(this._lastHtml=t,this._$el.html(t))}},{key:"_initObserver",value:function(){var t=this;this._observer=new d.f((function(e){var n=!1;Object(d.u)(e,(function(e){t._handleMutation(e)&&(n=!0)})),n&&t._render()}))}},{key:"_handleMutation",value:function(t){var e=this;if(!ie(t.target)){var n=function(t){switch(function(t){return t.tagName?t.tagName.toLowerCase():""}(t)){case"script":return e.refreshScript(),!0;case"img":return e.refreshImage(),!0;case"link":return e.refreshStylesheet(),!0}return!1};if("attributes"===t.type){if(n(t.target))return!0}else if("childList"===t.type){if(n(t.target))return!0;var r,i=Object(d.wb)(t.addedNodes),a=Te(i=Object(d.l)(i,Object(d.wb)(t.removedNodes)));try{for(a.s();!(r=a.n()).done;){if(n(r.value))return!0}}catch(t){a.e(t)}finally{a.f()}}return!1}}},{key:"_enableObserver",value:function(){this._observer.observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0})}},{key:"_disableObserver",value:function(){this._observer.disconnect()}}]),r}(y);function De(t,e){if(0===e)return"";var n=0,r=0;switch(t){case"cookie":n=30,r=60;break;case"script":n=5,r=10;break;case"stylesheet":n=4,r=8;break;case"image":n=50,r=100}return e>=r?"danger":e>=n?"warn":"ok"}var Le=function(t,e){return t.length<e?t:t.slice(0,e)+"..."},Ne=/\.(jpeg|jpg|gif|png)$/,Me=function(t){return Ne.test(t)},Fe=Object(d.s)(),ze=[{name:"Location",val:function(){return Object(d.w)(location.href)}},{name:"User Agent",val:navigator.userAgent},{name:"Device",val:["<table><tbody>",'<tr><td class="eruda-device-key">screen</td><td>'.concat(screen.width," * ").concat(screen.height,"</td></tr>"),"<tr><td>viewport</td><td>".concat(window.innerWidth," * ").concat(window.innerHeight,"</td></tr>"),"<tr><td>pixel ratio</td><td>".concat(window.devicePixelRatio,"</td></tr>"),"</tbody></table>"].join("")},{name:"System",val:["<table><tbody>",'<tr><td class="eruda-system-key">os</td><td>'.concat(Object(d.t)(),"</td></tr>"),"<tr><td>browser</td><td>".concat(Fe.name+" "+Fe.version,"</td></tr>"),"</tbody></table>"].join("")},{name:"About",val:'<a href="https://github.com/liriliri/eruda" target="_blank">Eruda v2.3.3</a>'}];function Ie(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Be=function(t){u()(r,t);var e=Ie(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(90)),t.name="info",t._tpl=n(91),t._infos=[],t}return o()(r,[{key:"init",value:function(t){b()(h()(r.prototype),"init",this).call(this,t),this._addDefInfo()}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style)}},{key:"add",value:function(t,e){var n=this._infos,r=!1;return Object(d.u)(n,(function(n){t===n.name&&(n.val=e,r=!0)})),r||n.push({name:t,val:e}),this._render(),this}},{key:"get",value:function(t){var e,n=this._infos;return Object(d.Y)(t)?Object(d.k)(n):(Object(d.u)(n,(function(n){t===n.name&&(e=n.val)})),e)}},{key:"remove",value:function(t){for(var e=this._infos,n=e.length-1;n>=0;n--)e[n].name===t&&e.splice(n,1);return this._render(),this}},{key:"clear",value:function(){return this._infos=[],this._render(),this}},{key:"_addDefInfo",value:function(){var t=this;Object(d.u)(ze,(function(e){return t.add(e.name,e.val)}))}},{key:"_render",value:function(){var t=[];Object(d.u)(this._infos,(function(e){var n=e.name,r=e.val;Object(d.N)(r)&&(r=r()),t.push({name:n,val:r})})),this._renderHtml(this._tpl({infos:t}))}},{key:"_renderHtml",value:function(t){t!==this._lastHtml&&(this._lastHtml=t,this._$el.html(t))}}]),r}(y);function He(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c()(this,n)}}var Ue,Ke=function(t){u()(r,t);var e=He(r);function r(){var t;return i()(this,r),(t=e.call(this))._style=L(n(92)),t.name="sources",t._showLineNum=!0,t._formatCode=!0,t._indentSize=4,t._loadTpl(),t}return o()(r,[{key:"init",value:function(t,e){b()(h()(r.prototype),"init",this).call(this,t),this._container=e,this._bindEvent(),this._initCfg()}},{key:"destroy",value:function(){b()(h()(r.prototype),"destroy",this).call(this),L.remove(this._style),this._rmCfg()}},{key:"set",value:function(t,e){if("img"===t){this._isFetchingData=!0;var n=new Image,r=this;return n.onload=function(){r._isFetchingData=!1,r._data={type:"img",val:{width:this.width,height:this.height,src:e}},r._render()},n.onerror=function(){r._isFetchingData=!1},void(n.src=e)}return this._data={type:t,val:e},this._render(),this}},{key:"show",value:function(){return b()(h()(r.prototype),"show",this).call(this),this._data||this._isFetchingData||this._renderDef(),this}},{key:"_renderDef",value:function(){var t=this;if(this._html)return this._data={type:"html",val:this._html},this._render();this._isGettingHtml||(this._isGettingHtml=!0,Object(d.i)({url:location.href,success:function(e){return t._html=e},error:function(){return t._html="Sorry, unable to fetch source code:("},complete:function(){t._isGettingHtml=!1,t._renderDef()},dataType:"raw"}))}},{key:"_bindEvent",value:function(){var t=this;this._container.on("showTool",(function(e,n){e!==t.name&&n.name===t.name&&delete t._data}))}},{key:"_loadTpl",value:function(){this._codeTpl=n(93),this._imgTpl=n(94),this._objTpl=n(95),this._rawTpl=n(96),this._iframeTpl=n(97)}},{key:"_rmCfg",value:function(){var t=this.config,e=this._container.get("settings");e&&e.remove(t,"showLineNum").remove(t,"formatCode").remove(t,"indentSize").remove("Sources")}},{key:"_initCfg",value:function(){var t=this,e=this.config=M.createCfg("sources",{showLineNum:!0,formatCode:!0,indentSize:4});e.get("showLineNum")||(this._showLineNum=!1),e.get("formatCode")||(this._formatCode=!1),this._indentSize=e.get("indentSize"),e.on("change",(function(e,n){switch(e){case"showLineNum":return void(t._showLineNum=n);case"formatCode":return void(t._formatCode=n);case"indentSize":return void(t._indentSize=+n)}})),this._container.get("settings").text("Sources").switch(e,"showLineNum","Show Line Numbers").switch(e,"formatCode","Beautify Code").select(e,"indentSize","Indent Size",["2","4"]).separator()}},{key:"_render",value:function(){switch(this._isInit=!0,this._data.type){case"html":case"js":case"css":return this._renderCode();case"img":return this._renderImg();case"object":return this._renderObj();case"raw":return this._renderRaw();case"iframe":return this._renderIframe()}}},{key:"_renderImg",value:function(){this._renderHtml(this._imgTpl(this._data.val))}},{key:"_renderCode",value:function(){var t=this._data,e=this._indentSize,n=t.val,r=t.val.length;if(r<We&&this._formatCode){switch(t.type){case"html":n=at.a.html(n,{unformatted:[],indent_size:e});break;case"css":n=at.a.css(n,{indent_size:e});break;case"js":n=at()(n,{indent_size:e})}var i=L.getCurTheme();n=Object(d.F)(n,t.type,{keyword:"color:".concat(i.keywordColor),number:"color:".concat(i.numberColor),operator:"color:".concat(i.operatorColor),comment:"color:".concat(i.commentColor),string:"color:".concat(i.stringColor)})}else n=Object(d.w)(n);r<Ge&&this._showLineNum&&(n=n.split("\n").map((function(t,e){return""===Object(d.Ab)(t)&&(t="&nbsp;"),{idx:e+1,val:t}}))),this._renderHtml(this._codeTpl({code:n,showLineNum:r<Ge&&this._showLineNum}))}},{key:"_renderObj",value:function(){this._renderHtml(this._objTpl(),!1);var t=this._data.val;try{Object(d.X)(t)&&(t=JSON.parse(t))}catch(t){}new st.a(this._$el.find(".eruda-json").get(0),{unenumerable:!0,accessGetter:!0}).set(t)}},{key:"_renderRaw",value:function(){this._renderHtml(this._rawTpl({val:this._data.val}))}},{key:"_renderIframe",value:function(){this._renderHtml(this._iframeTpl({src:this._data.val}))}},{key:"_renderHtml",value:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n&&t===this._lastHtml||(this._lastHtml=t,this._$el.html(t),setTimeout((function(){return e._$el.get(0).scrollTop=0}),0))}}]),r}(y),We=1e5,Ge=4e5;e.default={init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.container,n=t.tool,r=t.autoScale,i=void 0===r||r,a=t.useShadowDom,o=void 0===a||a;this._isInit||(this._isInit=!0,this._scale=1,this._initContainer(e,o),this._initStyle(),this._initDevTools(),this._initEntryBtn(),this._initSettings(),this._initTools(n),this._registerListener(),i&&this._autoScale())},_isInit:!1,version:"2.3.3",util:d.q,Tool:y,Console:Lt,Elements:ue,Network:Yt,Sources:Ke,Resources:Re,Info:Be,Snippets:Se,Settings:M,get:function(t){if(this._checkInit()){if("entryBtn"===t)return this._entryBtn;var e=this._devTools;return t?e.get(t):e}},add:function(t){if(this._checkInit())return Object(d.N)(t)&&(t=t(this)),this._devTools.add(t),this},remove:function(t){return this._devTools.remove(t),this},show:function(t){if(this._checkInit()){var e=this._devTools;return t?e.showTool(t):e.show(),this}},hide:function(){if(this._checkInit())return this._devTools.hide(),this},destroy:function(){this._devTools.destroy(),delete this._devTools,this._entryBtn.destroy(),delete this._entryBtn,this._unregisterListener(),this._$el.remove(),L.clear(),this._isInit=!1},scale:function(t){return Object(d.T)(t)?(this._scale=t,g.emit(g.SCALE,t),this):this._scale},position:function(t){var e=this._entryBtn;return Object(d.U)(t)?(e.setPos(t),this):e.getPos()},_autoScale:function(){Object(d.P)()&&this.scale(1/Object(d.Fb)())},_registerListener:function(){var t=this;this._addListener=function(){return t.add.apply(t,arguments)},this._showListener=function(){return t.show.apply(t,arguments)},g.on(g.ADD,this._addListener),g.on(g.SHOW,this._showListener),g.on(g.SCALE,L.setScale)},_unregisterListener:function(){g.off(g.ADD,this._addListener),g.off(g.SHOW,this._showListener),g.off(g.SCALE,L.setScale)},_checkInit:function(){return this._isInit||K.error('Please call "eruda.init()" first'),this._isInit},_initContainer:function(t,e){var r;t||(t=document.createElement("div"),document.documentElement.appendChild(t),t.style.all="initial"),e&&(t.attachShadow?r=t.attachShadow({mode:"open"}):t.createShadowRoot&&(r=t.createShadowRoot()),r&&(L.container=document.head,L(n(26)),t=document.createElement("div"),r.appendChild(t),this._shadowRoot=r)),Object.assign(t,{id:"eruda",className:"eruda-container",contentEditable:!1}),"ios"===Object(d.s)().name&&t.setAttribute("ontouchstart",""),this._$el=Object(d.a)(t)},_initDevTools:function(){this._devTools=new V(this._$el)},_initStyle:function(){var t=this._$el;this._shadowRoot?(L.container=this._shadowRoot,L(":host { all: initial }")):(t.append('<div class="'.concat("eruda-style-container",'"></div>')),L.container=t.find(".".concat("eruda-style-container")).get(0)),L(n(98)+n(99)+n(100)+n(101)+n(26))},_initEntryBtn:function(){var t=this;this._entryBtn=new I(this._$el),this._entryBtn.on("click",(function(){return t._devTools.toggle()}))},_initSettings:function(){var t=this._devTools,e=new M;t.add(e),this._entryBtn.initCfg(e),t.initCfg(e)},_initTools:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["console","elements","network","resources","sources","info","snippets"];e=Object(d.wb)(e);var n=this._devTools;e.forEach((function(e){var r=t[Object(d.Eb)(e)];try{r&&n.add(new r)}catch(t){Object(d.hb)((function(){K.error("Something wrong when initializing tool ".concat(e,":"),t.message)}))}})),n.showTool(e[0]||"settings")}};Ue=d.q,Object.assign(Ue,{beautify:at.a,evalCss:L,isErudaEl:ie})}])}));
//# sourceMappingURL=eruda.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{-webkit-text-size-adjust:none;-ms-text-size-adjust:none}input[type=submit],input[type=reset],input[type=button],input:focus,button:focus,select:focus,textarea:focus{outline:none}input{-webkit-appearance:none;resize:none;border-radius:0}body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}img{max-width:100%;height:auto;width:auto\\9 ;-ms-interpolation-mode:bicubic}body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;border:none}em,i{font-style:normal}strong{font-weight:normal}.clearfix:after{content:\"\";display:block;visibility:hidden;height:0;clear:both}.clearfix{zoom:1}a{text-decoration:none;color:#333}a:hover{color:#fed503;text-decoration:none}ul,ol{list-style:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-family:Microsoft YaHei}img{border:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(12);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component-display{padding:4vw}.component-display--title{color:#999}.component-display--content{margin-top:2.66667vw}.component-display--button__type .glow-button+.glow-button{margin-left:2.66667vw}body,html{height:100%}body{background-color:#f9f9f9}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(14);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(16);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-button{position:relative;display:inline-block;box-sizing:border-box;font-size:3.73333vw;border-radius:0.53333vw;text-align:center;cursor:pointer;-webkit-appearance:none;-webkit-text-size-adjust:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glow-button::before{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;opacity:0;content:\" \"}.glow-button:active::before{opacity:.1}.glow-button--default{color:#333;background-color:#fff;border:1px solid #ccc}.glow-button--plain.glow-button--default{background-color:#fff;color:#333}.glow-button--primary{color:#fff;background-color:#39c5bb;border:1px solid #39c5dd}.glow-button--plain.glow-button--primary{background-color:#fff;color:#39c5bb}.glow-button--success{color:#fff;background-color:#5cb85c;border:1px solid #10b310}.glow-button--plain.glow-button--success{background-color:#fff;color:#5cb85c}.glow-button--danger{color:#fff;background-color:#f56c6c;border:1px solid #d9534f}.glow-button--plain.glow-button--danger{background-color:#fff;color:#f56c6c}.glow-button--warn{color:#fff;background-color:#e6a23c;border:1px solid #ce9135}.glow-button--plain.glow-button--warn{background-color:#fff;color:#e6a23c}.glow-button--small{padding:1.6vw 2.4vw}.glow-button--normal{padding:2.4vw 3.6vw}.glow-button--large{padding:3.2vw 4.8vw}.glow-button--round{border-radius:133.2vw}.glow-button--block{display:block}.glow-button--disabled{opacity:.5}.glow-button--disabled:active::before{opacity:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(18);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-icon{display:inline-block;line-height:1}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(20);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-cell{min-height:9.6vw;box-sizing:border-box;padding:1.6vw 4vw;position:relative;background:#fff;display:flex;flex-wrap:wrap;align-items:center}.glow-cell--isLink{cursor:pointer}.glow-cell--isLink::before{width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;opacity:0;content:\" \";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.glow-cell--isLink:active::before{opacity:.1}.glow-cell--border::after{content:\"\";display:block;position:absolute;bottom:0;height:1px;left:4vw;right:4vw;background-color:#39c5bb;transform:scaleY(0.5)}.glow-cell--icon i{margin-right:1.33333vw;font-size:3.73333vw}.glow-cell--meta{flex-basis:100%;flex-shrink:0}.glow-cell--meta span{color:#909399;font-size:3.2vw;transform:scale(0.9)}.glow-cell--meta--text{line-height:6.4vw;min-height:6.4vw}.glow-cell--icon,.glow-cell--label,.glow-cell--value{line-height:6.4vw;min-height:6.4vw}.glow-cell--label{flex:0 0 26.66667vw;position:relative;font-size:3.73333vw;color:#333}.glow-cell--value{text-align:right;flex:1;font-size:3.73333vw;color:#909399}.glow-cell--link{margin-left:1.33333vw}.glow-cell--link i{font-size:3.73333vw}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(22);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-navigation{height:11.73333vw;padding:0 4vw;display:flex;justify-content:space-between;position:relative;box-sizing:border-box}.glow-navigation--icon,.glow-navigation--right-icon{flex:0 0 4.26667vw;display:flex;justify-content:center;align-items:center}.glow-navigation--icon i,.glow-navigation--right-icon i{font-size:4.26667vw}.glow-navigation--title{flex:1;text-align:center;line-height:11.73333vw;font-size:4.26667vw}.glow-navigation--default{background-color:#fff}.glow-navigation--default .glow-navigation--title{color:#333}.glow-navigation--default .glow-navigation--icon,.glow-navigation--default .glow-navigation--right-icon{color:#333}.glow-navigation--primary{background-color:#39c5bb}.glow-navigation--primary .glow-navigation--title{color:#fff}.glow-navigation--primary .glow-navigation--icon,.glow-navigation--primary .glow-navigation--right-icon{color:#fff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(24);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2020}.glow-overlay-fade-enter-active{-webkit-animation:fadeIn .3s;animation:fadeIn .3s}.glow-overlay-fade-leave-active{-webkit-animation:fadeOut .3s;animation:fadeOut .3s}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(26);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-popup{position:fixed;background-color:#fff}.glow-popup--overlay{position:fixed;bottom:0;left:0;right:0;top:0;background-color:rgba(0,0,0,.5)}.glow-popup--top{min-height:10%;top:0;left:0;right:0}.glow-popup--top.glow-popup--round{border-radius:0 0 6.66667vw 6.66667vw}.glow-popup--bottom.glow-popup--round{border-radius:6.66667vw 6.66667vw 0 0}.glow-popup--top-enter-active{-webkit-animation:slideInDown .3s;animation:slideInDown .3s}.glow-popup--top-leave-active{-webkit-animation:slideOutUp .3s;animation:slideOutUp .3s}.glow-popup--bottom-enter-active{-webkit-animation:slideInUp .3s;animation:slideInUp .3s}.glow-popup--bottom-leave-active{-webkit-animation:slideOutDown .3s;animation:slideOutDown .3s}.glow-popup--left-enter-active{-webkit-animation:slideInLeft .3s;animation:slideInLeft .3s}.glow-popup--left-leave-active{-webkit-animation:slideOutLeft .3s;animation:slideOutLeft .3s}.glow-popup--right-enter-active{-webkit-animation:slideInRight .3s;animation:slideInRight .3s}.glow-popup--right-leave-active{-webkit-animation:slideOutRight .3s;animation:slideOutRight .3s}.glow-popup--bottom{min-height:10%;bottom:0;left:0;right:0}.glow-popup--left{min-width:10%;top:0;bottom:0;left:0}.glow-popup--right{min-width:10%;top:0;bottom:0;right:0}@-webkit-keyframes slideInLeft{from{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(-100%, 0, 0);visibility:hidden}}@keyframes slideOutLeft{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(-100%, 0, 0);visibility:hidden}}@-webkit-keyframes slideInRight{from{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInRight{from{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutRight{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(100%, 0, 0);visibility:hidden}}@keyframes slideOutRight{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(100%, 0, 0);visibility:hidden}}@-webkit-keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutUp{from{transform:translate3d(0, 0, 0)}to{visibility:hidden;transform:translate3d(0, -100%, 0)}}@keyframes slideOutUp{from{transform:translate3d(0, 0, 0)}to{visibility:hidden;transform:translate3d(0, -100%, 0)}}@-webkit-keyframes slideInUp{from{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInUp{from{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutDown{from{transform:translate3d(0, 0, 0)}to{visibility:hidden;transform:translate3d(0, 100%, 0)}}@keyframes slideOutDown{from{transform:translate3d(0, 0, 0)}to{visibility:hidden;transform:translate3d(0, 100%, 0)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(28);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-tabbar{height:13.06667vw;width:100%;background-color:#fff;display:flex}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(30);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-tabbar-item{flex:1;text-align:center;height:100%;color:#333}.glow-tabbar-item--icon{margin-top:2vw;line-height:1}.glow-tabbar-item--icon .glow-icon{font-size:5.33333vw}.glow-tabbar-item--text{font-size:3.2vw;margin-top:1.33333vw;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glow-tabbar-item--active{color:#39c5bb}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(32);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-tag{position:relative;display:inline-block;box-sizing:border-box;font-size:3.2vw;padding:0.8vw 2vw 0.8vw 1.33333vw;border-radius:0 133.2vw 133.2vw 0;-webkit-appearance:none;-webkit-text-size-adjust:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glow-tag--default{color:#fff;background-color:#aaa}.glow-tag--primary{color:#fff;background-color:#39c5bb}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(34);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-field{min-height:9.6vw;padding:1.6vw 4vw;display:flex;position:relative;background-color:#fff;box-sizing:border-box}.glow-field:last-child::after{display:none}.glow-field--required::before{content:\"*\";position:absolute;left:2vw;top:2.66667vw;color:#f56c6c;font-size:3.73333vw}.glow-field--button{position:absolute;right:4vw;top:50%;transform:translateY(-50%)}.glow-field--border::after{content:\"\";display:block;position:absolute;bottom:0;height:1px;left:4vw;right:4vw;background-color:#39c5bb;transform:scaleY(0.5)}.glow-field--label{flex:0 0 26.66667vw;line-height:6.4vw;min-height:6.4vw;width:26.66667vw;word-break:break-all;position:relative;font-size:3.73333vw;color:#333}.glow-field--input,.glow-field--textarea{flex:1;overflow:hidden;display:block;font-size:3.73333vw;border:none;outline:none;line-height:6.4vw;height:6.4vw}.glow-field--input:disabled,.glow-field--textarea:disabled{background-color:#fff;color:#ccc}.glow-field--input__right,.glow-field--textarea__right{text-align:right;justify-content:flex-end;flex:1}.glow-field--input{height:6.4vw}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(36);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-load-more--holder{height:13.33333vw;font-size:3.73333vw;color:#909399;text-align:center;background-color:#f9f9f9}.glow-load-more--holder-text{position:relative;height:100%;display:flex;justify-content:center;align-items:center}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(38);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-pull-refresh{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glow-pull-refresh--track{background-color:#f9f9f9}.glow-pull-refresh--track--header{display:flex;justify-content:center;align-items:center;color:#333;font-size:3.73333vw;position:absolute;width:100%;transform:translateY(-100%);height:13.33333vw}.glow-pull-refresh--track__loading .glow-pull-refresh--track--loadingWrapper{width:6.66667vw;height:6.66667vw}.glow-pull-refresh--track--text{color:#909399}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(40);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-loading{position:relative}.glow-loading--round,.glow-loading--round:before,.glow-loading--round:after{border-radius:50%}.glow-loading--round{color:#39c5bb;position:relative;box-shadow:inset 0 0 0 1.33333vw;transform:translateZ(0)}.glow-loading--round__before,.glow-loading--round__after{position:absolute}.glow-loading--round__before{top:-0.66667vw;left:-0.66667vw;-webkit-animation-name:round;animation-name:round;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease;animation-timing-function:ease}.glow-loading--round__after{top:-0.66667vw;right:-0.66667vw;transform-origin:0;-webkit-animation-name:round;animation-name:round;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease;animation-timing-function:ease}@-webkit-keyframes round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.glow-loading--text{font-size:3.73333vw;color:#333;margin-top:1.33333vw;text-align:center;white-space:nowrap}.glow-loading--rect{height:100%;display:inline-block;-webkit-animation-name:stretchdelay;animation-name:stretchdelay;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;background-color:#39c5bb}@-webkit-keyframes stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1)}}@keyframes stretchdelay{0%,40%,100%{transform:scaleY(0.4);-webkit-transform:scaleY(0.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(42);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-radio{display:flex;align-items:center;font-size:3.73333vw;color:#333}.glow-radio--icon{height:3.73333vw;width:3.73333vw;margin-right:2vw;box-sizing:border-box;position:relative;border-radius:50%}.glow-radio--icon::after{transition:all .2s linear}.glow-radio--unselected .glow-radio--icon{border:1px solid #909399}.glow-radio--unselected .glow-radio--icon::after{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);content:\"\";width:0px;height:0px;border-radius:50%;box-sizing:border-box;background-color:#39c5bb}.glow-radio--selected{color:#39c5bb}.glow-radio--selected .glow-radio--icon{border:1px solid #39c5bb}.glow-radio--selected .glow-radio--icon::after{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);content:\"\";width:1.6vw;height:1.6vw;border-radius:50%;box-sizing:border-box;background-color:#39c5bb}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(44);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-radio-group{display:flex;flex-wrap:wrap}.glow-radio-group .glow-radio{line-height:10vw;margin-right:2.66667vw}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(46);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(48);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-stepper{width:23.33333vw;height:6.4vw;box-sizing:border-box;position:relative;padding:0 1.33333vw;display:flex;align-items:center;justify-content:space-between}.glow-stepper--increase,.glow-stepper--decrease{height:4.8vw;width:4.8vw;border-radius:50%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;position:relative}.glow-stepper--increase i,.glow-stepper--decrease i{font-size:4.26667vw;font-weight:bold;transform:scale(0.5)}.glow-stepper--increase::before,.glow-stepper--decrease::before{width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;opacity:0;content:\" \";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.glow-stepper--increase:active::before,.glow-stepper--decrease:active::before{opacity:.1}.glow-stepper--increase{background-color:#39c5bb}.glow-stepper--increase i{color:#fff}.glow-stepper--decrease{border:1px solid #39c5bb}.glow-stepper--decrease i{color:#39c5bb}.glow-stepper--num{font-size:4.8vw;color:#909399;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glow-stepper--disabled{opacity:.5}.glow-stepper--disabled .glow-stepper--increase:active::before,.glow-stepper--disabled .glow-stepper--decrease:active::before{opacity:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(50);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-swipe{position:relative;overflow:hidden;line-height:0}.glow-swipe--bottom{position:absolute;bottom:1.33333vw;display:flex;justify-content:center;left:0;right:0}.glow-swipe--indicator{background-color:#ddd;width:2.66667vw;height:2.66667vw;border-radius:50%;margin-right:1.33333vw}.glow-swipe--indicator--active{background-color:#39c5bb}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(52);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-swipe-item{height:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(54);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-tab{overflow:hidden}.glow-tab--label{display:flex;height:10.4vw;width:100%;position:relative;overflow-x:auto;overflow-y:hidden;background-color:#fff}.glow-tab--label::-webkit-scrollbar{display:none}.glow-tab--label--item{line-height:10.4vw;text-align:center;flex:1;flex-shrink:0;font-size:3.73333vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;height:100%}.glow-tab--label--item__active{font-size:4.26667vw;color:#39c5bb}.glow-tab--line{width:6.66667vw;height:0.66667vw;background-color:#39c5bb;bottom:0;position:absolute;border-radius:0.33333vw}.glow-tab--main{display:flex}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(56);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glow-tab-panel{flex-shrink:0;width:100%;margin-top:1.33333vw}.glow-tab-panel--inactive{height:0;overflow:visible}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_vue@2.6.11@vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("keep-alive", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-router@3.3.4@vue-router/dist/vue-router.esm.js
/*!
  * vue-router v3.3.4
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {}
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isRouterError (err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType)
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {}
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     false && false;
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (false) {}
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (false) {}
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (false) {}
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (false) { var pathNames, found; }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {}

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if (false) {}

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {}
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (false) {}
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           false && false;
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationFailureType = {
  redirected: 1,
  aborted: 2,
  cancelled: 3,
  duplicated: 4
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  )
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      var prev = this$1.current;
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        // Initial redirection should still trigger the onReady onSuccess
        // https://github.com/vuejs/vue-router/issues/3225
        if (!isRouterError(err, NavigationFailureType.redirected)) {
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        } else {
          this$1.readyCbs.forEach(function (cb) {
            cb(route);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isRouterError(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardownListeners = function teardownListeners () {
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isRouterError(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {}
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   false && false;

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) {
      // clean up event listeners
      // https://github.com/vuejs/vue-router/issues/2341
      this$1.history.teardownListeners();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var setupListeners = function () {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.3.4';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ var vue_router_esm = (VueRouter);

// CONCATENATED MODULE: ./src/router/index.js


vue_runtime_esm["a" /* default */].use(vue_router_esm);
/* harmony default export */ var router = (new vue_router_esm({
  routes: [{
    path: '/base/button',
    name: 'button',
    component: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 89))
  }, {
    path: '/base/cell',
    name: 'button',
    component: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 90))
  }, {
    path: '/base/navigation',
    name: 'navigation',
    component: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 91))
  }, {
    path: '/base/icon',
    name: 'icon',
    component: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 92))
  }, {
    path: '/base/tabbar',
    name: 'tabbar',
    component: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 93))
  }, {
    path: '/base/popup',
    name: 'popup',
    component: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 94))
  }, {
    path: '/base/tag',
    name: 'tag',
    component: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 95))
  }, {
    path: '/senior/field',
    name: 'field',
    component: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 96))
  }, {
    path: '/senior/stepper',
    name: 'stepper',
    component: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 97))
  }, {
    path: '/senior/pullRefresh',
    name: 'pullRefresh',
    component: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 98))
  }, {
    path: '/senior/loading',
    name: 'loading',
    component: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 99))
  }, {
    path: '/senior/radio',
    name: 'radio',
    component: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 100))
  }, {
    path: '/senior/loadMore',
    name: 'loadMore',
    component: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 101))
  }, {
    path: '/senior/swipe',
    name: 'swipe',
    component: () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 102))
  }, {
    path: '/senior/tab',
    name: 'tab',
    component: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 103))
  }, {
    path: '*',
    name: 'index',
    component: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 88))
  }]
}));
// EXTERNAL MODULE: ./node_modules/_eruda@2.3.3@eruda/eruda.js
var eruda = __webpack_require__(5);
var eruda_default = /*#__PURE__*/__webpack_require__.n(eruda);

// EXTERNAL MODULE: ./src/assets/normal.scss
var normal = __webpack_require__(9);

// EXTERNAL MODULE: ./src/assets/global.scss
var global = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/helper/util/index.js

const COMPONENT_NAME = 'glow';
const COMPONENT_PREFIX = 'gl';
/**
 * 判断是否对象
 * @param {*} val 目标对象
 */

function isPlainObject(val) {
  return toString.call(val) === '[object Object]';
} // 是否定义

function isDef(target) {
  return target !== undefined;
}
function addUnit(value) {
  return value === 0 ? undefined : value + '' + 'px';
} // 深合并

function deepMerge(...objs) {
  // 使用Object.create(null) 创造的对象没有原型，所以比较节省内存
  const result = Object.create(null); // 遍历每一个入参对象

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]; // 判断该属性是不是一个对象

        if (isPlainObject(val)) {
          // 判断result该属性是否已存在
          if (isPlainObject(result[key])) {
            // 将其继续合并
            result[key] = deepMerge(result[key], val);
          } else {
            result[key] = deepMerge({}, val);
          }
        } else {
          result[key] = val;
        }
      });
    }
  });
  return result;
} // css 命名规范
// 子元素(使用--链接) : glow-pull-refresh--main
// 状态(使用__链接) : glow-pull-refresh--main__primary
// 子结构最好不超过3层
// 创造命名空间

const createNamespace = function (namespace) {
  function createComponent(Component) {
    Object.defineProperty(Component, 'name', {
      get() {
        return `${COMPONENT_PREFIX}-${namespace}`;
      },

      set() {}

    });
    return Component;
  }

  function bem(classes) {
    if (typeof classes === 'undefined') {
      return `${COMPONENT_NAME}-${namespace} `;
    } else if (typeof classes === 'string') {
      return `${COMPONENT_NAME}-${namespace}--${classes}`;
    } else if (Array.isArray(classes)) {
      return classes.map(item => bem(item)).join(' ');
    } else if (typeof classes === 'object') {
      const classNames = [];
      Object.keys(classes).forEach(key => {
        classes[key] ? classNames.push(`${COMPONENT_NAME}-${namespace}--${key}`) : undefined;
      });
      return classNames.join(' ');
    } else {
      console.log('error : bem can not matching');
    }
  }

  return [createComponent, bem];
};
function mount(Component, config) {
  const instance = new vue_runtime_esm["a" /* default */]({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, deepMerge({
        props: this.$props
      }, config));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
function addTransitionEndEvent(element, callback) {
  // 浏览器检测
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  Object.keys(transitions).forEach(key => {
    const targetTransitionName = getComputedStyle(element)[key];

    if (targetTransitionName) {
      element.addEventListener(transitions[key], callback);
    }
  });
}
function addAnimateEndEvent(element, callback) {
  // 浏览器检测
  const transitions = {
    animation: 'animationend',
    webkitAnimation: 'webkitAnimationEnd',
    oanimation: 'oanimationen',
    oAnimation: 'oAnimationEnd ',
    msAnimation: 'msAnimationEnd'
  };
  let relase;
  Object.keys(transitions).forEach(key => {
    const targetTransitionName = getComputedStyle(element)[key];

    if (targetTransitionName) {
      element.addEventListener(transitions[key], callback);

      relase = () => element.removeEventListener(transitions[key], callback);
    }
  });
  return relase;
}
function getParentVNode(context, componentName) {
  if (!context.$parent) return;

  if (context.$parent.$vnode.componentOptions.tag === 'componentName') {
    return context.$parnet;
  } else {
    return getParentVNode(context.$parent, componentName);
  }
}
// CONCATENATED MODULE: ./src/components/helper/mixins/global/index.js
/* harmony default export */ var mixins_global = ({
  data() {
    return {
      slot: {}
    };
  },

  mounted() {
    this.slot = this.$slots;
  },

  updated() {
    this.slot = this.$slots;
  }

});
// CONCATENATED MODULE: ./src/components/helper/dom/index.js
function ra2(callback) {
  requestAnimationFrame(() => requestAnimationFrame(callback));
}
function ra1(callback) {
  requestAnimationFrame(callback);
} // 测试浏览器是否支持passive属性

let supportPassive = false;

try {
  const opts = {};
  Object.defineProperties(opts, 'passive', {
    get: function get() {
      supportPassive = true;
    }
  });
  window.addEventListener('test-passive', null, opts);
} catch (e) {// console.log(e);
}

function on(target, event, handler, passive) {
  if (typeof passive === 'undefined') {
    passive = false;
  }

  target.addEventListener(event, handler, supportPassive ? {
    capture: false,
    passive: passive
  } : false);
}
function off(target, event, handler) {
  target.removeEventListener(event, handler);
}
function getClientRect(element) {
  return element.getBoundingClientRect();
}
function isScroller(element) {
  return getComputedStyle(element).overflow === 'scroll';
}
function traceScroller(element) {
  if (!element || element === document) return false;
  if (isScroller(element)) return element;
  return traceScroller(element.parentNode);
} // 广度优先搜索

function bfsScroller(element) {
  const queue = [];
  queue.push(element);

  while (queue.length > 0) {
    const cNode = queue.shift();
    const children = Array.from(cNode.childNodes).filter(item => item.nodeType === 1);

    if (children && children.length > 0) {
      queue.push(...children);
    }

    if (isScroller(cNode)) {
      return cNode;
    }
  }
}
function hasScrollbar() {
  return getScrollHeight() > (window.innerHeight || document.documentElement.clientHeight);
}
function cacPixel(value) {
  return value * document.documentElement.clientWidth / 750;
}
function resize(callback) {
  const _resize = window.onresize;
  window.onresize = _resize ? () => {
    _resize();

    callback();
  } : callback;
}
const scrollUtil = function () {
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

    if (typeof index !== 'undefined') {
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

  return {
    addEvent,
    removeEvent
  };
}();
function getScrollHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
} // 获取视口高度

function getWindowHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}
function createElement(tagName, props) {
  const element = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    if (key === 'on') {
      Object.keys(props.on).forEach(event => element.addEventListener(event, props.on[event]));
    } else {
      element.setAttribute(key, props[key]);
    }
  });
  return element;
}
function bindEvent(element, name, callback, options) {
  element.addEventListener(name, callback, options);
}
function getScroller(element, outter) {
  let scroller;

  if (outter) {
    scroller = traceScroller(element) || window;
  } else {
    scroller = bfsScroller(element) || traceScroller(element) || window;
  }

  return scroller;
}
function isHidden(el) {
  const style = window.getComputedStyle(el);
  const hidden = style.display === 'none'; // 还有以下情况也视为隐藏
  // 1. 父元素display 为 noen
  // 2. 它设置了fixed

  const parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}
// CONCATENATED MODULE: ./src/components/helper/mixins/bind-event/index.js

/* harmony default export */ var bind_event = (function (handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
});
// EXTERNAL MODULE: ./src/components/junior/affix/index.scss
var affix = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/junior/affix/index.js






const _createNamespace = createNamespace('affix');

const [createComponent, bem] = _createNamespace;
/* harmony default export */ var junior_affix = (createComponent({
  props: {
    top: {
      type: [String, Number],
      default: 0
    }
  },

  data() {
    return {
      affixStyle: {},
      hasFixed: false
    };
  },

  mixins: [mixins_global, bind_event(function (bind) {
    if (!this.scroller) {
      this.scroller = getScroller(this.$el, true);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  methods: {
    check() {
      this.$nextTick(() => {
        const el = this.$el;
        const scrollerRect = el.getBoundingClientRect();
        const affixStyle = {};

        if (scrollerRect.top < 0) {
          affixStyle.position = 'fixed';
          affixStyle.top = typeof this.top === 'string' ? this.top : this.top + 'px';
          affixStyle.zIndex = 1000;
          affixStyle.width = '100%';
        }

        this.affixStyle = affixStyle;
      });
    }

  },

  render(h) {
    this.memorize = this.slot.default;
    return h('div', {
      class: bem()
    }, [h('div', {
      style: this.affixStyle
    }, [this.slot.default])]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/button/index.scss
var junior_button = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/junior/button/index.js




const button_createNamespace = createNamespace('button');

const [button_createComponent, button_bem] = button_createNamespace;
/* harmony default export */ var components_junior_button = (button_createComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    link: [String, Object],
    href: String,
    disabled: Boolean,
    round: Boolean,
    block: Boolean,
    partLine: Boolean,
    plain: Boolean
  },
  mixins: [mixins_global],
  methods: {
    onClick(e) {
      e.stopPropagation();
      if (this.disabled) return;
      this.$emit('click');

      if (this.href) {
        return window.location.href = this.href;
      }

      if (this.link) {
        this.$router.push(this.link);
      }
    }

  },

  render(h) {
    return h('div', {
      class: button_bem() + button_bem([this.type, this.size, {
        round: this.round,
        block: this.block,
        plain: this.plain,
        disabled: this.disabled
      }]),
      on: {
        click: this.onClick
      }
    }, this.slot.default);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/icon/index.scss
var junior_icon = __webpack_require__(17);

// CONCATENATED MODULE: ./src/components/junior/icon/index.js


const icon_createNamespace = createNamespace('icon');

const [icon_createComponent, icon_bem] = icon_createNamespace;

/* harmony default export */ var components_junior_icon = (icon_createComponent({
  props: {
    name: String,
    size: [String, Number],
    color: String
  },

  render(h) {
    const iconStyle = {};

    if (this.size) {
      iconStyle.fontSize = typeof this.size === 'number' ? this.size + 'px' : this.size;
    }

    if (this.color) {
      iconStyle.color = this.color;
    }

    return h('div', {
      class: icon_bem()
    }, [h('i', {
      style: iconStyle,
      class: `glow-icon ${this.name}`
    })]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/cell/index.scss
var cell = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/junior/cell/index.js




const cell_createNamespace = createNamespace('cell');

const [cell_createComponent, cell_bem] = cell_createNamespace;

/* harmony default export */ var junior_cell = (cell_createComponent({
  props: {
    label: String,
    value: [String, Number],
    border: Boolean,
    isLink: Boolean,
    meta: String,
    icon: String
  },
  components: {
    [components_junior_icon.name]: components_junior_icon
  },
  mixins: [mixins_global],

  render(h) {
    // slot better then props
    const icon = h('div', {
      class: cell_bem('icon')
    }, [this.slot.icon || this.icon ? h(components_junior_icon, {
      attrs: {
        name: this.icon
      }
    }) : undefined]);
    const label = h('div', {
      class: cell_bem('label')
    }, [this.label || this.slot.default]);
    const link = this.isLink ? h(components_junior_icon, {
      class: cell_bem('link'),
      attrs: {
        name: 'right'
      }
    }) : undefined;
    const meta = h('div', {
      class: cell_bem('meta')
    }, [this.slot.meta || h('span', {
      class: cell_bem('meta--text')
    }, this.meta)]);
    const value = h('div', {
      class: cell_bem('value')
    }, [this.slot.value || this.value, link]);
    return h('div', {
      class: cell_bem() + cell_bem({
        border: this.border,
        isLink: this.isLink
      })
    }, [icon, label, value, meta]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/navigation/index.scss
var junior_navigation = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/junior/navigation/index.js





const navigation_createNamespace = createNamespace('navigation');

const [navigation_createComponent, navigation_bem] = navigation_createNamespace;

/* harmony default export */ var components_junior_navigation = (navigation_createComponent({
  props: {
    title: String,
    back: Boolean,
    more: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    fixed: Boolean
  },
  mixins: [mixins_global],
  methods: {
    onLeftIconClick() {
      this.$emit('onLeftClick');

      if (this.back) {
        this.$router.go(-1);
      }
    },

    onRightIconClick() {
      this.$emit('onRightClick');
    }

  },

  render(h) {
    let iconNode, rightIconNode;

    if (this.back) {
      iconNode = h(components_junior_icon, {
        props: {
          name: 'left'
        }
      });
    } else if (this.slot.icon) {
      iconNode = this.slot.icon;
    }

    if (this.more) {
      rightIconNode = h(components_junior_icon, {
        props: {
          name: 'more'
        }
      });
    }

    if (this.slot.right) {
      rightIconNode = this.slot.right;
    }

    const icon = h('div', {
      class: navigation_bem('icon'),
      on: {
        click: this.onLeftIconClick
      }
    }, [iconNode]);
    const title = h('div', {
      class: navigation_bem('title')
    }, [this.slot.title || this.title]);
    const rightIcon = h('div', {
      class: navigation_bem('right-icon'),
      on: {
        click: this.onRightIconClick
      }
    }, [rightIconNode]);
    let navigation = h('div', {
      class: navigation_bem() + navigation_bem(this.type)
    }, [icon, title, rightIcon]);

    if (this.fixed) {
      navigation = h(junior_affix, {}, [navigation]);
    }

    return navigation;
  }

}));
// EXTERNAL MODULE: ./src/components/junior/overlay/index.scss
var overlay = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/junior/overlay/index.js



const overlay_createNamespace = createNamespace('overlay');

const [overlay_createComponent, overlay_bem] = overlay_createNamespace;
/* harmony default export */ var junior_overlay = (overlay_createComponent({
  props: {
    zIndex: {
      type: Number,
      default: 2000
    },
    value: Boolean
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        display: this.value ? 'block' : 'none'
      };
    }

  },
  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$emit('click');
    }

  },

  render(h) {
    return h('transition', {
      attrs: {
        name: 'glow-overlay-fade'
      }
    }, [h('div', {
      class: overlay_bem() + overlay_bem(this.value ? 'active' : 'unactive'),
      style: {
        zIndex: this.zIndex
      },
      directives: [{
        name: 'show',
        value: this.value
      }],
      on: {
        click: this.onClick
      }
    })]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/popup/index.scss
var popup = __webpack_require__(25);

// CONCATENATED MODULE: ./src/components/junior/popup/index.js






const popup_createNamespace = createNamespace('popup');

const [popup_createComponent, popup_bem] = popup_createNamespace;
let zIndex = 2000;
/* harmony default export */ var junior_popup = (popup_createComponent({
  props: {
    value: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    round: Boolean
  },
  mixins: [mixins_global],

  data() {
    return {
      zIndex
    };
  },

  methods: {
    mountOverlay() {
      if (this.overlayInstance) return;
      this.overlayInstance = mount(junior_overlay, {
        on: {
          click: () => {
            this.$emit('input', false);
            this.overlayInstance.value = false;
          }
        },
        props: {
          zIndex: 100
        }
      });
    },

    removeOverlay() {
      const el = this.overlayInstance.$el;
      el.parentNode.removeChild(el);
      this.overlayInstance = null;
    },

    updateOverlay() {
      this.overlayInstance.value = this.value;
    },

    setup() {
      zIndex++;
    }

  },

  mounted() {
    this.mountOverlay();
    this.setup();
  },

  watch: {
    value() {
      this.updateOverlay();
    }

  },

  render(h) {
    return h('transition', {
      attrs: {
        name: popup_bem(this.position)
      }
    }, [h('div', {
      class: popup_bem() + popup_bem([this.position, {
        round: this.round
      }]),
      ref: 'popup',
      style: {
        zIndex: this.zIndex
      },
      directives: [{
        name: 'show',
        value: this.value
      }]
    }, this.slot.default)]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/tabbar/index.scss
var tabbar = __webpack_require__(27);

// CONCATENATED MODULE: ./src/components/junior/tabbar/index.js



const tabbar_createNamespace = createNamespace('tabbar');

const [tabbar_createComponent, tabbar_bem] = tabbar_createNamespace;

/* harmony default export */ var junior_tabbar = (tabbar_createComponent({
  data() {
    return {
      childrenNode: [],
      tabbarStyle: {}
    };
  },

  props: {
    value: [String, Number],
    route: Boolean,
    bottom: Boolean,
    activeColor: String,
    color: String
  },
  methods: {
    onChange(index) {
      this.$emit('input', index);
      this.$emit('change', index);

      if (this.route) {
        this.$router.push(index);
      }
    }

  },

  mounted() {
    if (this.bottom) {
      this.tabbarStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0
      };
    }
  },

  mixins: [mixins_global],

  render(h) {
    return h('div', {
      class: tabbar_bem(),
      style: this.tabbarStyle
    }, this.slot.default);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/tabbar-item/index.scss
var tabbar_item = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/junior/tabbar-item/index.js





const tabbar_item_createNamespace = createNamespace('tabbar-item');

const [tabbar_item_createComponent, tabbar_item_bem] = tabbar_item_createNamespace;
/* harmony default export */ var junior_tabbar_item = (tabbar_item_createComponent({
  data() {
    return {
      index: undefined
    };
  },

  props: {
    icon: {
      type: String
    },
    name: {
      type: String
    }
  },
  mixins: [mixins_global],

  mounted() {
    const length = this.$parent.childrenNode.length;
    this.$parent.childrenNode.push(this);
    this.index = this.name || length;
  },

  computed: {
    isActive() {
      return this.$parent.route ? this.$route.path === this.index : this.$parent.value === this.index;
    }

  },
  components: {
    [components_junior_icon.name]: components_junior_icon
  },
  methods: {
    onClick() {
      if (this.isActive) return;
      this.$parent.onChange(this.index);
    }

  },

  render(h) {
    const iconNodes = [];
    const style = {};
    const acitveColor = this.$parent.activeColor;
    const color = this.$parent.color;

    if (this.isActive && acitveColor) {
      style.color = acitveColor;
    }

    if (!this.isActive && color) {
      style.color = acitveColor;
    }

    if (this.icon) {
      iconNodes[0] = h(components_junior_icon, {
        props: {
          name: this.icon
        }
      });
    }

    if (this.$slots.icon) {
      iconNodes[0] = this.$slots.icon;
    }

    return h('div', {
      class: tabbar_item_bem() + tabbar_item_bem({
        active: this.isActive
      }),
      on: {
        click: this.onClick.bind(this)
      },
      style
    }, [h('div', {
      class: tabbar_item_bem('icon')
    }, iconNodes), h('div', {
      class: tabbar_item_bem('text')
    }, this.$slots.default)]);
  }

}));
// EXTERNAL MODULE: ./src/components/junior/tag/index.scss
var tag = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/junior/tag/index.js



const tag_createNamespace = createNamespace('tag');

const [tag_createComponent, tag_bem] = tag_createNamespace;

/* harmony default export */ var junior_tag = (tag_createComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    color: String
  },
  mixin: [mixins_global],

  render(h) {
    return h('div', {
      class: tag_bem() + tag_bem(this.type),
      style: {
        backgroundColor: this.color
      }
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/field/index.scss
var field = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/senior/field/index.js



const field_createNamespace = createNamespace('field');

const [field_createComponent, field_bem] = field_createNamespace;

/* harmony default export */ var senior_field = (field_createComponent({
  props: {
    label: String,
    value: [String, Number],
    disabled: Boolean,
    password: Boolean,
    border: Boolean,
    alignRight: Boolean,
    required: Boolean,
    textarea: Boolean
  },
  computed: {
    placeholder() {
      return `请输入${this.label}`;
    }

  },
  methods: {
    onInput(e) {
      if (this._events.input) {
        this.$emit('input', e.target.value);
      } else {
        this.$refs.inputRef.value = this.value || '';
      }
    }

  },
  mixins: [mixins_global],

  render(h) {
    const inputProps = {
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled
    };

    if (this.password) {
      inputProps.type = 'password';
    }

    const label = h('div', {
      class: field_bem('label')
    }, this.slot.label || this.label);
    let button;

    if (this.slot.button) {
      button = h('div', {
        class: field_bem('button')
      }, [this.slot.button]);
    }

    return h('div', {
      class: field_bem() + field_bem({
        border: this.border,
        required: this.required
      })
    }, [label, h(this.textarea ? 'textarea' : 'input', {
      class: field_bem([this.textarea ? 'textarea' : 'input', {
        input__right: this.alignRight
      }]),
      attrs: inputProps,
      on: {
        input: this.onInput
      },
      ref: 'inputRef'
    }), button]);
  }

}));
// CONCATENATED MODULE: ./src/components/helper/dom/scroll.js
function scroll_isScroller(element) {
  return getComputedStyle(element).overflowY === 'scroll';
}
function scroll_traceScroller(element) {
  if (!element || element === document) return false;
  if (scroll_isScroller(element)) return element;
  return scroll_traceScroller(element.parentNode);
} // 广度优先搜索

function scroll_bfsScroller(element) {
  const queue = [];
  queue.push(element);

  while (queue.length > 0) {
    const cNode = queue.shift();
    const children = Array.from(cNode.childNodes).filter(item => item.nodeType === 1);

    if (children && children.length > 0) {
      queue.push(...children);
    }

    if (scroll_isScroller(cNode)) {
      return cNode;
    }
  }
}
function scroll_getScroller(element) {
  return scroll_bfsScroller(element) || scroll_traceScroller(element) || window;
}
function onTop(scroller) {
  if (scroller === window) {
    return window.pageYOffset === 0;
  } else {
    return scroller.scrollTop === 0;
  }
}
// CONCATENATED MODULE: ./src/components/helper/mixins/touch/index.js
const MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

function getHorizonDirection(deltaX) {
  // if (Math.abs(deltaX) < MIN_HORIZONDISTANCE) return "";
  return deltaX > 0 ? 'right' : 'left';
}

/* harmony default export */ var touch = (() => {
  return {
    data() {
      return {
        direction: '',
        horizonDirection: '',
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        offsetY: 0,
        touchContext: null
      };
    },

    methods: {
      touchStart(event) {
        this.resetTouchStatus();
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      },

      resetTouchStatus() {
        this.direction = '';
        this.horizonDirection = '';
        this.deltaX = 0;
        this.deltaY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
      },

      touchMove(event) {
        const touch = event.touches[0];
        this.deltaX = touch.clientX - this.startX;
        this.deltaY = touch.clientY - this.startY;
        this.offsetX = Math.abs(this.deltaX);
        this.offsetY = Math.abs(this.deltaY);
        this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
      },

      touchEnd() {
        this.horizonDirection = getHorizonDirection(this.deltaX);
      }

    } // mounted() {
    //   this.touchContext = isGlobal ? document : this.$el;
    //   const touchStart = this.touchStart.bind(this);
    //   const touchMove = this.touchMove.bind(this);
    //   const touchEnd = this.touchEnd.bind(this);
    //   this.touchContext.addEventListener("touchstart", touchStart, {
    //     passive: true
    //   });
    //   this.touchContext.addEventListener("touchmove", touchMove, {
    //     passive: true
    //   });
    //   this.touchContext.addEventListener("touchend", touchEnd, {
    //     passive: true
    //   });
    //   this.remove = () => {
    //     this.touchContext.removeEventListener("touchstart", touchStart);
    //     this.touchContext.removeEventListener("touchmove", touchMove);
    //     this.touchContext.removeEventListener("touchmove", touchEnd);
    //   };
    // },
    // destoryed() {
    //   this.remove && this.remove();
    // }

  };
});
// EXTERNAL MODULE: ./src/components/senior/load-more/index.scss
var load_more = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/senior/load-more/index.js







const load_more_createNamespace = createNamespace('load-more');

const [load_more_createComponent, load_more_bem] = load_more_createNamespace;
/* harmony default export */ var senior_load_more = (load_more_createComponent({
  props: {
    finished: {
      type: Boolean,
      default: false
    },
    finishedText: {
      type: String,
      default: '已没有更多数据'
    },
    valueText: {
      type: String,
      default: '正在加载更多'
    },
    offset: {
      type: Number,
      default: 30
    },
    value: Boolean,
    imediateCheck: Boolean
  },

  data() {
    return {
      isInit: true,
      error: false
    };
  },

  mixins: [touch(), bind_event(function (bind) {
    if (!this.scroller) {
      this.scroller = scroll_getScroller(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],

  mounted() {
    if (this.imediateCheck) {
      this.check();
    }
  },

  methods: {
    check() {
      this.$nextTick(() => {
        if (this.finished || this.value || this.error) {
          return;
        }

        const el = this.$el,
              scroller = this.scroller,
              offset = this.offset;
        let scrollerRect; // 如果是普通元素

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          // 如果是window 元素滚动
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }

        const scrollClientHeight = scrollerRect.bottom - scrollerRect.top;

        if (!scrollClientHeight || isHidden(el)) {
          return false;
        }

        const placeholderRect = this.$refs.placeholder.getBoundingClientRect();
        const isReactEdg = placeholderRect.bottom - scrollerRect.bottom < offset;

        if (isReactEdg) {
          this.$emit('input', true);
          this.$emit('load');
        }
      });
    }

  },

  render(h) {
    return h('div', {
      class: load_more_bem()
    }, [this.$slots.default, h('div', {
      class: load_more_bem('holder'),
      direcitives: [{
        name: 'show',
        value: this.value
      }]
    }, [h('div', {
      class: load_more_bem('holder-text'),
      ref: 'placeholder'
    }, [this.finished ? this.finishedText : this.valueText])])]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/pull-refresh/index.scss
var pull_refresh = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/senior/loading/index.scss
var loading = __webpack_require__(39);

// CONCATENATED MODULE: ./src/components/senior/loading/index.js
// 导入组件工具
 // 导入样式

 // 柯里化获取命名函数数组

const loading_createNamespace = createNamespace('loading'); // 提取命名函数数组


const [loading_createComponent, loading_bem] = loading_createNamespace;
/* harmony default export */ var senior_loading = (loading_createComponent({
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
    };
  },

  mounted() {
    this.getInheritWidth();
  },

  methods: {
    getInheritWidth() {
      if (this.inherit) {
        this.$nextTick(() => {
          if (this.$el.parentNode) {
            this.width = parseInt(window.getComputedStyle(this.$el.parentNode).width);
          } else {
            this.width = document.documentElement.clientWidth || document.body.clientWidth;
          }

          console.log(this.width);
        });
      }
    }

  },

  render(h) {
    // 提取props
    const {
      title,
      type,
      duration,
      backgroundColor,
      color
    } = this; // 定义临时变量

    let text, shape; // 创建text节点

    if (isDef(title)) {
      text = h('div', {
        class: loading_bem('text')
      }, title);
    } // 获取width


    const _width = this.width; // 获取动画duration

    const _duration = parseInt(duration);

    if (type === 'round') {
      // 创建圆形加载节点
      const _delay = duration - 500 + 'ms';

      const _holderWidth = _width / 2 + 5;

      shape = [h('div', {
        class: loading_bem('round'),
        style: {
          width: _width + 'px',
          height: _width + 'px',
          color
        }
      }), h('div', {
        class: loading_bem('round__before'),
        style: {
          backgroundColor,
          animationDelay: _delay,
          animationDuration: _duration + 'ms',
          width: _holderWidth + 'px',
          height: _holderWidth * 2 + 'px',
          borderRadius: `${_holderWidth}px 0 0 ${_holderWidth}px`,
          transformOrigin: `${_holderWidth}px ${_holderWidth}px`
        }
      }), h('div', {
        class: loading_bem('round__after'),
        style: {
          backgroundColor,
          animationDuration: _duration + 'ms',
          width: _holderWidth + 'px',
          height: _holderWidth * 2 + 'px',
          borderRadius: `0 ${_holderWidth}px ${_holderWidth}px 0`
        }
      })];
    } else if (type === 'bar') {
      // 创建条状加载节点
      const {
        barNum,
        barDistance
      } = this;
      shape = [];

      const _rectTotalWidth = _width - (barNum + 1) * barDistance;

      for (let index = 0; index < barNum; index++) {
        shape.push(h('div', {
          class: loading_bem('rect'),
          style: {
            margin: index === 0 ? `0 ${barDistance}px` : `0 ${barDistance}px 0 0`,
            width: _rectTotalWidth / barNum + 'px',
            height: _width + 'px',
            animationDuration: _duration + 'ms',
            animationDelay: -1 * _duration + index * 100 + 'ms'
          }
        }));
      }
    } // 返回渲染所需vnode


    return h('div', {
      class: loading_bem(),
      style: {
        width: _width + 'px'
      }
    }, [shape, text]);
  }

}));
// CONCATENATED MODULE: ./src/components/senior/pull-refresh/index.js
// 导入组件工具
 // 导入获取滚动对象方法

 // 导入触摸混合函数

 // 导入全局混合对象

 // 导入绑定时间混合函数

 // 导入样式

 // 导入加载中组件

 // 柯里化获取命名函数数组

const pull_refresh_createNamespace = createNamespace('pull-refresh'); // 提取命名函数数组


const [pull_refresh_createComponent, pull_refresh_bem] = pull_refresh_createNamespace; // 下拉中

const PULL = Symbol(); // 回弹

const REBOUNCE = Symbol(); // 加载中

const LOADING = Symbol(); // 通过数据做出相应的动作 -> 通过数据将组件状态改变，然后再执行相应动作
// 这样做的好处在于代码的可读性提高

/* harmony default export */ var senior_pull_refresh = (pull_refresh_createComponent({
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
    };
  },

  mixins: [mixins_global, touch(), bind_event(function (bind) {
    if (!this.scroller) {
      this.scroller = scroll_getScroller(this.$el);
    }

    bind(this.$el, 'touchstart', e => {
      document.body.style.overscrollBehaviorY = 'contain';
      this.touchStart(e);
    });
    bind(this.$el, 'touchmove', e => {
      if (this.status === LOADING || this.deltaY < 0 || !onTop(this.scroller)) {
        return;
      } // Please remove e.preventDefault(), because event.cancelable of touchmove is false


      if (e.cancelable) {
        e.preventDefault();
      }

      this.touchMove(e);
    });
    bind(this.$el, 'touchend', e => {
      this.onTouchEnd(e);
      document.body.style.overscrollBehaviorY = null;
    });
  })],
  watch: {
    status(value) {
      if (value === LOADING) {
        this._onLoading();
      } else if (value === REBOUNCE) {
        this._onRebouce();
      }
    },

    deltaY() {
      if (this.status === LOADING || !onTop(this.scroller)) return;
      this.status = PULL;

      this._onPull();
    },

    value(val) {
      if (!val) {
        this.status = REBOUNCE;
      }
    },

    direction() {}

  },
  methods: {
    _setHeight(height) {
      let _height;

      if (height === 0) {
        _height = 0;
      } else {
        _height = height + 'px';
      }

      this.trackStyle = {
        transform: `translate3d(0,${_height},0)`
      };
    },

    _onPull() {
      if (this.deltaY > 0) {
        if (this.deltaY <= this.distance) {
          this.onTransition = false;

          this._setHeight(this.deltaY);
        }
      } else {
        this._setHeight(0);
      }
    },

    _onLoading() {
      this.onTransition = true;

      this._setHeight(50);

      this.$emit('input', true);
      this.$emit('load');
    },

    _onRebouce() {
      this.onTransition = true;

      this._setHeight(0);
    },

    onTouchEnd() {
      if (this.status === LOADING || !onTop(this.scroller)) return;

      if (this.deltaY > Math.floor(this.distance / 2)) {
        this.status = LOADING;
      } else {
        this.status = REBOUNCE;
      }
    }

  },

  render(h) {
    const trackLoading = this.status === LOADING ? h('div', {
      class: pull_refresh_bem('track--loadingWrapper')
    }, [h(senior_loading, {
      props: {
        backgroundColor: '#f9f9f9',
        inherit: true
      }
    })]) : h();
    const trackText = h('div', {
      class: pull_refresh_bem('track--text'),
      directives: [{
        name: 'show',
        value: this.status === PULL
      }]
    }, '松手加载更多');
    const header = h('div', {
      class: pull_refresh_bem(['track--header'], {
        'track--header__loading': this.status === LOADING
      })
    }, [trackLoading, trackText]);
    const track = h('div', {
      class: pull_refresh_bem(['track']),
      style: { ...this.trackStyle,
        transitionDuration: this.onTransition ? '300ms' : null
      }
    }, [header, this.slot.default]);
    return h('div', {
      class: pull_refresh_bem()
    }, [track]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/radio/index.scss
var senior_radio = __webpack_require__(41);

// CONCATENATED MODULE: ./src/components/senior/radio/index.js



const radio_createNamespace = createNamespace('radio');

const [radio_createComponent, radio_bem] = radio_createNamespace;

/* harmony default export */ var components_senior_radio = (radio_createComponent({
  props: {
    name: [String, Number]
  },
  mixin: [mixins_global],
  methods: {
    onClickHandler() {
      this.$parent.onChange(this.index);
    },

    setup() {
      const currentIndex = this.$parent.childrenList.length;

      if (typeof this.index === 'undefined') {
        this.index = currentIndex;
      }

      this.$parent.childrenList.push(this);
    }

  },

  data() {
    return {
      index: this.name
    };
  },

  computed: {
    isSelect() {
      return this.$parent.value === this.index;
    }

  },

  mounted() {
    this.setup();
  },

  render(h) {
    return h('div', {
      class: radio_bem() + radio_bem(this.isSelect ? 'selected' : 'unselected'),
      on: {
        click: this.onClickHandler.bind(this)
      }
    }, [h('div', {
      class: radio_bem('icon')
    }), this.$slots.default]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/radio-group/index.scss
var radio_group = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/senior/radio-group/index.js



const radio_group_createNamespace = createNamespace('radio-group');

const [radio_group_createComponent, radio_group_bem] = radio_group_createNamespace;

/* harmony default export */ var senior_radio_group = (radio_group_createComponent({
  props: {
    value: {
      type: [String, Number]
    }
  },
  mixin: [mixins_global],

  data() {
    return {
      childrenList: []
    };
  },

  methods: {
    onChange(name) {
      if (this.value === name) return;
      this.$emit('input', name);
    }

  },

  render(h) {
    return h('div', {
      class: radio_group_bem()
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/search/index.scss
var search = __webpack_require__(45);

// CONCATENATED MODULE: ./src/components/senior/search/index.js


const search_createNamespace = createNamespace('search');

const [search_createComponent, search_bem] = search_createNamespace;

/* harmony default export */ var senior_search = (search_createComponent({
  props: {},

  data() {
    return {};
  },

  methods: {},

  render(h) {
    return h('div', {
      class: search_bem()
    }, [h('div', {
      class: search_bem('input')
    }, [h('input')]), h('div', {
      class: search_bem('button')
    }, '搜索')]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/stepper/index.scss
var stepper = __webpack_require__(47);

// CONCATENATED MODULE: ./src/components/senior/stepper/index.js




const stepper_createNamespace = createNamespace('stepper');

const [stepper_createComponent, stepper_bem] = stepper_createNamespace;
/* harmony default export */ var senior_stepper = (stepper_createComponent({
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 200
    },
    min: {
      type: Number,
      default: 0
    },
    zeroHide: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  methods: {
    onIncrease() {
      if (this.disabled) return;
      const result = this.value + 1;
      if (result > this.max) return;
      this.$emit('input', this.value + 1);
    },

    onDecrease() {
      if (this.disabled) return;
      const result = this.value - 1;
      if (result < this.min) return;
      this.$emit('input', this.value - 1);
    }

  },

  render(h) {
    const isShow = !isDef(this.value) || this.value !== 0 || !this.zeroHide;
    const increase = h('div', {
      class: stepper_bem('increase'),
      on: {
        click: this.onIncrease
      }
    }, [h(components_junior_icon, {
      props: {
        name: 'increase'
      }
    })]);
    const decrease = h('div', {
      class: stepper_bem('decrease'),
      style: {
        visibility: isShow ? 'visible' : 'hidden'
      },
      on: {
        click: this.onDecrease
      }
    }, [h(components_junior_icon, {
      props: {
        name: 'decrease'
      }
    })]);
    const num = h('div', {
      class: stepper_bem('num'),
      style: {
        visibility: isShow ? 'visible' : 'hidden'
      }
    }, this.value);
    return h('div', {
      class: stepper_bem() + stepper_bem({
        disabled: this.disabled
      })
    }, [decrease, num, increase]);
  }

}));
// CONCATENATED MODULE: ./src/components/helper/mixins/viewport/index.js

/* harmony default export */ var viewport = ({
  data() {
    return {
      clientWidth: 0
    };
  },

  mounted() {
    if (this.$el) {
      this.clientWidth = getClientRect(this.$el).width;
    }

    resize(() => this.clientWidth = getClientRect(this.$el).width);
  }

});
// EXTERNAL MODULE: ./src/components/senior/swipe/index.scss
var swipe = __webpack_require__(49);

// CONCATENATED MODULE: ./src/components/senior/swipe/index.js







const swipe_createNamespace = createNamespace('swipe');

const [swipe_createComponent, swipe_bem] = swipe_createNamespace;
/* harmony default export */ var senior_swipe = (swipe_createComponent({
  props: {
    duration: {
      type: [Number, String],
      default: 200
    },
    autoplay: {
      type: [Number, String]
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
      isSwiping: true,
      // 是否取消过度效果，在触摸时和瞬移时用到
      isRight: true,
      moveX: 0,
      swipes: []
    };
  },

  computed: {
    count() {
      return this.swipes.length;
    },

    containerWidth() {
      return this.clientWidth * this.count;
    },

    computedStyle() {
      return {
        width: `${this.containerWidth}px`,
        display: 'flex',
        transitionDuration: this.isSwiping ? '0ms' : `${this.duration}ms`,
        transform: `translateX(${this.moveX}px)`
      };
    },

    firstSwipe() {
      return this.swipes[0];
    },

    lastSwipe() {
      return this.swipes[this.swipes.length - 1];
    },

    minDistant() {
      return Math.abs(this.clientWidth / 4);
    },

    onFirst() {
      return this.active === 0;
    },

    onLast() {
      return this.active === this.count - 1;
    }

  },
  methods: {
    autoPlay() {
      if (this.count === 1 || this.isSwiping || !this.autoplay) return;
      this.clear();
      this.timer = setTimeout(() => {
        this.correctPosition(); // 在位置矫正后的第二帧才执行下一页的请求

        ra2(() => {
          this.isSwiping = false;

          if (!this.loop) {
            this.isRight = this.onLast ? false : true;
            this.isRight ? this.next() : this.pre();
          } else {
            this.next();
          }

          this.autoPlay();
        });
      }, this.autoplay);
    },

    clear() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },

    correctPosition() {
      this.isSwiping = true;
      this.swipes.forEach(item => item.offset = 0);

      if (this.active > this.count - 1) {
        this.moveX = 0;
        this.active = 0;
      } else if (this.active < 0) {
        this.moveX = (this.count - 1) * this.clientWidth * -1;
        this.active = this.count - 1;
      }
    },

    getIndicator() {
      if (!this.showIndicator) return;
      return this.swipes.map((item, index) => {
        const isActive = index === 0 && this.active === this.count || this.active === -1 && index === this.count - 1 || this.active === index;
        return this.$createElement('div', {
          class: swipe_bem(['indicator', {
            'indicator--active': isActive
          }])
        });
      });
    },

    next() {
      this.correctPosition();
      this.isSwiping = false;

      if (this.onLast) {
        this.moveFirstElement();
        this.moveX = -1 * this.containerWidth;
      } else {
        this.moveX = (this.active + 1) * this.clientWidth * -1;
      }

      this.active++;
    },

    moveLastElement() {
      this.lastSwipe.offset = this.containerWidth * -1;
    },

    moveFirstElement() {
      this.firstSwipe.offset = this.containerWidth;
    },

    onTouchStart() {
      if (this.count === 1) return;
      this.isSwiping = true;
      this.clear();
      this.correctPosition();
      this.originalTranslateX = this.moveX;
    },

    onTouchMove() {
      if (this.count === 1) return;
      const distance = this.originalTranslateX + this.deltaX;

      if (this.onLast && !this.loop && this.deltaX < 0) {
        return this.resetTouchStatus();
      }

      if (this.count >= 3) {
        if (this.onLast) {
          this.moveFirstElement();
        }

        if (this.onFirst) {
          this.moveLastElement();
        }
      } else if (this.count === 2) {
        if (this.onFirst) {
          if (distance > 0) {
            this.moveLastElement();
          } else {
            this.correctPosition();
          }
        } else {
          if (distance < -1 * this.clientWidth) {
            this.moveFirstElement();
          } else {
            this.correctPosition();
          }
        }
      }

      this.moveX = distance;
    },

    onTouchEnd() {
      if (this.count === 1) return;
      this.isSwiping = false;

      if (this.offsetX < this.minDistant) {
        this.moveX = this.originalTranslateX;
      } else {
        ra2(() => {
          this.horizonDirection === 'left' ? this.next() : this.pre();
        });
      }

      this.autoPlay();
    },

    pre() {
      this.correctPosition();
      this.isSwiping = false;

      if (this.onFirst) {
        this.moveLastElement();
        this.moveX = this.clientWidth;
      } else {
        this.moveX = (this.active - 1) * this.clientWidth * -1;
      }

      this.active--;
    },

    setup() {
      this.isSwiping = true;
      ra2(() => {
        this.isSwiping = false;
        this.autoPlay();
      });
    }

  },
  mixins: [touch(), viewport, bind_event(function (bind) {
    bind(this.$el, 'touchstart', this.touchStart);
    bind(this.$el, 'touchmove', this.touchMove);
    bind(this.$el, 'touchend', this.touchEnd);
    bind(this.$el, 'touchstart', this.onTouchStart);
    bind(this.$el, 'touchmove', this.onTouchMove);
    bind(this.$el, 'touchend', this.onTouchEnd);
  })],
  watch: {
    count() {
      this.setup();
    }

  },

  mounted() {
    this.setup();
  },

  destoryed() {
    this.clear();
  },

  render(h) {
    return h('div', {
      class: swipe_bem()
    }, [h('div', {
      class: swipe_bem('content'),
      style: this.computedStyle
    }, this.$slots.default), h('div', {
      class: swipe_bem('bottom')
    }, this.getIndicator())]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/swipe-item/index.scss
var swipe_item = __webpack_require__(51);

// CONCATENATED MODULE: ./src/components/senior/swipe-item/index.js


const swipe_item_createNamespace = createNamespace('swipe-item');

const [swipe_item_createComponent, swipe_item_bem] = swipe_item_createNamespace;

/* harmony default export */ var senior_swipe_item = (swipe_item_createComponent({
  data() {
    return {
      offset: 0
    };
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  computed: {
    computedStyle() {
      return {
        width: this.$parent.clientWidth + 'px',
        transform: `translateX(${this.offset}px)`
      };
    }

  },

  destory() {
    this.$parent.splice(this.$parent.swipes.indexOf(this), 1);
  },

  render(h) {
    return h('div', {
      class: swipe_item_bem(),
      style: this.computedStyle
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/tab/index.scss
var tab = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/senior/tab/index.js






const tab_createNamespace = createNamespace('tab');

const [tab_createComponent, tab_bem] = tab_createNamespace;
/* harmony default export */ var senior_tab = (tab_createComponent({
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
    };
  },

  computed: {
    count() {
      return this.childrenNodes.length;
    },

    active() {
      return this.childrenNodes.findIndex(node => node.index === this.value);
    }

  },
  mixins: [touch(), bind_event(function (bind) {
    if (this.touchable) {
      bind(window, 'touchstart', this.touchStart);
      bind(window, 'touchmove', this.touchMove);
      bind(window, 'touchend', this.touchEnd);
    }

    if (this.fixed) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(this.scroller, 'scroll', this.check);
    }
  })],
  methods: {
    check() {
      this.$nextTick(() => {
        const el = this.$el;
        const scrollerRect = el.getBoundingClientRect();
        const wrapStyle = {};

        if (scrollerRect.top < 0) {
          wrapStyle.position = 'fixed';
          wrapStyle.top = 0;
          wrapStyle.zIndex = 1000;
        }

        wrapStyle.overflowX = this.touchable ? 'hidden' : 'scroll';
        this.wrapStyle = wrapStyle;
      });
    },

    initialize() {
      this.$nextTick(() => {
        if (this.active > -1) {
          const el = this.activeLabelVNode.elm;

          if (el) {
            const elWidth = parseInt(getComputedStyle(el).width),
                  elLeft = this.active * elWidth + 0.5 * elWidth - this.rate / 2 * elWidth;
            const lineStyle = {
              width: `${this.rate * elWidth}px`,
              transform: `translateX(${elLeft}px)`
            };

            if (this.inited) {
              lineStyle.transitionDuration = `${this.duration}s`;
            }

            this.lineStyle = lineStyle;

            if (this.scrollspy && this.count > this.scrollNum) {
              const listWidth = parseInt(getComputedStyle(this.$el).width),
                    offsetCenter = Math.floor((listWidth - elWidth) / 2),
                    leftDistance = this.active * elWidth,
                    maxScrollLeft = this.count * elWidth - Math.floor(this.count * elWidth / listWidth) * listWidth,
                    nextScrollLeft = leftDistance - offsetCenter;
              this.scrollTo(nextScrollLeft < 0 ? 0 : nextScrollLeft > maxScrollLeft ? maxScrollLeft : nextScrollLeft);
            }
          }
        }
      });
    },

    getLabels() {
      const _h = this.$createElement;
      return this.childrenNodes.map((node, index) => {
        const _name = node.name || index,
              isActive = this.value === _name,
              _vnode = _h('div', {
          class: tab_bem(['label--item', {
            'label--item__active': isActive
          }]),
          style: this.labelStyle,
          on: {
            click: e => {
              e.stopPropagation();
              this.$emit('input', _name);
            }
          }
        }, node.title);

        if (isActive) {
          this.activeLabelVNode = _vnode;
        }

        return _vnode;
      });
    },

    scrollTo(x, offset = 5) {
      const labelList = this.$refs.labelList,
            currentScrollLeft = labelList.scrollLeft;

      if (currentScrollLeft > x) {
        if (currentScrollLeft - offset < x) {
          return labelList.scrollLeft = x;
        }

        ra1(() => {
          labelList.scrollLeft -= offset;
          this.scrollTo(x, offset);
        });
      } else {
        if (currentScrollLeft + offset > x) {
          return labelList.scrollLeft = x;
        }

        ra1(() => {
          labelList.scrollLeft += offset;
          this.scrollTo(x, offset);
        });
      }
    },

    setup() {
      if (this.scrollspy && this.count > this.scrollNum) {
        this.labelStyle.flexBasis = '22%';
      }

      ra2(() => {
        this.labelStyle.transitionDuration = `${this.duration - 0.1}s`;
      });
      this.$nextTick(() => {
        this.inited = true;
      });
    }

  },
  watch: {
    value: {
      handler() {
        this.initialize();
      }

    },
    horizonDirection: function (val) {
      if (!this.touchable) return;

      if (this.offsetX > 20) {
        if (val === 'left') {
          if (this.active === this.count - 1) return;
          this.$emit('input', this.childrenNodes[this.active + 1].index);
        } else if (val === 'right') {
          if (this.active === 0) return;
          this.$emit('input', this.childrenNodes[this.active - 1].index);
        }
      }
    },

    active() {
      if (this.animatable) {
        if (this.inited) {
          this.mainStyle.transitionDuration = `${this.duration}s`;
        }
      }

      this.mainStyle.transform = `translate3d(-${this.active * 100}%,0px,0px)`;
    }

  },

  mounted() {
    this.initialize();
    this.setup();
  },

  render(h) {
    const labels = this.getLabels();
    const tabLine = h('div', {
      class: tab_bem('line'),
      style: this.lineStyle
    });
    return h('div', {
      class: tab_bem()
    }, [h('div', {
      class: tab_bem('label'),
      ref: 'labelList',
      style: this.wrapStyle
    }, [labels, tabLine]), h('div', {
      class: tab_bem('main'),
      style: this.mainStyle
    }, this.$slots.default)]);
  }

}));
// EXTERNAL MODULE: ./src/components/senior/tab-panel/index.scss
var tab_panel = __webpack_require__(55);

// CONCATENATED MODULE: ./src/components/senior/tab-panel/index.js



const tab_panel_createNamespace = createNamespace('tab-panel');

const [tab_panel_createComponent, tab_panel_bem] = tab_panel_createNamespace;
/* harmony default export */ var senior_tab_panel = (tab_panel_createComponent({
  props: {
    name: String,
    title: String
  },

  data() {
    return {
      index: undefined,
      inited: false
    };
  },

  computed: {
    isActive() {
      return this.index === this.$parent.value;
    }

  },
  watch: {
    isActive(val) {
      this.inited = this.inited || val;
    }

  },

  mounted() {
    this.index = this.name || this.$parent.childrenNodes.length;
    this.$parent.childrenNodes.push(this);
  },

  render(h) {
    const shouldRender = this.inited || !this.$parent.lazyRender;
    const Content = shouldRender ? this.$slots.default : h();
    return h('div', {
      class: tab_panel_bem() + tab_panel_bem({
        inactive: !this.isActive
      })
    }, [Content]);
  }

}));
// CONCATENATED MODULE: ./src/components/index.js











 // import Loading from "./senior/loading";











const version = '0.0.0';

function components_install(Vue) {
  const components = [junior_affix, components_junior_button, junior_cell, components_junior_icon, components_junior_navigation, junior_overlay, junior_popup, junior_tabbar, junior_tabbar_item, junior_tag, senior_field, senior_load_more, // Loading,
  senior_pull_refresh, components_senior_radio, senior_radio_group, senior_search, senior_stepper, senior_swipe, senior_swipe_item, senior_tab, senior_tab_panel, senior_loading];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}


// CONCATENATED MODULE: ./src/index.js




vue_runtime_esm["a" /* default */].config.productionTip = false;



components_install(vue_runtime_esm["a" /* default */]);
new vue_runtime_esm["a" /* default */]({
  router: router,
  render: h => h(App)
}).$mount('#app');
eruda_default.a.init();

/***/ })
/******/ ]);