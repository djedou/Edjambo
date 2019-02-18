module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/css/main.css */ "./static/css/main.css");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_AppPages_AccueilPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/AppPages/AccueilPage */ "./src/components/AppPages/AccueilPage.js");
/* harmony import */ var _src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/redux/menuActionsCreator */ "./src/redux/menuActionsCreator.js");
/* harmony import */ var _src_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/redux/dataActionsCreator */ "./src/redux/dataActionsCreator.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* Redux Elements */





var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    activateMenu: function activateMenu(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__["default"].activateMenu(decision, menuItem));
    },
    hideFunction: function hideFunction(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__["default"].hideFunction(decision, menuItem));
    },
    setData: function setData(data) {
      return dispatch(_src_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_6__["default"].setData(data));
    }
  };
};

var AppAcceuilPageContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_src_components_AppPages_AccueilPage__WEBPACK_IMPORTED_MODULE_4__["default"]);

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: _src_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Edjambo Notre Bien Commun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppAcceuilPageContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AppPages/AccueilPage.js":
/*!************************************************!*\
  !*** ./src/components/AppPages/AccueilPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/Menu */ "./src/components/menu/Menu.js");
/* harmony import */ var _body_AccueilBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../body/AccueilBody */ "./src/components/body/AccueilBody.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/AppPages/AccueilPage.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AccueilPage =
/*#__PURE__*/
function (_Component) {
  _inherits(AccueilPage, _Component);

  function AccueilPage(props) {
    _classCallCheck(this, AccueilPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccueilPage).call(this, props));
  }

  _createClass(AccueilPage, [{
    key: "render",
    value: function render() {
      var menuArray = Object.values(this.props.menu);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3594213254" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-3594213254" + " " + "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3594213254",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Edjambo Notre Bien Commun")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: menuArray,
        activateMenu: this.props.activateMenu,
        hideFunction: this.props.hideFunction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_body_AccueilBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
        setData: this.props.setData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3594213254",
        css: ".container.jsx-3594213254{margin:0;padding:0;}h1.jsx-3594213254{font-size:20px;color:black;}@media (max-width:600px){h1.jsx-3594213254{font-size:15px;color:black;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHBQYWdlcy9BY2N1ZWlsUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjRCLEFBR2tDLEFBSU0sQUFLSSxTQVJULE1BSUUsQUFLSSxJQVJwQixRQUlBLEFBS0kiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcFBhZ2VzL0FjY3VlaWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9tZW51L01lbnVcIjtcbmltcG9ydCBBY2NldWlsQm9keSBmcm9tIFwiLi4vYm9keS9BY2N1ZWlsQm9keVwiXG5cbmNsYXNzIEFjY3VlaWxQYWdlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IG1lbnVBcnJheSA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5tZW51KTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICA8aDE+RWRqYW1ibyBOb3RyZSBCaWVuIENvbW11bjwvaDE+IFxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNZW51IFxuICAgICAgICAgICAgICAgICAgICBtZW51PXttZW51QXJyYXl9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudT17dGhpcy5wcm9wcy5hY3RpdmF0ZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVGdW5jdGlvbj17dGhpcy5wcm9wcy5oaWRlRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QWNjZXVpbEJvZHkgXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3RoaXMucHJvcHMuc2V0RGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY3VlaWxQYWdlO1xuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/AppPages/AccueilPage.js */",
        __self: this
      }));
    }
  }]);

  return AccueilPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AccueilPage);

/***/ }),

/***/ "./src/components/body/AccueilBody.js":
/*!********************************************!*\
  !*** ./src/components/body/AccueilBody.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/body/AccueilBody.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AccueilBody =
/*#__PURE__*/
function (_Component) {
  _inherits(AccueilBody, _Component);

  function AccueilBody(props) {
    var _this;

    _classCallCheck(this, AccueilBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccueilBody).call(this, props));

    _this.props.setData({});

    return _this;
  }

  _createClass(AccueilBody, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-647820500" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-647820500" + " " + "sector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "section 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-647820500" + " " + "sector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "section 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-647820500" + " " + "sector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "section 3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-647820500" + " " + "sector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "section 3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "647820500",
        css: ".sector.jsx-647820500{border:2px solid #00f;height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9ib2R5L0FjY3VlaWxCb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCNEIsQUFHK0Msc0JBQ1QsYUFDakIiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvZHkvQWNjdWVpbEJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBY2N1ZWlsQm9keSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXREYXRhKHt9KTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uIDFcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gMlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiAzXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uIDNcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc2VjdG9ye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjdWVpbEJvZHk7Il19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/body/AccueilBody.js */",
        __self: this
      }));
    }
  }]);

  return AccueilBody;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AccueilBody);

