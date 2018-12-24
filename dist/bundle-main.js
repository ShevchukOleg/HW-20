/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"../node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ \"../node_modules/popper.js/dist/esm/popper.js\");\n/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ \"./js/guard/auth.guard.js\");\n/* harmony import */ var _controls_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/login */ \"./js/controls/login.js\");\n/* harmony import */ var _controls_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/home */ \"./js/controls/home.js\");\n//Libs\n\n\n //Styles\n\n__webpack_require__(/*! ./../css/style.css */ \"./css/style.css\"); //Guard\n\n\n //Pages\n\n\n\nvar guard = new _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__[\"AuthGuard\"]();\nvar path = window.location.href;\nvar page = path.split('/').pop().slice(0, -5);\n\nswitch (page) {\n  case 'login':\n    guard.check(page);\n    Object(_controls_login__WEBPACK_IMPORTED_MODULE_4__[\"LoginPage\"])();\n    break;\n\n  case 'index':\n    guard.check(page);\n    Object(_controls_home__WEBPACK_IMPORTED_MODULE_5__[\"HomePage\"])();\n    break;\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/config/env.js":
/*!**************************!*\
  !*** ./js/config/env.js ***!
  \**************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"env\", function() { return env; });\nvar env = {\n  apiUrl: \"https://mostlikedperson-api.herokuapp.com/api\"\n};\n\n//# sourceURL=webpack:///./js/config/env.js?");

/***/ }),

