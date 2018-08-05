webpackHotUpdate(2,{

/***/ "./components/Link/HeaderLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/josephknoebel/CODE/PERSONAL/personal-site/components/Link/HeaderLink.js";




var HeaderLink = function HeaderLink(_ref) {
  var href = _ref.href,
      as = _ref.as,
      children = _ref.children,
      isCurrent = _ref.isCurrent;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: href,
    as: as,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    isCurrent: isCurrent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderLink);

/***/ }),

/***/ "./components/Link/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavLink__ = __webpack_require__("./components/Link/NavLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderLink__ = __webpack_require__("./components/Link/HeaderLink.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderLink__["a"]; });



/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_0__NavLink__["a" /* default */]);

/***/ }),

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Joseph Knoebel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, NavigationArray.map(function (nav) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["b" /* default */], {
      href: nav.href,
      isCurrent: nav.href === currentPage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, nav.title);
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (PageHeader);

/***/ })

})
//# sourceMappingURL=2.0ccda9d057a1993e161e.hot-update.js.map