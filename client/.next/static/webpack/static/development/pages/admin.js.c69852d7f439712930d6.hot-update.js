webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=admin.js.c69852d7f439712930d6.hot-update.js.map