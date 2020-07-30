(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/stepper/index.vue?vue&type=template&id=6e12b0bd&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { fixed: "", back: "", type: "primary", title: "步进器" }
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
            _c("gl-stepper", {
              model: {
                value: _vm.num,
                callback: function($$v) {
                  _vm.num = $$v
                },
                expression: "num"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "component-display" }, [
        _c("div", { staticClass: "component-display--title" }, [
          _vm._v("禁用")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "component-display--content" },
          [
            _c("gl-stepper", {
              attrs: { disabled: "" },
              model: {
                value: _vm.num2,
                callback: function($$v) {
                  _vm.num2 = $$v
                },
                expression: "num2"
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


// CONCATENATED MODULE: ./src/views/senior-view/stepper/index.vue?vue&type=template&id=6e12b0bd&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/stepper/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var steppervue_type_script_lang_js_ = ({
  name: 'stepperpage',

  data() {
    return {
      num: 0,
      num2: 10
    };
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/stepper/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_steppervue_type_script_lang_js_ = (steppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/stepper/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_steppervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6e12b0bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/stepper/index.vue"
/* harmony default export */ var stepper = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);