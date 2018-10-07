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

/***/ "./src/img/get_it_from_mocks_:3@2x.jpg":
/*!*********************************************!*\
  !*** ./src/img/get_it_from_mocks_:3@2x.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/get_it_from_mocks_:3@2x.jpg\";\n\n//# sourceURL=webpack:///./src/img/get_it_from_mocks_:3@2x.jpg?");

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

eval("__webpack_require__(/*! ../img/get_it_from_mocks_:3.jpg */ \"./src/img/get_it_from_mocks_:3.jpg\");\n\n__webpack_require__(/*! ../img/get_it_from_mocks_:3@2x.jpg */ \"./src/img/get_it_from_mocks_:3@2x.jpg\");\n\n__webpack_require__(/*! ../img/get_it_from_mocks_:3.jpg */ \"./src/img/get_it_from_mocks_:3.jpg\");\n\nlet graph = __webpack_require__(/*! ../img/graph.svg */ \"./src/img/graph.svg\");\n\nlet logo = __webpack_require__(/*! ../img/logo.svg */ \"./src/img/logo.svg\");\n\nlet eventsJson = __webpack_require__(/*! ../../src/data/events.json */ \"./src/data/events.json\");\n\nmodule.exports = class Event {\n  loadEvents() {\n    let xhr = new XMLHttpRequest();\n    xhr.open('GET', `./src/data/events.json`, true);\n\n    xhr.onload = function () {\n      let output = '';\n\n      if (this.status === 200) {\n        let response = JSON.parse(this.responseText);\n        response.events.forEach(function (event) {\n          output += `<div class=\"event event_type_${event.type} event_size_${event.size}\">\n\n                                    <i class=\"event__hide\"></i>\n\n                                    <div class=\"event__heading\">\n                                        <i class=\"event__icon icon__${event.icon}\"></i>\n                                        <p class=\"event__title\">${event.title}</p>\n                                    </div>\n                                    \n                                    <div class=\"event__status\">\n                                        <div class=\"event__source\">${event.source}</div>\n                                        <div class=\"event__time\">${event.time}</div>\n                                    </div>\n                                   \n                                        ${event.description !== null ? '<div class=\"event__body\">' + event.description + '</div>' : ``}\n                                    \n                                    \n                                    ${event.data !== undefined ? `<div class=\"event__data\">` : ``}\n                                        \n                                        ${event.data !== undefined && event.data.image !== undefined ? `<img \n                                            srcset=\"public/img/${event.data.image} 408w, public/img/${event.data.image.replace(/\\.jpg$/, '@2x.jpg')} 1664w, public/img/${event.data.image.replace(/\\\\.jpg$/, '@3x.jpg')} 2496w\"\n                                            sizes=\"(max-width: 768px) 408px,\n                                                   (max-width: 2560px) 1664px,\n                                                    2496px\"\n                                            class=\"data__img event__img\" src=\"public/img/${event.data.image}\" \n                                            alt=\"${event.title}\">` : ``}\n                                        \n                                        ${event.icon === 'cam' ? `<div class=\"data__items data__items_cam\"><p class=\"data__item\">Приближение: <span class=\"data__digit\">78%</span></p> <p class=\"data__item\">Яркость: <span class=\"data__digit\">50%</span></p></div>` : ``}\n                                        ${event.data !== undefined && event.data.type === 'graph' ? `<img class=\"data__img event__img\" src=\"public/${graph}\" alt=\"${event.title}\">` : ``}\n                                        ${event.data !== undefined && event.data.albumcover !== undefined ? `<div class=\"music data__music\">\n                                            <img class=\"data__img music__albumcover\" src=\"${event.data.albumcover}\" alt=\"albumcover\">\n                                            \n                                                    <div class=\"music__track track\">\n                                                        <div class=\"track__description\">${event.data.artist} - ${event.data.track.name}</div>\n                                                        <div class=\"track__body\">\n                                                            <input class=\"track__input\" type=\"range\" min=\"0\" max=\"24000\" step=\"1\" value=\"0\">\n                                                            <div class=\"track__length\">${event.data.track.length}</div>\n                                                        </div>\n                                                    </div>\n                                                    \n                                                    <div class=\"music__nav m-nav\">\n                                                        <button class=\"m-nav__prev\"></button>\n                                                        <button class=\"m-nav__next\"></button>\n                                                        <div class=\"m-nav__volume\">\n                                                            <input class=\"m-nav__volume-input\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"${event.data.volume}\">\n                                                            <div class=\"m-nav__value\">${event.data.volume}%</div>\n                                                        </div>\n                                                    </div>\n                                            </div>\n                                        ` : ``}\n                                        ${event.data !== undefined && event.data.humidity !== undefined ? `<div class=\"data__items\"><p class=\"data__item\">Температура: <span class=\"data__digit\">${event.data.temperature}&#8451;</span></p> <p class=\"data__item\">Влажность: <span class=\"data__digit\">${event.data.humidity}%</span></p></div>` : ``}\n                                        ${event.data !== undefined && event.data.buttons !== undefined ? `<div class=\"data__buttons\"><button class=\"data__button button button_primary\">${event.data.buttons[0]}</button> <button class=\"data__button button\">${event.data.buttons[1]}</button></div>` : ``}\n                                    \n                                    ${event.data !== undefined ? `</div>` : ``}\n                \n                                                    <i class=\"event__go\"></i>\n                                                    \n                                               </div>`;\n        });\n      } else {\n        output += '<li>Something went wrong</li>';\n      }\n\n      document.querySelector('.events').innerHTML = output;\n    };\n\n    xhr.send();\n  }\n\n};\n\n//# sourceURL=webpack:///./src/js/Event.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Event = __webpack_require__(/*! ./Event */ \"./src/js/Event.js\");\n\nlet event = new Event();\ndocument.addEventListener('DOMContentLoaded', event.loadEvents);\n\n//# sourceURL=webpack:///./src/js/app.js?");

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