/***/ }),

/***/ "./src/components/menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuList */ "./src/components/menu/MenuList.js");
/* harmony import */ var _static_img_bg_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/img/bg.jpeg */ "./static/img/bg.jpeg");
/* harmony import */ var _static_img_bg_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_img_bg_jpeg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/menu/Menu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3386340174" + " " + "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3386340174" + " " + "profilMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_img_bg_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "jsx-3386340174" + " " + "proflinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3386340174" + " " + "subProfilMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Profil")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Connexion")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "D\xE9connexion"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3386340174",
        css: ".menu.jsx-3386340174{margin:0px;padding:0;background-color:black;height:40px;opacity:0.7;}.profilMenu.jsx-3386340174{margin:0px;padding:0px;list-style:none;}.profList.jsx-3386340174{height:45px;opacity:1;line-height:40px;text-align:center;font-size:16px;}.profList.jsx-3386340174:hover .profSubmenuList.jsx-3386340174{display:block;}.proflinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;font-family:'Times New Roman',Times,serif;width:40px;height:40px;border-radius:50%;}.proflinkStyle.jsx-3386340174:hover{background-color:green;}.subProfilMenu.jsx-3386340174{background-color:black;padding-left:0px;position:relative;top:-15px;right:70px;z-index:10;opacity:0.9;width:115px;}.profSubmenuList.jsx-3386340174{display:none;list-style:none;text-align:center;background-color:black;height:40px;}.profSubmenuList.jsx-3386340174:hover{background-color:green;}.profLinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L01lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEI0QixBQUdvQyxBQU9BLEFBS0MsQUFPRSxBQUdPLEFBT0UsQUFHQSxBQVVWLEFBT1UsQUFHRixXQW5EWCxBQU9FLENBS0YsQ0E4Qk0sQ0F2QnBCLE9BbEIyQixDQVlOLENBTEQsQUFxQnBCLEFBR3FCLEFBaUJyQixNQU5zQixVQWxDdEIsQUFLc0IsQ0FtQkEsSUEvQk4sR0EwQ1csR0F0QnFCLEFBOEJoQyxNQWpEQSxDQVlHLENBbUJMLElBbUJrQyxNQWpEaEQsQUErQmUsRUFVQyxFQTdCaEIsT0FvQmUsR0FVZixRQVRnQixFQWRELFVBZUMsQ0FkQSxDQThCRyxVQWZuQixDQWRzQixJQThCRCxjQTdCckIsR0E4QmtCLGNBQ2xCIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCIuL01lbnVMaXN0XCI7XG5pbXBvcnQgaW1nIGZyb20gXCIuLi8uLi8uLi9zdGF0aWMvaW1nL2JnLmpwZWdcIlxuXG5jbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0IFxuICAgICAgICAgICAgICAgICAgICBtZW51PXt0aGlzLnByb3BzLm1lbnV9XG4gICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2ZpbE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZsaW5rU3R5bGVcIiBzcmM9e2ltZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViUHJvZmlsTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mU3VibWVudUxpc3RcIj48YSBjbGFzc05hbWU9XCJwcm9mTGlua1N0eWxlXCIgaHJlZj1cIiNcIj5Qcm9maWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZlN1Ym1lbnVMaXN0XCI+PGEgY2xhc3NOYW1lPVwicHJvZkxpbmtTdHlsZVwiIGhyZWY9XCIjXCI+Q29ubmV4aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIiBocmVmPVwiI1wiPkTDqWNvbm5leGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5tZW51e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbE1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mTGlzdDpob3ZlciAucHJvZlN1Ym1lbnVMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZsaW5rU3R5bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZmxpbmtTdHlsZTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdWJQcm9maWxNZW51e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mU3VibWVudUxpc3Q6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZkxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/menu/Menu.js */",
        __self: this
      }));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/menu/MenuItem.js":
