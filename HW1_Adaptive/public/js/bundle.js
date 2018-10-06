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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/events.json":
/*!******************************!*\
  !*** ./src/data/events.json ***!
  \******************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = {\"events\":[{\"type\":\"info\",\"title\":\"Еженедельный отчет по расходам ресурсов\",\"source\":\"Сенсоры потребления\",\"time\":\"19:00, Сегодня\",\"description\":\"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.\",\"icon\":\"stats\",\"data\":{\"type\":\"graph\",\"values\":[{\"electricity\":[[\"1536883200\",115],[\"1536969600\",117],[\"1537056000\",117.2],[\"1537142400\",118],[\"1537228800\",120],[\"1537315200\",123],[\"1537401600\",129]]},{\"water\":[[\"1536883200\",40],[\"1536969600\",40.2],[\"1537056000\",40.5],[\"1537142400\",41],[\"1537228800\",41.4],[\"1537315200\",41.9],[\"1537401600\",42.6]]},{\"gas\":[[\"1536883200\",13],[\"1536969600\",13.2],[\"1537056000\",13.5],[\"1537142400\",13.7],[\"1537228800\",14],[\"1537315200\",14.2],[\"1537401600\",14.5]]}]},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Дверь открыта\",\"source\":\"Сенсор входной двери\",\"time\":\"18:50, Сегодня\",\"description\":null,\"icon\":\"key\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Уборка закончена\",\"source\":\"Пылесос\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"robot-cleaner\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Новый пользователь\",\"source\":\"Роутер\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"router\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Изменен климатический режим\",\"source\":\"Сенсор микроклимата\",\"time\":\"18:30, Сегодня\",\"description\":\"Установлен климатический режим «Фиджи»\",\"icon\":\"thermal\",\"size\":\"m\",\"data\":{\"temperature\":24,\"humidity\":80}},{\"type\":\"critical\",\"title\":\"Невозможно включить кондиционер\",\"source\":\"Кондиционер\",\"time\":\"18:21, Сегодня\",\"description\":\"В комнате открыто окно, закройте его и повторите попытку\",\"icon\":\"ac\",\"size\":\"m\"},{\"type\":\"info\",\"title\":\"Музыка включена\",\"source\":\"Яндекс.Станция\",\"time\":\"18:16, Сегодня\",\"description\":\"Сейчас проигрывается:\",\"icon\":\"music\",\"size\":\"m\",\"data\":{\"albumcover\":\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\",\"artist\":\"Florence & The Machine\",\"track\":{\"name\":\"Big God\",\"length\":\"4:31\"},\"volume\":80}},{\"type\":\"info\",\"title\":\"Заканчивается молоко\",\"source\":\"Холодильник\",\"time\":\"17:23, Сегодня\",\"description\":\"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?\",\"icon\":\"fridge\",\"size\":\"m\",\"data\":{\"buttons\":[\"Да\",\"Нет\"]}},{\"type\":\"info\",\"title\":\"Зарядка завершена\",\"source\":\"Оконный сенсор\",\"time\":\"16:22, Сегодня\",\"description\":\"Ура! Устройство «Оконный сенсор» снова в строю!\",\"icon\":\"battery\",\"size\":\"s\"},{\"type\":\"critical\",\"title\":\"Пылесос застрял\",\"source\":\"Сенсор движения\",\"time\":\"16:17, Сегодня\",\"description\":\"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.\",\"icon\":\"cam\",\"data\":{\"image\":\"get_it_from_mocks_:3.jpg\"},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Вода вскипела\",\"source\":\"Чайник\",\"time\":\"16:20, Сегодня\",\"description\":null,\"icon\":\"kettle\",\"size\":\"s\"}]};\n\n//# sourceURL=webpack:///./src/data/events.json?");

/***/ }),

/***/ "./src/img/get_it_from_mocks_:3.jpg":
/*!******************************************!*\
  !*** ./src/img/get_it_from_mocks_:3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/get_it_from_mocks_:3.jpg\";\n\n//# sourceURL=webpack:///./src/img/get_it_from_mocks_:3.jpg?");

/***/ }),

