webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ReduToPages.js":
/*!***************************************!*\
  !*** ./src/components/ReduToPages.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.53bae1bb25b7f32c69a2.hot-update.js.map