webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./src/components/admin/options/OptionContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/admin/options/OptionContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionContainer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OptionContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionContainer, _Component);

  function OptionContainer(props) {
    var _this;

    _classCallCheck(this, OptionContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionContainer).call(this, props));
    console.log(_this.props);

    _this.setAdminBody = function (e) {
      e.preventDefault();
      _this.getOptionName;
      console.log("option clicked", e.target.value);
    };

    _this.selectedoption = {};

    _this.getOptionName = function (option) {
      _this.selectedoption = option;
    };

    return _this;
  }

  _createClass(OptionContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var admin = this.props.admin;
      var adminArray = Object.values(admin);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3689635848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, adminArray.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: item.id,
          onClick: _this2.setAdminBody,
          className: "jsx-3689635848" + " " + "option",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, item.name);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3689635848",
        css: "div.jsx-3689635848{margin-top:5px;}.option.jsx-3689635848{border:4px outset #0ff;width:90%;margin-left:2.5%;background-color:blue;border-radius:15px;height:30px;line-height:30px;color:white;font-size:19px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9vcHRpb25zL09wdGlvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjRCLEFBR29DLEFBR1EsZUFGM0IsUUFHYyxVQUNNLGlCQUNNLHNCQUNILG1CQUNQLFlBQ0ssaUJBQ0wsWUFDRyxlQUNuQiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvYWRtaW4vb3B0aW9ucy9PcHRpb25Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBPcHRpb25Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLnNldEFkbWluQm9keSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvbk5hbWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3B0aW9uIGNsaWNrZWRcIixlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRvcHRpb24gPSB7fTtcbiAgICAgICAgdGhpcy5nZXRPcHRpb25OYW1lID0gKG9wdGlvbikgPT57XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkb3B0aW9uID0gb3B0aW9uO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHthZG1pbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYWRtaW5BcnJheSA9IE9iamVjdC52YWx1ZXMoYWRtaW4pO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHthZG1pbkFycmF5Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge3RoaXMuc2V0QWRtaW5Cb2R5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vcHRpb257XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IG91dHNldCAjMGZmO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoyLjUlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/admin/options/OptionContainer.js */",
        __self: this
      }));
    }
  }]);

  return OptionContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OptionContainer);

/***/ })

})
//# sourceMappingURL=admin.js.aeb9331ef789b07835b1.hot-update.js.map