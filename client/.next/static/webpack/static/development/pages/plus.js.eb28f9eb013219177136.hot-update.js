webpackHotUpdate("static/development/pages/plus.js",{

/***/ "./src/components/tools/menu/MenuList.js":
/*!***********************************************!*\
  !*** ./src/components/tools/menu/MenuList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _desktop_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desktop/MenuItem */ "./src/components/tools/menu/desktop/MenuItem.js");
/* harmony import */ var _mobile_SmartMenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile/SmartMenuList */ "./src/components/tools/menu/mobile/SmartMenuList.js");






var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/tools/menu/MenuList.js";





var MenuList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuList, _Component);

  function MenuList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuList).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuList, [{
    key: "render",
    value: function render() {
      var menu = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.props.menu);

      var Items = menu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_desktop_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: item.id,
          id: item.id,
          name: item.name,
          active: item.active,
          title: item.title,
          url: item.url,
          hideSubmenu: item.hideSubmenu,
          submenu: item.submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2837852835" + " " + "mainMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-2837852835" + " " + "smartMenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_mobile_SmartMenuList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-2837852835" + " " + "menuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, Items), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2837852835",
        __self: this
      }, ".menuList.jsx-2837852835{margin:0px;padding:0px;list-style:none;}.smartMenuList.jsx-2837852835{margin:0px;padding-left:10px;padding-top:4px;list-style:none;}@media (max-width:600px){.menuList.jsx-2837852835{display:none;}}@media (min-width:602px){.smartMenuList.jsx-2837852835{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy90b29scy9tZW51L01lbnVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIsQUFHb0MsQUFLQSxBQU9NLEFBS0EsV0FoQkwsQUFLTSxFQU9sQixBQUtBLFVBaEJnQixNQUtBLFVBSnBCLE1BS29CLGdCQUNwQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvdG9vbHMvbWVudS9NZW51TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vZGVza3RvcC9NZW51SXRlbVwiO1xuaW1wb3J0IFNtYXJ0TWVudUxpc3QgZnJvbSBcIi4vbW9iaWxlL1NtYXJ0TWVudUxpc3RcIjtcblxuXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBtZW51ID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLm1lbnUpO1xuICAgICAgICBsZXQgSXRlbXMgPSBtZW51Lm1hcCgoaXRlbSkgPT57XG4gICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVN1Ym1lbnU9e2l0ZW0uaGlkZVN1Ym1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51PXtpdGVtLnN1Ym1lbnV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5NZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNtYXJ0TWVudUxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNtYXJ0TWVudUxpc3QgXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51PXttZW51fSAgICBcbiAgICAgICAgICAgICAgICAgICAgLz4gICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudUxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge0l0ZW1zfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYXJ0TWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnVMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAycHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYXJ0TWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/tools/menu/MenuList.js */"));
    }
  }]);

  return MenuList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./src/components/tools/menu/desktop/MenuItem.js":
