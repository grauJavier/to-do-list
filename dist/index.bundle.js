"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Open Sans\", \"Lucida Grande\", tahoma, verdana, arial, sans-serif;\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.d-col {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.d-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.w-100 {\r\n  width: 100%;\r\n}\r\n\r\n#to-do-list__container {\r\n  display: flex;\r\n  align-self: center;\r\n  justify-self: center;\r\n  background-color: #fff;\r\n  box-shadow:\r\n    rgba(60, 64, 67, 0.05) 0 1px 2px 0,\r\n    rgba(60, 64, 67, 0.05) 0 2px 6px 2px;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  font-weight: 300;\r\n  max-width: 480px;\r\n  margin: 50px auto 0 auto;\r\n}\r\n\r\n#to-do-list__container .bi {\r\n  color: #a2a2a2;\r\n}\r\n\r\n#to-do-list__container .bi:hover {\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n#to-do-list__title {\r\n  color: #545862;\r\n  font-weight: 400;\r\n  background-color: transparent;\r\n}\r\n\r\n#title-box__refresh-icon {\r\n  transition: transform 0s;\r\n  transform: rotate(-60deg) scaleX(-1);\r\n}\r\n\r\n#title-box__counter-icon {\r\n  position: relative;\r\n  left: 25px;\r\n  bottom: 6px;\r\n  z-index: 1;\r\n  background-color: #fff;\r\n  color: #f00 !important;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n}\r\n\r\n#input-box__input {\r\n  border: 0;\r\n  font-size: inherit;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  width: 100%;\r\n}\r\n\r\n#input-box__input::placeholder {\r\n  color: #bababa;\r\n  font-weight: 300;\r\n}\r\n\r\n#input-box__input:focus {\r\n  outline: 0;\r\n}\r\n\r\n#input-box__submit-button {\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.to-do-list__box {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 15px;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #dcdcdc;\r\n  align-items: center;\r\n}\r\n\r\n.box__icon-text-wraper {\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.box__text--incomplete {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.box__text--incomplete:focus {\r\n  outline: 0;\r\n}\r\n\r\n.box__text--complete {\r\n  text-decoration: line-through;\r\n  color: #a2a2a2;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.box__text--complete:focus {\r\n  text-decoration: none;\r\n  color: #000;\r\n  outline: 0;\r\n}\r\n\r\n.to-do-box__check-icon {\r\n  color: #3990e7 !important;\r\n  font-size: 15px;\r\n}\r\n\r\n.box__three-dots-icon:hover {\r\n  cursor: move !important;\r\n}\r\n\r\n#to-do-list__clear-all {\r\n  background-color: #f6f6f6;\r\n  justify-content: center;\r\n}\r\n\r\n#to-do-list__clear-all p:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit {\r\n  background-color: #fffeca !important;\r\n}\r\n\r\n.edit .bi-trash3 {\r\n  cursor: pointer !important;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loader.js */ \"./src/modules/loader.js\");\n/* harmony import */ var _modules_editSwitches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editSwitches.js */ \"./src/modules/editSwitches.js\");\n/* harmony import */ var _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addNewTask.js */ \"./src/modules/addNewTask.js\");\n/* harmony import */ var _modules_clearCompleteTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearCompleteTask.js */ \"./src/modules/clearCompleteTask.js\");\n/* harmony import */ var _modules_rotateRefreshIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rotateRefreshIcon.js */ \"./src/modules/rotateRefreshIcon.js\");\n\n\n\n\n\n\n\n(0,_modules_loader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst listTitle = document.querySelector('#title-box__title');\nconst addNewSubmit = document.querySelector('#input-box form');\nconst addNewInput = document.querySelector('#input-box__input');\nconst clearCompleteTaskButton = document.querySelector('#to-do-list__clear-all p');\nconst refreshIcon = document.querySelector('#title-box__refresh-icon');\n\nlistTitle.addEventListener('focus', () => (0,_modules_editSwitches_js__WEBPACK_IMPORTED_MODULE_2__.titleEditOn)());\nlistTitle.addEventListener('blur', () => (0,_modules_editSwitches_js__WEBPACK_IMPORTED_MODULE_2__.titleEditOff)());\nlistTitle.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    (0,_modules_editSwitches_js__WEBPACK_IMPORTED_MODULE_2__.titleEditOff)();\n  }\n});\n\naddNewSubmit.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(addNewInput.value);\n  addNewSubmit.reset();\n});\n\nclearCompleteTaskButton.addEventListener('click', () => {\n  (0,_modules_rotateRefreshIcon_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_modules_clearCompleteTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\nrefreshIcon.addEventListener('click', () => {\n  (0,_modules_rotateRefreshIcon_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_modules_clearCompleteTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addNewTask.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _printHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printHTML.js */ \"./src/modules/printHTML.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n\n\n\nconst addNewTask = (str) => {\n  let taskList = JSON.parse(localStorage.getItem('taskListData')) || [];\n\n  const newTask = {\n    description: `${str}`,\n    completed: false,\n    index: (taskList.length + 1),\n  };\n\n  taskList = taskList.concat(newTask);\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskList);\n  (0,_printHTML_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newTask.description, newTask.completed, newTask.index);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addNewTask.js?");

