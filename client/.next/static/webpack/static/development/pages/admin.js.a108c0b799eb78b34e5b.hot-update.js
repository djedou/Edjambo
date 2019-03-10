webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./src/components/admin/body/ActNouBody.js":
/*!*************************************************!*\
  !*** ./src/components/admin/body/ActNouBody.js ***!
  \*************************************************/
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
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/body/ActNouBody.js";


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

var initialTitre = slate__WEBPACK_IMPORTED_MODULE_3__["Value"].fromJSON(
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
var initialDescription = slate__WEBPACK_IMPORTED_MODULE_3__["Value"].fromJSON(
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
var initialText = slate__WEBPACK_IMPORTED_MODULE_3__["Value"].fromJSON(
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

var ActNouBody =
/*#__PURE__*/
function (_Component) {
  _inherits(ActNouBody, _Component);

  function ActNouBody(props) {
    var _this;

    _classCallCheck(this, ActNouBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActNouBody).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChangeTitre", function (_ref) {
      var titre = _ref.titre;

      // to save it in the variable content

      /* const content = JSON.stringify(titre.toJSON()); */
      _this.setState({
        titre: titre
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeDescrip", function (_ref2) {
      var description = _ref2.description;

      // to save it in the variable content

      /* const content = JSON.stringify(description.toJSON()); */
      _this.setState({
        description: description
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeText", function (_ref3) {
      var text = _ref3.text;

      // to save it in the variable content

      /* const content = JSON.stringify(text.toJSON()); */
      _this.setState({
        text: text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event, editor, next) {
      console.log(event.key);
      return next();
    });

    _this.state = {
      titre: initialTitre,
      description: initialDescription,
      text: initialText
    };
    return _this;
  }

  _createClass(ActNouBody, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3406636741",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3406636741",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Titre :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3406636741" + " " + "nouveau1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
        value: this.state.titre,
        onChange: this.onChangeTitre,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3406636741",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Description :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3406636741" + " " + "nouveau1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
        value: this.state.description,
        onChange: this.onChangeDescrip,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3406636741",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Text :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3406636741" + " " + "nouveau1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
        value: this.state.text,
        onChange: this.onChangeText,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3406636741",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Images :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3406636741",
        css: "div.jsx-3406636741{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}span.jsx-3406636741{text-align:left;}.nouveau1.jsx-3406636741{border:2px solid blue;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9ib2R5L0FjdE5vdUJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0k0QixBQUdzQyxBQUtHLEFBR00sZ0JBRjFCLE1BR29CLGdCQUNwQixvQ0FUeUIsMkZBQ0MsOEVBQzFCIiwiZmlsZSI6Ii9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9ib2R5L0FjdE5vdUJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdzbGF0ZSc7XG5cblxuXG4vKiBjb25zdCBleGlzdGluZ1ZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udGVudCcpKSAqL1xuY29uc3QgaW5pdGlhbFRpdHJlID0gVmFsdWUuZnJvbUpTT04oXG4gICAgLyogZXhpc3RpbmdWYWx1ZSB8fCAgKi97XG4gICAgZG9jdW1lbnQ6IHtcbiAgICAgIG5vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvYmplY3Q6ICdibG9jaycsXG4gICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb2JqZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgIGxlYXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBIGxpbmUgb2YgdGV4dCBpbiBhIHBhcmFncmFwaC4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBpbml0aWFsRGVzY3JpcHRpb24gPSBWYWx1ZS5mcm9tSlNPTihcbiAgICAvKiBleGlzdGluZ1ZhbHVlIHx8ICAqL3tcbiAgICBkb2N1bWVudDoge1xuICAgICAgbm9kZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG9iamVjdDogJ2Jsb2NrJyxcbiAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvYmplY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0EgbGluZSBvZiB0ZXh0IGluIGEgcGFyYWdyYXBoLicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGluaXRpYWxUZXh0ID0gVmFsdWUuZnJvbUpTT04oXG4gICAgLyogZXhpc3RpbmdWYWx1ZSB8fCAgKi97XG4gICAgZG9jdW1lbnQ6IHtcbiAgICAgIG5vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvYmplY3Q6ICdibG9jaycsXG4gICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb2JqZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgIGxlYXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBIGxpbmUgb2YgdGV4dCBpbiBhIHBhcmFncmFwaC4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xuICBcblxuY2xhc3MgQWN0Tm91Qm9keSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdHJlOiBpbml0aWFsVGl0cmUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5pdGlhbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGV4dDogaW5pdGlhbFRleHRcbiAgICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNoYW5nZVRpdHJlID0gKHsgdGl0cmUgfSkgPT4ge1xuICAgICAgICAvLyB0byBzYXZlIGl0IGluIHRoZSB2YXJpYWJsZSBjb250ZW50XG4gICAgICAgIC8qIGNvbnN0IGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh0aXRyZS50b0pTT04oKSk7ICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRyZSB9KVxuICAgICAgfTtcbiAgICAgIG9uQ2hhbmdlRGVzY3JpcCA9ICh7IGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICAgICAgLy8gdG8gc2F2ZSBpdCBpbiB0aGUgdmFyaWFibGUgY29udGVudFxuICAgICAgICAvKiBjb25zdCBjb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24udG9KU09OKCkpOyAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb24gfSlcbiAgICAgIH07XG4gICAgICBvbkNoYW5nZVRleHQgPSAoeyB0ZXh0IH0pID0+IHtcbiAgICAgICAgLy8gdG8gc2F2ZSBpdCBpbiB0aGUgdmFyaWFibGUgY29udGVudFxuICAgICAgICAvKiBjb25zdCBjb250ZW50ID0gSlNPTi5zdHJpbmdpZnkodGV4dC50b0pTT04oKSk7ICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0IH0pXG4gICAgICB9O1xuXG4gICAgb25LZXlEb3duID0gKGV2ZW50LCBlZGl0b3IsIG5leHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KVxuICAgICAgICByZXR1cm4gbmV4dCgpXG4gICAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPlRpdHJlIDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3V2ZWF1MVwiPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGl0cmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUaXRyZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uIDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3V2ZWF1MVwiPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VEZXNjcmlwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+VGV4dCA6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm91dmVhdTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPEVkaXRvciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+SW1hZ2VzIDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubm91dmVhdTF7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3ROb3VCb2R5O1xuIl19 */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/admin/body/ActNouBody.js */",
        __self: this
      }));
    }
  }]);

  return ActNouBody;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ActNouBody);

/***/ })

})
//# sourceMappingURL=admin.js.a108c0b799eb78b34e5b.hot-update.js.map