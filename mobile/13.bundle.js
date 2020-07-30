(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/field/index.vue?vue&type=template&id=0382c834&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "输入框" }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("gl-field", { attrs: { label: "姓名", value: "雷电芽衣" } }),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("gl-field", {
        attrs: { required: "", label: "姓名", value: "雷电芽衣" }
      }),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("gl-field", { attrs: { "align-right": "", label: "公司" } }),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("gl-field", {
        attrs: { label: "短信验证" },
        scopedSlots: _vm._u([
          {
            key: "button",
            fn: function() {
              return [
                _c("gl-button", { attrs: { size: "small", type: "primary" } }, [
                  _vm._v("发送验证码")
                ])
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("gl-field", {
        attrs: { textarea: "", label: "留言" },
        model: {
          value: _vm.remark,
          callback: function($$v) {
            _vm.remark = $$v
          },
          expression: "remark"
        }
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
        _vm._v("基本使用")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [_vm._v("必填")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [_vm._v("右对齐")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [
        _vm._v("右侧添加按钮")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "component-display" }, [
      _c("div", { staticClass: "component-display--title" }, [_vm._v("文本框")])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/senior-view/field/index.vue?vue&type=template&id=0382c834&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/field/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var fieldvue_type_script_lang_js_ = ({
  data() {
    return {
      remark: ""
    };
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/field/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_fieldvue_type_script_lang_js_ = (fieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/field/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_fieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0382c834",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/field/index.vue"
/* harmony default export */ var field = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);