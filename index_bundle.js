/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ \"./src/models.js\");\n/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ \"./src/views.js\");\n\n\n\nconst body = document.querySelector('body');\n\n// Create a small list of students\nconst studentNames = ['Franske', 'Joske', 'Marietteje'];\nconst students = [];\n\nfor (const index in studentNames) {\n  students[index] = new _models_js__WEBPACK_IMPORTED_MODULE_0__.Student(studentNames[index]);\n}\n\nbody.appendChild((0,_views_js__WEBPACK_IMPORTED_MODULE_1__.webView)(students));\n\n//# sourceURL=webpack://contractwerk-tracker/./src/index.js?");

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student)\n/* harmony export */ });\nclass Student {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  #tasks = {\n    task1: 'waiting',\n    task2: 'waiting',\n    task3: 'waiting',\n    task4: 'waiting',\n    task5: 'waiting',\n    task6: 'waiting',\n    task7: 'waiting',\n    task8: 'waiting',\n    task9: 'waiting',\n    task10: 'waiting',\n  }\n\n  get getTasks() {\n    return this.#tasks;\n  }\n}\n\n\n\n//# sourceURL=webpack://contractwerk-tracker/./src/models.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webView\": () => (/* binding */ webView)\n/* harmony export */ });\nfunction webView(students) {\n  // create table to display everything in\n  const table = document.createElement('table');\n  const tHeader = document.createElement('th');\n  const tHeaderRow = document.createElement('tr');\n  \n  //put names of students in table header\n  for (let student in students) {\n    const tdata = document.createElement('td');\n    tdata.textContent = students[student].name;\n    tHeaderRow.appendChild(tdata);   \n  }\n\n  // put state of tasks in table rows:\n  //  - create a table body\n  //  - for every tasks in students[0].getTasks();^\n  //    - create a table row\n  //    - for every student\n  //      - get value of current task for this student\n  //      - add table data element with textContent for the value of the task for this student\n  //    - append this row to the table body\n  //  - append table body to table\n\n  const tBody = document.createElement('tbody');\n  for (let task in students[0].getTasks) {\n    let row = document.createElement('tr');\n    for (let student in students) {\n      let value = students[student].getTasks[task];\n      let cell = document.createElement('td');\n      cell.textContent = value;\n      row.appendChild(cell);\n    }\n    tBody.appendChild(row);\n  }\n\n  //put header in table\n  tHeader.appendChild(tHeaderRow);\n  table.appendChild(tHeader);\n  table.appendChild(tBody);\n\n  return table;\n}\n\n\n\n//# sourceURL=webpack://contractwerk-tracker/./src/views.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;