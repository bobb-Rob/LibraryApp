/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif; \r\n    \r\n}\r\n\r\n#mainpage-container{\r\n    min-height: 600px;\r\n    background-color: rgb(198, 233, 192);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    position: relative;\r\n    padding: 1em;\r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n   \r\n    box-shadow: 0 0 10px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.page-title{\r\n    margin-block-start: 0px;\r\n    margin-block-end: 0px;\r\n}\r\n\r\n.add-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    align-self: center;\r\n    height: 33px;\r\n    width: 150px;\r\n    color: var(--limegreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    margin-top: 40px;\r\n    font-size: 1.3rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 40px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 22rem;\r\n    background-color: var(--deepLimeGreen);\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 2px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.6rem 1.2rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.3rem;\r\n    background-color: var(--limegreen);\r\n    border: 2px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* Book Collection Section */\r\n.books-section{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n/* current read  */\r\n\r\n.current-read,.collection{\r\n    background-color: var(--lightLimeGreen);\r\n    min-height: 23rem;\r\n    margin: 2rem 1rem;\r\n    border-radius: 4px;   \r\n}\r\n\r\n.current-read{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: var(--limegreen);\r\n    position: relative;\r\n    height: 23rem !important;\r\n}\r\n\r\n.cur-heading{\r\n   /* border-bottom: 2px solid var(--limegreen); */\r\n   position: absolute;\r\n   top: 0rem;\r\n   padding: 0.5rem;\r\n   width: 100%;\r\n   text-align: center;\r\n   box-shadow: 0 0 3px 1px rgb(0, 12, 0);\r\n   border-radius: 4px;\r\n}\r\n\r\n.book-holder{\r\n    /* border: 2px solid red; */\r\n    padding: 0.5rem;\r\n    position: relative;\r\n    top: 2rem;\r\n}\r\n\r\n.book-holder .img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.contRead-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n\r\n\r\n/* Collection section */\r\n\r\n.collection{\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n\r\n.col-heading{\r\n    /* border-bottom: 2px solid var(--limegreen); */\r\n    align-self: center;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: var(--limegreen);\r\n    box-shadow: 0 0 5px 1px rgb(0, 12, 0);\r\n    border-radius: 4px;\r\n}\r\n\r\n.collection-holder{\r\n    min-height: 26rem;\r\n    padding: 1.2rem 1.6rem 1.2rem 2rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid red; */\r\n   \r\n}\r\n\r\n.new-book-holder{\r\n    color: var(--limegreen);\r\n    padding: 1rem;\r\n    /* border: 2px solid red; */\r\n    height: 100%;\r\n    min-width: 200.77px ; \r\n    flex: 0 1 auto;\r\n}\r\n\r\n.new-book-holder .new-img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.new-book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.new-book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.read-now-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";;;;AAIA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,mDAAmD;;AAEvD;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;;IAEtB,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,sCAAsC;IACtC,kBAAkB;IAClB;yBACqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,yCAAyC;AAC7C;;;AAGA,iBAAiB;AACjB;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sCAAsC;IACtC,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,qBAAqB;AACzB;;;AAGA;IACI,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,kCAAkC;IAClC,iBAAiB;IACjB,0BAA0B;IAC1B,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;AAChB;;AAEA,4BAA4B;AAC5B;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,kBAAkB;;AAElB;IACI,uCAAuC;IACvC,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;GACG,+CAA+C;GAC/C,kBAAkB;GAClB,SAAS;GACT,eAAe;GACf,WAAW;GACX,kBAAkB;GAClB,qCAAqC;GACrC,kBAAkB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI,sCAAsC;IACtC,sCAAsC;IACtC,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,uBAAuB;AAC3B,CAAA;;;AAGA,uBAAuB;;AAEvB;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI,+CAA+C;IAC/C,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,aAAa;IACb,eAAe;IACf,2BAA2B;;AAE/B;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI,sCAAsC;IACtC,sCAAsC;IACtC,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,uBAAuB;AAC3B,CAAA","sourcesContent":["\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif; \r\n    \r\n}\r\n\r\n#mainpage-container{\r\n    min-height: 600px;\r\n    background-color: rgb(198, 233, 192);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    position: relative;\r\n    padding: 1em;\r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n   \r\n    box-shadow: 0 0 10px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.page-title{\r\n    margin-block-start: 0px;\r\n    margin-block-end: 0px;\r\n}\r\n\r\n.add-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    align-self: center;\r\n    height: 33px;\r\n    width: 150px;\r\n    color: var(--limegreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    margin-top: 40px;\r\n    font-size: 1.3rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 40px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 22rem;\r\n    background-color: var(--deepLimeGreen);\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 2px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.6rem 1.2rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.3rem;\r\n    background-color: var(--limegreen);\r\n    border: 2px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* Book Collection Section */\r\n.books-section{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n/* current read  */\r\n\r\n.current-read,.collection{\r\n    background-color: var(--lightLimeGreen);\r\n    min-height: 23rem;\r\n    margin: 2rem 1rem;\r\n    border-radius: 4px;   \r\n}\r\n\r\n.current-read{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: var(--limegreen);\r\n    position: relative;\r\n    height: 23rem !important;\r\n}\r\n\r\n.cur-heading{\r\n   /* border-bottom: 2px solid var(--limegreen); */\r\n   position: absolute;\r\n   top: 0rem;\r\n   padding: 0.5rem;\r\n   width: 100%;\r\n   text-align: center;\r\n   box-shadow: 0 0 3px 1px rgb(0, 12, 0);\r\n   border-radius: 4px;\r\n}\r\n\r\n.book-holder{\r\n    /* border: 2px solid red; */\r\n    padding: 0.5rem;\r\n    position: relative;\r\n    top: 2rem;\r\n}\r\n\r\n.book-holder .img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.contRead-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n\r\n\r\n/* Collection section */\r\n\r\n.collection{\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n\r\n.col-heading{\r\n    /* border-bottom: 2px solid var(--limegreen); */\r\n    align-self: center;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: var(--limegreen);\r\n    box-shadow: 0 0 5px 1px rgb(0, 12, 0);\r\n    border-radius: 4px;\r\n}\r\n\r\n.collection-holder{\r\n    min-height: 26rem;\r\n    padding: 1.2rem 1.6rem 1.2rem 2rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid red; */\r\n   \r\n}\r\n\r\n.new-book-holder{\r\n    color: var(--limegreen);\r\n    padding: 1rem;\r\n    /* border: 2px solid red; */\r\n    height: 100%;\r\n    min-width: 200.77px ; \r\n    flex: 0 1 auto;\r\n}\r\n\r\n.new-book-holder .new-img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.new-book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.new-book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.read-now-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allBook.js":
/*!************************!*\
  !*** ./src/allBook.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allBooks": () => (/* binding */ allBooks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



