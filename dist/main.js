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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif; \r\n    \r\n}\r\n\r\n#mainpage-container{\r\n    height: 100%;\r\n    background-color: rgb(198, 233, 192);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    position: relative;\r\n    padding: 1em;\r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n   \r\n    box-shadow: 0 0 10px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.page-title{\r\n    margin-block-start: 0px;\r\n    margin-block-end: 0px;\r\n}\r\n\r\n.add-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    align-self: center;\r\n    height: 33px;\r\n    width: 150px;\r\n    color: var(--limegreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    margin-top: 40px;\r\n    font-size: 1.3rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 40px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 22rem;\r\n    background-color: var(--deepLimeGreen);\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 2px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.6rem 1.2rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.3rem;\r\n    background-color: var(--limegreen);\r\n    border: 2px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* Book Collection Section */\r\n.books-section{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n/* current read  */\r\n\r\n.current-read,.collection{\r\n    background-color: var(--lightLimeGreen);\r\n    min-height: 23rem;\r\n    margin: 2rem 1rem;\r\n    border-radius: 4px;   \r\n}\r\n\r\n.current-read{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: var(--limegreen);\r\n    position: relative;\r\n    height: 23rem !important;\r\n}\r\n\r\n.cur-heading{\r\n   border-bottom: 2px solid var(--limegreen);\r\n   position: absolute;\r\n   top: 0rem;\r\n   padding: 0.5rem;\r\n   width: 100%;\r\n   text-align: center;\r\n   /* box-shadow: 0 0 3px 1px rgb(0, 12, 0); */\r\n   border-radius: 4px;\r\n}\r\n\r\n.book-holder{\r\n    /* border: 2px solid red; */\r\n    padding: 0.5rem;\r\n    position: relative;\r\n    top: 2rem;\r\n}\r\n\r\n.book-holder .img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.contRead-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n\r\n\r\n/* Collection section */\r\n\r\n.collection{\r\n    margin-left: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n\r\n.col-heading{\r\n    border-bottom: 2px solid var(--limegreen);\r\n    align-self: center;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: var(--limegreen);\r\n    /* box-shadow: 0 0 5px 1px rgb(0, 12, 0); */\r\n    border-radius: 4px;\r\n}\r\n\r\n.collection-holder{\r\n    min-height: 26rem;\r\n    padding: 1.2rem 1.6rem 1.2rem 2rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid red; */\r\n   \r\n}\r\n\r\n.new-book-holder{\r\n    color: var(--limegreen);\r\n    padding: 1rem;\r\n    /* border: 2px solid red; */\r\n    height: 100%;\r\n    min-width: 200.77px ; \r\n    flex: 0 1 auto;\r\n}\r\n\r\n.new-book-holder .new-img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.new-book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.new-book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.read-now-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n    margin-top: 10px;\r\n};\r\n\r\n.new-book-desc .readStatus-dis{\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    color: red\r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\nbody{\r\n    font-family: \"josefin sans\", \"lobster\",  sans-serif; \r\n    \r\n}\r\n\r\n#mainpage-container{\r\n    height: 100%;\r\n    background-color: rgb(198, 233, 192);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar{\r\n    background-color: var(--deepLimeGreen);\r\n    height: 90px;\r\n    position: relative;\r\n    padding: 1em;\r\n    color: var(--limegreen);    \r\n    font-family: \"lobster\";\r\n   \r\n    box-shadow: 0 0 10px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.page-title{\r\n    margin-block-start: 0px;\r\n    margin-block-end: 0px;\r\n}\r\n\r\n.add-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    align-self: center;\r\n    height: 33px;\r\n    width: 150px;\r\n    color: var(--limegreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    border-radius: 4px;\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    margin-top: 40px;\r\n    font-size: 1.3rem;\r\n    box-shadow: 0px 1px 5px 0px rgb(3, 26, 3);;\r\n}\r\n\r\n\r\n/* Form Section */\r\n#form-container{   \r\n    position: absolute;\r\n    padding: 40px;\r\n    top: 5em;    \r\n    width: 30rem;\r\n    align-self: center;\r\n    display: none;\r\n    background-color: var(--deepLimeGreen);\r\n    color: var(--limegreen);\r\n    font-size: 1.2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 7px 1px rgb(0, 12, 0);\r\n}\r\n\r\n.close-btn{\r\n    border: 1px solid var(--deepLimeGreen);\r\n    position: absolute;\r\n    margin-left: 22rem;\r\n    background-color: var(--deepLimeGreen);\r\n    color: white;\r\n    font-size: 1rem;\r\n    top: .4rem;\r\n}\r\n\r\n.form-title{\r\n    color: var(--limegreen);\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    line-height: 1;\r\n    margin-bottom: 1.7rem;\r\n}\r\n\r\n\r\n.input-container{\r\n    position: relative;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.input{\r\n    width: 100%;\r\n    outline: none;\r\n    border: 2px solid var(--limegreen);\r\n    background: none;\r\n    padding: 0.6rem 1.2rem;\r\n    color: var(--limegreen);\r\n    font-size: 1rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.submit-btn{\r\n    padding: 0.3rem;\r\n    background-color: var(--limegreen);\r\n    border: 2px solid var(--limegreen);\r\n    font-size: 1.2rem;\r\n    color:var(--deepLimeGreen);\r\n    line-height: 1;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 500;\r\n}\r\n\r\n.submit-btn:hover:hover{\r\n    background-color: transparent;\r\n    color: var(--limegreen);\r\n}\r\n\r\n\r\n#read-status{\r\n    margin-left: 2rem;\r\n    outline: none;   \r\n    border: 2px solid #020a02; \r\n    background-color: var(--limegreen);\r\n    padding: 9px; \r\n}\r\n\r\n/* Book Collection Section */\r\n.books-section{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n/* current read  */\r\n\r\n.current-read,.collection{\r\n    background-color: var(--lightLimeGreen);\r\n    min-height: 23rem;\r\n    margin: 2rem 1rem;\r\n    border-radius: 4px;   \r\n}\r\n\r\n.current-read{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: var(--limegreen);\r\n    position: relative;\r\n    height: 23rem !important;\r\n}\r\n\r\n.cur-heading{\r\n   border-bottom: 2px solid var(--limegreen);\r\n   position: absolute;\r\n   top: 0rem;\r\n   padding: 0.5rem;\r\n   width: 100%;\r\n   text-align: center;\r\n   /* box-shadow: 0 0 3px 1px rgb(0, 12, 0); */\r\n   border-radius: 4px;\r\n}\r\n\r\n.book-holder{\r\n    /* border: 2px solid red; */\r\n    padding: 0.5rem;\r\n    position: relative;\r\n    top: 2rem;\r\n}\r\n\r\n.book-holder .img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.contRead-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n};\r\n\r\n\r\n/* Collection section */\r\n\r\n.collection{\r\n    margin-left: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n\r\n.col-heading{\r\n    border-bottom: 2px solid var(--limegreen);\r\n    align-self: center;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: var(--limegreen);\r\n    /* box-shadow: 0 0 5px 1px rgb(0, 12, 0); */\r\n    border-radius: 4px;\r\n}\r\n\r\n.collection-holder{\r\n    min-height: 26rem;\r\n    padding: 1.2rem 1.6rem 1.2rem 2rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid red; */\r\n   \r\n}\r\n\r\n.new-book-holder{\r\n    color: var(--limegreen);\r\n    padding: 1rem;\r\n    /* border: 2px solid red; */\r\n    height: 100%;\r\n    min-width: 200.77px ; \r\n    flex: 0 1 auto;\r\n}\r\n\r\n.new-book-holder .new-img-wrapper{\r\n    border: 2px solid var(--limegreen);\r\n    height: 8rem;\r\n    padding: 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.new-book-desc{  \r\n    padding: 0.5rem;\r\n    text-align: center;\r\n}\r\n.new-book-desc p{  \r\n    padding: 0.2rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.read-now-btn{\r\n    background-color: var(--deepLimeGreen);\r\n    border: 1px solid var(--deepLimeGreen);\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    border-radius: 4px;\r\n    color: var(--limegreen);\r\n    margin-top: 10px;\r\n};\r\n\r\n.new-book-desc .readStatus-dis{\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    color: red\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggleReadBtn.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggleReadBtn.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }", "",{"version":3,"sources":["webpack://./src/css/toggleReadBtn.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB","sourcesContent":["\r\n:root{\r\n    --limegreen:rgb(170, 228, 158);    \r\n    --lightLimeGreen: #102b10;\r\n    --deepLimeGreen: #020a02;\r\n    --border: border: 1px solid red;\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 24px;\r\n  }\r\n\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--limegreen);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n  input:checked + .slider {\r\n    background-color: var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px var(--deepLimeGreen);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }"],"sourceRoot":""}]);
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

