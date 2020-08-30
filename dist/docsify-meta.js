(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["docsify-meta"] = factory();
	else
		root["docsify-meta"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var metaFieldName = 'META FIELD';
  var find = Docsify.dom.find;
  var head = find('head');
  var $metaFieldStart = null;
  var $metaFieldEnd = null;
  var _$contentTitle = null;

  var isArray = function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  var isRegExp = function isRegExp(arg) {
    return Object.prototype.toString.call(arg) === '[object RegExp]';
  };

  var isString = function isString(arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  var cloneRegExp = function cloneRegExp(regex) {
    if (isRegExp(regex)) {
      return new RegExp(regex.source, regex.flags);
    } else {
      var a = regex.split('/');
      var flags = a.pop();
      a.shift();
      var pattern = a.join('/');
      return new RegExp(pattern, flags);
    }
  };

  var createMetaKeywords = function createMetaKeywords(content, keywordPattern) {
    setTimeout(function () {
      var regex = cloneRegExp(keywordPattern);
      var keywordRaw = regex.exec(content);
      var keywords = [];

      if (keywordRaw && keywordRaw[1]) {
        var _iterator = _createForOfIteratorHelper(keywordRaw[1].split(',')),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var keyword = _step.value;
            keyword = keyword.trim();
            keywords.push(keyword);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        createMetaTag(keywords, 'keyword');
      }
    }, 0);
  };

  var createMetaTag = function createMetaTag(content) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var meta = Docsify.dom.create('meta');

    if (name) {
      meta.name = name;
    }

    if (isArray(content)) {
      meta.content = content.join(' ');
    } else {
      meta.content = content;
    }

    head.insertBefore(meta, $metaFieldEnd);
  };

  var createMetaTitle = function createMetaTitle() {
    var title = _$contentTitle || Docsify.dom.$.title;
    var titleNode = find('head title');
    titleNode.textContent = title;
    head.removeChild(titleNode);
    head.insertBefore(titleNode, $metaFieldStart);
  };

  var createMetaDescription = function createMetaDescription(content) {
    var copied = content;
    copied = copied.replace(/(\r\n|\n)+/g, '\r\n');
    copied = copied.replace(/#+ /g, '');
    copied = copied.replace(/<[^>]*>/g, '');
    copied = copied.slice(0, 160);
    createMetaTag(copied, 'description');
  };

  var getContentTitle = function getContentTitle(content) {
    var title = /^(.*)(?:\r\n|\n)/g.exec(content);

    if (title && title[1]) {
      title[1] = title[1].replace(/# /g, '');
      return title[1];
    } else {
      return null;
    }
  };

  var removeMetaDatas = function removeMetaDatas() {
    while ($metaFieldStart.nextSibling !== $metaFieldEnd) {
      head.removeChild($metaFieldStart.nextSibling);
    }
  };

  var CONFIG = {
    aggressiveTitle: false,
    author: false,
    keyword: true,
    description: true,
    keywordPattern: /keyword: *(.*)(?:\r\n|\n)*$/g // RegExp or String

  };

  var install = function install(hook, vm) {
    var opt = vm.config.meta || CONFIG;
    CONFIG.author = opt.author || CONFIG.author;

    if (!isString(CONFIG.author)) {
      CONFIG.author = false;
    }

    CONFIG.aggressiveTitle = opt.aggressiveTitle || CONFIG.aggressiveTitle;
    CONFIG.description = opt.description || CONFIG.description;
    CONFIG.keywordPattern = opt.keywordPattern || CONFIG.keywordPattern;
    CONFIG.keyword = CONFIG.keywordPattern ? true : opt.keyword || CONFIG.keyword;

    if (CONFIG.keyword && !isRegExp(CONFIG.keywordPattern) && !isString(CONFIG.keywordPattern)) {
      CONFIG.keyword = false;
    }

    hook.mounted(function () {
      $metaFieldStart = document.createComment(metaFieldName);
      find('head').appendChild($metaFieldStart);
      $metaFieldEnd = document.createComment(metaFieldName);
      find('head').appendChild($metaFieldEnd);
      var metaDescription = find('meta[name="description"]');

      if (metaDescription) {
        find('head').removeChild(metaDescription);
      }
    });
    hook.beforeEach(function (content) {
      removeMetaDatas();

      if (CONFIG.aggressiveTitle) {
        _$contentTitle = getContentTitle(content);
      }

      if (CONFIG.keyword) {
        createMetaKeywords(content, CONFIG.keywordPattern);
      }

      if (CONFIG.description) {
        createMetaDescription(content);
      }
    });
    hook.doneEach(function () {
      if (CONFIG.aggressiveTitle) {
        createMetaTitle();
      }

      if (CONFIG.author) {
        createMetaTag(CONFIG.author, 'author');
      }
    });
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);
})();

/***/ })
/******/ ]);
});