/***/ }),

/***/ "./src/modules/clearCompleteTask.js":
/*!******************************************!*\
  !*** ./src/modules/clearCompleteTask.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateIndex.js */ \"./src/modules/updateIndex.js\");\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.js */ \"./src/modules/loader.js\");\n/* harmony import */ var _completedCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completedCounter.js */ \"./src/modules/completedCounter.js\");\n\n\n\n\n\nconst clearCompleteTask = () => {\n  const taskShelf = document.querySelector('#to-do-list__shelf');\n  let taskList = JSON.parse(localStorage.getItem('taskListData'));\n  taskList = taskList.filter((task) => task.completed);\n\n  if (taskList.length) {\n    taskList = JSON.parse(localStorage.getItem('taskListData'));\n    taskList = taskList.filter((task) => !task.completed);\n\n    (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n    (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    // Reload\n    taskShelf\n      .querySelectorAll('.to-do-list__box')\n      .forEach((task) => task.remove());\n    (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_completedCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleteTask);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clearCompleteTask.js?");

/***/ }),

/***/ "./src/modules/completedCounter.js":
/*!*****************************************!*\
  !*** ./src/modules/completedCounter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completedCounter = () => {\n  const counterIcon = document.querySelector('#title-box__counter-icon');\n  let taskList = JSON.parse(localStorage.getItem('taskListData'));\n  taskList = taskList.filter((task) => task.completed);\n\n  counterIcon.classList = '';\n\n  if (!taskList.length) {\n    counterIcon.classList = '';\n  } else if (taskList.length >= 10) {\n    counterIcon.classList = 'bi bi-exclamation-circle-fill';\n  } else {\n    counterIcon.classList = `bi bi-${taskList.length}-circle-fill`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completedCounter);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/completedCounter.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ \"./src/modules/loader.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateIndex.js */ \"./src/modules/updateIndex.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nconst deleteTask = (taskIndex) => {\n  const taskShelf = document.querySelector('#to-do-list__shelf');\n  let taskList = JSON.parse(localStorage.getItem('taskListData'));\n\n  taskList = taskList.filter((task) => task.index !== taskIndex);\n\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskList);\n  (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  // Reload\n  taskShelf.querySelectorAll('.to-do-list__box').forEach((task) => task.remove());\n  (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/editSwitches.js":