/*!*******************************************************!*\
  !*** ./src/components/tools/menu/desktop/MenuItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/tools/menu/desktop/MenuItem.js";




var MenuItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuItem, _Component);

  function MenuItem(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuItem).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuItem, [{
    key: "render",
    value: function render() {
      var submenu = this.props.submenu;

      var menuArray = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(submenu);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-2693209637" + " " + "submenuItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: this.props.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2693209637" + " " + "linkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-2693209637" + " " + "sbmenuUl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, menuArray.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: item.id,
          className: "jsx-2693209637" + " " + "SubmenuList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          prefetch: true,
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "jsx-2693209637" + " " + "sublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.title)));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2693209637",
        __self: this
      }, ".submenuItems.jsx-2693209637{float:left;width:100px;height:45px;opacity:1;line-height:40px;text-align:center;font-size:16px;}.linkStyle.jsx-2693209637{-webkit-text-decoration:none;text-decoration:none;font-family:'Times New Roman',Times,serif;display:block;color:white;font-weight:bold;}.linkStyle.jsx-2693209637:hover{background-color:green;}.SubmenuList.jsx-2693209637{display:none;list-style:none;text-align:center;background-color:black;height:40px;}.SubmenuList.jsx-2693209637:hover{background-color:green;}.submenuItems.jsx-2693209637:hover .SubmenuList.jsx-2693209637{display:block;}.sbmenuUl.jsx-2693209637{background-color:black;padding-left:0px;position:absolute;z-index:10;display:block;opacity:0.9;width:150px;}.sublinkStyle.jsx-2693209637{-webkit-text-decoration:none;text-decoration:none;width:150px;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy90b29scy9tZW51L2Rlc2t0b3AvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUM0QixBQUdvQyxBQVNVLEFBT0UsQUFHWCxBQU9XLEFBR1QsQUFHUyxBQVNGLFdBeENULEVBbUJJLENBVXBCLFNBNUJnQixBQWVoQixBQVVBLEFBTXFCLE1BWkMsTUFsQlIsS0ErQlEsS0E5QkQsRUFrQk0sR0FacUIsQUFnQ2hDLFFBUEQsSUE5Qk8sQUFzQ04sT0FQRSxDQWJGLElBcUJnQyxNQXRDN0IsRUFrQm5CLENBYWdCLFNBMUJFLEdBSmxCLEFBK0JnQixXQTFCQSxDQTJCaEIsU0FNbUIsRUFoQ0UsYUFpQ0EsSUFoQ3JCLGFBaUNrQixjQUNsQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvdG9vbHMvbWVudS9kZXNrdG9wL01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHtzdWJtZW51fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBtZW51QXJyYXkgPSBPYmplY3QudmFsdWVzKHN1Ym1lbnUpOyBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1Ym1lbnVJdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rU3R5bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNibWVudVVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZW51QXJyYXkubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiU3VibWVudUxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibGlua1N0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3VibWVudUl0ZW1ze1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtTdHlsZTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5TdWJtZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgLlN1Ym1lbnVMaXN0OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1Ym1lbnVJdGVtczpob3ZlciAuU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2JtZW51VWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3VibGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcblxuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/tools/menu/desktop/MenuItem.js */"));
    }
  }]);

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./src/components/tools/menu/mobile/SmartMenuItem.js":
/*!***********************************************************!*\
  !*** ./src/components/tools/menu/mobile/SmartMenuItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/tools/menu/mobile/SmartMenuItem.js";




var SmartMenuItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SmartMenuItem, _Component);

  function SmartMenuItem(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmartMenuItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SmartMenuItem).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmartMenuItem, [{
    key: "render",
    value: function render() {
      var submenu = this.props.submenu;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3223128909",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, submenu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          key: item.id,
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-3223128909" + " " + "subStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, item.title, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          className: "jsx-3223128909",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3223128909",
        __self: this
      }, ".subStyle.jsx-3223128909{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;height:35px;line-height:35px;width:150px;background-color:black;}.subStyle.jsx-3223128909:hover{background-color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy90b29scy9tZW51L21vYmlsZS9TbWFydE1lbnVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCNEIsQUFHOEMsQUFZRSx1QkFDM0IsMkJBWmdCLFlBQ2dDLDBDQUM3QixlQUNFLGlCQUNILGNBQ0YsWUFDSyxpQkFDTCxZQUNXLHVCQUMzQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvdG9vbHMvbWVudS9tb2JpbGUvU21hcnRNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBTbWFydE1lbnVJdGVtIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge3N1Ym1lbnV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c3VibWVudS5tYXAoaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5zdWJTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YlN0eWxlOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0TWVudUl0ZW07Il19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/tools/menu/mobile/SmartMenuItem.js */"));
    }
  }]);

  return SmartMenuItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartMenuItem);

/***/ }),

/***/ "./src/components/tools/menu/mobile/SmartMenuList.js":
/*!***********************************************************!*\
  !*** ./src/components/tools/menu/mobile/SmartMenuList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SmartMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SmartMenuItem */ "./src/components/tools/menu/mobile/SmartMenuItem.js");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../static/img/menu.png */ "./static/img/menu.png");
/* harmony import */ var _static_img_menu_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_img_menu_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/tools/menu/mobile/SmartMenuList.js";