/***/ "./js/controls/home.js":
/*!*****************************!*\
  !*** ./js/controls/home.js ***!
  \*****************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/user */ \"./js/services/user.js\");\n/* harmony import */ var _services_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/image */ \"./js/services/image.js\");\n/* harmony import */ var _ui_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ui/user */ \"./js/ui/user.js\");\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/image */ \"./js/ui/image.js\");\n/* harmony import */ var _ui_imageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../ui/imageModal */ \"./js/ui/imageModal.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nfunction HomePage() {\n  // Init User Service\n  var user = new _services_user__WEBPACK_IMPORTED_MODULE_0__[\"UserService\"](); //Image Servise\n\n  var imageService = new _services_image__WEBPACK_IMPORTED_MODULE_1__[\"ImageService\"](); // Init User UI\n\n  var userUI = new _ui_user__WEBPACK_IMPORTED_MODULE_2__[\"UserUI\"](); // Init Image UI\n\n  var imageUI = new _ui_image__WEBPACK_IMPORTED_MODULE_3__[\"ImageUI\"](); // Init Image Modal\n\n  var imageModal = new _ui_imageModal__WEBPACK_IMPORTED_MODULE_4__[\"ImageModal\"](); // UI elements\n\n  var inputCover = document.getElementById(\"coverImg\");\n  var inputUserPhotos = document.getElementById(\"userPhotos\");\n  var imgWrapper = document.querySelector(\"div.images-wrap\");\n  var modal = document.querySelector(\"div.modal-body\");\n  var inputSearch = document.querySelector(\"input.form-control\");\n  var btnLogout = document.getElementById(\"loguot\");\n  /**\r\n   * onLoad - обработчик события звгрузки страницы, активирует методы экземпляра объекта UserService\r\n   * данные полученные в ответе сервера отправляются в метод UserUI.renderUserInfo который сепарирует данные\r\n   * для отображения на странице, очищается темплейт, и вставляются изображения\r\n   * @param {Event} e \r\n   */\n\n  function onLoad(e) {\n    user.getInfo().then(function (data) {\n      userUI.renderUserInfo(data);\n      return data;\n    }).then(function (data) {\n      imageUI.clearContainer();\n      data.my_images.forEach(function (img) {\n        return imageUI.addImage(img);\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n  /**\r\n   * onSearch - обработчик панели поиска пользоватеей, отправляет запрос с инициаламы пользователя, прередает\r\n   * ответ сервера на контроллер вывода, контролирует открытие графического интерфейса окна с результатами\r\n   * @param {Event} e - внесение значений в строку поиска\r\n   */\n\n\n  function onSearch(e) {\n    e.preventDefault();\n\n    if (e.target.value.length > 2) {\n      user.sendSearchQuery(e.target.value).then(function (data) {\n        userUI.controllerSearchingUserInfo(data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    } else if (!document.querySelector(\"div.search-result\").classList.contains('d-none') && e.target.value.length < 3) {\n      document.querySelector(\"div.search-result\").classList.toggle('d-none');\n    }\n  }\n  /**\r\n   * logout -  обработчик выхода с профайла\r\n   * @param {Event} e - клик по кнопке логаута\r\n   */\n\n\n  function logout(e) {\n    localStorage.removeItem(\"social_user_id\");\n    localStorage.removeItem(\"social_user_token\");\n    window.location = \"login.html\";\n  }\n  /**\r\n   * onCoverUpload - обработчик на событие загрузки файла спроверкой состояния, и передачей на\r\n   * user.uploadCover он запрашивает обновленную информацию, распарсивает ее и устанавливает новый\r\n   * фон\r\n   * @param {Event} e \r\n   */\n\n\n  function onCoverUpload(e) {\n    if (inputCover.files.length) {\n      var _inputCover$files = _slicedToArray(inputCover.files, 1),\n          newCover = _inputCover$files[0];\n\n      user.uploadCover(newCover).then(user.getInfo).then(function (data) {\n        return userUI.setCover(data.cover);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }\n  /**\r\n   * onPhotosUpload -  обработчик отправки пользовательских изображаний с выводом изображения\r\n   * @param {Event} e \r\n   */\n\n\n  function onPhotosUpload(e) {\n    e.stopPropagation();\n\n    if (inputUserPhotos.files.length) {\n      var userPhoto = inputUserPhotos.files;\n      var arrFiles = [];\n\n      for (var kay in userPhoto) {\n        if (isFinite(kay)) {\n          arrFiles.push(userPhoto[kay]);\n        }\n      }\n\n      arrFiles.forEach(function (photo) {\n        user.loadPhoto(photo).then(user.getInfo).then(function (data) {\n          userUI.renderUserInfo(data);\n          return data;\n        }).then(function (data) {\n          imageUI.clearContainer();\n          data.my_images.forEach(function (img) {\n            return imageUI.addImage(img);\n          });\n        }); //Нужно обнулить состояние инпута, если задать .value = \"\" в цикле то будут потеряны изображения\n        // думал через setTimeOut но не красиво, как коректно?\n      });\n    }\n  }\n  /**\r\n   * imageOpertion  - обработчик оперций с картинками пользователя\r\n   * @param {Event} e  - клик по полю в котором размещены изображения пользователя\r\n   */\n\n\n  function imageOpertion(e) {\n    e.stopPropagation();\n\n    if (e.target.classList.contains(\"fa-trash-alt\")) {\n      var imgId = e.target.closest(\"[data-img-id]\").dataset.imgId;\n      var imgUrlParametr = e.target.closest(\"[data-img-id]\").querySelector(\"img\").src.slice(80);\n      var confirmation = confirm(\"\\u0414\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u2116 \".concat(imgId, \"?\"));\n\n      if (confirmation) {\n        user.deletePhoto(imgId, imgUrlParametr).then(user.getInfo).then(function (data) {\n          userUI.renderUserInfo(data);\n          return data;\n        }).then(function (data) {\n          imageUI.clearContainer();\n          data.my_images.forEach(function (img) {\n            return imageUI.addImage(img);\n          });\n        });\n      }\n    }\n\n    ;\n\n    if (e.target.classList.contains(\"on-hover\")) {\n      var id = e.target.closest(\"[data-img-id]\").dataset.imgId;\n      $('#imageModal').modal('toggle');\n      imageService.getInfo(id).then(function (data) {\n        return imageModal.renderInfo(data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n\n    ;\n  }\n  /**\r\n   * modalOperations - обработчик операций в модальном окне\r\n   * @param {Event} e - событие\r\n   */\n\n\n  function modalOperations(e) {\n    e.stopPropagation();\n    e.preventDefault();\n    var imgID = e.target.closest(\"div.modal-body\").querySelector(\"[data-id]\").dataset.id;\n    var newCommentForm = e.target.closest(\"form\");\n\n    if (e.target.classList.contains(\"sendMessage\")) {\n      user.sendNewComment(imgID, newCommentForm); // .then(\n      //     imageService.getInfo(imgID)\n      //     .then((data) => imageModal.renderInfo(data))\n      //     .catch((error) => {\n      //     console.log(error);\n      //     })\n      // )\n      //Затык с модаьным окном как эго закрыть вместе с прелодером $('#imageModal').modal('toggle');\n    } else if (e.target.classList.contains(\"fa-trash-alt\")) {\n      var comId = e.target.closest(\"div.comment-item-details\").dataset.commentId;\n      user.deleteComment(comId, imgID);\n    } else if (e.target.classList.contains(\"fa-edit\")) {\n      var comIdent = e.target.closest(\"div.comment-item-details\").dataset.commentId;\n      var newMessageForm = e.target.closest(\"div.comment-item\").querySelector(\"form.newMessage\");\n      newMessageForm.classList.toggle(\"d-none\"); // newMessageForm.addEventListener('submit', (e) => {\n      //     e.preventDefault();\n      //     user.editComment(comIdent, newMessageForm);\n      // }); - ну на***,\n      // -Отец!!\n      // -  ну ты видел, видел?\n      // -Отец подумайне о ней!\n      // -Во бл***!\n\n      newMessageForm.querySelector(\"button.editMessage\").addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        user.editComment(comIdent, newMessageForm);\n      });\n    }\n  } // Events\n\n\n  window.addEventListener(\"load\", onLoad);\n  /**\r\n   * присвоение события на кнопку выхода из сайта\r\n   */\n\n  btnLogout.addEventListener('click', logout);\n  /**\r\n   * присвоение события на поле поиска\r\n   */\n\n  inputSearch.addEventListener(\"input\", onSearch);\n  /**\r\n   * присвоения события на загрузщик фона\r\n   */\n\n  inputCover.addEventListener(\"change\", onCoverUpload);\n  /**\r\n   * присвоение события отправи пользовательского изображения\r\n   */\n\n  inputUserPhotos.addEventListener(\"change\", onPhotosUpload);\n  /**\r\n   * присвоение события клика по галерее изображений\r\n   */\n\n  imgWrapper.addEventListener(\"click\", imageOpertion);\n  /**\r\n   * присвоение клика на модальное окно\r\n   */\n\n  modal.addEventListener(\"click\", modalOperations); // Remove loader\n\n  $('#imageModal').on('hidden.bs.modal', function (e) {\n    return imageModal.loaderToggle();\n  });\n}\n\n//# sourceURL=webpack:///./js/controls/home.js?");

