require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__code__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__type__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__type__["b"]; });





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql_constant__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql_constant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_constant__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__md5_constant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__express_constant__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__express_constant__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__express_constant__["b"]; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grqphql_util__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__grqphql_util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ldapjs_util__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ldapjs_util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md5_util__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_util__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__file_util__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__file_util__["b"]; });






/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export STATIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATIC_ARR; });
/* unused harmony export STATIC_VIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STATIC_I18N_TABLE_COLUMNS; });
/* unused harmony export STATIC_I18N_TABLE_TITLES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STATIC_I18N_DOWNLOAD_TYPE; });
var STATIC;
(function (STATIC) {
    STATIC[STATIC["I18N"] = 0] = "I18N";
    STATIC[STATIC["IMG"] = 1] = "IMG";
    STATIC[STATIC["ICON"] = 2] = "ICON";
    STATIC[STATIC["SKIN"] = 3] = "SKIN";
    STATIC[STATIC["DIST"] = 4] = "DIST";
})(STATIC || (STATIC = {}));
var STATIC_ARR = [
    STATIC.I18N,
    STATIC.IMG,
    STATIC.ICON,
    STATIC.SKIN,
    STATIC.DIST
];
var STATIC_VIEW = [{
        label: '多语言',
        value: STATIC.I18N,
        color: 'blue300'
    }, {
        label: '图片',
        value: STATIC.IMG,
        color: 'red300'
    }, {
        label: '图标',
        value: STATIC.ICON,
        color: 'deepOrange300'
    }, {
        label: '皮肤',
        value: STATIC.SKIN,
        color: 'lightGreen300'
    }, {
        label: '前端包',
        value: STATIC.DIST,
        color: 'cyan300'
    }];
var STATIC_I18N_TABLE_COLUMNS = [
    'resource',
    'key',
    'version',
    'length',
    'position',
    'remark',
    'chinese',
    'english',
    'russian',
    'estonia',
    'bulgarian',
    'hungarian',
    'greek',
    'german',
    'italian',
    'czech',
    'slovak',
    'france',
    'polish',
    'dutch',
    'portuguese',
    'spanish',
    'romanian',
    'danish',
    'swedish',
    'norwegian',
    'finnish',
    'croatian',
    'slovenian',
    'serbian',
    'turkish',
    'korean',
    'traditionalChinese',
    'thai',
    'vietnamese',
    'japanese',
    'hebrew',
    'latvian',
    'lithuanian',
    'brazilianPortuguese',
    'arabic',
    'persian'
];
var STATIC_I18N_TABLE_TITLES = [
    '来源',
    '关键信息',
    '版本',
    '长度',
    '位置',
    '备注',
    '简体中文',
    '英文',
    '俄语',
    '爱沙尼亚语',
    '保加利亚语',
    '匈牙利语',
    '希腊语',
    '德语',
    '意大利语',
    '捷克语',
    '斯洛伐克语',
    '法语',
    '波兰语',
    '荷兰语',
    '葡萄牙语',
    '西班牙语',
    '罗马尼亚语',
    '丹麦语',
    '瑞典语',
    '挪威语',
    '芬兰语',
    '克罗地亚语',
    '斯洛文尼亚语',
    '塞尔维亚语',
    '土耳其语',
    '韩语',
    '繁体中文',
    '泰语',
    '越南语',
    '日语',
    '希伯来语',
    '拉脱维亚语',
    '立陶宛语',
    '巴西葡萄牙语',
    '阿拉伯语',
    '波斯语'
];
var STATIC_I18N_DOWNLOAD_TYPE = [{
        label: 'xlsx',
        value: 'xlsx'
    }, {
        label: 'json',
        value: 'json'
    }, {
        label: 'properties',
        value: 'properties'
    }];


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_model__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_model__ = __webpack_require__(29);



/* harmony default export */ __webpack_exports__["a"] = ({
    User: __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* default */],
    Project: __WEBPACK_IMPORTED_MODULE_1__project_model__["a" /* default */],
    I18n: __WEBPACK_IMPORTED_MODULE_2__i18n_model__["a" /* default */]
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    autoIndex: false,
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    },
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    },
    id: false,
    minimize: false
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const parseArgs = __webpack_require__(48);

const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
});

