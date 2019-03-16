webpackHotUpdate("static/development/pages/index.js",{

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
        menu: menu,
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
      }, ".menu.jsx-3386340174{margin:0px;padding:0;background-color:black;height:40px;opacity:0.7;}.profilMenu.jsx-3386340174{margin:0px;padding:0px;list-style:none;}.profList.jsx-3386340174{height:45px;opacity:1;line-height:40px;text-align:center;font-size:16px;}.profList.jsx-3386340174:hover .profSubmenuList.jsx-3386340174{display:block;}.proflinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;font-family:'Times New Roman',Times,serif;width:40px;height:40px;border-radius:50%;}.proflinkStyle.jsx-3386340174:hover{background-color:green;}.subProfilMenu.jsx-3386340174{background-color:black;padding-left:0px;position:relative;top:-15px;right:70px;z-index:10;opacity:0.9;width:115px;}.profSubmenuList.jsx-3386340174{display:none;list-style:none;text-align:center;background-color:black;height:40px;}.profSubmenuList.jsx-3386340174:hover{background-color:green;}.profLinkStyle.jsx-3386340174{-webkit-text-decoration:none;text-decoration:none;color:white;font-family:'Times New Roman',Times,serif;font-size:15px;font-weight:bold;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy92aXNpdG9yL1BhZ2VNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDNEIsQUFHb0MsQUFPQSxBQUtDLEFBT0UsQUFHTyxBQU9FLEFBR0EsQUFVVixBQU9VLEFBR0YsV0FuRFgsQUFPRSxDQUtGLENBOEJNLENBdkJwQixPQWxCMkIsQ0FZTixDQUxELEFBcUJwQixBQUdxQixBQWlCckIsTUFOc0IsVUFsQ3RCLEFBS3NCLENBbUJBLElBL0JOLEdBMENXLEdBdEJxQixBQThCaEMsTUFqREEsQ0FZRyxDQW1CTCxJQW1Ca0MsTUFqRGhELEFBK0JlLEVBVUMsRUE3QmhCLE9Bb0JlLEdBVWYsUUFUZ0IsRUFkRCxVQWVDLENBZEEsQ0E4QkcsVUFmbkIsQ0Fkc0IsSUE4QkQsY0E3QnJCLEdBOEJrQixjQUNsQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvdmlzaXRvci9QYWdlTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aFNpemVzIGZyb20gJ3JlYWN0LXNpemVzJztcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tIFwiLi4vdG9vbHMvbWVudS9kZXNrdG9wL0Rlc2t0b3BNZW51XCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi4vdG9vbHMvbWVudS9tb2JpbGUvTW9iaWxlTWVudVwiO1xuXG5cbmNsYXNzIFBhZ2VNZW51IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7bWVudX0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvKiBpZih0aGlzLnByb3BzLmlzTm90TW9iaWxlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVza3RvcFwiKTtcbiAgICAgICAgICAgIHJldHVybiA8RGVza3RvcE1lbnUgbWVudT17bWVudX0vPlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDxNb2JpbGVNZW51IG1lbnU9e21lbnV9IC8+XG4gICAgICAgIH0gKi9cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0IFxuICAgICAgICAgICAgICAgICAgICBtZW51PXttZW51fVxuICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9maWxNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9mbGlua1N0eWxlXCIgc3JjPXtpbWd9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1YlByb2ZpbE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZlN1Ym1lbnVMaXN0XCI+PExpbmsgcHJlZmV0Y2ggaHJlZj1cInByb2ZpbFwiPjxhIGNsYXNzTmFtZT1cInByb2ZMaW5rU3R5bGVcIj5Qcm9maWw8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZTdWJtZW51TGlzdFwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCJjb25uZXhpb25cIj48YSBjbGFzc05hbWU9XCJwcm9mTGlua1N0eWxlXCI+Q29ubmV4aW9uPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mU3VibWVudUxpc3RcIj48TGluayBwcmVmZXRjaCBocmVmPVwiZGVjb25uZXhpb25cIj48YSBjbGFzc05hbWU9XCJwcm9mTGlua1N0eWxlXCI+RMOpY29ubmV4aW9uPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9mU3VibWVudUxpc3RcIj48TGluayBwcmVmZXRjaCBocmVmPVwiYWRtaW5cIj48YSBjbGFzc05hbWU9XCJwcm9mTGlua1N0eWxlXCI+QWRtaW48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsTWVudXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZkxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZMaXN0OmhvdmVyIC5wcm9mU3VibWVudUxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJvZmxpbmtTdHlsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mbGlua1N0eWxlOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YlByb2ZpbE1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZTdWJtZW51TGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZTdWJtZW51TGlzdDpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9mTGlua1N0eWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU2l6ZXNUb1Byb3BzID0gKHsgd2lkdGggfSkgPT4gKHtcbiAgICBpc05vdE1vYmlsZTogd2lkdGggPiA3NjgsXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaXplcyhtYXBTaXplc1RvUHJvcHMpKFBhZ2VNZW51KTtcbiJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js */"));
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
//# sourceMappingURL=index.js.54ee60ae093dcf6f8fa4.hot-update.js.map