/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(155, 19, 19);\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif;     \r\n}\r\n\r\n\r\n#mainpage-container{\r\n    min-height: 500px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    width: 100%;\r\n    position: fixed;   \r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n    box-shadow: 0 0 10px 1px var(--limegreen);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-bottom: 2px solid var(--limegreen);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.page-title{\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n.add-btn-div{  \r\n    width: 50%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n\r\n}\r\n\r\n.add-book-btn{\r\n    background-color: var(--limegreen);  \r\n    height: 33px;\r\n    width: 100px;  \r\n    margin: 0 10px;\r\n    color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;   \r\n    font-size: 1rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n.table-container{\r\n    padding-top: 130px;\r\n    width: 100%;\r\n    /* background-color: yellow; */\r\n    /* border: 2px solid black; */\r\n   display: flex;\r\n   flex-direction: column;\r\n   /* position: relative; */\r\n   min-height:250px ;\r\n   \r\n}\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 20px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n    z-index: 1000;\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 26rem;\r\n    background-color: var(--red);\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.3rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 1px solid var(--limegreen);\r\n    background: white;\r\n    padding: 0.3rem 0.5rem;\r\n    color: var(--deepLimeGreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.input:focus{\r\n    border: 2px solid var(--red);\r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.2rem;\r\n    background-color: var(--limegreen);\r\n    border: 1px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* table Style */\r\n\r\n.table{\r\n    border-collapse: collapse;\r\n    margin: 10px 40px 0 40px;\r\n    border: 2px solid var(--lightLimeGreen);   \r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid var(--deepLimeGreen);\r\n  }\r\n\r\nthead{\r\n   \r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    height: 50px;\r\n   \r\n}\r\n\r\n/*  */\r\n\r\ntbody{\r\n    /* height: 160px; */\r\n    text-align: center;  \r\n}\r\n\r\ntr{\r\n     height: 40px;\r\n}\r\n\r\n.delete-btn-cell{\r\n    width: 50px;   \r\n}\r\n\r\n.btn-danger{\r\n    background-color: var(--red);\r\n    color: white;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    box-shadow: .5px .5px .5px 1px black;\r\n}\r\n\r\n/* Alert message style */\r\n\r\n.alert,.empty{\r\n    /* border: 2px solid black !important; */\r\n    height: 30px;\r\n    padding-top:4px;\r\n    background-color: var(--limegreen);\r\n   min-width: 300px;\r\n    align-self: center;\r\n    text-align: center;\r\n    color: var(--deepLimeGreen);\r\n    font-weight: bold;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 16px;\r\n}\r\n\r\n.empty{\r\n    position: absolute;\r\n    bottom: 220px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: absolute;\r\n    top: 100px; \r\n}\r\n\r\n.alert-green{\r\n    background-color: var(--limegreen) !important;\r\n    position: absolute; \r\n    top: 100px;   \r\n}\r\n\r\n.alert-orange{\r\n    background-color: orange !important;\r\n    position: absolute; \r\n    top: 100px; \r\n}\r\n\r\n\r\n#form-alert{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: sticky !important;\r\n   \r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";;;;AAIA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,wBAAwB;IACxB,+BAA+B;IAC/B,uBAAuB;AAC3B;;AAEA;IACI,mDAAmD;AACvD;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,WAAW;IACX,eAAe;IACf,uBAAuB;IACvB,sBAAsB;IACtB,yCAAyC;IACzC,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,yCAAyC;IACzC,mBAAmB;AACvB;;;AAGA;IACI,cAAc;AAClB;;;AAGA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;;AAE7B;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,2BAA2B;IAC3B,sCAAsC;IACtC,kBAAkB;IAClB,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,8BAA8B;IAC9B,6BAA6B;GAC9B,aAAa;GACb,sBAAsB;GACtB,wBAAwB;GACxB,iBAAiB;;AAEpB;;AAEA,iBAAiB;AACjB;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sCAAsC;IACtC,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,kBAAkB;IAClB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,qBAAqB;AACzB;;;AAGA;IACI,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,iBAAiB;IACjB,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,kCAAkC;IAClC,iBAAiB;IACjB,0BAA0B;IAC1B,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;AAChB;;AAEA,gBAAgB;;AAEhB;IACI,yBAAyB;IACzB,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;EACxC;;AAEF;;IAEI,sCAAsC;IACtC,uBAAuB;IACvB,YAAY;;AAEhB;;AAEA,KAAK;;AAEL;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;KACK,YAAY;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,oCAAoC;AACxC;;AAEA,wBAAwB;;AAExB;IACI,wCAAwC;IACxC,YAAY;IACZ,eAAe;IACf,kCAAkC;GACnC,gBAAgB;IACf,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;IAC3B,iBAAiB;IACjB,wIAAwI;IACxI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,mDAAmD;IACnD,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,UAAU;AACd;;;AAGA;IACI,mDAAmD;IACnD,2BAA2B;;AAE/B","sourcesContent":["\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(155, 19, 19);\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif;     \r\n}\r\n\r\n\r\n#mainpage-container{\r\n    min-height: 500px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    width: 100%;\r\n    position: fixed;   \r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n    box-shadow: 0 0 10px 1px var(--limegreen);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-bottom: 2px solid var(--limegreen);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.page-title{\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n.add-btn-div{  \r\n    width: 50%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n\r\n}\r\n\r\n.add-book-btn{\r\n    background-color: var(--limegreen);  \r\n    height: 33px;\r\n    width: 100px;  \r\n    margin: 0 10px;\r\n    color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;   \r\n    font-size: 1rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n.table-container{\r\n    padding-top: 130px;\r\n    width: 100%;\r\n    /* background-color: yellow; */\r\n    /* border: 2px solid black; */\r\n   display: flex;\r\n   flex-direction: column;\r\n   /* position: relative; */\r\n   min-height:250px ;\r\n   \r\n}\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 20px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n    z-index: 1000;\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 26rem;\r\n    background-color: var(--red);\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.3rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 1px solid var(--limegreen);\r\n    background: white;\r\n    padding: 0.3rem 0.5rem;\r\n    color: var(--deepLimeGreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.input:focus{\r\n    border: 2px solid var(--red);\r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.2rem;\r\n    background-color: var(--limegreen);\r\n    border: 1px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* table Style */\r\n\r\n.table{\r\n    border-collapse: collapse;\r\n    margin: 10px 40px 0 40px;\r\n    border: 2px solid var(--lightLimeGreen);   \r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid var(--deepLimeGreen);\r\n  }\r\n\r\nthead{\r\n   \r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    height: 50px;\r\n   \r\n}\r\n\r\n/*  */\r\n\r\ntbody{\r\n    /* height: 160px; */\r\n    text-align: center;  \r\n}\r\n\r\ntr{\r\n     height: 40px;\r\n}\r\n\r\n.delete-btn-cell{\r\n    width: 50px;   \r\n}\r\n\r\n.btn-danger{\r\n    background-color: var(--red);\r\n    color: white;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    box-shadow: .5px .5px .5px 1px black;\r\n}\r\n\r\n/* Alert message style */\r\n\r\n.alert,.empty{\r\n    /* border: 2px solid black !important; */\r\n    height: 30px;\r\n    padding-top:4px;\r\n    background-color: var(--limegreen);\r\n   min-width: 300px;\r\n    align-self: center;\r\n    text-align: center;\r\n    color: var(--deepLimeGreen);\r\n    font-weight: bold;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 16px;\r\n}\r\n\r\n.empty{\r\n    position: absolute;\r\n    bottom: 220px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: absolute;\r\n    top: 100px; \r\n}\r\n\r\n.alert-green{\r\n    background-color: var(--limegreen) !important;\r\n    position: absolute; \r\n    top: 100px;   \r\n}\r\n\r\n.alert-orange{\r\n    background-color: orange !important;\r\n    position: absolute; \r\n    top: 100px; \r\n}\r\n\r\n\r\n#form-alert{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: sticky !important;\r\n   \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggleReadBtn.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggleReadBtn.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(155, 19, 19);\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.radio-btn-div{\r\n  /* border: 2px solid var(--lightLimeGreen); */\r\n  /* background-color: red;  */\r\n  display: flex;\r\n  height: 40px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.radio-btn-cell{\r\n  width: 110px;\r\n}\r\n\r\n.read-btn{\r\n  height: 30px;\r\n  width: 70px;\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: .5px .5px .5px 1px black;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\nfont-weight: bold;\r\n}\r\n\r\n.read-btn-red{\r\n  background-color: var(--red);\r\n  color: white;\r\n}\r\n\r\n.read-btn-green{\r\n  background-color: var(--limegreen);\r\n}", "",{"version":3,"sources":["webpack://./src/css/toggleReadBtn.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,wBAAwB;IACxB,+BAA+B;IAC/B,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;AAEF;EACE,6CAA6C;EAC7C,4BAA4B;EAC5B,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,wIAAwI;AAC1I,iBAAiB;AACjB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":["\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(155, 19, 19);\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.radio-btn-div{\r\n  /* border: 2px solid var(--lightLimeGreen); */\r\n  /* background-color: red;  */\r\n  display: flex;\r\n  height: 40px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.radio-btn-cell{\r\n  width: 110px;\r\n}\r\n\r\n.read-btn{\r\n  height: 30px;\r\n  width: 70px;\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: .5px .5px .5px 1px black;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\nfont-weight: bold;\r\n}\r\n\r\n.read-btn-red{\r\n  background-color: var(--red);\r\n  color: white;\r\n}\r\n\r\n.read-btn-green{\r\n  background-color: var(--limegreen);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

