(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/tabbar/index.vue?vue&type=template&id=b91e4bae&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { fixed: "", back: "", type: "primary", title: "工具栏" }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "gl-tabbar",
        {
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _c("gl-tabbar-item", { attrs: { icon: "home" } }, [_vm._v("首页")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "sort" } }, [_vm._v("分类")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "cart" } }, [_vm._v("购物车")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "my" } }, [_vm._v("我的")])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "gl-tabbar",
        {
          attrs: { activeColor: "#66ccff" },
          model: {
            value: _vm.activeSecond,
            callback: function($$v) {
              _vm.activeSecond = $$v
            },
            expression: "activeSecond"
          }
        },
        [
          _c("gl-tabbar-item", { attrs: { icon: "home" } }, [_vm._v("首页")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "sort" } }, [_vm._v("分类")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "cart" } }, [_vm._v("购物车")]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { icon: "my" } }, [_vm._v("我的")])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "gl-tabbar",
        {
          attrs: { activeColor: "#66ccff" },
          on: { change: _vm.onTabbarChange },
          model: {
            value: _vm.activeThird,
            callback: function($$v) {
              _vm.activeThird = $$v
            },
            expression: "activeThird"
          }
        },
        [
          _c("gl-tabbar-item", { attrs: { name: "home", icon: "home" } }, [
            _vm._v("首页")
          ]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { name: "sort", icon: "sort" } }, [
            _vm._v("分类")
          ]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { name: "cart", icon: "cart" } }, [
            _vm._v("购物车")
          ]),
          _vm._v(" "),
          _c("gl-tabbar-item", { attrs: { name: "user", icon: "my" } }, [
            _vm._v("我的")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c(
        "gl-tabbar",
        {
          attrs: { activeColor: "#66ccff", route: "" },
          on: { change: _vm.onTabbarChange }
        },
        [
          _c("gl-tabbar-item", { attrs: { name: "/", icon: "home" } }, [
            _vm._v("首页")
          ]),
          _vm._v(" "),
          _c(
            "gl-tabbar-item",
            { attrs: { name: "/base/tabbar", icon: "my" } },
            [_vm._v("工具栏")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("基础用法")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("颜色设置")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("使用名称")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("路由控制")
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/base-view/tabbar/index.vue?vue&type=template&id=b91e4bae&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/tabbar/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tabbarvue_type_script_lang_js_ = ({
  data() {
    return {
      active: 0,
      activeSecond: 0,
      activeThird: "home"
    };
  },

  methods: {
    onTabbarChange(name) {
      console.log(name);
    }

  }
});
// CONCATENATED MODULE: ./src/views/base-view/tabbar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_view_tabbarvue_type_script_lang_js_ = (tabbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/base-view/tabbar/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_view_tabbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b91e4bae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/base-view/tabbar/index.vue"
/* harmony default export */ var tabbar = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);