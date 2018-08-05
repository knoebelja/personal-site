webpackHotUpdate(2,{

/***/ "./components/PageHeader/PageHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageHeaderContainer__ = __webpack_require__("./components/PageHeader/PageHeaderContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation__ = __webpack_require__("./components/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./components/Link/index.js");
var _jsxFileName = "/Users/josephknoebel/CODE/PERSONAL/personal-site/components/PageHeader/PageHeader.js";




var NavigationArray = [{
  title: "Life",
  href: "/life"
}, {
  title: "Work",
  href: "/work"
}, {
  title: "Knowledge",
  href: "/knowledge"
}];

var PageHeader = function PageHeader(_ref) {
  var currentPage = _ref.currentPage;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__PageHeaderContainer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* HeaderLink */], {
    href: "/",
    isCurrent: "/" === currentPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Joseph Knoebel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, NavigationArray.map(function (nav) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["b" /* default */], {
      href: nav.href,
      isCurrent: nav.href === currentPage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, nav.title);
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (PageHeader);

/***/ })

})
//# sourceMappingURL=2.86d2b6d53b5e83312fdb.hot-update.js.map