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
/* harmony import */ var _src_components_admin_body_bodyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/admin/body/bodyContainer */ "./src/components/admin/body/bodyContainer.js");
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
        className: "jsx-1902864685" + " " + "adminContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1902864685" + " " + "headleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "login profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1902864685" + " " + "headright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1902864685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Edjambo Notre Bien Commun")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
        className: "jsx-1902864685" + " " + "bodyleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1902864685" + " " + "optionHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_admin_options_OptionContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        admin: admin,
        showOption: showOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_admin_body_bodyContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1902864685" + " " + "smartheadleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1902864685" + " " + "smartheadright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1902864685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Edjambo Notre Bien Commun"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1902864685" + " " + "smartprofile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "login profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-1902864685" + " " + "smartbody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "admin body"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1902864685",
        css: ".headleft.jsx-1902864685{background-color:white;line-height:60px;text-align:center;}.headright.jsx-1902864685{background-color:green;line-height:45px;text-align:center;}.bodyleft.jsx-1902864685{background-color:green;text-align:center;padding-top:5px;overflow:auto;}.optionHeader.jsx-1902864685{color:black;font-size:19px;-webkit-text-decoration:underline;text-decoration:underline;}h1.jsx-1902864685{font-size:20px;}h2.jsx-1902864685{font-size:10px;color:black;float:left;padding:5px;border:1px solid #0f0;}.smartprofile.jsx-1902864685{border:1px solid #0f0;float:right;}.smartheadleft.jsx-1902864685{background-color:white;line-height:40px;text-align:center;font-size:10px;}.smartheadright.jsx-1902864685{background-color:green;line-height:10px;text-align:center;font-size:10px;border:1px solid #0f0;}.smartbody.jsx-1902864685{background-color:white;text-align:center;}@media (max-height:600px){.headleft.jsx-1902864685{line-height:8vh;height:35vh;}.headright.jsx-1902864685{line-height:2vh;height:25vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzRCLEFBR2dELEFBS0EsQUFLQSxBQU1YLEFBS0csQUFHQSxBQU9PLEFBSUMsQUFNQSxBQU9BLEFBT0gsQUFJQSxZQTFDTCxHQUtuQixBQUdnQixDQStCSSxBQUlBLE1BNUJKLENBL0JLLEFBS0EsQUFLQyxBQXlCRCxBQU1BLEFBT0MsSUEvQlEsQUFRZixDQStCWCxBQUlBLE1BNUJKLElBTmdCLEVBekJNLEFBS0EsQUE4QkEsQUFNQSxDQS9CRixBQXNDcEIsU0F0QjBCLE9BZlIsQ0FWbEIsQUFLQSxBQThCbUIsQUFNQSxhQTlCbkIsQ0FlQSxDQVVBLEFBTTBCLGNBMUIxQixRQTJCQSIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvcGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZHV4VG9QYWdlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUmVkdVRvUGFnZXNcIjtcbmltcG9ydCBPcHRpb25Db250YWluZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL29wdGlvbnMvT3B0aW9uQ29udGFpbmVyXCI7XG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vYm9keS9ib2R5Q29udGFpbmVyXCI7XG5cblxuY2xhc3MgQWRtaW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHthZG1pbixzaG93T3B0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW5Db250YWluZXJcIj4gXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICBsb2dpbiBwcm9maWxlXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkVkamFtYm8gTm90cmUgQmllbiBDb21tdW48L2gxPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJib2R5bGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb25IZWFkZXJcIj5PcHRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQ29udGFpbmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW4gPSB7YWRtaW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93T3B0aW9uID0ge3Nob3dPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgPEJvZHlDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgICB7Lyogc21hcnRwaG9uZXMgc3RhcnQgaGVyZSAqL30gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzbWFydGhlYWRsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNtYXJ0aGVhZHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5FZGphbWJvIE5vdHJlIEJpZW4gQ29tbXVuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic21hcnRwcm9maWxlXCI+bG9naW4gcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzbWFydGJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgYWRtaW4gYm9keVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkbGVmdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbkhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFydHByb2ZpbGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFydGhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hcnRoZWFkcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hcnRib2R5e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4dmg7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAydmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWR1eFRvUGFnZXMoQWRtaW5QYWdlKTtcbiJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/pages/admin.js */",
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
//# sourceMappingURL=admin.js.fd611572c841bf3786b2.hot-update.js.map