/*!*************************************!*\
  !*** ./src/modules/editSwitches.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskEditOff: () => (/* binding */ taskEditOff),\n/* harmony export */   taskEditOn: () => (/* binding */ taskEditOn),\n/* harmony export */   titleEditOff: () => (/* binding */ titleEditOff),\n/* harmony export */   titleEditOn: () => (/* binding */ titleEditOn)\n/* harmony export */ });\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/modules/deleteTask.js\");\n/* harmony import */ var _updateTaskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTaskData.js */ \"./src/modules/updateTaskData.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst titleEditOn = () => {\n  const titleBox = document.querySelector('#to-do-list__title');\n  titleBox.classList.add('edit');\n};\n\nconst titleEditOff = () => {\n  const titleBox = document.querySelector('#to-do-list__title');\n  const listTitle = document.querySelector('#title-box__title');\n  titleBox.classList.remove('edit');\n  listTitle.blur();\n\n  if (!listTitle.value) {\n    listTitle.value = 'A Nice To-do List Title!';\n  }\n\n  listTitle.setAttribute('value', listTitle.value);\n  localStorage.title = JSON.stringify(listTitle.value);\n};\n\nconst taskEditOn = (index) => {\n  const taskBox = document.querySelector(`div[index=\"${index}\"]`);\n  const threeDotsIcon = taskBox.querySelector('.box__three-dots-icon');\n\n  taskBox.classList.add('edit');\n  threeDotsIcon.classList.replace('bi-three-dots-vertical', 'bi-trash3');\n  taskBox\n    .querySelector('.bi-trash3')\n    .addEventListener('click', () => (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index));\n};\n\nconst taskEditOff = (index) => {\n  const taskBox = document.querySelector(`div[index=\"${index}\"]`);\n  const taskText = taskBox.querySelector('.box__icon-text-wraper input');\n  const threeDotsIcon = taskBox.querySelector('.box__three-dots-icon');\n\n  taskBox.classList.remove('edit');\n  threeDotsIcon.classList.replace('bi-trash3', 'bi-three-dots-vertical');\n  taskText.blur();\n\n  if (!taskText.value) {\n    taskText.value = `Task N°${index}`;\n  }\n\n  taskText.setAttribute('value', taskText.value);\n  (0,_updateTaskData_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskDescription)(index, taskText.value);\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/editSwitches.js?");

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _printHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printHTML.js */ \"./src/modules/printHTML.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst loader = () => {\n  const listTitle = document.querySelector('#title-box__title');\n  const taskList = JSON.parse(localStorage.getItem('taskListData')) || [];\n  listTitle.value = JSON.parse(localStorage.getItem('title')) || 'A Nice To-do List Title!';\n\n  if (taskList.length) {\n    taskList.forEach((task) => {\n      (0,_printHTML_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task.description, task.completed, task.index);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/loader.js?");

/***/ }),

/***/ "./src/modules/printHTML.js":
/*!**********************************!*\
  !*** ./src/modules/printHTML.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _editSwitches_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editSwitches.js */ \"./src/modules/editSwitches.js\");\n/* harmony import */ var _switchTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switchTask.js */ \"./src/modules/switchTask.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst taskShelf = document.querySelector('#to-do-list__shelf');\n\nconst printHTML = (description, status, index) => {\n  taskShelf.insertAdjacentHTML(\n    'beforeend',\n    `\n    <div class=\"to-do-list__box\" index=\"${index}\" completed=\"${status}\">\n      <div class=\"d-row box__icon-text-wraper w-100\">\n        <i class=\"bi bi-square to-do-box__check-box-icon\"></i>\n        <input class=\"box__text--incomplete w-100\" value=\"${description}\"></input>\n      </div>\n      <i class=\"bi bi-three-dots-vertical box__three-dots-icon\"></i>\n    </div>\n    `,\n  );\n\n  (0,_switchTask_js__WEBPACK_IMPORTED_MODULE_1__.switchTask)(status, index);\n\n  const taskBox = document.querySelector(`div[index=\"${index}\"]`);\n  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');\n  const taskText = taskBox.querySelector('.box__icon-text-wraper input');\n\n  checkBoxIcon.addEventListener('click', () => {\n    const boolean = Boolean(taskBox.getAttribute('completed'));\n    (0,_switchTask_js__WEBPACK_IMPORTED_MODULE_1__.switchTask)(boolean, index);\n  });\n\n  taskText.addEventListener('focus', () => (0,_editSwitches_js__WEBPACK_IMPORTED_MODULE_0__.taskEditOn)(index));\n  taskText.addEventListener('blur', () => (0,_editSwitches_js__WEBPACK_IMPORTED_MODULE_0__.taskEditOff)(index));\n  taskText.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n      (0,_editSwitches_js__WEBPACK_IMPORTED_MODULE_0__.taskEditOff)(index);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printHTML);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/printHTML.js?");

/***/ }),