var SmartMenuList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SmartMenuList, _Component);

  function SmartMenuList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmartMenuList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SmartMenuList).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmartMenuList, [{
    key: "render",
    value: function render() {
      var menu = this.props.menu;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3838512970" + " " + "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_img_menu_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "jsx-3838512970" + " " + "menuImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3838512970" + " " + "tabList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, menu.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: item.id,
          className: "jsx-3838512970" + " " + "subTab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          prefetch: true,
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-3838512970" + " " + "sublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
          className: "jsx-3838512970" + " " + "TabSubUl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "jsx-3838512970" + " " + "TabSublinkStyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SmartMenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          submenu: item.submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3838512970",
        __self: this
      }, ".tab.jsx-3838512970{width:30px;list-style:none;}.menuImg.jsx-3838512970{width:35px;height:35px;border-radius:50%;}.tabList.jsx-3838512970{background-color:black;padding:0px;margin-left:-10px;display:block;opacity:1;width:100px;}.subTab.jsx-3838512970{display:none;list-style:none;text-align:center;background-color:black;height:35px;}.subTab.jsx-3838512970:hover{background-color:green;}.tab.jsx-3838512970:hover .subTab.jsx-3838512970{display:block;}.sublinkStyle.jsx-3838512970{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;height:30px;line-height:30px;}.TabSubUl.jsx-3838512970{display:block;width:100px;background-color:green;padding-left:0px;position:relative;left:100px;top:-50px;}.TabSubmenuList.jsx-3838512970{color:white;}.TabSublinkStyle.jsx-3838512970{display:none;}.subTab.jsx-3838512970:hover .TabSublinkStyle.jsx-3838512970{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy90b29scy9tZW51L21vYmlsZS9TbWFydE1lbnVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDNEIsQUFHb0MsQUFJQSxBQUtZLEFBUVgsQUFRVyxBQUdULEFBR08sQUFVUCxBQVNGLEFBR0MsQUFHQyxXQXZERSxBQUlKLENBOENoQixDQWpDb0IsQUFvQ3BCLENBekJBLEFBYWdCLEFBZWhCLFNBbkRzQixBQUlOLEFBZ0JoQixHQWlCMkIsQ0F6QzNCLEVBaUJzQixNQVJBLE1BSnRCLE1BYTJCLEVBd0JOLENBWkwsR0FwQkUsU0FxQjhCLElBWTFCLENBaENSLEdBUUUsT0FQQSxLQVNoQixFQXVCZSxLQS9CZixNQWdDYyxTQWJLLENBY25CLGNBYnFCLGlCQUNILGNBQ0YsWUFDSyxpQkFDckIiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9jb21wb25lbnRzL3Rvb2xzL21lbnUvbW9iaWxlL1NtYXJ0TWVudUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNtYXJ0TWVudUl0ZW0gZnJvbSBcIi4vU21hcnRNZW51SXRlbVwiO1xuaW1wb3J0IHNtYXJ0SW1nIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zdGF0aWMvaW1nL21lbnUucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBTbWFydE1lbnVMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHttZW51fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj4gICAgICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZW51SW1nXCIgc3JjPXtzbWFydEltZ30gPlxuICAgICAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHttZW51Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViVGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibGlua1N0eWxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJUYWJTdWJVbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiVGFiU3VibGlua1N0eWxlXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYXJ0TWVudUl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudT17aXRlbS5zdWJtZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9ICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAudGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tZW51SW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRhYkxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViVGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViVGFiOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRhYjpob3ZlciAuc3ViVGFie1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5UYWJTdWJVbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuVGFiU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLlRhYlN1YmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YlRhYjpob3ZlciAuVGFiU3VibGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0TWVudUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/tools/menu/mobile/SmartMenuList.js */"));
    }
  }]);

  return SmartMenuList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartMenuList);

/***/ }),

/***/ "./src/components/visitor/PageMenu.js":
/*!********************************************!*\
  !*** ./src/components/visitor/PageMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_menu_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/menu/MenuList */ "./src/components/tools/menu/MenuList.js");
/* harmony import */ var _tools_menu_ProfileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/menu/ProfileMenu */ "./src/components/tools/menu/ProfileMenu.js");





var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js";


/* import withSizes from 'react-sizes';
import profileMenu from "../tools/menu/ProfileMenu"; */



/* import DesktopMenu from "../tools/menu/desktop/DesktopMenu";
import MobileMenu from "../tools/menu/mobile/MobileMenu";
 */

var PageMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageMenu, _Component);

  function PageMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageMenu).call(this, props));
    console.log(_this.props);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageMenu, [{
    key: "render",
    value: function render() {
      var menu = this.props.menu;
      /* if(this.props.isNotMobile){
          console.log("desktop");
          return <DesktopMenu menu={menu}/>
      }else{
          console.log("mobile");
          return <MobileMenu menu={menu} />
      } */

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-2436650352" + " " + "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tools_menu_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tools_menu_ProfileMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2436650352",
        __self: this
      }, ".menu.jsx-2436650352{margin:0px;padding:0;background-color:black;height:40px;opacity:0.7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy92aXNpdG9yL1BhZ2VNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHb0MsV0FDRCxVQUNhLHVCQUNYLFlBQ0EsWUFDaEIiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9jb21wb25lbnRzL3Zpc2l0b3IvUGFnZU1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuLyogaW1wb3J0IHdpdGhTaXplcyBmcm9tICdyZWFjdC1zaXplcyc7XG5pbXBvcnQgcHJvZmlsZU1lbnUgZnJvbSBcIi4uL3Rvb2xzL21lbnUvUHJvZmlsZU1lbnVcIjsgKi9cbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiLi4vdG9vbHMvbWVudS9NZW51TGlzdFwiO1xuaW1wb3J0IFByb2ZpbGVNZW51IGZyb20gXCIuLi90b29scy9tZW51L1Byb2ZpbGVNZW51XCI7XG4vKiBpbXBvcnQgRGVza3RvcE1lbnUgZnJvbSBcIi4uL3Rvb2xzL21lbnUvZGVza3RvcC9EZXNrdG9wTWVudVwiO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4uL3Rvb2xzL21lbnUvbW9iaWxlL01vYmlsZU1lbnVcIjtcbiAqL1xuXG5jbGFzcyBQYWdlTWVudSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTsgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge21lbnV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLyogaWYodGhpcy5wcm9wcy5pc05vdE1vYmlsZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlc2t0b3BcIik7XG4gICAgICAgICAgICByZXR1cm4gPERlc2t0b3BNZW51IG1lbnU9e21lbnV9Lz5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vYmlsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiA8TW9iaWxlTWVudSBtZW51PXttZW51fSAvPlxuICAgICAgICB9ICovXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxNZW51TGlzdCBcbiAgICAgICAgICAgICAgICAgICAgbWVudT17bWVudX1cbiAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICA8UHJvZmlsZU1lbnUgLz5cbiAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInByb2ZpbE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZsaW5rU3R5bGVcIiBzcmM9e2ltZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViUHJvZmlsTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mU3VibWVudUxpc3RcIj48TGluayBwcmVmZXRjaCBocmVmPVwicHJvZmlsXCI+PGEgY2xhc3NOYW1lPVwicHJvZkxpbmtTdHlsZVwiPlByb2ZpbDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZlN1Ym1lbnVMaXN0XCI+PExpbmsgcHJlZmV0Y2ggaHJlZj1cImNvbm5leGlvblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5Db25uZXhpb248L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCJkZWNvbm5leGlvblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5Ew6ljb25uZXhpb248L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCJhZG1pblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5BZG1pbjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD4gKi99IFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTWVudTtcblxuLyogY29uc3QgbWFwU2l6ZXNUb1Byb3BzID0gKHsgd2lkdGggfSkgPT4gKHtcbiAgICBpc05vdE1vYmlsZTogd2lkdGggPiA3NjgsXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaXplcyhtYXBTaXplc1RvUHJvcHMpKFBhZ2VNZW51KTtcbiAqL1xuLyogXG4ucHJvZmlsTWVudXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZkxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZMaXN0OmhvdmVyIC5wcm9mU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mbGlua1N0eWxlOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YlByb2ZpbE1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZTdWJtZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZTdWJtZW51TGlzdDpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mTGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiovIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js */"));
    }
  }]);

  return PageMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageMenu);
/* const mapSizesToProps = ({ width }) => ({
    isNotMobile: width > 768,
  })

export default withSizes(mapSizesToProps)(PageMenu);
 */

/* 
.profilMenu{
                        margin: 0px;
                        padding: 0px;
                        list-style: none;
                    }
                    .profList{
                        height: 45px;
                        opacity: 1;
                        line-height: 40px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .profList:hover .profSubmenuList{
                        display: block;
                    }
                    .proflinkStyle{
                        text-decoration: none; 
                        font-family: 'Times New Roman', Times, serif;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    .proflinkStyle:hover{
                        background-color: green;
                    }
                    .subProfilMenu{
                        background-color: black;
                        padding-left: 0px;
                        position: relative;
                        top: -15px;
                        right: 70px;
                        z-index: 10;
                        opacity: 0.9;
                        width: 115px;
                    }
                    .profSubmenuList{
                        display: none;
                        list-style: none;
                        text-align: center;
                        background-color: black;
                        height: 40px;
                    }
                    .profSubmenuList:hover{
                        background-color: green;
                    }
                    .profLinkStyle{
                        text-decoration: none;
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-size: 15px;
                        font-weight: bold;
                        display: block;
                    }

*/

/***/ }),

/***/ "./static/img/menu.png":
/*!*****************************!*\
  !*** ./static/img/menu.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAgkOGRDX5UsQAAAAJklEQVQY02NgwAsY/y9ikMQp+5zx/398ulkYFuPTzUARGHUaVgAA5ukS2R0Gc2oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDItMDlUMTM6MjU6MTYrMDE6MDD0m7jcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAyLTA5VDEzOjI1OjE2KzAxOjAwhcYAYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ })

})
//# sourceMappingURL=plus.js.eb28f9eb013219177136.hot-update.js.map