/***/ "./src/css/toggleReadBtn.css":
/*!***********************************!*\
  !*** ./src/css/toggleReadBtn.css ***!
  \***********************************/
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

/***/ "./src/Script.js":
/*!***********************!*\
  !*** ./src/Script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookLogic": () => (/* binding */ bookLogic)
/* harmony export */ });
/* harmony import */ var _currentBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentBook.js */ "./src/currentBook.js");
/* harmony import */ var _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddBookForm.js */ "./src/components/AddBookForm.js");
/* harmony import */ var _allBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allBook.js */ "./src/allBook.js");





const bookLogic = (() => {

  function component(comp, klassName){
    const element = document.createElement(comp)
    element.className = klassName;
    return element
  }

  const BookFactory = (title, author, pages, readStatus) => { 
    const toggleReadStatus = () => {
      return !readStatus;
    }
    return {title, author, pages, readStatus, toggleReadStatus };
  }



  
  // Add book Button 
  const addBookButton = component("button", "add-btn");
  addBookButton.textContent = "Add Book";
  addBookButton.onclick = () =>{
      _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.clearForm();
      _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.formWrapper.style.display = "block";
      console.log("Add book button clicked and form displayed")
    }
   

    let myLibrary = [
          {title: "RichDad",
          author: "Robert Kiyosaki",
          pages: "257",
          readStatus: false},
          {title: "People as Asset",
          author: "Laide Abel",
          pages: "170",
          readStatus: true}
        ];

        myLibrary.forEach((book) => {
          function checkBook(){
            if(book.readStatus){
              // form.readStatusInput.value = 'true';
              return 'Read';             
            }
            return 'Not Read';
          }          
          let ourBook = _allBook_js__WEBPACK_IMPORTED_MODULE_2__.allBooks.createNewBookHolder(book.title, book.author, book.pages, checkBook())
          _allBook_js__WEBPACK_IMPORTED_MODULE_2__.allBooks.collectionHolder.appendChild(ourBook);
        })

          const addBookToLibrary = (bookName, bookAuthor, pagesCount, readStatus) => {
      let newBook = BookFactory(bookName, bookAuthor, pagesCount, readStatus);
      myLibrary.push(newBook);      
    }
         

    function displayBook(newBookTitle, newBookAuthor){
      myLibrary.filter((book) => book.title === newBookTitle && book.author === newBookAuthor).forEach((book) => {
        console.log(book)
        let ourBook = _allBook_js__WEBPACK_IMPORTED_MODULE_2__.allBooks.createNewBookHolder(book.title, book.author, book.pages, book.readStatus)
        _allBook_js__WEBPACK_IMPORTED_MODULE_2__.allBooks.collectionHolder.appendChild(ourBook);
      })
    }

    

    const isPageValueANumber = () =>{
      if(isNaN(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pagesCount.value)){
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pageCountLabel.textContent = "Pages must be numbers only";
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pageCountLabel.style.color = "red";
        return false;
      }
    };
    
      function display(obj){
        if(obj.readStatus.checked === true) {
          return "Read";
         }
         return "Not read";
        };

          // form submission
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.formWrapper.onsubmit = (e) => {
        e.preventDefault();      
        isPageValueANumber();       
        addBookToLibrary(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.bookName.value, _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.bookAuthor.value, _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pagesCount.value, display(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form));        
        displayBook(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.bookName.value, _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.bookAuthor.value);
        
        console.log(myLibrary);  
        console.log(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.readStatus.checked);

        if(display(_components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form) === 'read'){
        let readbtn = document.querySelector(".read-now-btn");
        console.log(readbtn)
        readbtn.textContent = "Continue Reading";
        }

        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.formWrapper.style.display = "none";
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pageCountLabel.textContent = "How many pages?";
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.pageCountLabel.style.color = "var(--limegreen)";
        _components_AddBookForm_js__WEBPACK_IMPORTED_MODULE_1__.form.clearForm();
      }


  return { addBookButton, myLibrary }

})()




 


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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const allBooks = (() => {
    
    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };


    // Collection Section on right
  const collection = component("div", "collection");  
  const collectionHeading = component("h3", "col-heading");
        collectionHeading.textContent = "My Collection";
        collection.appendChild(collectionHeading);
        
    const collectionHolder = component("div", "collection-holder");
    collection.appendChild(collectionHolder);


      const createNewBookHolder = function(title, author, pages, readSt) {
          const newBookHolder = component("div", "new-book-holder"); 

          const newbookImageWrapper = component("div", "new-img-wrapper")
          const newbookimg = component("img", "new-book-image");
                newbookImageWrapper.appendChild(newbookimg);
                newBookHolder.appendChild(newbookImageWrapper);

          const newBookDescription = component("div", "new-book-desc");    
              // Book description display - using P at end of variable to know it is a paragraph element 
                const newBookTitleP = component("p", "new-book-title");
                newBookTitleP.textContent = `Title: ${title}`;
                newBookDescription.appendChild(newBookTitleP);

                const newAuthorP = component("p", "new-author")
                newAuthorP.textContent = `Author: ${author}`;
                newBookDescription.appendChild(newAuthorP);

                const newPagesP = component("p", "new-no-of-pages");
                newPagesP.textContent = `Pages: ${pages}`;
                newBookDescription.appendChild(newPagesP);

                const newReadStatusLabel = component("label", "switch");
                // newReadStatusLabel.textContent = `Read Status: ${readSt}`;
                const newReadStatusCheckbox = component("input", "checkboxes");
                newReadStatusCheckbox.setAttribute("type", "checkbox");
                newReadStatusCheckbox.setAttribute("title", "Read Status");
                const newReadStatusSpan = component("span", "slider round");
                newReadStatusLabel.appendChild(newReadStatusCheckbox)
                newReadStatusLabel.appendChild(newReadStatusSpan);                                
                newBookDescription.appendChild(newReadStatusLabel);
                
                const readStatusDisplay =component("p", 'readStatus-dis');
                readStatusDisplay.textContent = `${readSt}`;
               
                newBookDescription.appendChild(readStatusDisplay)

                const ReadNowBtn = component("button", "read-now-btn")
                ReadNowBtn.textContent = "Read now";
                newBookDescription.appendChild(ReadNowBtn);
      newBookHolder.appendChild(newBookDescription);
      return newBookHolder;
  }

    return { collection, createNewBookHolder, collectionHolder }

})()



