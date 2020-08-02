(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/load-more/index.vue?vue&type=template&id=01156fc8&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "component-view" },
    [
      _c("gl-navigation", {
        attrs: { back: "", type: "primary", title: "加载更多" }
      }),
      _vm._v(" "),
      _c(
        "gl-load-more",
        {
          attrs: { finished: _vm.finished },
          on: { load: _vm.onLoad },
          model: {
            value: _vm.loading,
            callback: function($$v) {
              _vm.loading = $$v
            },
            expression: "loading"
          }
        },
        _vm._l(_vm.array, function(item, index) {
          return _c(
            "div",
            { key: index, staticClass: "load-more-content-item" },
            [
              _vm._v(
                "\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vitae rerum illo tempora quas placeat sunt aliquam\n      provident, deserunt cum optio consequatur nulla tenetur libero voluptatibus ipsa accusantium nemo explicabo!\n    "
              )
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/senior-view/load-more/index.vue?vue&type=template&id=01156fc8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/senior-view/load-more/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var load_morevue_type_script_lang_js_ = ({
  data() {
    return {
      array: new Array(10).fill(''),
      loading: false,
      finished: false
    };
  },

  methods: {
    onPullRefresh() {
      setTimeout(() => {
        this.setup();
        this.pullLoading = false;
        this.finished = false;
      }, 2000);
    },

    onLoad() {
      setTimeout(() => {
        if (this.array.length >= 30) {
          return this.finished = true;
        }

        for (let index = 0; index < 10; index++) {
          this.array.push('');
        }

        this.loading = false;
      }, 1000);
    }

  },

  mounted() {
    this.setup();
  }

});
// CONCATENATED MODULE: ./src/views/senior-view/load-more/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var senior_view_load_morevue_type_script_lang_js_ = (load_morevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/senior-view/load-more/index.vue?vue&type=style&index=0&id=01156fc8&lang=scss&scoped=true&
var load_morevue_type_style_index_0_id_01156fc8_lang_scss_scoped_true_ = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/views/senior-view/load-more/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  senior_view_load_morevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "01156fc8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/senior-view/load-more/index.vue"
/* harmony default export */ var load_more = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
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
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01156fc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01156fc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01156fc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_4_1_1_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_9_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01156fc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_1_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".load-more-content[data-v-01156fc8]{height:66.66667vw;overflow-y:scroll}.load-more-content-item[data-v-01156fc8]{background:#fff;text-align:center;font-size:4.26667vw;margin-bottom:1.33333vw;padding:2.66667vw 4vw;box-sizing:border-box}.load-more-content-item[data-v-01156fc8]:last-child{border-bottom:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);