module.exports = {
  // Web前端请求地址(注意开发态和生产态端口参考.env文件)
  proxyHttp: 'http://localhost:4000',

  head: {
    title: "nuxt-type-template",
    meta: [{ charset: "utf-8" }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Nuxt.js project"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [{
    src: '~/assets/font-awesome-4.7.0/css/font-awesome.min.css'
  }, {
    src: '~/assets/style/scrollbar.css'
  }, {
    src: '~/assets/style/transition.css'
  }],
  build: {
    vendor: ['muse-ui', 'lokka', 'lokka-transport-http', 'muse-ui-toast/dist/muse-ui-toast.common', 'vuedraggable', 'jsencrypt']
  },

  plugins: ['~/plugins/museui', '~/plugins/upload', { src: '~/plugins/jsencrypt.ts', ssr: false }],

  modules: ["~/modules/typescript.js"],

  router: {
    middleware: 'userAuth'
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_xlsx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants_type__ = __webpack_require__(3);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};





var TRUE = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].ERROR;
var TEMP_EXCEL = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* EXPRESS */].TEMP_EXCEL, RES = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* EXPRESS */].RES;
var STATIC_I18N_TABLE_LANGUAGE_COLUMNS = __WEBPACK_IMPORTED_MODULE_3__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].slice(7);
/* harmony default export */ __webpack_exports__["a"] = ({
    validateExcelFormat: function (i18nSheet) {
        if (i18nSheet.length <= 1) {
            return {
                code: ERROR,
                msg: RES.EXCEL_SHEET_EMPTY,
                data: null
            };
        }
        var caption = i18nSheet[0];
        if (caption.length < TEMP_EXCEL.CAPTION.length) {
            return {
                code: ERROR,
                msg: RES.EXCEL_CAPTION_ERR,
                data: null
            };
        }
        var resCaption = '';
        var CAPTION = TEMP_EXCEL.CAPTION;
        for (var index = 0, len = CAPTION.length; index < len; index++) {
            var cap = CAPTION[index].trim();
            if (cap !== caption[index].trim()) {
                resCaption = "excel\u8868\u5934\u4FE1\u606F\u9519\u8BEF\uFF1A\u7B2C" + (index + 1) + "\u5217\u7684\u5185\u5BB9\u9519\u8BEF, \u5E94\u4E3A\"" + cap + "\"";
                break;
            }
        }
        if (resCaption) {
            return {
                code: ERROR,
                msg: resCaption,
                data: null
            };
        }
        return {
            code: TRUE,
            msg: '',
            data: null
        };
    },
    processUploadExcel: function (file) {
        var xlsxSheets = __WEBPACK_IMPORTED_MODULE_2_node_xlsx___default.a.parse(file.multExcel.path);
        var i18nSheet = xlsxSheets[0].data;
        var result = this.validateExcelFormat(i18nSheet);
        if (result.code === ERROR) {
            return result;
        }
        i18nSheet.shift();
        return __assign({}, result, { data: i18nSheet });
    },
    transformExcelToArray: function (i18nExcelData, i18nStoreData, type) {
        var e_1, _a;
        var excelData = [];
        var VERSION = 'version';
        try {
            for (var i18nExcelData_1 = __values(i18nExcelData), i18nExcelData_1_1 = i18nExcelData_1.next(); !i18nExcelData_1_1.done; i18nExcelData_1_1 = i18nExcelData_1.next()) {
                var row = i18nExcelData_1_1.value;
                var excelRowData = {};
                for (var index = 0, len = __WEBPACK_IMPORTED_MODULE_3__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].length; index < len; index++) {
                    var col = row[index];
                    if (!col)
                        continue;
                    var excelRowDataKey = __WEBPACK_IMPORTED_MODULE_3__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */][index];
                    if (type === __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* EXPRESS_UPLOAD_TYPE */].COVER) {
                        if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS.includes(excelRowDataKey)) {
                            return {
                                code: ERROR,
                                msg: RES.UPLOAD_SUB_OTHER_LANG,
                                data: null
                            };
                        }
                    }
                    if (excelRowDataKey === VERSION
                        && col !== i18nStoreData.i18nVersion) {
                        return {
                            code: ERROR,
                            msg: "" + RES.UPLOAD_VERSION_ERR + i18nStoreData.i18nVersion + "\uFF01",
                            data: null
                        };
                    }
                    excelRowData[__WEBPACK_IMPORTED_MODULE_3__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */][index]] = col;
                    excelRowData['version'] = i18nStoreData.i18nVersion;
                }
                if (!Object.keys(excelRowData).length)
                    continue;
                excelData.push(excelRowData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (i18nExcelData_1_1 && !i18nExcelData_1_1.done && (_a = i18nExcelData_1.return)) _a.call(i18nExcelData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (excelData.every(function (i18n) { return !i18n.chinese; })
            || excelData.every(function (i18n) { return !i18n.key; })
            || excelData.some(function (i18n) { return !i18n.key || !i18n.chinese; })) {
            return {
                code: ERROR,
                msg: RES.UPLOAD_DATA_ERR,
                data: null
            };
        }
        return {
            code: TRUE,
            msg: '',
            data: excelData
        };
    },
    processSubReplaceI18nData: function (i18nUploadData, i18nStoreData) {
        var e_2, _a;
        var isTranslated = i18nStoreData.some(function (i18n) {
            var e_3, _a;
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.value;
                    if (!i18n[key])
                        continue;
                    return true;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        });
        var isCompletelyNew = true;
        var _loop_1 = function (i18n) {
            var e_4, _a;
            var foundUploadData = i18nUploadData.find(function (upload) {
                return upload.key === i18n.key && upload.chinese === i18n.chinese;
            });
            if (!foundUploadData)
                return "continue";
            isCompletelyNew = false;
            if (!isTranslated)
                return "continue";
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.value;
                    if (!i18n[key])
                        continue;
                    foundUploadData[key] = i18n[key];
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        try {
            for (var i18nStoreData_1 = __values(i18nStoreData), i18nStoreData_1_1 = i18nStoreData_1.next(); !i18nStoreData_1_1.done; i18nStoreData_1_1 = i18nStoreData_1.next()) {
                var i18n = i18nStoreData_1_1.value;
                _loop_1(i18n);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (i18nStoreData_1_1 && !i18nStoreData_1_1.done && (_a = i18nStoreData_1.return)) _a.call(i18nStoreData_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return isCompletelyNew
            ? {
                code: ERROR,
                msg: RES.UPLOAD_COMPLETE_NEW,
                data: null
            }
            : {
                code: TRUE,
                msg: '',
                data: i18nUploadData
            };
    },
    processPubReplaceI18nData: function (i18nUploadData, i18nStoreData) {
        var uploadErrI18nData = [];
        var _loop_2 = function (i, len) {
            var i18nStore = i18nStoreData[i];
            var index = i18nUploadData.findIndex(function (i18nUpload) { return i18nUpload.key === i18nStore.key; });
            if (index === -1) {
                return "continue";
            }
            var i18nFoundUploadData = i18nUploadData[index];
            i18nFoundUploadData.chinese
                ? i18nFoundUploadData.chinese === i18nStore.chinese
                    ? i18nStoreData[i] = i18nFoundUploadData
                    : uploadErrI18nData.push(i18nFoundUploadData)
                : uploadErrI18nData.push(i18nFoundUploadData);
        };
        for (var i = 0, len = i18nStoreData.length; i < len; i++) {
            _loop_2(i, len);
        }
        return {
            uploadReplaceI18nData: i18nStoreData,
            uploadErrI18nData: uploadErrI18nData
        };
    },
    processReplaceI18nData: function (i18nExcelData, i18nStoreData, type) {
        try {
            var result = this.transformExcelToArray(i18nExcelData, i18nStoreData, type);
            if (result.code === ERROR) {
                return result;
            }
            i18nExcelData = result.data;
            var i18nData = i18nStoreData.i18nData;
            if (!i18nData) {
                result.data = i18nExcelData;
            }
            else if (type === __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* EXPRESS_UPLOAD_TYPE */].COVER) {
                result = this.processSubReplaceI18nData(i18nExcelData, JSON.parse(i18nData));
            }
            else {
                result.data = this.processPubReplaceI18nData(i18nExcelData, JSON.parse(i18nData));
            }
            return result;
        }
        catch (err) {
            console.error(err.message);
            return {
                code: ERROR,
                msg: err.message,
                data: null
            };
        }
    }
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node-xlsx");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("properties");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_xlsx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_node_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var TRUE = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].ERROR;


var moment = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = ({
    processDownloadExcel: function (i18nData, file, cb) {
        var e_1, _a, e_2, _b;
        try {
            var xlsxData = [];
            try {
                for (var i18nData_1 = __values(i18nData), i18nData_1_1 = i18nData_1.next(); !i18nData_1_1.done; i18nData_1_1 = i18nData_1.next()) {
                    var row = i18nData_1_1.value;
                    var xlsxRowData = [];
                    try {
                        for (var STATIC_I18N_TABLE_COLUMNS_1 = __values(__WEBPACK_IMPORTED_MODULE_1__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */]), STATIC_I18N_TABLE_COLUMNS_1_1 = STATIC_I18N_TABLE_COLUMNS_1.next(); !STATIC_I18N_TABLE_COLUMNS_1_1.done; STATIC_I18N_TABLE_COLUMNS_1_1 = STATIC_I18N_TABLE_COLUMNS_1.next()) {
                            var key = STATIC_I18N_TABLE_COLUMNS_1_1.value;
                            xlsxRowData.push(row[key] || '');
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (STATIC_I18N_TABLE_COLUMNS_1_1 && !STATIC_I18N_TABLE_COLUMNS_1_1.done && (_b = STATIC_I18N_TABLE_COLUMNS_1.return)) _b.call(STATIC_I18N_TABLE_COLUMNS_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    xlsxData.push(xlsxRowData);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (i18nData_1_1 && !i18nData_1_1.done && (_a = i18nData_1.return)) _a.call(i18nData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            xlsxData.unshift(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].TEMP_EXCEL.CAPTION);
            var buffer = __WEBPACK_IMPORTED_MODULE_3_node_xlsx___default.a.build([{ name: "Sheet1", data: xlsxData }]);
            var downloadPath_1 = __WEBPACK_IMPORTED_MODULE_5_path__["join"](__dirname, "/files/" + (file || moment().format('YYYY-MM-DD-HH-mm-ss')) + ".xlsx");
            __WEBPACK_IMPORTED_MODULE_4_fs__["writeFile"](downloadPath_1, buffer, 'binary', function (err) {
                if (err) {
                    console.error(err.message);
                    cb(ERROR, err.message, null);
                }
                cb(TRUE, '', downloadPath_1);
            });
        }
        catch (err) {
            console.error(err.message);
            cb(ERROR, err.message, null);
        }
    }
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server\\express\\services"))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var moment = __webpack_require__(7);



var archiver = __webpack_require__(18);

var STATIC_I18N_TABLE_LANGUAGE_COLUMNS = __WEBPACK_IMPORTED_MODULE_1__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].slice(6);
/* harmony default export */ __webpack_exports__["a"] = ({
    processDownloadJson: function (i18nData, file, res) {
        this.downloadAllLanguage(i18nData, file, res);
    },
    downloadAllLanguage: function (i18nData, file, res) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            var i18nDirPath_1 = __WEBPACK_IMPORTED_MODULE_0_path__["join"](__dirname, "files/" + moment().format('YYYY-MM-DD-HH-mm-ss'));
            var zipDirPath_1 = __WEBPACK_IMPORTED_MODULE_0_path__["join"](__dirname, "files/" + moment().format('YYYY-MM-DD-HH-mm-ss') + "temp");
            var i18n = {};
            __WEBPACK_IMPORTED_MODULE_3_fs__["mkdirSync"](i18nDirPath_1);
            __WEBPACK_IMPORTED_MODULE_3_fs__["mkdirSync"](zipDirPath_1);
            try {
                for (var i18nData_1 = __values(i18nData), i18nData_1_1 = i18nData_1.next(); !i18nData_1_1.done; i18nData_1_1 = i18nData_1.next()) {
                    var row = i18nData_1_1.value;
                    if (!row.key)
                        continue;
                    try {
                        for (var _d = __values(Object.keys(row)), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var key = _e.value;
                            if (!STATIC_I18N_TABLE_LANGUAGE_COLUMNS.includes(key))
                                continue;
                            i18n[key] = i18n[key] || {};
                            var i18nFileDir = __WEBPACK_IMPORTED_MODULE_0_path__["join"](i18nDirPath_1, __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].I18N_FILE_NAMES[key]);
                            if (!__WEBPACK_IMPORTED_MODULE_3_fs__["existsSync"](i18nFileDir)) {
                                __WEBPACK_IMPORTED_MODULE_3_fs__["mkdirSync"](i18nFileDir);
                                __WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"](i18nFileDir + "/README.md", '');
                                __WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"](i18nFileDir + "/" + (file || 'index') + ".json", '');
                            }
                            i18n[key][row.key] = row[key];
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (i18nData_1_1 && !i18nData_1_1.done && (_a = i18nData_1.return)) _a.call(i18nData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = __values(Object.keys(i18n)), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var language = _g.value;
                    var languagePath = __WEBPACK_IMPORTED_MODULE_0_path__["join"](i18nDirPath_1, __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].I18N_FILE_NAMES[language] + "/" + (file || 'index') + ".json");
                    __WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"](languagePath, JSON.stringify(i18n[language]));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var archive = archiver('zip');
            var time_1 = moment().format('YYYY-MM-DD-HH-mm-ss');
            var zipPath_1 = __WEBPACK_IMPORTED_MODULE_0_path__["join"](zipDirPath_1, time_1 + ".zip");
            var output = __WEBPACK_IMPORTED_MODULE_3_fs__["createWriteStream"](zipPath_1);
            var fsReadStream_1;
            output.on('close', function () {
                res.set({
                    'Content-type': 'application/octet-stream',
                    'Content-Disposition': 'attachment;filename=' + encodeURI(time_1 + ".zip")
                });
                fsReadStream_1 = __WEBPACK_IMPORTED_MODULE_3_fs__["createReadStream"](zipPath_1);
                fsReadStream_1.on('data', function (chunk) { return res.write(chunk, 'binary'); });
                fsReadStream_1.on('end', function () {
                    Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* delDir */])(i18nDirPath_1);
                    Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* delDir */])(zipDirPath_1);
                    res.end();
                });
            });
            archive.on('error', function (err) {
                if (err) {
                    console.error(err.message);
                    res.send(err.message);
                }
            });
            archive.pipe(output);
            archive.directory(i18nDirPath_1, time_1);
            archive.finalize();
        }
        catch (err) {
            console.error(err.message);
            res.send(err.message);
        }
    }
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server\\express\\services"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("archiver");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_properties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};


var moment = __webpack_require__(7);



var archiver = __webpack_require__(18);

var STATIC_I18N_TABLE_LANGUAGE_COLUMNS = __WEBPACK_IMPORTED_MODULE_2__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].slice(6);
/* harmony default export */ __webpack_exports__["a"] = ({
    processDownloadProperties: function (i18nData, file, res) {
        this.downloadAllLanguage(i18nData, file, res);
    },
    downloadAllLanguage: function (i18nData, file, res) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            var i18nDirPath_1 = __WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, "files/" + moment().format('YYYY-MM-DD-HH-mm-ss'));
            var zipDirPath_1 = __WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, "files/" + moment().format('YYYY-MM-DD-HH-mm-ss') + "temp");
            var i18n = {};
            __WEBPACK_IMPORTED_MODULE_0_fs__["mkdirSync"](i18nDirPath_1);
            __WEBPACK_IMPORTED_MODULE_0_fs__["mkdirSync"](zipDirPath_1);
            try {
                for (var i18nData_1 = __values(i18nData), i18nData_1_1 = i18nData_1.next(); !i18nData_1_1.done; i18nData_1_1 = i18nData_1.next()) {
                    var row = i18nData_1_1.value;
                    if (!row.key)
                        continue;
                    try {
                        for (var _d = __values(Object.keys(row)), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var key = _e.value;
                            if (!STATIC_I18N_TABLE_LANGUAGE_COLUMNS.includes(key))
                                continue;
                            i18n[key] = i18n[key] || {};
                            var i18nFileDir = __WEBPACK_IMPORTED_MODULE_1_path__["join"](i18nDirPath_1, __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* EXPRESS */].I18N_FILE_NAMES[key]);
                            if (!__WEBPACK_IMPORTED_MODULE_0_fs__["existsSync"](i18nFileDir)) {
                                __WEBPACK_IMPORTED_MODULE_0_fs__["mkdirSync"](i18nFileDir);
                                __WEBPACK_IMPORTED_MODULE_0_fs__["writeFileSync"](i18nFileDir + "/README.md", '');
                                __WEBPACK_IMPORTED_MODULE_0_fs__["writeFileSync"](i18nFileDir + "/" + (file || 'index') + ".properties", '');
                            }
                            i18n[key][row.key] = row[key];
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (i18nData_1_1 && !i18nData_1_1.done && (_a = i18nData_1.return)) _a.call(i18nData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = __values(Object.keys(i18n)), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var language = _g.value;
                    var languagePath = __WEBPACK_IMPORTED_MODULE_1_path__["join"](i18nDirPath_1, __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* EXPRESS */].I18N_FILE_NAMES[language] + "/" + (file || 'index') + ".properties");
                    __WEBPACK_IMPORTED_MODULE_0_fs__["writeFileSync"](languagePath, __WEBPACK_IMPORTED_MODULE_4_properties__["stringify"](i18n[language]));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var archive = archiver('zip');
            var time_1 = moment().format('YYYY-MM-DD-HH-mm-ss');
            var zipPath_1 = __WEBPACK_IMPORTED_MODULE_1_path__["join"](zipDirPath_1, time_1 + ".zip");
            var output = __WEBPACK_IMPORTED_MODULE_0_fs__["createWriteStream"](zipPath_1);
            var fsReadStream_1;
            output.on('close', function () {
                res.set({
                    'Content-type': 'application/octet-stream',
                    'Content-Disposition': 'attachment;filename=' + encodeURI(time_1 + ".zip")
                });
                fsReadStream_1 = __WEBPACK_IMPORTED_MODULE_0_fs__["createReadStream"](zipPath_1);
                fsReadStream_1.on('data', function (chunk) { return res.write(chunk, 'binary'); });
                fsReadStream_1.on('end', function () {
                    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* delDir */])(i18nDirPath_1);
                    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* delDir */])(zipDirPath_1);
                    res.end();
                });
            });
            archive.on('error', function (err) {
                if (err) {
                    console.error(err.message);
                    res.send(err.message);
                }
            });
            archive.pipe(output);
            archive.directory(i18nDirPath_1, time_1);
            archive.finalize();
        }
        catch (err) {
            console.error(err.message);
            res.send(err.message);
        }
    }
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server\\express\\services"))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graphql__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__express_routes_i18n_route__ = __webpack_require__(50);





__WEBPACK_IMPORTED_MODULE_0_dotenv__["config"]();
__WEBPACK_IMPORTED_MODULE_1__database__["a" /* startDB */]();
var server = __WEBPACK_IMPORTED_MODULE_2__graphql__["a" /* startServer */]();
var nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](__webpack_require__(11));
if (process.env.DEV_TYPE === 'nuxt') {
    var builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
    builder.build();
}
server.express.use('/graphql/i18n', __WEBPACK_IMPORTED_MODULE_4__express_routes_i18n_route__["a" /* default */]);
server.express.use(nuxt.render);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var startDB = function () {
    var url = process.env["MONGODB_URI_" + "production"];
    __WEBPACK_IMPORTED_MODULE_0_mongoose__["connect"](url, { useNewUrlParser: true }, function () {
        console.log("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Mongoose is running on " + url);
    });
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_yoga__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_yoga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_yoga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_import__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_import___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_import__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dotenv__);





var session = __webpack_require__(47);

var config = __webpack_require__(11);
__WEBPACK_IMPORTED_MODULE_5_dotenv__["config"]();
var startServer = function () {
    var context = function (req) { return ({
        models: __WEBPACK_IMPORTED_MODULE_2__database_models__["a" /* default */],
        req: req.request
    }); };
    var port = process.env["DEV_PORT_" + process.env.DEV_TYPE] || process.env.PRO_PORT;
    var options = {
        cors: {
            credentials: true,
            origin: ["http://localhost:" + port]
        },
        port: port,
        playground: process.env.DEV_TYPE === 'server' ? '/playground' : false
    };
    var server = new __WEBPACK_IMPORTED_MODULE_0_graphql_yoga__["GraphQLServer"]({
        context: context,
        resolvers: __WEBPACK_IMPORTED_MODULE_3__resolvers__["a" /* default */],
        middlewares: __WEBPACK_IMPORTED_MODULE_4__middlewares__["a" /* default */],
        typeDefs: Object(__WEBPACK_IMPORTED_MODULE_1_graphql_import__["importSchema"])('server/graphql/schemas/index.graphql')
    });
    server.express.use(session({
        name: 'qid',
        secret: "some-random-secret-here",
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: "production" === 'production',
            maxAge: 1000 * 60 * 60 * 12
        }
    }));
    server.start(options, function () {
        console.log("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Server is running on  http://localhost:" + port);
    });
    return server;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(10);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    }
}, __assign({}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */], { timestamps: {
        updatedAt: false
    } }));