/***/ "./src/img/graph.svg":
/*!***************************!*\
  !*** ./src/img/graph.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/graph.svg\";\n\n//# sourceURL=webpack:///./src/img/graph.svg?");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.svg\";\n\n//# sourceURL=webpack:///./src/img/logo.svg?");

/***/ }),

/***/ "./src/js/Event.js":
/*!*************************!*\
  !*** ./src/js/Event.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var robot = __webpack_require__(/*! ../img/get_it_from_mocks_:3.jpg */ \"./src/img/get_it_from_mocks_:3.jpg\");\n\nvar graph = __webpack_require__(/*! ../img/graph.svg */ \"./src/img/graph.svg\");\n\nvar logo = __webpack_require__(/*! ../img/logo.svg */ \"./src/img/logo.svg\");\n\nvar eventsJson = __webpack_require__(/*! ../../src/data/events.json */ \"./src/data/events.json\");\n\nmodule.exports = function load() {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', \"./src/data/events.json\", true);\n\n  xhr.onload = function () {\n    var output = '';\n\n    if (this.status === 200) {\n      var response = JSON.parse(this.responseText);\n      response.events.forEach(function (event) {\n        output += \"<div class=\\\"event event_type_\".concat(event.type, \" event_size_\").concat(event.size, \"\\\">\\n\\n                                    <i class=\\\"event__hide\\\"></i>\\n\\n                                    <div class=\\\"event__heading\\\">\\n                                        <i class=\\\"event__icon icon__\").concat(event.icon, \"\\\"></i>\\n                                        <p class=\\\"event__title\\\">\").concat(event.title, \"</p>\\n                                    </div>\\n                                    \\n                                    <div class=\\\"event__status\\\">\\n                                        <div class=\\\"event__source\\\">\").concat(event.source, \"</div>\\n                                        <div class=\\\"event__time\\\">\").concat(event.time, \"</div>\\n                                    </div>\\n                                   \\n                                        \").concat(event.description !== null ? '<div class=\"event__body\">' + event.description + '</div>' : \"\", \"\\n                                    \\n                                    \\n                                    \").concat(event.data !== undefined ? \"<div class=\\\"event__data\\\">\" : \"\", \"\\n                                        \\n                                        \").concat(event.data !== undefined && event.data.image !== undefined ? \"<img class=\\\"data__img event__img cam__img\\\" src=\\\"public/img/\".concat(event.data.image, \"\\\" alt=\\\"\").concat(event.title, \"\\\">\") : \"\", \"\\n                                        \").concat(event.icon === 'cam' ? \"<div class=\\\"data__items data__items_cam\\\"><p class=\\\"data__item\\\">\\u041F\\u0440\\u0438\\u0431\\u043B\\u0438\\u0436\\u0435\\u043D\\u0438\\u0435: <span class=\\\"data__digit\\\">78%</span></p> <p class=\\\"data__item\\\">\\u042F\\u0440\\u043A\\u043E\\u0441\\u0442\\u044C: <span class=\\\"data__digit\\\">50%</span></p></div>\" : \"\", \"\\n                                        \").concat(event.data !== undefined && event.data.type === 'graph' ? \"<img class=\\\"data__img event__img\\\" src=\\\"public/\".concat(graph, \"\\\" alt=\\\"\").concat(event.title, \"\\\">\") : \"\", \"\\n                                        \").concat(event.data !== undefined && event.data.albumcover !== undefined ? \"<div class=\\\"music data__music\\\">\\n                                            <img class=\\\"data__img music__albumcover\\\" src=\\\"\".concat(event.data.albumcover, \"\\\" alt=\\\"albumcover\\\">\\n                                            \\n                                                    <div class=\\\"music__track track\\\">\\n                                                        <div class=\\\"track__description\\\">\").concat(event.data.artist, \" - \").concat(event.data.track.name, \"</div>\\n                                                        <div class=\\\"track__body\\\">\\n                                                            <input class=\\\"track__input\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"24000\\\" step=\\\"1\\\" value=\\\"0\\\">\\n                                                            <div class=\\\"track__length\\\">\").concat(event.data.track.length, \"</div>\\n                                                        </div>\\n                                                    </div>\\n                                                    \\n                                                    <div class=\\\"music__nav m-nav\\\">\\n                                                        <button class=\\\"m-nav__prev\\\"></button>\\n                                                        <button class=\\\"m-nav__next\\\"></button>\\n                                                        <div class=\\\"m-nav__volume\\\">\\n                                                            <input class=\\\"m-nav__volume-input\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"100\\\" step=\\\"1\\\" value=\\\"\").concat(event.data.volume, \"\\\">\\n                                                            <div class=\\\"m-nav__value\\\">\").concat(event.data.volume, \"%</div>\\n                                                        </div>\\n                                                    </div>\\n                                            </div>\\n                                        \") : \"\", \"\\n                                        \").concat(event.data !== undefined && event.data.humidity !== undefined ? \"<div class=\\\"data__items\\\"><p class=\\\"data__item\\\">\\u0422\\u0435\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430: <span class=\\\"data__digit\\\">\".concat(event.data.temperature, \"&#8451;</span></p> <p class=\\\"data__item\\\">\\u0412\\u043B\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C: <span class=\\\"data__digit\\\">\").concat(event.data.humidity, \"%</span></p></div>\") : \"\", \"\\n                                        \").concat(event.data !== undefined && event.data.buttons !== undefined ? \"<div class=\\\"data__buttons\\\"><button class=\\\"data__button button button_primary\\\">\".concat(event.data.buttons[0], \"</button> <button class=\\\"data__button button\\\">\").concat(event.data.buttons[1], \"</button></div>\") : \"\", \"\\n                                    \\n                                    \").concat(event.data !== undefined ? \"</div>\" : \"\", \"\\n                \\n                                                    <i class=\\\"event__go\\\"></i>\\n                                                    \\n                                               </div>\");\n      });\n    } else {\n      output += '<li>Something went wrong</li>';\n    }\n\n    document.querySelector('.events').innerHTML = output;\n  };\n\n  xhr.send();\n};\n\n//# sourceURL=webpack:///./src/js/Event.js?");

