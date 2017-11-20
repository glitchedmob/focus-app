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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_FocusToggle__ = __webpack_require__(2);

const backgroundPage = chrome.extension.getBackgroundPage();
new __WEBPACK_IMPORTED_MODULE_0__popup_FocusToggle__["a" /* FocusToggle */](backgroundPage.FocusApp.store);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(3);

/**
 * Manages the focus toggle in the popup
 */
class FocusToggle {
    constructor(store) {
        this.store = store;
        // Retrieve focus state from store
        this.focused = this.store.get('focused');
        // Insert markup into popup using focus state modify several elements
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('main').innerHTML = `
			<h1 id="title" ${this.focused ? 'class="focused"' : ''}>Focus</h1>
			<div class="toggle-switch">
			<input id="focus-state" type="checkbox" class="toggle-checkbox"/ ${this.focused ? 'checked' : ''}>
			<label for="focus-state" class="toggle-viewport">
				<div class="toggle">
					<div class="toggle-button"></div>
					<div class="toggle-content toggle-left"><span>On</span></div>
					<div class="toggle-content toggle-right"><span>Off</span></div>
				</div>
			</label>
			</div>
			<div id="bottom-buttons">
				<button id="block-site" class="btn btn-danger">Block Site</button>
				<button id="settings" class="btn btn-primary">Settings</button>
			</div>
		`;
        // cache several elements from popup for us in event listeners
        this.titleEl = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('#title');
        this.toggleCheckbox = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('#focus-state');
        // Make sure that icon matches focus state
        chrome.browserAction.setIcon({
            path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
        });
        // Attache click event listener on toggle switch
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $on */])(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
    }
    // Toggles the focused class based on
    // the state of the focused property
    toggleFocus() {
        // Updatee internal focused state
        this.focused = !this.focused;
        // persist focus state outside of popup
        this.store.set('focused', this.focused);
        this.titleEl.className = this.focused ? 'focused' : '';
        // Update chrome icon
        chrome.browserAction.setIcon({
            path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FocusToggle;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = qs;
/* unused harmony export qsa */
/* harmony export (immutable) */ __webpack_exports__["a"] = $on;
/**
 * A wrapper for the querySelector method
 *
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}
/**
 * A wrapper for the querySelectorAll method
 *
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
function qsa(selector, scope) {
    const elements = (scope || document).querySelectorAll(selector);
    const elementsArr = [];
    for (let i = 0; i < elements.length; i++) {
        elementsArr[i] = elements[i];
    }
    return elementsArr;
}
function $on(target, type, callback) {
    target.addEventListener(type, callback);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDA3NGU0MmI5NTIzODhkNzUxODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9zdHlsdXMvbWFpbi5zdHlsPzZkMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bD9lMjBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bD8wNzY0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL29wdGlvbnMuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEc0I7QUFDdEI7QUFDQTs7Ozs7Ozs7O0FDRmtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBLHNFQUFzRSw4QkFBOEI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2J1aWxkL2pzL3BvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDA3NGU0MmI5NTIzODhkNzUxODciLCJpbXBvcnQgeyBGb2N1c1RvZ2dsZSB9IGZyb20gJy4vcG9wdXAvRm9jdXNUb2dnbGUnO1xuY29uc3QgYmFja2dyb3VuZFBhZ2UgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG5uZXcgRm9jdXNUb2dnbGUoYmFja2dyb3VuZFBhZ2UuRm9jdXNBcHAuc3RvcmUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL3BvcHVwLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7ICRvbiwgcXMgfSBmcm9tICcuLi9oZWxwZXJzJztcbi8qKlxuICogTWFuYWdlcyB0aGUgZm9jdXMgdG9nZ2xlIGluIHRoZSBwb3B1cFxuICovXG5leHBvcnQgY2xhc3MgRm9jdXNUb2dnbGUge1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgLy8gUmV0cmlldmUgZm9jdXMgc3RhdGUgZnJvbSBzdG9yZVxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0aGlzLnN0b3JlLmdldCgnZm9jdXNlZCcpO1xuICAgICAgICAvLyBJbnNlcnQgbWFya3VwIGludG8gcG9wdXAgdXNpbmcgZm9jdXMgc3RhdGUgbW9kaWZ5IHNldmVyYWwgZWxlbWVudHNcbiAgICAgICAgcXMoJ21haW4nKS5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8aDEgaWQ9XCJ0aXRsZVwiICR7dGhpcy5mb2N1c2VkID8gJ2NsYXNzPVwiZm9jdXNlZFwiJyA6ICcnfT5Gb2N1czwvaDE+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLXN3aXRjaFwiPlxuXHRcdFx0PGlucHV0IGlkPVwiZm9jdXMtc3RhdGVcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZ2dsZS1jaGVja2JveFwiLyAke3RoaXMuZm9jdXNlZCA/ICdjaGVja2VkJyA6ICcnfT5cblx0XHRcdDxsYWJlbCBmb3I9XCJmb2N1cy1zdGF0ZVwiIGNsYXNzPVwidG9nZ2xlLXZpZXdwb3J0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtY29udGVudCB0b2dnbGUtbGVmdFwiPjxzcGFuPk9uPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtY29udGVudCB0b2dnbGUtcmlnaHRcIj48c3Bhbj5PZmY8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cImJvdHRvbS1idXR0b25zXCI+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJibG9jay1zaXRlXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPkJsb2NrIFNpdGU8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInNldHRpbmdzXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TZXR0aW5nczwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcbiAgICAgICAgLy8gY2FjaGUgc2V2ZXJhbCBlbGVtZW50cyBmcm9tIHBvcHVwIGZvciB1cyBpbiBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy50aXRsZUVsID0gcXMoJyN0aXRsZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94ID0gcXMoJyNmb2N1cy1zdGF0ZScpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBpY29uIG1hdGNoZXMgZm9jdXMgc3RhdGVcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICAgICAgICBwYXRoOiB0aGlzLmZvY3VzZWQgPyAnLi4vaW1hZ2VzL2ljb25zL2ZvY3VzLWFwcDM4LnBuZycgOiAnLi4vaW1hZ2VzL2ljb25zL2ZvY3VzLWFwcC1yZWQzOC5wbmcnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXR0YWNoZSBjbGljayBldmVudCBsaXN0ZW5lciBvbiB0b2dnbGUgc3dpdGNoXG4gICAgICAgICRvbih0aGlzLnRvZ2dsZUNoZWNrYm94LCAnY2xpY2snLCB0aGlzLnRvZ2dsZUZvY3VzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICAvLyBUb2dnbGVzIHRoZSBmb2N1c2VkIGNsYXNzIGJhc2VkIG9uXG4gICAgLy8gdGhlIHN0YXRlIG9mIHRoZSBmb2N1c2VkIHByb3BlcnR5XG4gICAgdG9nZ2xlRm9jdXMoKSB7XG4gICAgICAgIC8vIFVwZGF0ZWUgaW50ZXJuYWwgZm9jdXNlZCBzdGF0ZVxuICAgICAgICB0aGlzLmZvY3VzZWQgPSAhdGhpcy5mb2N1c2VkO1xuICAgICAgICAvLyBwZXJzaXN0IGZvY3VzIHN0YXRlIG91dHNpZGUgb2YgcG9wdXBcbiAgICAgICAgdGhpcy5zdG9yZS5zZXQoJ2ZvY3VzZWQnLCB0aGlzLmZvY3VzZWQpO1xuICAgICAgICB0aGlzLnRpdGxlRWwuY2xhc3NOYW1lID0gdGhpcy5mb2N1c2VkID8gJ2ZvY3VzZWQnIDogJyc7XG4gICAgICAgIC8vIFVwZGF0ZSBjaHJvbWUgaWNvblxuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgICAgIHBhdGg6IHRoaXMuZm9jdXNlZCA/ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwMzgucG5nJyA6ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwLXJlZDM4LnBuZycsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90cy9wb3B1cC9Gb2N1c1RvZ2dsZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIHF1ZXJ5U2VsZWN0b3IgbWV0aG9kXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIFNlbGVjdG9yIHRvIHF1ZXJ5XG4gKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgcXVlcnkuIEZmIGxlZnQgbnVsbCwgd2lsbCBzY29wZSB0byBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgcmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIHF1ZXJ5U2VsZWN0b3JBbGwgbWV0aG9kXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIFNlbGVjdG9yIHRvIHF1ZXJ5XG4gKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgcXVlcnkuIEZmIGxlZnQgbnVsbCwgd2lsbCBzY29wZSB0byBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcXNhKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHNBcnJbaV0gPSBlbGVtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzQXJyO1xufVxuZXhwb3J0IGZ1bmN0aW9uICRvbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL2hlbHBlcnMudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb2NzL3N0eWx1cy9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3R5bHVzL3BvcHVwLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zdHlsdXMvb3B0aW9ucy5zdHlsXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=