UserSchema.virtual('userId').get(function () {
    return this._id.toString();
});
var User = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('User', UserSchema);
/* harmony default export */ __webpack_exports__["a"] = (User);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"];

var MemberSchema = new Schema({
    username: {
        type: String,
        trim: true,
        index: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, __assign({}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */], { _id: false, timestamps: {
        createdAt: false,
        updatedAt: false
    } }));
var StaticSchema = new Schema({
    staticName: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        required: true
    },
    staticVersion: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        required: true
    },
    staticType: {
        type: Number,
        required: true,
        enum: __WEBPACK_IMPORTED_MODULE_2__common_constants__["b" /* STATIC_ARR */]
    },
    staticDesc: String
}, __assign({}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */]));
StaticSchema.virtual('staticId').get(function () {
    return this._id.toString();
});
var ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    projectUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    projectMember: [MemberSchema],
    projectDesc: String,
    projectCreator: String,
    projectCreatorId: String,
    projectStatic: [StaticSchema]
}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */]);
ProjectSchema.virtual('projectId').get(function () {
    return this._id.toString();
});
var Project = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('Project', ProjectSchema);
/* harmony default export */ __webpack_exports__["a"] = (Project);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON_CODE; });
var COMMON_CODE;
(function (COMMON_CODE) {
    COMMON_CODE[COMMON_CODE["ERROR"] = -1] = "ERROR";
    COMMON_CODE[COMMON_CODE["TRUE"] = 0] = "TRUE";
    COMMON_CODE[COMMON_CODE["PROJECT_URL_REPEAT"] = 1] = "PROJECT_URL_REPEAT";
    COMMON_CODE[COMMON_CODE["STATIC_NAME_REPEAT"] = 2] = "STATIC_NAME_REPEAT";
    COMMON_CODE[COMMON_CODE["STATIC_VERSION_REPEAT"] = 3] = "STATIC_VERSION_REPEAT";
    COMMON_CODE[COMMON_CODE["I18N_NAME_REPEAT"] = 4] = "I18N_NAME_REPEAT";
})(COMMON_CODE || (COMMON_CODE = {}));


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMMON_MSG */
var COMMON_MSG = {
    NOT_LOGIN: 'Not login!'
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(10);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"];
var i18nSchema = new Schema({
    staticId: {
        type: String,
        required: true,
        trim: true
    },
    i18nVersion: {
        type: String,
        required: true,
        trim: true
    },
    i18nName: {
        type: String,
        required: true,
        trim: true
    },
    i18nDesc: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    i18nData: {
        type: String,
        trim: true
    },
    i18nImportFileName: {
        type: String,
        trim: true
    },
    i18nImportTime: {
        type: String,
        trim: true
    }
}, __assign({}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */], { timestamps: {
        createdAt: false,
        updatedAt: false
    } }));
i18nSchema.virtual('i18nId').get(function () {
    return this._id.toString();
});
var I18n = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('I18n', i18nSchema);
/* harmony default export */ __webpack_exports__["a"] = (I18n);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_resolver__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_resolver__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_resolver__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_resolver__ = __webpack_require__(44);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var resolvers = {
    Mutation: __assign({}, __WEBPACK_IMPORTED_MODULE_0__user_resolver__["a" /* default */].mutation, __WEBPACK_IMPORTED_MODULE_1__project_resolver__["a" /* default */].mutation, __WEBPACK_IMPORTED_MODULE_2__static_resolver__["a" /* default */].mutation, __WEBPACK_IMPORTED_MODULE_3__i18n_resolver__["a" /* default */].mutation),
    Query: __assign({}, __WEBPACK_IMPORTED_MODULE_0__user_resolver__["a" /* default */].query, __WEBPACK_IMPORTED_MODULE_1__project_resolver__["a" /* default */].query, __WEBPACK_IMPORTED_MODULE_2__static_resolver__["a" /* default */].query, __WEBPACK_IMPORTED_MODULE_3__i18n_resolver__["a" /* default */].query)
};
/* harmony default export */ __webpack_exports__["a"] = (resolvers);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].TRUE;

