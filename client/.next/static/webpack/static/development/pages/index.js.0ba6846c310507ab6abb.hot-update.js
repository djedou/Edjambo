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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_menu_desktop_DesktopMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/menu/desktop/DesktopMenu */ "./src/components/tools/menu/desktop/DesktopMenu.js");
/* harmony import */ var _tools_menu_mobile_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/menu/mobile/MobileMenu */ "./src/components/tools/menu/mobile/MobileMenu.js");





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
      return this.props.isMobile ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tools_menu_mobile_MobileMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tools_menu_desktop_DesktopMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }
  }]);

  return PageMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isMobile: width <= 768
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_6___default()(mapSizesToProps)(PageMenu));

/***/ })

})
//# sourceMappingURL=index.js.0ba6846c310507ab6abb.hot-update.js.map