/*!*****************************************!*\
  !*** ./src/components/menu/MenuItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/menu/MenuItem.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).call(this, props));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var submenu = this.props.submenu;
      var menuArray = Object.values(submenu);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2693209637" + " " + "submenuItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-2693209637" + " " + "linkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2693209637" + " " + "sbmenuUl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, menuArray.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: item.id,
          className: "jsx-2693209637" + " " + "SubmenuList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          className: "jsx-2693209637" + " " + "sublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, item.title));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2693209637",
        css: ".submenuItems.jsx-2693209637{float:left;width:100px;height:45px;opacity:1;line-height:40px;text-align:center;font-size:16px;}.linkStyle.jsx-2693209637{-webkit-text-decoration:none;text-decoration:none;font-family:'Times New Roman',Times,serif;display:block;color:white;font-weight:bold;}.linkStyle.jsx-2693209637:hover{background-color:green;}.SubmenuList.jsx-2693209637{display:none;list-style:none;text-align:center;background-color:black;height:40px;}.SubmenuList.jsx-2693209637:hover{background-color:green;}.submenuItems.jsx-2693209637:hover .SubmenuList.jsx-2693209637{display:block;}.sbmenuUl.jsx-2693209637{background-color:black;padding-left:0px;position:absolute;z-index:10;display:block;opacity:0.9;width:150px;}.sublinkStyle.jsx-2693209637{-webkit-text-decoration:none;text-decoration:none;width:150px;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDNEIsQUFHb0MsQUFTVSxBQU9FLEFBR1gsQUFPVyxBQUdULEFBR1MsQUFTRixXQXhDVCxFQW1CSSxDQVVwQixTQTVCZ0IsQUFlaEIsQUFVQSxBQU1xQixNQVpDLE1BbEJSLEtBK0JRLEtBOUJELEVBa0JNLEdBWnFCLEFBZ0NoQyxRQVBELElBOUJPLEFBc0NOLE9BUEUsQ0FiRixJQXFCZ0MsTUF0QzdCLEVBa0JuQixDQWFnQixTQTFCRSxHQUpsQixBQStCZ0IsV0ExQkEsQ0EyQmhCLFNBTW1CLEVBaENFLGFBaUNBLElBaENyQixhQWlDa0IsY0FDbEIiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9jb21wb25lbnRzL21lbnUvTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBNZW51SXRlbSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7c3VibWVudX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgbWVudUFycmF5ID0gT2JqZWN0LnZhbHVlcyhzdWJtZW51KTsgXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJtZW51SXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1N0eWxlXCIgXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2JtZW51VWxcIj5cbiAgICAgICAgICAgICAgICAgICAge21lbnVBcnJheS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlN1Ym1lbnVMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibGlua1N0eWxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3VibWVudUl0ZW1ze1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtTdHlsZTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5TdWJtZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgLlN1Ym1lbnVMaXN0OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1Ym1lbnVJdGVtczpob3ZlciAuU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2JtZW51VWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3VibGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcblxuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/menu/MenuItem.js */",
        __self: this
      }));
    }
  }]);

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./src/components/menu/MenuList.js":
/*!*****************************************!*\
  !*** ./src/components/menu/MenuList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.js");
/* harmony import */ var _SmartMenuList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmartMenuList */ "./src/components/menu/SmartMenuList.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/menu/MenuList.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MenuList =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuList, _Component);

  function MenuList(props) {
    _classCallCheck(this, MenuList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuList).call(this, props));
  }

  _createClass(MenuList, [{
    key: "render",
    value: function render() {
      var menu = Object.values(this.props.menu);
      var Items = menu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: item.id,
          id: item.id,
          name: item.name,
          active: item.active,
          title: item.title,
          hideSubmenu: item.hideSubmenu,
          submenu: item.submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2837852835" + " " + "mainMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2837852835" + " " + "smartMenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartMenuList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2837852835" + " " + "menuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, Items), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2837852835",
        css: ".menuList.jsx-2837852835{margin:0px;padding:0px;list-style:none;}.smartMenuList.jsx-2837852835{margin:0px;padding-left:10px;padding-top:4px;list-style:none;}@media (max-width:600px){.menuList.jsx-2837852835{display:none;}}@media (min-width:602px){.smartMenuList.jsx-2837852835{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L01lbnVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDNEIsQUFHb0MsQUFLQSxBQU9NLEFBS0EsV0FoQkwsQUFLTSxFQU9sQixBQUtBLFVBaEJnQixNQUtBLFVBSnBCLE1BS29CLGdCQUNwQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWVudS9NZW51TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIjtcbmltcG9ydCBTbWFydE1lbnVMaXN0IGZyb20gXCIuL1NtYXJ0TWVudUxpc3RcIjtcblxuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBtZW51ID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLm1lbnUpO1xuICAgICAgICBsZXQgSXRlbXMgPSBtZW51Lm1hcCgoaXRlbSkgPT57XG4gICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlU3VibWVudT17aXRlbS5oaWRlU3VibWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnU9e2l0ZW0uc3VibWVudX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbk1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic21hcnRNZW51TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8U21hcnRNZW51TGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnU9e21lbnV9ICAgIFxuICAgICAgICAgICAgICAgICAgICAvPiAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7SXRlbXN9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5tZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hcnRNZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDJweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAuc21hcnRNZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdDtcbiJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/menu/MenuList.js */",
        __self: this
      }));
    }
  }]);

  return MenuList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./src/components/menu/SmartMenuItem.js":