/***/ "./src/modules/rotateRefreshIcon.js":
/*!******************************************!*\
  !*** ./src/modules/rotateRefreshIcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst rotateRefreshIcon = () => {\n  const refreshIcon = document.querySelector('#title-box__refresh-icon');\n  let taskList = JSON.parse(localStorage.getItem('taskListData'));\n  taskList = taskList.filter((task) => task.completed);\n\n  if (!taskList.length) {\n    refreshIcon.style.setProperty('transition', 'transform 1s');\n    refreshIcon.style.setProperty('transform', 'rotate(-420deg) scaleX(-1)');\n\n    setTimeout(() => {\n      refreshIcon.style.setProperty('transition', 'transform 0s');\n      setTimeout(() => {\n        refreshIcon.style.setProperty('transform', 'rotate(-60deg) scaleX(-1)');\n      }, 10);\n    }, 1000);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rotateRefreshIcon);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/rotateRefreshIcon.js?");

/***/ }),

/***/ "./src/modules/switchTask.js":
/*!***********************************!*\
  !*** ./src/modules/switchTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   incompleteTask: () => (/* binding */ incompleteTask),\n/* harmony export */   switchTask: () => (/* binding */ switchTask)\n/* harmony export */ });\n/* harmony import */ var _updateTaskData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTaskData.js */ \"./src/modules/updateTaskData.js\");\n\n\nconst completeTask = (index) => {\n  const taskBox = document.querySelector(`div[index=\"${index}\"]`);\n  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');\n  const taskText = taskBox.querySelector('.box__icon-text-wraper input');\n\n  checkBoxIcon.classList.replace('bi-square', 'bi-check-lg');\n  checkBoxIcon.classList.replace(\n    'to-do-box__check-box-icon',\n    'to-do-box__check-icon',\n  );\n  taskText.classList.replace('box__text--incomplete', 'box__text--complete');\n  taskBox.setAttribute('completed', true);\n  (0,_updateTaskData_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskCompleted)(index, true);\n};\n\nconst incompleteTask = (index) => {\n  const taskBox = document.querySelector(`div[index=\"${index}\"]`);\n  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');\n  const taskText = taskBox.querySelector('.box__icon-text-wraper input');\n\n  checkBoxIcon.classList.replace('bi-check-lg', 'bi-square');\n  checkBoxIcon.classList.replace(\n    'to-do-box__check-icon',\n    'to-do-box__check-box-icon',\n  );\n  taskText.classList.replace('box__text--complete', 'box__text--incomplete');\n  taskBox.setAttribute('completed', false);\n  (0,_updateTaskData_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskCompleted)(index, false);\n};\n\nconst switchTask = (boolean, index) => {\n  if (boolean) {\n    completeTask(index);\n  } else {\n    incompleteTask(index);\n  }\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/switchTask.js?");

/***/ }),

/***/ "./src/modules/updateIndex.js":
/*!************************************!*\
  !*** ./src/modules/updateIndex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n\n\nconst updateIndex = () => {\n  const taskList = JSON.parse(localStorage.getItem('taskListData'));\n\n  taskList.forEach((task, index) => {\n    task.index = index + 1;\n  });\n\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n\n  const taskBoxes = document.querySelectorAll('#to-do-list__shelf .to-do-list__box');\n\n  taskBoxes.forEach((task, index) => {\n    task.setAttribute('index', index + 1);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateIndex);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/updateIndex.js?");

/***/ }),

/***/ "./src/modules/updateLocalStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/updateLocalStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateLocalStorage = (taskList) => {\n  localStorage.taskListData = JSON.stringify(taskList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorage);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/updateLocalStorage.js?");

/***/ }),

/***/ "./src/modules/updateTaskData.js":
/*!***************************************!*\
  !*** ./src/modules/updateTaskData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateTaskCompleted: () => (/* binding */ updateTaskCompleted),\n/* harmony export */   updateTaskDescription: () => (/* binding */ updateTaskDescription)\n/* harmony export */ });\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _completedCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completedCounter.js */ \"./src/modules/completedCounter.js\");\n\n\n\nconst updateTaskDescription = (index, value) => {\n  const taskList = JSON.parse(localStorage.getItem('taskListData'));\n  taskList[index - 1].description = value;\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n};\n\nconst updateTaskCompleted = (index, boolean) => {\n  const taskList = JSON.parse(localStorage.getItem('taskListData'));\n  taskList[index - 1].completed = boolean;\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n  (0,_completedCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/updateTaskData.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);