/***/ }),

/***/ "./js/controls/login.js":
/*!******************************!*\
  !*** ./js/controls/login.js ***!
  \******************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginPage\", function() { return LoginPage; });\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth */ \"./js/services/auth.js\");\n/* harmony import */ var _modules_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/message */ \"./js/modules/message.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/validation */ \"./js/modules/validation.js\");\n\n\n\nfunction LoginPage() {\n  // Init Auth Service\n  var auth = new _services_auth__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"](); // Init Message Module\n\n  var message = new _modules_message__WEBPACK_IMPORTED_MODULE_1__[\"Message\"]();\n  message.init(); // Login UI\n\n  var form = document.forms[\"loginForm\"];\n  var emailInput = form.elements[\"email\"];\n  var passwordInput = form.elements[\"password\"]; // Login handler\n\n  function submitHandler(e) {\n    e.preventDefault();\n    var validation = new _modules_validation__WEBPACK_IMPORTED_MODULE_2__[\"Validation\"](form);\n    validation.init();\n    if (!validation.check()) return console.error(\"Validation error.\");\n    auth.login(emailInput.value, passwordInput.value).then(function (res) {\n      if (!res.error) {\n        localStorage.setItem(\"social_user_id\", res.id);\n        localStorage.setItem(\"social_user_token\", res.token);\n        window.location = \"index.html\";\n      } else {\n        message.show({\n          text: res.message,\n          error: res.error\n        });\n      }\n    });\n  }\n\n  form.addEventListener(\"submit\", submitHandler);\n}\n\n//# sourceURL=webpack:///./js/controls/login.js?");

/***/ }),

