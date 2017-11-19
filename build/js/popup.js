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
        this.focused = false;
        this.store = store;
        this.store.get('focused').then(this.updateToggle.bind(this));
        // Chache main HTML elements in popup
    }
    updateToggle(data) {
        this.focused = (data.focused === 'true');
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* qs */])('main').innerHTML = `
			<h1 id="title">Focus</h1>
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
        // Attache click event listener
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $on */])(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
        // this.toggleCheckbox.checked = this.focused;
        this.titleEl.className = this.focused ? 'focused' : '';
        // Update chrome icon
        chrome.browserAction.setIcon({
            path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBjZDAxNDc5MTZhM2IyMDIzNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RzL3BvcHVwL0ZvY3VzVG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9zdHlsdXMvbWFpbi5zdHlsPzZkMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdHlsdXMvcG9wdXAuc3R5bD9lMjBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bD8wNzY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHNCO0FBQ3RCO0FBQ0E7Ozs7Ozs7OztBQ0ZrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsOEJBQThCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYnVpbGQvanMvcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMGNkMDE0NzkxNmEzYjIwMjM2MyIsImltcG9ydCB7IEZvY3VzVG9nZ2xlIH0gZnJvbSAnLi9wb3B1cC9Gb2N1c1RvZ2dsZSc7XG5jb25zdCBiYWNrZ3JvdW5kUGFnZSA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcbm5ldyBGb2N1c1RvZ2dsZShiYWNrZ3JvdW5kUGFnZS5Gb2N1c0FwcC5zdG9yZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHMvcG9wdXAudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgJG9uLCBxcyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuLyoqXG4gKiBNYW5hZ2VzIHRoZSBmb2N1cyB0b2dnbGUgaW4gdGhlIHBvcHVwXG4gKi9cbmV4cG9ydCBjbGFzcyBGb2N1c1RvZ2dsZSB7XG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgdGhpcy5zdG9yZS5nZXQoJ2ZvY3VzZWQnKS50aGVuKHRoaXMudXBkYXRlVG9nZ2xlLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBDaGFjaGUgbWFpbiBIVE1MIGVsZW1lbnRzIGluIHBvcHVwXG4gICAgfVxuICAgIHVwZGF0ZVRvZ2dsZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IChkYXRhLmZvY3VzZWQgPT09ICd0cnVlJyk7XG4gICAgICAgIHFzKCdtYWluJykuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGgxIGlkPVwidGl0bGVcIj5Gb2N1czwvaDE+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLXN3aXRjaFwiPlxuXHRcdFx0PGlucHV0IGlkPVwiZm9jdXMtc3RhdGVcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZ2dsZS1jaGVja2JveFwiLyAke3RoaXMuZm9jdXNlZCA/ICdjaGVja2VkJyA6ICcnfT5cblx0XHRcdDxsYWJlbCBmb3I9XCJmb2N1cy1zdGF0ZVwiIGNsYXNzPVwidG9nZ2xlLXZpZXdwb3J0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtY29udGVudCB0b2dnbGUtbGVmdFwiPjxzcGFuPk9uPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2dnbGUtY29udGVudCB0b2dnbGUtcmlnaHRcIj48c3Bhbj5PZmY8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cImJvdHRvbS1idXR0b25zXCI+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJibG9jay1zaXRlXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPkJsb2NrIFNpdGU8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInNldHRpbmdzXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TZXR0aW5nczwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcbiAgICAgICAgdGhpcy50aXRsZUVsID0gcXMoJyN0aXRsZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94ID0gcXMoJyNmb2N1cy1zdGF0ZScpO1xuICAgICAgICAvLyBBdHRhY2hlIGNsaWNrIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICRvbih0aGlzLnRvZ2dsZUNoZWNrYm94LCAnY2xpY2snLCB0aGlzLnRvZ2dsZUZvY3VzLmJpbmQodGhpcykpO1xuICAgICAgICAvLyB0aGlzLnRvZ2dsZUNoZWNrYm94LmNoZWNrZWQgPSB0aGlzLmZvY3VzZWQ7XG4gICAgICAgIHRoaXMudGl0bGVFbC5jbGFzc05hbWUgPSB0aGlzLmZvY3VzZWQgPyAnZm9jdXNlZCcgOiAnJztcbiAgICAgICAgLy8gVXBkYXRlIGNocm9tZSBpY29uXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5mb2N1c2VkID8gJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAzOC5wbmcnIDogJy4uL2ltYWdlcy9pY29ucy9mb2N1cy1hcHAtcmVkMzgucG5nJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFRvZ2dsZXMgdGhlIGZvY3VzZWQgY2xhc3MgYmFzZWQgb25cbiAgICAvLyB0aGUgc3RhdGUgb2YgdGhlIGZvY3VzZWQgcHJvcGVydHlcbiAgICB0b2dnbGVGb2N1cygpIHtcbiAgICAgICAgLy8gVXBkYXRlZSBpbnRlcm5hbCBmb2N1c2VkIHN0YXRlXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9ICF0aGlzLmZvY3VzZWQ7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0KCdmb2N1c2VkJywgdGhpcy5mb2N1c2VkKTtcbiAgICAgICAgLy8gVXBkYXRlIGNzcyBjbGFzc1xuICAgICAgICB0aGlzLnRpdGxlRWwuY2xhc3NOYW1lID0gdGhpcy5mb2N1c2VkID8gJ2ZvY3VzZWQnIDogJyc7XG4gICAgICAgIC8vIFVwZGF0ZSBjaHJvbWUgaWNvblxuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgICAgIHBhdGg6IHRoaXMuZm9jdXNlZCA/ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwMzgucG5nJyA6ICcuLi9pbWFnZXMvaWNvbnMvZm9jdXMtYXBwLXJlZDM4LnBuZycsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90cy9wb3B1cC9Gb2N1c1RvZ2dsZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIHF1ZXJ5U2VsZWN0b3IgbWV0aG9kXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIFNlbGVjdG9yIHRvIHF1ZXJ5XG4gKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgcXVlcnkuIEZmIGxlZnQgbnVsbCwgd2lsbCBzY29wZSB0byBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgcmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIHF1ZXJ5U2VsZWN0b3JBbGwgbWV0aG9kXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIFNlbGVjdG9yIHRvIHF1ZXJ5XG4gKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgcXVlcnkuIEZmIGxlZnQgbnVsbCwgd2lsbCBzY29wZSB0byBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcXNhKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHNBcnJbaV0gPSBlbGVtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzQXJyO1xufVxuZXhwb3J0IGZ1bmN0aW9uICRvbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL2hlbHBlcnMudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb2NzL3N0eWx1cy9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3R5bHVzL3BvcHVwLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc3R5bHVzL2JhY2tncm91bmQuc3R5bFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9