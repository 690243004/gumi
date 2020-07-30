(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/tab/index.vue?vue&type=template&id=fb3955fe&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "标签栏" }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "gl-tab",
        {
          model: {
            value: _vm.active1,
            callback: function($$v) {
              _vm.active1 = $$v
            },
            expression: "active1"
          }
        },
        [
          _c("gl-tab-panel", { attrs: { title: "标签栏1" } }, [
            _c("div", { staticClass: "content1" }, [_vm._v("内容1")])
          ]),
          _vm._v(" "),
          _c("gl-tab-panel", { attrs: { title: "标签栏2" } }, [
            _c("div", { staticClass: "content2" }, [_vm._v("内容2")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "gl-tab",
        {
          attrs: { animatable: "" },
          model: {
            value: _vm.active2,
            callback: function($$v) {
              _vm.active2 = $$v
            },
            expression: "active2"
          }
        },
        [
          _c("gl-tab-panel", { attrs: { title: "标签栏1" } }, [
            _c("div", { staticClass: "content1" }, [_vm._v("内容1")])
          ]),
          _vm._v(" "),
          _c("gl-tab-panel", { attrs: { title: "标签栏2" } }, [
            _c("div", { staticClass: "content2" }, [_vm._v("内容2")])
          ])
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
        _vm._v("视图过度")
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/senior-view/tab/index.vue?vue&type=template&id=fb3955fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/tab/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var tabvue_type_script_lang_js_ = ({
  data() {
    return {
      active1: 0,
      active2: 0
    };
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/tab/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_tabvue_type_script_lang_js_ = (tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/senior-view/tab/index.vue?vue&type=style&index=0&id=fb3955fe&lang=scss&scoped=true&
var tabvue_type_style_index_0_id_fb3955fe_lang_scss_scoped_true_ = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/tab/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fb3955fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/tab/index.vue"
/* harmony default export */ var tab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(85);

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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb3955fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb3955fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb3955fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb3955fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".center[data-v-fb3955fe],.content1[data-v-fb3955fe],.content2[data-v-fb3955fe]{display:flex;justify-content:center;align-items:center}.content1[data-v-fb3955fe],.content2[data-v-fb3955fe]{color:#fff;height:26.66667vw}.content1[data-v-fb3955fe]{background:#f7c6d0}.content2[data-v-fb3955fe]{background:#72d6e8}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);