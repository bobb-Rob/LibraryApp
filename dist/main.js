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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(218, 38, 38);\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif;     \r\n}\r\n\r\n\r\n#mainpage-container{\r\n    min-height: 500px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    width: 100%;\r\n    position: fixed;   \r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n    box-shadow: 0 0 10px 1px var(--limegreen);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-bottom: 2px solid var(--limegreen);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.page-title{\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n.add-btn-div{  \r\n    width: 50%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n\r\n}\r\n\r\n.add-book-btn{\r\n    background-color: var(--limegreen);  \r\n    height: 33px;\r\n    width: 100px;  \r\n    margin: 0 10px;\r\n    color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;   \r\n    font-size: 1rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n.table-container{\r\n    padding-top: 130px;\r\n    width: 100%;\r\n    /* background-color: yellow; */\r\n    /* border: 2px solid black; */\r\n   display: flex;\r\n   flex-direction: column;\r\n   /* position: relative; */\r\n   min-height:250px ;\r\n   \r\n}\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 20px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n    z-index: 1000;\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 26rem;\r\n    background-color: rgb(218, 38, 38);\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.3rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 1px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.3rem 0.5rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.2rem;\r\n    background-color: var(--limegreen);\r\n    border: 1px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* table Style */\r\n\r\n.table{\r\n    border-collapse: collapse;\r\n    margin: 10px 40px 0 40px;\r\n    border: 2px solid var(--lightLimeGreen);   \r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid var(--deepLimeGreen);\r\n  }\r\n\r\nthead{\r\n   \r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    height: 50px;\r\n   \r\n}\r\n\r\n/*  */\r\n\r\ntbody{\r\n    /* height: 160px; */\r\n    text-align: center;  \r\n}\r\n\r\ntr{\r\n     height: 40px;\r\n}\r\n\r\n.delete-btn-cell{\r\n    width: 50px;   \r\n}\r\n\r\n.btn-danger{\r\n    background-color: rgb(218, 38, 38);\r\n    color: var(--deepLimeGreen);\r\n    width: 30px;\r\n    height: 30px;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 18px;\r\n}\r\n\r\n/* Alert message style */\r\n\r\n.alert,.empty{\r\n    /* border: 2px solid black !important; */\r\n    height: 30px;\r\n    padding-top:4px;\r\n    background-color: var(--limegreen);\r\n    width: 300px;\r\n    align-self: center;\r\n    text-align: center;\r\n    color: var(--deepLimeGreen);\r\n    font-weight: bold;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 16px;\r\n}\r\n\r\n.empty{\r\n    position: absolute;\r\n    bottom: 220px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: absolute;\r\n    top: 100px; \r\n}\r\n\r\n.alert-green{\r\n    background-color: var(--limegreen) !important;\r\n    position: absolute; \r\n    top: 100px;   \r\n}\r\n\r\n.alert-orange{\r\n    background-color: orange !important;\r\n    position: absolute; \r\n    top: 100px; \r\n}\r\n\r\n\r\n#form-alert{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: sticky !important;\r\n   \r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(218, 38, 38);\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif;     \r\n}\r\n\r\n\r\n#mainpage-container{\r\n    min-height: 500px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    width: 100%;\r\n    position: fixed;   \r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n    box-shadow: 0 0 10px 1px var(--limegreen);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-bottom: 2px solid var(--limegreen);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.page-title{\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n.add-btn-div{  \r\n    width: 50%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n\r\n}\r\n\r\n.add-book-btn{\r\n    background-color: var(--limegreen);  \r\n    height: 33px;\r\n    width: 100px;  \r\n    margin: 0 10px;\r\n    color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;   \r\n    font-size: 1rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n.table-container{\r\n    padding-top: 130px;\r\n    width: 100%;\r\n    /* background-color: yellow; */\r\n    /* border: 2px solid black; */\r\n   display: flex;\r\n   flex-direction: column;\r\n   /* position: relative; */\r\n   min-height:250px ;\r\n   \r\n}\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 20px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n    z-index: 1000;\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 26rem;\r\n    background-color: rgb(218, 38, 38);\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.3rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 1px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.3rem 0.5rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.2rem;\r\n    background-color: var(--limegreen);\r\n    border: 1px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* table Style */\r\n\r\n.table{\r\n    border-collapse: collapse;\r\n    margin: 10px 40px 0 40px;\r\n    border: 2px solid var(--lightLimeGreen);   \r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid var(--deepLimeGreen);\r\n  }\r\n\r\nthead{\r\n   \r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    height: 50px;\r\n   \r\n}\r\n\r\n/*  */\r\n\r\ntbody{\r\n    /* height: 160px; */\r\n    text-align: center;  \r\n}\r\n\r\ntr{\r\n     height: 40px;\r\n}\r\n\r\n.delete-btn-cell{\r\n    width: 50px;   \r\n}\r\n\r\n.btn-danger{\r\n    background-color: rgb(218, 38, 38);\r\n    color: var(--deepLimeGreen);\r\n    width: 30px;\r\n    height: 30px;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 18px;\r\n}\r\n\r\n/* Alert message style */\r\n\r\n.alert,.empty{\r\n    /* border: 2px solid black !important; */\r\n    height: 30px;\r\n    padding-top:4px;\r\n    background-color: var(--limegreen);\r\n    width: 300px;\r\n    align-self: center;\r\n    text-align: center;\r\n    color: var(--deepLimeGreen);\r\n    font-weight: bold;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 16px;\r\n}\r\n\r\n.empty{\r\n    position: absolute;\r\n    bottom: 220px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: absolute;\r\n    top: 100px; \r\n}\r\n\r\n.alert-green{\r\n    background-color: var(--limegreen) !important;\r\n    position: absolute; \r\n    top: 100px;   \r\n}\r\n\r\n.alert-orange{\r\n    background-color: orange !important;\r\n    position: absolute; \r\n    top: 100px; \r\n}\r\n\r\n\r\n#form-alert{\r\n    background-color: rgba(255, 0, 0, 0.822) !important; \r\n    position: sticky !important;\r\n   \r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(218, 38, 38);\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.radio-btn-div{\r\n  /* border: 2px solid var(--lightLimeGreen); */\r\n  /* background-color: red;  */\r\n  /* display: flex; */\r\n  height: 40px;\r\n  /* justify-content: space-evenly;\r\n  align-items: center; */\r\n  position: relative;\r\n}\r\n\r\n.radio-btn-cell{\r\n  width: 150px;\r\n}\r\n\r\n#yes-div,#no-div{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75%;\r\n  width: 40%;\r\n  position: absolute;\r\n \r\n}\r\n\r\n#yes-div{\r\n  /* background-color: var(--limegreen); */\r\n  left: 0px;\r\n  margin: 5px 0px 5px 5px;\r\n}\r\n\r\n#no-div{\r\n  /* background-color: var(--red); */\r\n  right: 0px;\r\n  margin: 5px 5px 5px 0px;\r\n}", "",{"version":3,"sources":["webpack://./src/css/toggleReadBtn.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,wBAAwB;IACxB,+BAA+B;IAC/B,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;AAEF;EACE,6CAA6C;EAC7C,4BAA4B;EAC5B,mBAAmB;EACnB,YAAY;EACZ;wBACsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,kBAAkB;;AAEpB;;AAEA;EACE,wCAAwC;EACxC,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,UAAU;EACV,uBAAuB;AACzB","sourcesContent":["\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n    --red: rgb(218, 38, 38);\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.radio-btn-div{\r\n  /* border: 2px solid var(--lightLimeGreen); */\r\n  /* background-color: red;  */\r\n  /* display: flex; */\r\n  height: 40px;\r\n  /* justify-content: space-evenly;\r\n  align-items: center; */\r\n  position: relative;\r\n}\r\n\r\n.radio-btn-cell{\r\n  width: 150px;\r\n}\r\n\r\n#yes-div,#no-div{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75%;\r\n  width: 40%;\r\n  position: absolute;\r\n \r\n}\r\n\r\n#yes-div{\r\n  /* background-color: var(--limegreen); */\r\n  left: 0px;\r\n  margin: 5px 0px 5px 5px;\r\n}\r\n\r\n#no-div{\r\n  /* background-color: var(--red); */\r\n  right: 0px;\r\n  margin: 5px 5px 5px 0px;\r\n}"],"sourceRoot":""}]);
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
    constructor(title, author, country, isbn){
        this.title = title;
        this.author = author;
        this.country = country;
        this.isbn = isbn;
        this.readStatus = false;
        this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    }
    toggleReadStatus(){
        this.readStatus =  !this.readStatus;
    }

    // static handleReadStatusChange(){
    //     const radioButtons = document.querySelectorAll('input[name="readstatus"]'); 

    //     radioButtons.forEach(btn => console.log(btn.id))     
    //     // 
    //     // for(const radioBtn of radioButtons){
    //     //     if(radioBtn.checked === true){
    //     //         if(radioBtn.value === 'yes'){
    //     //             this.readStatus =  true;
    //     //             document.querySelector('#yes-div').style.backgroundColor = 'rgb(170, 228, 158)';
    //     //         }
    //     //         return;
    //     //     }else{
    //     //         this.readStatus =  false;
    //     //         document.querySelector('#no-div').style.backgroundColor = 'rgb(218, 38, 38)';
    //     //     }
    //     // }
       
    // }


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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/toggleReadBtn.css */ "./src/css/toggleReadBtn.css");








