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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grqphql_util__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__grqphql_util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ldapjs_util__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ldapjs_util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md5_util__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__md5_util__["a"]; });





/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql_constant__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql_constant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_constant__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__md5_constant__["a"]; });




/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__code__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(24);
/* unused harmony namespace reexport */




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graphql__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);




__WEBPACK_IMPORTED_MODULE_0_dotenv__["config"]();
__WEBPACK_IMPORTED_MODULE_1__database__["a" /* startDB */]();
var server = __WEBPACK_IMPORTED_MODULE_2__graphql__["a" /* startServer */]();
var nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](__webpack_require__(31));
if (false) {
    var builder = new Builder(nuxt);
    builder.build();
}
server.express.use(nuxt.render);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var startDB = function () {
    var url = process.env["MONGODB_URI_" + "production"];
    __WEBPACK_IMPORTED_MODULE_0_mongoose__["connect"](url, { useNewUrlParser: true }, function () {
        console.log("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Mongoose is running on " + url);
    });
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_yoga__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_yoga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_yoga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_import__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_import___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_import__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_models__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dotenv__);





var session = __webpack_require__(29);

__WEBPACK_IMPORTED_MODULE_5_dotenv__["config"]();
var startServer = function () {
    var context = function (req) { return ({
        models: __WEBPACK_IMPORTED_MODULE_2__database_models__["a" /* default */],
        req: req.request
    }); };
    var port = process.env["DEV_PORT_" + process.env.DEV_TYPE] || process.env.PRO_PORT;
    var options = {
        cors: {
            origin: false
        },
        port: port,
        endpoint: '/graphql',
        playground: process.env.DEV_TYPE === 'server' ? '/playground' : false
    };
    var server = new __WEBPACK_IMPORTED_MODULE_0_graphql_yoga__["GraphQLServer"]({
        context: context,
        resolvers: __WEBPACK_IMPORTED_MODULE_3__resolvers__["a" /* default */],
        middlewares: __WEBPACK_IMPORTED_MODULE_4__middlewares__["a" /* default */],
        typeDefs: Object(__WEBPACK_IMPORTED_MODULE_1_graphql_import__["importSchema"])('server/graphql/schemas/index.graphql')
    });
    server.express.use(session({
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_model__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = ({
    User: __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* default */],
    Project: __WEBPACK_IMPORTED_MODULE_1__project_model__["a" /* default */]
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
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
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        set: function (password) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* createMd5Password */])(password);
        }
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginOA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ldapjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ldapjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ldapjs__);


__WEBPACK_IMPORTED_MODULE_0_dotenv__["config"]();
var client = __WEBPACK_IMPORTED_MODULE_1_ldapjs__["createClient"]({
    url: process.env.LOAP_URI
});
var loginOA = function (username, password) {
    return new Promise(function (resolve) {
        client.bind(username, password, function (err) {
            client.destroy();
            resolve(err ? false : true);
        });
    });
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("ldapjs");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMd5Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(3);


var createMd5Password = function (password) {
    return __WEBPACK_IMPORTED_MODULE_0_crypto__["createHash"]('md5').update("" + password + __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* MD5 */].SALT, 'utf8').digest('base64');
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 18 */
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
        QUERY_FAIL: '查询失败！'
    }
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD5; });
var MD5 = {
    SALT: '!@#$$%%^%$%^$%#$*^*&@@!@#$@&^&*^'
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(4);
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
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        index: true
    }
}, __assign({}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */], { _id: false }));
var ProjectSchema = new Schema({
    projectName: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    projectUserId: {
        type: String,
        required: true,
        trim: true
    },
    projectMember: MemberSchema,
    projectDesc: String
}, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* default */]);
ProjectSchema.virtual('projectId').get(function () {
    return this._id.toString();
});
var Project = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('Project', ProjectSchema);
/* harmony default export */ __webpack_exports__["a"] = (Project);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_resolver__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_resolver__ = __webpack_require__(26);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var resolvers = {
    Mutation: __assign({}, __WEBPACK_IMPORTED_MODULE_0__user_resolver__["a" /* default */].mutation, __WEBPACK_IMPORTED_MODULE_1__project_resolver__["a" /* default */].mutation),
    Query: __assign({}, __WEBPACK_IMPORTED_MODULE_0__user_resolver__["a" /* default */].query, __WEBPACK_IMPORTED_MODULE_1__project_resolver__["a" /* default */].query)
};
/* harmony default export */ __webpack_exports__["a"] = (resolvers);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(5);
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