/*!**********************************************!*\
  !*** ./src/components/menu/SmartMenuItem.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/menu/SmartMenuItem.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SmartMenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartMenuItem, _Component);

  function SmartMenuItem(props) {
    _classCallCheck(this, SmartMenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartMenuItem).call(this, props));
  }

  _createClass(SmartMenuItem, [{
    key: "render",
    value: function render() {
      var submenu = this.props.submenu;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3223128909",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, submenu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          key: item.id,
          className: "jsx-3223128909" + " " + "subStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, item.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          className: "jsx-3223128909",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3223128909",
        css: ".subStyle.jsx-3223128909{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;height:35px;line-height:35px;width:150px;background-color:black;}.subStyle.jsx-3223128909:hover{background-color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L1NtYXJ0TWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI0QixBQUc4QyxBQVlFLHVCQUMzQiwyQkFaZ0IsWUFDZ0MsMENBQzdCLGVBQ0UsaUJBQ0gsY0FDRixZQUNLLGlCQUNMLFlBQ1csdUJBQzNCIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L1NtYXJ0TWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTbWFydE1lbnVJdGVtIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge3N1Ym1lbnV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c3VibWVudS5tYXAoaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfTxici8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnN1YlN0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViU3R5bGU6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU21hcnRNZW51SXRlbTsiXX0= */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/menu/SmartMenuItem.js */",
        __self: this
      }));
    }
  }]);

  return SmartMenuItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartMenuItem);

/***/ }),

