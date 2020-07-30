(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/popup/index.vue?vue&type=template&id=f6a31ad2&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "弹出框" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("基础用法")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [
            _c(
              "gl-button",
              {
                on: {
                  click: function($event) {
                    return _vm.onClick("bottom")
                  }
                }
              },
              [_vm._v("点击弹出")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("不同位置弹出")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "component-display--content component-display--button__type"
          },
          [
            _c(
              "gl-button",
              {
                on: {
                  click: function($event) {
                    return _vm.onClick("top")
                  }
                }
              },
              [_vm._v("上方")]
            ),
            _vm._v(" "),
            _c(
              "gl-button",
              {
                on: {
                  click: function($event) {
                    return _vm.onClick("left")
                  }
                }
              },
              [_vm._v("左侧")]
            ),
            _vm._v(" "),
            _c(
              "gl-button",
              {
                on: {
                  click: function($event) {
                    return _vm.onClick("right")
                  }
                }
              },
              [_vm._v("右侧")]
            ),
            _vm._v(" "),
            _c(
              "gl-button",
              {
                on: {
                  click: function($event) {
                    return _vm.onClick("bottom")
                  }
                }
              },
              [_vm._v("下方")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("gl-popup", {
        attrs: { position: _vm.position },
        model: {
          value: _vm.isShowPopup,
          callback: function($$v) {
            _vm.isShowPopup = $$v
          },
          expression: "isShowPopup"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/base-view/popup/index.vue?vue&type=template&id=f6a31ad2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/base-view/popup/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var popupvue_type_script_lang_js_ = ({
  data() {
    return {
      isShowPopup: false,
      position: "bottom"
    };
  },

  methods: {
    onClick(position) {
      this.position = position;
      this.isShowPopup = true;
    }

  }
});
// CONCATENATED MODULE: ./src/views/base-view/popup/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_view_popupvue_type_script_lang_js_ = (popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/base-view/popup/index.vue?vue&type=style&index=0&id=f6a31ad2&lang=scss&scoped=true&
var popupvue_type_style_index_0_id_f6a31ad2_lang_scss_scoped_true_ = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/base-view/popup/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_view_popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f6a31ad2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/base-view/popup/index.vue"
/* harmony default export */ var popup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(77);

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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6a31ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6a31ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6a31ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6a31ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component-display--title[data-v-f6a31ad2]{margin-bottom:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);