__WEBPACK_IMPORTED_MODULE_3_dotenv__["config"]();
var key = new (__webpack_require__(41))({ b: 512 });
key.setOptions({ encryptionScheme: 'pkcs1' });
var mutation = {
    login: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            function decrypt(password) {
                return key.decrypt(password.replace(/\s+/g, '+'), 'utf8');
            }
            var username, password, User, loginSuccess, user, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        username = args.username, password = args.password;
                        User = models.User;
                        return [4, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* loginOA */])(username, decrypt(password))];
                    case 1:
                        loginSuccess = _b.sent();
                        if (!loginSuccess) return [3, 5];
                        return [4, User.findOne({ username: username })];
                    case 2:
                        user = _b.sent();
                        if (!!user) return [3, 4];
                        return [4, User.create({
                                username: username
                            })];
                    case 3:
                        user = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (req.session) {
                            req.session.username = user.username;
                            req.session.userId = user.userId;
                        }
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.LOGIN_SUCCESS)];
                    case 5: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.USER_ERR)];
                    case 6: return [3, 8];
                    case 7:
                        err_1 = _b.sent();
                        console.error(err_1.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_1.message)];
                    case 8: return [2];
                }
            });
        });
    },
    logout: function (parent, args, _a) {
        var req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (req.session) {
                    req.session.username = null;
                    req.session.userId = null;
                }
                return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.LOGIN_SUCCESS)];
            });
        });
    }
};
var query = {
    getRsaKey: function (parent, args, _a) {
        var req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, session;
            return __generator(this, function (_b) {
                session = req.session;
                if (session && session.publicKey) {
                    publicKey = session.publicKey;
                }
                else if (session) {
                    publicKey = session.publicKey = key.exportKey('public');
                }
                return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(publicKey ? TRUE : ERROR, publicKey ? '' : RES.KEY_ERR, publicKey)];
            });
        });
    },
    users: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var users, session_1, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.User.find()];
                    case 1:
                        users = _b.sent();
                        session_1 = req.session;
                        if (session_1) {
                            return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS,  true
                                    ? users.filter(function (user) { return user.userId !== session_1.userId; })
                                    : users)];
                        }
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.QUERY_FAIL)];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_2.message)];
                    case 3: return [2];
                }
            });
        });
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    mutation: mutation,
    query: query
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveResponse; });
var resolveResponse = function (code, msg, data) {
    return {
        code: code,
        msg: msg,
        data: data
    };
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginOA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ldapjs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ldapjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ldapjs__);


__WEBPACK_IMPORTED_MODULE_0_dotenv__["config"]();
var loginOA = function (username, password) {
    var client = __WEBPACK_IMPORTED_MODULE_1_ldapjs__["createClient"]({
        url: process.env.LOAP_URI
    });
    return new Promise(function (resolve) {
        try {
            client.bind(username, password, function (err) {
                resolve(err ? false : true);
                client.destroy();
            });
        }
        catch (err) {
            console.error(err.message);
            client.destroy();
        }
    });
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("ldapjs");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createMd5Password */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);


var createMd5Password = function (password) {
    return __WEBPACK_IMPORTED_MODULE_0_crypto__["createHash"]('md5').update("" + password + __WEBPACK_IMPORTED_MODULE_1__constant__["d" /* MD5 */].SALT, 'utf8').digest('base64');
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRAPHQL; });
var GRAPHQL = {
    RES: {
        KEY_ERR: '获取公钥失败！',
        LOGIN_SUCCESS: '登录成功！',
        LOGOUT_SUCCESS: '注销成功！',
        USER_ERR: '用户名或密码错误！',
        QUERY_SUCCESS: '查询成功！',
        QUERY_FAIL: '查询失败！',
        ADD_SUCCESS: '添加成功！',
        UPDATE_SUCCESS: '更新成功！',
        PROJECT_URL_REPEAT: '项目URL已经存在与其他项目，请确认URL是否正确！',
        DEL_FAIL: '删除失败！',
        DEL_SUCCESS: '删除成功！',
        PROJECT_NOT_FOUND: '项目不存在！',
        STATIC_NOT_FOUND: '静态资源不存在！',
        STATIC_NAME_REPEAT: '资源类型名称已经存在，请重新命名资源类型！',
        STATIC_TYPE_VERSION_REPEAT: '当前资源类型对应的版本已经存在，请重新设置版本！',
        I18N_NAME_REPEAT: '多语言名称已经存在，请重新命名多语言！',
        I18N_NOT_FOUND: '多语言不存在！'
    }
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD5; });
var MD5 = {
    SALT: '!@#$$%%^%$%^$%#$*^*&@@!@#$@&^&*^'
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXPRESS_UPLOAD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXPRESS; });
var EXPRESS_UPLOAD_TYPE;
(function (EXPRESS_UPLOAD_TYPE) {
    EXPRESS_UPLOAD_TYPE[EXPRESS_UPLOAD_TYPE["SKIP"] = 0] = "SKIP";
    EXPRESS_UPLOAD_TYPE[EXPRESS_UPLOAD_TYPE["COVER"] = 1] = "COVER";
})(EXPRESS_UPLOAD_TYPE || (EXPRESS_UPLOAD_TYPE = {}));
var EXPRESS = {
    RES: {
        EXCEL_SHEET_EMPTY: '上传的xlsx格式文件没有数据！',
        EXCEL_CAPTION_ERR: '上传的xlsx格式文件表头信息不符合模板格式！',
        UPLOAD_TRANSLATE_NOT_UPLOAD_DEV: '未进行开发导入，请先导入开发态多语言！',
        UPLOAD_TRANSLATE_NOT_UPLOAD_FRONT: '请先导入前端多语言！',
        UPLOAD_TRANSLATE_NOT_UPLOAD_BACK: '请先导入后端多语言！',
        UPLOAD_SUCCESS: '上传成功！',
        UPLOAD_FORMAT_ERR: '导入的文件格式不正确！',
        UPLOAD_SUP_EMPTY: '当前多语言列表中不存在多语言信息！',
        UPLOAD_SUB_OTHER_LANG: '不允许导入非中文的其他语言信息。',
        UPLOAD_VERSION_ERR: '导入的版本错误！当前需导入的版本为：',
        UPLOAD_DATA_ERR: '导入缺少关键信息或中文！',
        UPLOAD_COMPLETE_NEW: '为防止误导入其他多语言文件，请确认是否是导入当前多语言，如果是请添加新的多语言并删除当前多语言！',
        UPLOAD_JSON_ERR: '上传的JSON文件内容不是有效的对象!',
        UPLOAD_JSON_EMPTY: '上传的JSON文件不能为空！',
        UPLOAD_PROPERTIES_EMPTY: '上传的properties文件不能为空！',
        UPLOAD_PROPERTIES_NO_VALUE: '上传的properties文件只有key没有value！'
    },
    TEMP_EXCEL: {
        CAPTION: [
            'Resource (来源)',
            'Key (关键信息)',
            'Version (版本)',
            'Length (长度)',
            'Position (位置)',
            'Remark (备注)',
            '0_中文 (Simplified Chinese -简体中文)',
            '1_English (English-英文)',
            '2_Русский (Russian-俄语)',
            '3_Eesti (Estonian-爱沙尼亚语)',
            '4_Български (Bulgarian-保加利亚语)',
            '5_Magyar (Hungarian-匈牙利语)',
            '6_Ελληνικά (Greek-希腊语)',
            '7_Deutsch (German-德语)',
            '8_Italiano (Italian-意大利语)',
            '9_Český (Czech-捷克语)',
            '10_Slovensko (Slovak-斯洛伐克语)',
            '11_Français (France-法语)',
            '12_Polski (Polish-波兰语)',
            '13_Nederlands (Dutch-荷兰语)',
            '14_Português (Portuguese-葡萄牙语)',
            '15_Español (Spanish-西班牙语)',
            '16_Român (Romanian-罗马尼亚语)',
            '17_Dansk (Danish-丹麦语)',
            '18_Svenska (Swedish-瑞典语)',
            '19_Norsk (Norwegian-挪威语)',
            '20_Suomi (Finnish-芬兰语)',
            '21_Hrvatski (Croatian-克罗地亚语)',
            '22_Slovenščina (Slovenian-斯洛文尼亚语)',
            '23_Srpski (Serbian-塞尔维亚语)',
            '24_Türkçe (Turkish-土耳其语)',
            '25_한국어 (Korean-韩语)',
            '26_繁體中文 (Traditional Chinese-繁体中文)',
            '27_ภาษาไทย (Thai-泰语)',
            '28_Tiếng Việt (Vietnamese-越南语)',
            '29_日本語 (Japanese-日语)',
            '30_עברית שפה (Hebrew-希伯来语)',
            '31_Latvijas (Latvian-拉脱维亚语)',
            '32_lietuviešu (Lithuanian-立陶宛语)',
            '33_Português - BRAZIL(Brazilian Portuguese-巴西葡萄牙语 )',
            '34_العربية(Arabic-阿拉伯语)',
            '35_فارسی(Persian-波斯语)'
        ]
    },
    I18N_FILE_NAMES: {
        'chinese': 'zh_CN',
        'english': 'en_US',
        'russian': 'ru',
        'estonia': 'et',
        'bulgarian': 'bg',
        'hungarian': 'hu',
        'greek': 'el',
        'german': 'de',
        'italian': 'it',
        'czech': 'cs',
        'slovak': 'sk',
        'france': 'fr',
        'polish': 'pl',
        'dutch': 'nl',
        'portuguese': 'pt',
        'spanish': 'es',
        'romanian': 'ro',
        'danish': 'da',
        'swedish': 'sv',
        'norwegian': 'no',
        'finnish': 'fi',
        'croatian': 'hr',
        'slovenian': 'sl',
        'serbian': 'sr',
        'turkish': 'tr',
        'korean': 'ko',
        'traditionalChinese': 'zh_HK',
        'thai': 'th',
        'vietnamese': 'vi',
        'japanese': 'ja',
        'hebrew': 'he',
        'latvian': 'lv',
        'lithuanian': 'lt',
        'brazilianPortuguese': 'pt_BR',
        'arabic': 'ar',
        'persian': 'fa'
    }
};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var delDir = function (path) {
    var e_1, _a;
    var files = [];
    if (__WEBPACK_IMPORTED_MODULE_0_fs__["existsSync"](path)) {
        files = __WEBPACK_IMPORTED_MODULE_0_fs__["readdirSync"](path);
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                var curPath = path + "/" + file;
                if (__WEBPACK_IMPORTED_MODULE_0_fs__["statSync"](curPath).isDirectory()) {
                    delDir(curPath);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0_fs__["unlinkSync"](curPath);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        __WEBPACK_IMPORTED_MODULE_0_fs__["rmdirSync"](path);
    }
};
var delFile = function (path) {
    __WEBPACK_IMPORTED_MODULE_0_fs__["unlinkSync"](path);
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("node-rsa");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};



var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].TRUE, PROJECT_URL_REPEAT = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].PROJECT_URL_REPEAT;

