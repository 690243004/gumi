(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(83);

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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d972168_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d972168_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d972168_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d972168_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".inherit-parent[data-v-2d972168]{width:40vw}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/loading/index.vue?vue&type=template&id=2d972168&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "加载中" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("默认类型")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [_c("gl-loading", { attrs: { backgroundColor: "#f9f9f9" } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("条状类型")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [_c("gl-loading", { attrs: { type: "bar" } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("设置文字")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [_c("gl-loading", { attrs: { type: "bar", title: "加载中" } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("设置颜色")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [
            _c("gl-loading", {
              attrs: { backgroundColor: "#f9f9f9", color: "#66ccff" }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("设置大小")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [
            _c("gl-loading", {
              attrs: {
                backgroundColor: "#f9f9f9",
                color: "#66ccff",
                size: "80"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("\n      继承父节点的宽度(用于自适应布局)\n    ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content inherit-parent" },
          [
            _c("gl-loading", {
              attrs: {
                backgroundColor: "#f9f9f9",
                color: "#66ccff",
                inherit: "",
                size: "80",
                title: "width:150px"
              }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/senior-view/loading/index.vue?vue&type=template&id=2d972168&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/loading/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  data() {
    return {
      strokeLength: 0
    };
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/loading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/senior-view/loading/index.vue?vue&type=style&index=0&id=2d972168&lang=scss&scoped=true&
var loadingvue_type_style_index_0_id_2d972168_lang_scss_scoped_true_ = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/loading/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2d972168",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/loading/index.vue"
/* harmony default export */ var loading = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);