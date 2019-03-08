webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./src/components/admin/body/SmartBodyContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/admin/body/SmartBodyContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mesProjets/Edjambo/client/src/components/admin/body/SmartBodyContainer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* import DashboardBody from "./DashboardBody";
import ActivitesBody from "./ActivitesBody";
import AnnoncesBody from "./AnnoncesBody";
import AssociationsBody from "./AssociationsBody";
import ContactBody from "./ContactBody";
import EnbcBody from "./EnbcBody";
import GallerieBody from "./GallerieBody";
import MediaBody from "./MediaBody";
import MembresBody from "./MembresBody"; */

var SmartBodyContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartBodyContainer, _Component);

  function SmartBodyContainer(props) {
    _classCallCheck(this, SmartBodyContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartBodyContainer).call(this, props));
  }

  _createClass(SmartBodyContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2007870789" + " " + "smartbody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "smart body", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2007870789",
        css: ".smartbody.jsx-2007870789{background-color:white;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvbWVzUHJvamV0cy9FZGphbWJvL2NsaWVudC9zcmMvY29tcG9uZW50cy9hZG1pbi9ib2R5L1NtYXJ0Qm9keUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjRCLEFBRzRDLHVCQUNMLGtCQUN0QiIsImZpbGUiOiIvaG9tZS91c2VyL21lc1Byb2pldHMvRWRqYW1iby9jbGllbnQvc3JjL2NvbXBvbmVudHMvYWRtaW4vYm9keS9TbWFydEJvZHlDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuLyogaW1wb3J0IERhc2hib2FyZEJvZHkgZnJvbSBcIi4vRGFzaGJvYXJkQm9keVwiO1xuaW1wb3J0IEFjdGl2aXRlc0JvZHkgZnJvbSBcIi4vQWN0aXZpdGVzQm9keVwiO1xuaW1wb3J0IEFubm9uY2VzQm9keSBmcm9tIFwiLi9Bbm5vbmNlc0JvZHlcIjtcbmltcG9ydCBBc3NvY2lhdGlvbnNCb2R5IGZyb20gXCIuL0Fzc29jaWF0aW9uc0JvZHlcIjtcbmltcG9ydCBDb250YWN0Qm9keSBmcm9tIFwiLi9Db250YWN0Qm9keVwiO1xuaW1wb3J0IEVuYmNCb2R5IGZyb20gXCIuL0VuYmNCb2R5XCI7XG5pbXBvcnQgR2FsbGVyaWVCb2R5IGZyb20gXCIuL0dhbGxlcmllQm9keVwiO1xuaW1wb3J0IE1lZGlhQm9keSBmcm9tIFwiLi9NZWRpYUJvZHlcIjtcbmltcG9ydCBNZW1icmVzQm9keSBmcm9tIFwiLi9NZW1icmVzQm9keVwiOyAqL1xuXG5cbmNsYXNzIFNtYXJ0Qm9keUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic21hcnRib2R5XCI+XG4gICAgICAgICAgICAgICAgc21hcnQgYm9keVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuc21hcnRib2R5e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgICAgLyogIGxldCB0b0dvVG87XG4gICAgICAgIGxldCB7YWRtaW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBhZG1pbil7XG4gICAgICAgICAgICBpZihhZG1pbltpdGVtXS5zZXR0ZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdG9Hb1RvID0gYWRtaW5baXRlbV0uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKi9cbiAgICAgICAvKiAgc3dpdGNoKHRvR29Ubyl7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0ZXNCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbm5vbmNlc0JvZHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5cmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvZHlyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbWJyZXNCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NvY2lhdGlvbnNCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUJvZHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5cmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvZHlyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJpZUJvZHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5cmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvZHlyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVuYmNCb2R5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9keXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkQm9keSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvZHlyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9Ki9cbiAgICAgICAgXG4gICAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU21hcnRCb2R5Q29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/home/user/mesProjets/Edjambo/client/src/components/admin/body/SmartBodyContainer.js */",
        __self: this
      }));
      /*  let toGoTo;
       let {admin} = this.props;
       for (let item in admin){
           if(admin[item].setted == true){
               toGoTo = admin[item].id;
           }
       } */

      /*  switch(toGoTo){
           case 1:
               return(
                   <section className="bodyright">
                       <DashboardBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 2:
               return(
                   <section className="bodyright">
                       <ActivitesBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 3:
               return(
                   <section className="bodyright">
                       <AnnoncesBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 4:
               return(
                   <section className="bodyright">
                       <MembresBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 5:
               return(
                   <section className="bodyright">
                       <AssociationsBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 6:
               return(
                   <section className="bodyright">
                       <MediaBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 7:
               return(
                   <section className="bodyright">
                       <ContactBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 8:
               return(
                   <section className="bodyright">
                       <GallerieBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           case 9:
               return(
                   <section className="bodyright">
                       <EnbcBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
           default:
               return(
                   <section className="bodyright">
                       <DashboardBody />
                       <style jsx>{`
                       .bodyright{
                           background-color: white;
                           text-align: center; 
                       }
                       `}</style>
                   </section>
               )
       }*/
    }
  }]);

  return SmartBodyContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartBodyContainer);

/***/ })

})
//# sourceMappingURL=admin.js.a2ff71a6b8b1355a64be.hot-update.js.map