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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/css/main.css */ "./static/css/main.css");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_admin_AdminPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/admin/AdminPage */ "./src/components/admin/AdminPage.js");
/* harmony import */ var _src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/redux/menuActionsCreator */ "./src/redux/menuActionsCreator.js");
/* harmony import */ var _src_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/redux/dataActionsCreator */ "./src/redux/dataActionsCreator.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
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






/* Redux Elements */





var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    activateMenu: function activateMenu(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__["default"].activateMenu(decision, menuItem));
    },
    hideFunction: function hideFunction(decision, menuItem) {
      return dispatch(_src_redux_menuActionsCreator__WEBPACK_IMPORTED_MODULE_5__["default"].hideFunction(decision, menuItem));
    },
    setData: function setData(data) {
      return dispatch(_src_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_6__["default"].setData(data));
    }
  };
};

var PageContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_src_components_admin_AdminPage__WEBPACK_IMPORTED_MODULE_4__["default"]);

var Admin =
/*#__PURE__*/
function (_Component) {
  _inherits(Admin, _Component);

  function Admin() {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).apply(this, arguments));
  }

  _createClass(Admin, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: _src_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"],
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

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./src/components/admin/AdminPage.js":
/*!*******************************************!*\
  !*** ./src/components/admin/AdminPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/AdminPage.js";

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Admin");
    }
  }]);

  return AdminPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ }),

/***/ "./src/lib/axios.js":
/*!**************************!*\
  !*** ./src/lib/axios.js ***!
  \**************************/
/*! exports provided: setData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/dataActionsCreator */ "./src/redux/dataActionsCreator.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);



/* var customData = require('./data.json'); */

function setData(dispatch) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('./data.json').then(function (response) {
    dispatch(_redux_dataActionsCreator__WEBPACK_IMPORTED_MODULE_1__["default"].setData(response));
    console.log(response);
  }).catch(function (err) {
    console.log("dit not get the data.json");
    console.log("erreur:", err);
  });
}
/* data({ req, isServer, params, store }) {
    // server-side logic
    if (isServer) {
      let data = JSON.parse(require('fs').readFileSync('static/data.json', 'utf8'))
      return { authors: data }
    }
    // client-side logic
    return axios.get('/data.json')
    .then((res) => {
      return {
        authors: res.data
       }
    })
  } */

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
  INITIALIZE_BODY_DATA: 'set body data'
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

/***/ "./src/redux/dataActionsCreator.js":
/*!*****************************************!*\
  !*** ./src/redux/dataActionsCreator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");

var dataActionsCreator = {
  setData: function setData(data) {
    return {
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_0__["default"].INITIALIZE_BODY_DATA,
      data: data
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dataActionsCreator);

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);



var initialState = _lib_menuData__WEBPACK_IMPORTED_MODULE_1__["default"];

var menuItemReducer = function menuItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var menuReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  menu: menuItemReducer
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
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/axios */ "./src/lib/axios.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/constants */ "./src/lib/constants.js");






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

/***/ "./static/css/main.css":
/*!*****************************!*\
  !*** ./static/css/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/admin.js */"./pages/admin.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

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

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map