/***/ }),

/***/ "./src/components/AddBookForm.js":
/*!***************************************!*\
  !*** ./src/components/AddBookForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });


const form = (() => {

    const formWrapper = document.getElementById("form-container");

    const bookName = document.getElementById("author-name");
    const bookAuthor = document.getElementById("book-title");
    const pagesCount = document.getElementById("no-of-pages");
    const pageCountLabel = document.getElementById("label-display"); 
    const readStatus = document.getElementById("read-status");  

    let readStatusInput = document.querySelector(".checkboxes");
    console.log(readStatusInput)

    // close form button evnt
    const formCloseBtn = document.querySelector(".close-btn");
    formCloseBtn.addEventListener("click", ()=>{
    formWrapper.style.display = "none";
    })

    const clearForm = () =>{
        bookName.value = ""; 
        bookAuthor.value = ""; 
        pagesCount.value = "";
        readStatus.checked = false;
      };
  

    


    return { formWrapper, bookName, bookAuthor, pagesCount, pageCountLabel, readStatus, clearForm, readStatusInput  }

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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const currentBook = (function (){

    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };

// current Book secton on the left
    
    
        const currentRead = component("div", "current-read");
        const currentReadHeading = component("h3", "cur-heading");
        currentReadHeading.textContent = "Current Book";
        currentRead.appendChild(currentReadHeading);         
   

    return { currentRead }
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

    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };

    // Nav Bar
    const navBar = component("div", "navBar");
    const navBarTitle = component("h1", "page-title");
    navBarTitle.textContent = "User Personal Library";
    
    navBar.appendChild(navBarTitle); 
    return { navBar };

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
/* harmony import */ var _allBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allBook */ "./src/allBook.js");
/* harmony import */ var _Script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Script.js */ "./src/Script.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_toggleReadBtn_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/toggleReadBtn.css */ "./src/css/toggleReadBtn.css");









