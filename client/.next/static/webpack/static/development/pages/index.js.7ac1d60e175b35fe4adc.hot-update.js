webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-sizes/dist/react-sizes.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-sizes/dist/react-sizes.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?e(exports,__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(t,e){"use strict";function n(t,e,n){function o(e){var n=l,r=p;return l=p=void 0,v=e,h=t.apply(r,n)}function a(t){var n=t-y;return void 0===y||n>=e||0>n||m&&t-v>=d}function u(){var t=T();if(a(t))return c(t);b=setTimeout(u,function(t){var n=e-(t-y);return m?O(n,d-(t-v)):n}(t))}function c(t){return b=void 0,k&&l?o(t):(l=p=void 0,h)}function s(){var t=T(),n=a(t);if(l=arguments,p=this,y=t,n){if(void 0===b)return function(t){return v=t,b=setTimeout(u,e),g?o(t):h}(y);if(m)return b=setTimeout(u,e),o(y)}return void 0===b&&(b=setTimeout(u,e)),h}var l,p,d,h,b,y,v=0,g=!1,m=!1,k=!0;if("function"!=typeof t)throw new TypeError(f);return e=i(e)||0,r(n)&&(g=!!n.leading,d=(m="maxWait"in n)?w(i(n.maxWait)||0,e):d,k="trailing"in n?!!n.trailing:k),s.cancel=function(){void 0!==b&&clearTimeout(b),v=0,l=y=p=b=void 0},s.flush=function(){return void 0===b?h:c(T())},s}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||!!t&&"object"==typeof t&&m.call(t)==s}(t))return c;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=d.test(t);return n||h.test(t)?b(t.slice(2),n?2:8):p.test(t)?c:+t}function o(t){return function(){return t}}var a="default"in e?e.default:e,u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f="Expected a function",c=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=parseInt,y="object"==typeof u&&u&&u.Object===Object&&u,v="object"==typeof self&&self&&self.Object===Object&&self,g=y||v||Function("return this")(),m=Object.prototype.toString,w=Math.max,O=Math.min,T=function(){return g.Date.now()},k=function(t,e,i){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(f);return r(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),n(t,e,{leading:o,maxWait:e,trailing:a})},j=function(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1},P=function(t){var e=t.fallbackWidth,n=void 0===e?null:e,r=t.fallbackHeight,i=void 0===r?null:r,o="undefined"!=typeof window;return{width:o?window.innerWidth:n,height:o?window.innerHeight:i,canUseDOM:o}},S=function(){};S.thatReturns=o,S.thatReturnsFalse=o(!1),S.thatReturnsTrue=o(!0),S.thatReturnsNull=o(null),S.thatReturnsThis=function(){return this},S.thatReturnsArgument=function(t){return t};var _=S,x=function(t,e,n,r,i,o,a,u){if(!t){var f;if(void 0===e)f=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,u],s=0;(f=Error(e.replace(/%s/g,function(){return c[s++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}},z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){t.exports=function(){function t(t,e,n,r,i,o){o!==z&&x(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=_,n.PropTypes=n,n}()}),E=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},R=function(){function t(t,e){for(var n=0;e.length>n;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),C=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},D=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},M=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},A="_ReactSizesConfig_",F=C({},A,W.shape({fallbackWidth:W.number,fallbackHeight:W.number,throttle:W.number})),N=function(t){return 480>t.width},I=function(t){return t.width>=1024},U=function(t){return!I(t)},L=Object.freeze({isMobile:N,isTablet:function(t){var e=t.width;return e>=480&&1024>e},isDesktop:I,isGtMobile:function(t){return!N(t)},isGtTablet:function(t){return I(t)},isStTablet:function(t){return N(t)},isStDesktop:U,isTabletAndGreater:function(t){return!N(t)},isTabletAndSmaller:function(t){return!U(t)}}),$=Object.assign(function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return function(t){var r,i,o=function(t,e){return n.map(function(n){return n(t,e)}).reduce(function(t,e){return D({},t,e)},{})};return i=r=function(n){function r(t,e){E(this,r);var n=M(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,e));return n.dispatchSizes=function(){var t=n.getPropsToPass();j(t,n.state.propsToPass)&&n.setState({propsToPass:t})},n.throttledDispatchSizes=k(n.dispatchSizes,(n.context[A]||{}).throttle||200),n.getWindowSizesWithFallback=function(){var t=n.context[A]||{},e=t.fallbackHeight,r=t.fallbackWidth;return P({fallbackHeight:void 0===e?null:e,fallbackWidth:void 0===r?null:r})},n.getPropsToPass=function(){return o(n.getWindowSizesWithFallback(),n.props)},n.state={initialSizes:n.getWindowSizesWithFallback(),propsToPass:n.getPropsToPass()},n}return H(r,e.Component),R(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.throttledDispatchSizes),this.dispatchSizes()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttledDispatchSizes)}},{key:"render",value:function(){return a.createElement(t,D({},this.props,this.state.propsToPass))}}]),r}(),r.displayName="withSizes("+(t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown"))+")",r.contextTypes=F,i}},D({},L)),G=function(t){function n(){return E(this,n),M(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return H(n,e.Component),R(n,[{key:"getChildContext",value:function(){var t=this.props.config,e=void 0===t?{}:t;return C({},A,{fallbackWidth:e.fallbackWidth||null,fallbackHeight:e.fallbackHeight||null,throttle:e.throttle||200})}},{key:"render",value:function(){return this.props.children}}]),n}();G.childContextTypes=F;var q=function(t){var e=t.children,n=t.render,r=function(t,e){var n={};for(var r in t)0>e.indexOf(r)&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["children","render"]),i=e||n;return i?i(r):null};t.withSizes=$,t.SizesProvider=G,t.createSizedComponent=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return $(e)(q)},t.presets=L,t.default=$,Object.defineProperty(t,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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





var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/visitor/PageMenu.js";



var PageMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageMenu, _Component);

  function PageMenu(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageMenu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageMenu).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "menu", this.props.isMobile ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MobileMenu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DesktopMenu, {
        nom: nom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
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
//# sourceMappingURL=index.js.7ac1d60e175b35fe4adc.hot-update.js.map