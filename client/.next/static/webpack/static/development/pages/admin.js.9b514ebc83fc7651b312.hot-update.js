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
/* harmony import */ var _src_components_admin_body_BodyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/admin/body/BodyContainer */ "./src/components/admin/body/BodyContainer.js");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/img/menu.png */ "./static/img/menu.png");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_img_menu_png__WEBPACK_IMPORTED_MODULE_5__);
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
        className: "jsx-563107623" + " " + "adminContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-563107623" + " " + "headleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "login profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-563107623" + " " + "headright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-563107623",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Edjambo Notre Bien Commun")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
        className: "jsx-563107623" + " " + "bodyleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-563107623" + " " + "optionHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_admin_options_OptionContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        admin: admin,
        showOption: showOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_admin_body_BodyContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        admin: admin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-563107623" + " " + "smartheadleft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_img_menu_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        className: "jsx-563107623" + " " + "menuImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-563107623" + " " + "tabList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, menu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: item.id,
          className: "jsx-563107623" + " " + "subTab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-563107623" + " " + "smartheadright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-563107623",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Edjambo Notre Bien Commun"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-563107623" + " " + "smartprofile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "login profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-563107623" + " " + "smartbody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "admin body"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "563107623",
        css: ".headleft.jsx-563107623{background-color:white;line-height:60px;text-align:center;}.headright.jsx-563107623{background-color:green;line-height:45px;text-align:center;}.bodyleft.jsx-563107623{background-color:green;text-align:center;padding-top:5px;overflow:auto;}.optionHeader.jsx-563107623{color:black;font-size:19px;-webkit-text-decoration:underline;text-decoration:underline;}h1.jsx-563107623{font-size:20px;}h2.jsx-563107623{font-size:10px;color:black;float:left;padding:5px;border:1px solid #0f0;}.smartprofile.jsx-563107623{border:1px solid #0f0;float:right;}.menuImg.jsx-563107623{width:8vh;height:8vh;border-radius:50%;background-color:green;}.tabList.jsx-563107623{background-color:black;padding:0px;margin-left:-10px;display:block;opacity:1;width:100px;}.smartheadleft.jsx-563107623{background-color:white;line-height:20px;text-align:center;font-size:10px;}.smartheadright.jsx-563107623{background-color:green;line-height:10px;text-align:center;font-size:10px;border:1px solid #0f0;}.smartbody.jsx-563107623{background-color:white;text-align:center;}@media (max-height:600px){.headleft.jsx-563107623{line-height:8vh;height:35vh;}.headright.jsx-563107623{line-height:2vh;height:25vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDRCLEFBR2dELEFBS0EsQUFLQSxBQU1YLEFBS0csQUFHQSxBQU9PLEFBSVosQUFNYSxBQVFBLEFBTUEsQUFPQSxBQU9ILEFBSUEsVUFyQ1QsRUFuQkksR0FLbkIsQUFHZ0IsQ0E2Q0ksQUFJQSxLQXJDRSxDQUxOLENBL0JLLEFBS0EsQUFLQyxBQStCTixBQVFLLEFBTUEsQUFPQyxJQTdDUSxBQVFmLENBNkNYLEFBSUEsTUExQ0osQ0FVc0IsR0FoQk4sQ0FXVyxDQXBDTCxBQUtBLEFBNENBLEFBTUEsQ0E3Q0YsQUFvRHBCLFNBcEMwQixHQWdCUixJQS9CQSxDQVZsQixBQUtBLEFBNENtQixBQU1BLElBbkJuQixLQU1jLElBL0JkLENBZUEsQ0F3QkEsQUFNMEIsSUFiVixVQTNCaEIsRUE0QkEsTUFhQSIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvcGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZHV4VG9QYWdlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUmVkdVRvUGFnZXNcIjtcbmltcG9ydCBPcHRpb25Db250YWluZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL29wdGlvbnMvT3B0aW9uQ29udGFpbmVyXCI7XG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vYm9keS9Cb2R5Q29udGFpbmVyXCI7XG5cbmltcG9ydCBzbWFydEltZyBmcm9tIFwiLi4vc3RhdGljL2ltZy9tZW51LnBuZ1wiO1xuXG5cbmNsYXNzIEFkbWluUGFnZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7YWRtaW4sc2hvd09wdGlvbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluQ29udGFpbmVyXCI+IFxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgbG9naW4gcHJvZmlsZVxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5FZGphbWJvIE5vdHJlIEJpZW4gQ29tbXVuPC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYm9keWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3B0aW9uSGVhZGVyXCI+T3B0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbkNvbnRhaW5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluID0ge2FkbWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd09wdGlvbiA9IHtzaG93T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgIDxCb2R5Q29udGFpbmVyIFxuICAgICAgICAgICAgICAgICAgICBhZG1pbiA9IHthZG1pbn0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Lyogc21hcnRwaG9uZXMgc3RhcnQgaGVyZSAqL30gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzbWFydGhlYWRsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVudUltZ1wiIHNyYz17c21hcnRJbWd9ID48L2ltZz5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFiTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVudS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1YlRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX0gICAgXG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic21hcnRoZWFkcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVkamFtYm8gTm90cmUgQmllbiBDb21tdW48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFydHByb2ZpbGVcIj5sb2dpbiBwcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNtYXJ0Ym9keVwiPlxuICAgICAgICAgICAgICAgICAgICBhZG1pbiBib2R5XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uSGVhZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYXJ0cHJvZmlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1lbnVJbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGFiTGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFydGhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hcnRoZWFkcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hcnRib2R5e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4dmg7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAydmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWR1eFRvUGFnZXMoQWRtaW5QYWdlKTtcbiJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/pages/admin.js */",
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
//# sourceMappingURL=admin.js.9b514ebc83fc7651b312.hot-update.js.map