const allBooks = (() => {

    // Collection Section on right
  const collection = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("div", "collection");  
  const collectionHeading = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("h3", "col-heading");
        collectionHeading.textContent = "My Collection";
        collection.appendChild(collectionHeading);
        
    const collectionHolder = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("div", "collection-holder");
    collection.appendChild(collectionHolder);
  

    
 

    return { collection }

})()



/***/ }),

/***/ "./src/currentBook.js":
/*!****************************!*\
  !*** ./src/currentBook.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentBook": () => (/* binding */ currentBook)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const currentBook = (function (){
// current Book secton on the left
    
    const createCRSection = () => {
        const currentRead = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("div", "current-read");
        const currentReadHeading = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("h3", "cur-heading");
        currentReadHeading.textContent = "Current Book";
        currentRead.appendChild(currentReadHeading); 
        
        return currentRead;
    }

    return { createCRSection }
})()


 

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const header = (function(){
    // Nav Bar
    const navBar = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("div", "navBar");
    const navBarTitle = _index__WEBPACK_IMPORTED_MODULE_0__.library.component("h1", "page-title");
    navBarTitle.textContent = "User Personal Library";
    
    navBar.appendChild(navBarTitle); 
    return { navBar }

})()




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "library": () => (/* binding */ library)
/* harmony export */ });
/* harmony import */ var _currentBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentBook.js */ "./src/currentBook.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _allBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allBook.js */ "./src/allBook.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");







console.log('Hi man')

