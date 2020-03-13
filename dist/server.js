/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/server/server.ts'));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/server/routes/GetSites.ts':
      /*!***************************************!*\
  !*** ./src/server/routes/GetSites.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar util_1 = __webpack_require__(/*! ./util */ "./src/server/routes/util/index.ts");\nvar GetSites = /** @class */ (function (_super) {\n    __extends(GetSites, _super);\n    function GetSites() {\n        return _super.call(this, util_1.RouteTypes.GET, \'/api/getSites\') || this;\n    }\n    GetSites.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                res.json(\'sites\');\n                return [2 /*return*/];\n            });\n        });\n    };\n    return GetSites;\n}(util_1.Route));\nexports.default = GetSites;\n\n\n//# sourceURL=webpack:///./src/server/routes/GetSites.ts?',
        );

        /***/
      },

    /***/ './src/server/routes/index.ts':
      /*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\nObject.defineProperty(exports, "__esModule", { value: true });\nvar GetSites_1 = __webpack_require__(/*! ./GetSites */ "./src/server/routes/GetSites.ts");\nexports.default = [new GetSites_1.default()];\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?',
        );

        /***/
      },

    /***/ './src/server/routes/util/Route.ts':
      /*!*****************************************!*\
  !*** ./src/server/routes/util/Route.ts ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar Route = /** @class */ (function () {\n    function Route(method, path) {\n        if (method === void 0) { method = \'get\'; }\n        this.method = method;\n        this.path = path;\n        this.internalHandle = this.internalHandle.bind(this);\n        this.handle = this.handle.bind(this);\n    }\n    /**\n     *\n     * @param req The request object\n     * @param res The reponse object\n     */\n    Route.prototype.internalHandle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                this.handle(req, res);\n                return [2 /*return*/];\n            });\n        });\n    };\n    /**\n     * Handler\n     * @param req The request object\n     * @param res The response object\n     */\n    Route.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {\n            return [2 /*return*/];\n        }); });\n    };\n    return Route;\n}());\nexports.default = Route;\n\n\n//# sourceURL=webpack:///./src/server/routes/util/Route.ts?',
        );

        /***/
      },

    /***/ './src/server/routes/util/RouteTypes.ts':
      /*!**********************************************!*\
  !*** ./src/server/routes/util/RouteTypes.ts ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    GET: 'get',\n    POST: 'post',\n};\n\n\n//# sourceURL=webpack:///./src/server/routes/util/RouteTypes.ts?",
        );

        /***/
      },

    /***/ './src/server/routes/util/index.ts':
      /*!*****************************************!*\
  !*** ./src/server/routes/util/index.ts ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\nObject.defineProperty(exports, "__esModule", { value: true });\nvar RouteTypes_1 = __webpack_require__(/*! ./RouteTypes */ "./src/server/routes/util/RouteTypes.ts");\nexports.RouteTypes = RouteTypes_1.default;\nvar Route_1 = __webpack_require__(/*! ./Route */ "./src/server/routes/util/Route.ts");\nexports.Route = Route_1.default;\n\n\n//# sourceURL=webpack:///./src/server/routes/util/index.ts?',
        );

        /***/
      },

    /***/ './src/server/server.ts':
      /*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\nObject.defineProperty(exports, "__esModule", { value: true });\nvar express = __webpack_require__(/*! express */ "express");\nvar helmet = __webpack_require__(/*! helmet */ "helmet");\nvar bodyParser = __webpack_require__(/*! body-parser */ "body-parser");\nvar routes_1 = __webpack_require__(/*! ./routes */ "./src/server/routes/index.ts");\nvar app = express();\napp.use(helmet());\napp.use(bodyParser());\nroutes_1.default.forEach(function (route) { return app[route.method](route.path, route.internalHandle); });\napp.use(express.static(\'public\'));\napp.listen(process.env.PORT || 3000, function () { return console.log("Server listening on port: " + (process.env.port || 3000)); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?',
        );

        /***/
      },

    /***/ 'body-parser':
      /*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('module.exports = require("body-parser");\n\n//# sourceURL=webpack:///external_%22body-parser%22?');

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?');

        /***/
      },

    /***/ helmet:
      /*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('module.exports = require("helmet");\n\n//# sourceURL=webpack:///external_%22helmet%22?');

        /***/
      },

    /******/
  },
);
