(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/radio/index.vue?vue&type=template&id=f455fcb2&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "单选框" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("基本使用")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [
            _c(
              "gl-radio-group",
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
                _c("gl-radio", { attrs: { name: 1 } }, [_vm._v("选项 1")]),
                _vm._v(" "),
                _c("gl-radio", { attrs: { name: 2 } }, [_vm._v("选项 2")])
              ],
              1
            )
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


// CONCATENATED MODULE: ./src/views/senior-view/radio/index.vue?vue&type=template&id=f455fcb2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/radio/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  data() {
    return {
      active: 1
    };
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/radio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/radio/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_radiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f455fcb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/radio/index.vue"
/* harmony default export */ var senior_view_radio = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);