/***/ "./src/components/menu/SmartMenuList.js":
/*!**********************************************!*\
  !*** ./src/components/menu/SmartMenuList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmartMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmartMenuItem */ "./src/components/menu/SmartMenuItem.js");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/img/menu.png */ "./static/img/menu.png");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_img_menu_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/menu/SmartMenuList.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SmartMenuList =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartMenuList, _Component);

  function SmartMenuList(props) {
    _classCallCheck(this, SmartMenuList);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartMenuList).call(this, props));
  }

  _createClass(SmartMenuList, [{
    key: "render",
    value: function render() {
      var menu = this.props.menu;
      var submenu = menu.submenu;
      var submenuItem;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2756877938" + " " + "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_img_menu_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "jsx-2756877938" + " " + "menuImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2756877938" + " " + "tabList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, menu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: item.id,
          className: "jsx-2756877938" + " " + "subTab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          className: "jsx-2756877938" + " " + "sublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "jsx-2756877938" + " " + "TabSubUl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-2756877938" + " " + "TabSublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          submenu: item.submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2756877938",
        css: ".tab.jsx-2756877938{width:30px;list-style:none;}.menuImg.jsx-2756877938{width:30px;height:30px;}.tabList.jsx-2756877938{background-color:black;padding:0px;margin-left:-10px;display:block;opacity:1;width:100px;}.subTab.jsx-2756877938{display:none;list-style:none;text-align:center;background-color:black;height:35px;}.subTab.jsx-2756877938:hover{background-color:green;}.tab.jsx-2756877938:hover .subTab.jsx-2756877938{display:block;}.sublinkStyle.jsx-2756877938{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;height:30px;line-height:30px;}.TabSubUl.jsx-2756877938{display:block;width:100px;background-color:green;padding-left:0px;position:relative;left:100px;top:-50px;}.TabSubmenuList.jsx-2756877938{color:white;}.TabSublinkStyle.jsx-2756877938{display:none;}.subTab.jsx-2756877938:hover .TabSublinkStyle.jsx-2756877938{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L1NtYXJ0TWVudUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0M0QixBQUdvQyxBQUlBLEFBS1ksQUFVWCxBQVFXLEFBR1QsQUFHTyxBQVVQLEFBU0YsQUFHQyxBQUdDLFdBekRFLEFBSUosQ0FnRGhCLENBakNvQixBQW9DcEIsQ0F6QkEsQUFhZ0IsQUFlaEIsU0FwREEsQUFHZ0IsQUFrQmhCLEdBaUIyQixDQTNDM0IsRUFtQnNCLE1BVkEsWUFXSyxFQXdCTixDQVpMLEdBcEJFLFNBcUI4QixJQVkxQixDQWhDUixHQVFFLE9BUEEsS0FTaEIsRUF1QmUsS0EvQmYsTUFnQ2MsU0FiSyxDQWNuQixjQWJxQixpQkFDSCxjQUNGLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9tZW51L1NtYXJ0TWVudUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNtYXJ0TWVudUl0ZW0gZnJvbSBcIi4vU21hcnRNZW51SXRlbVwiO1xuaW1wb3J0IHNtYXJ0SW1nIGZyb20gXCIuLi8uLi8uLi9zdGF0aWMvaW1nL21lbnUucG5nXCI7XG5cbmNsYXNzIFNtYXJ0TWVudUxpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge21lbnV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzdWJtZW51fSA9IG1lbnU7XG4gICAgICAgIGxldCBzdWJtZW51SXRlbTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPiAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnVJbWdcIiBzcmM9e3NtYXJ0SW1nfSA+XG4gICAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJUYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJsaW5rU3R5bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJUYWJTdWJVbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiVGFiU3VibGlua1N0eWxlXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYXJ0TWVudUl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudT17aXRlbS5zdWJtZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9ICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAudGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tZW51SW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50YWJMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgIC8qICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViVGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViVGFiOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRhYjpob3ZlciAuc3ViVGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5UYWJTdWJVbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuVGFiU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLlRhYlN1YmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YlRhYjpob3ZlciAuVGFiU3VibGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0TWVudUxpc3Q7XG5cblxuLyogXG5cblxuKi8iXX0= */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/menu/SmartMenuList.js */",
        __self: this
      }));
    }
  }]);

  return SmartMenuList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartMenuList);
/* 


*/

/***/ }),

/***/ "./src/lib/axios.js":
/*!**************************!*\
  !*** ./src/lib/axios.js ***!
  \**************************/
/*! exports provided: setData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/dataActionsCreator */ "./src/redux/dataActionsCreator.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);



/* var customData = require('./data.json'); */

function setData(dispatch) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('./data.json').then(function (response) {
    dispatch(_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_1__["default"].setData(response));
    console.log(response);
  }).catch(function (err) {
    console.log("dit not get the data.json");
    console.log("erreur:", err);
  });
}
/* data({ req, isServer, params, store }) {
    // server-side logic
    if (isServer) {
      let data = JSON.parse(require('fs').readFileSync('static/data.json', 'utf8'))
      return { authors: data }
    }
    // client-side logic
    return axios.get('/data.json')
    .then((res) => {
      return {
        authors: res.data
       }
    })
  } */

/***/ }),