const library = (function(){
  
  const pageContainer = document.querySelector(".mainpage-container");
  console.log(pageContainer);

  function component(comp, klassName){
    const element = document.createElement(comp)
    element.className = klassName;
    return element
  }

  // Section below Header
  const librarySection = component("div", "books-section");   
  librarySection.appendChild(_allBook_js__WEBPACK_IMPORTED_MODULE_2__.allBooks.collection);


  // current Book secton on the left
  const CR = _currentBook_js__WEBPACK_IMPORTED_MODULE_0__.currentBook.createCRSection();
  librarySection.appendChild(CR)
  
  
  
// All Page Appending here
  pageContainer.insertAdjacentElement("afterbegin", librarySection);
  pageContainer.insertAdjacentElement("afterbegin", _header_js__WEBPACK_IMPORTED_MODULE_1__.header.navBar)

  return { librarySection, component }
})()




  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlEQUFpRCwrQkFBK0Isb0JBQW9CLHFCQUFxQixLQUFLLGNBQWMsMkNBQTJDLGtDQUFrQyxpQ0FBaUMsd0NBQXdDLEtBQUssYUFBYSxpRUFBaUUsYUFBYSw0QkFBNEIsMEJBQTBCLDZDQUE2QywyQkFBMkIsc0JBQXNCLCtCQUErQixLQUFLLGdCQUFnQiwrQ0FBK0MscUJBQXFCLDJCQUEyQixxQkFBcUIsb0NBQW9DLGlDQUFpQyxzREFBc0QsS0FBSyxvQkFBb0IsZ0NBQWdDLDhCQUE4QixLQUFLLGlCQUFpQiwrQ0FBK0MsMkJBQTJCLHFCQUFxQixxQkFBcUIsZ0NBQWdDLCtDQUErQywyQkFBMkIsNkJBQTZCLDRCQUE0QiwyQkFBMkIsMEJBQTBCLG1EQUFtRCxLQUFLLHFEQUFxRCwyQkFBMkIsc0JBQXNCLHFCQUFxQixxQkFBcUIsMkJBQTJCLHNCQUFzQiwrQ0FBK0MsZ0NBQWdDLDBCQUEwQiw0QkFBNEIsOENBQThDLEtBQUssbUJBQW1CLCtDQUErQywyQkFBMkIsMkJBQTJCLCtDQUErQyxxQkFBcUIsd0JBQXdCLG1CQUFtQixLQUFLLG9CQUFvQixnQ0FBZ0MseUJBQXlCLDBCQUEwQix1QkFBdUIsOEJBQThCLEtBQUssNkJBQTZCLDJCQUEyQix1QkFBdUIsS0FBSyxtQkFBbUIsb0JBQW9CLHNCQUFzQiwyQ0FBMkMseUJBQXlCLCtCQUErQixnQ0FBZ0Msd0JBQXdCLDhCQUE4Qix5QkFBeUIsK0JBQStCLEtBQUssb0JBQW9CLHdCQUF3QiwyQ0FBMkMsMkNBQTJDLDBCQUEwQixtQ0FBbUMsdUJBQXVCLDJCQUEyQixzQkFBc0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsS0FBSyxnQ0FBZ0Msc0NBQXNDLGdDQUFnQyxLQUFLLHlCQUF5QiwwQkFBMEIseUJBQXlCLG1DQUFtQywyQ0FBMkMsc0JBQXNCLEtBQUssd0RBQXdELHNCQUFzQix1Q0FBdUMsS0FBSyw2REFBNkQsZ0RBQWdELDBCQUEwQiwwQkFBMEIsOEJBQThCLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLGlDQUFpQyxLQUFLLHFCQUFxQixxREFBcUQsNEJBQTRCLGlCQUFpQix1QkFBdUIsbUJBQW1CLDBCQUEwQiw2Q0FBNkMsMEJBQTBCLEtBQUsscUJBQXFCLGtDQUFrQywwQkFBMEIsMkJBQTJCLGtCQUFrQixLQUFLLGtDQUFrQywyQ0FBMkMscUJBQXFCLHdCQUF3QiwyQkFBMkIsS0FBSyxxQkFBcUIsd0JBQXdCLDJCQUEyQixLQUFLLG1CQUFtQix3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLCtDQUErQywrQ0FBK0Msb0JBQW9CLHVCQUF1QiwyQkFBMkIsZ0NBQWdDLE1BQU0sd0RBQXdELHNCQUFzQiwrQkFBK0IsMkJBQTJCLEtBQUsseUJBQXlCLHNEQUFzRCw2QkFBNkIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0NBQWdDLDhDQUE4QywyQkFBMkIsS0FBSywyQkFBMkIsMEJBQTBCLDJDQUEyQyxzQkFBc0Isd0JBQXdCLGtDQUFrQyxjQUFjLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLGtDQUFrQyx1QkFBdUIsOEJBQThCLHVCQUF1QixLQUFLLDBDQUEwQywyQ0FBMkMscUJBQXFCLHdCQUF3QiwyQkFBMkIsS0FBSyx5QkFBeUIsd0JBQXdCLDJCQUEyQixLQUFLLHVCQUF1Qix3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLCtDQUErQywrQ0FBK0Msb0JBQW9CLHVCQUF1QiwyQkFBMkIsZ0NBQWdDLE1BQU0sdUJBQXVCO0FBQ3BpYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBaUI7QUFDdEMsNEJBQTRCLHFEQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxREFBaUI7QUFDN0MsbUNBQW1DLHFEQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQWlCO0FBQ3BDLHdCQUF3QixxREFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiK0M7QUFDVjtBQUNHO0FBQ3hDO0FBQ3lCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0VBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxREFBYTtBQUNqRTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDekNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvYWxsQm9vay5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2N1cnJlbnRCb29rLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJqb3NlZmluIHNhbnNcXFwiLCBcXFwibG9ic3RlclxcXCIsICBzYW5zLXNlcmlmOyBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNtYWlucGFnZS1jb250YWluZXJ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMzMsIDE5Mik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pOyAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2JzdGVyXFxcIjtcXHJcXG4gICBcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYigzLCAyNiwgMyk7O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRvcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxle1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOnZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWFkLXN0YXR1c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7ICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjBhMDI7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBCb29rIENvbGxlY3Rpb24gU2VjdGlvbiAqL1xcclxcbi5ib29rcy1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi8qIGN1cnJlbnQgcmVhZCAgKi9cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFkLC5jb2xsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodExpbWVHcmVlbik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyM3JlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VyLWhlYWRpbmd7XFxyXFxuICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7ICovXFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMHJlbTtcXHJcXG4gICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1ob2xkZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staG9sZGVyIC5pbWctd3JhcHBlcntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udFJlYWQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblxcclxcblxcclxcbi8qIENvbGxlY3Rpb24gc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb2xsZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb2wtaGVhZGluZ3tcXHJcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7ICovXFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sbGVjdGlvbi1ob2xkZXJ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI2cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS42cmVtIDEuMnJlbSAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1ib29rLWhvbGRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDIwMC43N3B4IDsgXFxyXFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWJvb2staG9sZGVyIC5uZXctaW1nLXdyYXBwZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctYm9vay1kZXNjeyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3LWJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVhZC1ub3ctYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7QUFJQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1EQUFtRDs7QUFFdkQ7O0FBRUE7SUFD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SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCOztBQUUvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCLENBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJqb3NlZmluIHNhbnNcXFwiLCBcXFwibG9ic3RlclxcXCIsICBzYW5zLXNlcmlmOyBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNtYWlucGFnZS1jb250YWluZXJ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMzMsIDE5Mik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pOyAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2JzdGVyXFxcIjtcXHJcXG4gICBcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYigzLCAyNiwgMyk7O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRvcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxle1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOnZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWFkLXN0YXR1c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7ICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjBhMDI7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBCb29rIENvbGxlY3Rpb24gU2VjdGlvbiAqL1xcclxcbi5ib29rcy1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi8qIGN1cnJlbnQgcmVhZCAgKi9cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFkLC5jb2xsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodExpbWVHcmVlbik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyM3JlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VyLWhlYWRpbmd7XFxyXFxuICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7ICovXFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMHJlbTtcXHJcXG4gICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1ob2xkZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staG9sZGVyIC5pbWctd3JhcHBlcntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udFJlYWQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblxcclxcblxcclxcbi8qIENvbGxlY3Rpb24gc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb2xsZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb2wtaGVhZGluZ3tcXHJcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7ICovXFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sbGVjdGlvbi1ob2xkZXJ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI2cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS42cmVtIDEuMnJlbSAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1ib29rLWhvbGRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDIwMC43N3B4IDsgXFxyXFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWJvb2staG9sZGVyIC5uZXctaW1nLXdyYXBwZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctYm9vay1kZXNjeyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3LWJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVhZC1ub3ctYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5cclxuY29uc3QgYWxsQm9va3MgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vIENvbGxlY3Rpb24gU2VjdGlvbiBvbiByaWdodFxyXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBsaWJyYXJ5LmNvbXBvbmVudChcImRpdlwiLCBcImNvbGxlY3Rpb25cIik7ICBcclxuICBjb25zdCBjb2xsZWN0aW9uSGVhZGluZyA9IGxpYnJhcnkuY29tcG9uZW50KFwiaDNcIiwgXCJjb2wtaGVhZGluZ1wiKTtcclxuICAgICAgICBjb2xsZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTXkgQ29sbGVjdGlvblwiO1xyXG4gICAgICAgIGNvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoY29sbGVjdGlvbkhlYWRpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY29sbGVjdGlvbkhvbGRlciA9IGxpYnJhcnkuY29tcG9uZW50KFwiZGl2XCIsIFwiY29sbGVjdGlvbi1ob2xkZXJcIik7XHJcbiAgICBjb2xsZWN0aW9uLmFwcGVuZENoaWxkKGNvbGxlY3Rpb25Ib2xkZXIpO1xyXG4gIFxyXG5cclxuICAgIFxyXG4gXHJcblxyXG4gICAgcmV0dXJuIHsgY29sbGVjdGlvbiB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBhbGxCb29rcyB9IiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBjdXJyZW50Qm9vayA9IChmdW5jdGlvbiAoKXtcclxuLy8gY3VycmVudCBCb29rIHNlY3RvbiBvbiB0aGUgbGVmdFxyXG4gICAgXHJcbiAgICBjb25zdCBjcmVhdGVDUlNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJlYWQgPSBsaWJyYXJ5LmNvbXBvbmVudChcImRpdlwiLCBcImN1cnJlbnQtcmVhZFwiKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UmVhZEhlYWRpbmcgPSBsaWJyYXJ5LmNvbXBvbmVudChcImgzXCIsIFwiY3VyLWhlYWRpbmdcIik7XHJcbiAgICAgICAgY3VycmVudFJlYWRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDdXJyZW50IEJvb2tcIjtcclxuICAgICAgICBjdXJyZW50UmVhZC5hcHBlbmRDaGlsZChjdXJyZW50UmVhZEhlYWRpbmcpOyBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY3VycmVudFJlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgY3JlYXRlQ1JTZWN0aW9uIH1cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRCb29rfSAiLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgLy8gTmF2IEJhclxyXG4gICAgY29uc3QgbmF2QmFyID0gbGlicmFyeS5jb21wb25lbnQoXCJkaXZcIiwgXCJuYXZCYXJcIik7XHJcbiAgICBjb25zdCBuYXZCYXJUaXRsZSA9IGxpYnJhcnkuY29tcG9uZW50KFwiaDFcIiwgXCJwYWdlLXRpdGxlXCIpO1xyXG4gICAgbmF2QmFyVGl0bGUudGV4dENvbnRlbnQgPSBcIlVzZXIgUGVyc29uYWwgTGlicmFyeVwiO1xyXG4gICAgXHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyVGl0bGUpOyBcclxuICAgIHJldHVybiB7IG5hdkJhciB9XHJcblxyXG59KSgpXHJcblxyXG5cclxuZXhwb3J0IHsgaGVhZGVyIH0iLCJpbXBvcnQgeyBjdXJyZW50Qm9vayB9IGZyb20gXCIuL2N1cnJlbnRCb29rLmpzXCI7XHJcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBhbGxCb29rcyB9IGZyb20gXCIuL2FsbEJvb2suanNcIjtcclxuXHJcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygnSGkgbWFuJylcclxuXHJcbmNvbnN0IGxpYnJhcnkgPSAoZnVuY3Rpb24oKXtcclxuICBcclxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWlucGFnZS1jb250YWluZXJcIik7XHJcbiAgY29uc29sZS5sb2cocGFnZUNvbnRhaW5lcik7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBvbmVudChjb21wLCBrbGFzc05hbWUpe1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcClcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0ga2xhc3NOYW1lO1xyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIFNlY3Rpb24gYmVsb3cgSGVhZGVyXHJcbiAgY29uc3QgbGlicmFyeVNlY3Rpb24gPSBjb21wb25lbnQoXCJkaXZcIiwgXCJib29rcy1zZWN0aW9uXCIpOyAgIFxyXG4gIGxpYnJhcnlTZWN0aW9uLmFwcGVuZENoaWxkKGFsbEJvb2tzLmNvbGxlY3Rpb24pO1xyXG5cclxuXHJcbiAgLy8gY3VycmVudCBCb29rIHNlY3RvbiBvbiB0aGUgbGVmdFxyXG4gIGNvbnN0IENSID0gY3VycmVudEJvb2suY3JlYXRlQ1JTZWN0aW9uKCk7XHJcbiAgbGlicmFyeVNlY3Rpb24uYXBwZW5kQ2hpbGQoQ1IpXHJcbiAgXHJcbiAgXHJcbiAgXHJcbi8vIEFsbCBQYWdlIEFwcGVuZGluZyBoZXJlXHJcbiAgcGFnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGxpYnJhcnlTZWN0aW9uKTtcclxuICBwYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgaGVhZGVyLm5hdkJhcilcclxuXHJcbiAgcmV0dXJuIHsgbGlicmFyeVNlY3Rpb24sIGNvbXBvbmVudCB9XHJcbn0pKClcclxuXHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IHsgbGlicmFyeSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9