const UIElement = (() => {  
        //Append Nav Bar       
        _components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"].createNavBar(); 
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].emptyLibraryMsg();

        const yes = document.querySelector('#yes');
        console.log(yes)
       
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
            <div id='yes-div' >
                <input type='radio' name='readstatus' value='yes' id='yes'>
                <label for='yes' ><strong>Yes</strong></label>
            </div>
            <div id='no-div' >
                <input type='radio' name='readstatus' value='no' id='no' checked >
                <label for='no' > <strong>No</strong> </label>
            </div>
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
     const radioButtons = document.querySelectorAll('input[name="readstatus"]');
     console.log(radioButtons);
     const books = _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks();
 
     // Validate 
     if(title === '' || author == '' || isbn === ''){
        UI.showAlert('Please fill in all required fields', 'danger');       
     }else{
        //Check that isbn is unique for each book
        const isbnVerify = books.some(book => isbn === book.isbn);        
        if(isbnVerify){
            UI.showAlert('ISBN must be unique for all books', 'danger');
            return;
        } 
          
        //Instatiate book
        const book = new _components_refactor_Book__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, country, isbn);       
        
        //Add book to Book Store array       
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].addBookToStore(book)
        console.log(_components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].getBooks());
            
        //Add Book to UI
        UI.addBookToLibrary(book, books.length);
        UI.hideForm(e,'hide');
        UI.clearFormFields();
        UI.showAlert('Book Added', 'green');              
     }    
});



