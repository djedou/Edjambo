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
        className: "jsx-812201649" + " " + "description",
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
        styleId: "812201649",
        css: ".description.jsx-812201649{border:2px solid blue;text-align:left;font-size :2vh;height:100px: width:50vw;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvbGliL3NsYXRlL2FjdGl2aXRlcy9EZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDRCLEFBRzJDLHNCQUNOLGdCQUNELGVBRUoseUJBQ0csY0FDaEIiLCJmaWxlIjoiL2hvbWUvdXNlci9tZXNQcm9qZXRzL0VkamFtYm8vY2xpZW50L3NyYy9saWIvc2xhdGUvYWN0aXZpdGVzL0Rlc2NyaXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAnc2xhdGUnO1xuXG5cbi8qIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb250ZW50JykpICovXG5jb25zdCBpbml0aWFsVmFsdWUgPSBWYWx1ZS5mcm9tSlNPTihcbiAgICAvKiBleGlzdGluZ1ZhbHVlIHx8ICAqL3tcbiAgICBkb2N1bWVudDoge1xuICAgICAgbm9kZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG9iamVjdDogJ2Jsb2NrJyxcbiAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvYmplY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RhcGUgdGhlIGFjdGl2aXR5IGRlc2NyaXB0aW9uIGhlcmUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNsYXNzIERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcbiAgICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNoYW5nZSA9ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgLy8gdG8gc2F2ZSBpdCBpbiB0aGUgdmFyaWFibGUgY29udGVudFxuICAgICAgICAvKiBjb25zdCBjb250ZW50ID0gSlNPTi5zdHJpbmdpZnkodGl0cmUudG9KU09OKCkpOyAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH07XG5cbiAgICBvbktleURvd24gPSAoZXZlbnQsIGVkaXRvciwgbmV4dCkgPT4ge1xuICAgICAgIC8qICBjb25zb2xlLmxvZyhldmVudC5rZXkpICovXG4gICAgICAgIHJldHVybiBuZXh0KClcbiAgICAgIH07XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuICAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxFZGl0b3IgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMnZoO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/lib/slate/activites/Description.js */",
        __self: this
      }));
    }
  }]);

  return Description;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=admin.js.f260a159e81ed45e40ca.hot-update.js.map