/***/ "./js/guard/auth.guard.js":
/*!********************************!*\
  !*** ./js/guard/auth.guard.js ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthGuard\", function() { return AuthGuard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AuthGuard =\n/*#__PURE__*/\nfunction () {\n  function AuthGuard() {\n    _classCallCheck(this, AuthGuard);\n  }\n\n  _createClass(AuthGuard, [{\n    key: \"check\",\n    value: function check(currentPage) {\n      // Get token\n      var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n      var id = localStorage.getItem(\"social_user_id\");\n      if ((!token || !id) && currentPage !== 'login') return window.location = './login.html';\n      if (token && id && currentPage === 'login') return window.location = './index.html';\n    }\n  }]);\n\n  return AuthGuard;\n}();\n\n//# sourceURL=webpack:///./js/guard/auth.guard.js?");

/***/ }),

/***/ "./js/modules/message.js":
/*!*******************************!*\
  !*** ./js/modules/message.js ***!
  \*******************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Message =\n/*#__PURE__*/\nfunction () {\n  function Message() {\n    _classCallCheck(this, Message);\n\n    this._messageContainer;\n  }\n\n  _createClass(Message, [{\n    key: \"init\",\n    value: function init() {\n      this._setContainer();\n    }\n  }, {\n    key: \"show\",\n    value: function show(_ref) {\n      var text = _ref.text,\n          error = _ref.error;\n\n      var template = Message._createMessageTemplate(text, error);\n\n      this._messageContainer.insertAdjacentHTML(\"afterbegin\", template);\n    }\n  }, {\n    key: \"_setContainer\",\n    value: function _setContainer() {\n      var template = \"<div class='message-container'></div>\";\n      document.body.insertAdjacentHTML(\"afterbegin\", template);\n      this._messageContainer = document.querySelector(\".message-container\");\n    }\n  }], [{\n    key: \"_createMessageTemplate\",\n    value: function _createMessageTemplate(text, error) {\n      return \"\\n            <div class=\\\"alert \".concat(error ? 'alert-danger' : 'alert-success', \"\\\">\").concat(text, \"</div>\\n        \");\n    }\n  }]);\n\n  return Message;\n}();\n\n//# sourceURL=webpack:///./js/modules/message.js?");

/***/ }),

/***/ "./js/modules/validation.js":
/*!**********************************!*\
  !*** ./js/modules/validation.js ***!
  \**********************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validation\", function() { return Validation; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validation =\n/*#__PURE__*/\nfunction () {\n  function Validation(form) {\n    _classCallCheck(this, Validation);\n\n    this._form = form;\n    this._inputs = this._form.querySelectorAll(\"[data-pattern]\");\n  }\n\n  _createClass(Validation, [{\n    key: \"init\",\n    value: function init() {\n      this._setEvents();\n    }\n  }, {\n    key: \"check\",\n    value: function check() {\n      var state = true;\n\n      this._inputs.forEach(function (input) {\n        var regExp = new RegExp(input.dataset.pattern);\n\n        if (!regExp.test(input.value)) {\n          input.classList.add(\"is-invalid\");\n          state = false;\n        }\n      });\n\n      return state;\n    }\n  }, {\n    key: \"_setEvents\",\n    value: function _setEvents() {\n      var _this = this;\n\n      this._inputs.forEach(function (input) {\n        return input.addEventListener(\"focus\", function (e) {\n          return _this._onFocusHandler(e);\n        });\n      });\n    }\n  }, {\n    key: \"_onFocusHandler\",\n    value: function _onFocusHandler(e) {\n      e.target.classList.remove(\"is-invalid\");\n    }\n  }]);\n\n  return Validation;\n}();\n\n//# sourceURL=webpack:///./js/modules/validation.js?");

/***/ }),

/***/ "./js/services/auth.js":
/*!*****************************!*\
  !*** ./js/services/auth.js ***!
  \*****************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthService\", function() { return AuthService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar AuthService =\n/*#__PURE__*/\nfunction () {\n  function AuthService() {\n    _classCallCheck(this, AuthService);\n  }\n\n  _createClass(AuthService, [{\n    key: \"login\",\n    value: function login(email, password) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/auth/login\"), {\n          method: \"POST\",\n          body: JSON.stringify({\n            email: email,\n            password: password\n          }),\n          headers: {\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return AuthService;\n}();\n\n//# sourceURL=webpack:///./js/services/auth.js?");

/***/ }),

/***/ "./js/services/image.js":
/*!******************************!*\
  !*** ./js/services/image.js ***!
  \******************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageService\", function() { return ImageService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * ImageService - сервис о получении данных об изображении с сервера\n */\n\nvar ImageService =\n/*#__PURE__*/\nfunction () {\n  function ImageService() {\n    _classCallCheck(this, ImageService);\n  }\n\n  _createClass(ImageService, [{\n    key: \"remove\",\n    value: function remove(id) {}\n  }, {\n    key: \"getInfo\",\n    value: function getInfo(id) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/image-info/\").concat(id)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return ImageService;\n}();\n\n//# sourceURL=webpack:///./js/services/image.js?");

/***/ }),

/***/ "./js/services/user.js":
/*!*****************************!*\
  !*** ./js/services/user.js ***!
  \*****************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserService\", function() { return UserService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\n/* harmony import */ var _services_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/image */ \"./js/services/image.js\");\n/* harmony import */ var _ui_imageModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ui/imageModal */ \"./js/ui/imageModal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar imageModal = new _ui_imageModal__WEBPACK_IMPORTED_MODULE_2__[\"ImageModal\"]();\nvar imageService = new _services_image__WEBPACK_IMPORTED_MODULE_1__[\"ImageService\"](); // import {}\n\n/**\n * UserService - контроллер обратотки информации пользователя\n * @class \n * \n */\n\nvar UserService =\n/*#__PURE__*/\nfunction () {\n  function UserService() {\n    _classCallCheck(this, UserService);\n  }\n\n  _createClass(UserService, [{\n    key: \"getInfo\",\n\n    /**\n     * Запрос на получение данных о пользователе\n     * @return {Object} обэект сперсенный из JSON\n     */\n    value: function getInfo() {\n      return new Promise(function (resolve, reject) {\n        var id = localStorage.getItem(\"social_user_id\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/get-info/\").concat(id)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * uploadCover - метод отправки файла для изменения фона, через Form Data создаем материал для\n     * отправки на сервер, добавляем в него файл и присваиваем эму имя через formData.append(\"coverImg\", file)\n     * достаем данные о реестации из локаьного хранилища и отправляем POST  запрос на сервер с файлом\n     * и хедером \"x-access-token\": token\n     * @param {File} file - загружаемое изображение \n     */\n\n  }, {\n    key: \"uploadCover\",\n    value: function uploadCover(file) {\n      return new Promise(function (resolve, reject) {\n        var formData = new FormData();\n        formData.append(\"coverImg\", file); // Get token\n\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var id = localStorage.getItem(\"social_user_id\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/upload-cover/\").concat(id), {\n          method: \"POST\",\n          body: formData,\n          headers: {\n            \"x-access-token\": token\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * loadPhoto - метод отправки пользовательских изображений на сервер, через fetch POST FormData\n     * @param {File} photo - загружаемое изображение\n     */\n\n  }, {\n    key: \"loadPhoto\",\n    value: function loadPhoto(photo) {\n      return new Promise(function (resolve, reject) {\n        var formData = new FormData();\n        formData.append(\"userPhotos\", photo);\n        var token = localStorage.getItem(\"social_user_token\");\n        var id = localStorage.getItem(\"social_user_id\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/upload-photos/\").concat(id), {\n          method: 'POST',\n          body: formData,\n          headers: {\n            \"x-access-token\": token\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          if (!data.error) {\n            console.log(\"User photos updated success!\");\n          }\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * deletePhoto -  метод удаления фотографий с запросом к серверу\n     * @param {String} photoId  -  идентефикатор изображения в разметке\n     * @param {String} urlParametr - часть идентефикатора изображения на сервере\n     */\n\n  }, {\n    key: \"deletePhoto\",\n    value: function deletePhoto(photoId, urlParametr) {\n      return new Promise(function (resolve, reject) {\n        var id = localStorage.getItem(\"social_user_id\");\n        var token = localStorage.getItem(\"social_user_token\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/remove-photo/\").concat(id), {\n          method: 'DELETE',\n          body: JSON.stringify({\n            image_id: \"\".concat(photoId),\n            image_url: \"users-photos/userPhotos-\".concat(urlParametr)\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (data) {\n          return data.json();\n        }).then(function (data) {\n          if (!data.error) {\n            console.log(data.message);\n          }\n\n          ;\n          return data;\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error.message);\n        });\n      });\n    }\n  }, {\n    key: \"sendSearchQuery\",\n\n    /**\n     * sendSearchQuery - запрос к серверу на поиск пользователей\n     * @param {String} query -  пользовательскй поисковый запрос \n     */\n    value: function sendSearchQuery(query) {\n      return new Promise(function (resolve, reject) {\n        var token = localStorage.getItem(\"social_user_token\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/search-users\"), {\n          method: \"POST\",\n          body: JSON.stringify({\n            search_text: \"\".concat(query)\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error.message);\n        });\n      });\n    }\n    /**\n     * sendNewComment - метод отправки нового сообщения\n     * @param {string} imageId - идентификатор изображения\n     * @param {Object} form - форма сообщения\n     */\n\n  }, {\n    key: \"sendNewComment\",\n    value: function sendNewComment(imageId, form) {\n      return new Promise(function (resolve, reject) {\n        var token = localStorage.getItem(\"social_user_token\");\n        var imgID = form.closest(\"div.modal-body\").querySelector(\"[data-id]\").dataset.id;\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(imageId), {\n          method: 'POST',\n          body: JSON.stringify({\n            comment_text: \"\".concat(form.elements[\"comment\"].value)\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (json) {\n          if (!json.error) {\n            console.log(json.message);\n            form.reset();\n          }\n\n          ;\n          return json;\n        }).then(function (json) {\n          imageService.getInfo(imgID).then(function (data) {\n            imageModal.clearModal();\n            imageModal.setBaseInfo(data);\n            imageModal.setComments(data);\n          }).catch(function (error) {\n            console.log(error);\n          });\n          return json;\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error.message);\n        });\n      });\n    }\n  }, {\n    key: \"deleteComment\",\n\n    /**\n     * deleteComment - метод удаления коментария\n     * @param {string} comId - идентификатор коментария\n     * @param {string} pictureId - идентефикатор изображения\n     */\n    value: function deleteComment(comId, pictureId) {\n      return new Promise(function (resolve, reject) {\n        var token = localStorage.getItem(\"social_user_token\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(comId), {\n          method: 'DELETE',\n          body: JSON.stringify({\n            image_id: \"\".concat(pictureId)\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (json) {\n          console.log(json.message);\n          return json;\n        }).then(function (json) {\n          imageService.getInfo(pictureId).then(function (data) {\n            imageModal.clearModal();\n            imageModal.setBaseInfo(data);\n            imageModal.setComments(data);\n          }).catch(function (error) {\n            console.log(error);\n          });\n          return json;\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error.message);\n        });\n      });\n    }\n  }, {\n    key: \"editComment\",\n\n    /**\n     * editComment- редактирование коментария\n     * @param {*} comId - идентефикатор кометария\n     * @param {*} form - форма с кометаием под изображением\n     */\n    value: function editComment(comId, form) {\n      return new Promise(function (resolve, reject) {\n        var token = localStorage.getItem(\"social_user_token\");\n        var imgID = form.closest(\"div.modal-body\").querySelector(\"[data-id]\").dataset.id;\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(comId), {\n          method: 'PUT',\n          body: JSON.stringify({\n            comment_text: \"\".concat(form.elements[\"UserMessage\"].value)\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (json) {\n          if (!json.error) {\n            console.log(json.message);\n            form.reset();\n            form.classList.toggle(\"d-none\");\n          }\n\n          ;\n          return json;\n        }).then(function (json) {\n          imageService.getInfo(imgID).then(function (data) {\n            imageModal.clearModal();\n            imageModal.setBaseInfo(data);\n            imageModal.setComments(data);\n          }).catch(function (error) {\n            console.log(error);\n          });\n          return json;\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error.message);\n        });\n      });\n    }\n  }]);\n\n  return UserService;\n}();\n\n//# sourceURL=webpack:///./js/services/user.js?");

/***/ }),

/***/ "./js/ui/image.js":
/*!************************!*\
  !*** ./js/ui/image.js ***!
  \************************/
/*! exports provided: ImageUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageUI\", function() { return ImageUI; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n *  класс обратотки изображений\n */\nvar ImageUI =\n/*#__PURE__*/\nfunction () {\n  function ImageUI() {\n    _classCallCheck(this, ImageUI);\n\n    this._imagesContainer = document.querySelector(\".images-wrap .row\");\n  }\n  /**\n   * вставка изображения в разметку\n   * @param {file} image - изображение \n   */\n\n\n  _createClass(ImageUI, [{\n    key: \"addImage\",\n    value: function addImage(image) {\n      var template = ImageUI._imageTemplate(image);\n\n      this._imagesContainer.insertAdjacentHTML(\"afterbegin\", template);\n    } // removeImage(id) {\n    // }\n\n    /**\n     * очистка разметки\n     */\n\n  }, {\n    key: \"clearContainer\",\n    value: function clearContainer() {\n      this._imagesContainer.innerHTML = \"\";\n    }\n    /**\n     * создание разметки для дальнейшего вывода изображения\n     * @param {string} url -адресс\n     * @param {object} views - количество просмотров\n     * @param {object} likes количество лайков\n     * @param {string} _id идентификатор  \n     */\n\n  }], [{\n    key: \"_imageTemplate\",\n    value: function _imageTemplate(_ref) {\n      var url = _ref.url,\n          views = _ref.views,\n          likes = _ref.likes,\n          _id = _ref._id;\n      return \"\\n        <div class=\\\"col-4 col\\\">\\n            <div class=\\\"img-wrap\\\" data-img-id=\\\"\".concat(_id, \"\\\">\\n                <img src=\\\"\").concat(url, \"\\\" alt=\\\"\\\">\\n                <div class=\\\"on-hover d-flex flex-column justify-content-between\\\">\\n                    <div class=\\\"remove-wrap d-flex\\\">\\n                        <i class=\\\"fas fa-trash-alt ml-auto\\\"></i>\\n                    </div>\\n\\n                    <div class=\\\"img-info d-flex align-items-center\\\">\\n                        <span class=\\\"views-count d-flex align-items-center\\\">\\n                            <i class=\\\"fas fa-eye\\\"></i>\\n                            \").concat(views.length, \"\\n                        </span>\\n                        <span class=\\\"likes-count d-flex align-items-center ml-5\\\">\\n                            <i class=\\\"fas fa-thumbs-up\\\"></i>\\n                            \").concat(likes.length, \"\\n                        </span>\\n                        \\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n        <!-- /.col-4 col -->\\n        \");\n    }\n  }]);\n\n  return ImageUI;\n}();\n\n//# sourceURL=webpack:///./js/ui/image.js?");

/***/ }),

/***/ "./js/ui/imageModal.js":
/*!*****************************!*\
  !*** ./js/ui/imageModal.js ***!
  \*****************************/
/*! exports provided: ImageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageModal\", function() { return ImageModal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * ImageModal - класс обработки данных изображения и выведения их в модальное окно\r\n */\nvar ImageModal =\n/*#__PURE__*/\nfunction () {\n  function ImageModal() {\n    _classCallCheck(this, ImageModal);\n\n    this._imageInfoContainer = document.querySelector(\"#imageModal .current-image-info\");\n    this._imgTag = document.querySelector(\".current-image img\");\n    this._commentContainer = document.querySelector(\".current-image-comments-wrap\");\n    this._loader = document.getElementById(\"loading\");\n  }\n  /**\r\n   * renderInfo - иницыализирует все методы класса\r\n   * @param {Object} image - совокупная информация о картинке\r\n   */\n\n\n  _createClass(ImageModal, [{\n    key: \"renderInfo\",\n    value: function renderInfo(image) {\n      this.clearModal();\n      this.setBaseInfo(image);\n      this.setImg(image);\n      this.setComments(image);\n      this.loaderToggle();\n    }\n  }, {\n    key: \"loaderToggle\",\n    value: function loaderToggle() {\n      this._loader.classList.toggle(\"hidden\");\n    }\n    /**\r\n     * setBaseInfo - заполнение дынных верхнего информационного окна картинки в модальном разделе\r\n     * @param {Object} image - изображение\r\n     */\n\n  }, {\n    key: \"setBaseInfo\",\n    value: function setBaseInfo(image) {\n      var template = ImageModal._basicInfoTemplate(image);\n\n      this._imageInfoContainer.insertAdjacentHTML(\"afterbegin\", template);\n    }\n    /**\r\n     * setImg -  вставка изображение в макет окна\r\n     * @param {addres} url  - серверный адресс изображения\r\n     */\n\n  }, {\n    key: \"setImg\",\n    value: function setImg(_ref) {\n      var url = _ref.url,\n          _id = _ref._id;\n      this._imgTag.src = url;\n      this._imgTag.dataset.id = _id;\n    }\n  }, {\n    key: \"setComments\",\n    value: function setComments(_ref2) {\n      var comments = _ref2.comments,\n          owner = _ref2.owner;\n      var template = \"\";\n      comments.forEach(function (comment) {\n        return template += ImageModal._commentTemplate(comment, owner);\n      });\n\n      this._commentContainer.insertAdjacentHTML(\"afterbegin\", template);\n    }\n    /**\r\n     * clearModal - очистка информации о изображении модального раздела\r\n     */\n\n  }, {\n    key: \"clearModal\",\n    value: function clearModal() {\n      this._imageInfoContainer.innerHTML = \"\";\n      this._commentContainer.innerHTML = \"\";\n    }\n    /**\r\n     * _commentTemplate - вставка отзывов\r\n     * @param {object} param0  - информация о картинке\r\n     * @param {*} _id - идентификатор\r\n     */\n\n  }], [{\n    key: \"_commentTemplate\",\n    value: function _commentTemplate(_ref3, _ref4) {\n      var owner = _ref3.owner,\n          avatar = _ref3.avatar,\n          full_name = _ref3.full_name,\n          text = _ref3.text,\n          time_update = _ref3.time_update,\n          id = _ref3._id,\n          sub_comments = _ref3.sub_comments;\n      var _id = _ref4._id;\n      var currentUserId = localStorage.getItem(\"social_user_id\");\n      var isOwner = currentUserId == owner || currentUserId == _id;\n      return \"\\n        <div class=\\\"comment-item mb-2\\\">\\n            <div class=\\\"comment-item-details d-flex\\\" data-comment-id= \\\"\".concat(id, \"\\\">\\n                <div class=\\\"comment-owner-avatar\\\">\\n                    <img src=\\\"\").concat(avatar, \"\\\" alt=\\\"\\\">\\n                </div>\\n                <!-- /.comment-owner -->\\n                <div class=\\\"comment-item-info d-flex flex-column\\\">\\n                    <h6 class=\\\"font-weight-bold\\\">\").concat(full_name, \"</h6>\\n                    <p>\").concat(text, \"</p>\\n                    <span class=\\\"text-secondary\\\">\").concat(time_update, \"</span>\\n                </div>\\n                <!-- /.comment-item-info -->\\n                <div class=\\\"ml-auto\\\">\\n                    \").concat(isOwner ? '<i class=\"fas fa-edit\"></i> <i class=\"fas fa-trash-alt\"></i>' : '', \"\\n                </div>\\n            </div>\\n            <!-- /.comment-item-details -->\\n            <div class=\\\"sub-comments\\\"></div>\\n            <!-- /.sub-comments -->\\n            <form class=\\\"newMessage d-none\\\">\\n                <div class=\\\"input-group mt-2 mb-1\\\">\\n                    <div class=\\\"input-group-prepend\\\">\\n                        <span class=\\\"input-group-text\\\">Enter new message</span>\\n                    </div>\\n                    <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"UserMessage\\\" placeholder=\\\"Your new message\\\" aria-label=\\\"new_message\\\" aria-describedby=\\\"basic-addon1\\\">\\n                    <div class=\\\"input-group-append\\\">\\n                        <button type=\\\"submit\\\" class=\\\"btn btn-outline-secondary editMessage\\\">Send</button>\\n                    </div>\\n                </div>\\n            </form>\\n        </div>\\n        <!-- /.comment-item -->\\n        \");\n    }\n  }, {\n    key: \"_basicInfoTemplate\",\n    value: function _basicInfoTemplate(_ref5) {\n      var owner = _ref5.owner,\n          views = _ref5.views,\n          likes = _ref5.likes;\n      return \"\\n            <div class=\\\"owner-info d-flex align-items-center\\\">\\n                <div class=\\\"owner-avatar\\\">\\n                    <img src=\\\"\".concat(owner.avatar, \"\\\" alt=\\\"\\\">\\n                </div>\\n                <!-- /.owner-avatar -->\\n                <div class=\\\"d-flex flex-column\\\">\\n                    <span class=\\\"font-weight-bold\\\">\").concat(owner.full_name, \"</span>\\n                    <span class=\\\"text-secondary\\\">\").concat(owner.city, \"</span>\\n                </div>\\n            </div>\\n            <!-- /.owner-info -->\\n            <div class=\\\"current-image-stats d-flex ml-auto\\\">\\n                <div class=\\\"views-count d-flex flex-column align-items-center\\\">\\n                    <i class=\\\"fas fa-eye\\\"></i>\\n                    <span class=\\\"font-weight-bold\\\">\").concat(views.length, \"</span>\\n                </div>\\n                <div class=\\\"likes-count d-flex flex-column align-items-center ml-4\\\">\\n                    <i class=\\\"fas fa-thumbs-up\\\"></i>\\n                    <span class=\\\"font-weight-bold\\\">\").concat(likes.length, \"</span>\\n                </div>\\n            </div>\\n            <!-- /.image-sstatistics -->\\n        \");\n    }\n  }]);\n\n  return ImageModal;\n}();\n\n//# sourceURL=webpack:///./js/ui/imageModal.js?");

/***/ }),

/***/ "./js/ui/searchPanel.js":
/*!******************************!*\
  !*** ./js/ui/searchPanel.js ***!
  \******************************/
/*! exports provided: SearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchPanel\", function() { return SearchPanel; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * SearchPanel -  графическое оформление ответа сервера\r\n */\nvar SearchPanel =\n/*#__PURE__*/\nfunction () {\n  function SearchPanel() {\n    _classCallCheck(this, SearchPanel);\n\n    this._searchResult = document.querySelector(\"div.search-result\");\n  }\n  /**\r\n   * clearPanel -  очистка темплейта и управление видимостью\r\n   */\n\n\n  _createClass(SearchPanel, [{\n    key: \"clearPanel\",\n    value: function clearPanel() {\n      var panel = document.querySelector(\"div.search-result\");\n      this._searchResult.innerHTML = '';\n\n      if (panel.classList.contains('d-none') && document.querySelector(\"input.form-control\").value.length > 2) {\n        panel.classList.toggle('d-none');\n      }\n    }\n    /**\r\n     * setSearchingUserInfo - вставка данных о пользователях в темплейты\r\n     * @param {*} param0 \r\n     */\n\n  }, {\n    key: \"setSearchingUserInfo\",\n    value: function setSearchingUserInfo(_ref) {\n      var full_name = _ref.full_name,\n          city = _ref.city,\n          avatar = _ref.avatar;\n\n      var template = SearchPanel._searchingTemplate(full_name, city, avatar);\n\n      this._searchResult.insertAdjacentHTML(\"afterbegin\", template);\n    }\n    /**\r\n     * noUserMassege *  вывод сообщения о безуспешном поиске\r\n     */\n\n  }, {\n    key: \"noUserMassege\",\n    value: function noUserMassege() {\n      this._searchResult.insertAdjacentHTML(\"afterbegin\", SearchPanel._noUserTemplate());\n    } //Templates\n\n  }], [{\n    key: \"_searchingTemplate\",\n    value: function _searchingTemplate(full_name, city, avatar) {\n      return \"\\n      <div class=\\\"owner-info d-flex align-items-center\\\">\\n         <div class=\\\"owner-avatar\\\">\\n               <img src=\\\"\".concat(avatar, \"\\\" alt=\\\"userFoto\\\">                          \\n         </div>\\n         <!-- /.owner-avatar -->\\n         <div class=\\\"d-flex flex-column user-properties\\\">\\n               <span class=\\\"font-weight-bold searchinUserName\\\">\").concat(full_name, \"</span>\\n               <span class=\\\"searchingUserCity\\\">\").concat(city, \"</span>\\n         </div>\\n      </div>\\n      \");\n    }\n  }, {\n    key: \"_noUserTemplate\",\n    value: function _noUserTemplate() {\n      return \"\\n      <div class=\\\"d-flex flex-column user-properties\\\">\\n        <span class=\\\"font-weight-bold searchinUserName\\\">\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u0441 \\u0443\\u043A\\u0430\\u0437\\u0430\\u043D\\u043D\\u044B\\u043C \\u0438\\u043C\\u0435\\u043D\\u0435\\u043C \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E.</span>\\n      </div>\\n      \";\n    }\n  }]);\n\n  return SearchPanel;\n}();\n\n//# sourceURL=webpack:///./js/ui/searchPanel.js?");

/***/ }),

/***/ "./js/ui/user.js":
/*!***********************!*\
  !*** ./js/ui/user.js ***!
  \***********************/
/*! exports provided: UserUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserUI\", function() { return UserUI; });\n/* harmony import */ var _searchPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchPanel */ \"./js/ui/searchPanel.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar searchPanel = new _searchPanel__WEBPACK_IMPORTED_MODULE_0__[\"SearchPanel\"]();\n/**\n * UserUI - класс отображения информации пользователя\n * \n */\n\nvar UserUI =\n/*#__PURE__*/\nfunction () {\n  /**\n   * конструктор определяющий елементы интерфкйса для вывода информации пользователя\n   */\n  function UserUI() {\n    _classCallCheck(this, UserUI);\n\n    this._cover = document.querySelector(\".user-cover\");\n    this._userAvatar = document.querySelector(\".user-ava\");\n    this._userName = document.querySelector(\".user-name\");\n  }\n  /**\n   * renderUserInfo - метод принимающий ответ сервера, разделяет на компонентыинформацию\n   * для дальнейшей обработки\n   * @param {string} avatar - зашифрованное изображение\n   * @param {file} cover - фон\n   * @param {string} full_name - имя пользователя\n   */\n\n\n  _createClass(UserUI, [{\n    key: \"renderUserInfo\",\n    value: function renderUserInfo(_ref) {\n      var avatar = _ref.avatar,\n          cover = _ref.cover,\n          full_name = _ref.full_name;\n      this.setCover(cover);\n      this.setAvatar(avatar);\n      this.setName(full_name);\n    }\n  }, {\n    key: \"controllerSearchingUserInfo\",\n\n    /**\n     * controllerSearchingUserInfo - контроллер обработки ответа сервера определяющий графическое поведение\n     * после ответа сервера\n     * @param {array} userData - масив объектов с описанием пользователей от ответа сервера \n     */\n    value: function controllerSearchingUserInfo(userData) {\n      if (userData.length > 0) {\n        searchPanel.clearPanel();\n        userData.forEach(function (searchingUserInfo) {\n          return searchPanel.setSearchingUserInfo(searchingUserInfo);\n        });\n      } else {\n        searchPanel.clearPanel();\n        searchPanel.noUserMassege();\n      }\n    }\n  }, {\n    key: \"setCover\",\n\n    /**\n     * setCover - метод замены фона\n     * @param {*} url - путь к изображению (откуда?)\n     */\n    value: function setCover(url) {\n      this._cover.style.background = \"url(\\\"\".concat(url, \"\\\") no-repeat center / cover\");\n    }\n  }, {\n    key: \"setAvatar\",\n\n    /**\n     * setAvatar - метод который изменяет аватар, создает место для отображения\n     * @param {*} url - путь к изображению\n     */\n    value: function setAvatar(url) {\n      var template = \"<img src=\\\"\".concat(url, \"\\\" alt=\\\"\\\">\");\n      this._userAvatar.innerHTML = \"\";\n\n      this._userAvatar.insertAdjacentHTML(\"afterbegin\", template);\n    }\n  }, {\n    key: \"setName\",\n\n    /**\n     * setName -  вставка имени пользователя на страницу\n     * @param {String} name - имя пользователя\n     */\n    value: function setName(name) {\n      this._userName.textContent = name;\n    }\n  }]);\n\n  return UserUI;\n}();\n\n//# sourceURL=webpack:///./js/ui/user.js?");

/***/ })

/******/ });