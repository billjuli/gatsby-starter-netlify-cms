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
    _jsxFileName = "D:\\data\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js";

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
      className: "navbar is-fixed-top",
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _img_cellardoor_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "NZ Cellar Door",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
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
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "navMenu",
      className: "navbar-menu " + this.state.navBarActiveClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-start has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-link",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/new-zealand-wine-regions";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "NZ Wine Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "onClick=", function (e) {
      e.preventDefault();
      window.location.href = "/new-zealand-wine-regions";
    }, "> All Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "North Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "South Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      class: "navbar-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Auckland Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Canterbury & North Canterbury"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Central Otago"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Gisborne"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Hawke's Bay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Marlborough"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Nelson"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Northland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Waikato & Bay of Plenty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Wairarapa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Waitaki Valley"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Wellington"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Wine Map"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "More"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Jobs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      class: "navbar-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Report an issue"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-end has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/pricing";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "List with us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/session/register";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/session/login";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
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

  reactHotLoader.register(Navbar, "Navbar", "D:\\data\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js");
  reactHotLoader.register(_default, "default", "D:\\data\\gatsby-starter-netlify-cms\\src\\components\\Navbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.c590193724af0a21c1a6.hot-update.js.map