/***/ "./src/css/toggleReadBtn.css":
/*!***********************************!*\
  !*** ./src/css/toggleReadBtn.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./toggleReadBtn.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/toggleReadBtn.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/components/BookStore.js":
/*!*************************************!*\
  !*** ./src/components/BookStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });


class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static updateBooks(updatedBook){
        const books = Store.getBooks();
        const newBooks = books.map(book => {
            if(book.isbn === updatedBook.isbn){
                book = updatedBook;
            }
            return book;
        })
        localStorage.setItem('books', JSON.stringify(newBooks));
        console.log(newBooks);
    }

    
    static addBookToStore(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        console.log(books);
    }

    static removeBook(id) {
        let books = Store.getBooks();
        const newBooks = books.filter( book => book.id !== id);
        localStorage.setItem('books', JSON.stringify(newBooks));
        console.log(newBooks);
    }

    static emptyLibraryMsg(){
        const div = document.createElement('div');
        div.className = `empty alert-empty`;
        div.appendChild(document.createTextNode('Library is empty. Add a book'));
        const books = Store.getBooks();
        if(books.length === 0){
            const table = document.querySelector('.table');
            const container = document.querySelector('.table-container');
            container.insertBefore(div, table);
        }else{
            if(document.querySelector('.empty')){
                document.querySelector('.empty').remove();
                return;
            }           
        } 
        
    }    
}

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });




const NavBar = (() => {
    const createNavBar = () => {            
        const navBar = document.createElement("div");
        navBar.className = "navBar";
        navBar.innerHTML = `<h1 class='page-title'>User personal Library</h1>
        <div class='add-btn-div' ><button  
        onclick='() => UI.showForm()' 
        class='add-book-btn'
        >Add Book</button></div> 
        `;
        const form = document.querySelector('#form-container');
        document.querySelector('#mainpage-container').insertBefore(navBar, form);  
    }

    return {createNavBar}

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/countryNames.js":
/*!****************************************!*\
  !*** ./src/components/countryNames.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countryList);

/***/ }),

/***/ "./src/components/refactor/Book.js":
/*!*****************************************!*\
  !*** ./src/components/refactor/Book.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Book)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Book {
    constructor(title, author, country, isbn, readStatus){
        this.title = title;
        this.author = author;
        this.country = country;
        this.isbn = isbn;
        this.readStatus = readStatus;
        this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
        this.toggleReadStatus = this.toggleReadStatus.bind(this);
    }

    toggleReadStatus(){  
        this.readStatus =  !this.readStatus;
    }

}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_refactor_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/refactor/Book */ "./src/components/refactor/Book.js");
/* harmony import */ var _components_BookStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BookStore */ "./src/components/BookStore.js");
/* harmony import */ var _components_countryNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/countryNames */ "./src/components/countryNames.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/toggleReadBtn.css */ "./src/css/toggleReadBtn.css");








const UIElement = (() => {  
        //Append Nav Bar       
        _components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"].createNavBar(); 
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].emptyLibraryMsg();                   
})();


class UI {
   
    static formDisplayed = 'hide';
          
    static displayBooks(){  
        const books = _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks();     
        books.forEach((book, index) => UI.addBookToLibrary(book, index));
    }
    
    static clearFormFields(){
        document.querySelector('#book-title').value = '';
        document.querySelector('#author-name').value = '';
        document.querySelector('#country').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#readStatus').selectedIndex = 0; 
    }

    static showForm(){
        // clear form
        UI.clearFormFields();
        //Make form visible
        document.querySelector('#form-container').style.display = 'block';
        UI.formDisplayed = 'show';
    }

    static hideForm(e,value){
        e.stopPropagation();
        UI.formDisplayed = value;
        document.querySelector('#form-container').style.display = 'none';
    }

    static addBookToLibrary(book, index){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.className = `row`;
        row.id = book.id;       
        console.log(book);
       
        row.innerHTML = `
        <td>${index + 1}</td>
        <td><strong>${book.title}</strong></td>
        <td>${book.author}</td>       
        <td>${book.country}</td>
        <td>${book.isbn}</td>
        <td class='radio-btn-cell' ><div class='radio-btn-div' >
            <button class='read-btn read-status-btn ${book.readStatus ? 'read-btn-green': 'read-btn-red'}' 
            >${book.readStatus ? 'Read' : 'Not read'}</button>
        </div></td>
        <td class='delete-btn-cell' ><button class="btn btn-danger
         btn-sm delete">X</button></td>
        `;

        list.appendChild(row);

        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].emptyLibraryMsg(); 
    }


    // Remove Book rows before books display after delete;
    static clearBooks(){
        let rows = document.querySelectorAll('.row');
            if(rows){
                rows.forEach(row => row.remove()) 
            }else{
                return;
            }  
    }


    //Delete Book from UI
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();            
            //clear the list before display again
            UI.clearBooks();
            //reset list to get serial book count correct;           
            UI.displayBooks();
        }
    }

    

    static showAlert(message, className){             
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        if(UI.formDisplayed === 'show'){
            // shows alert when form fields are empty
            const form = document.querySelector('#form-container');
            const titleDiv = document.querySelector('.title');
            div.id = `form-alert`;
            form.insertBefore(div, titleDiv);             
        }else if(UI.formDisplayed === 'hide'){ 
            // shows alert when add book is successfull
            const table = document.querySelector('.table');
            const container = document.querySelector('.table-container');
            container.insertBefore(div, table);
        }else{
            return;
        }           
        //vanish in 4 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 4000);  
    }

    static getReadStatus(){
        const readStatusOptions = document.querySelector('#readStatus');
        let index = readStatusOptions.selectedIndex;
        let options = readStatusOptions.options;         
        return options[index].text.toLowerCase();
    }

    static verifyISBN(isbn){
        const books = _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks();
        const isbnVerify = books.some(book => isbn === book.isbn);        
        if(isbnVerify){
            UI.showAlert('ISBN must be unique for all books', 'danger');
            document.querySelector('#isbn').focus();
            return;
        } 
    }
        

}


