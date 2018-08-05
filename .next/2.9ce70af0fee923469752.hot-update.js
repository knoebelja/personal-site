webpackHotUpdate(2,{

/***/ "./components/NavAnchor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Anchor__ = __webpack_require__("./components/Anchor.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-size: 32px;\n  text-decoration: ", ";\n  &:hover,\n  &:focus {\n    cursor: ", ";\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var NavAnchor = __WEBPACK_IMPORTED_MODULE_1__Anchor__["a" /* default */].extend(_templateObject, function (props) {
  return props.isCurrent ? "overline underline" : "underline";
}, function (props) {
  return props.isCurrent ? "not-allowed" : "progress";
});
/* harmony default export */ __webpack_exports__["a"] = (NavAnchor);

/***/ })

})
//# sourceMappingURL=2.9ce70af0fee923469752.hot-update.js.map