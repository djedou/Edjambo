webpackHotUpdate("static/development/pages/plus.js",{

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
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_menu_desktop_DesktopMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/menu/desktop/DesktopMenu */ "./src/components/tools/menu/desktop/DesktopMenu.js");
/* harmony import */ var _tools_menu_mobile_MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/menu/mobile/MobileMenu */ "./src/components/tools/menu/mobile/MobileMenu.js");





var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js";






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
        className: "jsx-3386340174" + " " + "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuList, {
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3386340174" + " " + "profilMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: img,
        className: "jsx-3386340174" + " " + "proflinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3386340174" + " " + "subProfilMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Link, {
        prefetch: true,
        href: "profil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Profil"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Link, {
        prefetch: true,
        href: "connexion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Connexion"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Link, {
        prefetch: true,
        href: "deconnexion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "D\xE9connexion"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3386340174" + " " + "profSubmenuList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Link, {
        prefetch: true,
        href: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3386340174" + " " + "profLinkStyle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Admin")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3386340174",
        __self: this
      }, ".menu.jsx-3386340174{margin:0px;padding:0;background-color:black;height:40px;opacity:0.7;}.profilMenu.jsx-3386340174{margin:0px;padding:0px;list-style:none;}.profList.jsx-3386340174{height:45px;opacity:1;line-height:40px;text-align:center;font-size:16px;}.profList.jsx-3386340174:hover .profSubmenuList.jsx-3386340174{display:block;}.proflinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;font-family:'Times New Roman',Times,serif;width:40px;height:40px;border-radius:50%;}.proflinkStyle.jsx-3386340174:hover{background-color:green;}.subProfilMenu.jsx-3386340174{background-color:black;padding-left:0px;position:relative;top:-15px;right:70px;z-index:10;opacity:0.9;width:115px;}.profSubmenuList.jsx-3386340174{display:none;list-style:none;text-align:center;background-color:black;height:40px;}.profSubmenuList.jsx-3386340174:hover{background-color:green;}.profLinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy92aXNpdG9yL1BhZ2VNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDNEIsQUFHb0MsQUFPQSxBQUtDLEFBT0UsQUFHTyxBQU9FLEFBR0EsQUFVVixBQU9VLEFBR0YsV0FuRFgsQUFPRSxDQUtGLENBOEJNLENBdkJwQixPQWxCMkIsQ0FZTixDQUxELEFBcUJwQixBQUdxQixBQWlCckIsTUFOc0IsVUFsQ3RCLEFBS3NCLENBbUJBLElBL0JOLEdBMENXLEdBdEJxQixBQThCaEMsTUFqREEsQ0FZRyxDQW1CTCxJQW1Ca0MsTUFqRGhELEFBK0JlLEVBVUMsRUE3QmhCLE9Bb0JlLEdBVWYsUUFUZ0IsRUFkRCxVQWVDLENBZEEsQ0E4QkcsVUFmbkIsQ0Fkc0IsSUE4QkQsY0E3QnJCLEdBOEJrQixjQUNsQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvdmlzaXRvci9QYWdlTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aFNpemVzIGZyb20gJ3JlYWN0LXNpemVzJztcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tIFwiLi4vdG9vbHMvbWVudS9kZXNrdG9wL0Rlc2t0b3BNZW51XCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi4vdG9vbHMvbWVudS9tb2JpbGUvTW9iaWxlTWVudVwiO1xuXG5cbmNsYXNzIFBhZ2VNZW51IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7bWVudX0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvKiBpZih0aGlzLnByb3BzLmlzTm90TW9iaWxlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVza3RvcFwiKTtcbiAgICAgICAgICAgIHJldHVybiA8RGVza3RvcE1lbnUgbWVudT17bWVudX0vPlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDxNb2JpbGVNZW51IG1lbnU9e21lbnV9IC8+XG4gICAgICAgIH0gKi9cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0IFxuICAgICAgICAgICAgICAgICAgICBtZW51PXt0aGlzLnByb3BzLm1lbnV9XG4gICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2ZpbE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZsaW5rU3R5bGVcIiBzcmM9e2ltZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViUHJvZmlsTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mU3VibWVudUxpc3RcIj48TGluayBwcmVmZXRjaCBocmVmPVwicHJvZmlsXCI+PGEgY2xhc3NOYW1lPVwicHJvZkxpbmtTdHlsZVwiPlByb2ZpbDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZlN1Ym1lbnVMaXN0XCI+PExpbmsgcHJlZmV0Y2ggaHJlZj1cImNvbm5leGlvblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5Db25uZXhpb248L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCJkZWNvbm5leGlvblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5Ew6ljb25uZXhpb248L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCJhZG1pblwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5BZG1pbjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubWVudXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxNZW51e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mTGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZkxpc3Q6aG92ZXIgLnByb2ZTdWJtZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mbGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZsaW5rU3R5bGU6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViUHJvZmlsTWVudXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZlN1Ym1lbnVMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZlN1Ym1lbnVMaXN0OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZMaW5rU3R5bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTaXplc1RvUHJvcHMgPSAoeyB3aWR0aCB9KSA9PiAoe1xuICAgIGlzTm90TW9iaWxlOiB3aWR0aCA+IDc2OCxcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpemVzKG1hcFNpemVzVG9Qcm9wcykoUGFnZU1lbnUpO1xuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js */"));
    }
  }]);

  return PageMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isNotMobile: width > 768
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_7___default()(mapSizesToProps)(PageMenu));

/***/ })

})
//# sourceMappingURL=plus.js.823790b5052c157e4ea3.hot-update.js.map