__WEBPACK_IMPORTED_MODULE_3_dotenv__["config"]();
var mutation = {
    addProject: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var projectMember, Project, session, project, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        projectMember = args.projectMember;
                        Project = models.Project;
                        session = req.session;
                        if (projectMember && projectMember.length) {
                            projectMember = JSON.parse(projectMember);
                        }
                        return [4, Project.findOne({ projectUrl: args.projectUrl })];
                    case 1:
                        project = _b.sent();
                        if (!project) return [3, 2];
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(PROJECT_URL_REPEAT, RES.PROJECT_URL_REPEAT)];
                    case 2: return [4, Project.create(__assign({}, args, { projectMember: projectMember, projectCreator: session && session.username, projectCreatorId: session && session.userId }))];
                    case 3:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.ADD_SUCCESS)];
                    case 4: return [3, 6];
                    case 5:
                        err_1 = _b.sent();
                        console.error(err_1.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_1.message)];
                    case 6: return [2];
                }
            });
        });
    },
    deleteProject: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.Project.remove({ _id: args.projectId })];
                    case 1:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.DEL_SUCCESS)];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_2.message)];
                    case 3: return [2];
                }
            });
        });
    },
    updateProject: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var project, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4, models.Project.findById(args.projectId)];
                    case 1:
                        project = _b.sent();
                        if (!project) return [3, 3];
                        args.projectMember = JSON.parse(args.projectMember);
                        Object.assign(project, args);
                        return [4, project.save()];
                    case 2:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.UPDATE_SUCCESS)];
                    case 3: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.PROJECT_NOT_FOUND)];
                    case 4: return [3, 6];
                    case 5:
                        err_3 = _b.sent();
                        console.error(err_3.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_3.message)];
                    case 6: return [2];
                }
            });
        });
    }
};
var query = {
    projects: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _b, projects, showProjects, projects_1, projects_1_1, project, projectMember, err_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4, models.Project.find()];
                    case 1:
                        projects = _c.sent();
                        showProjects = [];
                        try {
                            for (projects_1 = __values(projects), projects_1_1 = projects_1.next(); !projects_1_1.done; projects_1_1 = projects_1.next()) {
                                project = projects_1_1.value;
                                projectMember = project.projectMember;
                                if (projectMember && req.session) {
                                    console.log(projectMember);
                                    console.log(req.sessionID);
                                    console.log(req.session.username);
                                    console.log(req.session.userId);
                                    console.log(projectMember.find(function (member) { return member.userId === (req.session && req.session.userId); }));
                                }
                                if (!projectMember
                                    || !projectMember.length
                                    || !projectMember.find(function (member) { return member.userId === (req.session && req.session.userId); }))
                                    continue;
                                showProjects.push(project);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (projects_1_1 && !projects_1_1.done && (_b = projects_1.return)) _b.call(projects_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, showProjects)];
                    case 2:
                        err_4 = _c.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_4.message)];
                    case 3: return [2];
                }
            });
        });
    },
    projectByName: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _b, projects, showProjects, projects_2, projects_2_1, project, projectMember, err_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4, models.Project.find({
                                $or: [{ projectName: { $regex: new RegExp(args.projectName, 'i') } }]
                            })];
                    case 1:
                        projects = _c.sent();
                        showProjects = [];
                        try {
                            for (projects_2 = __values(projects), projects_2_1 = projects_2.next(); !projects_2_1.done; projects_2_1 = projects_2.next()) {
                                project = projects_2_1.value;
                                projectMember = project.projectMember;
                                if (!projectMember
                                    || !projectMember.length
                                    || !projectMember.find(function (member) { return member.userId === (req.session && req.session.userId); }))
                                    continue;
                                showProjects.push(project);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (projects_2_1 && !projects_2_1.done && (_b = projects_2.return)) _b.call(projects_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, showProjects)];
                    case 2:
                        err_5 = _c.sent();
                        console.error(err_5.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_5.message)];
                    case 3: return [2];
                }
            });
        });
    },
    projectByID: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var project, err_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.Project.findById(args.projectId)];
                    case 1:
                        project = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, project)];
                    case 2:
                        err_6 = _b.sent();
                        console.error(err_6.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_6.message)];
                    case 3: return [2];
                }
            });
        });
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    mutation: mutation,
    query: query
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};



var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].TRUE;
var mutation = {
    addStatic: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _b, project, projectStatic, projectStatic_1, projectStatic_1_1, sta, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4, models.Project.findById(args.projectId)];
                    case 1:
                        project = _c.sent();
                        if (!(project && project.projectStatic)) return [3, 3];
                        projectStatic = project.projectStatic;
                        try {
                            for (projectStatic_1 = __values(projectStatic), projectStatic_1_1 = projectStatic_1.next(); !projectStatic_1_1.done; projectStatic_1_1 = projectStatic_1.next()) {
                                sta = projectStatic_1_1.value;
                                if (sta.staticName === args.staticName) {
                                    return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].STATIC_NAME_REPEAT, RES.STATIC_NAME_REPEAT)];
                                }
                                else if (sta.staticType === args.staticType && sta.staticVersion && args.staticType) {
                                    return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].STATIC_VERSION_REPEAT, RES.STATIC_TYPE_VERSION_REPEAT)];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (projectStatic_1_1 && !projectStatic_1_1.done && (_b = projectStatic_1.return)) _b.call(projectStatic_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        project.projectStatic.push({
                            staticVersion: args.staticVersion,
                            staticName: args.staticName,
                            staticType: args.staticType,
                            staticDesc: args.staticDesc
                        });
                        return [4, project.save()];
                    case 2:
                        _c.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.ADD_SUCCESS)];
                    case 3: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.PROJECT_NOT_FOUND)];
                    case 4: return [3, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.error(err_1.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_1.message)];
                    case 6: return [2];
                }
            });
        });
    },
    updateStatic: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _b, project, projectStatic, currentStatic, projectStatic_2, projectStatic_2_1, sta, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4, models.Project.findById(args.projectId)];
                    case 1:
                        project = _c.sent();
                        if (!(project && project.projectStatic)) return [3, 3];
                        projectStatic = project.projectStatic || [];
                        currentStatic = void 0;
                        try {
                            for (projectStatic_2 = __values(projectStatic), projectStatic_2_1 = projectStatic_2.next(); !projectStatic_2_1.done; projectStatic_2_1 = projectStatic_2.next()) {
                                sta = projectStatic_2_1.value;
                                if (sta.staticId === args.staticId) {
                                    currentStatic = sta;
                                    continue;
                                }
                                if (sta.staticName === args.staticName) {
                                    return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].STATIC_NAME_REPEAT, RES.STATIC_NAME_REPEAT)];
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (projectStatic_2_1 && !projectStatic_2_1.done && (_b = projectStatic_2.return)) _b.call(projectStatic_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        currentStatic.staticName = args.staticName;
                        currentStatic.staticDesc = args.staticDesc;
                        return [4, project.save()];
                    case 2:
                        _c.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.UPDATE_SUCCESS)];
                    case 3: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.STATIC_NOT_FOUND)];
                    case 4: return [3, 6];
                    case 5:
                        err_2 = _c.sent();
                        console.error(err_2.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_2.message)];
                    case 6: return [2];
                }
            });
        });
    },
    deleteStatic: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var project, index, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        return [4, models.Project.findById(args.projectId)];
                    case 1:
                        project = _b.sent();
                        if (!(project && project.projectStatic)) return [3, 5];
                        index = project.projectStatic.findIndex(function (sta) { return sta.staticId === args.staticId; });
                        if (!(index !== -1)) return [3, 3];
                        project.projectStatic.splice(index, 1);
                        return [4, models.I18n.deleteMany({ staticId: args.staticId })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4, project.save()];
                    case 4:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.ADD_SUCCESS)];
                    case 5: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.STATIC_NOT_FOUND)];
                    case 6: return [3, 8];
                    case 7:
                        err_3 = _b.sent();
                        console.error(err_3.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_3.message)];
                    case 8: return [2];
                }
            });
        });
    }
};
var query = {
    staticByID: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var ids_1, project, staToObj, sta, staticData, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        ids_1 = args.id.split('-');
                        return [4, models.Project.findById(ids_1[0])];
                    case 1:
                        project = _b.sent();
                        if (!(project && project.projectStatic)) return [3, 3];
                        staToObj = void 0;
                        sta = project.projectStatic.find(function (sta) { return sta.staticId === ids_1[1]; });
                        return [4, models.I18n.find({ staticId: ids_1[1] })];
                    case 2:
                        staticData = _b.sent();
                        if (sta)
                            staToObj = sta.toObject();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, __assign({}, staToObj, { staticData: staticData }))];
                    case 3: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.STATIC_NOT_FOUND)];
                    case 4: return [3, 6];
                    case 5:
                        err_4 = _b.sent();
                        console.error(err_4.message);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_4.message)];
                    case 6: return [2];
                }
            });
        });
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    mutation: mutation,
    query: query
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RES = __WEBPACK_IMPORTED_MODULE_2__constant__["c" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].TRUE;
var mutation = {
    addI18n: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var I18n, i18n, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        I18n = models.I18n;
                        return [4, I18n.find({ staticId: args.staticId })];
                    case 1:
                        i18n = _b.sent();
                        if (!(!i18n || !i18n.length)) return [3, 3];
                        return [4, I18n.create(args)];
                    case 2:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.ADD_SUCCESS)];
                    case 3:
                        if (!i18n.find(function (data) { return data.i18nName === args.i18nName; })) return [3, 4];
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(__WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].I18N_NAME_REPEAT, RES.I18N_NAME_REPEAT)];
                    case 4: return [4, I18n.create(args)];
                    case 5:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.ADD_SUCCESS)];
                    case 6: return [3, 8];
                    case 7:
                        err_1 = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_1.message)];
                    case 8: return [2];
                }
            });
        });
    },
    updateI18n: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var i18n, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4, models.I18n.findById(args.i18nId)];
                    case 1:
                        i18n = _b.sent();
                        if (!i18n) return [3, 3];
                        Object.assign(i18n, args);
                        return [4, i18n.save()];
                    case 2:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.UPDATE_SUCCESS)];
                    case 3: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, RES.I18N_NOT_FOUND)];
                    case 4: return [3, 6];
                    case 5:
                        err_2 = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_2.message)];
                    case 6: return [2];
                }
            });
        });
    },
    deleteI18n: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.I18n.deleteOne({ _id: args.i18nId })];
                    case 1:
                        _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.DEL_SUCCESS)];
                    case 2:
                        err_3 = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_3.message)];
                    case 3: return [2];
                }
            });
        });
    }
};
var query = {
    i18nByID: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var i18n, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.I18n.findById(args.id)];
                    case 1:
                        i18n = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, i18n)];
                    case 2:
                        err_4 = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* resolveResponse */])(ERROR, err_4.message)];
                    case 3: return [2];
                }
            });
        });
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    mutation: mutation,
    query: query
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_middleware__ = __webpack_require__(46);
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};

