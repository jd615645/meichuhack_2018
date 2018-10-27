/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/node_modules/vue-integer-plusminus/src/main.js'");

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(195);
window.Popper = __webpack_require__(14).default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(67);

  __webpack_require__(197);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(198);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/lodash/lodash.js'");

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/axios/index.js'");

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(24)
/* script */
var __vue_script__ = __webpack_require__(221)
/* template */
var __vue_template__ = __webpack_require__(222)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DashBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b804a99", Component.options)
  } else {
    hotAPI.reload("data-v-7b804a99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['orders'],
    mounted: function mounted() {}
});

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "bv-example-row" },
    [
      _c(
        "b-row",
        [
          _c("b-col", [
            _c("h1", [_vm._v("\n            You have ordered\n            ")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [_c("b-col", [_c("order-list", { attrs: { orders: _vm.orders } })], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b804a99", module.exports)
  }
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(24)
/* script */
var __vue_script__ = __webpack_require__(224)
/* template */
var __vue_template__ = __webpack_require__(225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/OrderList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b02cd9e", Component.options)
  } else {
    hotAPI.reload("data-v-2b02cd9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["orders"],
  created: function created() {},

  methods: {}
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.orders, function(order) {
      return _c(
        "b-card",
        {
          key: order.id,
          staticClass: "mb-2",
          staticStyle: { "max-width": "20rem" },
          attrs: {
            title: "Order #" + order.id,
            "img-src": "https://picsum.photos/600/300/?image=25",
            "img-alt": "Image",
            "img-top": "",
            tag: "article"
          }
        },
        [
          _vm._l(JSON.parse(order.list), function(item, idx) {
            return _c("p", { key: idx, staticClass: "card-text" }, [
              _vm._v("\n      " + _vm._s(item.name) + "\n    ")
            ])
          }),
          _vm._v(" "),
          _c(
            "b-button",
            { attrs: { href: "order/" + order.id, variant: "primary" } },
            [_vm._v("Go somewhere")]
          )
        ],
        2
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b02cd9e", module.exports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(24)
/* script */
var __vue_script__ = __webpack_require__(227)
/* template */
var __vue_template__ = __webpack_require__(228)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/OrderItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f0dbdb4", Component.options)
  } else {
    hotAPI.reload("data-v-3f0dbdb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["order"],
  data: function data() {
    return {
      total: 0,
      money: [1, 5, 10, 50, 100, 500, 1000]
    };
  },
  created: function created() {
    this.total = this.countPrice();
  },

  methods: {
    countPrice: function countPrice() {
      var items = JSON.parse(this.order.list);
      return items.reduce(function (carry, item) {
        return carry + item.price;
      }, 0);
    },
    change: function change() {
      console.log(this.total);
    }
  }
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    [
      _c(
        "b-row",
        [
          _c("b-col", [
            _c("p", [_vm._v("\n                List:\n            ")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "container" },
              _vm._l(JSON.parse(_vm.order.list), function(item, i) {
                return _c("div", { key: i, staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("p", [_vm._v(" " + _vm._s(item.name) + " ")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("p", [_vm._v(" " + _vm._s(item.price) + " ")])
                  ])
                ])
              })
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", [
            _c("p", [_vm._v("\n                Total:\n            ")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                " + _vm._s(_vm.total) + "\n            "
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            [
              _c(
                "b-container",
                _vm._l(_vm.money, function(m, i) {
                  return _c(
                    "b-row",
                    { key: i },
                    [
                      _c("b-col", [
                        _c("img", {
                          attrs: { src: "../images/TWD" + m + ".jpg", alt: "" }
                        })
                      ])
                    ],
                    1
                  )
                })
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "primary" },
                  on: {
                    click: function($event) {
                      _vm.change()
                    }
                  }
                },
                [_vm._v("Change")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f0dbdb4", module.exports)
  }
}

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import '~bootstrap/scss/bootstrap';\n^\n      File to import not found or unreadable: /home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/bootstrap/scss/bootstrap.scss.\n      in /home/titaneric/Documents/meichuhack_2018/pos-system/resources/sass/app.scss (line 9, column 1)\n    at runLoaders (/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/neo-async/async.js:8077:18)\n    at options.error (/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(229);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_integer_plusminus__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_integer_plusminus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_integer_plusminus__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



__webpack_require__(194);

window.Vue = __webpack_require__(217);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_bootstrap_vue__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_integer_plusminus__["IntegerPlusminus"]);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('dash-board', __webpack_require__(220));
Vue.component('order-list', __webpack_require__(223));
Vue.component('order-item', __webpack_require__(226));

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/titaneric/Documents/meichuhack_2018/pos-system/node_modules/bootstrap-vue/es/index.js'");

/***/ })

/******/ });