const library = (function(){
  
  const pageContainer = document.getElementById("mainpage-container");
  console.log(pageContainer);

  function component(comp, klassName){
    const element = document.createElement(comp)
    element.className = klassName;
    return element
  };

   // Section below Header
   const librarySection = component("div", "books-section");   

  // current Book secton on the left
  const CR = _currentBook_js__WEBPACK_IMPORTED_MODULE_0__.currentBook.currentRead;
  librarySection.appendChild(CR);

  // Collection on the right
  librarySection.appendChild(_allBook__WEBPACK_IMPORTED_MODULE_2__.allBooks.collection);
 
  

  pageContainer.insertAdjacentElement("afterbegin", librarySection);
  // Add Button;       Note: The Add Button is appended before the NavBar but 
// it appears on the browser in reverse order i.e "navBar" is dislayed before "Add Book btn".
  pageContainer.insertAdjacentElement("afterbegin", _Script_js__WEBPACK_IMPORTED_MODULE_3__.bookLogic.addBookButton);
  pageContainer.insertAdjacentElement("afterbegin", _header_js__WEBPACK_IMPORTED_MODULE_1__.header.navBar); 
    
    

    

    return { librarySection, component };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlB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Y2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3NzL3RvZ2dsZVJlYWRCdG4uY3NzPzU0ODEiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL1NjcmlwdC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwLy4vc3JjL2FsbEJvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9jb21wb25lbnRzL0FkZEJvb2tGb3JtLmpzIiwid2VicGFjazovL2xpYnJhcnlBcHAvLi9zcmMvY3VycmVudEJvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnlBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5QXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeUFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1saW1lZ3JlZW46cmdiKDE3MCwgMjI4LCAxNTgpOyAgICBcXHJcXG4gICAgLS1saWdodExpbWVHcmVlbjogIzEwMmIxMDtcXHJcXG4gICAgLS1kZWVwTGltZUdyZWVuOiAjMDIwYTAyO1xcclxcbiAgICAtLWJvcmRlcjogYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImpvc2VmaW4gc2Fuc1xcXCIsIFxcXCJsb2JzdGVyXFxcIiwgIHNhbnMtc2VyaWY7IFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI21haW5wYWdlLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMzMsIDE5Mik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pOyAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2JzdGVyXFxcIjtcXHJcXG4gICBcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYigzLCAyNiwgMyk7O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRvcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxle1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOnZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWFkLXN0YXR1c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7ICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjBhMDI7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBCb29rIENvbGxlY3Rpb24gU2VjdGlvbiAqL1xcclxcbi5ib29rcy1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi8qIGN1cnJlbnQgcmVhZCAgKi9cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFkLC5jb2xsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodExpbWVHcmVlbik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyM3JlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VyLWhlYWRpbmd7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMHJlbTtcXHJcXG4gICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIC8qIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYigwLCAxMiwgMCk7ICovXFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1ob2xkZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staG9sZGVyIC5pbWctd3JhcHBlcntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udFJlYWQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblxcclxcblxcclxcbi8qIENvbGxlY3Rpb24gc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb2xsZWN0aW9ue1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29sLWhlYWRpbmd7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHJnYigwLCAxMiwgMCk7ICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxlY3Rpb24taG9sZGVye1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuNnJlbSAxLjJyZW0gMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctYm9vay1ob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDAuNzdweCA7IFxcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1ib29rLWhvbGRlciAubmV3LWltZy13cmFwcGVye1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ldy1ib29rLWRlc2MgcHsgIFxcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJlYWQtbm93LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufTtcXHJcXG5cXHJcXG4ubmV3LWJvb2stZGVzYyAucmVhZFN0YXR1cy1kaXN7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBjb2xvcjogcmVkXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7QUFJQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1EQUFtRDs7QUFFdkQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7O0lBRXRCLHNDQUFzQztBQUMx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SUFDdkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEIsQ0FBQTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1saW1lZ3JlZW46cmdiKDE3MCwgMjI4LCAxNTgpOyAgICBcXHJcXG4gICAgLS1saWdodExpbWVHcmVlbjogIzEwMmIxMDtcXHJcXG4gICAgLS1kZWVwTGltZUdyZWVuOiAjMDIwYTAyO1xcclxcbiAgICAtLWJvcmRlcjogYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImpvc2VmaW4gc2Fuc1xcXCIsIFxcXCJsb2JzdGVyXFxcIiwgIHNhbnMtc2VyaWY7IFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI21haW5wYWdlLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMzMsIDE5Mik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pOyAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2JzdGVyXFxcIjtcXHJcXG4gICBcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYigwLCAxMiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYigzLCAyNiwgMyk7O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIFNlY3Rpb24gKi9cXHJcXG4jZm9ybS1jb250YWluZXJ7ICAgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgdG9wOiA1ZW07ICAgIFxcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAsIDEyLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRvcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxle1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOnZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWFkLXN0YXR1c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7ICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjBhMDI7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBCb29rIENvbGxlY3Rpb24gU2VjdGlvbiAqL1xcclxcbi5ib29rcy1zZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi8qIGN1cnJlbnQgcmVhZCAgKi9cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFkLC5jb2xsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodExpbWVHcmVlbik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1yZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyM3JlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VyLWhlYWRpbmd7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMHJlbTtcXHJcXG4gICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIC8qIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYigwLCAxMiwgMCk7ICovXFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1ob2xkZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staG9sZGVyIC5pbWctd3JhcHBlcntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGltZWdyZWVuKTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJvb2stZGVzYyBweyAgXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udFJlYWQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwTGltZUdyZWVuKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZWdyZWVuKTtcXHJcXG59O1xcclxcblxcclxcblxcclxcbi8qIENvbGxlY3Rpb24gc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb2xsZWN0aW9ue1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29sLWhlYWRpbmd7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHJnYigwLCAxMiwgMCk7ICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxlY3Rpb24taG9sZGVye1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuNnJlbSAxLjJyZW0gMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctYm9vay1ob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDAuNzdweCA7IFxcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1ib29rLWhvbGRlciAubmV3LWltZy13cmFwcGVye1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saW1lZ3JlZW4pO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWJvb2stZGVzY3sgIFxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ldy1ib29rLWRlc2MgcHsgIFxcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJlYWQtbm93LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcExpbWVHcmVlbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufTtcXHJcXG5cXHJcXG4ubmV3LWJvb2stZGVzYyAucmVhZFN0YXR1cy1kaXN7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBjb2xvcjogcmVkXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbjpyb290e1xcclxcbiAgICAtLWxpbWVncmVlbjpyZ2IoMTcwLCAyMjgsIDE1OCk7ICAgIFxcclxcbiAgICAtLWxpZ2h0TGltZUdyZWVuOiAjMTAyYjEwO1xcclxcbiAgICAtLWRlZXBMaW1lR3JlZW46ICMwMjBhMDI7XFxyXFxuICAgIC0tYm9yZGVyOiBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zd2l0Y2ggaW5wdXQge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4gIC5zbGlkZXIucm91bmQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RvZ2dsZVJlYWRCdG4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwyQkFBMkI7RUFDN0I7O0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290e1xcclxcbiAgICAtLWxpbWVncmVlbjpyZ2IoMTcwLCAyMjgsIDE1OCk7ICAgIFxcclxcbiAgICAtLWxpZ2h0TGltZUdyZWVuOiAjMTAyYjEwO1xcclxcbiAgICAtLWRlZXBMaW1lR3JlZW46ICMwMjBhMDI7XFxyXFxuICAgIC0tYm9yZGVyOiBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zd2l0Y2ggaW5wdXQge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWVncmVlbik7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWRlZXBMaW1lR3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4gIC5zbGlkZXIucm91bmQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZ2dsZVJlYWRCdG4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2dnbGVSZWFkQnRuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3VycmVudEJvb2sgZnJvbSBcIi4vY3VycmVudEJvb2suanNcIjtcclxuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0uanNcIjtcclxuaW1wb3J0IHsgYWxsQm9va3MgfSBmcm9tIFwiLi9hbGxCb29rLmpzXCI7XHJcblxyXG5cclxuY29uc3QgYm9va0xvZ2ljID0gKCgpID0+IHtcclxuXHJcbiAgZnVuY3Rpb24gY29tcG9uZW50KGNvbXAsIGtsYXNzTmFtZSl7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wKVxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBrbGFzc05hbWU7XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxuXHJcbiAgY29uc3QgQm9va0ZhY3RvcnkgPSAodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWRTdGF0dXMpID0+IHsgXHJcbiAgICBjb25zdCB0b2dnbGVSZWFkU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gIXJlYWRTdGF0dXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3RpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkU3RhdHVzLCB0b2dnbGVSZWFkU3RhdHVzIH07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIFxyXG4gIC8vIEFkZCBib29rIEJ1dHRvbiBcclxuICBjb25zdCBhZGRCb29rQnV0dG9uID0gY29tcG9uZW50KFwiYnV0dG9uXCIsIFwiYWRkLWJ0blwiKTtcclxuICBhZGRCb29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgQm9va1wiO1xyXG4gIGFkZEJvb2tCdXR0b24ub25jbGljayA9ICgpID0+e1xyXG4gICAgICBmb3JtLmNsZWFyRm9ybSgpO1xyXG4gICAgICBmb3JtLmZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkIGJvb2sgYnV0dG9uIGNsaWNrZWQgYW5kIGZvcm0gZGlzcGxheWVkXCIpXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIGxldCBteUxpYnJhcnkgPSBbXHJcbiAgICAgICAgICB7dGl0bGU6IFwiUmljaERhZFwiLFxyXG4gICAgICAgICAgYXV0aG9yOiBcIlJvYmVydCBLaXlvc2FraVwiLFxyXG4gICAgICAgICAgcGFnZXM6IFwiMjU3XCIsXHJcbiAgICAgICAgICByZWFkU3RhdHVzOiBmYWxzZX0sXHJcbiAgICAgICAgICB7dGl0bGU6IFwiUGVvcGxlIGFzIEFzc2V0XCIsXHJcbiAgICAgICAgICBhdXRob3I6IFwiTGFpZGUgQWJlbFwiLFxyXG4gICAgICAgICAgcGFnZXM6IFwiMTcwXCIsXHJcbiAgICAgICAgICByZWFkU3RhdHVzOiB0cnVlfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIG15TGlicmFyeS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0Jvb2soKXtcclxuICAgICAgICAgICAgaWYoYm9vay5yZWFkU3RhdHVzKXtcclxuICAgICAgICAgICAgICAvLyBmb3JtLnJlYWRTdGF0dXNJbnB1dC52YWx1ZSA9ICd0cnVlJztcclxuICAgICAgICAgICAgICByZXR1cm4gJ1JlYWQnOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ05vdCBSZWFkJztcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgb3VyQm9vayA9IGFsbEJvb2tzLmNyZWF0ZU5ld0Jvb2tIb2xkZXIoYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2sucGFnZXMsIGNoZWNrQm9vaygpKVxyXG4gICAgICAgICAgYWxsQm9va3MuY29sbGVjdGlvbkhvbGRlci5hcHBlbmRDaGlsZChvdXJCb29rKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGNvbnN0IGFkZEJvb2tUb0xpYnJhcnkgPSAoYm9va05hbWUsIGJvb2tBdXRob3IsIHBhZ2VzQ291bnQsIHJlYWRTdGF0dXMpID0+IHtcclxuICAgICAgbGV0IG5ld0Jvb2sgPSBCb29rRmFjdG9yeShib29rTmFtZSwgYm9va0F1dGhvciwgcGFnZXNDb3VudCwgcmVhZFN0YXR1cyk7XHJcbiAgICAgIG15TGlicmFyeS5wdXNoKG5ld0Jvb2spOyAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Qm9vayhuZXdCb29rVGl0bGUsIG5ld0Jvb2tBdXRob3Ipe1xyXG4gICAgICBteUxpYnJhcnkuZmlsdGVyKChib29rKSA9PiBib29rLnRpdGxlID09PSBuZXdCb29rVGl0bGUgJiYgYm9vay5hdXRob3IgPT09IG5ld0Jvb2tBdXRob3IpLmZvckVhY2goKGJvb2spID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhib29rKVxyXG4gICAgICAgIGxldCBvdXJCb29rID0gYWxsQm9va3MuY3JlYXRlTmV3Qm9va0hvbGRlcihib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5wYWdlcywgYm9vay5yZWFkU3RhdHVzKVxyXG4gICAgICAgIGFsbEJvb2tzLmNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kQ2hpbGQob3VyQm9vayk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaXNQYWdlVmFsdWVBTnVtYmVyID0gKCkgPT57XHJcbiAgICAgIGlmKGlzTmFOKGZvcm0ucGFnZXNDb3VudC52YWx1ZSkpe1xyXG4gICAgICAgIGZvcm0ucGFnZUNvdW50TGFiZWwudGV4dENvbnRlbnQgPSBcIlBhZ2VzIG11c3QgYmUgbnVtYmVycyBvbmx5XCI7XHJcbiAgICAgICAgZm9ybS5wYWdlQ291bnRMYWJlbC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIGRpc3BsYXkob2JqKXtcclxuICAgICAgICBpZihvYmoucmVhZFN0YXR1cy5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJSZWFkXCI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIFwiTm90IHJlYWRcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIC8vIGZvcm0gc3VibWlzc2lvblxyXG4gICAgICAgIGZvcm0uZm9ybVdyYXBwZXIub25zdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICBcclxuICAgICAgICBpc1BhZ2VWYWx1ZUFOdW1iZXIoKTsgICAgICAgXHJcbiAgICAgICAgYWRkQm9va1RvTGlicmFyeShmb3JtLmJvb2tOYW1lLnZhbHVlLCBmb3JtLmJvb2tBdXRob3IudmFsdWUsIGZvcm0ucGFnZXNDb3VudC52YWx1ZSwgZGlzcGxheShmb3JtKSk7ICAgICAgICBcclxuICAgICAgICBkaXNwbGF5Qm9vayhmb3JtLmJvb2tOYW1lLnZhbHVlLCBmb3JtLmJvb2tBdXRob3IudmFsdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG15TGlicmFyeSk7ICBcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnJlYWRTdGF0dXMuY2hlY2tlZCk7XHJcblxyXG4gICAgICAgIGlmKGRpc3BsYXkoZm9ybSkgPT09ICdyZWFkJyl7XHJcbiAgICAgICAgbGV0IHJlYWRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWQtbm93LWJ0blwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWFkYnRuKVxyXG4gICAgICAgIHJlYWRidG4udGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlIFJlYWRpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0uZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGZvcm0ucGFnZUNvdW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkhvdyBtYW55IHBhZ2VzP1wiO1xyXG4gICAgICAgIGZvcm0ucGFnZUNvdW50TGFiZWwuc3R5bGUuY29sb3IgPSBcInZhcigtLWxpbWVncmVlbilcIjtcclxuICAgICAgICBmb3JtLmNsZWFyRm9ybSgpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICByZXR1cm4geyBhZGRCb29rQnV0dG9uLCBteUxpYnJhcnkgfVxyXG5cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7IGJvb2tMb2dpYyB9XHJcblxyXG4gXHJcbiIsImltcG9ydCB7IGxpYnJhcnkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IGFsbEJvb2tzID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KGNvbXAsIGtsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGtsYXNzTmFtZTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBDb2xsZWN0aW9uIFNlY3Rpb24gb24gcmlnaHRcclxuICBjb25zdCBjb2xsZWN0aW9uID0gY29tcG9uZW50KFwiZGl2XCIsIFwiY29sbGVjdGlvblwiKTsgIFxyXG4gIGNvbnN0IGNvbGxlY3Rpb25IZWFkaW5nID0gY29tcG9uZW50KFwiaDNcIiwgXCJjb2wtaGVhZGluZ1wiKTtcclxuICAgICAgICBjb2xsZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTXkgQ29sbGVjdGlvblwiO1xyXG4gICAgICAgIGNvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoY29sbGVjdGlvbkhlYWRpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY29sbGVjdGlvbkhvbGRlciA9IGNvbXBvbmVudChcImRpdlwiLCBcImNvbGxlY3Rpb24taG9sZGVyXCIpO1xyXG4gICAgY29sbGVjdGlvbi5hcHBlbmRDaGlsZChjb2xsZWN0aW9uSG9sZGVyKTtcclxuXHJcblxyXG4gICAgICBjb25zdCBjcmVhdGVOZXdCb29rSG9sZGVyID0gZnVuY3Rpb24odGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWRTdCkge1xyXG4gICAgICAgICAgY29uc3QgbmV3Qm9va0hvbGRlciA9IGNvbXBvbmVudChcImRpdlwiLCBcIm5ldy1ib29rLWhvbGRlclwiKTsgXHJcblxyXG4gICAgICAgICAgY29uc3QgbmV3Ym9va0ltYWdlV3JhcHBlciA9IGNvbXBvbmVudChcImRpdlwiLCBcIm5ldy1pbWctd3JhcHBlclwiKVxyXG4gICAgICAgICAgY29uc3QgbmV3Ym9va2ltZyA9IGNvbXBvbmVudChcImltZ1wiLCBcIm5ldy1ib29rLWltYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgbmV3Ym9va0ltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChuZXdib29raW1nKTtcclxuICAgICAgICAgICAgICAgIG5ld0Jvb2tIb2xkZXIuYXBwZW5kQ2hpbGQobmV3Ym9va0ltYWdlV3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgY29uc3QgbmV3Qm9va0Rlc2NyaXB0aW9uID0gY29tcG9uZW50KFwiZGl2XCIsIFwibmV3LWJvb2stZGVzY1wiKTsgICAgXHJcbiAgICAgICAgICAgICAgLy8gQm9vayBkZXNjcmlwdGlvbiBkaXNwbGF5IC0gdXNpbmcgUCBhdCBlbmQgb2YgdmFyaWFibGUgdG8ga25vdyBpdCBpcyBhIHBhcmFncmFwaCBlbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Qm9va1RpdGxlUCA9IGNvbXBvbmVudChcInBcIiwgXCJuZXctYm9vay10aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIG5ld0Jvb2tUaXRsZVAudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGl0bGV9YDtcclxuICAgICAgICAgICAgICAgIG5ld0Jvb2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuZXdCb29rVGl0bGVQKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBdXRob3JQID0gY29tcG9uZW50KFwicFwiLCBcIm5ldy1hdXRob3JcIilcclxuICAgICAgICAgICAgICAgIG5ld0F1dGhvclAudGV4dENvbnRlbnQgPSBgQXV0aG9yOiAke2F1dGhvcn1gO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm9va0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG5ld0F1dGhvclApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2VzUCA9IGNvbXBvbmVudChcInBcIiwgXCJuZXctbm8tb2YtcGFnZXNcIik7XHJcbiAgICAgICAgICAgICAgICBuZXdQYWdlc1AudGV4dENvbnRlbnQgPSBgUGFnZXM6ICR7cGFnZXN9YDtcclxuICAgICAgICAgICAgICAgIG5ld0Jvb2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuZXdQYWdlc1ApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlYWRTdGF0dXNMYWJlbCA9IGNvbXBvbmVudChcImxhYmVsXCIsIFwic3dpdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gbmV3UmVhZFN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gYFJlYWQgU3RhdHVzOiAke3JlYWRTdH1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVhZFN0YXR1c0NoZWNrYm94ID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJjaGVja2JveGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVhZFN0YXR1c0NoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICAgICAgICAgIG5ld1JlYWRTdGF0dXNDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlJlYWQgU3RhdHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVhZFN0YXR1c1NwYW4gPSBjb21wb25lbnQoXCJzcGFuXCIsIFwic2xpZGVyIHJvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVhZFN0YXR1c0xhYmVsLmFwcGVuZENoaWxkKG5ld1JlYWRTdGF0dXNDaGVja2JveClcclxuICAgICAgICAgICAgICAgIG5ld1JlYWRTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZChuZXdSZWFkU3RhdHVzU3Bhbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5ld0Jvb2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuZXdSZWFkU3RhdHVzTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkU3RhdHVzRGlzcGxheSA9Y29tcG9uZW50KFwicFwiLCAncmVhZFN0YXR1cy1kaXMnKTtcclxuICAgICAgICAgICAgICAgIHJlYWRTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cmVhZFN0fWA7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbmV3Qm9va0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHJlYWRTdGF0dXNEaXNwbGF5KVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IFJlYWROb3dCdG4gPSBjb21wb25lbnQoXCJidXR0b25cIiwgXCJyZWFkLW5vdy1idG5cIilcclxuICAgICAgICAgICAgICAgIFJlYWROb3dCdG4udGV4dENvbnRlbnQgPSBcIlJlYWQgbm93XCI7XHJcbiAgICAgICAgICAgICAgICBuZXdCb29rRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoUmVhZE5vd0J0bik7XHJcbiAgICAgIG5ld0Jvb2tIb2xkZXIuYXBwZW5kQ2hpbGQobmV3Qm9va0Rlc2NyaXB0aW9uKTtcclxuICAgICAgcmV0dXJuIG5ld0Jvb2tIb2xkZXI7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiB7IGNvbGxlY3Rpb24sIGNyZWF0ZU5ld0Jvb2tIb2xkZXIsIGNvbGxlY3Rpb25Ib2xkZXIgfVxyXG5cclxufSkoKVxyXG5cclxuZXhwb3J0IHsgYWxsQm9va3MgfSIsIlxyXG5cclxuY29uc3QgZm9ybSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGJvb2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3ItbmFtZVwiKTtcclxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stdGl0bGVcIik7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1vZi1wYWdlc1wiKTtcclxuICAgIGNvbnN0IHBhZ2VDb3VudExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1kaXNwbGF5XCIpOyBcclxuICAgIGNvbnN0IHJlYWRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWQtc3RhdHVzXCIpOyAgXHJcblxyXG4gICAgbGV0IHJlYWRTdGF0dXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hlc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHJlYWRTdGF0dXNJbnB1dClcclxuXHJcbiAgICAvLyBjbG9zZSBmb3JtIGJ1dHRvbiBldm50XHJcbiAgICBjb25zdCBmb3JtQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICAgIGZvcm1DbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT57XHJcbiAgICAgICAgYm9va05hbWUudmFsdWUgPSBcIlwiOyBcclxuICAgICAgICBib29rQXV0aG9yLnZhbHVlID0gXCJcIjsgXHJcbiAgICAgICAgcGFnZXNDb3VudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgcmVhZFN0YXR1cy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgXHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiB7IGZvcm1XcmFwcGVyLCBib29rTmFtZSwgYm9va0F1dGhvciwgcGFnZXNDb3VudCwgcGFnZUNvdW50TGFiZWwsIHJlYWRTdGF0dXMsIGNsZWFyRm9ybSwgcmVhZFN0YXR1c0lucHV0ICB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBmb3JtIH0iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRCb29rID0gKGZ1bmN0aW9uICgpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudChjb21wLCBrbGFzc05hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbXApXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBrbGFzc05hbWU7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgfTtcclxuXHJcbi8vIGN1cnJlbnQgQm9vayBzZWN0b24gb24gdGhlIGxlZnRcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY3VycmVudFJlYWQgPSBjb21wb25lbnQoXCJkaXZcIiwgXCJjdXJyZW50LXJlYWRcIik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJlYWRIZWFkaW5nID0gY29tcG9uZW50KFwiaDNcIiwgXCJjdXItaGVhZGluZ1wiKTtcclxuICAgICAgICBjdXJyZW50UmVhZEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgQm9va1wiO1xyXG4gICAgICAgIGN1cnJlbnRSZWFkLmFwcGVuZENoaWxkKGN1cnJlbnRSZWFkSGVhZGluZyk7ICAgICAgICAgXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiB7IGN1cnJlbnRSZWFkIH1cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRCb29rIH0gIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wb25lbnQoY29tcCwga2xhc3NOYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0ga2xhc3NOYW1lO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgLy8gTmF2IEJhclxyXG4gICAgY29uc3QgbmF2QmFyID0gY29tcG9uZW50KFwiZGl2XCIsIFwibmF2QmFyXCIpO1xyXG4gICAgY29uc3QgbmF2QmFyVGl0bGUgPSBjb21wb25lbnQoXCJoMVwiLCBcInBhZ2UtdGl0bGVcIik7XHJcbiAgICBuYXZCYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVXNlciBQZXJzb25hbCBMaWJyYXJ5XCI7XHJcbiAgICBcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZCYXJUaXRsZSk7IFxyXG4gICAgcmV0dXJuIHsgbmF2QmFyIH07XHJcblxyXG59KSgpXHJcblxyXG5cclxuZXhwb3J0IHsgaGVhZGVyIH0iLCJpbXBvcnQgeyBjdXJyZW50Qm9vayB9IGZyb20gXCIuL2N1cnJlbnRCb29rLmpzXCI7XHJcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBhbGxCb29rcyB9IGZyb20gXCIuL2FsbEJvb2tcIjtcclxuaW1wb3J0IHsgYm9va0xvZ2ljIH0gZnJvbSBcIi4vU2NyaXB0LmpzXCI7XHJcblxyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvdG9nZ2xlUmVhZEJ0bi5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IGxpYnJhcnkgPSAoZnVuY3Rpb24oKXtcclxuICBcclxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlucGFnZS1jb250YWluZXJcIik7XHJcbiAgY29uc29sZS5sb2cocGFnZUNvbnRhaW5lcik7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBvbmVudChjb21wLCBrbGFzc05hbWUpe1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcClcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0ga2xhc3NOYW1lO1xyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9O1xyXG5cclxuICAgLy8gU2VjdGlvbiBiZWxvdyBIZWFkZXJcclxuICAgY29uc3QgbGlicmFyeVNlY3Rpb24gPSBjb21wb25lbnQoXCJkaXZcIiwgXCJib29rcy1zZWN0aW9uXCIpOyAgIFxyXG5cclxuICAvLyBjdXJyZW50IEJvb2sgc2VjdG9uIG9uIHRoZSBsZWZ0XHJcbiAgY29uc3QgQ1IgPSBjdXJyZW50Qm9vay5jdXJyZW50UmVhZDtcclxuICBsaWJyYXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChDUik7XHJcblxyXG4gIC8vIENvbGxlY3Rpb24gb24gdGhlIHJpZ2h0XHJcbiAgbGlicmFyeVNlY3Rpb24uYXBwZW5kQ2hpbGQoYWxsQm9va3MuY29sbGVjdGlvbik7XHJcbiBcclxuICBcclxuXHJcbiAgcGFnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGxpYnJhcnlTZWN0aW9uKTtcclxuICAvLyBBZGQgQnV0dG9uOyAgICAgICBOb3RlOiBUaGUgQWRkIEJ1dHRvbiBpcyBhcHBlbmRlZCBiZWZvcmUgdGhlIE5hdkJhciBidXQgXHJcbi8vIGl0IGFwcGVhcnMgb24gdGhlIGJyb3dzZXIgaW4gcmV2ZXJzZSBvcmRlciBpLmUgXCJuYXZCYXJcIiBpcyBkaXNsYXllZCBiZWZvcmUgXCJBZGQgQm9vayBidG5cIi5cclxuICBwYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgYm9va0xvZ2ljLmFkZEJvb2tCdXR0b24pO1xyXG4gIHBhZ2VDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBoZWFkZXIubmF2QmFyKTsgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiB7IGxpYnJhcnlTZWN0aW9uLCBjb21wb25lbnQgfTtcclxuXHJcbn0pKClcclxuXHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IHsgbGlicmFyeSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9