webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./src/lib/slate/activites/Titre.js":
/*!******************************************!*\
  !*** ./src/lib/slate/activites/Titre.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/lib/slate-react.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/lib/slate/activites/Titre.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* const existingValue = JSON.parse(localStorage.getItem('content')) */

var initialValue = slate__WEBPACK_IMPORTED_MODULE_2__["Value"].fromJSON(
/* existingValue ||  */
{
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'A line of text in a paragraph.'
        }]
      }]
    }]
  }
});

var Titre =
/*#__PURE__*/
function (_Component) {
  _inherits(Titre, _Component);

  function Titre(props) {
    var _this;

    _classCallCheck(this, Titre);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Titre).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var value = _ref.value;

      // to save it in the variable content

      /* const content = JSON.stringify(titre.toJSON()); */
      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event, editor, next) {
      /*  console.log(event.key); */
      console.log(event);
      return next();
    });

    _this.state = {
      value: initialValue
    };
    return _this;
  }

  _createClass(Titre, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
        value: this.state.value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      });
    }
  }]);

  return Titre;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Titre);

/***/ })

})
//# sourceMappingURL=admin.js.0396298fa87b3e6498cf.hot-update.js.map