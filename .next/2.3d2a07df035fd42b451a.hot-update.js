webpackHotUpdate(2,{

/***/ "./components/Anchor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: darkturquoise;\n  font-size: 24px;\n  text-decoration: none;\n  font-weight: 100;\n  text-decoration: ", ";\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n    cursor: \"progress\"};\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Anchor = __WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].a(_templateObject, function (props) {
  return props.isCurrent ? "overline underline" : "underline";
});
/* harmony default export */ __webpack_exports__["a"] = (Anchor);

/***/ }),

/***/ "./components/NavAnchor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Anchor__ = __webpack_require__("./components/Anchor.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-size: 32px;\n  text-decoration: ", ";\n  &:hover,\n  &:focus {\n    text-decoration: underline overline;\n    cursor: ", ";\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NavAnchor = __WEBPACK_IMPORTED_MODULE_0__Anchor__["a" /* default */].extend(_templateObject, function (props) {
  return props.isCurrent ? "overline underline" : "underline";
}, function (props) {
  return props.isCurrent ? "not-allowed" : "progress";
});
/* harmony default export */ __webpack_exports__["a"] = (NavAnchor);

/***/ })

})
//# sourceMappingURL=2.3d2a07df035fd42b451a.hot-update.js.map