var middlewares = __spread(__WEBPACK_IMPORTED_MODULE_0__auth_middleware__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (middlewares);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var isLogginIn = function (resolve, parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, resolve()];
    });
}); };
/* harmony default export */ __webpack_exports__["a"] = ([
    isLogginIn
]);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (args, opts) {
    if (!opts) opts = {};
    
    var flags = { bools : {}, strings : {}, unknownFn: null };

    if (typeof opts['unknown'] === 'function') {
        flags.unknownFn = opts['unknown'];
    }

    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
      flags.allBools = true;
    } else {
      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {
          flags.bools[key] = true;
      });
    }
    
    var aliases = {};
    Object.keys(opts.alias || {}).forEach(function (key) {
        aliases[key] = [].concat(opts.alias[key]);
        aliases[key].forEach(function (x) {
            aliases[x] = [key].concat(aliases[key].filter(function (y) {
                return x !== y;
            }));
        });
    });

    [].concat(opts.string).filter(Boolean).forEach(function (key) {
        flags.strings[key] = true;
        if (aliases[key]) {
            flags.strings[aliases[key]] = true;
        }
     });

    var defaults = opts['default'] || {};
    
    var argv = { _ : [] };
    Object.keys(flags.bools).forEach(function (key) {
        setArg(key, defaults[key] === undefined ? false : defaults[key]);
    });
    
    var notFlags = [];

    if (args.indexOf('--') !== -1) {
        notFlags = args.slice(args.indexOf('--')+1);
        args = args.slice(0, args.indexOf('--'));
    }

    function argDefined(key, arg) {
        return (flags.allBools && /^--[^=]+$/.test(arg)) ||
            flags.strings[key] || flags.bools[key] || aliases[key];
    }

    function setArg (key, val, arg) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg) === false) return;
        }

        var value = !flags.strings[key] && isNumber(val)
            ? Number(val) : val
        ;
        setKey(argv, key.split('.'), value);
        
        (aliases[key] || []).forEach(function (x) {
            setKey(argv, x.split('.'), value);
        });
    }

    function setKey (obj, keys, value) {
        var o = obj;
        keys.slice(0,-1).forEach(function (key) {
            if (o[key] === undefined) o[key] = {};
            o = o[key];
        });

        var key = keys[keys.length - 1];
        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
            o[key] = value;
        }
        else if (Array.isArray(o[key])) {
            o[key].push(value);
        }
        else {
            o[key] = [ o[key], value ];
        }
    }
    
    function aliasIsBoolean(key) {
      return aliases[key].some(function (x) {
          return flags.bools[x];
      });
    }

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        
        if (/^--.+=/.test(arg)) {
            // Using [\s\S] instead of . because js doesn't support the
            // 'dotall' regex modifier. See:
            // http://stackoverflow.com/a/1068308/13216
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            var key = m[1];
            var value = m[2];
            if (flags.bools[key]) {
                value = value !== 'false';
            }
            setArg(key, value, arg);
        }
        else if (/^--no-.+/.test(arg)) {
            var key = arg.match(/^--no-(.+)/)[1];
            setArg(key, false, arg);
        }
        else if (/^--.+/.test(arg)) {
            var key = arg.match(/^--(.+)/)[1];
            var next = args[i + 1];
            if (next !== undefined && !/^-/.test(next)
            && !flags.bools[key]
            && !flags.allBools
            && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                setArg(key, next, arg);
                i++;
            }
            else if (/^(true|false)$/.test(next)) {
                setArg(key, next === 'true', arg);
                i++;
            }
            else {
                setArg(key, flags.strings[key] ? '' : true, arg);
            }
        }
        else if (/^-[^-]+/.test(arg)) {
            var letters = arg.slice(1,-1).split('');
            
            var broken = false;
            for (var j = 0; j < letters.length; j++) {
                var next = arg.slice(j+2);
                
                if (next === '-') {
                    setArg(letters[j], next, arg)
                    continue;
                }
                
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
                    setArg(letters[j], next.split('=')[1], arg);
                    broken = true;
                    break;
                }
                
                if (/[A-Za-z]/.test(letters[j])
                && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                    setArg(letters[j], next, arg);
                    broken = true;
                    break;
                }
                
                if (letters[j+1] && letters[j+1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j+2), arg);
                    broken = true;
                    break;
                }
                else {
                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
                }
            }
            
            var key = arg.slice(-1)[0];
            if (!broken && key !== '-') {
                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])
                && !flags.bools[key]
                && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                    setArg(key, args[i+1], arg);
                    i++;
                }
                else if (args[i+1] && /true|false/.test(args[i+1])) {
                    setArg(key, args[i+1] === 'true', arg);
                    i++;
                }
                else {
                    setArg(key, flags.strings[key] ? '' : true, arg);
                }
            }
        }
        else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(
                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
                );
            }
            if (opts.stopEarly) {
                argv._.push.apply(argv._, args.slice(i + 1));
                break;
            }
        }
    }
    
    Object.keys(defaults).forEach(function (key) {
        if (!hasKey(argv, key.split('.'))) {
            setKey(argv, key.split('.'), defaults[key]);
            
            (aliases[key] || []).forEach(function (x) {
                setKey(argv, x.split('.'), defaults[key]);
            });
        }
    });
    
    if (opts['--']) {
        argv['--'] = new Array();
        notFlags.forEach(function(key) {
            argv['--'].push(key);
        });
    }
    else {
        notFlags.forEach(function(key) {
            argv._.push(key);
        });
    }

    return argv;
};

function hasKey (obj, keys) {
    var o = obj;
    keys.slice(0,-1).forEach(function (key) {
        o = (o[key] || {});
    });

    var key = keys[keys.length - 1];
    return key in o;
}

function isNumber (x) {
    if (typeof x === 'number') return true;
    if (/^0x[0-9a-f]+$/i.test(x)) return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}



/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_i18n_sub_upload_controller__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_i18n_sup_upload_controller__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_i18n_sub_download_controller__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_i18n_sup_download_controller__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_i18n_template_download_service__ = __webpack_require__(58);






