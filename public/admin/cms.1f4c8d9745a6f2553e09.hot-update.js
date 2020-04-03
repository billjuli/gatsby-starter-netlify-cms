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
      className: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "NZ Wine Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/new-zealand-wine-regions";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "All Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wines-north-island";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "North Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wines-south-island";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "South Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      class: "navbar-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/auckland-region";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Auckland Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/canterbury-and-north-canterbury";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Canterbury & North Canterbury"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/central-otago";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Central Otago"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/gisborne";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Gisborne"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/hawkes-bay";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Hawke's Bay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/marlborough";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Marlborough"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/nelson";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Nelson"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/northland";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Northland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/waikato";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Waikato & Bay of Plenty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wairarapa";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Wairarapa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/waitaki-valley";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Waitaki Valley"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wellington";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "Wellington"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Wine Map"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/auckland-region";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Auckland Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/canterbury-and-north-canterbury";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "Canterbury & North Canterbury"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/central-otago";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, "Central Otago"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/gisborne";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Gisborne"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/hawkes-bay";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Hawke's Bay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/marlborough";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "Marlborough"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/nelson";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, "Nelson"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/northland";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Northland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/waikato";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "Waikato & Bay of Plenty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/wairarapa";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, "Wairarapa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/waitaki-valley";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "Waitaki Valley"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/map/region/wellington";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "Wellington"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "NZ Wine Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/new-zealand-wine-regions";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, "All Regions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wines-north-island";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, "North Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wines-south-island";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, "South Island"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      class: "navbar-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/auckland-region";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Auckland Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/canterbury-and-north-canterbury";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, "Canterbury & North Canterbury"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/central-otago";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, "Central Otago"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/gisborne";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, "Gisborne"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/hawkes-bay";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, "Hawke's Bay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/marlborough";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, "Marlborough"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/nelson";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, "Nelson"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/northland";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "Northland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/waikato";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, "Waikato & Bay of Plenty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wairarapa";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    }, "Wairarapa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/waitaki-valley";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, "Waitaki Valley"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/wellington";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, "Wellington"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-end has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/session/register";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, "Register"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "button is-primary",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/pricing";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, "List with Us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "button is-light",
      onClick: function onClick(e) {
        e.preventDefault();
        window.location.href = "/session/login";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428
      },
      __self: this
    }, "Sign in"))))));
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
//# sourceMappingURL=cms.1f4c8d9745a6f2553e09.hot-update.js.map