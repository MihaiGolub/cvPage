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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\nwindow.onload = function () {\n    var parallaxContainer = document.querySelector('.parallax');\n    var layers = Array.from(parallaxContainer.children);\n    var moveLayers = function moveLayers(e) {\n        var initialX = window.innerWidth / 2 - e.pageX;\n        var initialY = window.innerHeight / 2 - e.pageY;\n        layers.forEach(function (layer, i) {\n            var divider = i / 100;\n            var positionX = initialX * divider;\n            var positionY = initialY * divider;\n            var bottomPosition = window.innerHeight / 2 * divider;\n            layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n        });\n    };\n    window.addEventListener('mousemove', moveLayers);\n\n    var openLogin = document.getElementById('login');\n    var backFlip = document.getElementById('backFlip');\n    var flipElements = document.querySelectorAll('.flip-element');\n    openLogin.addEventListener('click', function () {\n        for (var i = 0; i < flipElements.length; i++) {\n            flipElements[i].classList.toggle('active');\n        }\n    });\n\n    backFlip.addEventListener('click', function () {\n        for (var i = 0; i < flipElements.length; i++) {\n            flipElements[i].classList.toggle('active');\n        }\n    });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJib3R0b21Qb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5Mb2dpbiIsImdldEVsZW1lbnRCeUlkIiwiYmFja0ZsaXAiLCJmbGlwRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkIsUUFBTUMsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0EsUUFBTUMsU0FBU0MsTUFBTUMsSUFBTixDQUFXTCxrQkFBa0JNLFFBQTdCLENBQWY7QUFDQSxRQUFNQyxhQUFhLFNBQWJBLFVBQWEsSUFBSztBQUN4QixZQUFNQyxXQUFZVixPQUFPVyxVQUFQLEdBQW9CLENBQXJCLEdBQTBCQyxFQUFFQyxLQUE3QztBQUNBLFlBQU1DLFdBQVlkLE9BQU9lLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJILEVBQUVJLEtBQTlDO0FBQ0FYLGVBQU9ZLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUM3QixnQkFBTUMsVUFBVUQsSUFBSSxHQUFwQjtBQUNBLGdCQUFNRSxZQUFZWCxXQUFXVSxPQUE3QjtBQUNBLGdCQUFNRSxZQUFZUixXQUFXTSxPQUE3QjtBQUNBLGdCQUFNRyxpQkFBa0J2QixPQUFPZSxXQUFQLEdBQXFCLENBQXRCLEdBQTJCSyxPQUFsRDtBQUNBRixrQkFBTU0sS0FBTixDQUFZQyxTQUFaLGtCQUFxQ0osU0FBckMsWUFBcURDLFNBQXJEO0FBQ0MsU0FORDtBQU9DLEtBVkQ7QUFXQXRCLFdBQU8wQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2pCLFVBQXJDOztBQUVBLFFBQU1rQixZQUFZeEIsU0FBU3lCLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbEI7QUFDQSxRQUFNQyxXQUFXMUIsU0FBU3lCLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxRQUFNRSxlQUFlM0IsU0FBUzRCLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBQ0FKLGNBQVVELGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQWE7QUFDakQsYUFBSyxJQUFJUCxJQUFJLENBQWIsRUFBZ0JBLElBQUlXLGFBQWFFLE1BQWpDLEVBQXlDYixHQUF6QyxFQUE4QztBQUM5Q1cseUJBQWFYLENBQWIsRUFBZ0JjLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxRQUFqQztBQUNDO0FBQUMsS0FIRjs7QUFLQUwsYUFBU0gsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBYTtBQUNoRCxhQUFLLElBQUlQLElBQUksQ0FBYixFQUFnQkEsSUFBSVcsYUFBYUUsTUFBakMsRUFBeUNiLEdBQXpDLEVBQThDO0FBQzlDVyx5QkFBYVgsQ0FBYixFQUFnQmMsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLFFBQWpDO0FBQ0M7QUFBQyxLQUhGO0FBSUMsQ0E1QkwiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wYXJhbGxheFwiXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xuICAgIGNvbnN0IGxheWVycyA9IEFycmF5LmZyb20ocGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW4pO1xuICAgIGNvbnN0IG1vdmVMYXllcnMgPSBlID0+IHtcbiAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gZS5wYWdlWDtcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgY29uc3QgZGl2aWRlciA9IGkgLyAxMDA7XG4gICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcbiAgICBjb25zdCBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXI7XG4gICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcbiAgICB9KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpXG5cbiAgICBjb25zdCBvcGVuTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcbiAgICBjb25zdCBiYWNrRmxpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrRmxpcCcpO1xuICAgIGNvbnN0IGZsaXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGlwLWVsZW1lbnQnKTtcbiAgICBvcGVuTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSAge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmxpcEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZmxpcEVsZW1lbnRzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH19KTtcblxuICAgIGJhY2tGbGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZsaXBFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZsaXBFbGVtZW50c1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9fSk7XG4gICAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.onload = function () {\n    var parallaxContainer = document.querySelector('.parallax');\n    var layers = Array.from(parallaxContainer.children);\n    var moveLayers = function moveLayers(e) {\n        var initialX = window.innerWidth / 2 - e.pageX;\n        var initialY = window.innerHeight / 2 - e.pageY;\n\n        layers.forEach(function (layer, i) {\n            var divider = i / 125;\n            var positionX = initialX * divider;\n            var positionY = initialY * divider;\n            var bottomPosition = window.innerHeight / 2 * divider;\n            layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n        });\n    };\n    window.addEventListener('mousemove', moveLayers);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJib3R0b21Qb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsTUFBUCxHQUFnQixZQUFXO0FBQ3ZCLFFBQU1DLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUExQjtBQUNBLFFBQU1DLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0wsa0JBQWtCTSxRQUE3QixDQUFmO0FBQ0EsUUFBTUMsYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDcEIsWUFBTUMsV0FBWVYsT0FBT1csVUFBUCxHQUFvQixDQUFyQixHQUEwQkMsRUFBRUMsS0FBN0M7QUFDQSxZQUFNQyxXQUFZZCxPQUFPZSxXQUFQLEdBQXFCLENBQXRCLEdBQTJCSCxFQUFFSSxLQUE5Qzs7QUFFQVgsZUFBT1ksT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ3pCLGdCQUFNQyxVQUFVRCxJQUFJLEdBQXBCO0FBQ0EsZ0JBQU1FLFlBQVlYLFdBQVdVLE9BQTdCO0FBQ0EsZ0JBQU1FLFlBQVlSLFdBQVdNLE9BQTdCO0FBQ0EsZ0JBQU1HLGlCQUFrQnZCLE9BQU9lLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJLLE9BQWxEO0FBQ0FGLGtCQUFNTSxLQUFOLENBQVlDLFNBQVosa0JBQXFDSixTQUFyQyxZQUFxREMsU0FBckQ7QUFDSCxTQU5EO0FBT0gsS0FYRDtBQVlBdEIsV0FBTzBCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDakIsVUFBckM7QUFDSCxDQWhCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4Jyk7XG4gICAgY29uc3QgbGF5ZXJzID0gQXJyYXkuZnJvbShwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbik7XG4gICAgY29uc3QgbW92ZUxheWVycyA9IGUgPT4ge1xuICAgICAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gZS5wYWdlWDtcbiAgICAgICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xuICAgIFxuICAgICAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdmlkZXIgPSBpIC8gMTI1O1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyO1xuICAgICAgICAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcbiAgICAgICAgfSk7XG4gICAgfSAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTGF5ZXJzKVxufTtcbiAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ })

/******/ });