var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.post('/upload/sub', __WEBPACK_IMPORTED_MODULE_1__controllers_i18n_sub_upload_controller__["a" /* default */]);
router.post('/upload/sup', __WEBPACK_IMPORTED_MODULE_2__controllers_i18n_sup_upload_controller__["a" /* default */]);
router.get('/download/template', __WEBPACK_IMPORTED_MODULE_5__services_i18n_template_download_service__["a" /* default */]);
router.get('/download/sub/:format/:file/:i18nId', __WEBPACK_IMPORTED_MODULE_3__controllers_i18n_sub_download_controller__["a" /* default */]);
router.get('/download/sup/:format/:file/:staticId', __WEBPACK_IMPORTED_MODULE_4__controllers_i18n_sup_download_controller__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_formidable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_formidable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_i18n_excel_upload_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_i18n_json_upload_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_i18n_properties_upload_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__database_models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_properties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fs__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var moment = __webpack_require__(7);


var TRUE = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].ERROR;
var RES = __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].RES;
/* harmony default export */ __webpack_exports__["a"] = (function (req, res) {
    var _this = this;
    var form = new __WEBPACK_IMPORTED_MODULE_0_formidable__["IncomingForm"]();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldsSize = 200 * 1024 * 1024;
    form.parse(req, function (err, fileds, file) { return __awaiter(_this, void 0, void 0, function () {
        var fileName, i18nStoreData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err) {
                        console.error(err.message);
                        res.json({
                            code: ERROR,
                            msg: err.message,
                            data: null
                        });
                        return [2];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    fileName = file.multExcel.name;
                    return [4, __WEBPACK_IMPORTED_MODULE_6__database_models__["a" /* default */].I18n.findById(fileds.i18nId)];
                case 2:
                    i18nStoreData = _a.sent();
                    if (/\.json$/.test(fileName)) {
                        processUploadJsonData(i18nStoreData, file, res);
                    }
                    else if (/\.xlsx$/.test(fileName)) {
                        processUploadExcelData(i18nStoreData, file, res);
                    }
                    else if (/\.properties$/.test(fileName)) {
                        processUploadPropertiesData(i18nStoreData, file, res);
                    }
                    else {
                        res.json({
                            code: ERROR,
                            msg: __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].RES.UPLOAD_FORMAT_ERR,
                            data: null
                        });
                    }
                    return [3, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1.message);
                    res.json({
                        code: ERROR,
                        msg: err_1.message,
                        data: null
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
});
function processUploadJsonData(i18nStoreData, file, res) {
    return __awaiter(this, void 0, void 0, function () {
        var uploadJsonData, result;
        return __generator(this, function (_a) {
            try {
                uploadJsonData = JSON.parse(__WEBPACK_IMPORTED_MODULE_8_fs__["readFileSync"](file.multExcel.path, 'utf-8').toString());
                result = __WEBPACK_IMPORTED_MODULE_4__services_i18n_json_upload_service__["a" /* default */].processUploadJson(uploadJsonData, i18nStoreData);
                if (result.code === ERROR) {
                    res.json(result);
                    return [2];
                }
                Object.assign(i18nStoreData, {
                    i18nData: JSON.stringify(result.data),
                    i18nImportTime: moment().format('YYYY-MM-DD HH:mm'),
                    i18nImportFileName: file.multExcel.name
                });
                i18nStoreData.save();
                res.json({
                    code: TRUE,
                    msg: RES.UPLOAD_SUCCESS,
                    data: null
                });
            }
            catch (err) {
                console.error(err.message);
                res.json({
                    code: ERROR,
                    msg: err.message,
                    data: null
                });
            }
            return [2];
        });
    });
}
function processUploadExcelData(i18nStoreData, file, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    result = __WEBPACK_IMPORTED_MODULE_3__services_i18n_excel_upload_service__["a" /* default */].processUploadExcel(file);
                    if (result.code === ERROR) {
                        res.json(result);
                        return [2];
                    }
                    result = __WEBPACK_IMPORTED_MODULE_3__services_i18n_excel_upload_service__["a" /* default */].processReplaceI18nData(result.data, i18nStoreData, __WEBPACK_IMPORTED_MODULE_2__constant__["b" /* EXPRESS_UPLOAD_TYPE */].COVER);
                    if (result.code === ERROR) {
                        res.json(result);
                        return [2];
                    }
                    Object.assign(i18nStoreData, {
                        i18nData: JSON.stringify(result.data),
                        i18nImportTime: moment().format('YYYY-MM-DD HH:mm'),
                        i18nImportFileName: file.multExcel.name
                    });
                    return [4, i18nStoreData.save()];
                case 1:
                    _a.sent();
                    res.json({
                        code: TRUE,
                        msg: RES.UPLOAD_SUCCESS,
                        data: null
                    });
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error(err_2.message);
                    res.json({
                        code: ERROR,
                        msg: err_2.message,
                        data: null
                    });
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
function processUploadPropertiesData(i18nStoreData, file, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            __WEBPACK_IMPORTED_MODULE_7_properties__["parse"](file.multExcel.path, { path: true }, function (err, uploadPropertiesData) { return __awaiter(_this, void 0, void 0, function () {
                var result, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (err) {
                                console.error(err.message);
                                res.json({
                                    code: ERROR,
                                    msg: err.message,
                                    data: null
                                });
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            result = __WEBPACK_IMPORTED_MODULE_5__services_i18n_properties_upload_service__["a" /* default */].processUploadProperties(uploadPropertiesData, i18nStoreData);
                            if (result.code === ERROR) {
                                res.json(result);
                                return [2];
                            }
                            Object.assign(i18nStoreData, {
                                i18nData: JSON.stringify(result.data.i18nUploadStoreData),
                                i18nImportTime: moment().format('YYYY-MM-DD HH:mm'),
                                i18nImportFileName: file.multExcel.name
                            });
                            return [4, i18nStoreData.save()];
                        case 2:
                            _a.sent();
                            res.json({
                                code: TRUE,
                                msg: RES.UPLOAD_SUCCESS,
                                data: result.data.i18nUploadErrData
                            });
                            return [3, 4];
                        case 3:
                            err_3 = _a.sent();
                            console.error(err_3.message);
                            res.json({
                                code: ERROR,
                                msg: err_3.message,
                                data: null
                            });
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            }); });
            return [2];
        });
    });
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants_type__ = __webpack_require__(3);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};



var TRUE = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].ERROR;
var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* EXPRESS */].RES;
var STATIC_I18N_TABLE_LANGUAGE_COLUMNS = __WEBPACK_IMPORTED_MODULE_2__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].slice(7);
/* harmony default export */ __webpack_exports__["a"] = ({
    validateJsonFormat: function (i18nUploadData) {
        if (Object.prototype.toString.call(i18nUploadData) !== "[object Object]") {
            return {
                code: ERROR,
                msg: RES.UPLOAD_JSON_ERR,
                data: null
            };
        }
        if (!Object.keys(i18nUploadData).length) {
            return {
                code: ERROR,
                msg: RES.UPLOAD_JSON_EMPTY,
                data: null
            };
        }
        return {
            code: TRUE,
            msg: '',
            data: null
        };
    },
    processJsonFlat: function (i18nVersion, i18nUploadFlatData, i18nUploadData, Key) {
        if (Key === void 0) { Key = ''; }
        var e_1, _a;
        var currentKey = '';
        try {
            for (var _b = __values(Object.keys(i18nUploadData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var chinese = i18nUploadData[key];
                currentKey += Key + (Key === '' ? key : "." + key);
                if (Object.prototype.toString.call(chinese) == "[object Object]") {
                    this.processJsonFlat(i18nVersion, i18nUploadFlatData, chinese, currentKey);
                }
                else {
                    i18nUploadFlatData.push({
                        key: currentKey,
                        chinese: chinese,
                        version: i18nVersion
                    });
                }
                currentKey = '';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    },
    processSubReplaceI18nData: function (i18nUploadData, i18nStoreData) {
        var e_2, _a;
        var isTranslated = i18nStoreData.some(function (i18n) {
            var e_3, _a;
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.value;
                    if (!i18n[key])
                        continue;
                    return true;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        });
        var isCompletelyNew = true;
        var _loop_1 = function (i18n) {
            var e_4, _a;
            var foundUploadData = i18nUploadData.find(function (upload) {
                return upload.key === i18n.key && upload.chinese === i18n.chinese;
            });
            if (!foundUploadData)
                return "continue";
            isCompletelyNew = false;
            if (!isTranslated)
                return "continue";
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.value;
                    if (!i18n[key])
                        continue;
                    foundUploadData[key] = i18n[key];
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        try {
            for (var i18nStoreData_1 = __values(i18nStoreData), i18nStoreData_1_1 = i18nStoreData_1.next(); !i18nStoreData_1_1.done; i18nStoreData_1_1 = i18nStoreData_1.next()) {
                var i18n = i18nStoreData_1_1.value;
                _loop_1(i18n);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (i18nStoreData_1_1 && !i18nStoreData_1_1.done && (_a = i18nStoreData_1.return)) _a.call(i18nStoreData_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return isCompletelyNew
            ? {
                code: ERROR,
                msg: RES.UPLOAD_COMPLETE_NEW,
                data: null
            }
            : {
                code: TRUE,
                msg: '',
                data: i18nUploadData
            };
    },
    processUploadJson: function (i18nUploadData, i18nStoreData) {
        try {
            var result = this.validateJsonFormat(i18nUploadData);
            if (result.code === ERROR) {
                return result;
            }
            var i18nUploadFlatData = [];
            this.processJsonFlat(i18nStoreData.i18nVersion, i18nUploadFlatData, i18nUploadData);
            var i18nData = i18nStoreData.i18nData;
            !i18nData
                ? result.data = i18nUploadFlatData
                : result = this.processSubReplaceI18nData(i18nUploadFlatData, JSON.parse(i18nData));
            return result;
        }
        catch (err) {
            console.error(err.message);
            return {
                code: ERROR,
                msg: err.message,
                data: null
            };
        }
    }
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants_type__ = __webpack_require__(3);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};



var TRUE = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].ERROR;
var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* EXPRESS */].RES;
var STATIC_I18N_TABLE_LANGUAGE_COLUMNS = __WEBPACK_IMPORTED_MODULE_2__common_constants_type__["c" /* STATIC_I18N_TABLE_COLUMNS */].slice(7);
/* harmony default export */ __webpack_exports__["a"] = ({
    validatePropertiesFormat: function (i18nUploadData) {
        if (!Object.keys(i18nUploadData).length) {
            return {
                code: ERROR,
                msg: RES.UPLOAD_PROPERTIES_EMPTY,
                data: null
            };
        }
        return {
            code: TRUE,
            msg: '',
            data: null
        };
    },
    transformPropertiesToArray: function (i18nUploadData, version) {
        var e_1, _a;
        var i18nUploadErrData = [];
        var i18nUploadStoreData = [];
        try {
            for (var _b = __values(Object.keys(i18nUploadData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var chinese = i18nUploadData[key];
                chinese
                    ? i18nUploadStoreData.push({
                        chinese: chinese,
                        key: key,
                        version: version
                    })
                    : i18nUploadErrData.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return i18nUploadStoreData.length
            ? {
                code: TRUE,
                msg: '',
                data: {
                    i18nUploadErrData: i18nUploadErrData,
                    i18nUploadStoreData: i18nUploadStoreData
                }
            }
            : {
                code: ERROR,
                msg: RES.UPLOAD_PROPERTIES_NO_VALUE,
                data: {
                    i18nUploadErrData: i18nUploadErrData
                }
            };
    },
    processSubReplaceI18nData: function (i18nUploadData, i18nStoreData) {
        var e_2, _a;
        var isTranslated = i18nStoreData.some(function (i18n) {
            var e_3, _a;
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.value;
                    if (!i18n[key])
                        continue;
                    return true;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        });
        var isCompletelyNew = true;
        var _loop_1 = function (i18n) {
            var e_4, _a;
            var foundUploadData = i18nUploadData.find(function (upload) {
                return upload.key === i18n.key && upload.chinese === i18n.chinese;
            });
            if (!foundUploadData)
                return "continue";
            isCompletelyNew = false;
            if (!isTranslated)
                return "continue";
            try {
                for (var STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2 = __values(STATIC_I18N_TABLE_LANGUAGE_COLUMNS), STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next(); !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done; STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.next()) {
                    var key = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.value;
                    if (!i18n[key])
                        continue;
                    foundUploadData[key] = i18n[key];
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1 && !STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2_1.done && (_a = STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2.return)) _a.call(STATIC_I18N_TABLE_LANGUAGE_COLUMNS_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        try {
            for (var i18nStoreData_1 = __values(i18nStoreData), i18nStoreData_1_1 = i18nStoreData_1.next(); !i18nStoreData_1_1.done; i18nStoreData_1_1 = i18nStoreData_1.next()) {
                var i18n = i18nStoreData_1_1.value;
                _loop_1(i18n);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (i18nStoreData_1_1 && !i18nStoreData_1_1.done && (_a = i18nStoreData_1.return)) _a.call(i18nStoreData_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return isCompletelyNew
            ? {
                code: ERROR,
                msg: RES.UPLOAD_COMPLETE_NEW,
                data: null
            }
            : {
                code: TRUE,
                msg: '',
                data: {
                    i18nUploadStoreData: i18nUploadData
                }
            };
    },
    processUploadProperties: function (i18nUploadData, i18nStoreData) {
        try {
            var result = this.validatePropertiesFormat(i18nUploadData);
            if (result.code === ERROR) {
                return result;
            }
            result = this.transformPropertiesToArray(i18nUploadData, i18nStoreData.i18nVersion);
            if (result.code === ERROR) {
                return result;
            }
            var i18nData = i18nStoreData.i18nData;
            var data = result.data;
            if (i18nData) {
                result = this.processSubReplaceI18nData(data.i18nUploadStoreData, JSON.parse(i18nData));
            }
            if (result.code !== ERROR) {
                result.data = __assign({}, data, result.data);
            }
            return result;
        }
        catch (err) {
            console.error(err.message);
            return {
                code: ERROR,
                msg: err.message,
                data: null
            };
        }
    }
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_formidable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_formidable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_i18n_excel_upload_service__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};





var moment = __webpack_require__(7);
var TRUE = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].ERROR;
var RES = __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* EXPRESS */].RES;
/* harmony default export */ __webpack_exports__["a"] = (function (req, res) {
    var _this = this;
    var form = new __WEBPACK_IMPORTED_MODULE_0_formidable__["IncomingForm"]();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldsSize = 200 * 1024 * 1024;
    form.parse(req, function (err, fileds, file) { return __awaiter(_this, void 0, void 0, function () {
        var e_1, _a, e_2, _b, fileName, i18nStoreDatas, result, i18nStoreMatchUpload, i18nStoreDatas_1, i18nStoreDatas_1_1, i18nStoreData, resultData, uploadErrData, i18nStoreMatchUpload_1, i18nStoreMatchUpload_1_1, data, i18nStoreData, e_2_1, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (err) {
                        console.error(err.message);
                        res.json({
                            code: ERROR,
                            msg: err.message,
                            data: null
                        });
                        return [2];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 13, , 14]);
                    fileName = file.multExcel.name;
                    return [4, __WEBPACK_IMPORTED_MODULE_3__database_models__["a" /* default */].I18n.find({ staticId: fileds.staticId })];
                case 2:
                    i18nStoreDatas = _c.sent();
                    if (!i18nStoreDatas
                        || !i18nStoreDatas.length
                        || i18nStoreDatas.every(function (i18n) { return !i18n.i18nData; })) {
                        res.json({
                            code: ERROR,
                            msg: RES.UPLOAD_SUP_EMPTY,
                            data: null
                        });
                        return [2];
                    }
                    if (!/\.xlsx$/.test(fileName)) return [3, 11];
                    result = __WEBPACK_IMPORTED_MODULE_4__services_i18n_excel_upload_service__["a" /* default */].processUploadExcel(file);
                    if (result.code === ERROR) {
                        res.json(result);
                        return [2];
                    }
                    i18nStoreMatchUpload = [];
                    try {
                        for (i18nStoreDatas_1 = __values(i18nStoreDatas), i18nStoreDatas_1_1 = i18nStoreDatas_1.next(); !i18nStoreDatas_1_1.done; i18nStoreDatas_1_1 = i18nStoreDatas_1.next()) {
                            i18nStoreData = i18nStoreDatas_1_1.value;
                            if (!i18nStoreData.i18nData)
                                continue;
                            resultData = __WEBPACK_IMPORTED_MODULE_4__services_i18n_excel_upload_service__["a" /* default */].processReplaceI18nData(result.data, i18nStoreData, __WEBPACK_IMPORTED_MODULE_2__constant__["b" /* EXPRESS_UPLOAD_TYPE */].SKIP);
                            if (resultData.code === ERROR) {
                                res.json(resultData);
                                return [2];
                            }
                            i18nStoreMatchUpload.push(__assign({ i18nStoreData: i18nStoreData }, resultData.data));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (i18nStoreDatas_1_1 && !i18nStoreDatas_1_1.done && (_a = i18nStoreDatas_1.return)) _a.call(i18nStoreDatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    uploadErrData = [];
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 8, 9, 10]);
                    i18nStoreMatchUpload_1 = __values(i18nStoreMatchUpload), i18nStoreMatchUpload_1_1 = i18nStoreMatchUpload_1.next();
                    _c.label = 4;
                case 4:
                    if (!!i18nStoreMatchUpload_1_1.done) return [3, 7];
                    data = i18nStoreMatchUpload_1_1.value;
                    i18nStoreData = data.i18nStoreData;
                    uploadErrData = uploadErrData.concat(data.uploadErrI18nData);
                    Object.assign(i18nStoreData, {
                        i18nData: JSON.stringify(data.uploadReplaceI18nData),
                        i18nImportTime: moment().format('YYYY-MM-DD HH:mm')
                    });
                    return [4, i18nStoreData.save()];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    i18nStoreMatchUpload_1_1 = i18nStoreMatchUpload_1.next();
                    return [3, 4];
                case 7: return [3, 10];
                case 8:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (i18nStoreMatchUpload_1_1 && !i18nStoreMatchUpload_1_1.done && (_b = i18nStoreMatchUpload_1.return)) _b.call(i18nStoreMatchUpload_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 10:
                    res.json({
                        code: TRUE,
                        msg: RES.UPLOAD_SUCCESS,
                        data: uploadErrData
                    });
                    return [3, 12];
                case 11:
                    res.json({
                        code: ERROR,
                        msg: RES.UPLOAD_FORMAT_ERR,
                        data: null
                    });
                    _c.label = 12;
                case 12: return [3, 14];
                case 13:
                    err_1 = _c.sent();
                    console.error(err_1.message);
                    res.json({
                        code: ERROR,
                        msg: err_1.message,
                        data: null
                    });
                    return [3, 14];
                case 14: return [2];
            }
        });
    }); });
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_i18n_excel_download_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_i18n_json_download_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_i18n_properties_download_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TRUE = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* COMMON_CODE */].ERROR;
/* harmony default export */ __webpack_exports__["a"] = (function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var params, file, i18nStoreData, i18nData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = req.params;
                    file = params.file;
                    return [4, __WEBPACK_IMPORTED_MODULE_0__database_models__["a" /* default */].I18n.findById(params.i18nId)];
                case 1:
                    i18nStoreData = _a.sent();
                    i18nData = JSON.parse(i18nStoreData.i18nData);
                    switch (params.format) {
                        case __WEBPACK_IMPORTED_MODULE_1__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][0].value:
                            processDownloadExcel(i18nData, file, res);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_1__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][1].value:
                            __WEBPACK_IMPORTED_MODULE_3__services_i18n_json_download_service__["a" /* default */].processDownloadJson(i18nData, file, res);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_1__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][2].value:
                            __WEBPACK_IMPORTED_MODULE_4__services_i18n_properties_download_service__["a" /* default */].processDownloadProperties(i18nData, file, res);
                            break;
                        default:
                            break;
                    }
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1.message);
                    res.json({
                        code: ERROR,
                        msg: err_1.message,
                        data: null
                    });
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
});
function processDownloadExcel(i18nStoreData, file, res) {
    __WEBPACK_IMPORTED_MODULE_2__services_i18n_excel_download_service__["a" /* default */].processDownloadExcel(i18nStoreData, file, function (code, msg, data) {
        if (code === TRUE) {
            res.download(data, function (err) {
                if (err) {
                    res.send(err.message);
                }
                Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* delFile */])(data);
            });
        }
        else {
            res.send(msg);
        }
    });
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_i18n_excel_download_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_i18n_json_download_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_i18n_properties_download_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};







var TRUE = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].TRUE, ERROR = __WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* COMMON_CODE */].ERROR;
/* harmony default export */ __webpack_exports__["a"] = (function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, params, file, i18nStoreDatas, i18nStoreData, i18nStoreDatas_1, i18nStoreDatas_1_1, data, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    params = req.params;
                    file = params.file;
                    return [4, __WEBPACK_IMPORTED_MODULE_4__database_models__["a" /* default */].I18n.find({ staticId: params.staticId })];
                case 1:
                    i18nStoreDatas = _b.sent();
                    i18nStoreData = [];
                    try {
                        for (i18nStoreDatas_1 = __values(i18nStoreDatas), i18nStoreDatas_1_1 = i18nStoreDatas_1.next(); !i18nStoreDatas_1_1.done; i18nStoreDatas_1_1 = i18nStoreDatas_1.next()) {
                            data = i18nStoreDatas_1_1.value;
                            i18nStoreData = i18nStoreData.concat(JSON.parse(data.i18nData));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (i18nStoreDatas_1_1 && !i18nStoreDatas_1_1.done && (_a = i18nStoreDatas_1.return)) _a.call(i18nStoreDatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    switch (params.format) {
                        case __WEBPACK_IMPORTED_MODULE_0__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][0].value:
                            processDownloadExcel(i18nStoreData, file, res);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_0__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][1].value:
                            __WEBPACK_IMPORTED_MODULE_2__services_i18n_json_download_service__["a" /* default */].processDownloadJson(i18nStoreData, file, res);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_0__common_constants__["c" /* STATIC_I18N_DOWNLOAD_TYPE */][2].value:
                            __WEBPACK_IMPORTED_MODULE_3__services_i18n_properties_download_service__["a" /* default */].processDownloadProperties(i18nStoreData, file, res);
                            break;
                        default:
                            break;
                    }
                    return [3, 3];
                case 2:
                    err_1 = _b.sent();
                    console.error(err_1.message);
                    res.json({
                        code: ERROR,
                        msg: err_1.message,
                        data: null
                    });
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
});
function processDownloadExcel(i18nStoreData, file, res) {
    __WEBPACK_IMPORTED_MODULE_1__services_i18n_excel_download_service__["a" /* default */].processDownloadExcel(i18nStoreData, file, function (code, msg, data) {
        if (code === TRUE) {
            res.download(data, function (err) {
                if (err) {
                    res.send(err.message);
                }
                Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* delFile */])(data);
            });
        }
        else {
            res.send(msg);
        }
    });
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);

/* harmony default export */ __webpack_exports__["a"] = (function (req, res) {
    res.download(__WEBPACK_IMPORTED_MODULE_0_path__["join"](__dirname, 'files/多语言模板文件.xlsx'));
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server\\express\\services"))

/***/ })
/******/ ]);
//# sourceMappingURL=main.map