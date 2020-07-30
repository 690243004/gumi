(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/navigation/index.vue?vue&type=template&id=ecb3ef42&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "导航栏" }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("gl-navigation", { attrs: { back: "", title: "默认类型" } }),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("gl-navigation", { attrs: { type: "primary", title: "主要类型" } }),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "返回" }
      }),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "右插槽" },
        scopedSlots: _vm._u([
          {
            key: "right",
            fn: function() {
              return [_c("gl-icon", { attrs: { name: "gl-icongengduo" } })]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("gl-navigation", {
        attrs: { fixed: "", back: "", type: "primary", title: "使用固钉" }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "component-display",
        staticStyle: { height: "1000px" }
      })
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
        _vm._v("默认类型")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("主要类型")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [_vm._v("返回")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("使用插槽")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [_vm._v("固钉")])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/base-view/navigation/index.vue?vue&type=template&id=ecb3ef42&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/navigation/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var navigationvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/views/base-view/navigation/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_view_navigationvue_type_script_lang_js_ = (navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/base-view/navigation/index.vue?vue&type=style&index=0&id=ecb3ef42&lang=scss&scoped=true&
var navigationvue_type_style_index_0_id_ecb3ef42_lang_scss_scoped_true_ = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/base-view/navigation/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_view_navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ecb3ef42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/base-view/navigation/index.vue"
/* harmony default export */ var navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(73);

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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ecb3ef42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ecb3ef42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ecb3ef42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ecb3ef42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component-display--title[data-v-ecb3ef42]{margin-bottom:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);