var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].TRUE;
var key = new (__webpack_require__(25))({ b: 512 });
key.setOptions({ encryptionScheme: 'pkcs1' });
var mutation = {
    login: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            function decrypt(password) {
                return key.decrypt(password.replace(/\s+/g, '+'), 'utf8');
            }
            var username, password, User, user, loginSuccess, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('login: ');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        username = args.username, password = args.password;
                        User = models.User;
                        return [4, User.findOne({ username: username })];
                    case 2:
                        user = _b.sent();
                        if (!user) return [3, 3];
                        if (user.password === Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* createMd5Password */])(decrypt(password))) {
                            if (req.session) {
                                req.session.user = user;
                                console.log('login: ', req.sessionID);
                                console.log('login user: ', req.session.user);
                            }
                            return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(TRUE, RES.LOGIN_SUCCESS)];
                        }
                        else {
                            return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, RES.USER_ERR)];
                        }
                        return [3, 7];
                    case 3:
                        password = decrypt(password);
                        return [4, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* loginOA */])(username, password)];
                    case 4:
                        loginSuccess = _b.sent();
                        if (!loginSuccess) return [3, 6];
                        return [4, User.create({
                                username: username,
                                password: password
                            })];
                    case 5:
                        user = _b.sent();
                        if (req.session)
                            req.session.user = user;
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(TRUE, RES.LOGIN_SUCCESS)];
                    case 6: return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, RES.USER_ERR)];
                    case 7: return [3, 9];
                    case 8:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, err_1.message)];
                    case 9: return [2];
                }
            });
        });
    },
    logout: function (parent, args, _a) {
        var req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (req.session) {
                    req.session.user = null;
                }
                return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(TRUE, RES.LOGIN_SUCCESS)];
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
                return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(publicKey ? TRUE : ERROR, publicKey ? '' : RES.KEY_ERR, publicKey)];
            });
        });
    },
    users: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var users, session, _userId_1, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, models.User.find()];
                    case 1:
                        users = _b.sent();
                        session = req.session;
                        if (session && session.user) {
                            _userId_1 = session.user.userId;
                            return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, users.filter(function (user) { return user.userId !== _userId_1; }))];
                        }
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, RES.QUERY_FAIL)];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, err_2.message)];
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON_CODE; });
var COMMON_CODE;
(function (COMMON_CODE) {
    COMMON_CODE[COMMON_CODE["ERROR"] = -1] = "ERROR";
    COMMON_CODE[COMMON_CODE["TRUE"] = 0] = "TRUE";
})(COMMON_CODE || (COMMON_CODE = {}));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMMON_MSG */
var COMMON_MSG = {
    NOT_LOGIN: 'Not login!'
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("node-rsa");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(5);
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



var RES = __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* GRAPHQL */].RES;
var ERROR = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].ERROR, TRUE = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* COMMON_CODE */].TRUE;
var mutation = {
    addProject: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        try {
            console.log(req);
        }
        catch (err) {
        }
    }
};
var query = {
    projects: function (parent, args, _a) {
        var models = _a.models, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var projects, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('projects: ', req.sessionID);
                        if (req.session)
                            console.log('projects: ', req.session.user);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, models.Project.find()];
                    case 2:
                        projects = _b.sent();
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(TRUE, RES.QUERY_SUCCESS, projects)];
                    case 3:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [2, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* resolveResponse */])(ERROR, err_1.message)];
                    case 4: return [2];
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_middleware__ = __webpack_require__(28);

var middlewares = __WEBPACK_IMPORTED_MODULE_0__auth_middleware__["a" /* default */].slice();
/* harmony default export */ __webpack_exports__["a"] = (middlewares);


/***/ }),
/* 28 */
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
    var req, query;
    return __generator(this, function (_a) {
        req = ctx.req;
        query = req.body.query;
        return [2, resolve()];
    });
}); };
/* harmony default export */ __webpack_exports__["a"] = ([
    isLogginIn
]);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

const parseArgs = __webpack_require__(32);
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
});

module.exports = {

  // Web前端请求代理地址
  proxyHttp: 'http://10.13.64.122:5000/graphql',

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
    src: '~/assets/scrollbar/scrollbar.css'
  }],
  build: {
    vendor: ['muse-ui', 'lokka', 'lokka-transport-http', 'muse-ui-toast/dist/muse-ui-toast.common', 'vuedraggable', 'jsencrypt']
  },

  plugins: ['~/plugins/museui', { src: '~/plugins/jsencrypt.ts', ssr: false }],

  modules: ["~/modules/typescript.js"]
};

/***/ }),
/* 32 */
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



/***/ })
/******/ ]);
//# sourceMappingURL=main.map