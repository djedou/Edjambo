webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./src/lib/slate/activites/Description.js":
/*!************************************************!*\
  !*** ./src/lib/slate/activites/Description.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/lib/slate-react.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/lib/slate/activites/Description.js";


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

var initialValue = slate__WEBPACK_IMPORTED_MODULE_3__["Value"].fromJSON(
/* existingValue ||  */
{
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'Tape the activity description here'
        }]
      }]
    }]
  }
});

var Description =
/*#__PURE__*/
function (_Component) {
  _inherits(Description, _Component);

  function Description(props) {
    var _this;

    _classCallCheck(this, Description);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Description).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var value = _ref.value;

      // to save it in the variable content

      /* const content = JSON.stringify(titre.toJSON()); */
      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event, editor, next) {
      /*  console.log(event.key) */
      return next();
    });

    _this.state = {
      value: initialValue
    };
    return _this;
  }

  _createClass(Description, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-214224649" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
        value: this.state.value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "214224649",
        css: ".description.jsx-214224649{border:2px solid blue;text-align:left;font-size :2vh;height:100px: width:50vw;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvbGliL3NsYXRlL2FjdGl2aXRlcy9EZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDRCLEFBRzJDLHNCQUNOLGdCQUNELGVBRUoseUJBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvbGliL3NsYXRlL2FjdGl2aXRlcy9EZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gJ3NsYXRlJztcblxuXG4vKiBjb25zdCBleGlzdGluZ1ZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udGVudCcpKSAqL1xuY29uc3QgaW5pdGlhbFZhbHVlID0gVmFsdWUuZnJvbUpTT04oXG4gICAgLyogZXhpc3RpbmdWYWx1ZSB8fCAgKi97XG4gICAgZG9jdW1lbnQ6IHtcbiAgICAgIG5vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvYmplY3Q6ICdibG9jaycsXG4gICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb2JqZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgIGxlYXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUYXBlIHRoZSBhY3Rpdml0eSBkZXNjcmlwdGlvbiBoZXJlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcblxuICBjbGFzcyBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgb25DaGFuZ2UgPSAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIC8vIHRvIHNhdmUgaXQgaW4gdGhlIHZhcmlhYmxlIGNvbnRlbnRcbiAgICAgICAgLyogY29uc3QgY29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRpdHJlLnRvSlNPTigpKTsgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICB9O1xuXG4gICAgb25LZXlEb3duID0gKGV2ZW50LCBlZGl0b3IsIG5leHQpID0+IHtcbiAgICAgICAvKiAgY29uc29sZS5sb2coZXZlbnQua2V5KSAqL1xuICAgICAgICByZXR1cm4gbmV4dCgpXG4gICAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAgKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8RWRpdG9yIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDJ2aDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDpcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uO1xuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/lib/slate/activites/Description.js */",
        __self: this
      }));
    }
  }]);

  return Description;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=admin.js.1a86c6832bd4af635c62.hot-update.js.map