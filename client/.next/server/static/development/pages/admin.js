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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_ReduToPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/ReduToPages */ "./src/components/ReduToPages.js");
/* harmony import */ var _src_components_admin_options_OptionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/admin/options/OptionContainer */ "./src/components/admin/options/OptionContainer.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/pages/admin.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AdminPage =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminPage, _Component);

  function AdminPage(props) {
    _classCallCheck(this, AdminPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdminPage).call(this, props));
  }

  _createClass(AdminPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          admin = _this$props.admin,
          showOption = _this$props.showOption;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4261870126" + " " + "adminContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-4261870126" + " " + "headleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "login profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-4261870126" + " " + "headright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4261870126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Edjambo Notre Bien Commun")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
        className: "jsx-4261870126" + " " + "bodyleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4261870126" + " " + "optionHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_admin_options_OptionContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        admin: admin,
        showOption: showOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-4261870126" + " " + "bodyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "body"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-4261870126" + " " + "smartheadleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-4261870126" + " " + "smartheadright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-4261870126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Edjambo Notre Bien Commun"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4261870126" + " " + "smartprofile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "login profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-4261870126" + " " + "smartbody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "admin body"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4261870126",
        css: ".headleft.jsx-4261870126{background-color:white;line-height:60px;text-align:center;}.headright.jsx-4261870126{background-color:green;line-height:45px;text-align:center;}.bodyleft.jsx-4261870126{background-color:green;text-align:center;padding-top:5px;}.optionHeader.jsx-4261870126{color:black;font-size:19px;-webkit-text-decoration:underline;text-decoration:underline;}.bodyright.jsx-4261870126{background-color:white;text-align:center;}h1.jsx-4261870126{font-size:20px;}h2.jsx-4261870126{font-size:10px;color:black;float:left;padding:5px;border:1px solid #0f0;}.smartprofile.jsx-4261870126{border:1px solid #0f0;float:right;}.smartheadleft.jsx-4261870126{background-color:white;line-height:40px;text-align:center;font-size:10px;}.smartheadright.jsx-4261870126{background-color:green;line-height:10px;text-align:center;font-size:10px;border:1px solid #0f0;}.smartbody.jsx-4261870126{background-color:white;text-align:center;}@media (max-height:600px){.headleft.jsx-4261870126{line-height:8vh;height:35vh;}.headright.jsx-4261870126{line-height:2vh;height:25vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzRCLEFBR2dELEFBS0EsQUFLQSxBQUtYLEFBS1csQUFJUixBQUdBLEFBT08sQUFJQyxBQU1BLEFBT0EsQUFPSCxBQUlBLFlBOUNMLEdBU25CLEFBR2dCLENBK0JJLEFBSUEsTUE1QkosQ0FsQ0ssQUFLQSxBQUtDLEFBVUEsQUFrQkQsQUFNQSxBQU9DLElBbkNRLEFBWWYsQ0ErQlgsQUFJQSxNQTVCSixJQU5nQixFQTVCTSxBQUtBLEFBaUNBLEFBTUEsQ0FsQ0YsQUFVcEIsQUErQkEsU0F0QjBCLE9BbEIxQixDQVZBLEFBS0EsQUFpQ21CLEFBTUEsY0FmbkIsQ0FVQSxBQU0wQixjQTlCMUIsUUErQkEiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3BhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWR1eFRvUGFnZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1JlZHVUb1BhZ2VzXCI7XG5pbXBvcnQgT3B0aW9uQ29udGFpbmVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi9vcHRpb25zL09wdGlvbkNvbnRhaW5lclwiO1xuXG5jbGFzcyBBZG1pblBhZ2UgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge2FkbWluLHNob3dPcHRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbkNvbnRhaW5lclwiPiBcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luIHByb2ZpbGVcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+RWRqYW1ibyBOb3RyZSBCaWVuIENvbW11bjwvaDE+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImJvZHlsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbkhlYWRlclwiPk9wdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb25Db250YWluZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhZG1pbiA9IHthZG1pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPcHRpb24gPSB7c2hvd09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgYm9keVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIHsvKiBzbWFydHBob25lcyBzdGFydCBoZXJlICovfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNtYXJ0aGVhZGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW9uc1xuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic21hcnRoZWFkcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVkamFtYm8gTm90cmUgQmllbiBDb21tdW48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFydHByb2ZpbGVcIj5sb2dpbiBwcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNtYXJ0Ym9keVwiPlxuICAgICAgICAgICAgICAgICAgICBhZG1pbiBib2R5XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbkhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5cmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYXJ0cHJvZmlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYXJ0aGVhZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFydGhlYWRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFydGJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDh2aDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJ2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZHV4VG9QYWdlcyhBZG1pblBhZ2UpO1xuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/pages/admin.js */",
        __self: this
      }));
    }
  }]);

  return AdminPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_components_ReduToPages__WEBPACK_IMPORTED_MODULE_2__["default"])(AdminPage));

