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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_ChromeStorage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background_Store__ = __webpack_require__(10);


const persistantStorage = new __WEBPACK_IMPORTED_MODULE_0__background_ChromeStorage__["a" /* ChromeStorage */]();
const store = new __WEBPACK_IMPORTED_MODULE_1__background_Store__["a" /* Store */](persistantStorage);
window.FocusApp = {
    store,
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ChromeStorage {
    set(key, value, storageType = 'local') {
        return new Promise((resolve, reject) => {
            if (storageType !== 'local' && storageType !== 'sync')
                return reject();
            chrome.storage[storageType].set({ [key]: JSON.stringify(value) }, () => {
                resolve('Saved successfully');
            });
        });
    }
    get(key, storageType = 'local') {
        return new Promise((resolve, reject) => {
            if (storageType !== 'local' && storageType !== 'sync')
                return reject();
            // Search chrome storage
            chrome.storage[storageType].get(key, (value) => {
                // Resolve only if we did get a value
                if (value) {
                    resolve(value);
                }
                else {
                    reject();
                }
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ChromeStorage;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Store {
    constructor(persistantStorage) {
        this.persistantStorage = persistantStorage;
        this.persistantStorageLoaded = false;
        this.inMemoryStore = {};
        this.set('focused', false);
    }
    /**
     * Stores a value in memory based
     * @param key key to access value later
     * @param value value to store
     */
    set(key, value) {
        this.inMemoryStore[key] = value;
    }
    /**
     * Retrieves value from in memory store
     * @param key key of value to access
     */
    get(key) {
        return this.inMemoryStore[key];
    }
    /**
     * Stores a value to persistant browser storage
     * @param key key to access value later
     * @param value value to store
     * @param storageType optional storage type, can be local or sync
     */
    setPersistant(key, value, storageType = 'local') {
        return this.persistantStorage.set(key, value, storageType);
    }
    /**
     * Retrives a value from persistant browser storage
     * @param key key of value to access
     * @param storageType optinal storage type, can be local or sync
     */
    getPersistant(key, storageType = 'local') {
        return this.persistantStorage.get(key, storageType);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Store;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBjZDAxNDc5MTZhM2IyMDIzNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvYmFja2dyb3VuZC9DaHJvbWVTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvYmFja2dyb3VuZC9TdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHdCO0FBQ1I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsImZpbGUiOiIvYnVpbGQvanMvYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMwY2QwMTQ3OTE2YTNiMjAyMzYzIiwiaW1wb3J0IHsgQ2hyb21lU3RvcmFnZSB9IGZyb20gJy4vYmFja2dyb3VuZC9DaHJvbWVTdG9yYWdlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL1N0b3JlJztcbmNvbnN0IHBlcnNpc3RhbnRTdG9yYWdlID0gbmV3IENocm9tZVN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHBlcnNpc3RhbnRTdG9yYWdlKTtcbndpbmRvdy5Gb2N1c0FwcCA9IHtcbiAgICBzdG9yZSxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHMvYmFja2dyb3VuZC50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgY2xhc3MgQ2hyb21lU3RvcmFnZSB7XG4gICAgc2V0KGtleSwgdmFsdWUsIHN0b3JhZ2VUeXBlID0gJ2xvY2FsJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VUeXBlICE9PSAnbG9jYWwnICYmIHN0b3JhZ2VUeXBlICE9PSAnc3luYycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Vbc3RvcmFnZVR5cGVdLnNldCh7IFtrZXldOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ1NhdmVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQoa2V5LCBzdG9yYWdlVHlwZSA9ICdsb2NhbCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlVHlwZSAhPT0gJ2xvY2FsJyAmJiBzdG9yYWdlVHlwZSAhPT0gJ3N5bmMnKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICAgIC8vIFNlYXJjaCBjaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Vbc3RvcmFnZVR5cGVdLmdldChrZXksICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgb25seSBpZiB3ZSBkaWQgZ2V0IGEgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL2JhY2tncm91bmQvQ2hyb21lU3RvcmFnZS50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgY2xhc3MgU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RhbnRTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGFudFN0b3JhZ2UgPSBwZXJzaXN0YW50U3RvcmFnZTtcbiAgICAgICAgdGhpcy5wZXJzaXN0YW50U3RvcmFnZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluTWVtb3J5U3RvcmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvY3VzZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBhIHZhbHVlIGluIG1lbW9yeSBiYXNlZFxuICAgICAqIEBwYXJhbSBrZXkga2V5IHRvIGFjY2VzcyB2YWx1ZSBsYXRlclxuICAgICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBzdG9yZVxuICAgICAqL1xuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5NZW1vcnlTdG9yZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB2YWx1ZSBmcm9tIGluIG1lbW9yeSBzdG9yZVxuICAgICAqIEBwYXJhbSBrZXkga2V5IG9mIHZhbHVlIHRvIGFjY2Vzc1xuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZVtrZXldO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgYSB2YWx1ZSB0byBwZXJzaXN0YW50IGJyb3dzZXIgc3RvcmFnZVxuICAgICAqIEBwYXJhbSBrZXkga2V5IHRvIGFjY2VzcyB2YWx1ZSBsYXRlclxuICAgICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBzdG9yZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlVHlwZSBvcHRpb25hbCBzdG9yYWdlIHR5cGUsIGNhbiBiZSBsb2NhbCBvciBzeW5jXG4gICAgICovXG4gICAgc2V0UGVyc2lzdGFudChrZXksIHZhbHVlLCBzdG9yYWdlVHlwZSA9ICdsb2NhbCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc2lzdGFudFN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUsIHN0b3JhZ2VUeXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cml2ZXMgYSB2YWx1ZSBmcm9tIHBlcnNpc3RhbnQgYnJvd3NlciBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleSBrZXkgb2YgdmFsdWUgdG8gYWNjZXNzXG4gICAgICogQHBhcmFtIHN0b3JhZ2VUeXBlIG9wdGluYWwgc3RvcmFnZSB0eXBlLCBjYW4gYmUgbG9jYWwgb3Igc3luY1xuICAgICAqL1xuICAgIGdldFBlcnNpc3RhbnQoa2V5LCBzdG9yYWdlVHlwZSA9ICdsb2NhbCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc2lzdGFudFN0b3JhZ2UuZ2V0KGtleSwgc3RvcmFnZVR5cGUpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90cy9iYWNrZ3JvdW5kL1N0b3JlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9