/***/ "./src/lib/constants.js":
/*!******************************!*\
  !*** ./src/lib/constants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  MENU_ACTIVATED: 'menu is activated',
  SUBMENU_HIDDEN: 'submenu is hidden',
  INITIALIZE_BODY_DATA: 'set body data'
});

/***/ }),

/***/ "./src/lib/menuData.js":
/*!*****************************!*\
  !*** ./src/lib/menuData.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Menudata = {
  accueil: {
    id: 1,
    name: "accueil",
    active: true,
    title: "Accueil",
    hideSubmenu: true,
    submenu: []
  },
  media: {
    id: 2,
    name: "media",
    active: false,
    title: "Media",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "conference",
      title: "Conference"
    }, {
      id: 2,
      name: "facebook",
      title: "Facebook"
    }, {
      id: 3,
      name: "messenger",
      title: "Messenger"
    }]
  },
  adherer: {
    id: 3,
    name: "adherer",
    active: false,
    title: "Adherer",
    hideSubmenu: true,
    submenu: []
  },
  a_propos: {
    id: 4,
    name: "a_propos",
    active: false,
    title: "A propos",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "quisommesnous",
      title: "Qui sommes nous?"
    }, {
      id: 2,
      name: "quefaisonsnous",
      title: "Que faisons nous?"
    }, {
      id: 3,
      name: "associations",
      title: "Associations"
    }]
  },
  plus: {
    id: 5,
    name: "plus",
    active: false,
    title: "Plus",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "annonces",
      title: "Annonces"
    }, {
      id: 2,
      name: "activites",
      title: "Activites"
    }, {
      id: 3,
      name: "gallerie",
      title: "Gallerie"
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Menudata);

/***/ }),

/***/ "./src/redux/dataActionsCreator.js":
/*!*****************************************!*\
  !*** ./src/redux/dataActionsCreator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");

var dataActionsCreator = {
  setData: function setData(data) {
    return {
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].INITIALIZE_BODY_DATA,
      data: data
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dataActionsCreator);

/***/ }),

/***/ "./src/redux/menuActionsCreator.js":
/*!*****************************************!*\
  !*** ./src/redux/menuActionsCreator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");

var menuActionsCreator = {
  activateMenu: function activateMenu(decision, menuItem) {
    return {
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].MENU_ACTIVATED,
      menuItem: menuItem,
      active: decision
    };
  },
  hideFunction: function hideFunction(decision, menuItem) {
    return {
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].SUBMENU_HIDDEN,
      menuItem: menuItem,
      hideSubmenu: decision
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (menuActionsCreator);

/***/ }),

/***/ "./src/redux/menuReducer.js":
/*!**********************************!*\
  !*** ./src/redux/menuReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");
/* harmony import */ var _lib_menuData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/menuData */ "./src/lib/menuData.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);



var initialState = _lib_menuData__WEBPACK_IMPORTED_MODULE_1__["default"];

var menuItemReducer = function menuItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var menuReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  menu: menuItemReducer
});
/* harmony default export */ __webpack_exports__["default"] = (menuReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menuReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuReducer */ "./src/redux/menuReducer.js");
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/axios */ "./src/lib/axios.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");






var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching:', action);
      return next(action);
    };
  };
};

var setDataMiddleware = function setDataMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === _lib_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INITIALIZE_BODY_DATA) {
        Object(_lib_axios__WEBPACK_IMPORTED_MODULE_3__["setData"])(store.dispatch);
      }

      return next(action);
    };
  };
};

var Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_menuReducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, logger, setDataMiddleware));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./static/css/main.css":
/*!*****************************!*\
  !*** ./static/css/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/img/bg.jpeg":
/*!****************************!*\
  !*** ./static/img/bg.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg-41030ceaa4cecbf32a7cd97c9a92fffe.jpeg";

/***/ }),

/***/ "./static/img/menu.png":
/*!*****************************!*\
  !*** ./static/img/menu.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAgkOGRDX5UsQAAAAJklEQVQY02NgwAsY/y9ikMQp+5zx/398ulkYFuPTzUARGHUaVgAA5ukS2R0Gc2oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDItMDlUMTM6MjU6MTYrMDE6MDD0m7jcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAyLTA5VDEzOjI1OjE2KzAxOjAwhcYAYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map