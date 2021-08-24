module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/layout/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/common.less":
/*!********************************!*\
  !*** ./web/assets/common.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2NvbW1vbi5sZXNzP2VkNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3dlYi9hc3NldHMvY29tbW9uLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI3NjMyNzQ4MTUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/assets/common.less\n");

/***/ }),

/***/ "./web/layout/index.less":
/*!*******************************!*\
  !*** ./web/layout/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4Lmxlc3M/MWM3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNzYzMjc0ODEyM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.less\n");

/***/ }),

/***/ "./web/layout/index.tsx":
/*!******************************!*\
  !*** ./web/layout/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/common.less */ \"./web/assets/common.less\");\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_common_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./web/layout/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/xqs/Documents/git/webnet/web/layout/index.tsx\";\n\n\n\n\n\n\n\nvar commonNode = function commonNode(props) {\n  return (// 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ?  props.children  : ''\n    props.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"normal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 31\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 53\n      }\n    }, \"Egg + React + SSR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"author\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 90\n      }\n    }, \"by ykfe\")), props.children) : null\n  );\n};\n\nvar Layout = function Layout(props) {\n  if (false) {} else {\n    var _ref = props.layoutData,\n        serverData = _ref.serverData; // tslint:disable-line\n\n    var _app$config = props.layoutData.app.config,\n        injectCss = _app$config.injectCss,\n        injectScript = _app$config.injectScript; // tslint:disable-line\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n      lang: \"en\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      charSet: \"utf-8\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"theme-color\",\n      content: \"#000000\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }, \"React App\"), injectCss && injectCss.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"stylesheet\",\n        href: item,\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 59\n        }\n      });\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"app\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }, commonNode(props)), serverData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: \"window.__USE_SSR__=true; window.__INITIAL_DATA__ =\".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(serverData)) // tslint:disable-line\n\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 27\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: injectScript && injectScript.join('')\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    })));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4LnRzeD9jODY2Il0sIm5hbWVzIjpbImNvbW1vbk5vZGUiLCJwcm9wcyIsImNoaWxkcmVuIiwiTGF5b3V0IiwiX19pc0Jyb3dzZXJfXyIsImxheW91dERhdGEiLCJzZXJ2ZXJEYXRhIiwiYXBwIiwiY29uZmlnIiwiaW5qZWN0Q3NzIiwiaW5qZWN0U2NyaXB0IiwibWFwIiwiaXRlbSIsIl9faHRtbCIsInNlcmlhbGl6ZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsU0FDakI7QUFDQUEsU0FBSyxDQUFDQyxRQUFOLGdCQUNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBd0I7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFzQiwyREFBQyxxREFBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXRCLGVBQTJEO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBM0QsQ0FBeEIsRUFBOEhELEtBQUssQ0FBQ0MsUUFBcEksQ0FESixHQUVJO0FBSmE7QUFBQSxDQUFuQjs7QUFZQSxJQUFNQyxNQUF3QixHQUFHLFNBQTNCQSxNQUEyQixDQUFDRixLQUFELEVBQTRDO0FBQzNFLE1BQUlHLEtBQUosRUFBbUIsRUFBbkIsTUFFTztBQUNMLGVBQXVCSCxLQUFLLENBQUNJLFVBQTdCO0FBQUEsUUFBUUMsVUFBUixRQUFRQSxVQUFSLENBREssQ0FDb0M7O0FBQ3pDLHNCQUFvQ0wsS0FBSyxDQUFDSSxVQUFOLENBQWtCRSxHQUFsQixDQUFzQkMsTUFBMUQ7QUFBQSxRQUFRQyxTQUFSLGVBQVFBLFNBQVI7QUFBQSxRQUFtQkMsWUFBbkIsZUFBbUJBLFlBQW5CLENBRkssQ0FFNEQ7O0FBQ2pFLHdCQUNFO0FBQU0sVUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNFO0FBQU0sYUFBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLGVBRUU7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsdURBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixlQUdFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsRUFNS0QsU0FBUyxJQUFJQSxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsMEJBQWtCO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFFQSxJQUE3QjtBQUFtQyxXQUFHLEVBQUVBLElBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEI7QUFBQSxLQUFkLENBTmxCLENBREYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNFO0FBQUssUUFBRSxFQUFDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFlWixVQUFVLENBQUNDLEtBQUQsQ0FBekIsQ0FERixFQUdJSyxVQUFVLGlCQUFJO0FBQVEsNkJBQXVCLEVBQUU7QUFDN0NPLGNBQU0sOERBQXVEQywyREFBUyxDQUFDUixVQUFELENBQWhFLENBRHVDLENBQ3dDOztBQUR4QyxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSGxCLGVBT0U7QUFBSyw2QkFBdUIsRUFBRTtBQUM1Qk8sY0FBTSxFQUFFSCxZQUFZLElBQUlBLFlBQVksQ0FBQ0ssSUFBYixDQUFrQixFQUFsQjtBQURJLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixDQVZGLENBREY7QUF3QkQ7QUFDRixDQS9CRDs7QUFpQ2VaLHFFQUFmIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnQC9hc3NldHMvY29tbW9uLmxlc3MnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdtaWR3YXknXG5cbmNvbnN0IGNvbW1vbk5vZGUgPSAocHJvcHM6IExheW91dFByb3BzKSA9PiAoXG4gIC8vIOS4uuS6huWQjOaXtuWFvOWuuXNzci9jc3Lor7fkv53nlZnmraTliKTmlq3vvIzlpoLmnpzkvaDnmoRsYXlvdXTmsqHmnInlhoXlrrnor7fkvb/nlKggcHJvcHMuY2hpbGRyZW4gPyAgcHJvcHMuY2hpbGRyZW4gIDogJydcbiAgcHJvcHMuY2hpbGRyZW5cbiAgICA/IDxkaXYgY2xhc3NOYW1lPSdub3JtYWwnPjxoMSBjbGFzc05hbWU9J3RpdGxlJz48TGluayB0bz0nLyc+RWdnICsgUmVhY3QgKyBTU1I8L0xpbms+PGRpdiBjbGFzc05hbWU9J2F1dGhvcic+YnkgeWtmZTwvZGl2PjwvaDE+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDogbnVsbFxuKVxuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICBsYXlvdXREYXRhPzogQ29udGV4dCxcbiAgY2hpbGRyZW4/OiBKU1guRWxlbWVudCB8IG51bGxcbn1cblxuY29uc3QgTGF5b3V0OiBTRkM8TGF5b3V0UHJvcHM+ID0gKHByb3BzOiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgcmV0dXJuIGNvbW1vbk5vZGUocHJvcHMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBzZXJ2ZXJEYXRhIH0gPSBwcm9wcy5sYXlvdXREYXRhISAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgY29uc3QgeyBpbmplY3RDc3MsIGluamVjdFNjcmlwdCB9ID0gcHJvcHMubGF5b3V0RGF0YSEuYXBwLmNvbmZpZyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vJyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjMDAwMDAwJyAvPlxuICAgICAgICAgIDx0aXRsZT5SZWFjdCBBcHA8L3RpdGxlPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICBpbmplY3RDc3MgJiYgaW5qZWN0Q3NzLm1hcCgoaXRlbTogc3RyaW5nKSA9PiA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9e2l0ZW19IGtleT17aXRlbX0gLz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxkaXYgaWQ9J2FwcCc+e2NvbW1vbk5vZGUocHJvcHMpfTwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlcnZlckRhdGEgJiYgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuX19VU0VfU1NSX189dHJ1ZTsgd2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSR7c2VyaWFsaXplKHNlcnZlckRhdGEpfWAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBpbmplY3RTY3JpcHQgJiYgaW5qZWN0U2NyaXB0LmpvaW4oJycpXG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/layout/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ })

/******/ });