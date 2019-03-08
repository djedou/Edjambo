webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* let initialState = Menudata; */

var menuItemReducer = function menuItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lib_menuData__WEBPACK_IMPORTED_MODULE_1__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return _objectSpread({}, state);
  }
};

var adminItemReducer = function adminItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lib_adminData__WEBPACK_IMPORTED_MODULE_2__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ADMIN_BODY:
      var newState = _objectSpread({}, state);

      var option = newState[action.name];
      option.setted = !action.setted;

      for (var item in newState) {
        console.log(item);
      }

      return _objectSpread({}, newState, newState[option]);

    default:
      return _objectSpread({}, state);
  }
};

var menuReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  menu: menuItemReducer,
  admin: adminItemReducer
});
/* harmony default export */ __webpack_exports__["default"] = (menuReducer);

/***/ })

})
//# sourceMappingURL=index.js.d61389ddbb439bee1a60.hot-update.js.map