//Event: Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Show form on add book button click
document.querySelector('.add-book-btn').addEventListener('click', UI.showForm);

//Close form
document.querySelector('.close-btn').addEventListener('click', 
(e) => UI.hideForm(e,'close btn clicked'));


//Event: Add a Book
document.querySelector("#form-container").addEventListener('submit', (e) =>{
    //Prevent actual Submit or default broswer submit behavior
    e.preventDefault();
     //Get Form Values
     const title = document.querySelector('#book-title').value;
     const author = document.querySelector('#author-name').value;    
     const country = document.querySelector('#country').value;
     const isbn = document.querySelector('#isbn').value;    
      
     // Validate all field
     if(title === '' || author == '' || isbn === ''){
        UI.showAlert('Please fill in all required fields', 'danger'); 
        document.querySelector('#book-title').focus();     
     }else{
        //Check that isbn is unique for each book;
        UI.verifyISBN(isbn)

        //Check that isbn Number is not less than five and not greater than 9
        if((isbn.toString().length < 5) || (isbn.toString().length > 9) ){
            UI.showAlert('ISBN characters must be between five and nine', 'danger');
            document.querySelector('#isbn').focus();
            return;
        }
        
        //Check that country value is valid
        const matchedCountry = _components_countryNames__WEBPACK_IMPORTED_MODULE_3__["default"].some(countryName => country.toLowerCase() === countryName.toLowerCase())
        if(matchedCountry === false){
            UI.showAlert('Please input a valid country', 'danger');
            document.querySelector('#country').focus();
            return;
        }
        
        //Check that read status is not undefined;
        let readStatus;                
        if(UI.getReadStatus() === 'yes'){
            readStatus = true;
        }else{            
          if(UI.getReadStatus() === 'no'){
            readStatus = false;
          }else{
            UI.showAlert('Please select read status', 'danger');
            return;
          }
        }       

        //Instatiate book
        const book = new _components_refactor_Book__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, country, isbn, readStatus);       
        
        //Add book to Book Store array       
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].addBookToStore(book)
        console.log(_components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks());
            
        //Add Book to UI
        UI.addBookToLibrary(book, _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks().length);
        UI.hideForm(e,'hide');
        UI.clearFormFields();
        UI.showAlert('Book Added', 'green');              
     }    
});



//Event: Remove book from Array and UI;
document.querySelector('#book-list').addEventListener('click', (e) => {   
    e.stopPropagation();
    
    if(e.target.classList.contains('btn-sm')){
        UI.showAlert('Book removed', 'orange');       
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].removeBook(e.target.parentElement.parentElement.id)
    } 
    //Remove book from UI     
    UI.deleteBook(e.target);
    _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].emptyLibraryMsg();
})