/***/ }),

/***/ "./src/components/ReduToPages.js":
/*!***************************************!*\
  !*** ./src/components/ReduToPages.js ***!
  \***************************************/
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
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/redux/menuActionsCreator */ "./src/redux/menuActionsCreator.js");
/* harmony import */ var _src_redux_adminActionsCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/redux/adminActionsCreator */ "./src/redux/adminActionsCreator.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/redux/store */ "./src/redux/store.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/ReduToPages.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu,
    admin: state.admin
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    activateMenu: function activateMenu(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_4__["default"].activateMenu(decision, menuItem));
    },
    hideFunction: function hideFunction(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_4__["default"].hideFunction(decision, menuItem));
    },
    showOption: function showOption(decision, optionName) {
      return dispatch(_src_redux_adminActionsCreator__WEBPACK_IMPORTED_MODULE_5__["default"].showAdminOption(decision, optionName));
    }
  };
};

var ReduxToPages = function ReduxToPages(Page) {
  var PageContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page);
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(Edjambo, _Component);

      function Edjambo() {
        _classCallCheck(this, Edjambo);

        return _possibleConstructorReturn(this, _getPrototypeOf(Edjambo).apply(this, arguments));
      }

      _createClass(Edjambo, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
            store: _src_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
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
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }));
        }
      }]);

      return Edjambo;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ReduxToPages);

/***/ }),

/***/ "./src/components/admin/options/OptionContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/admin/options/OptionContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OptionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionItem */ "./src/components/admin/options/OptionItem.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionContainer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var OptionContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionContainer, _Component);

  function OptionContainer(props) {
    var _this;

    _classCallCheck(this, OptionContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionContainer).call(this, props));
    console.log(_this.props);
    return _this;
  }

  _createClass(OptionContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          admin = _this$props.admin,
          showOption = _this$props.showOption;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2070407496",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OptionItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        admin: admin,
        showOption: showOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2070407496",
        css: "div.jsx-2070407496{margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9vcHRpb25zL09wdGlvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjRCLEFBR29DLGVBQ25CIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9vcHRpb25zL09wdGlvbkNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3B0aW9uSXRlbSBmcm9tIFwiLi9PcHRpb25JdGVtXCI7XG5cbmNsYXNzIE9wdGlvbkNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge2FkbWluLHNob3dPcHRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgYWRtaW4gPSB7YWRtaW59XG4gICAgICAgICAgICAgICAgICAgIHNob3dPcHRpb24gPSB7c2hvd09wdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionContainer.js */",
        __self: this
      }));
    }
  }]);

  return OptionContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OptionContainer);

/***/ }),

/***/ "./src/components/admin/options/OptionItem.js":
/*!****************************************************!*\
  !*** ./src/components/admin/options/OptionItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionItem.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OptionItem =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionItem, _Component);

  function OptionItem(props) {
    _classCallCheck(this, OptionItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptionItem).call(this, props));
  }

  _createClass(OptionItem, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1907082438",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1907082438",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "option 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1907082438",
        css: "div.jsx-1907082438{border:4px outset #0ff;width:90%;margin-left:2.5%;background-color:blue;border-radius:15px;height:30px;line-height:30px;color:white;font-size:19px;}span.jsx-1907082438{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9vcHRpb25zL09wdGlvbkl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR2dELEFBV1QsY0FDbEIsU0FYYyxVQUNNLGlCQUNNLHNCQUNILG1CQUNQLFlBQ0ssaUJBQ0wsWUFDRyxlQUNuQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvYWRtaW4vb3B0aW9ucy9PcHRpb25JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuXG5jbGFzcyBPcHRpb25JdGVtIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPm9wdGlvbiAxPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IG91dHNldCAjMGZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbkl0ZW07Il19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionItem.js */",
        __self: this
      }));
    }
  }]);

  return OptionItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OptionItem);

