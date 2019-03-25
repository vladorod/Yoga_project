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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  \"use strict\";\n\n  var tabs = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\"),\n      modal = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\"),\n      phoneMask = __webpack_require__(/*! ./modules/phoneMask.js */ \"./src/modules/phoneMask.js\"),\n      form = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\"),\n      slider = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\"),\n      calc = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\"),\n      timer = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n\n  tabs();\n  modal();\n  phoneMask();\n  form();\n  slider();\n  calc();\n  timer();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function calc() {\n  var presons = document.querySelectorAll('.counter-block-input')[0],\n      restDays = document.querySelectorAll('.counter-block-input')[1],\n      place = document.querySelector('#select'),\n      totalValue = document.querySelector('#total'),\n      presonsSum = 0,\n      daysSum = 0,\n      total = 0;\n  totalValue.innerHTML = 0;\n  presons.addEventListener('input', function (e) {\n    if (this.value != \"\") {\n      this.value = this.value.replace(/\\D/g, \"\");\n      presonsSum = this.value;\n      total = (daysSum + presonsSum) * 4000;\n\n      if (restDays.value != '') {\n        totalValue.innerHTML = total;\n      } else totalValue.innerHTML = 0;\n    } else totalValue.innerHTML = 0;\n  });\n  restDays.addEventListener('input', function (e) {\n    if (this.value != \"\") {\n      this.value = this.value.replace(/\\D/g, \"\");\n      daysSum = this.value;\n      total = (daysSum + presonsSum) * 4000;\n\n      if (presons.value != '') {\n        totalValue.innerHTML = total;\n      } else totalValue.innerHTML = 0;\n    } else totalValue.innerHTML = 0;\n  });\n  place.addEventListener('change', function () {\n    if (presons.value !== \"\" && restDays.value !== \"\") {\n      var a = total;\n      totalValue.innerHTML = a * this.options[this.selectedIndex].value;\n    }\n  });\n}\n\nmodule.export = calc();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function form() {\n  var form1 = document.querySelector('.main-form'),\n      form2 = document.querySelector('#form'),\n      form1AnimEL = document.querySelector('.popup'),\n      form2AnimEl = document.querySelector('.contact');\n  sendForm(form1, \"server.php\");\n  sendForm(form2, \"server.php\", form2AnimEl);\n\n  function sendForm(form) {\n    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'http://127.0.0.1:3000/call';\n    var AnimationEl = arguments.length > 2 ? arguments[2] : undefined;\n    var massage = {\n      loading: 'Загрузка...',\n      success: 'Спасибо! Скоро мы с вами свяжимся!',\n      failure: 'Что-то пошло не так...'\n    };\n    var input = form.querySelectorAll('input'),\n        statusMassage = document.createElement('div');\n    statusMassage.classList.add('status');\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      form.appendChild(statusMassage);\n      console.log(form.name);\n      var fromData = new FormData(form);\n      var obj = {};\n      fromData.forEach(function (value, key) {\n        obj[key] = value;\n      });\n      var json = JSON.stringify(obj);\n      postFrom(json, url).then(function () {\n        statusMassage.innerHTML = massage.loading;\n        statusMassage.style.cssText = \"color: white;\";\n      }).then(function () {\n        statusMassage.innerHTML = massage.success;\n        statusMassage.style.cssText = \"color: white;\";\n      }).catch(function () {\n        statusMassage.innerHTML = massage.failure;\n        statusMassage.style.cssText = \"color: white;\";\n        animateCSS(AnimationEl, 'shake');\n      }).then(clearInputAll);\n    });\n  }\n\n  ;\n\n  function postFrom(data, url) {\n    return new Promise(function (resolve, reject) {\n      var req = new XMLHttpRequest();\n      req.open(\"POST\", url);\n      req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n      console.log(req.readyState + ' ' + req.status);\n\n      req.onreadystatechange = function () {\n        console.log(req.readyState + ' ' + req.status);\n\n        if (req.readyState < 4) {\n          resolve();\n        } else if (req.readyState === 4) {\n          if (req.status == 200 && req.status < 5) {\n            resolve();\n          } else reject();\n        } else reject();\n      };\n\n      req.send(data);\n    });\n  } //end \n\n\n  function clearInputAll() {\n    var input = document.querySelectorAll('input');\n\n    for (var i = 0; i < input.length; i++) {\n      input[i].value = \"\";\n    }\n  }\n\n  function animateCSS(element, animationName, callback) {\n    var node = element;\n    node.classList.add('animated', animationName);\n\n    function handleAnimationEnd() {\n      node.classList.remove('animated', animationName);\n      node.removeEventListener('animationend', handleAnimationEnd);\n      if (typeof callback === 'function') callback();\n    }\n\n    node.addEventListener('animationend', handleAnimationEnd);\n  }\n}\n\nmodule.export = form();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function modal() {\n  var more = document.querySelector('.more'),\n      overlay = document.querySelector('.overlay'),\n      close = document.querySelector('.popup-close');\n  more.addEventListener('click', function () {\n    showModal(true);\n  }); // button modal in tab\n\n  var descriptionBtn = document.querySelectorAll('.description-btn');\n  descriptionBtn.forEach(function (item, i, arr) {\n    arr[i].addEventListener('click', function () {\n      showModal(true);\n    });\n  });\n\n  function showModal(openOrClose) {\n    if (openOrClose) {\n      document.body.style.overflow = 'hidden';\n      overlay.style.display = 'block';\n      more.classList.add('more-splash');\n    } else {\n      overlay.style.display = 'none';\n      more.classList.remove('more-splash');\n      document.body.style.overflow = '';\n    }\n\n    close.addEventListener('click', function () {\n      showModal(false);\n    });\n  }\n}\n\nmodule.export = modal();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/phoneMask.js":
/*!**********************************!*\
  !*** ./src/modules/phoneMask.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function phoneMask() {\n  var inputPhoneAll = document.querySelectorAll(\"input[type='tel']\");\n  inputPhoneAll[0].value = \"\";\n  inputPhoneAll[1].value = \"\";\n\n  function setCursorPosition(pos, elem) {\n    elem.focus();\n    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse(true);\n      range.moveEnd(\"character\", pos);\n      range.moveStart(\"character\", pos);\n      range.select();\n    }\n  }\n\n  inputPhoneAll[0].addEventListener(\"input\", function (e) {\n    inputPhoneAll[0].defaultValue = \"+7(   )   -  -  \";\n    var matrix = inputPhoneAll[0].defaultValue,\n        i = 0,\n        def = matrix.replace(/\\D/g, \"\"),\n        val = inputPhoneAll[0].value.replace(/\\D/g, \"\");\n    def.length >= val.length && (val = def);\n    matrix = matrix.replace(/[ \\d]/g, function (a) {\n      return val.charAt(i++) || \" \";\n    });\n\n    if (val.length < 12) {\n      inputPhoneAll[0].value = matrix;\n      i = matrix.lastIndexOf(val.substr(-1));\n      i < matrix.length && matrix != inputPhoneAll[0].defaultValue ? i++ : i = matrix.indexOf(\" \");\n      setCursorPosition(i, inputPhoneAll[0]);\n    } else {\n      inputPhoneAll[0].value = matrix.limit(16);\n    }\n  }, false);\n  inputPhoneAll[1].addEventListener(\"input\", function (e) {\n    inputPhoneAll[1].defaultValue = \"+7(   )   -  -  \";\n    var matrix = inputPhoneAll[1].defaultValue,\n        i = 0,\n        def = matrix.replace(/\\D/g, \"\"),\n        val = inputPhoneAll[1].value.replace(/\\D/g, \"\");\n    def.length >= val.length && (val = def);\n    matrix = matrix.replace(/[ \\d]/g, function (a) {\n      return val.charAt(i++) || \" \";\n    });\n\n    if (val.length < 12) {\n      inputPhoneAll[1].value = matrix;\n      i = matrix.lastIndexOf(val.substr(-1));\n      i < matrix.length && matrix != inputPhoneAll[1].defaultValue ? i++ : i = matrix.indexOf(\" \");\n      setCursorPosition(i, inputPhoneAll[1]);\n    } else {\n      inputPhoneAll[1].value = matrix.limit(16);\n    }\n  }, false);\n\n  function limit() {\n    String.prototype.limit = function (num) {\n      var arr = this.toString(),\n          arrNew = [];\n\n      for (var i = 0; i < num; i++) {\n        arrNew.push(arr[i]);\n      }\n\n      return arrNew.join('');\n    };\n  }\n}\n\nmodule.export = phoneMask();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/phoneMask.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function slider() {\n  var sliderindex = 1,\n      slides = document.querySelectorAll('.slider-item'),\n      prev = document.querySelector('.prev'),\n      next = document.querySelector('.next'),\n      dotsWrap = document.querySelector('.slider-dots'),\n      dots = document.querySelectorAll('.dot');\n  showSlides(sliderindex);\n\n  function showSlides(n) {\n    if (n > slides.length) {\n      sliderindex = 1;\n    } else if (n < 1) {\n      sliderindex = slides.length;\n    }\n\n    slides.forEach(function (item) {\n      item.style.display = 'none';\n    });\n    dots.forEach(function (item) {\n      item.classList.remove('dot-active');\n    });\n    slides[sliderindex - 1].style.display = 'block';\n    dots[sliderindex - 1].classList.add('dot-active');\n  }\n\n  function plusSlides(n) {\n    showSlides(sliderindex += n);\n  }\n\n  function currentSlides(n) {\n    showSlides(sliderindex = n);\n  }\n\n  prev.addEventListener('click', function () {\n    plusSlides(-1);\n  });\n  next.addEventListener('click', function () {\n    plusSlides(1);\n  });\n  dotsWrap.addEventListener('click', function (e) {\n    for (var i = 0; i < dots.length + 1; i++) {\n      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {\n        currentSlides(i);\n      }\n    }\n  });\n}\n\nmodule.export = slider();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function tabs() {\n  var tab = document.querySelectorAll('.info-header-tab'),\n      info = document.querySelector('.info-header'),\n      tabContent = document.querySelectorAll('.info-tabcontent');\n\n  function hideTabContent(a) {\n    for (var i = a; i < tabContent.length; i++) {\n      tabContent[i].classList.remove('show');\n      tabContent[i].classList.add('hide');\n    }\n  }\n\n  function showTabContent(b) {\n    if (tabContent[b].classList.contains('hide')) {\n      tabContent[b].classList.remove('hide');\n      tabContent[b].classList.add('show');\n    }\n  }\n\n  hideTabContent(1);\n  info.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target && target.classList.contains('info-header-tab')) {\n      for (var i = 0; i < tab.length; i++) {\n        if (target == tab[i]) {\n          hideTabContent(0);\n          showTabContent(i);\n          break;\n        }\n      }\n    }\n  });\n}\n\n;\nmodule.export = tabs();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {function timer() {\n  var deadline = \"2019-03-30\";\n\n  function getTimeRemaining(endtime) {\n    var t = Date.parse(endtime) - Date.parse(new Date()),\n        s = Math.floor(t / 1000 % 60),\n        m = Math.floor(t / 1000 / 60 % 60),\n        h = Math.floor(t / (1000 * 60 * 60));\n    return {\n      \"total\": t,\n      \"hours\": h,\n      \"minutes\": m,\n      \"seconds\": s\n    };\n  }\n\n  ;\n\n  function setClock(id, endtime) {\n    var timer = document.getElementById(id),\n        hours = timer.querySelector('.hours'),\n        minutes = timer.querySelector('.minutes'),\n        second = timer.querySelector('.seconds'),\n        timeInterval = setInterval(updateClock, 1000);\n\n    function updateClock() {\n      var t = getTimeRemaining(endtime);\n      hours.textContent = addZero(t.hours);\n      minutes.textContent = addZero(t.minutes);\n      second.textContent = addZero(t.seconds);\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n        hours.textContent = \"00\";\n        minutes.textContent = \"00\";\n        second.textContent = \"00\";\n      }\n\n      ;\n    }\n\n    ;\n  }\n\n  ;\n\n  function addZero(num) {\n    if (num < 10) {\n      return num = '0' + num;\n    } else return num;\n  }\n\n  setClock(\"timer\", deadline);\n}\n\nmodule.export = timer();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/modules/timer.js?");

/***/ })

/******/ });