//Toggle Read Status for any Book on the list
document.querySelector('#book-list').addEventListener('click', (e) => { 
    e.stopPropagation();
    if(e.target.classList.contains('read-status-btn')){
        let isbn = e.target.parentElement.parentElement.previousElementSibling.textContent;
       
        const books = _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks();
        const currentBook = books.find(book => book.isbn === isbn);
             
        if(currentBook.readStatus){           
            currentBook.readStatus = false;
            e.target.textContent = 'Not read';
            e.target.classList.add('read-btn-red');
            if(e.target.classList.contains('read-btn-green')){
                e.target.classList.remove('read-btn-green');
            }
        }else{            
            currentBook.readStatus  = true;
            e.target.textContent = 'Read';
            e.target.classList.add('read-btn-green');  
            if(e.target.classList.contains('read-btn-red')){
                e.target.classList.remove('read-btn-red');
            }          
        }
                
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].updateBooks(currentBook);
    }else{
        return;
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBSTtBQUM3QjtBQUNBO0FBQ0EsUUFBUSw0RUFBb0I7QUFDNUIsb0JBQW9CLHNFQUFjO0FBQ2xDO0FBQ0E7QUFDQSxrQ0FBa0Msc0VBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2RUFBcUI7QUFDekIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3RvZ2dsZVJlYWRCdG4uY3NzPzU0ODEiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2NvbXBvbmVudHMvQm9va1N0b3JlLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jb21wb25lbnRzL2NvdW50cnlOYW1lcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2NvbXBvbmVudHMvcmVmYWN0b3IvQm9vay5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgLS1yZWQ6IHJnYigxNTUsIDE5LCAxOSk7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiam9zZWZpbiBzYW5zXFxcIiwgXFxcImxvYnN0ZXJcXFwiLCAgc2Fucy1zZXJpZjsgICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpbnBhZ2UtY29udGFpbmVye1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAgIFxcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTsgICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibG9ic3RlclxcXCI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFkZC1idG4tZGl2eyAgXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ib29rLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTsgIFxcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgIFxcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2IoMywgMjYsIDMpOztcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlLWNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbiAgIG1pbi1oZWlnaHQ6MjUwcHggO1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0b3A6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0OmZvY3Vze1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bntcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG46aG92ZXI6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3JlYWQtc3RhdHVze1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTsgICBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAyMGEwMjsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBhZGRpbmc6IDlweDsgXFxyXFxufVxcclxcblxcclxcbi8qIHRhYmxlIFN0eWxlICovXFxyXFxuXFxyXFxuLnRhYmxle1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBtYXJnaW46IDEwcHggNDBweCAwIDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0TGltZUdyZWVuKTsgICBcXHJcXG59XFxyXFxuXFxyXFxudGFibGUsIHRoLCB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcblxcclxcbnRoZWFke1xcclxcbiAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLyogICovXFxyXFxuXFxyXFxudGJvZHl7XFxyXFxuICAgIC8qIGhlaWdodDogMTYwcHg7ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxcclxcbn1cXHJcXG5cXHJcXG50cntcXHJcXG4gICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4tY2VsbHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5idG4tZGFuZ2Vye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IC41cHggLjVweCAuNXB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQWxlcnQgbWVzc2FnZSBzdHlsZSAqL1xcclxcblxcclxcbi5hbGVydCwuZW1wdHl7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7ICovXFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtZGFuZ2Vye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44MjIpICFpbXBvcnRhbnQ7IFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbikgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4gICAgdG9wOiAxMDBweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LW9yYW5nZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHRvcDogMTAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9ybS1hbGVydHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODIyKSAhaW1wb3J0YW50OyBcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xcclxcbiAgIFxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7O0FBSUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbURBQW1EO0FBQ3ZEOzs7QUFHQTtJQUNJLGlCQUFp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eEksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLG1EQUFtRDtJQUNuRCwyQkFBMkI7O0FBRS9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcblxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWxpbWVncmVlbjpyZ2IoMTcwLCAyMjgsIDE1OCk7ICAgIFxcclxcbiAgICAtLWxpZ2h0TGltZUdyZWVuOiAjMTAyYjEwO1xcclxcbiAgICAtLWRlZXBMaW1lR3JlZW46ICMwMjBhMDI7XFxyXFxuICAgIC0tYm9yZGVyOiBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIC0tcmVkOiByZ2IoMTU1LCAxOSwgMTkpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImpvc2VmaW4gc2Fuc1xcXCIsIFxcXCJsb2JzdGVyXFxcIiwgIHNhbnMtc2VyaWY7ICAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21haW5wYWdlLWNvbnRhaW5lcntcXHJcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgICBcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7ICAgIFxcclxcbiAgICBmb250LWZhbWlseTogXFxcImxvYnN0ZXJcXFwiO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGFnZS10aXRsZXtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hZGQtYnRuLWRpdnsgIFxcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9vay1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7ICBcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7ICBcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICBcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiKDMsIDI2LCAzKTs7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICBtaW4taGVpZ2h0OjI1MHB4IDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybSBTZWN0aW9uICovXFxyXFxuI2Zvcm0tY29udGFpbmVyeyAgIFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRvcDogNWVtOyAgICBcXHJcXG4gICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG57XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdG9wOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOnZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWFkLXN0YXR1c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7ICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjBhMDI7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiB0YWJsZSBTdHlsZSAqL1xcclxcblxcclxcbi50YWJsZXtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDQwcHggMCA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodExpbWVHcmVlbik7ICAgXFxyXFxufVxcclxcblxcclxcbnRhYmxlLCB0aCwgdGQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG50aGVhZHtcXHJcXG4gICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi8qICAqL1xcclxcblxcclxcbnRib2R5e1xcclxcbiAgICAvKiBoZWlnaHQ6IDE2MHB4OyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXHJcXG59XFxyXFxuXFxyXFxudHJ7XFxyXFxuICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuLWNlbGx7XFxyXFxuICAgIHdpZHRoOiA1MHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRhbmdlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAuNXB4IC41cHggLjVweCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIEFsZXJ0IG1lc3NhZ2Ugc3R5bGUgKi9cXHJcXG5cXHJcXG4uYWxlcnQsLmVtcHR5e1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWRhbmdlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODIyKSAhaW1wb3J0YW50OyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHRvcDogMTAwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5hbGVydC1vcmFuZ2V7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcbiAgICB0b3A6IDEwMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Zvcm0tYWxlcnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgyMikgIWltcG9ydGFudDsgXFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcXHJcXG4gICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgLS1yZWQ6IHJnYigxNTUsIDE5LCAxOSk7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zd2l0Y2ggaW5wdXQge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4gIC5zbGlkZXIucm91bmQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLWRpdntcXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0TGltZUdyZWVuKTsgKi9cXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLWNlbGx7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLWJ0bntcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IC41cHggLjVweCAuNXB4IDFweCBibGFjaztcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLWJ0bi1yZWR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZC1idG4tZ3JlZW57XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RvZ2dsZVJlYWRCdG4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0VBQzdCOztFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjtFQUNFLDZDQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsd0lBQXdJO0FBQzFJLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgLS1yZWQ6IHJnYigxNTUsIDE5LCAxOSk7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zd2l0Y2ggaW5wdXQge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4gIC5zbGlkZXIucm91bmQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLWRpdntcXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0TGltZUdyZWVuKTsgKi9cXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLWNlbGx7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLWJ0bntcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IC41cHggLjVweCAuNXB4IDFweCBibGFjaztcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLWJ0bi1yZWR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZC1idG4tZ3JlZW57XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZ2dsZVJlYWRCdG4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2dnbGVSZWFkQnRuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG4gICAgc3RhdGljIGdldEJvb2tzKCl7XHJcbiAgICAgICAgbGV0IGJvb2tzO1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib29rcycpID09PSBudWxsKXtcclxuICAgICAgICAgICAgYm9va3MgPSBbXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYm9va3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib29rcycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvb2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVCb29rcyh1cGRhdGVkQm9vayl7XHJcbiAgICAgICAgY29uc3QgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpO1xyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3MubWFwKGJvb2sgPT4ge1xyXG4gICAgICAgICAgICBpZihib29rLmlzYm4gPT09IHVwZGF0ZWRCb29rLmlzYm4pe1xyXG4gICAgICAgICAgICAgICAgYm9vayA9IHVwZGF0ZWRCb29rO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBib29rO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tzJywgSlNPTi5zdHJpbmdpZnkobmV3Qm9va3MpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rcyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBzdGF0aWMgYWRkQm9va1RvU3RvcmUoYm9vayl7XHJcbiAgICAgICAgY29uc3QgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpO1xyXG4gICAgICAgIGJvb2tzLnB1c2goYm9vayk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tzJywgSlNPTi5zdHJpbmdpZnkoYm9va3MpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib29rcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZUJvb2soaWQpIHtcclxuICAgICAgICBsZXQgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpO1xyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3MuZmlsdGVyKCBib29rID0+IGJvb2suaWQgIT09IGlkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9va3MnLCBKU09OLnN0cmluZ2lmeShuZXdCb29rcykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0Jvb2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1wdHlMaWJyYXJ5TXNnKCl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGBlbXB0eSBhbGVydC1lbXB0eWA7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMaWJyYXJ5IGlzIGVtcHR5LiBBZGQgYSBib29rJykpO1xyXG4gICAgICAgIGNvbnN0IGJvb2tzID0gU3RvcmUuZ2V0Qm9va3MoKTtcclxuICAgICAgICBpZihib29rcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZGl2LCB0YWJsZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxufSIsIlxyXG5cclxuXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTmFtZSA9IFwibmF2QmFyXCI7XHJcbiAgICAgICAgbmF2QmFyLmlubmVySFRNTCA9IGA8aDEgY2xhc3M9J3BhZ2UtdGl0bGUnPlVzZXIgcGVyc29uYWwgTGlicmFyeTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nYWRkLWJ0bi1kaXYnID48YnV0dG9uICBcclxuICAgICAgICBvbmNsaWNrPScoKSA9PiBVSS5zaG93Rm9ybSgpJyBcclxuICAgICAgICBjbGFzcz0nYWRkLWJvb2stYnRuJ1xyXG4gICAgICAgID5BZGQgQm9vazwvYnV0dG9uPjwvZGl2PiBcclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb250YWluZXInKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbnBhZ2UtY29udGFpbmVyJykuaW5zZXJ0QmVmb3JlKG5hdkJhciwgZm9ybSk7ICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZU5hdkJhcn1cclxuXHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhciIsImNvbnN0IGNvdW50cnlMaXN0ID0gW1xyXG5cdFwiQWZnaGFuaXN0YW5cIixcclxuXHRcIkFsYmFuaWFcIixcclxuXHRcIkFsZ2VyaWFcIixcclxuXHRcIkFtZXJpY2FuIFNhbW9hXCIsXHJcblx0XCJBbmRvcnJhXCIsXHJcblx0XCJBbmdvbGFcIixcclxuXHRcIkFuZ3VpbGxhXCIsXHJcblx0XCJBbnRhcmN0aWNhXCIsXHJcblx0XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXHJcblx0XCJBcmdlbnRpbmFcIixcclxuXHRcIkFybWVuaWFcIixcclxuXHRcIkFydWJhXCIsXHJcblx0XCJBdXN0cmFsaWFcIixcclxuXHRcIkF1c3RyaWFcIixcclxuXHRcIkF6ZXJiYWlqYW5cIixcclxuXHRcIkJhaGFtYXMgKHRoZSlcIixcclxuXHRcIkJhaHJhaW5cIixcclxuXHRcIkJhbmdsYWRlc2hcIixcclxuXHRcIkJhcmJhZG9zXCIsXHJcblx0XCJCZWxhcnVzXCIsXHJcblx0XCJCZWxnaXVtXCIsXHJcblx0XCJCZWxpemVcIixcclxuXHRcIkJlbmluXCIsXHJcblx0XCJCZXJtdWRhXCIsXHJcblx0XCJCaHV0YW5cIixcclxuXHRcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCIsXHJcblx0XCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFxyXG5cdFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLFxyXG5cdFwiQm90c3dhbmFcIixcclxuXHRcIkJvdXZldCBJc2xhbmRcIixcclxuXHRcIkJyYXppbFwiLFxyXG5cdFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5ICh0aGUpXCIsXHJcblx0XCJCcnVuZWkgRGFydXNzYWxhbVwiLFxyXG5cdFwiQnVsZ2FyaWFcIixcclxuXHRcIkJ1cmtpbmEgRmFzb1wiLFxyXG5cdFwiQnVydW5kaVwiLFxyXG5cdFwiQ2FibyBWZXJkZVwiLFxyXG5cdFwiQ2FtYm9kaWFcIixcclxuXHRcIkNhbWVyb29uXCIsXHJcblx0XCJDYW5hZGFcIixcclxuXHRcIkNheW1hbiBJc2xhbmRzICh0aGUpXCIsXHJcblx0XCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSlcIixcclxuXHRcIkNoYWRcIixcclxuXHRcIkNoaWxlXCIsXHJcblx0XCJDaGluYVwiLFxyXG5cdFwiQ2hyaXN0bWFzIElzbGFuZFwiLFxyXG5cdFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMgKHRoZSlcIixcclxuXHRcIkNvbG9tYmlhXCIsXHJcblx0XCJDb21vcm9zICh0aGUpXCIsXHJcblx0XCJDb25nbyAodGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwiLFxyXG5cdFwiQ29uZ28gKHRoZSlcIixcclxuXHRcIkNvb2sgSXNsYW5kcyAodGhlKVwiLFxyXG5cdFwiQ29zdGEgUmljYVwiLFxyXG5cdFwiQ3JvYXRpYVwiLFxyXG5cdFwiQ3ViYVwiLFxyXG5cdFwiQ3VyYcOnYW9cIixcclxuXHRcIkN5cHJ1c1wiLFxyXG5cdFwiQ3plY2hpYVwiLFxyXG5cdFwiQ8O0dGUgZCdJdm9pcmVcIixcclxuXHRcIkRlbm1hcmtcIixcclxuXHRcIkRqaWJvdXRpXCIsXHJcblx0XCJEb21pbmljYVwiLFxyXG5cdFwiRG9taW5pY2FuIFJlcHVibGljICh0aGUpXCIsXHJcblx0XCJFY3VhZG9yXCIsXHJcblx0XCJFZ3lwdFwiLFxyXG5cdFwiRWwgU2FsdmFkb3JcIixcclxuXHRcIkVxdWF0b3JpYWwgR3VpbmVhXCIsXHJcblx0XCJFcml0cmVhXCIsXHJcblx0XCJFc3RvbmlhXCIsXHJcblx0XCJFc3dhdGluaVwiLFxyXG5cdFwiRXRoaW9waWFcIixcclxuXHRcIkZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXVwiLFxyXG5cdFwiRmFyb2UgSXNsYW5kcyAodGhlKVwiLFxyXG5cdFwiRmlqaVwiLFxyXG5cdFwiRmlubGFuZFwiLFxyXG5cdFwiRnJhbmNlXCIsXHJcblx0XCJGcmVuY2ggR3VpYW5hXCIsXHJcblx0XCJGcmVuY2ggUG9seW5lc2lhXCIsXHJcblx0XCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMgKHRoZSlcIixcclxuXHRcIkdhYm9uXCIsXHJcblx0XCJHYW1iaWEgKHRoZSlcIixcclxuXHRcIkdlb3JnaWFcIixcclxuXHRcIkdlcm1hbnlcIixcclxuXHRcIkdoYW5hXCIsXHJcblx0XCJHaWJyYWx0YXJcIixcclxuXHRcIkdyZWVjZVwiLFxyXG5cdFwiR3JlZW5sYW5kXCIsXHJcblx0XCJHcmVuYWRhXCIsXHJcblx0XCJHdWFkZWxvdXBlXCIsXHJcblx0XCJHdWFtXCIsXHJcblx0XCJHdWF0ZW1hbGFcIixcclxuXHRcIkd1ZXJuc2V5XCIsXHJcblx0XCJHdWluZWFcIixcclxuXHRcIkd1aW5lYS1CaXNzYXVcIixcclxuXHRcIkd1eWFuYVwiLFxyXG5cdFwiSGFpdGlcIixcclxuXHRcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLFxyXG5cdFwiSG9seSBTZWUgKHRoZSlcIixcclxuXHRcIkhvbmR1cmFzXCIsXHJcblx0XCJIb25nIEtvbmdcIixcclxuXHRcIkh1bmdhcnlcIixcclxuXHRcIkljZWxhbmRcIixcclxuXHRcIkluZGlhXCIsXHJcblx0XCJJbmRvbmVzaWFcIixcclxuXHRcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsXHJcblx0XCJJcmFxXCIsXHJcblx0XCJJcmVsYW5kXCIsXHJcblx0XCJJc2xlIG9mIE1hblwiLFxyXG5cdFwiSXNyYWVsXCIsXHJcblx0XCJJdGFseVwiLFxyXG5cdFwiSmFtYWljYVwiLFxyXG5cdFwiSmFwYW5cIixcclxuXHRcIkplcnNleVwiLFxyXG5cdFwiSm9yZGFuXCIsXHJcblx0XCJLYXpha2hzdGFuXCIsXHJcblx0XCJLZW55YVwiLFxyXG5cdFwiS2lyaWJhdGlcIixcclxuXHRcIktvcmVhICh0aGUgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIixcclxuXHRcIktvcmVhICh0aGUgUmVwdWJsaWMgb2YpXCIsXHJcblx0XCJLdXdhaXRcIixcclxuXHRcIkt5cmd5enN0YW5cIixcclxuXHRcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXHJcblx0XCJMYXR2aWFcIixcclxuXHRcIkxlYmFub25cIixcclxuXHRcIkxlc290aG9cIixcclxuXHRcIkxpYmVyaWFcIixcclxuXHRcIkxpYnlhXCIsXHJcblx0XCJMaWVjaHRlbnN0ZWluXCIsXHJcblx0XCJMaXRodWFuaWFcIixcclxuXHRcIkx1eGVtYm91cmdcIixcclxuXHRcIk1hY2FvXCIsXHJcblx0XCJNYWRhZ2FzY2FyXCIsXHJcblx0XCJNYWxhd2lcIixcclxuXHRcIk1hbGF5c2lhXCIsXHJcblx0XCJNYWxkaXZlc1wiLFxyXG5cdFwiTWFsaVwiLFxyXG5cdFwiTWFsdGFcIixcclxuXHRcIk1hcnNoYWxsIElzbGFuZHMgKHRoZSlcIixcclxuXHRcIk1hcnRpbmlxdWVcIixcclxuXHRcIk1hdXJpdGFuaWFcIixcclxuXHRcIk1hdXJpdGl1c1wiLFxyXG5cdFwiTWF5b3R0ZVwiLFxyXG5cdFwiTWV4aWNvXCIsXHJcblx0XCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwiLFxyXG5cdFwiTW9sZG92YSAodGhlIFJlcHVibGljIG9mKVwiLFxyXG5cdFwiTW9uYWNvXCIsXHJcblx0XCJNb25nb2xpYVwiLFxyXG5cdFwiTW9udGVuZWdyb1wiLFxyXG5cdFwiTW9udHNlcnJhdFwiLFxyXG5cdFwiTW9yb2Njb1wiLFxyXG5cdFwiTW96YW1iaXF1ZVwiLFxyXG5cdFwiTXlhbm1hclwiLFxyXG5cdFwiTmFtaWJpYVwiLFxyXG5cdFwiTmF1cnVcIixcclxuXHRcIk5lcGFsXCIsXHJcblx0XCJOZXRoZXJsYW5kcyAodGhlKVwiLFxyXG5cdFwiTmV3IENhbGVkb25pYVwiLFxyXG5cdFwiTmV3IFplYWxhbmRcIixcclxuXHRcIk5pY2FyYWd1YVwiLFxyXG5cdFwiTmlnZXIgKHRoZSlcIixcclxuXHRcIk5pZ2VyaWFcIixcclxuXHRcIk5pdWVcIixcclxuXHRcIk5vcmZvbGsgSXNsYW5kXCIsXHJcblx0XCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMgKHRoZSlcIixcclxuXHRcIk5vcndheVwiLFxyXG5cdFwiT21hblwiLFxyXG5cdFwiUGFraXN0YW5cIixcclxuXHRcIlBhbGF1XCIsXHJcblx0XCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsXHJcblx0XCJQYW5hbWFcIixcclxuXHRcIlBhcHVhIE5ldyBHdWluZWFcIixcclxuXHRcIlBhcmFndWF5XCIsXHJcblx0XCJQZXJ1XCIsXHJcblx0XCJQaGlsaXBwaW5lcyAodGhlKVwiLFxyXG5cdFwiUGl0Y2Fpcm5cIixcclxuXHRcIlBvbGFuZFwiLFxyXG5cdFwiUG9ydHVnYWxcIixcclxuXHRcIlB1ZXJ0byBSaWNvXCIsXHJcblx0XCJRYXRhclwiLFxyXG5cdFwiUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhXCIsXHJcblx0XCJSb21hbmlhXCIsXHJcblx0XCJSdXNzaWFuIEZlZGVyYXRpb24gKHRoZSlcIixcclxuXHRcIlJ3YW5kYVwiLFxyXG5cdFwiUsOpdW5pb25cIixcclxuXHRcIlNhaW50IEJhcnRow6lsZW15XCIsXHJcblx0XCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxyXG5cdFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXHJcblx0XCJTYWludCBMdWNpYVwiLFxyXG5cdFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcclxuXHRcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixcclxuXHRcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsXHJcblx0XCJTYW1vYVwiLFxyXG5cdFwiU2FuIE1hcmlub1wiLFxyXG5cdFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsXHJcblx0XCJTYXVkaSBBcmFiaWFcIixcclxuXHRcIlNlbmVnYWxcIixcclxuXHRcIlNlcmJpYVwiLFxyXG5cdFwiU2V5Y2hlbGxlc1wiLFxyXG5cdFwiU2llcnJhIExlb25lXCIsXHJcblx0XCJTaW5nYXBvcmVcIixcclxuXHRcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcclxuXHRcIlNsb3Zha2lhXCIsXHJcblx0XCJTbG92ZW5pYVwiLFxyXG5cdFwiU29sb21vbiBJc2xhbmRzXCIsXHJcblx0XCJTb21hbGlhXCIsXHJcblx0XCJTb3V0aCBBZnJpY2FcIixcclxuXHRcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXHJcblx0XCJTb3V0aCBTdWRhblwiLFxyXG5cdFwiU3BhaW5cIixcclxuXHRcIlNyaSBMYW5rYVwiLFxyXG5cdFwiU3VkYW4gKHRoZSlcIixcclxuXHRcIlN1cmluYW1lXCIsXHJcblx0XCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXHJcblx0XCJTd2VkZW5cIixcclxuXHRcIlN3aXR6ZXJsYW5kXCIsXHJcblx0XCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFxyXG5cdFwiVGFpd2FuXCIsXHJcblx0XCJUYWppa2lzdGFuXCIsXHJcblx0XCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXHJcblx0XCJUaGFpbGFuZFwiLFxyXG5cdFwiVGltb3ItTGVzdGVcIixcclxuXHRcIlRvZ29cIixcclxuXHRcIlRva2VsYXVcIixcclxuXHRcIlRvbmdhXCIsXHJcblx0XCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXHJcblx0XCJUdW5pc2lhXCIsXHJcblx0XCJUdXJrZXlcIixcclxuXHRcIlR1cmttZW5pc3RhblwiLFxyXG5cdFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpXCIsXHJcblx0XCJUdXZhbHVcIixcclxuXHRcIlVnYW5kYVwiLFxyXG5cdFwiVWtyYWluZVwiLFxyXG5cdFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSlcIixcclxuXHRcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSlcIixcclxuXHRcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKVwiLFxyXG5cdFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpXCIsXHJcblx0XCJVcnVndWF5XCIsXHJcblx0XCJVemJla2lzdGFuXCIsXHJcblx0XCJWYW51YXR1XCIsXHJcblx0XCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCIsXHJcblx0XCJWaWV0IE5hbVwiLFxyXG5cdFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCIsXHJcblx0XCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIixcclxuXHRcIldhbGxpcyBhbmQgRnV0dW5hXCIsXHJcblx0XCJXZXN0ZXJuIFNhaGFyYVwiLFxyXG5cdFwiWWVtZW5cIixcclxuXHRcIlphbWJpYVwiLFxyXG5cdFwiWmltYmFid2VcIixcclxuXHRcIsOFbGFuZCBJc2xhbmRzXCJcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50cnlMaXN0OyIsImltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgY291bnRyeSwgaXNibiwgcmVhZFN0YXR1cyl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgICAgdGhpcy5pc2JuID0gaXNibjtcclxuICAgICAgICB0aGlzLnJlYWRTdGF0dXMgPSByZWFkU3RhdHVzO1xyXG4gICAgICAgIHRoaXMuaWQgPSB1bmlxaWQoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlYWRTdGF0dXMgPSB0aGlzLnRvZ2dsZVJlYWRTdGF0dXMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVSZWFkU3RhdHVzKCl7ICBcclxuICAgICAgICB0aGlzLnJlYWRTdGF0dXMgPSAgIXRoaXMucmVhZFN0YXR1cztcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9jb21wb25lbnRzL3JlZmFjdG9yL0Jvb2tcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL2NvbXBvbmVudHMvQm9va1N0b3JlXCI7XHJcbmltcG9ydCBjb3VudHJ5TGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL2NvdW50cnlOYW1lc1wiO1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IFVJRWxlbWVudCA9ICgoKSA9PiB7ICBcclxuICAgICAgICAvL0FwcGVuZCBOYXYgQmFyICAgICAgIFxyXG4gICAgICAgIE5hdkJhci5jcmVhdGVOYXZCYXIoKTsgXHJcbiAgICAgICAgU3RvcmUuZW1wdHlMaWJyYXJ5TXNnKCk7ICAgICAgICAgICAgICAgICAgIFxyXG59KSgpO1xyXG5cclxuXHJcbmNsYXNzIFVJIHtcclxuICAgXHJcbiAgICBzdGF0aWMgZm9ybURpc3BsYXllZCA9ICdoaWRlJztcclxuICAgICAgICAgIFxyXG4gICAgc3RhdGljIGRpc3BsYXlCb29rcygpeyAgXHJcbiAgICAgICAgY29uc3QgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpOyAgICAgXHJcbiAgICAgICAgYm9va3MuZm9yRWFjaCgoYm9vaywgaW5kZXgpID0+IFVJLmFkZEJvb2tUb0xpYnJhcnkoYm9vaywgaW5kZXgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGNsZWFyRm9ybUZpZWxkcygpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLXRpdGxlJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yLW5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5JykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNibicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWRTdGF0dXMnKS5zZWxlY3RlZEluZGV4ID0gMDsgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dGb3JtKCl7XHJcbiAgICAgICAgLy8gY2xlYXIgZm9ybVxyXG4gICAgICAgIFVJLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgIC8vTWFrZSBmb3JtIHZpc2libGVcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBVSS5mb3JtRGlzcGxheWVkID0gJ3Nob3cnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlRm9ybShlLHZhbHVlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIFVJLmZvcm1EaXNwbGF5ZWQgPSB2YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRCb29rVG9MaWJyYXJ5KGJvb2ssIGluZGV4KXtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stbGlzdCcpO1xyXG5cclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBgcm93YDtcclxuICAgICAgICByb3cuaWQgPSBib29rLmlkOyAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhib29rKTtcclxuICAgICAgIFxyXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHRkPiR7aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgPHRkPjxzdHJvbmc+JHtib29rLnRpdGxlfTwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgPHRkPiR7Ym9vay5hdXRob3J9PC90ZD4gICAgICAgXHJcbiAgICAgICAgPHRkPiR7Ym9vay5jb3VudHJ5fTwvdGQ+XHJcbiAgICAgICAgPHRkPiR7Ym9vay5pc2JufTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPSdyYWRpby1idG4tY2VsbCcgPjxkaXYgY2xhc3M9J3JhZGlvLWJ0bi1kaXYnID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ncmVhZC1idG4gcmVhZC1zdGF0dXMtYnRuICR7Ym9vay5yZWFkU3RhdHVzID8gJ3JlYWQtYnRuLWdyZWVuJzogJ3JlYWQtYnRuLXJlZCd9JyBcclxuICAgICAgICAgICAgPiR7Ym9vay5yZWFkU3RhdHVzID8gJ1JlYWQnIDogJ05vdCByZWFkJ308L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj48L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz0nZGVsZXRlLWJ0bi1jZWxsJyA+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXHJcbiAgICAgICAgIGJ0bi1zbSBkZWxldGVcIj5YPC9idXR0b24+PC90ZD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgICAgIFN0b3JlLmVtcHR5TGlicmFyeU1zZygpOyBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVtb3ZlIEJvb2sgcm93cyBiZWZvcmUgYm9va3MgZGlzcGxheSBhZnRlciBkZWxldGU7XHJcbiAgICBzdGF0aWMgY2xlYXJCb29rcygpe1xyXG4gICAgICAgIGxldCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdycpO1xyXG4gICAgICAgICAgICBpZihyb3dzKXtcclxuICAgICAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbW92ZSgpKSBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0RlbGV0ZSBCb29rIGZyb20gVUlcclxuICAgIHN0YXRpYyBkZWxldGVCb29rKGVsKXtcclxuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKXtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NsZWFyIHRoZSBsaXN0IGJlZm9yZSBkaXNwbGF5IGFnYWluXHJcbiAgICAgICAgICAgIFVJLmNsZWFyQm9va3MoKTtcclxuICAgICAgICAgICAgLy9yZXNldCBsaXN0IHRvIGdldCBzZXJpYWwgYm9vayBjb3VudCBjb3JyZWN0OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFVJLmRpc3BsYXlCb29rcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzdGF0aWMgc2hvd0FsZXJ0KG1lc3NhZ2UsIGNsYXNzTmFtZSl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBgYWxlcnQgYWxlcnQtJHtjbGFzc05hbWV9YDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSkpO1xyXG5cclxuICAgICAgICBpZihVSS5mb3JtRGlzcGxheWVkID09PSAnc2hvdycpe1xyXG4gICAgICAgICAgICAvLyBzaG93cyBhbGVydCB3aGVuIGZvcm0gZmllbGRzIGFyZSBlbXB0eVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgICAgICAgIGRpdi5pZCA9IGBmb3JtLWFsZXJ0YDtcclxuICAgICAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoZGl2LCB0aXRsZURpdik7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKFVJLmZvcm1EaXNwbGF5ZWQgPT09ICdoaWRlJyl7IFxyXG4gICAgICAgICAgICAvLyBzaG93cyBhbGVydCB3aGVuIGFkZCBib29rIGlzIHN1Y2Nlc3NmdWxsXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1jb250YWluZXInKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIHRhYmxlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIC8vdmFuaXNoIGluIDQgc2Vjb25kc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDQwMDApOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJlYWRTdGF0dXMoKXtcclxuICAgICAgICBjb25zdCByZWFkU3RhdHVzT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFkU3RhdHVzJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gcmVhZFN0YXR1c09wdGlvbnMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHJlYWRTdGF0dXNPcHRpb25zLm9wdGlvbnM7ICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbaW5kZXhdLnRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmVyaWZ5SVNCTihpc2JuKXtcclxuICAgICAgICBjb25zdCBib29rcyA9IFN0b3JlLmdldEJvb2tzKCk7XHJcbiAgICAgICAgY29uc3QgaXNiblZlcmlmeSA9IGJvb2tzLnNvbWUoYm9vayA9PiBpc2JuID09PSBib29rLmlzYm4pOyAgICAgICAgXHJcbiAgICAgICAgaWYoaXNiblZlcmlmeSl7XHJcbiAgICAgICAgICAgIFVJLnNob3dBbGVydCgnSVNCTiBtdXN0IGJlIHVuaXF1ZSBmb3IgYWxsIGJvb2tzJywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNibicpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi8vRXZlbnQ6IERpc3BsYXkgQm9va3MgXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5kaXNwbGF5Qm9va3MpO1xyXG5cclxuLy9FdmVudDogU2hvdyBmb3JtIG9uIGFkZCBib29rIGJ1dHRvbiBjbGlja1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJvb2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93Rm9ybSk7XHJcblxyXG4vL0Nsb3NlIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXHJcbihlKSA9PiBVSS5oaWRlRm9ybShlLCdjbG9zZSBidG4gY2xpY2tlZCcpKTtcclxuXHJcblxyXG4vL0V2ZW50OiBBZGQgYSBCb29rXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xyXG4gICAgLy9QcmV2ZW50IGFjdHVhbCBTdWJtaXQgb3IgZGVmYXVsdCBicm9zd2VyIHN1Ym1pdCBiZWhhdmlvclxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIC8vR2V0IEZvcm0gVmFsdWVzXHJcbiAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10aXRsZScpLnZhbHVlO1xyXG4gICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3ItbmFtZScpLnZhbHVlOyAgICBcclxuICAgICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnknKS52YWx1ZTtcclxuICAgICBjb25zdCBpc2JuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzYm4nKS52YWx1ZTsgICAgXHJcbiAgICAgIFxyXG4gICAgIC8vIFZhbGlkYXRlIGFsbCBmaWVsZFxyXG4gICAgIGlmKHRpdGxlID09PSAnJyB8fCBhdXRob3IgPT0gJycgfHwgaXNibiA9PT0gJycpe1xyXG4gICAgICAgIFVJLnNob3dBbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIHJlcXVpcmVkIGZpZWxkcycsICdkYW5nZXInKTsgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stdGl0bGUnKS5mb2N1cygpOyAgICAgXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgLy9DaGVjayB0aGF0IGlzYm4gaXMgdW5pcXVlIGZvciBlYWNoIGJvb2s7XHJcbiAgICAgICAgVUkudmVyaWZ5SVNCTihpc2JuKVxyXG5cclxuICAgICAgICAvL0NoZWNrIHRoYXQgaXNibiBOdW1iZXIgaXMgbm90IGxlc3MgdGhhbiBmaXZlIGFuZCBub3QgZ3JlYXRlciB0aGFuIDlcclxuICAgICAgICBpZigoaXNibi50b1N0cmluZygpLmxlbmd0aCA8IDUpIHx8IChpc2JuLnRvU3RyaW5nKCkubGVuZ3RoID4gOSkgKXtcclxuICAgICAgICAgICAgVUkuc2hvd0FsZXJ0KCdJU0JOIGNoYXJhY3RlcnMgbXVzdCBiZSBiZXR3ZWVuIGZpdmUgYW5kIG5pbmUnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc2JuJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL0NoZWNrIHRoYXQgY291bnRyeSB2YWx1ZSBpcyB2YWxpZFxyXG4gICAgICAgIGNvbnN0IG1hdGNoZWRDb3VudHJ5ID0gY291bnRyeUxpc3Quc29tZShjb3VudHJ5TmFtZSA9PiBjb3VudHJ5LnRvTG93ZXJDYXNlKCkgPT09IGNvdW50cnlOYW1lLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgaWYobWF0Y2hlZENvdW50cnkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgVUkuc2hvd0FsZXJ0KCdQbGVhc2UgaW5wdXQgYSB2YWxpZCBjb3VudHJ5JywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9DaGVjayB0aGF0IHJlYWQgc3RhdHVzIGlzIG5vdCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHJlYWRTdGF0dXM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKFVJLmdldFJlYWRTdGF0dXMoKSA9PT0gJ3llcycpe1xyXG4gICAgICAgICAgICByZWFkU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICBcclxuICAgICAgICAgIGlmKFVJLmdldFJlYWRTdGF0dXMoKSA9PT0gJ25vJyl7XHJcbiAgICAgICAgICAgIHJlYWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBVSS5zaG93QWxlcnQoJ1BsZWFzZSBzZWxlY3QgcmVhZCBzdGF0dXMnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgIFxyXG5cclxuICAgICAgICAvL0luc3RhdGlhdGUgYm9va1xyXG4gICAgICAgIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBjb3VudHJ5LCBpc2JuLCByZWFkU3RhdHVzKTsgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9BZGQgYm9vayB0byBCb29rIFN0b3JlIGFycmF5ICAgICAgIFxyXG4gICAgICAgIFN0b3JlLmFkZEJvb2tUb1N0b3JlKGJvb2spXHJcbiAgICAgICAgY29uc29sZS5sb2coU3RvcmUuZ2V0Qm9va3MoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vQWRkIEJvb2sgdG8gVUlcclxuICAgICAgICBVSS5hZGRCb29rVG9MaWJyYXJ5KGJvb2ssIFN0b3JlLmdldEJvb2tzKCkubGVuZ3RoKTtcclxuICAgICAgICBVSS5oaWRlRm9ybShlLCdoaWRlJyk7XHJcbiAgICAgICAgVUkuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgVUkuc2hvd0FsZXJ0KCdCb29rIEFkZGVkJywgJ2dyZWVuJyk7ICAgICAgICAgICAgICBcclxuICAgICB9ICAgIFxyXG59KTtcclxuXHJcblxyXG5cclxuLy9FdmVudDogUmVtb3ZlIGJvb2sgZnJvbSBBcnJheSBhbmQgVUk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgXHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zbScpKXtcclxuICAgICAgICBVSS5zaG93QWxlcnQoJ0Jvb2sgcmVtb3ZlZCcsICdvcmFuZ2UnKTsgICAgICAgXHJcbiAgICAgICAgU3RvcmUucmVtb3ZlQm9vayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICB9IFxyXG4gICAgLy9SZW1vdmUgYm9vayBmcm9tIFVJICAgICBcclxuICAgIFVJLmRlbGV0ZUJvb2soZS50YXJnZXQpO1xyXG4gICAgU3RvcmUuZW1wdHlMaWJyYXJ5TXNnKCk7XHJcbn0pXHJcblxyXG4vL1RvZ2dsZSBSZWFkIFN0YXR1cyBmb3IgYW55IEJvb2sgb24gdGhlIGxpc3RcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkLXN0YXR1cy1idG4nKSl7XHJcbiAgICAgICAgbGV0IGlzYm4gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJvb2tzID0gU3RvcmUuZ2V0Qm9va3MoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Qm9vayA9IGJvb2tzLmZpbmQoYm9vayA9PiBib29rLmlzYm4gPT09IGlzYm4pO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudEJvb2sucmVhZFN0YXR1cyl7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudEJvb2sucmVhZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdOb3QgcmVhZCc7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlYWQtYnRuLXJlZCcpO1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWQtYnRuLWdyZWVuJykpe1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVhZC1idG4tZ3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50Qm9vay5yZWFkU3RhdHVzICA9IHRydWU7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ1JlYWQnO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyZWFkLWJ0bi1ncmVlbicpOyAgXHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVhZC1idG4tcmVkJykpe1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVhZC1idG4tcmVkJyk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgU3RvcmUudXBkYXRlQm9va3MoY3VycmVudEJvb2spO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==