//Event: Remove book from Array and UI;
document.querySelector('#book-list').addEventListener('click', (e) => {   
    e.stopPropagation();
    console.log(e.target)
    if(e.target.classList.contains('btn-sm')){
        UI.showAlert('Book removed', 'orange');
        console.log(e.target.parentElement.parentElement.id);
        _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].removeBook(e.target.parentElement.parentElement.id)
    } 
    //Remove book from UI     
    UI.deleteBook(e.target);
    _components_BookStore__WEBPACK_IMPORTED_MODULE_2__["default"].emptyLibraryMsg();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUFwcC8uL3NyYy9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3RvZ2dsZVJlYWRCdG4uY3NzPzU0ODEiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2NvbXBvbmVudHMvQm9va1N0b3JlLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jb21wb25lbnRzL3JlZmFjdG9yL0Jvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcblxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWxpbWVncmVlbjpyZ2IoMTcwLCAyMjgsIDE1OCk7ICAgIFxcclxcbiAgICAtLWxpZ2h0TGltZUdyZWVuOiAjMTAyYjEwO1xcclxcbiAgICAtLWRlZXBMaW1lR3JlZW46ICMwMjBhMDI7XFxyXFxuICAgIC0tYm9yZGVyOiBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIC0tcmVkOiByZ2IoMjE4LCAzOCwgMzgpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImpvc2VmaW4gc2Fuc1xcXCIsIFxcXCJsb2JzdGVyXFxcIiwgIHNhbnMtc2VyaWY7ICAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21haW5wYWdlLWNvbnRhaW5lcntcXHJcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgICBcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7ICAgIFxcclxcbiAgICBmb250LWZhbWlseTogXFxcImxvYnN0ZXJcXFwiO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGFnZS10aXRsZXtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hZGQtYnRuLWRpdnsgIFxcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9vay1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7ICBcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7ICBcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICBcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiKDMsIDI2LCAzKTs7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICBtaW4taGVpZ2h0OjI1MHB4IDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybSBTZWN0aW9uICovXFxyXFxuI2Zvcm0tY29udGFpbmVyeyAgIFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRvcDogNWVtOyAgICBcXHJcXG4gICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG57XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMzgsIDM4KTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdG9wOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bntcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG46aG92ZXI6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3JlYWQtc3RhdHVze1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTsgICBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAyMGEwMjsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBhZGRpbmc6IDlweDsgXFxyXFxufVxcclxcblxcclxcbi8qIHRhYmxlIFN0eWxlICovXFxyXFxuXFxyXFxuLnRhYmxle1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBtYXJnaW46IDEwcHggNDBweCAwIDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0TGltZUdyZWVuKTsgICBcXHJcXG59XFxyXFxuXFxyXFxudGFibGUsIHRoLCB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcblxcclxcbnRoZWFke1xcclxcbiAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLyogICovXFxyXFxuXFxyXFxudGJvZHl7XFxyXFxuICAgIC8qIGhlaWdodDogMTYwcHg7ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxcclxcbn1cXHJcXG5cXHJcXG50cntcXHJcXG4gICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4tY2VsbHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5idG4tZGFuZ2Vye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAzOCwgMzgpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEFsZXJ0IG1lc3NhZ2Ugc3R5bGUgKi9cXHJcXG5cXHJcXG4uYWxlcnQsLmVtcHR5e1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWRhbmdlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODIyKSAhaW1wb3J0YW50OyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHRvcDogMTAwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5hbGVydC1vcmFuZ2V7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcbiAgICB0b3A6IDEwMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Zvcm0tYWxlcnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgyMikgIWltcG9ydGFudDsgXFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcXHJcXG4gICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7OztBQUlBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw2QkFBNkI7R0FDOUIsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qix3QkFBd0I7R0FDeEIsaUJBQWlCOztBQUVwQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztFQUN4Qzs7QUFFRjs7SUFFSSxzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOztBQUVBLEtBQUs7O0FBRUw7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0tBQ0ssWUFBWTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLHdJQUF3STtJQUN4SSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksbURBQW1EO0lBQ25ELDJCQUEyQjs7QUFFL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbGltZWdyZWVuOnJnYigxNzAsIDIyOCwgMTU4KTsgICAgXFxyXFxuICAgIC0tbGlnaHRMaW1lR3JlZW46ICMxMDJiMTA7XFxyXFxuICAgIC0tZGVlcExpbWVHcmVlbjogIzAyMGEwMjtcXHJcXG4gICAgLS1ib3JkZXI6IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgLS1yZWQ6IHJnYigyMTgsIDM4LCAzOCk7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiam9zZWZpbiBzYW5zXFxcIiwgXFxcImxvYnN0ZXJcXFwiLCAgc2Fucy1zZXJpZjsgICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpbnBhZ2UtY29udGFpbmVye1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAgIFxcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTsgICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibG9ic3RlclxcXCI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFkZC1idG4tZGl2eyAgXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ib29rLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTsgIFxcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgIFxcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2IoMywgMjYsIDMpOztcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlLWNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbiAgIG1pbi1oZWlnaHQ6MjUwcHggO1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAzOCwgMzgpO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0b3A6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjp2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3Zlcjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcmVhZC1zdGF0dXN7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lOyAgIFxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDIwYTAyOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgcGFkZGluZzogOXB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFibGUgU3R5bGUgKi9cXHJcXG5cXHJcXG4udGFibGV7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIG1hcmdpbjogMTBweCA0MHB4IDAgNDBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRMaW1lR3JlZW4pOyAgIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSwgdGgsIHRkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICB9XFxyXFxuXFxyXFxudGhlYWR7XFxyXFxuICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiAgKi9cXHJcXG5cXHJcXG50Ym9keXtcXHJcXG4gICAgLyogaGVpZ2h0OiAxNjBweDsgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxyXFxufVxcclxcblxcclxcbnRye1xcclxcbiAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bi1jZWxse1xcclxcbiAgICB3aWR0aDogNTBweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kYW5nZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDM4LCAzOCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWxlcnQgbWVzc2FnZSBzdHlsZSAqL1xcclxcblxcclxcbi5hbGVydCwuZW1wdHl7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7ICovXFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtZGFuZ2Vye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44MjIpICFpbXBvcnRhbnQ7IFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbikgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4gICAgdG9wOiAxMDBweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LW9yYW5nZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHRvcDogMTAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9ybS1hbGVydHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODIyKSAhaW1wb3J0YW50OyBcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xcclxcbiAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG46cm9vdHtcXHJcXG4gICAgLS1saW1lZ3JlZW46cmdiKDE3MCwgMjI4LCAxNTgpOyAgICBcXHJcXG4gICAgLS1saWdodExpbWVHcmVlbjogIzEwMmIxMDtcXHJcXG4gICAgLS1kZWVwTGltZUdyZWVuOiAjMDIwYTAyO1xcclxcbiAgICAtLWJvcmRlcjogYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICAtLXJlZDogcmdiKDIxOCwgMzgsIDM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN3aXRjaCBpbnB1dCB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcclxcbiAgLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbi5yYWRpby1idG4tZGl2e1xcclxcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRMaW1lR3JlZW4pOyAqL1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAgKi9cXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5yYWRpby1idG4tY2VsbHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3llcy1kaXYsI25vLWRpdntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDc1JTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jeWVzLWRpdntcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7ICovXFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwcHggNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25vLWRpdntcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7ICovXFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwyQkFBMkI7RUFDN0I7O0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGO0VBQ0UsNkNBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaO3dCQUNzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290e1xcclxcbiAgICAtLWxpbWVncmVlbjpyZ2IoMTcwLCAyMjgsIDE1OCk7ICAgIFxcclxcbiAgICAtLWxpZ2h0TGltZUdyZWVuOiAjMTAyYjEwO1xcclxcbiAgICAtLWRlZXBMaW1lR3JlZW46ICMwMjBhMDI7XFxyXFxuICAgIC0tYm9yZGVyOiBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIC0tcmVkOiByZ2IoMjE4LCAzOCwgMzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3dpdGNoIGlucHV0IHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgYm90dG9tOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuICAuc2xpZGVyLnJvdW5kIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLnJhZGlvLWJ0bi1kaXZ7XFxyXFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodExpbWVHcmVlbik7ICovXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICAqL1xcclxcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvLWJ0bi1jZWxse1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jeWVzLWRpdiwjbm8tZGl2e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNzUlO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbiN5ZXMtZGl2e1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTsgKi9cXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDBweCA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbm8tZGl2e1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTsgKi9cXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBtYXJnaW46IDVweCA1cHggNXB4IDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2dnbGVSZWFkQnRuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9nZ2xlUmVhZEJ0bi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcclxuICAgIHN0YXRpYyBnZXRCb29rcygpe1xyXG4gICAgICAgIGxldCBib29rcztcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va3MnKSA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGJvb2tzID0gW107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJvb2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va3MnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib29rcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkQm9va1RvU3RvcmUoYm9vayl7XHJcbiAgICAgICAgY29uc3QgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpO1xyXG4gICAgICAgIGJvb2tzLnB1c2goYm9vayk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tzJywgSlNPTi5zdHJpbmdpZnkoYm9va3MpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib29rcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZUJvb2soaWQpIHtcclxuICAgICAgICBsZXQgYm9va3MgPSBTdG9yZS5nZXRCb29rcygpO1xyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3MuZmlsdGVyKCBib29rID0+IGJvb2suaWQgIT09IGlkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9va3MnLCBKU09OLnN0cmluZ2lmeShuZXdCb29rcykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0Jvb2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1wdHlMaWJyYXJ5TXNnKCl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGBlbXB0eSBhbGVydC1lbXB0eWA7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMaWJyYXJ5IGlzIGVtcHR5LiBBZGQgYSBib29rJykpO1xyXG4gICAgICAgIGNvbnN0IGJvb2tzID0gU3RvcmUuZ2V0Qm9va3MoKTtcclxuICAgICAgICBpZihib29rcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZGl2LCB0YWJsZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxufSIsIlxyXG5cclxuXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTmFtZSA9IFwibmF2QmFyXCI7XHJcbiAgICAgICAgbmF2QmFyLmlubmVySFRNTCA9IGA8aDEgY2xhc3M9J3BhZ2UtdGl0bGUnPlVzZXIgcGVyc29uYWwgTGlicmFyeTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nYWRkLWJ0bi1kaXYnID48YnV0dG9uICBcclxuICAgICAgICBvbmNsaWNrPScoKSA9PiBVSS5zaG93Rm9ybSgpJyBcclxuICAgICAgICBjbGFzcz0nYWRkLWJvb2stYnRuJ1xyXG4gICAgICAgID5BZGQgQm9vazwvYnV0dG9uPjwvZGl2PiBcclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb250YWluZXInKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbnBhZ2UtY29udGFpbmVyJykuaW5zZXJ0QmVmb3JlKG5hdkJhciwgZm9ybSk7ICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZU5hdkJhcn1cclxuXHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhciIsImltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgY291bnRyeSwgaXNibil7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgICAgdGhpcy5pc2JuID0gaXNibjtcclxuICAgICAgICB0aGlzLnJlYWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlkID0gdW5pcWlkKCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVSZWFkU3RhdHVzKCl7XHJcbiAgICAgICAgdGhpcy5yZWFkU3RhdHVzID0gICF0aGlzLnJlYWRTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIGhhbmRsZVJlYWRTdGF0dXNDaGFuZ2UoKXtcclxuICAgIC8vICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicmVhZHN0YXR1c1wiXScpOyBcclxuXHJcbiAgICAvLyAgICAgcmFkaW9CdXR0b25zLmZvckVhY2goYnRuID0+IGNvbnNvbGUubG9nKGJ0bi5pZCkpICAgICBcclxuICAgIC8vICAgICAvLyBcclxuICAgIC8vICAgICAvLyBmb3IoY29uc3QgcmFkaW9CdG4gb2YgcmFkaW9CdXR0b25zKXtcclxuICAgIC8vICAgICAvLyAgICAgaWYocmFkaW9CdG4uY2hlY2tlZCA9PT0gdHJ1ZSl7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBpZihyYWRpb0J0bi52YWx1ZSA9PT0gJ3llcycpe1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMucmVhZFN0YXR1cyA9ICB0cnVlO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZXMtZGl2Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxNzAsIDIyOCwgMTU4KSc7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5yZWFkU3RhdHVzID0gIGZhbHNlO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vLWRpdicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjE4LCAzOCwgMzgpJztcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIH1cclxuICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9jb21wb25lbnRzL3JlZmFjdG9yL0Jvb2tcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL2NvbXBvbmVudHMvQm9va1N0b3JlXCI7XHJcbmltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJ1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IFVJRWxlbWVudCA9ICgoKSA9PiB7ICBcclxuICAgICAgICAvL0FwcGVuZCBOYXYgQmFyICAgICAgIFxyXG4gICAgICAgIE5hdkJhci5jcmVhdGVOYXZCYXIoKTsgXHJcbiAgICAgICAgU3RvcmUuZW1wdHlMaWJyYXJ5TXNnKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZXMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh5ZXMpXHJcbiAgICAgICBcclxufSkoKTtcclxuXHJcblxyXG5jbGFzcyBVSSB7XHJcbiAgIFxyXG4gICAgc3RhdGljIGZvcm1EaXNwbGF5ZWQgPSAnaGlkZSc7XHJcbiAgICAgICAgICBcclxuICAgIHN0YXRpYyBkaXNwbGF5Qm9va3MoKXsgIFxyXG4gICAgICAgIGNvbnN0IGJvb2tzID0gU3RvcmUuZ2V0Qm9va3MoKTsgICAgIFxyXG4gICAgICAgIGJvb2tzLmZvckVhY2goKGJvb2ssIGluZGV4KSA9PiBVSS5hZGRCb29rVG9MaWJyYXJ5KGJvb2ssIGluZGV4KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBjbGVhckZvcm1GaWVsZHMoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10aXRsZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGhvci1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzYm4nKS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93Rm9ybSgpe1xyXG4gICAgICAgIC8vIGNsZWFyIGZvcm1cclxuICAgICAgICBVSS5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAvL01ha2UgZm9ybSB2aXNpYmxlXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgVUkuZm9ybURpc3BsYXllZCA9ICdzaG93JztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZUZvcm0oZSx2YWx1ZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBVSS5mb3JtRGlzcGxheWVkID0gdmFsdWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkQm9va1RvTGlicmFyeShib29rLCBpbmRleCl7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWxpc3QnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gYHJvd2A7XHJcbiAgICAgICAgcm93LmlkID0gYm9vay5pZDsgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9vayk7XHJcbiAgICAgICBcclxuICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx0ZD4ke2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgIDx0ZD48c3Ryb25nPiR7Ym9vay50aXRsZX08L3N0cm9uZz48L3RkPlxyXG4gICAgICAgIDx0ZD4ke2Jvb2suYXV0aG9yfTwvdGQ+ICAgICAgIFxyXG4gICAgICAgIDx0ZD4ke2Jvb2suY291bnRyeX08L3RkPlxyXG4gICAgICAgIDx0ZD4ke2Jvb2suaXNibn08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz0ncmFkaW8tYnRuLWNlbGwnID48ZGl2IGNsYXNzPSdyYWRpby1idG4tZGl2JyA+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3llcy1kaXYnID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0ncmVhZHN0YXR1cycgdmFsdWU9J3llcycgaWQ9J3llcyc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSd5ZXMnID48c3Ryb25nPlllczwvc3Ryb25nPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSduby1kaXYnID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0ncmVhZHN0YXR1cycgdmFsdWU9J25vJyBpZD0nbm8nIGNoZWNrZWQgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0nbm8nID4gPHN0cm9uZz5Obzwvc3Ryb25nPiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj48L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz0nZGVsZXRlLWJ0bi1jZWxsJyA+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXHJcbiAgICAgICAgIGJ0bi1zbSBkZWxldGVcIj5YPC9idXR0b24+PC90ZD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgICAgIFN0b3JlLmVtcHR5TGlicmFyeU1zZygpOyBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVtb3ZlIEJvb2sgcm93cyBiZWZvcmUgYm9va3MgZGlzcGxheSBhZnRlciBkZWxldGU7XHJcbiAgICBzdGF0aWMgY2xlYXJCb29rcygpe1xyXG4gICAgICAgIGxldCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdycpO1xyXG4gICAgICAgICAgICBpZihyb3dzKXtcclxuICAgICAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbW92ZSgpKSBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0RlbGV0ZSBCb29rIGZyb20gVUlcclxuICAgIHN0YXRpYyBkZWxldGVCb29rKGVsKXtcclxuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKXtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NsZWFyIHRoZSBsaXN0IGJlZm9yZSBkaXNwbGF5IGFnYWluXHJcbiAgICAgICAgICAgIFVJLmNsZWFyQm9va3MoKTtcclxuICAgICAgICAgICAgLy9yZXNldCBsaXN0IHRvIGdldCBzZXJpYWwgYm9vayBjb3VudCBjb3JyZWN0OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFVJLmRpc3BsYXlCb29rcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzdGF0aWMgc2hvd0FsZXJ0KG1lc3NhZ2UsIGNsYXNzTmFtZSl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBgYWxlcnQgYWxlcnQtJHtjbGFzc05hbWV9YDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSkpO1xyXG5cclxuICAgICAgICBpZihVSS5mb3JtRGlzcGxheWVkID09PSAnc2hvdycpe1xyXG4gICAgICAgICAgICAvLyBzaG93cyBhbGVydCB3aGVuIGZvcm0gZmllbGRzIGFyZSBlbXB0eVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgICAgICAgIGRpdi5pZCA9IGBmb3JtLWFsZXJ0YDtcclxuICAgICAgICAgICAgZm9ybS5pbnNlcnRCZWZvcmUoZGl2LCB0aXRsZURpdik7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKFVJLmZvcm1EaXNwbGF5ZWQgPT09ICdoaWRlJyl7IFxyXG4gICAgICAgICAgICAvLyBzaG93cyBhbGVydCB3aGVuIGFkZCBib29rIGlzIHN1Y2Nlc3NmdWxsXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1jb250YWluZXInKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIHRhYmxlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIC8vdmFuaXNoIGluIDQgc2Vjb25kc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDQwMDApOyAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL0V2ZW50OiBEaXNwbGF5IEJvb2tzIFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuZGlzcGxheUJvb2tzKTtcclxuXHJcbi8vRXZlbnQ6IFNob3cgZm9ybSBvbiBhZGQgYm9vayBidXR0b24gY2xpY2tcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ib29rLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Zvcm0pO1xyXG5cclxuLy9DbG9zZSBmb3JtXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG4oZSkgPT4gVUkuaGlkZUZvcm0oZSwnY2xvc2UgYnRuIGNsaWNrZWQnKSk7XHJcblxyXG5cclxuLy9FdmVudDogQWRkIGEgQm9va1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PntcclxuICAgIC8vUHJldmVudCBhY3R1YWwgU3VibWl0IG9yIGRlZmF1bHQgYnJvc3dlciBzdWJtaXQgYmVoYXZpb3JcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAvL0dldCBGb3JtIFZhbHVlc1xyXG4gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stdGl0bGUnKS52YWx1ZTtcclxuICAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yLW5hbWUnKS52YWx1ZTsgICAgXHJcbiAgICAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5JykudmFsdWU7XHJcbiAgICAgY29uc3QgaXNibiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc2JuJykudmFsdWU7XHJcbiAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInJlYWRzdGF0dXNcIl0nKTtcclxuICAgICBjb25zb2xlLmxvZyhyYWRpb0J1dHRvbnMpO1xyXG4gICAgIGNvbnN0IGJvb2tzID0gU3RvcmUuZ2V0Qm9va3MoKTtcclxuIFxyXG4gICAgIC8vIFZhbGlkYXRlIFxyXG4gICAgIGlmKHRpdGxlID09PSAnJyB8fCBhdXRob3IgPT0gJycgfHwgaXNibiA9PT0gJycpe1xyXG4gICAgICAgIFVJLnNob3dBbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIHJlcXVpcmVkIGZpZWxkcycsICdkYW5nZXInKTsgICAgICAgXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgLy9DaGVjayB0aGF0IGlzYm4gaXMgdW5pcXVlIGZvciBlYWNoIGJvb2tcclxuICAgICAgICBjb25zdCBpc2JuVmVyaWZ5ID0gYm9va3Muc29tZShib29rID0+IGlzYm4gPT09IGJvb2suaXNibik7ICAgICAgICBcclxuICAgICAgICBpZihpc2JuVmVyaWZ5KXtcclxuICAgICAgICAgICAgVUkuc2hvd0FsZXJ0KCdJU0JOIG11c3QgYmUgdW5pcXVlIGZvciBhbGwgYm9va3MnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy9JbnN0YXRpYXRlIGJvb2tcclxuICAgICAgICBjb25zdCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgY291bnRyeSwgaXNibik7ICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vQWRkIGJvb2sgdG8gQm9vayBTdG9yZSBhcnJheSAgICAgICBcclxuICAgICAgICBTdG9yZS5hZGRCb29rVG9TdG9yZShib29rKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFN0b3JlLmdldEJvb2tzKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL0FkZCBCb29rIHRvIFVJXHJcbiAgICAgICAgVUkuYWRkQm9va1RvTGlicmFyeShib29rLCBib29rcy5sZW5ndGgpO1xyXG4gICAgICAgIFVJLmhpZGVGb3JtKGUsJ2hpZGUnKTtcclxuICAgICAgICBVSS5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICBVSS5zaG93QWxlcnQoJ0Jvb2sgQWRkZWQnLCAnZ3JlZW4nKTsgICAgICAgICAgICAgIFxyXG4gICAgIH0gICAgXHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL0V2ZW50OiBSZW1vdmUgYm9vayBmcm9tIEFycmF5IGFuZCBVSTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICBcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNtJykpe1xyXG4gICAgICAgIFVJLnNob3dBbGVydCgnQm9vayByZW1vdmVkJywgJ29yYW5nZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XHJcbiAgICAgICAgU3RvcmUucmVtb3ZlQm9vayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICB9IFxyXG4gICAgLy9SZW1vdmUgYm9vayBmcm9tIFVJICAgICBcclxuICAgIFVJLmRlbGV0ZUJvb2soZS50YXJnZXQpO1xyXG4gICAgU3RvcmUuZW1wdHlMaWJyYXJ5TXNnKCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9