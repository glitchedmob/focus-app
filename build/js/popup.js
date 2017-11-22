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
				<a href="options.html" target="_blank" id="settings" class="btn btn-primary">Settings</a>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTc0YThjY2RhMGFkZDZiOWY0OTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9zdHlsdXMvbWFpbi5zdHlsPzZkMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bD9lMjBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bD8wNzY0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL29wdGlvbnMuc3R5bD9hMjY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RzQjtBQUN0QjtBQUNBOzs7Ozs7Ozs7QUNGa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0Esc0VBQXNFLDhCQUE4QjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYnVpbGQvanMvcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzRhOGNjZGEwYWRkNmI5ZjQ5MyIsImltcG9ydCB7IEZvY3VzVG9nZ2xlIH0gZnJvbSAnLi9wb3B1cC9Gb2N1c1RvZ2dsZSc7XG5jb25zdCBiYWNrZ3JvdW5kUGFnZSA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcbm5ldyBGb2N1c1RvZ2dsZShiYWNrZ3JvdW5kUGFnZS5Gb2N1c0FwcC5zdG9yZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHMvcG9wdXAudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgJG9uLCBxcyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuLyoqXG4gKiBNYW5hZ2VzIHRoZSBmb2N1cyB0b2dnbGUgaW4gdGhlIHBvcHVwXG4gKi9cbmV4cG9ydCBjbGFzcyBGb2N1c1RvZ2dsZSB7XG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICAvLyBSZXRyaWV2ZSBmb2N1cyBzdGF0ZSBmcm9tIHN0b3JlXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRoaXMuc3RvcmUuZ2V0KCdmb2N1c2VkJyk7XG4gICAgICAgIC8vIEluc2VydCBtYXJrdXAgaW50byBwb3B1cCB1c2luZyBmb2N1cyBzdGF0ZSBtb2RpZnkgc2V2ZXJhbCBlbGVtZW50c1xuICAgICAgICBxcygnbWFpbicpLmlubmVySFRNTCA9IGBcblx0XHRcdDxoMSBpZD1cInRpdGxlXCIgJHt0aGlzLmZvY3VzZWQgPyAnY2xhc3M9XCJmb2N1c2VkXCInIDogJyd9PkZvY3VzPC9oMT5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtc3dpdGNoXCI+XG5cdFx0XHQ8aW5wdXQgaWQ9XCJmb2N1cy1zdGF0ZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9nZ2xlLWNoZWNrYm94XCIvICR7dGhpcy5mb2N1c2VkID8gJ2NoZWNrZWQnIDogJyd9PlxuXHRcdFx0PGxhYmVsIGZvcj1cImZvY3VzLXN0YXRlXCIgY2xhc3M9XCJ0b2dnbGUtdmlld3BvcnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZ2dsZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZ2dsZS1jb250ZW50IHRvZ2dsZS1sZWZ0XCI+PHNwYW4+T248L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZ2dsZS1jb250ZW50IHRvZ2dsZS1yaWdodFwiPjxzcGFuPk9mZjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwiYm90dG9tLWJ1dHRvbnNcIj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cImJsb2NrLXNpdGVcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+QmxvY2sgU2l0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8YSBocmVmPVwib3B0aW9ucy5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaWQ9XCJzZXR0aW5nc1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2V0dGluZ3M8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuICAgICAgICAvLyBjYWNoZSBzZXZlcmFsIGVsZW1lbnRzIGZyb20gcG9wdXAgZm9yIHVzIGluIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLnRpdGxlRWwgPSBxcygnI3RpdGxlJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2hlY2tib3ggPSBxcygnI2ZvY3VzLXN0YXRlJyk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGljb24gbWF0Y2hlcyBmb2N1cyBzdGF0ZVxuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgICAgIHBhdGg6IHRoaXMuZm9jdXNlZCA/ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwMzgucG5nJyA6ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwLXJlZDM4LnBuZycsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBdHRhY2hlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIG9uIHRvZ2dsZSBzd2l0Y2hcbiAgICAgICAgJG9uKHRoaXMudG9nZ2xlQ2hlY2tib3gsICdjbGljaycsIHRoaXMudG9nZ2xlRm9jdXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIC8vIFRvZ2dsZXMgdGhlIGZvY3VzZWQgY2xhc3MgYmFzZWQgb25cbiAgICAvLyB0aGUgc3RhdGUgb2YgdGhlIGZvY3VzZWQgcHJvcGVydHlcbiAgICB0b2dnbGVGb2N1cygpIHtcbiAgICAgICAgLy8gVXBkYXRlZSBpbnRlcm5hbCBmb2N1c2VkIHN0YXRlXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9ICF0aGlzLmZvY3VzZWQ7XG4gICAgICAgIC8vIHBlcnNpc3QgZm9jdXMgc3RhdGUgb3V0c2lkZSBvZiBwb3B1cFxuICAgICAgICB0aGlzLnN0b3JlLnNldCgnZm9jdXNlZCcsIHRoaXMuZm9jdXNlZCk7XG4gICAgICAgIHRoaXMudGl0bGVFbC5jbGFzc05hbWUgPSB0aGlzLmZvY3VzZWQgPyAnZm9jdXNlZCcgOiAnJztcbiAgICAgICAgLy8gVXBkYXRlIGNocm9tZSBpY29uXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5mb2N1c2VkID8gJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAzOC5wbmcnIDogJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAtcmVkMzgucG5nJyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgcXVlcnlTZWxlY3RvciBtZXRob2RcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgdG8gcXVlcnlcbiAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiBxdWVyeS4gRmYgbGVmdCBudWxsLCB3aWxsIHNjb3BlIHRvIGRvY3VtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxcyhzZWxlY3Rvciwgc2NvcGUpIHtcbiAgICByZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgcXVlcnlTZWxlY3RvckFsbCBtZXRob2RcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgdG8gcXVlcnlcbiAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiBxdWVyeS4gRmYgbGVmdCBudWxsLCB3aWxsIHNjb3BlIHRvIGRvY3VtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxc2Eoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGNvbnN0IGVsZW1lbnRzQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50c0FycltpXSA9IGVsZW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHNBcnI7XG59XG5leHBvcnQgZnVuY3Rpb24gJG9uKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHMvaGVscGVycy50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RvY3Mvc3R5bHVzL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bFxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zdHlsdXMvYmFja2dyb3VuZC5zdHlsXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3N0eWx1cy9vcHRpb25zLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==