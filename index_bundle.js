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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ \"./src/models.js\");\n/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ \"./src/views.js\");\n\n\n\nconst body = document.querySelector('body');\n\n// Create a small list of students\nconst studentNames = ['Franske', 'Joske', 'Marietteje'];\nconst students = [];\n\nfor (const index in studentNames) {\n  students[index] = new _models_js__WEBPACK_IMPORTED_MODULE_0__.Student(studentNames[index]);\n}\n\n// create default tasks object and add it to all students\nconst defaultTasks = {}\nconst taskValues = ['niet klaar', 'verbeteren', 'klaar'];\n\nfor (let i = 1; i <= 10; i++) {\n  defaultTasks[i] = taskValues[0];\n}\n\nfor (const student in students) {\n  students[student].tasks = {};\n  students[student].tasks = Object.assign({}, defaultTasks);\n}\n\nfunction nextTaskValue(student, task) {\n  const value = students[student].tasks[task];\n  const currentIndex = taskValues.indexOf(value);\n  let nextIndex;\n\n  if (currentIndex == 2) {\n    nextIndex = 0;\n  } else {\n    nextIndex = currentIndex++;\n  }\n  // update the students task\n  students[student].tasks[task] = taskValues[nextIndex];\n}\n\n// put web interface on screen\nbody.appendChild((0,_views_js__WEBPACK_IMPORTED_MODULE_1__.webView)(students));\nconsole.log(students);\n\n//# sourceURL=webpack://contractwerk-tracker/./src/index.js?");

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student)\n/* harmony export */ });\nclass Student {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  taskValues = ['niet klaar', 'verbeteren', 'klaar'];\n\n  nextTaskValue(task) {\n    // get current value of task\n    let currentValue = this.tasks[task];\n    console.log(currentValue);\n    // find index of current value in taskValues\n    let currentValueIndex = this.taskValues.indexOf(currentValue);\n    // put value of next value in task list at index task\n    let nextIndex = ++currentValueIndex;\n    if (nextIndex == 3) {\n      nextIndex = 0;\n    }\n    // set value task to value of taskslist at nextindex\n    this.tasks[task] = this.taskValues[nextIndex];\n    console.log(this.tasks[task]);\n  }\n}\n\n\n\n//# sourceURL=webpack://contractwerk-tracker/./src/models.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webView\": () => (/* binding */ webView)\n/* harmony export */ });\n/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ \"./src/models.js\");\n\n\nfunction webView(students) {\n\n  // create table with header row to display everything in\n  const table = document.createElement('table');\n  const tHead = document.createElement('thead');\n  const tHeaderRow = document.createElement('tr');\n  tHead.appendChild(tHeaderRow);\n  table.appendChild(tHead);\n  \n  //put names of students in table header\n  for (let student in students) {\n    const tHeaderCell = document.createElement('th');\n    tHeaderCell.textContent = students[student].name;\n    tHeaderRow.appendChild(tHeaderCell);\n  }\n  \n  // put content of each students tasks in table\n  const tBody = document.createElement('tbody');\n  drawTable();\n\n  \n  // watch for clicks in table\n  table.addEventListener('click', (e) => {\n    let target = e.target.closest('td');\n    let student = Number(target.dataset.student);\n    let task = Number(target.dataset.task);\n    students[student].nextTaskValue(task);\n    // redraw the (updated) table\n    removeTable();\n    drawTable();\n  });\n\n  function removeTable () {\n    // remove tbody element\n    const tBody = document.querySelector('tbody');\n    while (tBody.children[0]) {\n      tBody.removeChild(tBody.children[0]);\n    }\n  }\n\n  function drawTable () {\n    for (let i = 1; i <= 10; i++){\n      let row = document.createElement('tr');\n      for (let j = 0; j < students.length; j++) {\n        let value = students[j].tasks[i];\n        let cell = document.createElement('td');\n        cell.textContent = value;\n        cell.setAttribute(\"data-student\", j);\n        cell.setAttribute('data-task', i);\n        row.appendChild(cell);\n      }\n      tBody.appendChild(row);\n    }\n  }\n  \n  table.appendChild(tBody);\n  return table;\n}\n\n\n\n//# sourceURL=webpack://contractwerk-tracker/./src/views.js?");

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