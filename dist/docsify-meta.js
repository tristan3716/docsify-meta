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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    const metaFieldName = 'META FIELD';
    const head = Docsify.dom.find('head');

    let $metaFieldStart = null;
    let $metaFieldEnd = null;

    let _$contentTitle = null;
    
    const isArray = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object Array]';
    }
    const isRegExp = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object RegExp]';
    }
    const isString = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object String]';
    }

    const createMetaTag = (content, name = null) => {
        const meta = Docsify.dom.create('meta');
        if (name) {
            meta.name = name;
        }
        if (isArray(content)) {
            meta.content = content.join(' ');
        } else {
            meta.content = content;
        }
    
        head.insertBefore(meta, $metaFieldEnd);
    }

    const createMetaTitle = () => {
        const title = _$contentTitle || Docsify.dom.$.title;
        const titleNode = Docsify.dom.find('head title');
        titleNode.textContent = title;

        head.removeChild(titleNode);
        head.insertBefore(titleNode, $metaFieldStart);
    }

    const createMetaDescription = (content) => {
        let copied = content;
        copied = copied.replace(/(\r\n|\n)+/g, '\r\n');
        copied = copied.replace(/#+ /g, '');
        copied = copied.replace(/<[^>]*>/g, '');

        copied = copied.slice(0, 160);

        createMetaTag(copied, 'description');
    }

    const keyword = __webpack_require__(1);

    const getContentTitle = (content) => {
        const title = /^(.*)(?:\r\n|\n)/g.exec(content);
        if (title && title[1]) {
            title[1] = title[1].replace(/# /g, '');
            return title[1];
        } else {
            return null;
        }
    }

    const removeMetaDatas = () => {
        while ($metaFieldStart.nextSibling !== $metaFieldEnd) {
            head.removeChild($metaFieldStart.nextSibling);
        }
    }

    const CONFIG = {
        aggressiveTitle: false,
        author: false,
        keyword: true,
        description: true,
        keywordPattern: /keyword: *(.*)(?:\r\n|\n)*$/g, // RegExp or String
    };

    var install = (hook, vm) => {
        let opt = vm.config.meta || CONFIG;

        CONFIG.author = opt.author || CONFIG.author;
        if (!isString(CONFIG.author)) {
            CONFIG.author = false;
        }
        CONFIG.aggressiveTitle = opt.aggressiveTitle || CONFIG.aggressiveTitle;
        CONFIG.description = opt.description || CONFIG.description;
        CONFIG.keywordPattern = opt.keywordPattern || CONFIG.keywordPattern;
        CONFIG.keyword = CONFIG.keywordPattern ? true : (opt.keyword || CONFIG.keyword);
        if (CONFIG.keyword 
            && !isRegExp(CONFIG.keywordPattern)
            && !isString(CONFIG.keywordPattern)) {
            CONFIG.keyword = false;
        }

        hook.mounted(() => {
            $metaFieldStart = document.createComment(metaFieldName);
            Docsify.dom.find('head').appendChild($metaFieldStart);

            $metaFieldEnd = document.createComment(metaFieldName);
            Docsify.dom.find('head').appendChild($metaFieldEnd);

            const metaDescription = Docsify.dom.find('meta[name="description"]');
        
            if (metaDescription) {
                Docsify.dom.find('head').removeChild(metaDescription);
            }
        });

        hook.beforeEach((content) => {
            removeMetaDatas();
            
            if (CONFIG.aggressiveTitle) {
                _$contentTitle = getContentTitle(content);
            }
            if (CONFIG.keyword) {
                keyword.createMetaKeywords(content, CONFIG.keywordPattern, createMetaTag);
            }

            if (CONFIG.description) {
                createMetaDescription(content);
            }
        });

        hook.doneEach(() => {
            if (CONFIG.aggressiveTitle) {
                createMetaTitle();
            }

            if (CONFIG.author) {
                createMetaTag(CONFIG.author, 'author');
            }
        })
    };
  
    $docsify.plugins = [].concat(install, $docsify.plugins);
}());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    cloneRegExp: ( regex ) => {
        if ('[object RegExp]' === Object.prototype.toString.call(regex)) {
            return new RegExp(regex.source, regex.flags);
        } else {
            const a = regex.split("/");
    
            flags = a.pop(); a.shift();
            pattern = a.join("/");
    
            return new RegExp(pattern, flags);
        }
    },
    createMetaKeywords: function(content, keywordPattern, callback) {
        setTimeout(() => {
            const regex = this.cloneRegExp(keywordPattern);
            
            keywordRaw = regex.exec(content);
            keywords = [];
            
            if (keywordRaw && keywordRaw[1]) {
                for (let keyword of keywordRaw[1].split(",")) {
                    keyword = keyword.trim();
                    keywords.push(keyword);
                }
                callback(keywords, 'keyword');
            }
        }, 0);
    }
}

/***/ })
/******/ ]);