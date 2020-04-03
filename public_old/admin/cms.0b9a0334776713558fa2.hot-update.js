webpackHotUpdate("cms",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/github-icon.svg */ "./src/img/github-icon.svg");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_cellardoor_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/cellardoor.png */ "./src/img/cellardoor.png");
/* harmony import */ var _img_cellardoor_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_cellardoor_png__WEBPACK_IMPORTED_MODULE_4__);


var _temp,
    _jsxFileName = "C:\\Users\\Bill\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Navbar = (_temp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.toggleHamburger = function () {
      // toggle the active boolean in the state
      _this.setState({
        active: !_this.state.active
      }, // after state has been updated,
      function () {
        // set the class in state for the navbar accordingly
        _this.state.active ? _this.setState({
          navBarActiveClass: 'is-active'
        }) : _this.setState({
          navBarActiveClass: ''
        });
      });
    };

    _this.state = {
      active: false,
      navBarActiveClass: ''
    };
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "navbar is-transparent",
      role: "navigation",
      "aria-label": "main-navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      className: "navbar-item",
      title: "Logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _img_cellardoor_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "NZ Cellar Door",
      style: {
        width: '88px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-burger burger " + this.state.navBarActiveClass,
      "data-target": "navMenu",
      onClick: function onClick() {
        return _this2.toggleHamburger();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "navMenu",
      className: "navbar-menu " + this.state.navBarActiveClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-start has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/new-zealand-wine-regions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "NZ Wine Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Wine Map"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/contact/examples",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Form Examples")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-end has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "List with us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/session/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/session/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Sign in")))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp);
var _default = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navbar, "Navbar", "C:\\Users\\Bill\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Bill\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/img/cellardoor.png":
/*!********************************!*\
  !*** ./src/img/cellardoor.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

})
//# sourceMappingURL=cms.0b9a0334776713558fa2.hot-update.js.map