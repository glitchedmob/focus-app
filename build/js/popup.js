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
module.exports = __webpack_require__(6);


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
        this.focused = this.store.get('focused');
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
        this.titleEl = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('#title');
        this.toggleCheckbox = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('#focus-state');
        chrome.browserAction.setIcon({
            path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
        });
        // Attache click event listener
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $on */])(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
    }
    // Toggles the focused class based on
    // the state of the focused property
    toggleFocus() {
        // Updatee internal focused state
        this.focused = !this.focused;
        this.store.set('focused', this.focused);
        // Update css class
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmY4MGU1OGFkOGM1ZmQ4YjY2MWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9zdHlsdXMvbWFpbi5zdHlsPzZkMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bD9lMjBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bD8wNzY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHNCO0FBQ3RCO0FBQ0E7Ozs7Ozs7OztBQ0ZrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBLHNFQUFzRSw4QkFBOEI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9idWlsZC9qcy9wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJmODBlNThhZDhjNWZkOGI2NjFlIiwiaW1wb3J0IHsgRm9jdXNUb2dnbGUgfSBmcm9tICcuL3BvcHVwL0ZvY3VzVG9nZ2xlJztcbmNvbnN0IGJhY2tncm91bmRQYWdlID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xubmV3IEZvY3VzVG9nZ2xlKGJhY2tncm91bmRQYWdlLkZvY3VzQXBwLnN0b3JlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90cy9wb3B1cC50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyAkb24sIHFzIH0gZnJvbSAnLi4vaGVscGVycyc7XG4vKipcbiAqIE1hbmFnZXMgdGhlIGZvY3VzIHRvZ2dsZSBpbiB0aGUgcG9wdXBcbiAqL1xuZXhwb3J0IGNsYXNzIEZvY3VzVG9nZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRoaXMuc3RvcmUuZ2V0KCdmb2N1c2VkJyk7XG4gICAgICAgIHFzKCdtYWluJykuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGgxIGlkPVwidGl0bGVcIiAke3RoaXMuZm9jdXNlZCA/ICdjbGFzcz1cImZvY3VzZWRcIicgOiAnJ30+Rm9jdXM8L2gxPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZ2dsZS1zd2l0Y2hcIj5cblx0XHRcdDxpbnB1dCBpZD1cImZvY3VzLXN0YXRlXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0b2dnbGUtY2hlY2tib3hcIi8gJHt0aGlzLmZvY3VzZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG5cdFx0XHQ8bGFiZWwgZm9yPVwiZm9jdXMtc3RhdGVcIiBjbGFzcz1cInRvZ2dsZS12aWV3cG9ydFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZ2dsZS1idXR0b25cIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLWNvbnRlbnQgdG9nZ2xlLWxlZnRcIj48c3Bhbj5Pbjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLWNvbnRlbnQgdG9nZ2xlLXJpZ2h0XCI+PHNwYW4+T2ZmPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJib3R0b20tYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwiYmxvY2stc2l0ZVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5CbG9jayBTaXRlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJzZXR0aW5nc1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2V0dGluZ3M8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG4gICAgICAgIHRoaXMudGl0bGVFbCA9IHFzKCcjdGl0bGUnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDaGVja2JveCA9IHFzKCcjZm9jdXMtc3RhdGUnKTtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICAgICAgICBwYXRoOiB0aGlzLmZvY3VzZWQgPyAnLi4vaW1hZ2VzL2ljb25zL2ZvY3VzLWFwcDM4LnBuZycgOiAnLi4vaW1hZ2VzL2ljb25zL2ZvY3VzLWFwcC1yZWQzOC5wbmcnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXR0YWNoZSBjbGljayBldmVudCBsaXN0ZW5lclxuICAgICAgICAkb24odGhpcy50b2dnbGVDaGVja2JveCwgJ2NsaWNrJywgdGhpcy50b2dnbGVGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgLy8gVG9nZ2xlcyB0aGUgZm9jdXNlZCBjbGFzcyBiYXNlZCBvblxuICAgIC8vIHRoZSBzdGF0ZSBvZiB0aGUgZm9jdXNlZCBwcm9wZXJ0eVxuICAgIHRvZ2dsZUZvY3VzKCkge1xuICAgICAgICAvLyBVcGRhdGVlIGludGVybmFsIGZvY3VzZWQgc3RhdGVcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gIXRoaXMuZm9jdXNlZDtcbiAgICAgICAgdGhpcy5zdG9yZS5zZXQoJ2ZvY3VzZWQnLCB0aGlzLmZvY3VzZWQpO1xuICAgICAgICAvLyBVcGRhdGUgY3NzIGNsYXNzXG4gICAgICAgIHRoaXMudGl0bGVFbC5jbGFzc05hbWUgPSB0aGlzLmZvY3VzZWQgPyAnZm9jdXNlZCcgOiAnJztcbiAgICAgICAgLy8gVXBkYXRlIGNocm9tZSBpY29uXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5mb2N1c2VkID8gJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAzOC5wbmcnIDogJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAtcmVkMzgucG5nJyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgcXVlcnlTZWxlY3RvciBtZXRob2RcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgdG8gcXVlcnlcbiAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiBxdWVyeS4gRmYgbGVmdCBudWxsLCB3aWxsIHNjb3BlIHRvIGRvY3VtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxcyhzZWxlY3Rvciwgc2NvcGUpIHtcbiAgICByZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgcXVlcnlTZWxlY3RvckFsbCBtZXRob2RcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgdG8gcXVlcnlcbiAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiBxdWVyeS4gRmYgbGVmdCBudWxsLCB3aWxsIHNjb3BlIHRvIGRvY3VtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxc2Eoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGNvbnN0IGVsZW1lbnRzQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50c0FycltpXSA9IGVsZW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHNBcnI7XG59XG5leHBvcnQgZnVuY3Rpb24gJG9uKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHMvaGVscGVycy50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RvY3Mvc3R5bHVzL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bFxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zdHlsdXMvYmFja2dyb3VuZC5zdHlsXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=