/***/ }),

/***/ "./src/js/TouchCtrl.js":
/*!*****************************!*\
  !*** ./src/js/TouchCtrl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n  var evCache = [];\n  var evCachePDown = [];\n  var prevDiff = -1;\n  var isRotation = false;\n  var angle = 0;\n  var tx = 0;\n  var scale = 1;\n\n  var pointerdown_handler = function pointerdown_handler(ev) {\n    // console.log('down', ev)\n    // The pointerdown event signals the start of a touch interaction.\n    // This event is cached to support 2-finger gestures\n    evCache.push(ev);\n    evCachePDown.push(ev);\n    isRotation = false;\n    ev.preventDefault();\n  };\n\n  var pointermove_handler = function pointermove_handler(ev) {\n    // console.log('move', ev);\n    // console.log(evCachePDown[0]);\n    var diffScale = 0;\n    var diffAngle = 0; // Find this event in the cache and update its record with this event\n\n    for (var i = 0; i < evCache.length; i++) {\n      if (ev.pointerId === evCache[i].pointerId) {\n        if (evCache.length >= 2) {\n          var prevI = i === 0 ? 1 : 0;\n          var prevDistance = Math.abs(evCache[0].clientX - evCache[1].clientX);\n          var nextDistance = Math.abs(evCache[prevI].clientX - ev.clientX);\n          var prevAngle = calcEventAngle(evCache[prevI], evCache[i]);\n          var nextAngle = calcEventAngle(evCache[prevI], ev);\n          diffScale = nextDistance - prevDistance;\n          diffAngle = nextAngle - prevAngle;\n          var firstAngle = calcEventAngle(evCachePDown[prevI], evCachePDown[i]);\n          var deltaFromFirstAngle = Math.abs(nextAngle - firstAngle);\n\n          if (deltaFromFirstAngle > 30) {\n            isRotation = true;\n          }\n        }\n\n        evCache[i] = ev;\n        break;\n      }\n    }\n\n    if (evCache.length === 1) {\n      tx += ev.movementX;\n      ev.target.style.backgroundPositionX = \"\".concat(tx, \"px\");\n    } else if (evCache.length === 2) {\n      // console.log(diffScale);\n      console.log(isRotation);\n\n      if (isRotation) {\n        angle += diffAngle;\n        angle = Math.min(Math.max(-90, angle), 90);\n        ev.target.style.filter = \"brightness(\".concat((angle + 90) / 180, \")\");\n        document.getElementById('brightness').innerText = ((angle + 90) / 180 * 100).toFixed() + '%';\n      } else {\n        scale += diffScale * 0.01;\n        ev.target.style.transform = \"scale(\".concat(scale, \")\");\n      }\n    }\n\n    document.getElementById('percentage').innerText = (scale * 100).toFixed() + '%'; // console.log(angle);\n    // console.log(`angle: ${angle}`);\n\n    ev.preventDefault();\n  };\n\n  var pointerup_handler = function pointerup_handler(ev) {\n    remove_event(ev); // If the number of pointers down is less than two then reset diff tracker\n\n    if (evCache.length < 2) prevDiff = -1;\n    ev.preventDefault();\n  };\n\n  function remove_event(ev) {\n    // Remove this event from the target's cache\n    for (var i = 0; i < evCache.length; i++) {\n      if (evCache[i].pointerId === ev.pointerId) {\n        evCache.splice(i, 1);\n        evCachePDown.splice(i, 1);\n        break;\n      }\n    }\n  }\n\n  function calcEventDistace(ev, ev2) {\n    var dx = ev.clientX - ev2.clientX;\n    var dy = ev.clientY - ev2.clientY;\n    return Math.sqrt(dx * dx + dy * dy);\n  }\n\n  function calcEventAngle(ev, ev2) {\n    return Math.acos((ev2.clientX - ev.clientX) / calcEventDistace(ev, ev2)) / Math.PI * 180;\n  } // Public methods\n\n\n  return {\n    myFunc: function myFunc(ev) {\n      if (ev.target.classList.contains('cam__img') && ev.pointerType === 'touch') {\n        console.log(ev.pointerType + \" \" + ev.type + \" on a \" + ev.target.nodeName);\n      }\n\n      ev.preventDefault();\n    },\n    init: function init() {\n      //if (ev.target.classList.contains('cam__img') && ev.pointerType === 'touch') {\n      var el = document.querySelector('.cam__img'); // Install event handlers for the pointer target\n\n      el.onpointerdown = pointerdown_handler;\n      el.onpointermove = pointermove_handler; // Use same handler for pointer{up,cancel,out,leave} events since\n      // the semantics for these events - in this app - are the same.\n\n      el.onpointerup = pointerup_handler;\n      el.onpointercancel = pointerup_handler;\n      el.onpointerout = pointerup_handler;\n      el.onpointerleave = pointerup_handler; //}\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/TouchCtrl.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var loadEvents = __webpack_require__(/*! ./Event */ \"./src/js/Event.js\");\n\nvar touch = __webpack_require__(/*! ./TouchCtrl */ \"./src/js/TouchCtrl.js\");\n\nvar App = function (TouchCtrl) {\n  var loadEventListeners = function loadEventListeners() {//document.addEventListener('DOMContentLoaded', loadEvents());\n    //document.querySelector('.events').addEventListener('pointerdown', TouchCtrl.myFunc);\n  };\n\n  return {\n    init: function init() {\n      loadEventListeners();\n      TouchCtrl.init();\n    }\n  };\n}(touch);\n\nApp.init();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/main.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/scss/main.scss?");

/***/ })

/******/ });