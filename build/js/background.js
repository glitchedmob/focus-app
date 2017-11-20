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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_ChromeStorage__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background_Store__ = __webpack_require__(11);


const persistantStorage = new __WEBPACK_IMPORTED_MODULE_0__background_ChromeStorage__["a" /* ChromeStorage */]();
const store = new __WEBPACK_IMPORTED_MODULE_1__background_Store__["a" /* Store */](persistantStorage);
window.FocusApp = {
    store,
};


/***/ }),
/* 10 */
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
/* 11 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmE1NjI2OWQ4NjNhMTAzMDY5NmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90cy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvYmFja2dyb3VuZC9DaHJvbWVTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHMvYmFja2dyb3VuZC9TdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R3QjtBQUNSO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiL2J1aWxkL2pzL2JhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYTU2MjY5ZDg2M2ExMDMwNjk2YSIsImltcG9ydCB7IENocm9tZVN0b3JhZ2UgfSBmcm9tICcuL2JhY2tncm91bmQvQ2hyb21lU3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vYmFja2dyb3VuZC9TdG9yZSc7XG5jb25zdCBwZXJzaXN0YW50U3RvcmFnZSA9IG5ldyBDaHJvbWVTdG9yYWdlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShwZXJzaXN0YW50U3RvcmFnZSk7XG53aW5kb3cuRm9jdXNBcHAgPSB7XG4gICAgc3RvcmUsXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL2JhY2tncm91bmQudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IGNsYXNzIENocm9tZVN0b3JhZ2Uge1xuICAgIHNldChrZXksIHZhbHVlLCBzdG9yYWdlVHlwZSA9ICdsb2NhbCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlVHlwZSAhPT0gJ2xvY2FsJyAmJiBzdG9yYWdlVHlwZSAhPT0gJ3N5bmMnKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlW3N0b3JhZ2VUeXBlXS5zZXQoeyBba2V5XTogSlNPTi5zdHJpbmdpZnkodmFsdWUpIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCdTYXZlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSwgc3RvcmFnZVR5cGUgPSAnbG9jYWwnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZVR5cGUgIT09ICdsb2NhbCcgJiYgc3RvcmFnZVR5cGUgIT09ICdzeW5jJylcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggY2hyb21lIHN0b3JhZ2VcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlW3N0b3JhZ2VUeXBlXS5nZXQoa2V5LCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIG9ubHkgaWYgd2UgZGlkIGdldCBhIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90cy9iYWNrZ3JvdW5kL0Nocm9tZVN0b3JhZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocGVyc2lzdGFudFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0YW50U3RvcmFnZSA9IHBlcnNpc3RhbnRTdG9yYWdlO1xuICAgICAgICB0aGlzLnBlcnNpc3RhbnRTdG9yYWdlTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5NZW1vcnlTdG9yZSA9IHt9O1xuICAgICAgICB0aGlzLnNldCgnZm9jdXNlZCcsIGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcmVzIGEgdmFsdWUgaW4gbWVtb3J5IGJhc2VkXG4gICAgICogQHBhcmFtIGtleSBrZXkgdG8gYWNjZXNzIHZhbHVlIGxhdGVyXG4gICAgICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gICAgICovXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbk1lbW9yeVN0b3JlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHZhbHVlIGZyb20gaW4gbWVtb3J5IHN0b3JlXG4gICAgICogQHBhcmFtIGtleSBrZXkgb2YgdmFsdWUgdG8gYWNjZXNzXG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlW2tleV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBhIHZhbHVlIHRvIHBlcnNpc3RhbnQgYnJvd3NlciBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleSBrZXkgdG8gYWNjZXNzIHZhbHVlIGxhdGVyXG4gICAgICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gICAgICogQHBhcmFtIHN0b3JhZ2VUeXBlIG9wdGlvbmFsIHN0b3JhZ2UgdHlwZSwgY2FuIGJlIGxvY2FsIG9yIHN5bmNcbiAgICAgKi9cbiAgICBzZXRQZXJzaXN0YW50KGtleSwgdmFsdWUsIHN0b3JhZ2VUeXBlID0gJ2xvY2FsJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJzaXN0YW50U3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSwgc3RvcmFnZVR5cGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaXZlcyBhIHZhbHVlIGZyb20gcGVyc2lzdGFudCBicm93c2VyIHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0ga2V5IGtleSBvZiB2YWx1ZSB0byBhY2Nlc3NcbiAgICAgKiBAcGFyYW0gc3RvcmFnZVR5cGUgb3B0aW5hbCBzdG9yYWdlIHR5cGUsIGNhbiBiZSBsb2NhbCBvciBzeW5jXG4gICAgICovXG4gICAgZ2V0UGVyc2lzdGFudChrZXksIHN0b3JhZ2VUeXBlID0gJ2xvY2FsJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJzaXN0YW50U3RvcmFnZS5nZXQoa2V5LCBzdG9yYWdlVHlwZSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RzL2JhY2tncm91bmQvU3RvcmUudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=