/***/ }),

/***/ "./src/lib/adminData.js":
/*!******************************!*\
  !*** ./src/lib/adminData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Admindata = {
  dashbord: {
    id: 1,
    name: "dashbord",
    setted: true
  },
  activites: {
    id: 2,
    name: "activites",
    setted: false
  },
  annonces: {
    id: 3,
    name: "annonces",
    setted: false
  },
  membres: {
    id: 4,
    name: "membres",
    setted: false
  },
  associations: {
    id: 5,
    name: "associations",
    setted: false
  },
  media: {
    id: 6,
    name: "media",
    setted: false
  },
  contact: {
    id: 7,
    name: "contact",
    setted: false
  },
  gallerie: {
    id: 8,
    name: "gallerie",
    setted: false
  },
  enbc: {
    id: 9,
    name: "enbc",
    setted: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Admindata);

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
  SET_ADMIN_BODY: "set admin body"
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
    url: "/",
    hideSubmenu: true,
    submenu: []
  },
  media: {
    id: 2,
    name: "media",
    active: false,
    title: "Media",
    url: "/media",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "conference",
      title: "Conference",
      url: "media"
    }, {
      id: 2,
      name: "facebook",
      title: "Facebook",
      url: "media"
    }, {
      id: 3,
      name: "messenger",
      title: "Messenger",
      url: "media"
    }]
  },
  adherer: {
    id: 3,
    name: "adherer",
    active: false,
    title: "Adherer",
    url: "/connexion",
    hideSubmenu: true,
    submenu: []
  },
  a_propos: {
    id: 4,
    name: "a_propos",
    active: false,
    title: "A propos",
    url: "/apropos",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "quisommesnous",
      title: "Qui sommes nous?",
      url: "apropos"
    }, {
      id: 2,
      name: "quefaisonsnous",
      title: "Que faisons nous?",
      url: "apropos"
    }, {
      id: 3,
      name: "associations",
      title: "Associations",
      url: "apropos"
    }]
  },
  plus: {
    id: 5,
    name: "plus",
    active: false,
    title: "Plus",
    url: "/plus",
    hideSubmenu: true,
    submenu: [{
      id: 1,
      name: "annonces",
      title: "Annonces",
      url: "plus"
    }, {
      id: 2,
      name: "activites",
      title: "Activites",
      url: "plus"
    }, {
      id: 3,
      name: "gallerie",
      title: "Gallerie",
      url: "plus"
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Menudata);

/***/ }),

/***/ "./src/redux/adminActionsCreator.js":
/*!******************************************!*\
  !*** ./src/redux/adminActionsCreator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");

var adminActionsCreator = {
  showAdminOption: function showAdminOption(decision, optionName) {
    return {
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ADMIN_BODY,
      name: optionName,
      setted: decision
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (adminActionsCreator);

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
/* harmony import */ var _lib_adminData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/adminData */ "./src/lib/adminData.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




/* let initialState = Menudata; */

var menuItemReducer = function menuItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lib_menuData__WEBPACK_IMPORTED_MODULE_1__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var adminItemReducer = function adminItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lib_adminData__WEBPACK_IMPORTED_MODULE_2__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var menuReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  menu: menuItemReducer,
  admin: adminItemReducer
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
      /* if(action.type === constants.INITIALIZE_BODY_DATA) {
          setData(store.dispatch)
      } */
      return next(action);
    };
  };
};

var Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_menuReducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, logger, setDataMiddleware));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./static/css/style.css":
/*!******************************!*\
  !*** ./static/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/admin.js */"./pages/admin.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=admin.js.map