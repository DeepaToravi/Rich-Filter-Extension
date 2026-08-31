(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q2 = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q2.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q2[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q2[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  }
  function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path;
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      };
      ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __esDecorate,
        __runInitializers,
        __propKey,
        __setFunctionName,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
        __rewriteRelativeImportExtension
      };
    }
  });

  // node_modules/@forge/bridge/out/router/targets.js
  var require_targets = __commonJS({
    "node_modules/@forge/bridge/out/router/targets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NavigationTarget = void 0;
      exports.NavigationTarget = {
        ContentView: "contentView",
        ContentEdit: "contentEdit",
        ContentList: "contentList",
        SpaceView: "spaceView",
        Module: "module",
        UserProfile: "userProfile",
        Dashboard: "dashboard",
        Issue: "issue",
        ProjectSettingsDetails: "projectSettingsDetails"
      };
    }
  });

  // node_modules/@forge/bridge/out/errors.js
  var require_errors = __commonJS({
    "node_modules/@forge/bridge/out/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BridgeAPIError = void 0;
      var BridgeAPIError = class extends Error {
      };
      exports.BridgeAPIError = BridgeAPIError;
    }
  });

  // node_modules/@forge/bridge/out/bridge.js
  var require_bridge = __commonJS({
    "node_modules/@forge/bridge/out/bridge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getCallBridge = void 0;
      var errors_1 = require_errors();
      function isBridgeAvailable(bridge) {
        return !!(bridge === null || bridge === void 0 ? void 0 : bridge.callBridge);
      }
      var getCallBridge = () => {
        if (!isBridgeAvailable(window.__bridge)) {
          throw new errors_1.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
        }
        return window.__bridge.callBridge;
      };
      exports.getCallBridge = getCallBridge;
    }
  });

  // node_modules/@forge/bridge/out/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@forge/bridge/out/utils/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.withRateLimiter = void 0;
      var errors_1 = require_errors();
      var withRateLimiter = (wrappedFn, maxOps, intervalInMs, exceededErrorMessage) => {
        let start = Date.now();
        let numOps = 0;
        return async (...args) => {
          const now = Date.now();
          const elapsed = now - start;
          if (elapsed > intervalInMs) {
            start = now;
            numOps = 0;
          }
          if (numOps >= maxOps) {
            throw new errors_1.BridgeAPIError(exceededErrorMessage || "Too many invocations.");
          }
          numOps = numOps + 1;
          return wrappedFn(...args);
        };
      };
      exports.withRateLimiter = withRateLimiter;
    }
  });

  // node_modules/@forge/bridge/out/invoke/invoke.js
  var require_invoke = __commonJS({
    "node_modules/@forge/bridge/out/invoke/invoke.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.makeInvoke = exports.invoke = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload)
          return;
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _invoke = (functionKey, payload) => {
        if (typeof functionKey !== "string") {
          throw new errors_1.BridgeAPIError("functionKey must be a string!");
        }
        validatePayload(payload);
        return callBridge("invoke", { functionKey, payload });
      };
      exports.invoke = (0, utils_1.withRateLimiter)(_invoke, 500, 1e3 * 25, "Resolver calls are rate limited at 500req/25s");
      function makeInvoke() {
        return exports.invoke;
      }
      exports.makeInvoke = makeInvoke;
    }
  });

  // node_modules/@forge/bridge/out/invoke/index.js
  var require_invoke2 = __commonJS({
    "node_modules/@forge/bridge/out/invoke/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_invoke(), exports);
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js
  var require_invoke_endpoint = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._invokeEndpointFn = exports.InvokeType = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var MAX_NUM_OPERATIONS = 500;
      var OPERATION_INTERVAL_SEC = 25;
      var OPERATION_INTERVAL_MS = 1e3 * OPERATION_INTERVAL_SEC;
      var InvokeType;
      (function(InvokeType2) {
        InvokeType2["REMOTE"] = "Remote";
        InvokeType2["SERVICE"] = "Container";
      })(InvokeType = exports.InvokeType || (exports.InvokeType = {}));
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload)
          return;
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _setupInvokeEndpointFn = (invokeType) => async (input) => {
        validatePayload(input);
        const callBridgePayload = {
          ...input,
          invokeType: `ui-${invokeType.toLowerCase()}-fetch`
        };
        const bridgeResponse = await callBridge("invoke", callBridgePayload);
        const { success, payload, error } = bridgeResponse !== null && bridgeResponse !== void 0 ? bridgeResponse : {};
        const response = { ...success ? payload : error };
        if (response && response.headers) {
          for (const header in response.headers) {
            if (Array.isArray(response.headers[header])) {
              response.headers[header] = response.headers[header].join(",");
            }
          }
        }
        return response;
      };
      var _invokeEndpointFn = (invokeType) => {
        const invokeEndpointFn = _setupInvokeEndpointFn(invokeType);
        return (0, utils_1.withRateLimiter)(invokeEndpointFn, MAX_NUM_OPERATIONS, OPERATION_INTERVAL_MS, `${invokeType} invocation calls are rate limited at ${MAX_NUM_OPERATIONS}/${OPERATION_INTERVAL_SEC}s`);
      };
      exports._invokeEndpointFn = _invokeEndpointFn;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js
  var require_invoke_remote = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invokeRemote = void 0;
      var invoke_endpoint_1 = require_invoke_endpoint();
      var invokeRemote = (input) => {
        const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.REMOTE);
        return invokeEndpoint(input);
      };
      exports.invokeRemote = invokeRemote;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js
  var require_invoke_service = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invokeService = void 0;
      var invoke_endpoint_1 = require_invoke_endpoint();
      var invokeService = (input) => {
        const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.SERVICE);
        return invokeEndpoint(input);
      };
      exports.invokeService = invokeService;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/index.js
  var require_invoke_endpoint2 = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_invoke_remote(), exports);
      tslib_1.__exportStar(require_invoke_service(), exports);
    }
  });

  // node_modules/@forge/bridge/out/view/submit.js
  var require_submit = __commonJS({
    "node_modules/@forge/bridge/out/view/submit.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.submit = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var submit = async (payload) => {
        const success = await callBridge("submit", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not submittable.");
        }
      };
      exports.submit = submit;
    }
  });

  // node_modules/@forge/bridge/out/view/close.js
  var require_close = __commonJS({
    "node_modules/@forge/bridge/out/view/close.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.close = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var close = async (payload) => {
        try {
          const success = await callBridge("close", payload);
          if (success === false) {
            throw new errors_1.BridgeAPIError("this resource's view is not closable.");
          }
        } catch (e) {
          throw new errors_1.BridgeAPIError("this resource's view is not closable.");
        }
      };
      exports.close = close;
    }
  });

  // node_modules/@forge/bridge/out/view/open.js
  var require_open = __commonJS({
    "node_modules/@forge/bridge/out/view/open.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.open = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var open = async () => {
        try {
          const success = await callBridge("open");
          if (success === false) {
            throw new errors_1.BridgeAPIError("this resource's view is not openable.");
          }
        } catch (e) {
          throw new errors_1.BridgeAPIError("this resource's view is not openable.");
        }
      };
      exports.open = open;
    }
  });

  // node_modules/@forge/bridge/out/view/refresh.js
  var require_refresh = __commonJS({
    "node_modules/@forge/bridge/out/view/refresh.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.refresh = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var refresh = async (payload) => {
        const success = await callBridge("refresh", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not refreshable.");
        }
      };
      exports.refresh = refresh;
    }
  });

  // node_modules/@forge/bridge/out/view/createHistory.js
  var require_createHistory = __commonJS({
    "node_modules/@forge/bridge/out/view/createHistory.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createHistory = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var createHistory = async () => {
        const history = await callBridge("createHistory");
        history.listen((location) => {
          history.location = location;
        });
        return history;
      };
      exports.createHistory = createHistory;
    }
  });

  // node_modules/@forge/i18n/out/constants.js
  var require_constants = __commonJS({
    "node_modules/@forge/i18n/out/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FORGE_SUPPORTED_LOCALE_CODES = exports.I18N_BUNDLE_FOLDER_NAME = exports.I18N_INFO_FILE_NAME = void 0;
      exports.I18N_INFO_FILE_NAME = "i18n-info.json";
      exports.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__";
      exports.FORGE_SUPPORTED_LOCALE_CODES = [
        "zh-CN",
        "zh-TW",
        "cs-CZ",
        "da-DK",
        "nl-NL",
        "en-US",
        "en-GB",
        "et-EE",
        "fi-FI",
        "fr-FR",
        "de-DE",
        "hu-HU",
        "is-IS",
        "it-IT",
        "ja-JP",
        "ko-KR",
        "no-NO",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "sk-SK",
        "tr-TR",
        "es-ES",
        "sv-SE"
      ];
    }
  });

  // node_modules/@forge/i18n/out/translationsGetter.js
  var require_translationsGetter = __commonJS({
    "node_modules/@forge/i18n/out/translationsGetter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TranslationsGetter = exports.TranslationGetterError = void 0;
      var pushIfNotExists = (array, item) => {
        if (!array.includes(item)) {
          array.push(item);
        }
      };
      var TranslationGetterError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "TranslationGetterError";
        }
      };
      exports.TranslationGetterError = TranslationGetterError;
      var TranslationsGetter = class {
        resourcesAccessor;
        i18nInfoConfig = null;
        translationResources = /* @__PURE__ */ new Map();
        constructor(resourcesAccessor) {
          this.resourcesAccessor = resourcesAccessor;
        }
        async getTranslations(locale, options = { fallback: true }) {
          const i18nInfoConfig = await this.getI18nInfoConfig();
          const { fallback } = options;
          if (!fallback) {
            let translationResource;
            if (i18nInfoConfig.locales.includes(locale)) {
              translationResource = await this.getTranslationResource(locale);
            }
            return {
              translations: translationResource ?? null,
              locale
            };
          }
          for (const targetLocale of this.getLocaleLookupOrder(locale, i18nInfoConfig)) {
            const translationResource = await this.getTranslationResource(targetLocale);
            if (translationResource) {
              return {
                translations: translationResource,
                locale: targetLocale
              };
            }
          }
          return {
            translations: null,
            locale
          };
        }
        async getTranslationsByLocaleLookupOrder(locale) {
          const i18nInfoConfig = await this.getI18nInfoConfig();
          const lookupOrder = this.getLocaleLookupOrder(locale, i18nInfoConfig);
          return await Promise.all(lookupOrder.map(async (targetLocale) => {
            const translationResource = await this.getTranslationResource(targetLocale);
            return {
              locale: targetLocale,
              translations: translationResource
            };
          }));
        }
        reset() {
          this.i18nInfoConfig = null;
          this.translationResources.clear();
        }
        async getTranslationResource(locale) {
          let resource = this.translationResources.get(locale);
          if (!resource) {
            try {
              resource = await this.resourcesAccessor.getTranslationResource(locale);
              this.translationResources.set(locale, resource);
            } catch (error) {
              if (error instanceof TranslationGetterError) {
                throw error;
              }
              throw new TranslationGetterError(`Failed to get translation resource for locale: ${locale}`);
            }
          }
          return resource;
        }
        async getI18nInfoConfig() {
          if (!this.i18nInfoConfig) {
            try {
              this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
            } catch (error) {
              if (error instanceof TranslationGetterError) {
                throw error;
              }
              throw new TranslationGetterError("Failed to get i18n info config");
            }
          }
          return this.i18nInfoConfig;
        }
        getLocaleLookupOrder(locale, config) {
          const { locales, fallback } = config;
          const lookupOrder = [locale];
          const fallbackLocales = fallback[locale];
          if (fallbackLocales && Array.isArray(fallbackLocales) && fallbackLocales.length > 0) {
            lookupOrder.push(...fallbackLocales);
          }
          pushIfNotExists(lookupOrder, config.fallback.default);
          return lookupOrder.filter((locale2) => locales.includes(locale2));
        }
      };
      exports.TranslationsGetter = TranslationsGetter;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // node_modules/@forge/i18n/out/translationValueGetter.js
  var require_translationValueGetter = __commonJS({
    "node_modules/@forge/i18n/out/translationValueGetter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTranslationValueFromContent = exports.getTranslationValue = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var get_1 = tslib_1.__importDefault(require_get());
      var getTranslationValue = (translationLookup, i18nKey, locale) => {
        const translation = translationLookup[locale];
        if (!translation) {
          return null;
        }
        return (0, exports.getTranslationValueFromContent)(translation, i18nKey);
      };
      exports.getTranslationValue = getTranslationValue;
      var getTranslationValueFromContent = (translationContent, i18nKey) => {
        let translationValue = translationContent[i18nKey];
        if (!translationValue) {
          const keyTokens = i18nKey.split(".");
          if (keyTokens.length > 1) {
            translationValue = (0, get_1.default)(translationContent, keyTokens, null);
          }
        }
        return typeof translationValue === "string" ? translationValue : null;
      };
      exports.getTranslationValueFromContent = getTranslationValueFromContent;
    }
  });

  // node_modules/@forge/i18n/out/translator.js
  var require_translator = __commonJS({
    "node_modules/@forge/i18n/out/translator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Translator = void 0;
      var translationValueGetter_1 = require_translationValueGetter();
      var Translator = class {
        locale;
        translationsGetter;
        localeLookupOrderedTranslations = null;
        cache = /* @__PURE__ */ new Map();
        constructor(locale, translationsGetter) {
          this.locale = locale;
          this.translationsGetter = translationsGetter;
        }
        async init() {
          this.localeLookupOrderedTranslations = await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
        }
        translate(i18nKey) {
          if (!this.localeLookupOrderedTranslations) {
            throw new Error("TranslationLookup not initialized");
          }
          let result = this.cache.get(i18nKey);
          if (result === void 0) {
            for (const { translations } of this.localeLookupOrderedTranslations) {
              const translationValue = (0, translationValueGetter_1.getTranslationValueFromContent)(translations, i18nKey);
              if (translationValue !== null) {
                result = translationValue;
                break;
              }
            }
            result = result ?? null;
            this.cache.set(i18nKey, result);
          }
          return result;
        }
      };
      exports.Translator = Translator;
    }
  });

  // node_modules/@forge/i18n/out/ensureLocale.js
  var require_ensureLocale = __commonJS({
    "node_modules/@forge/i18n/out/ensureLocale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ensureLocale = void 0;
      var constants_1 = require_constants();
      var forgeSupportedLocaleCodesSet = new Set(constants_1.FORGE_SUPPORTED_LOCALE_CODES);
      var localeFallbacks = {
        "en-UK": "en-GB",
        "nb-NO": "no-NO"
      };
      var languageToLocaleCodeMap = constants_1.FORGE_SUPPORTED_LOCALE_CODES.reduce((agg, code) => {
        const [lng] = code.split("-");
        if (!agg[lng]) {
          agg[lng] = code;
        }
        return agg;
      }, {
        nb: "no-NO",
        pt: "pt-PT"
      });
      var ensureLocale = (rawLocale) => {
        const locale = rawLocale.replace("_", "-");
        if (forgeSupportedLocaleCodesSet.has(locale)) {
          return locale;
        }
        return languageToLocaleCodeMap[locale] ?? localeFallbacks[locale] ?? null;
      };
      exports.ensureLocale = ensureLocale;
    }
  });

  // node_modules/@forge/i18n/out/moduleI18nHelper.js
  var require_moduleI18nHelper = __commonJS({
    "node_modules/@forge/i18n/out/moduleI18nHelper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getI18nSupportedModuleEntries = void 0;
      var isObject = (value) => {
        return typeof value === "object" && value !== null && !Array.isArray(value);
      };
      var isI18nValue = (value) => {
        return typeof (value == null ? void 0 : value.i18n) === "string";
      };
      var isConnectModuleKey = (moduleKey) => moduleKey.startsWith("connect-");
      var isCoreModuleKey = (moduleKey) => moduleKey.startsWith("core:");
      var getI18nKeysFromObject = (obj) => {
        const visited = /* @__PURE__ */ new Set();
        const visit = (value, i18nPath) => {
          if (!isObject(value) || visited.has(value)) {
            return [];
          }
          visited.add(value);
          return Object.entries(value).flatMap(([propKey, propValue]) => {
            const currentPath = [...i18nPath, propKey];
            if (isI18nValue(propValue)) {
              return [{ propertyPath: currentPath, key: propValue.i18n }];
            } else if (Array.isArray(propValue)) {
              return propValue.flatMap((item) => visit(item, currentPath));
            }
            return visit(propValue, currentPath);
          });
        };
        return visit(obj, []);
      };
      var getI18nSupportedModuleEntries = (modules) => {
        return Object.entries(modules).flatMap(([moduleKey, moduleEntries]) => {
          if (!isConnectModuleKey(moduleKey) && !isCoreModuleKey(moduleKey) && moduleEntries && Array.isArray(moduleEntries) && moduleEntries.length > 0) {
            return moduleEntries.map((moduleEntry) => [moduleEntry, moduleKey]);
          }
          return [];
        });
      };
      exports.getI18nSupportedModuleEntries = getI18nSupportedModuleEntries;
      var extractI18nKeysFromModules = (modules) => {
        const i18nKeys = /* @__PURE__ */ new Set();
        for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
          const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
          for (const { key } of i18nKeysForEntryValue) {
            i18nKeys.add(key);
          }
        }
        return i18nKeys.size > 0 ? Array.from(i18nKeys) : [];
      };
      exports.extractI18nKeysFromModules = extractI18nKeysFromModules;
      var extractI18nPropertiesFromModules = (modules) => {
        const moduleI18nProperties = [];
        for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
          const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
          for (const i18nObj of i18nKeysForEntryValue) {
            moduleI18nProperties.push({ moduleName: moduleEntry[1], ...i18nObj });
          }
        }
        return moduleI18nProperties;
      };
      exports.extractI18nPropertiesFromModules = extractI18nPropertiesFromModules;
    }
  });

  // node_modules/@forge/i18n/out/types.js
  var require_types = __commonJS({
    "node_modules/@forge/i18n/out/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@forge/i18n/out/index.js
  var require_out = __commonJS({
    "node_modules/@forge/i18n/out/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getI18nSupportedModuleEntries = exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getTranslationValue = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_constants(), exports);
      tslib_1.__exportStar(require_translationsGetter(), exports);
      tslib_1.__exportStar(require_translator(), exports);
      tslib_1.__exportStar(require_ensureLocale(), exports);
      var translationValueGetter_1 = require_translationValueGetter();
      Object.defineProperty(exports, "getTranslationValue", { enumerable: true, get: function() {
        return translationValueGetter_1.getTranslationValue;
      } });
      var moduleI18nHelper_1 = require_moduleI18nHelper();
      Object.defineProperty(exports, "extractI18nKeysFromModules", { enumerable: true, get: function() {
        return moduleI18nHelper_1.extractI18nKeysFromModules;
      } });
      Object.defineProperty(exports, "extractI18nPropertiesFromModules", { enumerable: true, get: function() {
        return moduleI18nHelper_1.extractI18nPropertiesFromModules;
      } });
      Object.defineProperty(exports, "getI18nSupportedModuleEntries", { enumerable: true, get: function() {
        return moduleI18nHelper_1.getI18nSupportedModuleEntries;
      } });
      tslib_1.__exportStar(require_types(), exports);
    }
  });

  // node_modules/@forge/bridge/out/view/getContext.js
  var require_getContext = __commonJS({
    "node_modules/@forge/bridge/out/view/getContext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getContext = void 0;
      var bridge_1 = require_bridge();
      var i18n_1 = require_out();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getContext = async () => {
        var _a;
        const context = await callBridge("getContext");
        const locale = context === null || context === void 0 ? void 0 : context.locale;
        if (locale) {
          context.locale = (_a = (0, i18n_1.ensureLocale)(locale)) !== null && _a !== void 0 ? _a : locale;
        }
        return context;
      };
      exports.getContext = getContext;
    }
  });

  // node_modules/@forge/bridge/out/view/changeWindowTitle.js
  var require_changeWindowTitle = __commonJS({
    "node_modules/@forge/bridge/out/view/changeWindowTitle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.changeWindowTitle = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var changeWindowTitle = async (title) => {
        try {
          await callBridge("changeWindowTitle", title);
        } catch (e) {
          throw new errors_1.BridgeAPIError("the window title wasn't changed due to error.");
        }
      };
      exports.changeWindowTitle = changeWindowTitle;
    }
  });

  // node_modules/@forge/bridge/out/view/theme.js
  var require_theme = __commonJS({
    "node_modules/@forge/bridge/out/view/theme.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.theme = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      exports.theme = {
        enable: () => callBridge("enableTheming")
      };
    }
  });

  // node_modules/@forge/bridge/out/utils/blobParser.js
  var require_blobParser = __commonJS({
    "node_modules/@forge/bridge/out/utils/blobParser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.blobToBase64 = exports.base64ToBlob = void 0;
      var base64ToBlob = (b64string, mimeType) => {
        if (!b64string) {
          return null;
        }
        const base64Data = b64string.includes(";base64") ? b64string.split(",")[1] : b64string;
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
      };
      exports.base64ToBlob = base64ToBlob;
      var blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };
      exports.blobToBase64 = blobToBase64;
    }
  });

  // node_modules/@forge/bridge/out/events/serialiseBlob.js
  var require_serialiseBlob = __commonJS({
    "node_modules/@forge/bridge/out/events/serialiseBlob.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.containsSerialisedBlobs = exports.containsBlobs = exports.deserialiseBlobsInPayload = exports.serialiseBlobsInPayload = void 0;
      var blobParser_1 = require_blobParser();
      var isPlainObject = (value) => {
        if (typeof value !== "object" || value === null)
          return false;
        if (Object.prototype.toString.call(value) !== "[object Object]")
          return false;
        const proto = Object.getPrototypeOf(value);
        if (proto === null)
          return true;
        const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
      };
      var blobToBase64WithMetadata = async (blob) => {
        const base64Data = await (0, blobParser_1.blobToBase64)(blob);
        return {
          data: base64Data,
          type: blob.type
        };
      };
      var base64WithMetadataToBlob = (metadata) => {
        return (0, blobParser_1.base64ToBlob)(metadata.data, metadata.type);
      };
      var serialiseBlobsInPayload = async (payload) => {
        if (payload instanceof Blob) {
          const blobData = await blobToBase64WithMetadata(payload);
          return {
            ...blobData,
            __isBlobData: true
          };
        }
        if (Array.isArray(payload)) {
          return Promise.all(payload.map((item) => (0, exports.serialiseBlobsInPayload)(item)));
        }
        if (payload && isPlainObject(payload)) {
          const entries = await Promise.all(Object.entries(payload).map(async ([key, value]) => [key, await (0, exports.serialiseBlobsInPayload)(value)]));
          return Object.fromEntries(entries);
        }
        return payload;
      };
      exports.serialiseBlobsInPayload = serialiseBlobsInPayload;
      var deserialiseBlobsInPayload = (payload) => {
        if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
          const typedData = payload;
          return base64WithMetadataToBlob({
            data: typedData.data,
            type: typedData.type
          });
        }
        if (Array.isArray(payload)) {
          return payload.map((item) => (0, exports.deserialiseBlobsInPayload)(item));
        }
        if (payload && isPlainObject(payload)) {
          const result = {};
          for (const [key, value] of Object.entries(payload)) {
            result[key] = (0, exports.deserialiseBlobsInPayload)(value);
          }
          return result;
        }
        return payload;
      };
      exports.deserialiseBlobsInPayload = deserialiseBlobsInPayload;
      var containsBlobs = (payload) => {
        if (payload instanceof Blob) {
          return true;
        }
        if (Array.isArray(payload)) {
          return payload.some((item) => (0, exports.containsBlobs)(item));
        }
        if (payload && isPlainObject(payload)) {
          return Object.values(payload).some((value) => (0, exports.containsBlobs)(value));
        }
        return false;
      };
      exports.containsBlobs = containsBlobs;
      var containsSerialisedBlobs = (payload) => {
        if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
          return true;
        }
        if (Array.isArray(payload)) {
          return payload.some((item) => (0, exports.containsSerialisedBlobs)(item));
        }
        if (payload && isPlainObject(payload)) {
          return Object.values(payload).some((value) => (0, exports.containsSerialisedBlobs)(value));
        }
        return false;
      };
      exports.containsSerialisedBlobs = containsSerialisedBlobs;
    }
  });

  // node_modules/@forge/bridge/out/events/events.js
  var require_events = __commonJS({
    "node_modules/@forge/bridge/out/events/events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.events = void 0;
      var bridge_1 = require_bridge();
      var serialiseBlob_1 = require_serialiseBlob();
      var callBridge = (0, bridge_1.getCallBridge)();
      var wrapCallback = (callback) => {
        return (payload) => {
          let newPayload = payload;
          if ((0, serialiseBlob_1.containsSerialisedBlobs)(payload)) {
            newPayload = (0, serialiseBlob_1.deserialiseBlobsInPayload)(payload);
          }
          return callback(newPayload);
        };
      };
      var emit = async (event, payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsBlobs)(payload)) {
          newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
        }
        return callBridge("emit", { event, payload: newPayload });
      };
      var on = (event, callback) => {
        return callBridge("on", { event, callback: wrapCallback(callback) });
      };
      var emitPublic = async (event, payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsBlobs)(payload)) {
          newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
        }
        return callBridge("emitPublic", { event, payload: newPayload });
      };
      var onPublic = (event, callback) => {
        return callBridge("onPublic", { event, callback: wrapCallback(callback) });
      };
      exports.events = {
        emit,
        on,
        emitPublic,
        onPublic
      };
    }
  });

  // node_modules/@forge/bridge/out/view/emitReadyEvent.js
  var require_emitReadyEvent = __commonJS({
    "node_modules/@forge/bridge/out/view/emitReadyEvent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.emitReadyEvent = void 0;
      var events_1 = require_events();
      var view_1 = require_view();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var EXTENSION_READY = "EXTENSION_READY";
      var emitReadyEvent = async () => {
        const context = await view_1.view.getContext();
        await events_1.events.emit(EXTENSION_READY, {
          localId: context.localId
        });
        try {
          await callBridge("emitReadyEvent");
        } catch {
        }
      };
      exports.emitReadyEvent = emitReadyEvent;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports.URL = URL2;
      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q2, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q2), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/iframe-resizer/js/iframeResizer.js
  var require_iframeResizer = __commonJS({
    "node_modules/iframe-resizer/js/iframeResizer.js"(exports, module) {
      console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`);
      (function(undefined2) {
        if (typeof window === "undefined") return;
        var count = 0, destroyObserver, logEnabled = false, hiddenCheckEnabled = false, msgHeader = "message", msgHeaderLen = msgHeader.length, msgId = "[iFrameSizer]", msgIdLen = msgId.length, pagePosition = null, requestAnimationFrame = window.requestAnimationFrame, resetRequiredMethods = Object.freeze({
          max: 1,
          scroll: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        }), settings = {}, timer = null, defaults = Object.freeze({
          autoResize: true,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: true,
          inPageLinks: false,
          enablePublicMethods: true,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          license: "1jqr0si6pnt",
          log: false,
          maxHeight: Infinity,
          maxWidth: Infinity,
          minHeight: 0,
          minWidth: 0,
          mouseEvents: true,
          resizeFrom: "parent",
          scrolling: false,
          sizeHeight: true,
          sizeWidth: false,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          onClose: function() {
            return true;
          },
          onClosed: function() {
          },
          onInit: function() {
          },
          onMessage: function() {
            warn("onMessage function not defined");
          },
          onMouseEnter: function() {
          },
          onMouseLeave: function() {
          },
          onResized: function() {
          },
          onScroll: function() {
            return true;
          }
        });
        function getMutationObserver() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function addEventListener(el, evt, func) {
          el.addEventListener(evt, func, false);
        }
        function removeEventListener(el, evt, func) {
          el.removeEventListener(evt, func, false);
        }
        function setupRequestAnimationFrame() {
          var vendors = ["moz", "webkit", "o", "ms"];
          var x;
          for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
            requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
          }
          if (requestAnimationFrame) {
            requestAnimationFrame = requestAnimationFrame.bind(window);
          } else {
            log("setup", "RequestAnimationFrame not supported");
          }
        }
        function getMyID(iframeId) {
          var retStr = "Host page: " + iframeId;
          if (window.top !== window.self) {
            retStr = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + iframeId : "Nested host page: " + iframeId;
          }
          return retStr;
        }
        function formatLogHeader(iframeId) {
          return msgId + "[" + getMyID(iframeId) + "]";
        }
        function isLogEnabled(iframeId) {
          return settings[iframeId] ? settings[iframeId].log : logEnabled;
        }
        function log(iframeId, msg) {
          output("log", iframeId, msg, isLogEnabled(iframeId));
        }
        function info(iframeId, msg) {
          output("info", iframeId, msg, isLogEnabled(iframeId));
        }
        function warn(iframeId, msg) {
          output("warn", iframeId, msg, true);
        }
        function output(type, iframeId, msg, enabled) {
          if (true === enabled && "object" === typeof window.console) {
            console[type](formatLogHeader(iframeId), msg);
          }
        }
        function iFrameListener(event) {
          function resizeIFrame() {
            function resize() {
              setSize(messageData);
              setPagePosition(iframeId);
              on("onResized", messageData);
            }
            ensureInRange("Height");
            ensureInRange("Width");
            syncResize(resize, messageData, "init");
          }
          function processMsg() {
            var data = msg.slice(msgIdLen).split(":");
            var height = data[1] ? parseInt(data[1], 10) : 0;
            var iframe = settings[data[0]] && settings[data[0]].iframe;
            var compStyle = getComputedStyle(iframe);
            return {
              iframe,
              id: data[0],
              height: height + getPaddingEnds(compStyle) + getBorderEnds(compStyle),
              width: data[2],
              type: data[3]
            };
          }
          function getPaddingEnds(compStyle) {
            if (compStyle.boxSizing !== "border-box") {
              return 0;
            }
            var top = compStyle.paddingTop ? parseInt(compStyle.paddingTop, 10) : 0;
            var bot = compStyle.paddingBottom ? parseInt(compStyle.paddingBottom, 10) : 0;
            return top + bot;
          }
          function getBorderEnds(compStyle) {
            if (compStyle.boxSizing !== "border-box") {
              return 0;
            }
            var top = compStyle.borderTopWidth ? parseInt(compStyle.borderTopWidth, 10) : 0;
            var bot = compStyle.borderBottomWidth ? parseInt(compStyle.borderBottomWidth, 10) : 0;
            return top + bot;
          }
          function ensureInRange(Dimension) {
            var max = Number(settings[iframeId]["max" + Dimension]), min = Number(settings[iframeId]["min" + Dimension]), dimension = Dimension.toLowerCase(), size = Number(messageData[dimension]);
            log(iframeId, "Checking " + dimension + " is in range " + min + "-" + max);
            if (size < min) {
              size = min;
              log(iframeId, "Set " + dimension + " to min value");
            }
            if (size > max) {
              size = max;
              log(iframeId, "Set " + dimension + " to max value");
            }
            messageData[dimension] = "" + size;
          }
          function isMessageFromIFrame() {
            function checkAllowedOrigin() {
              function checkList() {
                var i = 0, retCode = false;
                log(
                  iframeId,
                  "Checking connection is from allowed list of origins: " + checkOrigin
                );
                for (; i < checkOrigin.length; i++) {
                  if (checkOrigin[i] === origin) {
                    retCode = true;
                    break;
                  }
                }
                return retCode;
              }
              function checkSingle() {
                var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
                log(iframeId, "Checking connection is from: " + remoteHost);
                return origin === remoteHost;
              }
              return checkOrigin.constructor === Array ? checkList() : checkSingle();
            }
            var origin = event.origin, checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;
            if (checkOrigin && "" + origin !== "null" && !checkAllowedOrigin()) {
              throw new Error(
                "Unexpected message received from: " + origin + " for " + messageData.iframe.id + ". Message was: " + event.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
              );
            }
            return true;
          }
          function isMessageForUs() {
            return msgId === ("" + msg).slice(0, msgIdLen) && msg.slice(msgIdLen).split(":")[0] in settings;
          }
          function isMessageFromMetaParent() {
            var retCode = messageData.type in { true: 1, false: 1, undefined: 1 };
            if (retCode) {
              log(iframeId, "Ignoring init message from meta parent page");
            }
            return retCode;
          }
          function getMsgBody(offset) {
            return msg.slice(msg.indexOf(":") + msgHeaderLen + offset);
          }
          function forwardMsgFromIFrame(msgBody) {
            log(
              iframeId,
              "onMessage passed: {iframe: " + messageData.iframe.id + ", message: " + msgBody + "}"
            );
            on("onMessage", {
              iframe: messageData.iframe,
              message: JSON.parse(msgBody)
            });
            log(iframeId, "--");
          }
          function getPageInfo() {
            var bodyPosition = document.body.getBoundingClientRect(), iFramePosition = messageData.iframe.getBoundingClientRect();
            return JSON.stringify({
              iframeHeight: iFramePosition.height,
              iframeWidth: iFramePosition.width,
              clientHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
              clientWidth: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
              offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              documentHeight: document.documentElement.clientHeight,
              documentWidth: document.documentElement.clientWidth,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth
            });
          }
          function sendPageInfoToIframe(iframe, iframeId2) {
            function debouncedTrigger() {
              trigger("Send Page Info", "pageInfo:" + getPageInfo(), iframe, iframeId2);
            }
            debounceFrameEvents(debouncedTrigger, 32, iframeId2);
          }
          function startPageInfoMonitor() {
            function setListener(type, func) {
              function sendPageInfo() {
                if (settings[id]) {
                  sendPageInfoToIframe(settings[id].iframe, id);
                } else {
                  stop();
                }
              }
              ;
              ["scroll", "resize"].forEach(function(evt) {
                log(id, type + evt + " listener for sendPageInfo");
                func(window, evt, sendPageInfo);
              });
            }
            function stop() {
              setListener("Remove ", removeEventListener);
            }
            function start() {
              setListener("Add ", addEventListener);
            }
            var id = iframeId;
            start();
            if (settings[id]) {
              settings[id].stopPageInfo = stop;
            }
          }
          function stopPageInfoMonitor() {
            if (settings[iframeId] && settings[iframeId].stopPageInfo) {
              settings[iframeId].stopPageInfo();
              delete settings[iframeId].stopPageInfo;
            }
          }
          function checkIFrameExists() {
            var retBool = true;
            if (null === messageData.iframe) {
              warn(iframeId, "IFrame (" + messageData.id + ") not found");
              retBool = false;
            }
            return retBool;
          }
          function getElementPosition(target) {
            var iFramePosition = target.getBoundingClientRect();
            getPagePosition(iframeId);
            return {
              x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
              y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
            };
          }
          function scrollRequestFromChild(addOffset) {
            function reposition() {
              pagePosition = newPosition;
              scrollTo();
              log(iframeId, "--");
            }
            function calcOffset() {
              return {
                x: Number(messageData.width) + offset.x,
                y: Number(messageData.height) + offset.y
              };
            }
            function scrollParent() {
              if (window.parentIFrame) {
                window.parentIFrame["scrollTo" + (addOffset ? "Offset" : "")](
                  newPosition.x,
                  newPosition.y
                );
              } else {
                warn(
                  iframeId,
                  "Unable to scroll to requested position, window.parentIFrame not found"
                );
              }
            }
            var offset = addOffset ? getElementPosition(messageData.iframe) : { x: 0, y: 0 }, newPosition = calcOffset();
            log(
              iframeId,
              "Reposition requested from iFrame (offset x:" + offset.x + " y:" + offset.y + ")"
            );
            if (window.top === window.self) {
              reposition();
            } else {
              scrollParent();
            }
          }
          function scrollTo() {
            if (false === on("onScroll", pagePosition)) {
              unsetPagePosition();
            } else {
              setPagePosition(iframeId);
            }
          }
          function findTarget(location) {
            function jumpToTarget() {
              var jumpPosition = getElementPosition(target);
              log(
                iframeId,
                "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
              );
              pagePosition = {
                x: jumpPosition.x,
                y: jumpPosition.y
              };
              scrollTo();
              log(iframeId, "--");
            }
            function jumpToParent() {
              if (window.parentIFrame) {
                window.parentIFrame.moveToAnchor(hash);
              } else {
                log(
                  iframeId,
                  "In page link #" + hash + " not found and window.parentIFrame not found"
                );
              }
            }
            var hash = location.split("#")[1] || "", hashData = decodeURIComponent(hash), target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
            if (target) {
              jumpToTarget();
            } else if (window.top === window.self) {
              log(iframeId, "In page link #" + hash + " not found");
            } else {
              jumpToParent();
            }
          }
          function onMouse(event2) {
            var mousePos = {};
            if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
              var data = getMsgBody(9).split(":");
              mousePos = {
                x: data[1],
                y: data[0]
              };
            } else {
              mousePos = {
                x: messageData.width,
                y: messageData.height
              };
            }
            on(event2, {
              iframe: messageData.iframe,
              screenX: Number(mousePos.x),
              screenY: Number(mousePos.y),
              type: messageData.type
            });
          }
          function on(funcName, val) {
            return chkEvent(iframeId, funcName, val);
          }
          function actionMsg() {
            if (settings[iframeId] && settings[iframeId].firstRun) firstRun();
            switch (messageData.type) {
              case "close": {
                closeIFrame(messageData.iframe);
                break;
              }
              case "message": {
                forwardMsgFromIFrame(getMsgBody(6));
                break;
              }
              case "mouseenter": {
                onMouse("onMouseEnter");
                break;
              }
              case "mouseleave": {
                onMouse("onMouseLeave");
                break;
              }
              case "autoResize": {
                settings[iframeId].autoResize = JSON.parse(getMsgBody(9));
                break;
              }
              case "scrollTo": {
                scrollRequestFromChild(false);
                break;
              }
              case "scrollToOffset": {
                scrollRequestFromChild(true);
                break;
              }
              case "pageInfo": {
                sendPageInfoToIframe(
                  settings[iframeId] && settings[iframeId].iframe,
                  iframeId
                );
                startPageInfoMonitor();
                break;
              }
              case "pageInfoStop": {
                stopPageInfoMonitor();
                break;
              }
              case "inPageLink": {
                findTarget(getMsgBody(9));
                break;
              }
              case "reset": {
                resetIFrame(messageData);
                break;
              }
              case "init": {
                resizeIFrame();
                on("onInit", messageData.iframe);
                break;
              }
              default: {
                if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
                  warn(
                    "Unsupported message received (" + messageData.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                  );
                } else {
                  resizeIFrame();
                }
              }
            }
          }
          function hasSettings(iframeId2) {
            var retBool = true;
            if (!settings[iframeId2]) {
              retBool = false;
              warn(
                messageData.type + " No settings for " + iframeId2 + ". Message was: " + msg
              );
            }
            return retBool;
          }
          function iFrameReadyMsgReceived() {
            for (var iframeId2 in settings) {
              trigger(
                "iFrame requested init",
                createOutgoingMsg(iframeId2),
                settings[iframeId2].iframe,
                iframeId2
              );
            }
          }
          function firstRun() {
            if (settings[iframeId]) {
              settings[iframeId].firstRun = false;
            }
          }
          var msg = event.data, messageData = {}, iframeId = null;
          if ("[iFrameResizerChild]Ready" === msg) {
            iFrameReadyMsgReceived();
          } else if (isMessageForUs()) {
            messageData = processMsg();
            iframeId = messageData.id;
            if (settings[iframeId]) {
              settings[iframeId].loaded = true;
            }
            if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
              log(iframeId, "Received: " + msg);
              if (checkIFrameExists() && isMessageFromIFrame()) {
                actionMsg();
              }
            }
          } else {
            info(iframeId, "Ignored: " + msg);
          }
        }
        function chkEvent(iframeId, funcName, val) {
          var func = null, retVal = null;
          if (settings[iframeId]) {
            func = settings[iframeId][funcName];
            if ("function" === typeof func) {
              retVal = func(val);
            } else {
              throw new TypeError(
                funcName + " on iFrame[" + iframeId + "] is not a function"
              );
            }
          }
          return retVal;
        }
        function removeIframeListeners(iframe) {
          var iframeId = iframe.id;
          delete settings[iframeId];
        }
        function closeIFrame(iframe) {
          var iframeId = iframe.id;
          if (chkEvent(iframeId, "onClose", iframeId) === false) {
            log(iframeId, "Close iframe cancelled by onClose event");
            return;
          }
          log(iframeId, "Removing iFrame: " + iframeId);
          try {
            if (iframe.parentNode) {
              iframe.parentNode.removeChild(iframe);
            }
          } catch (error) {
            warn(error);
          }
          chkEvent(iframeId, "onClosed", iframeId);
          log(iframeId, "--");
          removeIframeListeners(iframe);
          if (destroyObserver) {
            destroyObserver.disconnect();
            destroyObserver = null;
          }
        }
        function getPagePosition(iframeId) {
          if (null === pagePosition) {
            pagePosition = {
              x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
              y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
            };
            log(
              iframeId,
              "Get page position: " + pagePosition.x + "," + pagePosition.y
            );
          }
        }
        function setPagePosition(iframeId) {
          if (null !== pagePosition) {
            window.scrollTo(pagePosition.x, pagePosition.y);
            log(
              iframeId,
              "Set page position: " + pagePosition.x + "," + pagePosition.y
            );
            unsetPagePosition();
          }
        }
        function unsetPagePosition() {
          pagePosition = null;
        }
        function resetIFrame(messageData) {
          function reset() {
            setSize(messageData);
            trigger("reset", "reset", messageData.iframe, messageData.id);
          }
          log(
            messageData.id,
            "Size reset requested by " + ("init" === messageData.type ? "host page" : "iFrame")
          );
          getPagePosition(messageData.id);
          syncResize(reset, messageData, "reset");
        }
        function setSize(messageData) {
          function setDimension(dimension) {
            if (!messageData.id) {
              log("undefined", "messageData id not set");
              return;
            }
            messageData.iframe.style[dimension] = messageData[dimension] + "px";
            log(
              messageData.id,
              "IFrame (" + iframeId + ") " + dimension + " set to " + messageData[dimension] + "px"
            );
          }
          function chkZero(dimension) {
            if (!hiddenCheckEnabled && "0" === messageData[dimension]) {
              hiddenCheckEnabled = true;
              log(iframeId, "Hidden iFrame detected, creating visibility listener");
              fixHiddenIFrames();
            }
          }
          function processDimension(dimension) {
            setDimension(dimension);
            chkZero(dimension);
          }
          var iframeId = messageData.iframe.id;
          if (settings[iframeId]) {
            if (settings[iframeId].sizeHeight) {
              processDimension("height");
            }
            if (settings[iframeId].sizeWidth) {
              processDimension("width");
            }
          }
        }
        function syncResize(func, messageData, doNotSync) {
          if (doNotSync !== messageData.type && requestAnimationFrame && // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
          !window.jasmine) {
            log(messageData.id, "Requesting animation frame");
            requestAnimationFrame(func);
          } else {
            func();
          }
        }
        function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
          function postMessageToIFrame() {
            var target = settings[id] && settings[id].targetOrigin;
            log(
              id,
              "[" + calleeMsg + "] Sending msg to iframe[" + id + "] (" + msg + ") targetOrigin: " + target
            );
            iframe.contentWindow.postMessage(msgId + msg, target);
          }
          function iFrameNotFound() {
            warn(id, "[" + calleeMsg + "] IFrame(" + id + ") not found");
          }
          function chkAndSend() {
            if (iframe && "contentWindow" in iframe && null !== iframe.contentWindow) {
              postMessageToIFrame();
            } else {
              iFrameNotFound();
            }
          }
          function warnOnNoResponse() {
            function warning2() {
              if (settings[id] && !settings[id].loaded && !errorShown) {
                errorShown = true;
                warn(
                  id,
                  "IFrame has not responded within " + settings[id].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                );
              }
            }
            if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
              settings[id].msgTimeout = setTimeout(
                warning2,
                settings[id].warningTimeout
              );
            }
          }
          var errorShown = false;
          id = id || iframe.id;
          if (settings[id]) {
            chkAndSend();
            warnOnNoResponse();
          }
        }
        function createOutgoingMsg(iframeId) {
          return iframeId + ":" + settings[iframeId].bodyMarginV1 + ":" + settings[iframeId].sizeWidth + ":" + settings[iframeId].log + ":" + settings[iframeId].interval + ":" + settings[iframeId].enablePublicMethods + ":" + settings[iframeId].autoResize + ":" + settings[iframeId].bodyMargin + ":" + settings[iframeId].heightCalculationMethod + ":" + settings[iframeId].bodyBackground + ":" + settings[iframeId].bodyPadding + ":" + settings[iframeId].tolerance + ":" + settings[iframeId].inPageLinks + ":" + settings[iframeId].resizeFrom + ":" + settings[iframeId].widthCalculationMethod + ":" + settings[iframeId].mouseEvents;
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function setupIFrame(iframe, options) {
          function setLimits() {
            function addStyle(style) {
              var styleValue = settings[iframeId][style];
              if (Infinity !== styleValue && 0 !== styleValue) {
                iframe.style[style] = isNumber(styleValue) ? styleValue + "px" : styleValue;
                log(iframeId, "Set " + style + " = " + iframe.style[style]);
              }
            }
            function chkMinMax(dimension) {
              if (settings[iframeId]["min" + dimension] > settings[iframeId]["max" + dimension]) {
                throw new Error(
                  "Value for min" + dimension + " can not be greater than max" + dimension
                );
              }
            }
            chkMinMax("Height");
            chkMinMax("Width");
            addStyle("maxHeight");
            addStyle("minHeight");
            addStyle("maxWidth");
            addStyle("minWidth");
          }
          function newId() {
            var id = options && options.id || defaults.id + count++;
            if (null !== document.getElementById(id)) {
              id += count++;
            }
            return id;
          }
          function ensureHasId(iframeId2) {
            if (typeof iframeId2 !== "string") {
              throw new TypeError("Invaild id for iFrame. Expected String");
            }
            if ("" === iframeId2) {
              iframe.id = iframeId2 = newId();
              logEnabled = (options || {}).log;
              log(
                iframeId2,
                "Added missing iframe ID: " + iframeId2 + " (" + iframe.src + ")"
              );
            }
            return iframeId2;
          }
          function setScrolling() {
            log(
              iframeId,
              "IFrame scrolling " + (settings[iframeId] && settings[iframeId].scrolling ? "enabled" : "disabled") + " for " + iframeId
            );
            iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? "hidden" : "auto";
            switch (settings[iframeId] && settings[iframeId].scrolling) {
              case "omit": {
                break;
              }
              case true: {
                iframe.scrolling = "yes";
                break;
              }
              case false: {
                iframe.scrolling = "no";
                break;
              }
              default: {
                iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : "no";
              }
            }
          }
          function setupBodyMarginValues() {
            if ("number" === typeof (settings[iframeId] && settings[iframeId].bodyMargin) || "0" === (settings[iframeId] && settings[iframeId].bodyMargin)) {
              settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
              settings[iframeId].bodyMargin = "" + settings[iframeId].bodyMargin + "px";
            }
          }
          function checkReset() {
            var firstRun = settings[iframeId] && settings[iframeId].firstRun, resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;
            if (!firstRun && resetRequertMethod) {
              resetIFrame({ iframe, height: 0, width: 0, type: "init" });
            }
          }
          function setupIFrameObject() {
            if (settings[iframeId]) {
              settings[iframeId].iframe.iFrameResizer = {
                close: closeIFrame.bind(null, settings[iframeId].iframe),
                removeListeners: removeIframeListeners.bind(
                  null,
                  settings[iframeId].iframe
                ),
                resize: trigger.bind(
                  null,
                  "Window resize",
                  "resize",
                  settings[iframeId].iframe
                ),
                moveToAnchor: function(anchor) {
                  trigger(
                    "Move to anchor",
                    "moveToAnchor:" + anchor,
                    settings[iframeId].iframe,
                    iframeId
                  );
                },
                sendMessage: function(message) {
                  message = JSON.stringify(message);
                  trigger(
                    "Send Message",
                    "message:" + message,
                    settings[iframeId].iframe,
                    iframeId
                  );
                }
              };
            }
          }
          function init2(msg) {
            function iFrameLoaded() {
              trigger("iFrame.onload", msg, iframe, undefined2, true);
              checkReset();
            }
            function createDestroyObserver(MutationObserver2) {
              if (!iframe.parentNode) {
                return null;
              }
              var destroyObserver2 = new MutationObserver2(function(mutations) {
                mutations.forEach(function(mutation) {
                  var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
                  removedNodes.forEach(function(removedNode) {
                    if (removedNode === iframe) {
                      closeIFrame(iframe);
                    }
                  });
                });
              });
              destroyObserver2.observe(iframe.parentNode, {
                childList: true
              });
              return destroyObserver2;
            }
            var MutationObserver = getMutationObserver();
            if (MutationObserver) {
              destroyObserver = createDestroyObserver(MutationObserver);
            }
            addEventListener(iframe, "load", iFrameLoaded);
            trigger("init", msg, iframe, undefined2, true);
          }
          function checkOptions(options2) {
            if ("object" !== typeof options2) {
              throw new TypeError("Options is not an object");
            }
          }
          function copyOptions(options2) {
            for (var option in defaults) {
              if (Object.prototype.hasOwnProperty.call(defaults, option)) {
                settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
                  options2,
                  option
                ) ? options2[option] : defaults[option];
              }
            }
          }
          function getTargetOrigin(remoteHost) {
            return "" === remoteHost || null !== remoteHost.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : remoteHost;
          }
          function depricate(key) {
            var splitName = key.split("Callback");
            if (splitName.length === 2) {
              var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
              this[name] = this[key];
              delete this[key];
              warn(
                iframeId,
                "Deprecated: '" + key + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
              );
            }
          }
          function processOptions(options2) {
            options2 = options2 || {};
            settings[iframeId] = /* @__PURE__ */ Object.create(null);
            settings[iframeId].iframe = iframe;
            settings[iframeId].firstRun = true;
            settings[iframeId].remoteHost = iframe.src && iframe.src.split("/").slice(0, 3).join("/");
            checkOptions(options2);
            Object.keys(options2).forEach(depricate, options2);
            copyOptions(options2);
            if (settings[iframeId]) {
              settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : "*";
            }
          }
          function beenHere() {
            return iframeId in settings && "iFrameResizer" in iframe;
          }
          var iframeId = ensureHasId(iframe.id);
          if (beenHere()) {
            warn(iframeId, "Ignored iFrame, already setup.");
          } else {
            processOptions(options);
            setScrolling();
            setLimits();
            setupBodyMarginValues();
            init2(createOutgoingMsg(iframeId));
            setupIFrameObject();
          }
        }
        function debouce(fn, time) {
          if (null === timer) {
            timer = setTimeout(function() {
              timer = null;
              fn();
            }, time);
          }
        }
        var frameTimer = {};
        function debounceFrameEvents(fn, time, frameId) {
          if (!frameTimer[frameId]) {
            frameTimer[frameId] = setTimeout(function() {
              frameTimer[frameId] = null;
              fn();
            }, time);
          }
        }
        function fixHiddenIFrames() {
          function checkIFrames() {
            function checkIFrame(settingId) {
              function chkDimension(dimension) {
                return "0px" === (settings[settingId] && settings[settingId].iframe.style[dimension]);
              }
              function isVisible(el) {
                return null !== el.offsetParent;
              }
              if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension("height") || chkDimension("width"))) {
                trigger(
                  "Visibility change",
                  "resize",
                  settings[settingId].iframe,
                  settingId
                );
              }
            }
            Object.keys(settings).forEach(function(key) {
              checkIFrame(key);
            });
          }
          function mutationObserved(mutations) {
            log(
              "window",
              "Mutation observed: " + mutations[0].target + " " + mutations[0].type
            );
            debouce(checkIFrames, 16);
          }
          function createMutationObserver() {
            var target = document.querySelector("body"), config = {
              attributes: true,
              attributeOldValue: false,
              characterData: true,
              characterDataOldValue: false,
              childList: true,
              subtree: true
            }, observer = new MutationObserver(mutationObserved);
            observer.observe(target, config);
          }
          var MutationObserver = getMutationObserver();
          if (MutationObserver) {
            createMutationObserver();
          }
        }
        function resizeIFrames(event) {
          function resize() {
            sendTriggerMsg("Window " + event, "resize");
          }
          log("window", "Trigger event: " + event);
          debouce(resize, 16);
        }
        function tabVisible() {
          function resize() {
            sendTriggerMsg("Tab Visible", "resize");
          }
          if ("hidden" !== document.visibilityState) {
            log("document", "Trigger event: Visibility change");
            debouce(resize, 16);
          }
        }
        function sendTriggerMsg(eventName, event) {
          function isIFrameResizeEnabled(iframeId) {
            return settings[iframeId] && "parent" === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun;
          }
          Object.keys(settings).forEach(function(iframeId) {
            if (isIFrameResizeEnabled(iframeId)) {
              trigger(eventName, event, settings[iframeId].iframe, iframeId);
            }
          });
        }
        function setupEventListeners() {
          addEventListener(window, "message", iFrameListener);
          addEventListener(window, "resize", function() {
            resizeIFrames("resize");
          });
          addEventListener(document, "visibilitychange", tabVisible);
          addEventListener(document, "-webkit-visibilitychange", tabVisible);
        }
        function factory() {
          function init2(options, element) {
            function chkType() {
              if (!element.tagName) {
                throw new TypeError("Object is not a valid DOM element");
              } else if ("IFRAME" !== element.tagName.toUpperCase()) {
                throw new TypeError(
                  "Expected <IFRAME> tag, found <" + element.tagName + ">"
                );
              }
            }
            if (element) {
              chkType();
              setupIFrame(element, options);
              iFrames.push(element);
            }
          }
          function warnDeprecatedOptions(options) {
            if (options && options.enablePublicMethods) {
              warn(
                "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
              );
            }
          }
          var iFrames;
          setupRequestAnimationFrame();
          setupEventListeners();
          return function iFrameResizeF(options, target) {
            iFrames = [];
            warnDeprecatedOptions(options);
            switch (typeof target) {
              case "undefined":
              case "string": {
                Array.prototype.forEach.call(
                  document.querySelectorAll(target || "iframe"),
                  init2.bind(undefined2, options)
                );
                break;
              }
              case "object": {
                init2(options, target);
                break;
              }
              default: {
                throw new TypeError("Unexpected data type (" + typeof target + ")");
              }
            }
            return iFrames;
          };
        }
        function createJQueryPublicMethod($) {
          if (!$.fn) {
            info("", "Unable to bind to jQuery, it is not fully loaded.");
          } else if (!$.fn.iFrameResize) {
            $.fn.iFrameResize = function $iFrameResizeF(options) {
              function init2(index, element) {
                setupIFrame(element, options);
              }
              return this.filter("iframe").each(init2).end();
            };
          }
        }
        if (window.jQuery !== undefined2) {
          createJQueryPublicMethod(window.jQuery);
        }
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = factory();
        }
        window.iFrameResize = window.iFrameResize || factory();
      })();
    }
  });

  // node_modules/iframe-resizer/js/iframeResizer.contentWindow.js
  var require_iframeResizer_contentWindow = __commonJS({
    "node_modules/iframe-resizer/js/iframeResizer.contentWindow.js"(exports, module) {
      (function(undefined2) {
        if (typeof window === "undefined") return;
        var autoResize = true, base = 10, bodyBackground = "", bodyMargin = 0, bodyMarginStr = "", bodyObserver = null, bodyPadding = "", calculateWidth = false, doubleEventList = { resize: 1, click: 1 }, eventCancelTimer = 128, firstRun = true, height = 1, heightCalcModeDefault = "bodyOffset", heightCalcMode = heightCalcModeDefault, initLock = true, initMsg = "", inPageLinks = {}, interval = 32, intervalTimer = null, logging = false, mouseEvents = false, msgID = "[iFrameSizer]", msgIdLen = msgID.length, myID = "", resetRequiredMethods = {
          max: 1,
          min: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        }, resizeFrom = "child", sendPermit = true, target = window.parent, targetOriginDefault = "*", tolerance = 0, triggerLocked = false, triggerLockedTimer = null, throttledTimer = 16, width = 1, widthCalcModeDefault = "scroll", widthCalcMode = widthCalcModeDefault, win = window, onMessage = function() {
          warn("onMessage function not defined");
        }, onReady = function() {
        }, onPageInfo = function() {
        }, customCalcMethods = {
          height: function() {
            warn("Custom height calculation function not defined");
            return document.documentElement.offsetHeight;
          },
          width: function() {
            warn("Custom width calculation function not defined");
            return document.body.scrollWidth;
          }
        }, eventHandlersByName = {}, passiveSupported = false;
        function noop() {
        }
        try {
          var options = Object.create(
            {},
            {
              passive: {
                // eslint-disable-next-line getter-return
                get: function() {
                  passiveSupported = true;
                }
              }
            }
          );
          window.addEventListener("test", noop, options);
          window.removeEventListener("test", noop, options);
        } catch (error) {
        }
        function addEventListener(el, evt, func, options2) {
          el.addEventListener(evt, func, passiveSupported ? options2 || {} : false);
        }
        function removeEventListener(el, evt, func) {
          el.removeEventListener(evt, func, false);
        }
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function throttle(func) {
          var context, args, result, timeout = null, previous = 0, later = function() {
            previous = Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          };
          return function() {
            var now = Date.now();
            if (!previous) {
              previous = now;
            }
            var remaining = throttledTimer - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > throttledTimer) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            } else if (!timeout) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        }
        function formatLogMsg(msg) {
          return msgID + "[" + myID + "] " + msg;
        }
        function log(msg) {
          if (logging && "object" === typeof window.console) {
            console.log(formatLogMsg(msg));
          }
        }
        function warn(msg) {
          if ("object" === typeof window.console) {
            console.warn(formatLogMsg(msg));
          }
        }
        function init2() {
          readDataFromParent();
          log("Initialising iFrame (" + window.location.href + ")");
          readDataFromPage();
          setMargin();
          setBodyStyle("background", bodyBackground);
          setBodyStyle("padding", bodyPadding);
          injectClearFixIntoBodyElement();
          checkHeightMode();
          checkWidthMode();
          stopInfiniteResizingOfIFrame();
          setupPublicMethods();
          setupMouseEvents();
          startEventListeners();
          inPageLinks = setupInPageLinks();
          sendSize("init", "Init message from host page");
          onReady();
        }
        function readDataFromParent() {
          function strBool(str) {
            return "true" === str;
          }
          var data = initMsg.slice(msgIdLen).split(":");
          myID = data[0];
          bodyMargin = undefined2 === data[1] ? bodyMargin : Number(data[1]);
          calculateWidth = undefined2 === data[2] ? calculateWidth : strBool(data[2]);
          logging = undefined2 === data[3] ? logging : strBool(data[3]);
          interval = undefined2 === data[4] ? interval : Number(data[4]);
          autoResize = undefined2 === data[6] ? autoResize : strBool(data[6]);
          bodyMarginStr = data[7];
          heightCalcMode = undefined2 === data[8] ? heightCalcMode : data[8];
          bodyBackground = data[9];
          bodyPadding = data[10];
          tolerance = undefined2 === data[11] ? tolerance : Number(data[11]);
          inPageLinks.enable = undefined2 === data[12] ? false : strBool(data[12]);
          resizeFrom = undefined2 === data[13] ? resizeFrom : data[13];
          widthCalcMode = undefined2 === data[14] ? widthCalcMode : data[14];
          mouseEvents = undefined2 === data[15] ? mouseEvents : strBool(data[15]);
        }
        function depricate(key) {
          var splitName = key.split("Callback");
          if (splitName.length === 2) {
            var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
            this[name] = this[key];
            delete this[key];
            warn(
              "Deprecated: '" + key + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
            );
          }
        }
        function readDataFromPage() {
          function readData() {
            var data = window.iFrameResizer;
            log("Reading data from page: " + JSON.stringify(data));
            Object.keys(data).forEach(depricate, data);
            onMessage = "onMessage" in data ? data.onMessage : onMessage;
            onReady = "onReady" in data ? data.onReady : onReady;
            targetOriginDefault = "targetOrigin" in data ? data.targetOrigin : targetOriginDefault;
            heightCalcMode = "heightCalculationMethod" in data ? data.heightCalculationMethod : heightCalcMode;
            widthCalcMode = "widthCalculationMethod" in data ? data.widthCalculationMethod : widthCalcMode;
          }
          function setupCustomCalcMethods(calcMode, calcFunc) {
            if ("function" === typeof calcMode) {
              log("Setup custom " + calcFunc + "CalcMethod");
              customCalcMethods[calcFunc] = calcMode;
              calcMode = "custom";
            }
            return calcMode;
          }
          if ("iFrameResizer" in window && Object === window.iFrameResizer.constructor) {
            readData();
            heightCalcMode = setupCustomCalcMethods(heightCalcMode, "height");
            widthCalcMode = setupCustomCalcMethods(widthCalcMode, "width");
          }
          log("TargetOrigin for parent set to: " + targetOriginDefault);
        }
        function chkCSS(attr, value) {
          if (-1 !== value.indexOf("-")) {
            warn("Negative CSS value ignored for " + attr);
            value = "";
          }
          return value;
        }
        function setBodyStyle(attr, value) {
          if (undefined2 !== value && "" !== value && "null" !== value) {
            document.body.style[attr] = value;
            log("Body " + attr + ' set to "' + value + '"');
          }
        }
        function setMargin() {
          if (undefined2 === bodyMarginStr) {
            bodyMarginStr = bodyMargin + "px";
          }
          setBodyStyle("margin", chkCSS("margin", bodyMarginStr));
        }
        function stopInfiniteResizingOfIFrame() {
          document.documentElement.style.height = "";
          document.body.style.height = "";
          log('HTML & body height set to "auto"');
        }
        function manageTriggerEvent(options2) {
          var listener = {
            add: function(eventName) {
              function handleEvent() {
                sendSize(options2.eventName, options2.eventType);
              }
              eventHandlersByName[eventName] = handleEvent;
              addEventListener(window, eventName, handleEvent, { passive: true });
            },
            remove: function(eventName) {
              var handleEvent = eventHandlersByName[eventName];
              delete eventHandlersByName[eventName];
              removeEventListener(window, eventName, handleEvent);
            }
          };
          if (options2.eventNames && Array.prototype.map) {
            options2.eventName = options2.eventNames[0];
            options2.eventNames.map(listener[options2.method]);
          } else {
            listener[options2.method](options2.eventName);
          }
          log(
            capitalizeFirstLetter(options2.method) + " event listener: " + options2.eventType
          );
        }
        function manageEventListeners(method) {
          manageTriggerEvent({
            method,
            eventType: "Animation Start",
            eventNames: ["animationstart", "webkitAnimationStart"]
          });
          manageTriggerEvent({
            method,
            eventType: "Animation Iteration",
            eventNames: ["animationiteration", "webkitAnimationIteration"]
          });
          manageTriggerEvent({
            method,
            eventType: "Animation End",
            eventNames: ["animationend", "webkitAnimationEnd"]
          });
          manageTriggerEvent({
            method,
            eventType: "Input",
            eventName: "input"
          });
          manageTriggerEvent({
            method,
            eventType: "Mouse Up",
            eventName: "mouseup"
          });
          manageTriggerEvent({
            method,
            eventType: "Mouse Down",
            eventName: "mousedown"
          });
          manageTriggerEvent({
            method,
            eventType: "Orientation Change",
            eventName: "orientationchange"
          });
          manageTriggerEvent({
            method,
            eventType: "Print",
            eventNames: ["afterprint", "beforeprint"]
          });
          manageTriggerEvent({
            method,
            eventType: "Ready State Change",
            eventName: "readystatechange"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch Start",
            eventName: "touchstart"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch End",
            eventName: "touchend"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch Cancel",
            eventName: "touchcancel"
          });
          manageTriggerEvent({
            method,
            eventType: "Transition Start",
            eventNames: [
              "transitionstart",
              "webkitTransitionStart",
              "MSTransitionStart",
              "oTransitionStart",
              "otransitionstart"
            ]
          });
          manageTriggerEvent({
            method,
            eventType: "Transition Iteration",
            eventNames: [
              "transitioniteration",
              "webkitTransitionIteration",
              "MSTransitionIteration",
              "oTransitionIteration",
              "otransitioniteration"
            ]
          });
          manageTriggerEvent({
            method,
            eventType: "Transition End",
            eventNames: [
              "transitionend",
              "webkitTransitionEnd",
              "MSTransitionEnd",
              "oTransitionEnd",
              "otransitionend"
            ]
          });
          if ("child" === resizeFrom) {
            manageTriggerEvent({
              method,
              eventType: "IFrame Resized",
              eventName: "resize"
            });
          }
        }
        function checkCalcMode(calcMode, calcModeDefault, modes, type) {
          if (calcModeDefault !== calcMode) {
            if (!(calcMode in modes)) {
              warn(
                calcMode + " is not a valid option for " + type + "CalculationMethod."
              );
              calcMode = calcModeDefault;
            }
            log(type + ' calculation method set to "' + calcMode + '"');
          }
          return calcMode;
        }
        function checkHeightMode() {
          heightCalcMode = checkCalcMode(
            heightCalcMode,
            heightCalcModeDefault,
            getHeight,
            "height"
          );
        }
        function checkWidthMode() {
          widthCalcMode = checkCalcMode(
            widthCalcMode,
            widthCalcModeDefault,
            getWidth,
            "width"
          );
        }
        function startEventListeners() {
          if (true === autoResize) {
            manageEventListeners("add");
            setupMutationObserver();
          } else {
            log("Auto Resize disabled");
          }
        }
        function disconnectMutationObserver() {
          if (null !== bodyObserver) {
            bodyObserver.disconnect();
          }
        }
        function stopEventListeners() {
          manageEventListeners("remove");
          disconnectMutationObserver();
          clearInterval(intervalTimer);
        }
        function injectClearFixIntoBodyElement() {
          var clearFix = document.createElement("div");
          clearFix.style.clear = "both";
          clearFix.style.display = "block";
          clearFix.style.height = "0";
          document.body.appendChild(clearFix);
        }
        function setupInPageLinks() {
          function getPagePosition() {
            return {
              x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
              y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
            };
          }
          function getElementPosition(el) {
            var elPosition = el.getBoundingClientRect(), pagePosition = getPagePosition();
            return {
              x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
              y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
            };
          }
          function findTarget(location) {
            function jumpToTarget(target3) {
              var jumpPosition = getElementPosition(target3);
              log(
                "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
              );
              sendMsg(jumpPosition.y, jumpPosition.x, "scrollToOffset");
            }
            var hash = location.split("#")[1] || location, hashData = decodeURIComponent(hash), target2 = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
            if (undefined2 === target2) {
              log(
                "In page link (#" + hash + ") not found in iFrame, so sending to parent"
              );
              sendMsg(0, 0, "inPageLink", "#" + hash);
            } else {
              jumpToTarget(target2);
            }
          }
          function checkLocationHash() {
            var hash = window.location.hash;
            var href = window.location.href;
            if ("" !== hash && "#" !== hash) {
              findTarget(href);
            }
          }
          function bindAnchors() {
            function setupLink(el) {
              function linkClicked(e) {
                e.preventDefault();
                findTarget(this.getAttribute("href"));
              }
              if ("#" !== el.getAttribute("href")) {
                addEventListener(el, "click", linkClicked);
              }
            }
            Array.prototype.forEach.call(
              document.querySelectorAll('a[href^="#"]'),
              setupLink
            );
          }
          function bindLocationHash() {
            addEventListener(window, "hashchange", checkLocationHash);
          }
          function initCheck() {
            setTimeout(checkLocationHash, eventCancelTimer);
          }
          function enableInPageLinks() {
            if (Array.prototype.forEach && document.querySelectorAll) {
              log("Setting up location.hash handlers");
              bindAnchors();
              bindLocationHash();
              initCheck();
            } else {
              warn(
                "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
              );
            }
          }
          if (inPageLinks.enable) {
            enableInPageLinks();
          } else {
            log("In page linking not enabled");
          }
          return {
            findTarget
          };
        }
        function setupMouseEvents() {
          if (mouseEvents !== true) return;
          function sendMouse(e) {
            sendMsg(0, 0, e.type, e.screenY + ":" + e.screenX);
          }
          function addMouseListener(evt, name) {
            log("Add event listener: " + name);
            addEventListener(window.document, evt, sendMouse);
          }
          addMouseListener("mouseenter", "Mouse Enter");
          addMouseListener("mouseleave", "Mouse Leave");
        }
        function setupPublicMethods() {
          log("Enable public methods");
          win.parentIFrame = {
            autoResize: function autoResizeF(resize) {
              if (true === resize && false === autoResize) {
                autoResize = true;
                startEventListeners();
              } else if (false === resize && true === autoResize) {
                autoResize = false;
                stopEventListeners();
              }
              sendMsg(0, 0, "autoResize", JSON.stringify(autoResize));
              return autoResize;
            },
            close: function closeF() {
              sendMsg(0, 0, "close");
            },
            getId: function getIdF() {
              return myID;
            },
            getPageInfo: function getPageInfoF(callback) {
              if ("function" === typeof callback) {
                onPageInfo = callback;
                sendMsg(0, 0, "pageInfo");
              } else {
                onPageInfo = function() {
                };
                sendMsg(0, 0, "pageInfoStop");
              }
            },
            moveToAnchor: function moveToAnchorF(hash) {
              inPageLinks.findTarget(hash);
            },
            reset: function resetF() {
              resetIFrame("parentIFrame.reset");
            },
            scrollTo: function scrollToF(x, y) {
              sendMsg(y, x, "scrollTo");
            },
            scrollToOffset: function scrollToF(x, y) {
              sendMsg(y, x, "scrollToOffset");
            },
            sendMessage: function sendMessageF(msg, targetOrigin) {
              sendMsg(0, 0, "message", JSON.stringify(msg), targetOrigin);
            },
            setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
              heightCalcMode = heightCalculationMethod;
              checkHeightMode();
            },
            setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
              widthCalcMode = widthCalculationMethod;
              checkWidthMode();
            },
            setTargetOrigin: function setTargetOriginF(targetOrigin) {
              log("Set targetOrigin: " + targetOrigin);
              targetOriginDefault = targetOrigin;
            },
            size: function sizeF(customHeight, customWidth) {
              var valString = "" + (customHeight || "") + (customWidth ? "," + customWidth : "");
              sendSize(
                "size",
                "parentIFrame.size(" + valString + ")",
                customHeight,
                customWidth
              );
            }
          };
        }
        function initInterval() {
          if (0 !== interval) {
            log("setInterval: " + interval + "ms");
            intervalTimer = setInterval(function() {
              sendSize("interval", "setInterval: " + interval);
            }, Math.abs(interval));
          }
        }
        function setupBodyMutationObserver() {
          function addImageLoadListners(mutation) {
            function addImageLoadListener(element) {
              if (false === element.complete) {
                log("Attach listeners to " + element.src);
                element.addEventListener("load", imageLoaded, false);
                element.addEventListener("error", imageError, false);
                elements.push(element);
              }
            }
            if (mutation.type === "attributes" && mutation.attributeName === "src") {
              addImageLoadListener(mutation.target);
            } else if (mutation.type === "childList") {
              Array.prototype.forEach.call(
                mutation.target.querySelectorAll("img"),
                addImageLoadListener
              );
            }
          }
          function removeFromArray(element) {
            elements.splice(elements.indexOf(element), 1);
          }
          function removeImageLoadListener(element) {
            log("Remove listeners from " + element.src);
            element.removeEventListener("load", imageLoaded, false);
            element.removeEventListener("error", imageError, false);
            removeFromArray(element);
          }
          function imageEventTriggered(event, type, typeDesc) {
            removeImageLoadListener(event.target);
            sendSize(type, typeDesc + ": " + event.target.src);
          }
          function imageLoaded(event) {
            imageEventTriggered(event, "imageLoad", "Image loaded");
          }
          function imageError(event) {
            imageEventTriggered(event, "imageLoadFailed", "Image load failed");
          }
          function mutationObserved(mutations) {
            sendSize(
              "mutationObserver",
              "mutationObserver: " + mutations[0].target + " " + mutations[0].type
            );
            mutations.forEach(addImageLoadListners);
          }
          function createMutationObserver() {
            var target2 = document.querySelector("body"), config = {
              attributes: true,
              attributeOldValue: false,
              characterData: true,
              characterDataOldValue: false,
              childList: true,
              subtree: true
            };
            observer = new MutationObserver(mutationObserved);
            log("Create body MutationObserver");
            observer.observe(target2, config);
            return observer;
          }
          var elements = [], MutationObserver = window.MutationObserver || window.WebKitMutationObserver, observer = createMutationObserver();
          return {
            disconnect: function() {
              if ("disconnect" in observer) {
                log("Disconnect body MutationObserver");
                observer.disconnect();
                elements.forEach(removeImageLoadListener);
              }
            }
          };
        }
        function setupMutationObserver() {
          var forceIntervalTimer = 0 > interval;
          if (window.MutationObserver || window.WebKitMutationObserver) {
            if (forceIntervalTimer) {
              initInterval();
            } else {
              bodyObserver = setupBodyMutationObserver();
            }
          } else {
            log("MutationObserver not supported in this browser!");
            initInterval();
          }
        }
        function getComputedStyle2(prop, el) {
          var retVal = 0;
          el = el || document.body;
          retVal = document.defaultView.getComputedStyle(el, null);
          retVal = null === retVal ? 0 : retVal[prop];
          return parseInt(retVal, base);
        }
        function chkEventThottle(timer) {
          if (timer > throttledTimer / 2) {
            throttledTimer = 2 * timer;
            log("Event throttle increased to " + throttledTimer + "ms");
          }
        }
        function getMaxElement(side, elements) {
          var elementsLength = elements.length, elVal = 0, maxVal = 0, Side = capitalizeFirstLetter(side), timer = Date.now();
          for (var i = 0; i < elementsLength; i++) {
            elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle2("margin" + Side, elements[i]);
            if (elVal > maxVal) {
              maxVal = elVal;
            }
          }
          timer = Date.now() - timer;
          log("Parsed " + elementsLength + " HTML elements");
          log("Element position calculated in " + timer + "ms");
          chkEventThottle(timer);
          return maxVal;
        }
        function getAllMeasurements(dimensions) {
          return [
            dimensions.bodyOffset(),
            dimensions.bodyScroll(),
            dimensions.documentElementOffset(),
            dimensions.documentElementScroll()
          ];
        }
        function getTaggedElements(side, tag) {
          function noTaggedElementsFound() {
            warn("No tagged elements (" + tag + ") found on page");
            return document.querySelectorAll("body *");
          }
          var elements = document.querySelectorAll("[" + tag + "]");
          if (elements.length === 0) noTaggedElementsFound();
          return getMaxElement(side, elements);
        }
        function getAllElements() {
          return document.querySelectorAll("body *");
        }
        var getHeight = {
          bodyOffset: function getBodyOffsetHeight() {
            return document.body.offsetHeight + getComputedStyle2("marginTop") + getComputedStyle2("marginBottom");
          },
          offset: function() {
            return getHeight.bodyOffset();
          },
          bodyScroll: function getBodyScrollHeight() {
            return document.body.scrollHeight;
          },
          custom: function getCustomWidth() {
            return customCalcMethods.height();
          },
          documentElementOffset: function getDEOffsetHeight() {
            return document.documentElement.offsetHeight;
          },
          documentElementScroll: function getDEScrollHeight() {
            return document.documentElement.scrollHeight;
          },
          max: function getMaxHeight() {
            return Math.max.apply(null, getAllMeasurements(getHeight));
          },
          min: function getMinHeight() {
            return Math.min.apply(null, getAllMeasurements(getHeight));
          },
          grow: function growHeight() {
            return getHeight.max();
          },
          lowestElement: function getBestHeight() {
            return Math.max(
              getHeight.bodyOffset() || getHeight.documentElementOffset(),
              getMaxElement("bottom", getAllElements())
            );
          },
          taggedElement: function getTaggedElementsHeight() {
            return getTaggedElements("bottom", "data-iframe-height");
          }
        }, getWidth = {
          bodyScroll: function getBodyScrollWidth() {
            return document.body.scrollWidth;
          },
          bodyOffset: function getBodyOffsetWidth() {
            return document.body.offsetWidth;
          },
          custom: function getCustomWidth() {
            return customCalcMethods.width();
          },
          documentElementScroll: function getDEScrollWidth() {
            return document.documentElement.scrollWidth;
          },
          documentElementOffset: function getDEOffsetWidth() {
            return document.documentElement.offsetWidth;
          },
          scroll: function getMaxWidth() {
            return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
          },
          max: function getMaxWidth() {
            return Math.max.apply(null, getAllMeasurements(getWidth));
          },
          min: function getMinWidth() {
            return Math.min.apply(null, getAllMeasurements(getWidth));
          },
          rightMostElement: function rightMostElement() {
            return getMaxElement("right", getAllElements());
          },
          taggedElement: function getTaggedElementsWidth() {
            return getTaggedElements("right", "data-iframe-width");
          }
        };
        function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {
          function resizeIFrame() {
            height = currentHeight;
            width = currentWidth;
            sendMsg(height, width, triggerEvent);
          }
          function isSizeChangeDetected() {
            function checkTolarance(a, b) {
              var retVal = Math.abs(a - b) <= tolerance;
              return !retVal;
            }
            currentHeight = undefined2 === customHeight ? getHeight[heightCalcMode]() : customHeight;
            currentWidth = undefined2 === customWidth ? getWidth[widthCalcMode]() : customWidth;
            return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
          }
          function isForceResizableEvent() {
            return !(triggerEvent in { init: 1, interval: 1, size: 1 });
          }
          function isForceResizableCalcMode() {
            return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
          }
          function logIgnored() {
            log("No change in size detected");
          }
          function checkDownSizing() {
            if (isForceResizableEvent() && isForceResizableCalcMode()) {
              resetIFrame(triggerEventDesc);
            } else if (!(triggerEvent in { interval: 1 })) {
              logIgnored();
            }
          }
          var currentHeight, currentWidth;
          if (isSizeChangeDetected() || "init" === triggerEvent) {
            lockTrigger();
            resizeIFrame();
          } else {
            checkDownSizing();
          }
        }
        var sizeIFrameThrottled = throttle(sizeIFrame);
        function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
          function recordTrigger() {
            if (!(triggerEvent in { reset: 1, resetPage: 1, init: 1 })) {
              log("Trigger event: " + triggerEventDesc);
            }
          }
          function isDoubleFiredEvent() {
            return triggerLocked && triggerEvent in doubleEventList;
          }
          if (isDoubleFiredEvent()) {
            log("Trigger event cancelled: " + triggerEvent);
          } else {
            recordTrigger();
            if (triggerEvent === "init") {
              sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
            } else {
              sizeIFrameThrottled(
                triggerEvent,
                triggerEventDesc,
                customHeight,
                customWidth
              );
            }
          }
        }
        function lockTrigger() {
          if (!triggerLocked) {
            triggerLocked = true;
            log("Trigger event lock on");
          }
          clearTimeout(triggerLockedTimer);
          triggerLockedTimer = setTimeout(function() {
            triggerLocked = false;
            log("Trigger event lock off");
            log("--");
          }, eventCancelTimer);
        }
        function triggerReset(triggerEvent) {
          height = getHeight[heightCalcMode]();
          width = getWidth[widthCalcMode]();
          sendMsg(height, width, triggerEvent);
        }
        function resetIFrame(triggerEventDesc) {
          var hcm = heightCalcMode;
          heightCalcMode = heightCalcModeDefault;
          log("Reset trigger event: " + triggerEventDesc);
          lockTrigger();
          triggerReset("reset");
          heightCalcMode = hcm;
        }
        function sendMsg(height2, width2, triggerEvent, msg, targetOrigin) {
          function setTargetOrigin() {
            if (undefined2 === targetOrigin) {
              targetOrigin = targetOriginDefault;
            } else {
              log("Message targetOrigin: " + targetOrigin);
            }
          }
          function sendToParent() {
            var size = height2 + ":" + width2, message = myID + ":" + size + ":" + triggerEvent + (undefined2 === msg ? "" : ":" + msg);
            log("Sending message to host page (" + message + ")");
            target.postMessage(msgID + message, targetOrigin);
          }
          if (true === sendPermit) {
            setTargetOrigin();
            sendToParent();
          }
        }
        function receiver(event) {
          var processRequestFromParent = {
            init: function initFromParent() {
              initMsg = event.data;
              target = event.source;
              init2();
              firstRun = false;
              setTimeout(function() {
                initLock = false;
              }, eventCancelTimer);
            },
            reset: function resetFromParent() {
              if (initLock) {
                log("Page reset ignored by init");
              } else {
                log("Page size reset by host page");
                triggerReset("resetPage");
              }
            },
            resize: function resizeFromParent() {
              sendSize("resizeParent", "Parent window requested size check");
            },
            moveToAnchor: function moveToAnchorF() {
              inPageLinks.findTarget(getData());
            },
            inPageLink: function inPageLinkF() {
              this.moveToAnchor();
            },
            // Backward compatibility
            pageInfo: function pageInfoFromParent() {
              var msgBody = getData();
              log("PageInfoFromParent called from parent: " + msgBody);
              onPageInfo(JSON.parse(msgBody));
              log(" --");
            },
            message: function messageFromParent() {
              var msgBody = getData();
              log("onMessage called from parent: " + msgBody);
              onMessage(JSON.parse(msgBody));
              log(" --");
            }
          };
          function isMessageForUs() {
            return msgID === ("" + event.data).slice(0, msgIdLen);
          }
          function getMessageType() {
            return event.data.split("]")[1].split(":")[0];
          }
          function getData() {
            return event.data.slice(event.data.indexOf(":") + 1);
          }
          function isMiddleTier() {
            return !(typeof module !== "undefined" && module.exports) && "iFrameResize" in window || window.jQuery !== undefined2 && "iFrameResize" in window.jQuery.prototype;
          }
          function isInitMsg() {
            return event.data.split(":")[2] in { true: 1, false: 1 };
          }
          function callFromParent() {
            var messageType = getMessageType();
            if (messageType in processRequestFromParent) {
              processRequestFromParent[messageType]();
            } else if (!isMiddleTier() && !isInitMsg()) {
              warn("Unexpected message (" + event.data + ")");
            }
          }
          function processMessage() {
            if (false === firstRun) {
              callFromParent();
            } else if (isInitMsg()) {
              processRequestFromParent.init();
            } else {
              log(
                'Ignored message of type "' + getMessageType() + '". Received before initialization.'
              );
            }
          }
          if (isMessageForUs()) {
            processMessage();
          }
        }
        function chkLateLoaded() {
          if ("loading" !== document.readyState) {
            window.parent.postMessage("[iFrameResizerChild]Ready", "*");
          }
        }
        if (!("iframeResizer" in window)) {
          window.iframeChildListener = function(data) {
            receiver({ data, sameDomian: true });
          };
          addEventListener(window, "message", receiver);
          addEventListener(window, "readystatechange", chkLateLoaded);
          chkLateLoaded();
        }
      })();
    }
  });

  // node_modules/iframe-resizer/index.js
  var require_iframe_resizer = __commonJS({
    "node_modules/iframe-resizer/index.js"(exports, module) {
      var iframeResize = require_iframeResizer();
      module.exports = {
        iframeResize,
        iframeResizer: iframeResize,
        // Backwards compatibility
        contentWindow: require_iframeResizer_contentWindow()
      };
    }
  });

  // node_modules/@forge/bridge/out/view/adf-renderer.js
  var require_adf_renderer = __commonJS({
    "node_modules/@forge/bridge/out/view/adf-renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createAdfRendererIframeProps = void 0;
      var uuid_1 = require_commonjs_browser();
      var createAdfRendererIframeProps = async (context, iframeId) => {
        const IframeResizer = await Promise.resolve().then(() => __toESM(require_iframe_resizer()));
        const IframeResizerModule = IframeResizer.default || IframeResizer;
        const origin = new URL(document.referrer).origin;
        const src = `${origin}/forge-apps/adf-renderer`;
        const id = iframeId || `forge-adf-renderer-iframe-${(0, uuid_1.v4)()}`;
        const onLoad = () => {
          var _a, _b, _c, _d, _e, _f;
          const iframe = document.getElementById(id);
          const message = {
            type: "adf-document",
            document: (_a = context.extension.macro) === null || _a === void 0 ? void 0 : _a.body,
            timestamp: Date.now(),
            source: "forge-adf-renderer",
            localId: context.localId,
            isEditing: (_c = (_b = context.extension) === null || _b === void 0 ? void 0 : _b.isEditing) !== null && _c !== void 0 ? _c : false,
            contentId: (_e = (_d = context.extension) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.id
          };
          IframeResizerModule.iframeResizer({
            heightCalculationMethod: "taggedElement",
            widthCalculationMethod: "bodyScroll",
            initCallback: (iframe2) => {
              var _a2;
              (_a2 = iframe2 === null || iframe2 === void 0 ? void 0 : iframe2.iFrameResizer) === null || _a2 === void 0 ? void 0 : _a2.resize();
            }
          }, iframe || "");
          (_f = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _f === void 0 ? void 0 : _f.postMessage(message, origin);
        };
        setTimeout(() => {
          document.documentElement.style.height = "auto";
          document.body.style.height = "auto";
        }, 200);
        return {
          id,
          src,
          onLoad
        };
      };
      exports.createAdfRendererIframeProps = createAdfRendererIframeProps;
    }
  });

  // node_modules/@forge/bridge/out/view/onClose.js
  var require_onClose = __commonJS({
    "node_modules/@forge/bridge/out/view/onClose.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.onClose = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var onClose = async (payload) => {
        try {
          const success = await callBridge("onClose", payload);
          if (success === false) {
            throw new errors_1.BridgeAPIError("`onClose` call has failed.");
          }
        } catch (e) {
          throw new errors_1.BridgeAPIError("`onClose` failed because this resource's view is not closable.");
        }
      };
      exports.onClose = onClose;
    }
  });

  // node_modules/@forge/bridge/out/view/view.js
  var require_view = __commonJS({
    "node_modules/@forge/bridge/out/view/view.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.view = void 0;
      var submit_1 = require_submit();
      var close_1 = require_close();
      var open_1 = require_open();
      var refresh_1 = require_refresh();
      var createHistory_1 = require_createHistory();
      var getContext_1 = require_getContext();
      var changeWindowTitle_1 = require_changeWindowTitle();
      var theme_1 = require_theme();
      var emitReadyEvent_1 = require_emitReadyEvent();
      var adf_renderer_1 = require_adf_renderer();
      var onClose_1 = require_onClose();
      exports.view = {
        submit: submit_1.submit,
        close: close_1.close,
        onClose: onClose_1.onClose,
        open: open_1.open,
        refresh: refresh_1.refresh,
        createHistory: createHistory_1.createHistory,
        getContext: getContext_1.getContext,
        theme: theme_1.theme,
        changeWindowTitle: changeWindowTitle_1.changeWindowTitle,
        emitReadyEvent: emitReadyEvent_1.emitReadyEvent,
        createAdfRendererIframeProps: adf_renderer_1.createAdfRendererIframeProps
      };
    }
  });

  // node_modules/@forge/bridge/out/view/index.js
  var require_view2 = __commonJS({
    "node_modules/@forge/bridge/out/view/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_view(), exports);
    }
  });

  // node_modules/@forge/bridge/out/router/router.js
  var require_router = __commonJS({
    "node_modules/@forge/bridge/out/router/router.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.router = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getUrl = async (location) => {
        if (!(location === null || location === void 0 ? void 0 : location.target)) {
          throw new Error("target is required for getUrl");
        }
        const url = await callBridge("getUrl", location);
        if (!url) {
          throw new Error("Failed to get URL");
        }
        try {
          return new URL(url);
        } catch (error) {
          throw new Error(`Failed to parse URL: ${url} (${error})`);
        }
      };
      var navigate = (location) => {
        if (typeof location === "string") {
          return callBridge("navigate", { url: location, type: "same-tab" });
        } else {
          if (!(location === null || location === void 0 ? void 0 : location.target)) {
            throw new Error("target is required for navigation");
          }
          return callBridge("navigate", { ...location, type: "same-tab" });
        }
      };
      var open = (location) => {
        if (typeof location === "string") {
          return callBridge("navigate", { url: location, type: "new-tab" });
        } else {
          if (!(location === null || location === void 0 ? void 0 : location.target)) {
            throw new Error("target is required for navigation");
          }
          return callBridge("navigate", { ...location, type: "new-tab" });
        }
      };
      var reload = async () => callBridge("reload");
      exports.router = {
        getUrl,
        navigate,
        open,
        reload
      };
    }
  });

  // node_modules/@forge/bridge/out/router/index.js
  var require_router2 = __commonJS({
    "node_modules/@forge/bridge/out/router/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_router(), exports);
    }
  });

  // node_modules/@forge/bridge/out/modal/modal.js
  var require_modal = __commonJS({
    "node_modules/@forge/bridge/out/modal/modal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Modal = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var noop = () => {
      };
      var Modal = class {
        constructor(opts) {
          var _a, _b;
          this.resource = (opts === null || opts === void 0 ? void 0 : opts.resource) || null;
          this.onClose = (opts === null || opts === void 0 ? void 0 : opts.onClose) || noop;
          this.size = (opts === null || opts === void 0 ? void 0 : opts.size) || "medium";
          this.context = (opts === null || opts === void 0 ? void 0 : opts.context) || {};
          this.closeOnEscape = (_a = opts === null || opts === void 0 ? void 0 : opts.closeOnEscape) !== null && _a !== void 0 ? _a : true;
          this.closeOnOverlayClick = (_b = opts === null || opts === void 0 ? void 0 : opts.closeOnOverlayClick) !== null && _b !== void 0 ? _b : true;
          this.title = (opts === null || opts === void 0 ? void 0 : opts.title) || "";
          this.icon = (opts === null || opts === void 0 ? void 0 : opts.icon) || "";
        }
        async open() {
          try {
            const success = await callBridge("openModal", {
              resource: this.resource,
              onClose: this.onClose,
              size: this.size,
              context: this.context,
              closeOnEscape: this.closeOnEscape,
              closeOnOverlayClick: this.closeOnOverlayClick,
              title: this.title,
              icon: this.icon
            });
            if (success === false) {
              throw new errors_1.BridgeAPIError("Unable to open modal.");
            }
          } catch (err) {
            throw new errors_1.BridgeAPIError("Unable to open modal.");
          }
        }
      };
      exports.Modal = Modal;
    }
  });

  // node_modules/@forge/bridge/out/modal/index.js
  var require_modal2 = __commonJS({
    "node_modules/@forge/bridge/out/modal/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_modal(), exports);
    }
  });

  // node_modules/@forge/bridge/out/fetch/fetch.js
  var require_fetch = __commonJS({
    "node_modules/@forge/bridge/out/fetch/fetch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.productFetchApi = exports.remoteFetchApi = void 0;
      var blobParser_1 = require_blobParser();
      var parseFormData = async (form, matchFilePrefix = false) => {
        const parsed = {};
        for (const [key, value] of form.entries()) {
          const isFileKey = matchFilePrefix ? key.startsWith("file") : key === "file";
          if (isFileKey) {
            const fileName = value.name;
            const fileType = value.type;
            parsed[key] = await (0, blobParser_1.blobToBase64)(value);
            parsed[`__${key}Name`] = fileName;
            parsed[`__${key}Type`] = fileType;
          } else {
            parsed[key] = value;
          }
        }
        return JSON.stringify(parsed);
      };
      var validateFetchOptions = (init2) => {
        if (!init2) {
          return init2;
        }
        if ("signal" in init2) {
          const { signal: _signal, ...rest } = init2;
          console.error("Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.");
          return rest;
        }
        return init2;
      };
      var parseRequest = async (fetchType, init2) => {
        const isFormData = (init2 === null || init2 === void 0 ? void 0 : init2.body) instanceof FormData ? true : false;
        const requestBody = isFormData ? await parseFormData(init2 === null || init2 === void 0 ? void 0 : init2.body, fetchType === "remote") : init2 === null || init2 === void 0 ? void 0 : init2.body;
        const req = new Request("", { body: requestBody, method: init2 === null || init2 === void 0 ? void 0 : init2.method, headers: init2 === null || init2 === void 0 ? void 0 : init2.headers });
        const headers = Object.fromEntries(req.headers.entries());
        const body = req.method !== "GET" ? await req.text() : null;
        return {
          body,
          headers: new Headers(headers),
          isMultipartFormData: isFormData
        };
      };
      var remoteFetchApi = (callBridge) => {
        const fetch2 = async (remoteKey, init2) => {
          const validatedInit = validateFetchOptions(init2);
          const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest("remote", validatedInit);
          const fetchPayload = {
            remoteKey,
            fetchRequestInit: { ...validatedInit, body: requestBody, headers: [...requestHeaders.entries()] },
            isMultipartFormData
          };
          const { body, headers, statusText, status, isAttachment } = await callBridge("fetchRemote", fetchPayload);
          const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
          return new Response(responseBody || null, { headers, status, statusText });
        };
        return {
          requestRemote: (remoteKey, fetchOptions) => fetch2(remoteKey, fetchOptions)
        };
      };
      exports.remoteFetchApi = remoteFetchApi;
      var productFetchApi = (callBridge) => {
        const fetch2 = async (product, restPath, init2) => {
          const validatedInit = validateFetchOptions(init2);
          const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest("product", validatedInit);
          if (!requestHeaders.has("X-Atlassian-Token")) {
            requestHeaders.set("X-Atlassian-Token", "no-check");
          }
          const fetchPayload = {
            product,
            restPath,
            fetchRequestInit: {
              ...validatedInit,
              body: requestBody,
              headers: [...requestHeaders.entries()]
            },
            isMultipartFormData
          };
          const { body, headers, statusText, status, isAttachment } = await callBridge("fetchProduct", fetchPayload);
          const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
          return new Response(responseBody || null, { headers, status, statusText });
        };
        return {
          requestConfluence: (restPath, fetchOptions) => fetch2("confluence", restPath, fetchOptions),
          requestJira: (restPath, fetchOptions) => fetch2("jira", restPath, fetchOptions),
          requestBitbucket: (restPath, fetchOptions) => fetch2("bitbucket", restPath, fetchOptions)
        };
      };
      exports.productFetchApi = productFetchApi;
    }
  });

  // node_modules/@forge/bridge/out/fetch/index.js
  var require_fetch2 = __commonJS({
    "node_modules/@forge/bridge/out/fetch/index.js"(exports) {
      "use strict";
      var _a;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.requestRemote = exports.requestBitbucket = exports.requestJira = exports.requestConfluence = void 0;
      var bridge_1 = require_bridge();
      var fetch_1 = require_fetch();
      _a = (0, fetch_1.productFetchApi)((0, bridge_1.getCallBridge)()), exports.requestConfluence = _a.requestConfluence, exports.requestJira = _a.requestJira, exports.requestBitbucket = _a.requestBitbucket;
      exports.requestRemote = (0, fetch_1.remoteFetchApi)((0, bridge_1.getCallBridge)()).requestRemote;
    }
  });

  // node_modules/@forge/bridge/out/flag/flag.js
  var require_flag = __commonJS({
    "node_modules/@forge/bridge/out/flag/flag.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showFlag = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var showFlag = (options) => {
        var _a;
        if (!options.id) {
          throw new errors_1.BridgeAPIError('"id" must be defined in flag options');
        }
        const result = callBridge("showFlag", {
          ...options,
          type: (_a = options.type) !== null && _a !== void 0 ? _a : "info"
        });
        return {
          close: async () => {
            await result;
            return callBridge("closeFlag", { id: options.id });
          }
        };
      };
      exports.showFlag = showFlag;
    }
  });

  // node_modules/@forge/bridge/out/flag/index.js
  var require_flag2 = __commonJS({
    "node_modules/@forge/bridge/out/flag/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showFlag = void 0;
      var flag_1 = require_flag();
      Object.defineProperty(exports, "showFlag", { enumerable: true, get: function() {
        return flag_1.showFlag;
      } });
    }
  });

  // node_modules/@forge/bridge/out/events/index.js
  var require_events2 = __commonJS({
    "node_modules/@forge/bridge/out/events/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_events(), exports);
    }
  });

  // node_modules/@forge/bridge/out/realtime/realtime.js
  var require_realtime = __commonJS({
    "node_modules/@forge/bridge/out/realtime/realtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.realtime = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var publish = (channel, payload, options) => {
        return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options });
      };
      var subscribe = (channel, callback, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback,
          options
        });
      };
      var publishGlobal = (channel, payload, options) => {
        return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options, isGlobal: true });
      };
      var subscribeGlobal = (channel, callback, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback,
          options,
          isGlobal: true
        });
      };
      exports.realtime = {
        publish,
        subscribe,
        publishGlobal,
        subscribeGlobal
      };
    }
  });

  // node_modules/@forge/bridge/out/realtime/productContext.js
  var require_productContext = __commonJS({
    "node_modules/@forge/bridge/out/realtime/productContext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Bitbucket = exports.Confluence = exports.Jira = void 0;
      var Jira;
      (function(Jira2) {
        Jira2["Board"] = "board";
        Jira2["Issue"] = "issue";
        Jira2["Project"] = "project";
      })(Jira = exports.Jira || (exports.Jira = {}));
      var Confluence;
      (function(Confluence2) {
        Confluence2["Content"] = "content";
        Confluence2["Space"] = "space";
      })(Confluence = exports.Confluence || (exports.Confluence = {}));
      var Bitbucket;
      (function(Bitbucket2) {
        Bitbucket2["Repository"] = "repository";
        Bitbucket2["PullRequest"] = "pullRequest";
      })(Bitbucket = exports.Bitbucket || (exports.Bitbucket = {}));
    }
  });

  // node_modules/@forge/bridge/out/realtime/index.js
  var require_realtime2 = __commonJS({
    "node_modules/@forge/bridge/out/realtime/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Bitbucket = exports.Confluence = exports.Jira = exports.realtime = void 0;
      var realtime_1 = require_realtime();
      Object.defineProperty(exports, "realtime", { enumerable: true, get: function() {
        return realtime_1.realtime;
      } });
      var productContext_1 = require_productContext();
      Object.defineProperty(exports, "Jira", { enumerable: true, get: function() {
        return productContext_1.Jira;
      } });
      Object.defineProperty(exports, "Confluence", { enumerable: true, get: function() {
        return productContext_1.Confluence;
      } });
      Object.defineProperty(exports, "Bitbucket", { enumerable: true, get: function() {
        return productContext_1.Bitbucket;
      } });
    }
  });

  // node_modules/@forge/bridge/out/rovo/open.js
  var require_open2 = __commonJS({
    "node_modules/@forge/bridge/out/rovo/open.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.open = exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var MAX_AGENT_LENGTH = 30;
      var callBridge = (0, bridge_1.getCallBridge)();
      exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
      var transformRovoPayload = (openRovoPayload) => {
        switch (openRovoPayload.type) {
          case "forge":
            return {
              agentName: openRovoPayload.agentName,
              agentKey: openRovoPayload.agentKey,
              prompt: openRovoPayload.prompt
            };
          case "atlassian":
            return {
              agentName: openRovoPayload.agentName,
              prompt: openRovoPayload.prompt
            };
          default:
            return { prompt: openRovoPayload.prompt };
        }
      };
      var open = async (openRovoPayload) => {
        if (openRovoPayload.type === "forge") {
          if (openRovoPayload.agentName.length > MAX_AGENT_LENGTH) {
            throw new Error("rovo agent name too long");
          }
          if (openRovoPayload.agentKey.length > MAX_AGENT_LENGTH) {
            throw new Error("rovo agent key too long");
          }
        }
        const rovoArgs = transformRovoPayload(openRovoPayload);
        const success = await callBridge("openRovo", rovoArgs);
        if (success === false) {
          throw new errors_1.BridgeAPIError(exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
        }
      };
      exports.open = open;
    }
  });

  // node_modules/@forge/bridge/out/rovo/isEnabled.js
  var require_isEnabled = __commonJS({
    "node_modules/@forge/bridge/out/rovo/isEnabled.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isEnabled = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var isEnabled = () => {
        return callBridge("isRovoEnabled");
      };
      exports.isEnabled = isEnabled;
    }
  });

  // node_modules/@forge/bridge/out/rovo/rovo.js
  var require_rovo = __commonJS({
    "node_modules/@forge/bridge/out/rovo/rovo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.rovo = void 0;
      var open_1 = require_open2();
      var isEnabled_1 = require_isEnabled();
      exports.rovo = {
        open: open_1.open,
        isEnabled: isEnabled_1.isEnabled
      };
    }
  });

  // node_modules/@forge/bridge/out/rovo/index.js
  var require_rovo2 = __commonJS({
    "node_modules/@forge/bridge/out/rovo/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_rovo(), exports);
    }
  });

  // node_modules/@forge/bridge/out/i18n/index.js
  var require_i18n = __commonJS({
    "node_modules/@forge/bridge/out/i18n/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createTranslationFunction = exports.getTranslations = exports.resetTranslationsCache = void 0;
      var i18n_1 = require_out();
      var view_1 = require_view2();
      var frontendResourcesAccessor = {
        getI18nInfoConfig: async () => {
          const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${i18n_1.I18N_INFO_FILE_NAME}`);
          if (!resp.ok) {
            throw new Error("Failed to get i18n info config: " + resp.statusText);
          }
          const info = await resp.json();
          return info.config;
        },
        getTranslationResource: async (locale) => {
          const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${locale}.json`);
          if (!resp.ok) {
            throw new Error(`Failed to get translation resource for locale: ${locale}`);
          }
          return resp.json();
        }
      };
      var translationsGetter = new i18n_1.TranslationsGetter(frontendResourcesAccessor);
      var resetTranslationsCache = () => {
        translationsGetter.reset();
      };
      exports.resetTranslationsCache = resetTranslationsCache;
      var getTranslations = async (locale = null, options = {
        fallback: true
      }) => {
        let targetLocale = locale;
        if (!targetLocale) {
          const context = await view_1.view.getContext();
          targetLocale = context.locale;
        }
        return await translationsGetter.getTranslations(targetLocale, options);
      };
      exports.getTranslations = getTranslations;
      var createTranslationFunction = async (locale = null) => {
        let targetLocale = locale;
        if (!targetLocale) {
          const context = await view_1.view.getContext();
          targetLocale = context.locale;
        }
        const translator = new i18n_1.Translator(targetLocale, translationsGetter);
        await translator.init();
        return (i18nKey, defaultValue) => {
          var _a, _b;
          return (_b = (_a = translator.translate(i18nKey)) !== null && _a !== void 0 ? _a : defaultValue) !== null && _b !== void 0 ? _b : i18nKey;
        };
      };
      exports.createTranslationFunction = createTranslationFunction;
    }
  });

  // node_modules/@forge/bridge/out/permissions/permissions.js
  var require_permissions = __commonJS({
    "node_modules/@forge/bridge/out/permissions/permissions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.permissions = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var egressGet = async (payload) => {
        return callBridge("__permission__egressGet", payload);
      };
      var egressSet = async (payload) => {
        return callBridge("__permission__egressSet", payload);
      };
      var egressDeleteDomain = async (payload) => {
        return callBridge("__permission__egressDeleteDomain", payload);
      };
      var egressDeleteGroup = async (payload) => {
        return callBridge("__permission__egressDeleteGroup", payload);
      };
      var remoteGet = async (payload) => {
        return callBridge("__permission__remoteGet", payload);
      };
      var remoteSet = async (payload) => {
        return callBridge("__permission__remoteSet", payload);
      };
      exports.permissions = {
        egress: {
          get: egressGet,
          set: egressSet,
          deleteDomain: egressDeleteDomain,
          deleteGroup: egressDeleteGroup
        },
        remote: {
          get: remoteGet,
          set: remoteSet
        }
      };
    }
  });

  // node_modules/@forge/egress/out/egress/url-parser.js
  var require_url_parser = __commonJS({
    "node_modules/@forge/egress/out/egress/url-parser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseUrl = void 0;
      function parseUrl(url) {
        var _a, _b;
        const protocol = (_b = (_a = url.match(/^(.*?:)/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "https:";
        const hostAndPath = url.replace(protocol, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0];
        const hostname = hostAndPath.split("/")[0];
        const pathname = hostAndPath.slice(hostname.length) || "/";
        return { protocol, hostname, pathname };
      }
      exports.parseUrl = parseUrl;
    }
  });

  // node_modules/@forge/egress/out/egress/utils.js
  var require_utils2 = __commonJS({
    "node_modules/@forge/egress/out/egress/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getEgressesBasedOnToggles = exports.sortAndGroupEgressPermissionsByDomain = exports.EgressCategory = exports.EgressType = exports.globToRegex = void 0;
      var url_parser_1 = require_url_parser();
      function globToRegex(pattern) {
        const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        const regexPattern = escaped.replace(/\*/g, ".*");
        return new RegExp(`^${regexPattern}$`);
      }
      exports.globToRegex = globToRegex;
      var sortAndGroupEgressPermissionsByDomain = (egressAddresses) => {
        if ((egressAddresses === null || egressAddresses === void 0 ? void 0 : egressAddresses.length) === 0) {
          return [];
        }
        const protocolRegex = /^(.*?:\/\/)/;
        const domains = /* @__PURE__ */ new Set();
        const wildcardDomains = [];
        egressAddresses.forEach((item) => {
          const itemWithProtocol = protocolRegex.test(item) ? item : `https://${item}`;
          const url = (0, url_parser_1.parseUrl)(itemWithProtocol);
          if (url.hostname.startsWith("*")) {
            domains.add(url.hostname.substring(2));
            wildcardDomains.push(globToRegex(url.hostname));
          } else {
            domains.add(url.hostname);
          }
        });
        return [...domains].sort().reduce((grouped, domain) => {
          if (!wildcardDomains.some((pattern) => pattern.test(domain))) {
            grouped.push(domain);
          }
          return grouped;
        }, []);
      };
      exports.sortAndGroupEgressPermissionsByDomain = sortAndGroupEgressPermissionsByDomain;
      var EgressType;
      (function(EgressType2) {
        EgressType2["FetchBackendSide"] = "FETCH_BACKEND_SIDE";
        EgressType2["FetchClientSide"] = "FETCH_CLIENT_SIDE";
        EgressType2["Fonts"] = "FONTS";
        EgressType2["Frames"] = "FRAMES";
        EgressType2["Images"] = "IMAGES";
        EgressType2["Media"] = "MEDIA";
        EgressType2["Navigation"] = "NAVIGATION";
        EgressType2["Scripts"] = "SCRIPTS";
        EgressType2["Styles"] = "STYLES";
      })(EgressType = exports.EgressType || (exports.EgressType = {}));
      var EgressCategory;
      (function(EgressCategory2) {
        EgressCategory2["ANALYTICS"] = "ANALYTICS";
      })(EgressCategory = exports.EgressCategory || (exports.EgressCategory = {}));
      var getEgressesBasedOnToggles = (input) => {
        const filteredEgresses = input.egress.filter((egress) => {
          var _a;
          if (((_a = egress.category) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === EgressCategory.ANALYTICS) {
            if (input.installationConfig) {
              const analyticsConfig = input.installationConfig.find((config) => config.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS");
              return (analyticsConfig === null || analyticsConfig === void 0 ? void 0 : analyticsConfig.value) !== false;
            } else {
              return input.overrides.ALLOW_EGRESS_ANALYTICS !== false;
            }
          }
          return true;
        });
        const egressByType = /* @__PURE__ */ new Map();
        for (const egress of filteredEgresses) {
          if (!egressByType.has(egress.type)) {
            egressByType.set(egress.type, egress.addresses);
          }
          egressByType.set(egress.type, [...egressByType.get(egress.type), ...egress.addresses]);
        }
        return [...egressByType.entries()].map(([type, egresses]) => ({
          type,
          addresses: [...new Set(egresses)]
        }));
      };
      exports.getEgressesBasedOnToggles = getEgressesBasedOnToggles;
    }
  });

  // node_modules/@forge/egress/out/egress/egress-filtering-service.js
  var require_egress_filtering_service = __commonJS({
    "node_modules/@forge/egress/out/egress/egress-filtering-service.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EgressFilteringService = void 0;
      var url_parser_1 = require_url_parser();
      var utils_1 = require_utils2();
      var EgressFilteringService = class {
        constructor(allowList) {
          this.URLs = allowList.filter((domainOrURL) => !domainOrURL.startsWith("*")).map((url) => this.parseUrl(url));
          this.wildcardDomains = allowList.filter((domainOrURL) => domainOrURL !== "*").map((url) => this.parseUrl(url)).filter((url) => decodeURIComponent(url.hostname).startsWith("*")).map((url) => ({
            ...url,
            regex: (0, utils_1.globToRegex)(decodeURIComponent(url.hostname))
          }));
          this.allowsEverything = allowList.includes("*");
        }
        parseUrl(url) {
          return (0, url_parser_1.parseUrl)(url);
        }
        containsWildCardEgress() {
          return this.allowsEverything;
        }
        isValidUrl(url) {
          if (this.allowsEverything) {
            return true;
          }
          const parsedUrl = this.parseUrl(url);
          return this.allowedDomainExact(parsedUrl, this.URLs) || this.allowedDomainPattern(parsedUrl, this.wildcardDomains);
        }
        isValidUrlCSP(url) {
          if (this.allowsEverything) {
            return true;
          }
          const parsedUrl = this.parseUrl(url);
          return this.allowedDomainExactAndPath(parsedUrl, this.URLs) || this.allowedDomainPatternAndPath(parsedUrl, this.wildcardDomains);
        }
        allowedDomainExact(domain, allowList) {
          return allowList.filter((allowed) => allowed.protocol === domain.protocol).some((url) => url.hostname === domain.hostname);
        }
        allowedDomainExactAndPath(domain, allowList) {
          return allowList.filter((allowed) => this.protocolMatchesCSP(allowed.protocol, domain.protocol)).filter((allowed) => allowed.hostname === domain.hostname).some((allowed) => this.pathMatches(allowed.pathname, domain.pathname));
        }
        allowedDomainPattern(domain, allowList) {
          return allowList.filter((allowed) => allowed.protocol === domain.protocol).some((pattern) => pattern.regex.test(domain.hostname));
        }
        allowedDomainPatternAndPath(domain, allowList) {
          return allowList.filter((pattern) => this.protocolMatchesCSP(pattern.protocol, domain.protocol)).filter((pattern) => pattern.regex.test(domain.hostname)).some((allowed) => this.pathMatches(allowed.pathname, domain.pathname));
        }
        protocolMatchesCSP(allowedProtocol, requestProtocol) {
          if (allowedProtocol === requestProtocol) {
            return true;
          }
          if (allowedProtocol === "http:" && requestProtocol === "https:") {
            return true;
          }
          if (allowedProtocol === "ws:" && requestProtocol === "wss:") {
            return true;
          }
          return false;
        }
        pathMatches(allowedPath, requestPath) {
          if (allowedPath === "/") {
            return true;
          }
          if (allowedPath.endsWith("/")) {
            return requestPath.startsWith(allowedPath);
          }
          return requestPath === allowedPath;
        }
      };
      exports.EgressFilteringService = EgressFilteringService;
    }
  });

  // node_modules/@forge/egress/out/egress/index.js
  var require_egress = __commonJS({
    "node_modules/@forge/egress/out/egress/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_egress_filtering_service(), exports);
      tslib_1.__exportStar(require_url_parser(), exports);
      tslib_1.__exportStar(require_utils2(), exports);
    }
  });

  // node_modules/@forge/egress/out/index.js
  var require_out2 = __commonJS({
    "node_modules/@forge/egress/out/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_egress(), exports);
    }
  });

  // node_modules/@forge/bridge/out/permissions/permissionsUtil.js
  var require_permissionsUtil = __commonJS({
    "node_modules/@forge/bridge/out/permissions/permissionsUtil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkPermissions = exports.createPermissionUtils = void 0;
      var egress_1 = require_out2();
      var view_1 = require_view2();
      function extractUrlString(url) {
        if (typeof url === "string") {
          return url;
        }
        if ("address" in url && url.address) {
          return url.address;
        }
        return url.remote || "";
      }
      var RESOURCE_TYPES = ["fonts", "styles", "frames", "images", "media", "scripts"];
      var FETCH_TYPES = ["backend", "client"];
      function createPermissionUtils(runtimePermissions) {
        if (!runtimePermissions) {
          return null;
        }
        const { scopes, external = {} } = runtimePermissions;
        const scopeArray = Array.isArray(scopes) ? scopes : Object.keys(scopes || {});
        return {
          hasScope: (scope) => scopeArray.includes(scope),
          canFetchFrom: (type, url) => {
            var _a;
            const fetchUrls = (_a = external.fetch) === null || _a === void 0 ? void 0 : _a[type];
            if (!(fetchUrls === null || fetchUrls === void 0 ? void 0 : fetchUrls.length))
              return false;
            const allowList = fetchUrls.map(extractUrlString).filter((u) => u.length > 0);
            if (allowList.length === 0)
              return false;
            const egressFilter = new egress_1.EgressFilteringService(allowList);
            const egressFilterWithCSP = egressFilter;
            return type === "client" ? egressFilterWithCSP.isValidUrlCSP(url) : egressFilter.isValidUrl(url);
          },
          canLoadResource: (type, url) => {
            const resourceUrls = external[type];
            if (!(resourceUrls === null || resourceUrls === void 0 ? void 0 : resourceUrls.length))
              return false;
            const allowList = resourceUrls.map(extractUrlString).filter((u) => u.length > 0);
            if (allowList.length === 0)
              return false;
            const egressFilter = new egress_1.EgressFilteringService(allowList);
            const egressFilterWithCSP = egressFilter;
            return egressFilterWithCSP.isValidUrlCSP(url);
          },
          getScopes: () => scopeArray,
          getExternalPermissions: () => external,
          hasAnyPermissions: () => scopeArray.length > 0 || Object.keys(external).length > 0
        };
      }
      exports.createPermissionUtils = createPermissionUtils;
      function checkScopes(requiredScopes, permissionUtils) {
        if (!(requiredScopes === null || requiredScopes === void 0 ? void 0 : requiredScopes.length)) {
          return void 0;
        }
        const missingScopes = requiredScopes.filter((scope) => !permissionUtils.hasScope(scope));
        return missingScopes.length > 0 ? missingScopes : void 0;
      }
      function checkFetchPermissions(requiredFetch, permissionUtils) {
        if (!(requiredFetch === null || requiredFetch === void 0 ? void 0 : requiredFetch.fetch)) {
          return void 0;
        }
        const missingFetch = {};
        FETCH_TYPES.forEach((type) => {
          var _a;
          const requiredUrls = (_a = requiredFetch.fetch) === null || _a === void 0 ? void 0 : _a[type];
          if (requiredUrls === null || requiredUrls === void 0 ? void 0 : requiredUrls.length) {
            const missingUrls = requiredUrls.filter((url) => !permissionUtils.canFetchFrom(type, url));
            if (missingUrls.length > 0) {
              missingFetch[type] = missingUrls;
            }
          }
        });
        return Object.keys(missingFetch).length > 0 ? missingFetch : void 0;
      }
      function checkResourcePermissions(requiredExternal, permissionUtils) {
        const missingResources = {};
        RESOURCE_TYPES.forEach((type) => {
          const requiredUrls = requiredExternal === null || requiredExternal === void 0 ? void 0 : requiredExternal[type];
          if (requiredUrls === null || requiredUrls === void 0 ? void 0 : requiredUrls.length) {
            const missingUrls = requiredUrls.filter((url) => !permissionUtils.canLoadResource(type, url));
            if (missingUrls.length > 0) {
              missingResources[type] = missingUrls;
            }
          }
        });
        return Object.keys(missingResources).length > 0 ? missingResources : void 0;
      }
      function checkExternalPermissions(requiredExternal, permissionUtils) {
        if (!requiredExternal) {
          return void 0;
        }
        const missingFetch = checkFetchPermissions(requiredExternal, permissionUtils);
        const missingResources = checkResourcePermissions(requiredExternal, permissionUtils);
        if (!missingFetch && !missingResources) {
          return void 0;
        }
        const missingExternal = {};
        if (missingFetch) {
          missingExternal.fetch = missingFetch;
        }
        if (missingResources) {
          Object.assign(missingExternal, missingResources);
        }
        return missingExternal;
      }
      function validateObjectField(value, fieldPath) {
        if (value !== void 0) {
          if (typeof value !== "object" || value === null || Array.isArray(value)) {
            throw new TypeError(`${fieldPath} should be an object, not ${Array.isArray(value) ? "an array" : `a ${typeof value}`}`);
          }
        }
      }
      function validateArrayField(value, fieldPath) {
        if (value !== void 0 && !Array.isArray(value)) {
          throw new TypeError(`${fieldPath} should be an array, not a ${typeof value}`);
        }
      }
      function validatePermissionShape(requiredPermissions) {
        validateArrayField(requiredPermissions.scopes, "scopes");
        const external = requiredPermissions.external;
        if (external === void 0)
          return;
        validateObjectField(external, "external");
        if (external.fetch !== void 0) {
          validateObjectField(external.fetch, "external.fetch");
          for (const type of FETCH_TYPES) {
            validateArrayField(external.fetch[type], `external.fetch.${type}`);
          }
        }
        for (const type of RESOURCE_TYPES) {
          validateArrayField(external[type], `external.${type}`);
        }
      }
      async function checkPermissions(requiredPermissions, runtimePermissions) {
        var _a;
        if (!requiredPermissions) {
          return { granted: false, missing: null };
        }
        validatePermissionShape(requiredPermissions);
        if (!((_a = requiredPermissions.scopes) === null || _a === void 0 ? void 0 : _a.length) && !requiredPermissions.external) {
          return { granted: true, missing: null };
        }
        let permissionsToCheck = runtimePermissions;
        if (!permissionsToCheck) {
          const context = await view_1.view.getContext();
          permissionsToCheck = context.permissions;
        }
        const permissionUtils = createPermissionUtils(permissionsToCheck);
        if (!permissionUtils) {
          return { granted: false, missing: null };
        }
        const missing = {};
        let hasAllRequiredPermissions = true;
        const missingScopes = checkScopes(requiredPermissions.scopes, permissionUtils);
        if (missingScopes) {
          missing.scopes = missingScopes;
          hasAllRequiredPermissions = false;
        }
        const missingExternal = checkExternalPermissions(requiredPermissions.external, permissionUtils);
        if (missingExternal) {
          missing.external = missingExternal;
          hasAllRequiredPermissions = false;
        }
        return {
          granted: hasAllRequiredPermissions,
          missing: hasAllRequiredPermissions ? null : missing
        };
      }
      exports.checkPermissions = checkPermissions;
    }
  });

  // node_modules/@forge/bridge/out/permissions/index.js
  var require_permissions2 = __commonJS({
    "node_modules/@forge/bridge/out/permissions/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_permissions(), exports);
      tslib_1.__exportStar(require_permissionsUtil(), exports);
    }
  });

  // node_modules/@forge/bridge/out/object-store/types.js
  var require_types2 = __commonJS({
    "node_modules/@forge/bridge/out/object-store/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0;
      exports.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.";
    }
  });

  // node_modules/@forge/bridge/out/object-store/utils.js
  var require_utils3 = __commonJS({
    "node_modules/@forge/bridge/out/object-store/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkRestrictedEnvironment = void 0;
      var errors_1 = require_errors();
      var view_1 = require_view2();
      var types_1 = require_types2();
      var checkRestrictedEnvironment = async () => {
        const { environmentType } = await view_1.view.getContext();
        if (environmentType === "PRODUCTION") {
          throw new errors_1.BridgeAPIError(types_1.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
        }
      };
      exports.checkRestrictedEnvironment = checkRestrictedEnvironment;
    }
  });

  // node_modules/@forge/bridge/out/object-store/upload.js
  var require_upload = __commonJS({
    "node_modules/@forge/bridge/out/object-store/upload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.upload = exports.createUploadPromises = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils3();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var base64ToBlob = (base64, mimeType) => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType || "application/octet-stream" });
      };
      var getObjectMetadata = async (blob) => {
        const length = blob.size;
        const arrayBuffer = await blob.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
        const hashArray = new Uint8Array(hashBuffer);
        const checksum = btoa(String.fromCharCode(...hashArray));
        const checksumType = "SHA256";
        return {
          length,
          checksum,
          checksumType
        };
      };
      var createUploadPromises = async ({ functionKey, objects }) => {
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate presigned URLs");
        }
        if (!Array.isArray(objects) || objects.length === 0) {
          throw new errors_1.BridgeAPIError("objects array is required and must not be empty");
        }
        const blobs = objects.map((obj, index) => {
          if (obj instanceof Blob) {
            return obj;
          }
          const isBase64Object = obj && typeof obj === "object" && "data" in obj && typeof obj.data === "string";
          if (!isBase64Object) {
            throw new errors_1.BridgeAPIError(`Invalid object type at index ${index}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`);
          }
          try {
            return base64ToBlob(obj.data, obj.mimeType);
          } catch (e) {
            throw new errors_1.BridgeAPIError(`Invalid base64 data at index ${index}. The data string must be valid base64 encoded.`);
          }
        });
        const allObjectMetadata = await Promise.all(blobs.map((blob) => getObjectMetadata(blob)));
        const presignedURLsToObjectMetadata = await (0, invoke_1.invoke)(functionKey, {
          allObjectMetadata
        });
        if (!presignedURLsToObjectMetadata || typeof presignedURLsToObjectMetadata !== "object") {
          throw new errors_1.BridgeAPIError("Invalid response from functionKey");
        }
        const checksumToBlobMap = /* @__PURE__ */ new Map();
        const checksumToIndexMap = /* @__PURE__ */ new Map();
        blobs.forEach((blob, index) => {
          const metadata = allObjectMetadata[index];
          checksumToBlobMap.set(metadata.checksum, blob);
          checksumToIndexMap.set(metadata.checksum, index);
        });
        const uploadPromises = Object.entries(presignedURLsToObjectMetadata).map(([presignedUrl, metadata]) => {
          const { key, checksum } = metadata;
          const object = checksumToBlobMap.get(checksum);
          const index = checksumToIndexMap.get(checksum);
          if (index === void 0) {
            return {
              promise: Promise.resolve({
                success: false,
                key,
                error: `Index not found for checksum ${checksum}`
              }),
              index: -1
            };
          }
          if (!object) {
            return {
              promise: Promise.resolve({
                success: false,
                key,
                error: `Blob not found for checksum ${checksum}`
              }),
              index
            };
          }
          const uploadPromise = (async () => {
            try {
              const response = await fetch(presignedUrl, {
                method: "PUT",
                body: object,
                headers: {
                  "Content-Type": object.type || "application/octet-stream",
                  "Content-Length": object.size.toString()
                }
              });
              return {
                success: response.ok,
                key,
                status: response.status,
                error: response.ok ? void 0 : `Upload failed with status ${response.status}`
              };
            } catch (error) {
              return {
                success: false,
                key,
                status: 503,
                error: error instanceof Error ? error.message : "Upload failed"
              };
            }
          })();
          return { promise: uploadPromise, index, objectType: object.type, objectSize: object.size };
        });
        return uploadPromises;
      };
      exports.createUploadPromises = createUploadPromises;
      var upload = async ({ functionKey, objects }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "upload" });
        const uploadPromises = await (0, exports.createUploadPromises)({ functionKey, objects });
        const results = await Promise.all(uploadPromises.map((item) => item.promise));
        return results;
      };
      exports.upload = upload;
    }
  });

  // node_modules/@forge/bridge/out/object-store/deleteObjects.js
  var require_deleteObjects = __commonJS({
    "node_modules/@forge/bridge/out/object-store/deleteObjects.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.deleteObjects = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils3();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var deleteObjects = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "delete" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to delete objects");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        await Promise.all(keys.map(async (key) => {
          await (0, invoke_1.invoke)(functionKey, { key });
        }));
      };
      exports.deleteObjects = deleteObjects;
    }
  });

  // node_modules/@forge/bridge/out/object-store/download.js
  var require_download = __commonJS({
    "node_modules/@forge/bridge/out/object-store/download.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.download = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils3();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var download = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "download" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate download URLs");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        const downloadUrlsTokeys = await (0, invoke_1.invoke)(functionKey, {
          keys
        });
        if (!downloadUrlsTokeys || typeof downloadUrlsTokeys !== "object") {
          throw new errors_1.BridgeAPIError("Invalid response from functionKey");
        }
        const downloadPromises = Object.entries(downloadUrlsTokeys).map(async ([downloadUrl, key]) => {
          try {
            const response = await fetch(downloadUrl, {
              method: "GET"
            });
            if (!response.ok) {
              return {
                success: false,
                key,
                status: response.status,
                error: `Download failed with status ${response.status}`
              };
            }
            const blob = await response.blob();
            return {
              success: true,
              key,
              blob,
              status: response.status
            };
          } catch (error) {
            return {
              success: false,
              key,
              status: 503,
              error: error instanceof Error ? error.message : "Download failed"
            };
          }
        });
        const results = await Promise.all(downloadPromises);
        return results;
      };
      exports.download = download;
    }
  });

  // node_modules/@forge/bridge/out/object-store/getMetadata.js
  var require_getMetadata = __commonJS({
    "node_modules/@forge/bridge/out/object-store/getMetadata.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getMetadata = void 0;
      var index_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils3();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getMetadata = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "getMetadata" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate object metadata");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        const results = await Promise.all(keys.map(async (key) => {
          const result = await (0, index_1.invoke)(functionKey, { key });
          if (!result || typeof result !== "object") {
            return {
              key,
              error: "Invalid response from functionKey"
            };
          }
          return result;
        }));
        return results;
      };
      exports.getMetadata = getMetadata;
    }
  });

  // node_modules/@forge/bridge/out/object-store/objectStore.js
  var require_objectStore = __commonJS({
    "node_modules/@forge/bridge/out/object-store/objectStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createUploadPromises = exports.objectStore = void 0;
      var upload_1 = require_upload();
      Object.defineProperty(exports, "createUploadPromises", { enumerable: true, get: function() {
        return upload_1.createUploadPromises;
      } });
      var deleteObjects_1 = require_deleteObjects();
      var download_1 = require_download();
      var getMetadata_1 = require_getMetadata();
      exports.objectStore = {
        upload: upload_1.upload,
        download: download_1.download,
        getMetadata: getMetadata_1.getMetadata,
        delete: deleteObjects_1.deleteObjects
      };
    }
  });

  // node_modules/@forge/bridge/out/object-store/index.js
  var require_object_store = __commonJS({
    "node_modules/@forge/bridge/out/object-store/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_objectStore(), exports);
      tslib_1.__exportStar(require_types2(), exports);
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/evaluator.js
  var require_evaluator = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/evaluator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Evaluator = void 0;
      var Evaluator = class {
        constructor(results) {
          this.results = results;
        }
        checkFlag(flagName, defaultValue) {
          if (!this.results || !this.results.feature_flags) {
            return defaultValue;
          }
          const featureFlags = this.results.feature_flags;
          let hashedValue = "";
          try {
            hashedValue = this.getHashedValue(flagName);
          } catch (err) {
            console.error("Unexpected error occurred while evaluating flag ", err);
            return defaultValue;
          }
          if (!hashedValue) {
            return defaultValue;
          }
          const evaluatedFlag = featureFlags[hashedValue];
          if (evaluatedFlag) {
            if (evaluatedFlag.disabled) {
              return false;
            }
            return evaluatedFlag.value;
          }
          return defaultValue;
        }
        shutDown() {
          this.results = void 0;
        }
        getHashedValue(flagName) {
          if (typeof flagName !== "string") {
            return "";
          }
          const input = flagName.trim();
          if (input.length === 0) {
            return "";
          }
          let hash = 5381;
          for (let i = 0; i < input.length; i += 1) {
            const charCode = input.charCodeAt(i);
            hash = (hash << 5) + hash + charCode;
            hash |= 0;
          }
          return (hash >>> 0).toString();
        }
      };
      exports.Evaluator = Evaluator;
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/types.js
  var require_types3 = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FeatureFlagEventType = void 0;
      var FeatureFlagEventType;
      (function(FeatureFlagEventType2) {
        FeatureFlagEventType2["CHECKFLAG"] = "checkFlag";
      })(FeatureFlagEventType = exports.FeatureFlagEventType || (exports.FeatureFlagEventType = {}));
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/featureFlagEvents.js
  var require_featureFlagEvents = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/featureFlagEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.trackFeatureFlagEvent = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var types_1 = require_types3();
      var maxOps = 500;
      var intervalInMs = 1e3 * 25;
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload || !payload.type || !payload.properties) {
          throw new errors_1.BridgeAPIError("Missing required parameters. Parameter type, and properties are required in the payload.");
        }
        if (!(payload.type.toUpperCase() in types_1.FeatureFlagEventType)) {
          throw new errors_1.BridgeAPIError("Event type is not supported");
        }
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _trackFeatureFlagEvent = (payload) => {
        validatePayload(payload);
        return callBridge("trackFeatureFlagEvent", payload);
      };
      exports.trackFeatureFlagEvent = (0, utils_1.withRateLimiter)(_trackFeatureFlagEvent, maxOps, intervalInMs, `Feature flags calls are rate limited at ${maxOps}req/${intervalInMs / 1e3}s`);
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js
  var require_initFeatureFlags = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.initFeatureFlags = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var maxOps = 500;
      var intervalInMs = 1e3 * 25;
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload || !payload.user || !payload.config) {
          throw new errors_1.BridgeAPIError("Missing required parameters. Parameter user is required in the payload.");
        }
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _initFeatureFlags = (payload) => {
        validatePayload(payload);
        return callBridge("initFeatureFlags", { user: payload.user, config: payload.config });
      };
      exports.initFeatureFlags = (0, utils_1.withRateLimiter)(_initFeatureFlags, maxOps, intervalInMs, `Feature flags initialisation calls are rate limited at ${maxOps}req/${intervalInMs / 1e3}s`);
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/featureFlags.js
  var require_featureFlags = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/featureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FeatureFlags = void 0;
      var evaluator_1 = require_evaluator();
      var featureFlagEvents_1 = require_featureFlagEvents();
      var initFeatureFlags_1 = require_initFeatureFlags();
      var types_1 = require_types3();
      var FeatureFlags = class {
        constructor() {
          this.initialized = false;
          this.eventProps = {};
        }
        async initialize(user, config = { environment: "development" }) {
          if (this.isInitialized()) {
            return;
          }
          this.eventProps.environment = config.environment;
          const result = await (0, initFeatureFlags_1.initFeatureFlags)({ user, config });
          this.initialized = true;
          this.evaluator = new evaluator_1.Evaluator(result);
        }
        checkFlag(flagName, defaultValue = false) {
          if (!this.isInitialized() || !this.evaluator) {
            this.sendCheckFlagEvent(flagName, false);
            throw new Error("FeatureFlags not initialized. Call initialize() first.");
          }
          this.sendCheckFlagEvent(flagName, true);
          return this.evaluator.checkFlag(flagName, defaultValue);
        }
        shutdown() {
          if (!this.isInitialized()) {
            return;
          }
          this.initialized = false;
          this.evaluator.shutDown();
        }
        isInitialized() {
          return this.initialized;
        }
        sendCheckFlagEvent(flagName, success) {
          const props = {
            type: types_1.FeatureFlagEventType.CHECKFLAG,
            properties: {
              ...this.eventProps,
              environment: this.eventProps.environment || "development",
              name: flagName,
              success
            }
          };
          void (0, featureFlagEvents_1.trackFeatureFlagEvent)(props);
        }
      };
      exports.FeatureFlags = FeatureFlags;
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/index.js
  var require_featureFlags2 = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FeatureFlags = void 0;
      var featureFlags_1 = require_featureFlags();
      Object.defineProperty(exports, "FeatureFlags", { enumerable: true, get: function() {
        return featureFlags_1.FeatureFlags;
      } });
    }
  });

  // node_modules/@forge/bridge/out/index.js
  var require_out3 = __commonJS({
    "node_modules/@forge/bridge/out/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.i18n = exports.NavigationTarget = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var targets_1 = require_targets();
      Object.defineProperty(exports, "NavigationTarget", { enumerable: true, get: function() {
        return targets_1.NavigationTarget;
      } });
      tslib_1.__exportStar(require_invoke2(), exports);
      tslib_1.__exportStar(require_invoke_endpoint2(), exports);
      tslib_1.__exportStar(require_view2(), exports);
      tslib_1.__exportStar(require_router2(), exports);
      tslib_1.__exportStar(require_modal2(), exports);
      tslib_1.__exportStar(require_fetch2(), exports);
      tslib_1.__exportStar(require_flag2(), exports);
      tslib_1.__exportStar(require_events2(), exports);
      tslib_1.__exportStar(require_realtime2(), exports);
      tslib_1.__exportStar(require_rovo2(), exports);
      exports.i18n = tslib_1.__importStar(require_i18n());
      tslib_1.__exportStar(require_permissions2(), exports);
      tslib_1.__exportStar(require_object_store(), exports);
      tslib_1.__exportStar(require_featureFlags2(), exports);
    }
  });

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S2(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a, b, e) {
        S2(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S2(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S2(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q2;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q2 = p.now();
        exports.unstable_now = function() {
          return p.now() - q2;
        };
      }
      var l;
      var p;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S2() : (N = false, O = null);
          }
        } else N = false;
      }
      var S2;
      if ("function" === typeof F) S2 = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S2 = function() {
          U.postMessage(null);
        };
      } else S2 = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S2());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++) da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = /* @__PURE__ */ Symbol.for("react.element");
      var wa = /* @__PURE__ */ Symbol.for("react.portal");
      var ya = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return Xb(e), a;
              if (f === d) return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e) hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b)) return a;
      }
      function ve(a, b) {
        if ("change" === a) return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a) return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a) return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e])) return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a]) return Xe[a];
        if (!We[a]) return a;
        var b = We[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n) b: {
                    t = k2;
                    x = n;
                    w = 0;
                    for (u = t; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t = vf(t), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q2(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q2(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q2(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n2.done) return c(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next()) n2 = q2(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n(a2, d2, f2, h2);
            if (Ka(f2)) return t(a2, d2, f2, h2);
            Mg(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e = a.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q2 = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q2) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q2);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G(wh, b);
        G(vh, a);
        G(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(uh);
        G(uh, b);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G(vh, a), G(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a = M.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a : O = O.next = a;
        }
        return O;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q2 = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q2, g = d) : k = k.next = q2;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (dh = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e, b), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e);
        }
        return e;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && fi(a);
      }
      function ai(a, b, c) {
        return c(function() {
          ei(b) && fi(a);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii.bind(null, M, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e = Th();
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b, c, f, d);
            return;
          }
        }
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, f, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni(a, b) {
        return li(4, 2, a, b);
      }
      function oi(a, b) {
        return li(4, 4, a, b);
      }
      function pi(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b, a), c);
      }
      function ri() {
      }
      function si(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e = R();
          gi(c, a, d, e);
          Bi(c, b, d);
        }
      }
      function ii(a, b, c) {
        var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh(a, b, e, d);
          null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M || null !== b && b === M;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi(ai.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R(), d = yi(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi(b, a, d, c), oh(b, a, d));
      } };
      function Fi(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function Gi(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        kh(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Li(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Li(a, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
      }
      function Ui(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ch(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Xi(a, b, d, e);
        return b.child;
      }
      function $i(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = Rg(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
        }
        b.flags |= 1;
        a = Pg(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi(a, b, e);
        }
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
        Xi(a, b, e, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        ch(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Xi(a, b, c, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else f = false;
        ch(b, e);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci(b.type, h);
          g.props = l;
          q2 = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r !== k) && Hi(b, g, d, k);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          var n = b.memoizedState;
          h !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f, e);
      }
      function jj(a, b, c, d, e, f) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Xi(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki(f, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Xi(a, b, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G(L, L.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S2(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S2(b), null;
          case 1:
            return Zf(b.type) && $f(), S2(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S2(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S2(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S2(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S2(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f) throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S2(b);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S2(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S2(b), null;
          case 10:
            return ah(b.type._context), S2(b), null;
          case 17:
            return Zf(b.type) && $f(), S2(b), null;
          case 19:
            E(L);
            f = b.memoizedState;
            if (null === f) return S2(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S2(b), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
            S2(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S2(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                  q2 !== f || 0 !== d && 3 !== q2.nodeType || (k = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y = q2.firstChild)) break;
                  r = q2;
                  q2 = y;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y;
              }
              c = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
        else for (; null !== V; ) {
          b = V;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U || Lj(c, b);
          case 6:
            var d = X, e = Xj;
            X = null;
            Yj(a, b, c);
            X = d;
            Xj = e;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f, g, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q2 = k[g + 1];
                  "style" === m ? sb(e, q2) : "dangerouslySetInnerHTML" === m ? nb(e, q2) : "children" === m ? ob(e, q2) : ta(e, m, q2, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q2 = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e = q2.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q2.stateNode, k = q2.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l ? "" : q2.memoizedProps;
                  } catch (t) {
                    W(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a);
                Wj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          if (6 === b) Ck(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f, b);
                  y.mode & 1 && Si(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f, b);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Ni(f, k, b);
                    ph(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Qi(f, h, b);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === Q && (Y = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e);
        f = a.pendingLanes;
        0 === f && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V = q2;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x = f.sibling;
                  if (null !== x) {
                    x.return = f.return;
                    V = x;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            ch(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Zk(d);
              a = Ci(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i(null, b, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(
                        f.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e, f, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
          case Ia:
            return pj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e, f, g, h, k) {
        a = new al(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e, f, g, h, k) {
        a = bl(c, d, true, a, e, f, g, h, k);
        a.context = dl(null);
        c = a.current;
        d = R();
        e = yi(c);
        f = mh(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e = b.current, f = R(), g = yi(e);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e, b, g);
        null !== a && (gi(a, e, g, f), oh(a, e, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = gl(g);
              f.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k);
            h.call(a2);
          };
        }
        var k = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k, c, d);
        });
        return k;
      }
      function rl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl(b, g, a, e);
        } else g = ql(c, b, a, e, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R();
                gi(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R();
            gi(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R();
            gi(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f = require_react();
      var k = /* @__PURE__ */ Symbol.for("react.element");
      var l = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ui/app/app.js
  var import_bridge = __toESM(require_out3());
  var DYNAMIC_FIELDS = [
    "Affects versions",
    "Assignee",
    "CheckedorNot",
    "Comment",
    "Completed date",
    "Components",
    "Contains text",
    "Created",
    "Creator",
    "Due date",
    "Epic link",
    "Epic name",
    "Fix versions",
    "Issue key",
    "Issue type",
    "Labels",
    "Last updated",
    "Linked issues",
    "Priority",
    "Project",
    "Reporter",
    "Resolution",
    "Resolution date",
    "Sprint",
    "Status",
    "Story point estimate",
    "Summary",
    "Time tracking",
    "Voter",
    "Watcher"
  ];
  var ISSUE_FIELDS = [
    "Affects versions",
    "Assignee",
    "CheckedorNot",
    "Completed date",
    "Components",
    "Created",
    "Creator",
    "Due date",
    "Epic link",
    "Epic name",
    "Fix versions",
    "Issue key",
    "Issue type",
    "Labels",
    "Last updated",
    "Linked issues",
    "Priority",
    "Project",
    "Reporter",
    "Resolution",
    "Resolution date",
    "Sprint",
    "Status",
    "Story point estimate",
    "Summary",
    "Time tracking",
    "Voter",
    "Watcher"
  ];
  var SPECIAL_COLUMNS = [
    "Checkbox",
    "Checklist progress",
    "Comment count",
    "Cumulative flow",
    "Gantt chart",
    "Issue actions",
    "Issue navigator link",
    "Rating",
    "Status transition date",
    "Time in status",
    "Vote button",
    "Watch button"
  ];
  var TABS = [
    { id: "details", ico: "\u{1F310}", label: "Details" },
    { id: "static", ico: "\u2261", label: "Static filters" },
    { id: "dynamic", ico: "\u2261", label: "Dynamic filters" },
    { id: "smart", ico: "\u2261", label: "Smart filters" },
    { id: "views", ico: "\u{1F441}", label: "Views" },
    { id: "queues", ico: "\u{1F4E6}", label: "Queues" },
    { id: "custom-values", ico: "\uFF0B", label: "Custom values" },
    { id: "custom-ratios", ico: "\u2297", label: "Custom ratios" },
    { id: "time-series", ico: "\u{1F550}", label: "Time series" },
    { id: "misc", ico: "\u2261", label: "Misc" }
  ];
  var S = {
    view: "home",
    richFilters: [],
    filtered: [],
    jiraFilters: [],
    searchQ: "",
    current: null,
    activeTab: "details",
    activeViewIdx: null,
    // index of the view currently open in the detail sub-page
    viewColumnTab: "issue"
    // active tab in the column picker: 'issue' | 'special' | 'smart'
  };
  var esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  var app = () => document.getElementById("content-area") || document.getElementById("app");
  var q = (sel) => document.querySelector(sel);
  var qa = (sel) => [...document.querySelectorAll(sel)];
  function setHTML(html) {
    if (app()) app().innerHTML = html;
  }
  function applySearch() {
    const q2 = S.searchQ.toLowerCase();
    S.filtered = q2 ? S.richFilters.filter((f) => f.name.toLowerCase().includes(q2)) : [...S.richFilters];
  }
  function toast(type, msg) {
    let wrap = document.getElementById("toasts");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.id = "toasts";
      wrap.className = "tk-wrap";
      document.body.appendChild(wrap);
    }
    const t = document.createElement("div");
    t.className = "tk tk-" + type;
    t.innerHTML = (type === "ok" ? "\u2713 " : "\u26A0 ") + esc(msg);
    wrap.appendChild(t);
    setTimeout(() => {
      t.style.transition = "opacity .3s";
      t.style.opacity = "0";
      setTimeout(() => t.remove(), 320);
    }, 3e3);
  }
  function renderHome() {
    const rows = S.filtered.length ? S.filtered.map((f) => `
      <tr>
        <td style="width:28px"><button class="star${f.starred ? " on" : ""}" data-star="${esc(f.id)}">\u2605</button></td>
        <td><a class="cn" data-open="${esc(f.id)}">${esc(f.name)}</a></td>
        <td><div class="row"><span class="av">DT</span><span>${esc(f.admins && f.admins[0] || "Deepa Toravi")}</span></div></td>
        <td>${f.jiraFilter ? `<a class="cn" style="font-weight:400">${esc(f.jiraFilter.name)}</a>` : "\u2014"}</td>
        <td><span class="bdg bdg-prv">${esc(f.visibility || "PRIVATE")}</span></td>
        <td style="font-size:13px;color:#6b778c">${f.lastUsed || f.updatedAt ? "during the last 24h" : "\u2014"}</td>
        <td style="width:40px"><button class="dots" data-dots="${esc(f.id)}">\xB7\xB7\xB7</button></td>
      </tr>`).join("") : `<tr><td colspan="7"><div class="empty">
        <div class="empty-ico">\u{1F50D}</div>
        <p>${S.richFilters.length === 0 ? "No rich filters yet. Click <strong>Create rich filter</strong> to get started." : "No rich filters match your search."}</p>
        ${S.richFilters.length === 0 ? '<button class="btn btn-p" id="emptyBtn">Create rich filter</button>' : ""}
      </div></td></tr>`;
    setHTML(`<div class="page">
    <div class="ph">
      <span class="ph-title">Rich filters</span>
      <div class="tb-search">
        <span class="tb-si">\u{1F50D}</span>
        <input id="srch" placeholder="Search\u2026" autocomplete="off" value="${esc(S.searchQ)}" style="width:100%;padding:6px 10px 6px 28px;border:1.5px solid #dfe1e6;border-radius:3px;font-size:14px;outline:none;background:#fafbfc">
      </div>
      <button class="btn-ic" id="btnRef" title="Refresh" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:#fff;border:1.5px solid #dfe1e6;border-radius:3px;color:#42526e;font-size:15px">\u21BA</button>
      <button class="btn btn-p" id="btnCreate">Create rich filter</button>
    </div>
    <div class="cnt">Showing ${S.filtered.length} rich filter${S.filtered.length !== 1 ? "s" : ""}</div>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr>
          <th>\u2605</th><th>Name \u2195</th><th>Administrators</th>
          <th>Jira filter</th><th>Visibility</th><th>Last used \u2195</th><th></th>
        </tr></thead>
        <tbody id="rfTb">${rows}</tbody>
      </table>
    </div>
  </div>`);
    bindHomeEvents();
  }
  function bindHomeEvents() {
    var _a, _b, _c, _d;
    (_a = q("#btnCreate")) == null ? void 0 : _a.addEventListener("click", () => showCreateModal());
    (_b = q("#emptyBtn")) == null ? void 0 : _b.addEventListener("click", () => showCreateModal());
    (_c = q("#btnRef")) == null ? void 0 : _c.addEventListener("click", async () => {
      await loadAll();
      renderHome();
    });
    (_d = q("#srch")) == null ? void 0 : _d.addEventListener("input", (e) => {
      S.searchQ = e.target.value;
      applySearch();
      rebuildTableBody();
    });
    bindTableRows();
  }
  function rebuildTableBody() {
    const tb = document.getElementById("rfTb");
    if (!tb) return;
    tb.innerHTML = S.filtered.length ? S.filtered.map((f) => `
      <tr>
        <td style="width:28px"><button class="star${f.starred ? " on" : ""}" data-star="${esc(f.id)}">\u2605</button></td>
        <td><a class="cn" data-open="${esc(f.id)}">${esc(f.name)}</a></td>
        <td><div class="row"><span class="av">DT</span><span>${esc(f.admins && f.admins[0] || "Deepa Toravi")}</span></div></td>
        <td>${f.jiraFilter ? `<a class="cn" style="font-weight:400">${esc(f.jiraFilter.name)}</a>` : "\u2014"}</td>
        <td><span class="bdg bdg-prv">${esc(f.visibility || "PRIVATE")}</span></td>
        <td style="font-size:13px;color:#6b778c">${f.lastUsed || f.updatedAt ? "during the last 24h" : "\u2014"}</td>
        <td style="width:40px"><button class="dots" data-dots="${esc(f.id)}">\xB7\xB7\xB7</button></td>
      </tr>`).join("") : `<tr><td colspan="7"><div class="empty"><div class="empty-ico">\u{1F50D}</div><p>No matches.</p></div></td></tr>`;
    bindTableRows();
    const cnt = q(".cnt");
    if (cnt) cnt.textContent = `Showing ${S.filtered.length} rich filter${S.filtered.length !== 1 ? "s" : ""}`;
  }
  function bindTableRows() {
    qa("[data-open]").forEach((el) => el.addEventListener("click", () => openFilter(el.dataset.open)));
    qa("[data-star]").forEach((btn) => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const f = S.richFilters.find((x) => x.id === btn.dataset.star);
      if (!f) return;
      f.starred = !f.starred;
      btn.classList.toggle("on", f.starred);
      (0, import_bridge.invoke)("updateRichFilter", { id: f.id, updates: { starred: f.starred } }).catch(() => {
      });
    }));
    qa("[data-dots]").forEach((btn) => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showCtxMenu(btn.dataset.dots, btn);
    }));
  }
  function showCtxMenu(id, btn) {
    document.querySelectorAll(".ctx").forEach((m) => m.remove());
    const menu = document.createElement("div");
    menu.className = "ctx";
    menu.style.cssText = "position:fixed;background:#fff;border:1px solid #dfe1e6;border-radius:4px;box-shadow:0 4px 16px rgba(9,30,66,.2);z-index:500;min-width:160px;overflow:hidden";
    menu.innerHTML = '<div class="ctx-i" data-act="edit">Edit</div><div class="ctx-i ctx-arc" data-act="arc">Archive</div><div class="ctx-i ctx-del" data-act="del">Delete</div>';
    const r = btn.getBoundingClientRect();
    menu.style.top = r.bottom + 4 + "px";
    menu.style.left = Math.max(4, r.right - 164) + "px";
    const ciStyle = "padding:9px 16px;cursor:pointer;font-size:14px;color:#172b4d";
    menu.querySelectorAll(".ctx-i").forEach((ci) => {
      ci.style.cssText = ciStyle;
      ci.addEventListener("mouseenter", () => ci.style.background = "#f4f5f7");
      ci.addEventListener("mouseleave", () => ci.style.background = "");
    });
    menu.querySelector(".ctx-del").style.color = "#de350b";
    document.body.appendChild(menu);
    menu.querySelector('[data-act="edit"]').onclick = () => {
      menu.remove();
      openFilter(id);
    };
    menu.querySelector('[data-act="arc"]').onclick = async () => {
      menu.remove();
      const f = S.richFilters.find((x) => x.id === id);
      if (!f || !confirm('Archive "' + f.name + '"?')) return;
      await (0, import_bridge.invoke)("archiveRichFilter", { id }).catch(() => {
      });
      S.richFilters = S.richFilters.filter((x) => x.id !== id);
      applySearch();
      toast("ok", '"' + f.name + '" archived.');
      if (S.view === "detail") goHome();
      else rebuildTableBody();
    };
    menu.querySelector('[data-act="del"]').onclick = async () => {
      menu.remove();
      const f = S.richFilters.find((x) => x.id === id);
      if (!f || !confirm('Delete "' + f.name + '"?')) return;
      await (0, import_bridge.invoke)("deleteRichFilter", { id }).catch(() => {
      });
      S.richFilters = S.richFilters.filter((x) => x.id !== id);
      applySearch();
      toast("ok", '"' + f.name + '" deleted.');
      if (S.view === "detail") goHome();
      else rebuildTableBody();
    };
    setTimeout(() => document.addEventListener("click", () => menu.remove(), { once: true }), 30);
  }
  function showCreateModal() {
    closeModals();
    const jfOpts = S.jiraFilters.map((jf) => `<option value="${esc(jf.id)}">${esc(jf.name)}</option>`).join("");
    const ov = document.createElement("div");
    ov.className = "ov";
    ov.id = "createOv";
    ov.innerHTML = `<div class="mo">
    <div class="mo-hd">
      <h2>Create rich filter</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mCN">Name <span class="req">*</span></label>
        <input class="fi" id="mCN" placeholder="Enter a name for this rich filter" autocomplete="off">
        <div class="ferr" id="mCNErr">Name is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="mCJF">Jira filter <span class="req">*</span></label>
        <select class="fi" id="mCJF">
          <option value="">Select\u2026</option>
          ${jfOpts}
        </select>
        <div class="ferr" id="mCJFErr">Please select a Jira filter.</div>
        <div class="fh">The Jira filter used as base for this rich filter.</div>
      </div>
      <div id="mCAlert"></div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mCCancel">Cancel</button>
      <button class="btn btn-p" id="mCOk">Create</button>
    </div>
  </div>`;
    document.body.appendChild(ov);
    ov.addEventListener("click", (e) => {
      if (e.target === ov) closeModals();
    });
    const nameEl = document.getElementById("mCN");
    nameEl.focus();
    document.getElementById("mCCancel").onclick = closeModals;
    document.getElementById("mCOk").onclick = async () => {
      const name = (nameEl.value || "").trim();
      const jfId = document.getElementById("mCJF").value;
      let ok = true;
      if (!name) {
        nameEl.classList.add("inv");
        document.getElementById("mCNErr").classList.add("show");
        ok = false;
      } else {
        nameEl.classList.remove("inv");
        document.getElementById("mCNErr").classList.remove("show");
      }
      if (!jfId) {
        document.getElementById("mCJF").classList.add("inv");
        document.getElementById("mCJFErr").classList.add("show");
        ok = false;
      } else {
        document.getElementById("mCJF").classList.remove("inv");
        document.getElementById("mCJFErr").classList.remove("show");
      }
      if (!ok) return;
      const btn = document.getElementById("mCOk");
      btn.disabled = true;
      btn.textContent = "Creating\u2026";
      const jiraFilter = S.jiraFilters.find((j) => j.id === jfId) || null;
      const newF = await (0, import_bridge.invoke)("createRichFilter", { name, jiraFilter }).catch(() => null);
      if (newF) {
        S.richFilters.push(newF);
        applySearch();
        closeModals();
        toast("ok", '"' + newF.name + '" created!');
        await openFilter(newF.id);
      } else {
        btn.disabled = false;
        btn.textContent = "Create";
        document.getElementById("mCAlert").innerHTML = '<div class="ia ia-err">Failed to create. Please try again.</div>';
      }
    };
    ["mCN", "mCJF"].forEach((id) => {
      var _a;
      (_a = document.getElementById(id)) == null ? void 0 : _a.addEventListener("input", () => {
        document.getElementById(id).classList.remove("inv");
        const err = document.getElementById(id + "Err");
        if (err) err.classList.remove("show");
      });
    });
  }
  function renderDetail() {
    const f = S.current;
    const createdDate = f.createdAt ? new Date(f.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "\u2014";
    setHTML(`<div class="det">
    <div class="bc">
      <a id="backLink">Rich filters</a>
      <span>\u203A</span>
      <span>${esc(f.name)}</span>
    </div>
    <div class="dh">
      <button class="star${f.starred ? " on" : ""}" id="detStar" style="font-size:20px">\u2605</button>
      <span class="dt">${esc(f.name)}</span>
      <button class="btn btn-d" id="btnMore" style="padding:5px 10px;font-size:18px;letter-spacing:2px">\xB7\xB7\xB7</button>
    </div>
    <div class="dm">Created ${createdDate}</div>
    <nav class="tn" id="tabNav">
      ${TABS.map((t) => `<div class="ti${S.activeTab === t.id ? " act" : ""}" data-tab="${t.id}"><span style="font-size:12px;opacity:.75">${t.ico}</span>${t.label}</div>`).join("")}
    </nav>
    <div class="tb2" id="tabBody">${renderTab()}</div>
  </div>`);
    bindDetailEvents();
  }
  function bindDetailEvents() {
    var _a, _b, _c;
    (_a = q("#backLink")) == null ? void 0 : _a.addEventListener("click", goHome);
    (_b = q("#detStar")) == null ? void 0 : _b.addEventListener("click", () => {
      S.current.starred = !S.current.starred;
      q("#detStar").classList.toggle("on", S.current.starred);
      (0, import_bridge.invoke)("updateRichFilter", { id: S.current.id, updates: { starred: S.current.starred } }).catch(() => {
      });
    });
    (_c = q("#btnMore")) == null ? void 0 : _c.addEventListener("click", (e) => showCtxMenu(S.current.id, e.currentTarget));
    qa(".ti").forEach((t) => t.addEventListener("click", () => {
      S.activeTab = t.dataset.tab;
      qa(".ti").forEach((x) => x.classList.toggle("act", x.dataset.tab === S.activeTab));
      document.getElementById("tabBody").innerHTML = renderTab();
      bindTabBody();
    }));
    bindTabBody();
  }
  function renderTab() {
    switch (S.activeTab) {
      case "details":
        return renderDetailsTab();
      case "static":
        return renderStaticTab();
      case "dynamic":
        return renderDynamicTab();
      case "smart":
        return renderSmartTab();
      case "views":
        return renderViewsTab();
      case "queues":
        return renderQueuesTab();
      case "custom-values":
        return renderCustomValuesTab();
      case "custom-ratios":
        return renderCustomRatiosTab();
      case "time-series":
        return renderTimeSeriesTab();
      case "misc":
        return renderMiscTab();
      default:
        return "";
    }
  }
  function renderDetailsTab() {
    const f = S.current;
    const jfOpts = S.jiraFilters.map(
      (jf) => `<option value="${esc(jf.id)}"${f.jiraFilter && f.jiraFilter.id === jf.id ? " selected" : ""}>${esc(jf.name)}</option>`
    ).join("");
    const jqlBlock = f.jiraFilter ? `
    <div class="jfd">
      <div class="jl">JQL:</div>
      <code>${esc(f.jiraFilter.jql || "")}</code>
    </div>
    <div style="margin-top:8px"><button class="btn-link">Open in issue navigator \u2197</button></div>` : "";
    return `
    <div id="detAlert"></div>

    <p style="font-size:13px;color:#42526e;margin-bottom:20px;line-height:1.6">
      The rich filter is the object that powers the rich filter gadgets.
    </p>

    <div class="fg" style="max-width:600px">
      <label class="fl" for="dN">Name <span class="req">*</span></label>
      <input class="fi" id="dN" value="${esc(f.name)}">
    </div>

    <div class="fg" style="max-width:600px">
      <label class="fl" for="dD">Description</label>
      <textarea class="fi" id="dD" rows="3">${esc(f.description || "")}</textarea>
    </div>

    <div class="fg" style="max-width:600px">
      <label class="fl">Administrators <span class="req">*</span></label>
      <div class="adp">
        <span class="av">DT</span>
        <span>${esc(f.admins && f.admins[0] || "Deepa Toravi")}</span>
        <span class="adp-x">\xD7</span>
        <span class="adp-arr">\u25BE</span>
      </div>
      <div class="fh">Users or groups who can edit this rich filter. Jira administrators can edit any rich filter.</div>
    </div>

    <div style="margin-bottom:20px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:8px;color:#172b4d">Base Jira filter</h3>
      <p style="font-size:13px;color:#42526e;margin-bottom:14px">The Jira filter is the base data source for everything else in the rich filter.</p>
      <div class="fg" style="max-width:600px">
        <label class="fl" for="dJF">Jira filter <span class="req">*</span></label>
        <select class="fi" id="dJF" style="max-width:600px">
          <option value="">Select\u2026</option>
          ${jfOpts}
        </select>
        ${jqlBlock}
      </div>
    </div>

    <div class="ta">
      <button class="btn btn-p" id="btnSaveDet">Save details</button>
    </div>`;
  }
  function renderStaticTab() {
    const items = S.current.staticFilters || [];
    return `
    <div class="st">
      <p class="st-d">Static filters are additional JQL queries which can be applied alongside the dynamic filters in the <strong>Rich Filter Controller</strong> gadget.</p>
      <button class="btn btn-p" id="btnAddSF">Create static filter</button>
    </div>
    ${items.length ? `<table class="stbl">
          <thead><tr><th></th><th>Name</th><th style="width:100px"></th></tr></thead>
          <tbody>${items.map((sf, i) => `
            <tr>
              <td style="width:28px"><span class="dh2">\u283F</span></td>
              <td style="font-weight:500">${esc(sf.name)}${sf.jql ? `<div style="font-family:monospace;font-size:11px;color:#6b778c;margin-top:2px">${esc(sf.jql)}</div>` : ""}</td>
              <td style="text-align:right">
                <button class="rib" data-action="editSF" data-i="${i}" title="Edit">\u270E</button>
                <button class="rib del" data-action="delSF" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es"><div class="es-i">\u{1F518}</div><p>No static filters defined.</p><button class="btn btn-p" data-action="addSF">Create static filter</button></div>`}`;
  }
  function renderDynamicTab() {
    const df = S.current.dynamicFilters || {};
    const added = Object.keys(df).filter((k) => df[k] !== false);
    const available = DYNAMIC_FIELDS.filter((n) => !added.includes(n));
    return `
    <p class="st-d" style="margin-bottom:20px">Dynamic filters allow filtering the issues by their field values.</p>
    ${added.length ? `<table class="stbl" style="margin-bottom:18px">
          <thead><tr><th></th><th>Field</th><th style="width:40px"></th></tr></thead>
          <tbody>${added.map((k) => `
            <tr>
              <td style="width:28px"><span class="dh2">\u283F</span></td>
              <td>${esc(k)}</td>
              <td><button class="rib del" data-action="delDF" data-k="${esc(k)}" title="Remove">\xD7</button></td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div style="color:#6b778c;font-size:13px;margin-bottom:16px;display:flex;align-items:center;gap:6px"><span style="font-size:16px">\u26A0</span>No dynamic filters defined.</div>`}
    <div class="fg" style="max-width:440px">
      <label class="fl" for="dfp">Pick a field\u2026</label>
      <select class="dfp" id="dfp">
        <option value="">Pick a field to add\u2026</option>
        ${available.map((n) => `<option value="${esc(n)}">${esc(n)}</option>`).join("")}
      </select>
    </div>
    <div class="ta">
      <button class="btn btn-p" id="btnSaveDF">Save dynamic filters</button>
    </div>`;
  }
  function renderSmartTab() {
    const items = S.current.smartFilters || [];
    return `
    <div class="st">
      <p class="st-d">Smart filters allow you to filter and tag issues with colors and labels using JQL queries.</p>
      <button class="btn btn-p" id="btnAddSmf">Create smart filter</button>
    </div>
    ${items.length ? `<table class="stbl">
          <thead><tr><th>Name</th><th>Clauses</th><th style="width:100px"></th></tr></thead>
          <tbody>${items.map((sf, i) => `
            <tr>
              <td style="font-weight:500">${esc(sf.name)}</td>
              <td><span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:3px;font-size:11px;font-weight:700;background:#dfe1e6;color:#42526e">${sf.clauses ? sf.clauses.length : 1}</span></td>
              <td style="text-align:right">
                <button class="rib" data-action="editSmf" data-i="${i}" title="Edit">\u270E</button>
                <button class="rib del" data-action="delSmf" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es"><div class="es-i">\u2728</div><p>No smart filters defined.</p><button class="btn btn-p" data-action="addSmf">Create smart filter</button></div>`}`;
  }
  function renderViewsTab() {
    const items = S.current.views || [];
    if (S.activeViewIdx != null && items[S.activeViewIdx]) {
      return renderViewDetail(S.activeViewIdx);
    }
    return `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px">
      <p class="st-d" style="max-width:680px">Views are collections of columns showing data of your choosing. Displayed by the <strong>Rich Filter Results</strong> gadgets.</p>
      <button class="btn btn-p" id="btnAddView">Create view</button>
    </div>
    ${items.length ? `<table class="stbl" style="margin-bottom:16px">
          <thead><tr><th>Name</th><th>Columns</th><th style="width:100px"></th></tr></thead>
          <tbody>${items.map((v, i) => `
            <tr style="cursor:pointer">
              <td style="font-weight:500" data-action="openView" data-i="${i}">${esc(v.name)}</td>
              <td style="color:#6b778c" data-action="openView" data-i="${i}">${v.columns ? v.columns.length : 0} column${v.columns && v.columns.length !== 1 ? "s" : ""}</td>
              <td style="text-align:right">
                <button class="rib" data-action="openView" data-i="${i}" title="Edit">&#9998;</button>
                <button class="rib del" data-action="delView" data-i="${i}" title="Delete">&times;</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : '<div style="padding:8px 0"></div>'}
    <div class="vab">
      <button class="btn-s" id="btnEmptyView">Create empty view</button>
      <button class="btn-s" id="btnExView">Create example view</button>
    </div>`;
  }
  function renderViewDetail(idx) {
    const v = S.current.views[idx];
    const cols = v.columns || [];
    const total = S.current.views.length;
    const smartNames = (S.current.smartFilters || []).map((sf) => sf.name);
    const colTab = S.viewColumnTab || "issue";
    const issueAvail = ISSUE_FIELDS.filter((f) => !cols.includes(f));
    const specialAvail = SPECIAL_COLUMNS.filter((f) => !cols.includes(f));
    const smartAvail = smartNames.filter((f) => !cols.includes(f));
    const pickItems = (list) => list.length ? list.map((f) => `<div class="cp-item" data-action="addCol" data-col="${esc(f)}">${esc(f)}</div>`).join("") : '<div style="padding:12px 16px;font-size:13px;color:#97a0af">All available columns are already added.</div>';
    const tog = (action, on, label, badge) => `
    <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px">
      <div style="width:36px;height:20px;border-radius:10px;background:${on ? "#0052cc" : "#dfe1e6"};position:relative;cursor:pointer;flex-shrink:0;transition:background .15s" data-action="${action}">
        <div style="position:absolute;top:2px;${on ? "right:2px" : "left:2px"};width:16px;height:16px;border-radius:50%;background:#fff;transition:all .15s;pointer-events:none"></div>
      </div>
      ${label}${badge ? ` <span style="background:#172b4d;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:3px;letter-spacing:.5px">${badge}</span>` : ""}
    </label>`;
    return `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0">
        <span id="vdNameDisplay" style="font-size:18px;font-weight:700;color:#172b4d;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(v.name)}</span>
        <button class="rib" data-action="editViewName" title="Rename">&#9998;</button>
        <button class="rib" data-action="viewOpts" title="Options" style="font-size:18px;letter-spacing:2px">&middot;&middot;&middot;</button>
      </div>
      <div style="display:flex;gap:3px;flex-shrink:0">
        <button class="btn-ic" data-action="prevView" title="Previous view"${idx === 0 ? " disabled" : ""}>&#8592;</button>
        <button class="btn-ic" data-action="prevView" title="Previous view"${idx === 0 ? " disabled" : ""}>&#8593;</button>
        <button class="btn-ic" data-action="nextView" title="Next view"${idx >= total - 1 ? " disabled" : ""}>&#8595;</button>
      </div>
    </div>
    <div style="margin-bottom:20px">
      <button class="btn-link" data-action="backToViews" style="font-size:12px;color:#6b778c;display:inline-flex;align-items:center;gap:4px">&larr; Back to views</button>
    </div>

    <p style="font-size:13px;color:#42526e;line-height:1.6;margin-bottom:20px;max-width:720px">
      In each view you can have a list of columns based on issue fields, special columns, static filters, smart filters, or custom values.
      You can also have a Gantt chart as the last column of the view.
      The views are displayed by <strong>Rich Filter Results</strong> gadgets.
    </p>

    <div style="display:flex;align-items:center;gap:32px;margin-bottom:20px;flex-wrap:wrap">
      ${tog("togGantt", v.showGantt, "Show Gantt chart", "ADVANCED")}
      ${tog("togTotals", v.showTotals, "Show totals row", "")}
      ${tog("togOneLine", v.oneLineRows, "One-line rows by default", "")}
    </div>

    <hr style="border:none;border-top:1px solid #f0f1f3;margin:0 0 16px">
    <div style="font-size:13px;font-weight:700;color:#172b4d;margin-bottom:10px">Columns</div>

    ${!cols.length ? `
    <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 14px;background:#fffae5;border:1px solid #ffe380;border-radius:4px;font-size:13px;color:#172b4d;margin-bottom:14px">
      <span style="flex-shrink:0;font-size:16px">&#9888;&#65039;</span>
      You need to select at least one column to display in this view. Otherwise, the view will not be displayed in <em>Rich Filter Results</em> gadgets.
    </div>` : ""}

    ${cols.length ? `
    <table class="stbl" style="margin-bottom:14px">
      <thead><tr><th style="width:28px"></th><th>Column</th><th style="width:100px">Width</th><th style="width:90px"></th></tr></thead>
      <tbody>${cols.map((col, ci) => `
        <tr>
          <td><span class="dh2">&#8942;</span></td>
          <td style="font-size:13px">${esc(col)}</td>
          <td><input type="number" class="fi" data-action="colWidth" data-ci="${ci}" value="${v.columnWidths && v.columnWidths[ci] ? v.columnWidths[ci] : ""}" placeholder="auto" style="padding:4px 7px;font-size:12px;width:80px"></td>
          <td style="text-align:right">
            <button class="rib" data-action="moveColUp" data-ci="${ci}" title="Move up"${ci === 0 ? ' disabled style="opacity:.35"' : ""}>&#8593;</button>
            <button class="rib" data-action="moveColDown" data-ci="${ci}" title="Move down"${ci >= cols.length - 1 ? ' disabled style="opacity:.35"' : ""}>&#8595;</button>
            <button class="rib del" data-action="removeCol" data-ci="${ci}" title="Remove">&times;</button>
          </td>
        </tr>`).join("")}
      </tbody>
    </table>` : ""}

    <!-- Column picker -->
    <div style="border:2px solid #4c9aff;border-radius:4px;overflow:hidden;max-width:640px">
      <div style="display:flex;border-bottom:1px solid #dfe1e6">
        <button class="cp-tab${colTab === "issue" ? " act" : ""}" data-action="vColTab" data-tab="issue">ISSUE FIELDS</button>
        <button class="cp-tab${colTab === "special" ? " act" : ""}" data-action="vColTab" data-tab="special">SPECIAL COLUMNS</button>
        <button class="cp-tab${colTab === "smart" ? " act" : ""}" data-action="vColTab" data-tab="smart">SMART FILTERS</button>
      </div>
      <div style="max-height:220px;overflow-y:auto">
        <div style="padding:6px 16px 4px;font-size:11px;font-weight:700;color:#6b778c;background:#fafbfc">
          ${colTab === "issue" ? "ISSUE FIELDS" : colTab === "special" ? "SPECIAL COLUMNS" : "SMART FILTERS"}
        </div>
        ${colTab === "issue" ? pickItems(issueAvail) : colTab === "special" ? pickItems(specialAvail) : pickItems(smartAvail)}
      </div>
    </div>`;
  }
  function renderMiscTab() {
    const misc = S.current.misc || {};
    return `
    <div class="fg" style="max-width:480px">
      <label class="fl" for="mTitle">Default gadget title</label>
      <input class="fi" id="mTitle" value="${esc(misc.defaultTitle || S.current.name)}">
      <div class="fh">Shown as the default title in gadget headers.</div>
    </div>
    <div class="fg" style="display:flex;align-items:center;gap:10px">
      <input type="checkbox" id="msBc" style="width:15px;height:15px;accent-color:#0052cc" ${misc.showBreadcrumb ? "checked" : ""}>
      <label for="msBc" style="font-size:14px;cursor:pointer">Show filter breadcrumb in gadgets</label>
    </div>
    <div class="ta">
      <button class="btn btn-p" id="btnSaveMisc">Save</button>
    </div>`;
  }
  function renderQueuesTab() {
    const items = S.current.queues || [];
    const moreDesc = `Queues are lists of issues based on configurable additional JQL queries.
    Each queue can have one or multiple views and its own sorting criteria.
    Queues are ideal for organising support requests (by support agent, service desk, request type, etc.)
    but also for managing lists of issues in general. The queues are displayed by <strong>Rich Filter Results</strong> gadgets.`;
    const emptyNotice = `There are no queues defined for this rich filter. Unless at least one queue is defined,
    <strong>Rich Filter Results</strong> gadgets using this rich filter will display all the issues
    returned by the rich filter and any additional filtering at dashboard level.`;
    return `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:4px">
      <p class="st-d" style="max-width:680px">Queues are lists of issues based on configurable additional JQL queries. Each queue can have one or multiple views and its own sorting criteria. <a class="btn-link" id="qShowMore">Show more</a></p>
      <button class="btn btn-p" id="btnAddQ" style="flex-shrink:0">Create queue</button>
    </div>
    <div id="qMoreDesc" style="display:none;color:#42526e;font-size:13px;line-height:1.7;margin-bottom:16px;max-width:680px">${moreDesc}</div>
    ${items.length ? `<table class="stbl" style="margin-top:12px">
          <thead><tr><th></th><th>Name</th><th>JQL filter</th><th style="width:80px">Static</th><th style="width:90px">Fixed order</th><th style="width:80px"></th></tr></thead>
          <tbody>${items.map((q2, i) => `
            <tr>
              <td style="width:28px"><span class="dh2">\u283F</span></td>
              <td style="font-weight:500">${esc(q2.name)}</td>
              <td style="font-family:monospace;font-size:12px;color:#6b778c;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(q2.jql || "\u2014")}</td>
              <td style="text-align:center">${q2.staticQueue ? '<span style="color:#006644;font-weight:700">Yes</span>' : '<span style="color:#97a0af">No</span>'}</td>
              <td style="text-align:center">${q2.fixedOrder ? '<span style="color:#006644;font-weight:700">Yes</span>' : '<span style="color:#97a0af">No</span>'}</td>
              <td style="text-align:right">
                <button class="rib" data-action="editQ" data-i="${i}" title="Edit">\u270E</button>
                <button class="rib del" data-action="delQ" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es" style="margin-top:12px">
          <div class="es-i">\u{1F4CB}</div>
          <p style="color:#172b4d;font-weight:600;font-size:14px;margin-bottom:10px">No queues defined</p>
          <p style="font-size:13px;color:#42526e;max-width:520px;line-height:1.6;margin:0 auto 16px">${emptyNotice}</p>
          <button class="btn btn-p" data-action="addQ">Create queue</button>
        </div>`}`;
  }
  function renderCustomValuesTab() {
    const items = S.current.customValues || [];
    return `
    <div class="st">
      <p class="st-d">Custom values allow you to assign a numeric value to issues based on JQL clauses. Useful for scoring, prioritisation and charts.</p>
      <button class="btn btn-p" id="btnAddCV">Create custom value</button>
    </div>
    ${items.length ? `<table class="stbl">
          <thead><tr><th></th><th>Name</th><th style="width:110px">Default value</th><th style="width:120px"></th></tr></thead>
          <tbody>${items.map((cv, i) => `
            <tr>
              <td style="width:28px"><span class="dh2">\u2838\u28FF</span></td>
              <td>
                <div style="font-weight:500">${esc(cv.name)}</div>
                <div style="font-size:11px;color:#6b778c;margin-top:2px">${cv.clauses ? cv.clauses.length : 0} clause${cv.clauses && cv.clauses.length !== 1 ? "s" : ""}</div>
              </td>
              <td style="font-size:13px;color:#6b778c">${cv.defaultValue != null ? cv.defaultValue : 0}</td>
              <td style="text-align:right">
                <button class="rib" data-action="editCV" data-i="${i}" title="Edit">\u270E</button>
                <button class="rib del" data-action="delCV" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es"><div class="es-i">\u{1F4CA}</div><p>No custom values defined yet.</p><button class="btn btn-p" data-action="addCV">Create custom value</button></div>`}`;
  }
  function renderCustomRatiosTab() {
    const cvItems = S.current.customValues || [];
    const items = S.current.customRatios || [];
    const cvOpts = cvItems.map((cv) => `<option value="${esc(cv.name)}">${esc(cv.name)}</option>`).join("");
    return `
    <div class="st">
      <p class="st-d">Custom ratios display the proportion of one custom value against another \u2014 for use in the <strong>Rich Filter Chart</strong> gadget.</p>
      <button class="btn btn-p" id="btnAddCR">Create custom ratio</button>
    </div>
    ${!cvItems.length ? `<div class="ia ia-err" style="max-width:600px;margin-bottom:16px;display:flex;align-items:flex-start;gap:8px"><span style="font-size:16px;flex-shrink:0">\u26A0\uFE0F</span><span>No custom values defined yet. <a class="btn-link" id="crGoCV">Create a custom value</a> to use it as numerator or denominator.</span></div>` : ""}
    ${items.length ? `<table class="stbl">
          <thead><tr><th>Name</th><th>Numerator</th><th>Denominator</th><th style="width:80px"></th></tr></thead>
          <tbody>${items.map((cr, i) => `
            <tr>
              <td style="font-weight:500">${esc(cr.name)}</td>
              <td style="font-size:13px;color:#6b778c">${esc(cr.numerator || "")}</td>
              <td style="font-size:13px;color:#6b778c">${esc(cr.denominator || "")}</td>
              <td style="text-align:right">
                <button class="rib del" data-action="delCR" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es"><div class="es-i">\u2297</div><p>No custom ratios defined yet.</p></div>`}`;
  }
  function renderTimeSeriesTab() {
    const items = S.current.timeSeries || [];
    return `
    <div class="st">
      <p class="st-d">Time series allow you to track how issue counts or numeric values change over time. Results are shown in the <strong>Rich Filter Chart</strong> gadget.</p>
      <button class="btn btn-p" id="btnAddTS">Create time series</button>
    </div>
    ${items.length ? `<table class="stbl">
          <thead><tr><th>Name</th><th>Field</th><th>Interval</th><th style="width:80px"></th></tr></thead>
          <tbody>${items.map((ts, i) => `
            <tr>
              <td style="font-weight:500">${esc(ts.name)}</td>
              <td style="font-size:13px;color:#6b778c">${esc(ts.field || "Issue count")}</td>
              <td style="font-size:13px;color:#6b778c">${esc(ts.interval || "Weekly")}</td>
              <td style="text-align:right">
                <button class="rib" data-action="editTS" data-i="${i}" title="Edit">\u270E</button>
                <button class="rib del" data-action="delTS" data-i="${i}" title="Delete">\xD7</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="es"><div class="es-i">\u{1F4C8}</div><p>No time series defined yet.</p><button class="btn btn-p" data-action="addTS">Create time series</button></div>`}`;
  }
  function bindTabBody() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const tabBody = document.getElementById("tabBody");
    if (tabBody) {
      tabBody.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;
        const i = btn.dataset.i != null ? parseInt(btn.dataset.i, 10) : void 0;
        const k = btn.dataset.k;
        if (action === "addSF") showSFModal();
        else if (action === "editSF") showSFModal(i);
        else if (action === "delSF") {
          S.current.staticFilters.splice(i, 1);
          doSave({ staticFilters: S.current.staticFilters });
          refreshTab();
        } else if (action === "delDF") {
          delete S.current.dynamicFilters[k];
          refreshTab();
        } else if (action === "addSmf") showSmfModal();
        else if (action === "editSmf") showSmfModal(i);
        else if (action === "delSmf") {
          S.current.smartFilters.splice(i, 1);
          doSave({ smartFilters: S.current.smartFilters });
          refreshTab();
        } else if (action === "delView") {
          S.current.views.splice(i, 1);
          if (S.activeViewIdx != null) S.activeViewIdx = null;
          doSave({ views: S.current.views });
          refreshTab();
        } else if (action === "openView") {
          S.activeViewIdx = i;
          S.viewColumnTab = "issue";
          refreshTab();
        } else if (action === "backToViews") {
          S.activeViewIdx = null;
          refreshTab();
        } else if (action === "prevView") {
          if (S.activeViewIdx > 0) {
            S.activeViewIdx--;
            refreshTab();
          }
        } else if (action === "nextView") {
          if (S.activeViewIdx < S.current.views.length - 1) {
            S.activeViewIdx++;
            refreshTab();
          }
        } else if (action === "togGantt") {
          S.current.views[S.activeViewIdx].showGantt = !S.current.views[S.activeViewIdx].showGantt;
          doSave({ views: S.current.views });
          refreshTab();
        } else if (action === "togTotals") {
          S.current.views[S.activeViewIdx].showTotals = !S.current.views[S.activeViewIdx].showTotals;
          doSave({ views: S.current.views });
          refreshTab();
        } else if (action === "togOneLine") {
          S.current.views[S.activeViewIdx].oneLineRows = !S.current.views[S.activeViewIdx].oneLineRows;
          doSave({ views: S.current.views });
          refreshTab();
        } else if (action === "vColTab") {
          S.viewColumnTab = btn.dataset.tab;
          refreshTab();
        } else if (action === "addCol") {
          const col = btn.dataset.col;
          if (col) {
            S.current.views[S.activeViewIdx].columns = S.current.views[S.activeViewIdx].columns || [];
            S.current.views[S.activeViewIdx].columns.push(col);
            doSave({ views: S.current.views });
            refreshTab();
          }
        } else if (action === "removeCol") {
          const ci = parseInt(btn.dataset.ci, 10);
          S.current.views[S.activeViewIdx].columns.splice(ci, 1);
          if (S.current.views[S.activeViewIdx].columnWidths) S.current.views[S.activeViewIdx].columnWidths.splice(ci, 1);
          doSave({ views: S.current.views });
          refreshTab();
        } else if (action === "moveColUp") {
          const ci = parseInt(btn.dataset.ci, 10);
          if (ci > 0) {
            const c = S.current.views[S.activeViewIdx].columns;
            [c[ci - 1], c[ci]] = [c[ci], c[ci - 1]];
            doSave({ views: S.current.views });
            refreshTab();
          }
        } else if (action === "moveColDown") {
          const ci = parseInt(btn.dataset.ci, 10);
          const c = S.current.views[S.activeViewIdx].columns;
          if (ci < c.length - 1) {
            [c[ci], c[ci + 1]] = [c[ci + 1], c[ci]];
            doSave({ views: S.current.views });
            refreshTab();
          }
        } else if (action === "editViewName") {
          const display = document.getElementById("vdNameDisplay");
          if (!display) return;
          const cur = S.current.views[S.activeViewIdx].name;
          const inp = document.createElement("input");
          inp.className = "fi";
          inp.value = cur;
          inp.style.cssText = "width:260px;padding:5px 9px;font-size:16px;font-weight:700";
          display.replaceWith(inp);
          inp.focus();
          inp.select();
          const commit = () => {
            const n = inp.value.trim() || cur;
            S.current.views[S.activeViewIdx].name = n;
            doSave({ views: S.current.views });
            refreshTab();
          };
          inp.addEventListener("blur", commit);
          inp.addEventListener("keydown", (e2) => {
            if (e2.key === "Enter") inp.blur();
            if (e2.key === "Escape") {
              inp.value = cur;
              inp.blur();
            }
          });
        } else if (action === "addQ") showQueueModal();
        else if (action === "editQ") showQueueModal(i);
        else if (action === "delQ") {
          S.current.queues.splice(i, 1);
          doSave({ queues: S.current.queues });
          refreshTab();
        } else if (action === "addCV") showCVModal();
        else if (action === "editCV") showCVModal(i);
        else if (action === "delCV") {
          S.current.customValues.splice(i, 1);
          doSave({ customValues: S.current.customValues });
          refreshTab();
        } else if (action === "delCR") {
          S.current.customRatios.splice(i, 1);
          doSave({ customRatios: S.current.customRatios });
          refreshTab();
        } else if (action === "addTS") showTSModal();
        else if (action === "editTS") showTSModal(i);
        else if (action === "delTS") {
          S.current.timeSeries.splice(i, 1);
          doSave({ timeSeries: S.current.timeSeries });
          refreshTab();
        }
      });
    }
    (_a = q("#btnSaveDet")) == null ? void 0 : _a.addEventListener("click", async () => {
      var _a2, _b2, _c2;
      const name = (((_a2 = q("#dN")) == null ? void 0 : _a2.value) || "").trim();
      const desc = (((_b2 = q("#dD")) == null ? void 0 : _b2.value) || "").trim();
      const jfId = (_c2 = q("#dJF")) == null ? void 0 : _c2.value;
      if (!name) {
        toast("err", "Name is required.");
        return;
      }
      const btn = q("#btnSaveDet");
      btn.disabled = true;
      btn.textContent = "Saving\u2026";
      const jiraFilter = jfId ? S.jiraFilters.find((j) => j.id === jfId) || S.current.jiraFilter : null;
      const ok = await doSave({ name, description: desc, jiraFilter });
      btn.disabled = false;
      btn.textContent = "Save details";
      if (ok && jiraFilter) {
        refreshTab();
      }
      const dt = q(".dt");
      if (dt) dt.textContent = name;
    });
    (_b = q("#dfp")) == null ? void 0 : _b.addEventListener("change", (e) => {
      const val = e.target.value;
      if (!val) return;
      e.target.value = "";
      S.current.dynamicFilters = S.current.dynamicFilters || {};
      S.current.dynamicFilters[val] = true;
      refreshTab();
    });
    (_c = q("#btnSaveDF")) == null ? void 0 : _c.addEventListener("click", async () => {
      const btn = q("#btnSaveDF");
      btn.disabled = true;
      btn.textContent = "Saving\u2026";
      await doSave({ dynamicFilters: S.current.dynamicFilters || {} });
      btn.disabled = false;
      btn.textContent = "Save dynamic filters";
    });
    (_d = q("#btnAddSF")) == null ? void 0 : _d.addEventListener("click", () => showSFModal());
    (_e = q("#btnAddSmf")) == null ? void 0 : _e.addEventListener("click", () => showSmfModal());
    (_f = q("#btnAddView")) == null ? void 0 : _f.addEventListener("click", () => showViewModal());
    (_g = q("#btnEmptyView")) == null ? void 0 : _g.addEventListener("click", () => showViewModal());
    (_h = q("#btnExView")) == null ? void 0 : _h.addEventListener("click", () => {
      S.current.views = S.current.views || [];
      const idx = S.current.views.length;
      S.current.views.push({ name: "Example view", columns: ["Issue key", "Summary", "Status", "Priority", "Assignee"], showTotals: false, oneLineRows: false, showGantt: false });
      doSave({ views: S.current.views });
      S.activeViewIdx = idx;
      S.viewColumnTab = "issue";
      refreshTab();
    });
    qa('[data-action="colWidth"]').forEach((inp) => {
      inp.addEventListener("change", () => {
        if (S.activeViewIdx == null) return;
        const ci = parseInt(inp.dataset.ci, 10);
        S.current.views[S.activeViewIdx].columnWidths = S.current.views[S.activeViewIdx].columnWidths || [];
        S.current.views[S.activeViewIdx].columnWidths[ci] = parseInt(inp.value, 10) || null;
        doSave({ views: S.current.views });
      });
    });
    (_i = q("#btnAddQ")) == null ? void 0 : _i.addEventListener("click", () => showQueueModal());
    (_j = q("#qShowMore")) == null ? void 0 : _j.addEventListener("click", () => {
      const el = document.getElementById("qMoreDesc");
      if (el) el.style.display = el.style.display === "none" ? "block" : "none";
    });
    (_k = q("#btnAddCV")) == null ? void 0 : _k.addEventListener("click", () => showCVModal());
    (_l = q("#btnAddCR")) == null ? void 0 : _l.addEventListener("click", () => showCRModal());
    (_m = q("#crGoCV")) == null ? void 0 : _m.addEventListener("click", () => {
      S.activeTab = "custom-values";
      qa(".ti").forEach((x) => x.classList.toggle("act", x.dataset.tab === "custom-values"));
      refreshTab();
    });
    (_n = q("#btnAddTS")) == null ? void 0 : _n.addEventListener("click", () => showTSModal());
    (_o = q("#btnSaveMisc")) == null ? void 0 : _o.addEventListener("click", async () => {
      var _a2, _b2;
      S.current.misc = S.current.misc || {};
      S.current.misc.defaultTitle = ((_a2 = q("#mTitle")) == null ? void 0 : _a2.value.trim()) || "";
      S.current.misc.showBreadcrumb = !!((_b2 = q("#msBc")) == null ? void 0 : _b2.checked);
      await doSave({ misc: S.current.misc });
    });
  }
  function closeModals() {
    document.querySelectorAll(".ov").forEach((o) => o.remove());
  }
  function mkModal(html) {
    closeModals();
    const ov = document.createElement("div");
    ov.className = "ov";
    ov.innerHTML = `<div class="mo">${html}</div>`;
    document.body.appendChild(ov);
    ov.addEventListener("click", (e) => {
      if (e.target === ov) closeModals();
    });
    return ov;
  }
  function showQueueModal(idx) {
    const editing = idx != null;
    const q2 = editing ? JSON.parse(JSON.stringify(S.current.queues[idx])) : { name: "", jql: "", views: "all", staticQueue: false, fixedOrder: false };
    const viewItems = S.current.views || [];
    const viewCheckboxes = viewItems.map((v, vi) => {
      const checked = !editing || q2.shownViews == null || q2.shownViews.includes(vi);
      return `<label style="display:flex;align-items:center;gap:8px;font-size:13px;margin-top:6px;cursor:pointer">
      <input type="checkbox" class="qv-cb" data-vi="${vi}" ${checked ? "checked" : ""} style="width:14px;height:14px;accent-color:#0052cc">
      <span>${esc(v.name)}</span>
    </label>`;
    }).join("");
    mkModal(`
    <div class="mo-hd">
      <h2>${editing ? "Edit queue" : "Create a queue"}</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="qName">Name <span class="req">*</span></label>
        <input class="fi" id="qName" value="${esc(q2.name)}" autocomplete="off" placeholder="Queue name\u2026">
        <div class="ferr" id="qNameErr">Name is required.</div>
      </div>

      <div class="fg">
        <label class="fl" for="qJql">JQL</label>
        <textarea class="fi" id="qJql" rows="3" style="font-family:monospace;font-size:13px" placeholder="Type JQL\u2026">${esc(q2.jql || "")}</textarea>
        <div class="fh">Additional JQL query for the queue. Optionally use an ORDER BY clause to set the default order of the issues in this queue. Remember, the issues in the queue are already filtered by the base Jira filter.</div>
      </div>

      <div class="fg">
        <div class="fl" style="margin-bottom:8px">Views</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer;margin-bottom:6px">
          <input type="radio" id="qVAll" name="qViews" value="all" ${q2.views !== "custom" ? "checked" : ""} style="accent-color:#0052cc">
          Show all views
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer">
          <input type="radio" id="qVCust" name="qViews" value="custom" ${q2.views === "custom" ? "checked" : ""} style="accent-color:#0052cc">
          Customize shown views
        </label>
        <div id="qViewSel" style="padding-left:24px;margin-top:6px;display:${q2.views === "custom" ? "block" : "none"}">
          ${viewItems.length ? viewCheckboxes : '<div style="font-size:12px;color:#97a0af">No views defined yet.</div>'}
        </div>
      </div>

      <div class="fg">
        <div class="fl" style="margin-bottom:8px">Queue behaviour options</div>
        <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer;margin-bottom:12px">
          <input type="checkbox" id="qStatic" ${q2.staticQueue ? "checked" : ""} style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
          <div>
            <div style="font-weight:500">Static queue</div>
            <div style="font-size:12px;color:#6b778c;margin-top:3px;line-height:1.5">The issues displayed by static queues cannot be filtered out by quick filters in <em>Rich Filter Controller</em> gadgets. Use this option if the issues displayed by this queue should always be visible.</div>
          </div>
        </label>
        <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer">
          <input type="checkbox" id="qFixed" ${q2.fixedOrder ? "checked" : ""} style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
          <div>
            <div style="font-weight:500">Fixed-order queue</div>
            <div style="font-size:12px;color:#6b778c;margin-top:3px;line-height:1.5">The order in which the issues are displayed by fixed-order queues in <em>Rich Filter Results</em> gadgets cannot be altered by clicking on column headers. Use this option if this queue should always display the issues in a specific and immutable order, as configured in the queue.</div>
          </div>
        </label>
      </div>
    </div>
    <div class="mo-ft" style="justify-content:space-between">
      ${!editing ? `<label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="qAnother" style="width:14px;height:14px;accent-color:#0052cc">
        Create another
      </label>` : "<span></span>"}
      <div style="display:flex;gap:10px">
        <button class="btn btn-p" id="qOk">${editing ? "Save" : "Create"}</button>
        <button class="btn btn-d" id="qCan">Cancel</button>
      </div>
    </div>`);
    document.getElementById("qName").focus();
    document.querySelectorAll('input[name="qViews"]').forEach((r) => r.addEventListener("change", () => {
      const sel = document.getElementById("qViewSel");
      if (sel) sel.style.display = r.value === "custom" && r.checked ? "block" : "none";
    }));
    document.getElementById("qCan").onclick = closeModals;
    document.getElementById("qOk").onclick = () => {
      var _a, _b;
      const name = (document.getElementById("qName").value || "").trim();
      if (!name) {
        document.getElementById("qName").classList.add("inv");
        document.getElementById("qNameErr").classList.add("show");
        return;
      }
      const jql = (document.getElementById("qJql").value || "").trim();
      const viewsMode = ((_a = document.querySelector('input[name="qViews"]:checked')) == null ? void 0 : _a.value) || "all";
      const staticQueue = !!document.getElementById("qStatic").checked;
      const fixedOrder = !!document.getElementById("qFixed").checked;
      let shownViews = null;
      if (viewsMode === "custom") {
        shownViews = [];
        document.querySelectorAll(".qv-cb").forEach((cb) => {
          if (cb.checked) shownViews.push(parseInt(cb.dataset.vi, 10));
        });
      }
      S.current.queues = S.current.queues || [];
      const entry = { name, jql, views: viewsMode, shownViews, staticQueue, fixedOrder };
      if (editing) S.current.queues[idx] = entry;
      else S.current.queues.push(entry);
      doSave({ queues: S.current.queues });
      const another = !editing && ((_b = document.getElementById("qAnother")) == null ? void 0 : _b.checked);
      refreshTab();
      if (another) showQueueModal();
      else closeModals();
    };
  }
  function showCVModal(idx) {
    const editing = idx != null;
    const cv = editing ? JSON.parse(JSON.stringify(S.current.customValues[idx])) : { name: "", defaultValue: 0, clauses: [] };
    cv.clauses = cv.clauses || [];
    function clauseRows() {
      if (!cv.clauses.length) return '<div style="color:#6b778c;font-size:13px;padding:8px 0">No clauses yet. Add one below.</div>';
      return cv.clauses.map((c, i) => `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px" data-ci="${i}">
        <span style="min-width:18px;font-size:12px;color:#97a0af;text-align:right">${i + 1}.</span>
        <input class="fi" data-clause-jql="${i}" value="${esc(c.jql || "")}" placeholder="JQL clause\u2026" style="flex:1;padding:7px 9px">
        <input class="fi" data-clause-val="${i}" type="number" value="${c.value != null ? c.value : 1}" style="width:70px;padding:7px 9px" title="Value">
        <button class="rib del" data-clause-del="${i}" title="Remove clause" style="flex-shrink:0">\xD7</button>
      </div>`).join("");
    }
    mkModal(`
    <div class="mo-hd">
      <h2>${editing ? "Edit custom value" : "Create a custom value"}</h2>
      <p>Assign a numeric value to issues matching a JQL clause.</p>
    </div>
    <div class="mo-bd">
      <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:18px">
        <div style="flex:1">
          <label class="fl" for="cvName">Name <span class="req">*</span></label>
          <input class="fi" id="cvName" value="${esc(cv.name)}" placeholder="e.g. Story Points by Priority" autocomplete="off">
          <div class="ferr" id="cvNameErr">Name is required.</div>
        </div>
        <div style="width:110px">
          <label class="fl" for="cvDef">Default value</label>
          <input class="fi" id="cvDef" type="number" value="${cv.defaultValue != null ? cv.defaultValue : 0}" title="Value assigned when no clause matches">
          <div class="fh">When no clause matches</div>
        </div>
      </div>

      <div style="font-size:12px;font-weight:600;color:#172b4d;margin-bottom:8px">Clauses</div>
      <div id="cvClauses">${clauseRows()}</div>

      <button class="btn btn-d" id="cvAddClause" style="margin-top:6px;font-size:13px">+ Add clause</button>
      <div class="fh" style="margin-top:6px">Clauses are evaluated top to bottom; the first match wins.</div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="cvCan">Cancel</button>
      <button class="btn btn-p" id="cvOk">${editing ? "Save" : "Create"}</button>
    </div>`);
    document.getElementById("cvName").focus();
    function syncClausesFromDOM() {
      const mo = document.querySelector(".mo-bd");
      cv.clauses.forEach((c, i) => {
        const jqlEl = mo.querySelector(`[data-clause-jql="${i}"]`);
        const valEl = mo.querySelector(`[data-clause-val="${i}"]`);
        if (jqlEl) c.jql = jqlEl.value.trim();
        if (valEl) c.value = parseFloat(valEl.value) || 0;
      });
    }
    function rerender() {
      document.getElementById("cvClauses").innerHTML = clauseRows();
      bindClauseEvents();
    }
    function bindClauseEvents() {
      const wrap = document.getElementById("cvClauses");
      wrap.querySelectorAll("[data-clause-del]").forEach((btn) => {
        btn.addEventListener("click", () => {
          syncClausesFromDOM();
          const ci = parseInt(btn.dataset.clauseDel, 10);
          cv.clauses.splice(ci, 1);
          rerender();
        });
      });
    }
    bindClauseEvents();
    document.getElementById("cvAddClause").addEventListener("click", () => {
      syncClausesFromDOM();
      cv.clauses.push({ jql: "", value: 1 });
      rerender();
    });
    document.getElementById("cvCan").onclick = closeModals;
    document.getElementById("cvOk").onclick = () => {
      syncClausesFromDOM();
      const name = (document.getElementById("cvName").value || "").trim();
      const defVal = parseFloat(document.getElementById("cvDef").value) || 0;
      if (!name) {
        document.getElementById("cvName").classList.add("inv");
        document.getElementById("cvNameErr").classList.add("show");
        return;
      }
      S.current.customValues = S.current.customValues || [];
      const entry = { name, defaultValue: defVal, clauses: cv.clauses.filter((c) => c.jql) };
      if (editing) S.current.customValues[idx] = entry;
      else S.current.customValues.push(entry);
      doSave({ customValues: S.current.customValues });
      refreshTab();
      closeModals();
    };
  }
  var TS_FIELDS = ["Issue count", "Story points", "Custom value\u2026", "Assignee", "Status", "Priority", "Issue type", "Component", "Sprint", "Fix version"];
  var TS_INTERVALS = ["Daily", "Weekly", "Bi-weekly", "Monthly", "Quarterly"];
  var TS_MODES = ["Snapshot", "Cumulative"];
  function showTSModal(idx) {
    const editing = idx != null;
    const ts = editing ? JSON.parse(JSON.stringify(S.current.timeSeries[idx])) : { name: "", field: "Issue count", interval: "Weekly", mode: "Snapshot", jql: "" };
    const fieldOpts = TS_FIELDS.map((f) => `<option value="${esc(f)}"${ts.field === f ? " selected" : ""}>${esc(f)}</option>`).join("");
    const intervalOpts = TS_INTERVALS.map((i) => `<option value="${esc(i)}"${ts.interval === i ? " selected" : ""}>${esc(i)}</option>`).join("");
    const modeOpts = TS_MODES.map((m) => `<option value="${esc(m)}"${ts.mode === m ? " selected" : ""}>${esc(m)}</option>`).join("");
    mkModal(`
    <div class="mo-hd">
      <h2>${editing ? "Edit time series" : "Create a time series"}</h2>
      <p>Track how a metric changes over time across the issues in this rich filter.</p>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="tsName">Name <span class="req">*</span></label>
        <input class="fi" id="tsName" value="${esc(ts.name)}" placeholder="e.g. Weekly issue count" autocomplete="off">
        <div class="ferr" id="tsNameErr">Name is required.</div>
      </div>
      <div style="display:flex;gap:14px;margin-bottom:18px">
        <div style="flex:1">
          <label class="fl" for="tsField">Field</label>
          <select class="fi" id="tsField">${fieldOpts}</select>
          <div class="fh">The metric to measure.</div>
        </div>
        <div style="flex:1">
          <label class="fl" for="tsInterval">Interval</label>
          <select class="fi" id="tsInterval">${intervalOpts}</select>
          <div class="fh">How often to sample.</div>
        </div>
        <div style="flex:1">
          <label class="fl" for="tsMode">Mode</label>
          <select class="fi" id="tsMode">${modeOpts}</select>
          <div class="fh">Snapshot or cumulative.</div>
        </div>
      </div>
      <div class="fg">
        <label class="fl" for="tsJql">Additional JQL filter <span style="font-weight:400;color:#6b778c">(optional)</span></label>
        <input class="fi" id="tsJql" value="${esc(ts.jql || "")}" placeholder="e.g. statusCategory = Done" style="font-family:monospace;font-size:13px" autocomplete="off">
        <div class="fh">Further restrict which issues are counted. Leave empty to use all issues from the base filter.</div>
      </div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="tsCan">Cancel</button>
      <button class="btn btn-p" id="tsOk">${editing ? "Save" : "Create"}</button>
    </div>`);
    document.getElementById("tsName").focus();
    document.getElementById("tsCan").onclick = closeModals;
    document.getElementById("tsOk").onclick = () => {
      const name = (document.getElementById("tsName").value || "").trim();
      const field = document.getElementById("tsField").value;
      const interval = document.getElementById("tsInterval").value;
      const mode = document.getElementById("tsMode").value;
      const jql = (document.getElementById("tsJql").value || "").trim();
      if (!name) {
        document.getElementById("tsName").classList.add("inv");
        document.getElementById("tsNameErr").classList.add("show");
        return;
      }
      S.current.timeSeries = S.current.timeSeries || [];
      const entry = { name, field, interval, mode, jql };
      if (editing) S.current.timeSeries[idx] = entry;
      else S.current.timeSeries.push(entry);
      doSave({ timeSeries: S.current.timeSeries });
      refreshTab();
      closeModals();
    };
  }
  function showCRModal() {
    const cvItems = S.current.customValues || [];
    const dlOpts = cvItems.map((cv) => `<option value="${esc(cv.name)}">`).join("");
    const hint = cvItems.length ? `<div class="fh">Type or select from your custom values.</div>` : `<div class="fh" style="color:#de350b">No custom values yet \u2014 you can still type a name and create one later.</div>`;
    mkModal(`
    <div class="mo-hd">
      <h2>Create a custom ratio</h2>
      <p>A ratio shows one numeric value divided by another, as a percentage.</p>
    </div>
    <div class="mo-bd">
      <datalist id="crDL">${dlOpts}</datalist>
      <div class="fg">
        <label class="fl" for="crName">Name <span class="req">*</span></label>
        <input class="fi" id="crName" autocomplete="off" placeholder="e.g. Done ratio">
        <div class="ferr" id="crNameErr">Name is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="crNum">Numerator <span class="req">*</span></label>
        <input class="fi" id="crNum" list="crDL" autocomplete="off" placeholder="Custom value name\u2026">
        ${hint}
        <div class="ferr" id="crNumErr">Numerator is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="crDen">Denominator <span class="req">*</span></label>
        <input class="fi" id="crDen" list="crDL" autocomplete="off" placeholder="Custom value name\u2026">
        ${hint}
        <div class="ferr" id="crDenErr">Denominator is required.</div>
      </div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="crCan">Cancel</button>
      <button class="btn btn-p" id="crOk">Create</button>
    </div>`);
    document.getElementById("crName").focus();
    document.getElementById("crCan").onclick = closeModals;
    document.getElementById("crOk").onclick = () => {
      const name = (document.getElementById("crName").value || "").trim();
      const num = (document.getElementById("crNum").value || "").trim();
      const den = (document.getElementById("crDen").value || "").trim();
      let ok = true;
      if (!name) {
        document.getElementById("crName").classList.add("inv");
        document.getElementById("crNameErr").classList.add("show");
        ok = false;
      }
      if (!num) {
        document.getElementById("crNum").classList.add("inv");
        document.getElementById("crNumErr").classList.add("show");
        ok = false;
      }
      if (!den) {
        document.getElementById("crDen").classList.add("inv");
        document.getElementById("crDenErr").classList.add("show");
        ok = false;
      }
      if (!ok) return;
      S.current.customRatios = S.current.customRatios || [];
      S.current.customRatios.push({ name, numerator: num, denominator: den });
      doSave({ customRatios: S.current.customRatios });
      refreshTab();
      closeModals();
    };
  }
  function showSFModal(idx) {
    const editing = idx != null;
    const sf = editing ? S.current.staticFilters[idx] : { name: "", jql: "" };
    mkModal(`
    <div class="mo-hd"><h2>${editing ? "Edit static filter" : "Create a static filter"}</h2></div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mSN">Name <span class="req">*</span></label>
        <input class="fi" id="mSN" value="${esc(sf.name)}" placeholder="e.g. High Priority" autocomplete="off">
        <div class="ferr" id="mSNErr">Name is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="mSJ">JQL</label>
        <textarea class="fi" id="mSJ" rows="3" placeholder="e.g. priority in (Highest, High) AND statusCategory != Done" style="font-family:monospace;font-size:13px">${esc(sf.jql || "")}</textarea>
        <div class="fh">Leave empty to show all issues.</div>
      </div>
      ${!editing ? `<label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="mSA" style="width:14px;height:14px;accent-color:#0052cc">
        Create another
      </label>` : ""}
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mSCan">Cancel</button>
      <button class="btn btn-p" id="mSOk">${editing ? "Save" : "Create"}</button>
    </div>`);
    document.getElementById("mSN").focus();
    document.getElementById("mSCan").onclick = closeModals;
    document.getElementById("mSOk").onclick = () => {
      var _a;
      const name = (document.getElementById("mSN").value || "").trim();
      const jql = (document.getElementById("mSJ").value || "").trim();
      if (!name) {
        document.getElementById("mSN").classList.add("inv");
        document.getElementById("mSNErr").classList.add("show");
        return;
      }
      S.current.staticFilters = S.current.staticFilters || [];
      if (editing) S.current.staticFilters[idx] = { name, jql };
      else S.current.staticFilters.push({ name, jql });
      doSave({ staticFilters: S.current.staticFilters });
      const another = !editing && ((_a = document.getElementById("mSA")) == null ? void 0 : _a.checked);
      refreshTab();
      if (another) showSFModal();
      else closeModals();
    };
  }
  function showSmfModal(idx) {
    const editing = idx != null;
    const sf = editing ? S.current.smartFilters[idx] : { name: "", jql: "", andOperator: false };
    mkModal(`
    <div class="mo-hd">
      <h2>${editing ? "Edit smart filter" : "Create a smart filter"}</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mSmN">Name <span class="req">*</span></label>
        <input class="fi" id="mSmN" value="${esc(sf.name)}" autocomplete="off">
        <div class="ferr" id="mSmNErr">Name is required.</div>
      </div>
      <div style="margin-top:4px">
        <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer">
          <input type="checkbox" id="mSmAnd" ${sf.andOperator ? "checked" : ""} style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
          <div>
            <div style="font-weight:500">Enable AND operator</div>
            <div style="font-size:12px;color:#6b778c;margin-top:3px;line-height:1.4">If enabled, the smart filter will allow the AND operator when used for filtering in the controller.</div>
          </div>
        </label>
      </div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mSmCan">Cancel</button>
      <button class="btn btn-p" id="mSmOk">${editing ? "Save" : "Create"}</button>
    </div>`);
    document.getElementById("mSmN").focus();
    document.getElementById("mSmCan").onclick = closeModals;
    document.getElementById("mSmOk").onclick = () => {
      const name = (document.getElementById("mSmN").value || "").trim();
      const andOp = !!document.getElementById("mSmAnd").checked;
      if (!name) {
        document.getElementById("mSmN").classList.add("inv");
        document.getElementById("mSmNErr").classList.add("show");
        return;
      }
      S.current.smartFilters = S.current.smartFilters || [];
      const entry = { name, andOperator: andOp, clauses: [] };
      if (editing) Object.assign(S.current.smartFilters[idx], entry);
      else S.current.smartFilters.push(entry);
      doSave({ smartFilters: S.current.smartFilters });
      refreshTab();
      closeModals();
    };
  }
  function showViewModal() {
    mkModal(`
    <div class="mo-hd">
      <h2>Create a view</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mVN">Name <span class="req">*</span></label>
        <input class="fi" id="mVN" autocomplete="off">
        <div class="ferr" id="mVNErr">Name is required.</div>
      </div>
      <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer;margin-bottom:14px">
        <input type="checkbox" id="mVT" style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
        <div>
          <div style="font-weight:500">Show totals row</div>
          <div style="font-size:12px;color:#6b778c;margin-top:3px">The view will have an extra row at the bottom showing totals.</div>
        </div>
      </label>
      <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="mVO" style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
        <div>
          <div style="font-weight:500">One-line rows by default</div>
          <div style="font-size:12px;color:#6b778c;margin-top:3px">Display with one line per row by default in <em>Rich Filter Results</em> gadgets.</div>
        </div>
      </label>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mVCan">Cancel</button>
      <button class="btn btn-p" id="mVOk">Create</button>
    </div>`);
    document.getElementById("mVN").focus();
    document.getElementById("mVCan").onclick = closeModals;
    document.getElementById("mVOk").onclick = () => {
      const name = (document.getElementById("mVN").value || "").trim();
      if (!name) {
        document.getElementById("mVN").classList.add("inv");
        document.getElementById("mVNErr").classList.add("show");
        return;
      }
      S.current.views = S.current.views || [];
      const idx = S.current.views.length;
      S.current.views.push({ name, showTotals: !!document.getElementById("mVT").checked, oneLineRows: !!document.getElementById("mVO").checked, showGantt: false, columns: [] });
      doSave({ views: S.current.views });
      S.activeViewIdx = idx;
      S.viewColumnTab = "issue";
      closeModals();
      refreshTab();
    };
  }
  window.PAGE = {
    addSF() {
      showSFModal();
    },
    editSF(i) {
      showSFModal(i);
    },
    delSF(i) {
      S.current.staticFilters.splice(i, 1);
      doSave({ staticFilters: S.current.staticFilters });
      refreshTab();
    },
    addSmf() {
      showSmfModal();
    },
    editSmf(i) {
      showSmfModal(i);
    },
    delSmf(i) {
      S.current.smartFilters.splice(i, 1);
      doSave({ smartFilters: S.current.smartFilters });
      refreshTab();
    },
    delDF(k) {
      delete S.current.dynamicFilters[k];
      refreshTab();
    },
    delView(i) {
      S.current.views.splice(i, 1);
      doSave({ views: S.current.views });
      refreshTab();
    }
  };
  function refreshTab() {
    const tb = document.getElementById("tabBody");
    if (tb) {
      tb.innerHTML = renderTab();
      bindTabBody();
    }
  }
  async function doSave(updates) {
    try {
      const saved = await (0, import_bridge.invoke)("updateRichFilter", { id: S.current.id, updates });
      Object.assign(S.current, updates);
      const idx = S.richFilters.findIndex((f) => f.id === S.current.id);
      if (idx !== -1) Object.assign(S.richFilters[idx], updates);
      S.filtered = [...S.richFilters];
      toast("ok", "Saved!");
      return true;
    } catch {
      toast("err", "Save failed. Please try again.");
      return false;
    }
  }
  async function openFilter(id) {
    const f = await (0, import_bridge.invoke)("getRichFilter", { id }).catch(() => null);
    if (!f) {
      toast("err", "Failed to load filter.");
      return;
    }
    S.current = JSON.parse(JSON.stringify(f));
    S.current.staticFilters = S.current.staticFilters || [];
    S.current.smartFilters = S.current.smartFilters || [];
    S.current.dynamicFilters = S.current.dynamicFilters || {};
    S.current.views = S.current.views || [];
    S.current.queues = S.current.queues || [];
    S.current.customValues = S.current.customValues || [];
    S.current.customRatios = S.current.customRatios || [];
    S.current.timeSeries = S.current.timeSeries || [];
    S.activeTab = "details";
    S.activeViewIdx = null;
    S.viewColumnTab = "issue";
    S.view = "detail";
    renderDetail();
  }
  function goHome() {
    S.view = "home";
    S.current = null;
    S.activeTab = "details";
    S.activeViewIdx = null;
    S.viewColumnTab = "issue";
    applySearch();
    renderHome();
  }
  async function loadAll() {
    const [filters, jiraFilters] = await Promise.all([
      (0, import_bridge.invoke)("listRichFilters").catch(() => []),
      (0, import_bridge.invoke)("getJiraFilters").catch(() => [])
    ]);
    S.richFilters = filters || [];
    S.jiraFilters = jiraFilters || [];
    applySearch();
  }
  async function init() {
    setHTML('<div class="spin-wrap"><div class="spin"></div><span>Loading Rich Filters\u2026</span></div>');
    await loadAll();
    renderHome();
  }
  window.__rfGo = async function(route, filterId) {
    if (route === "edit" && filterId) {
      await openFilter(filterId);
    } else if (route === "create") {
      if (S.view !== "home") {
        goHome();
      }
      setTimeout(() => showCreateModal(), 50);
    } else {
      if (S.view !== "home") goHome();
    }
  };
  window.__rfInit = init;

  // ui/app/main.jsx
  var import_react11 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // ui/app/AppShell.jsx
  var import_react10 = __toESM(require_react());

  // node_modules/react-router-dom/dist/index.js
  var React2 = __toESM(require_react());
  var ReactDOM = __toESM(require_react_dom());

  // node_modules/react-router/dist/index.js
  var React = __toESM(require_react());

  // node_modules/@remix-run/router/dist/router.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var Action;
  (function(Action2) {
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
  })(Action || (Action = {}));
  var PopStateEventType = "popstate";
  function createHashHistory(options) {
    if (options === void 0) {
      options = {};
    }
    function createHashLocation(window2, globalHistory) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = parsePath(window2.location.hash.substr(1));
      if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
        pathname = "/" + pathname;
      }
      return createLocation(
        "",
        {
          pathname,
          search,
          hash
        },
        // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null,
        globalHistory.state && globalHistory.state.key || "default"
      );
    }
    function createHashHref(window2, to) {
      let base = window2.document.querySelector("base");
      let href = "";
      if (base && base.getAttribute("href")) {
        let url = window2.location.href;
        let hashIndex = url.indexOf("#");
        href = hashIndex === -1 ? url : url.slice(0, hashIndex);
      }
      return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
      warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }
  function getHistoryState(location, index) {
    return {
      usr: location.state,
      key: location.key,
      idx: index
    };
  }
  function createLocation(current, to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = _extends({
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey()
    });
    return location;
  }
  function createPath(_ref) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) {
      options = {};
    }
    let {
      window: window2 = document.defaultView,
      v5Compat = false
    } = options;
    let globalHistory = window2.history;
    let action = Action.Pop;
    let listener = null;
    let index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends({}, globalHistory.state, {
        idx: index
      }), "");
    }
    function getIndex() {
      let state = globalHistory.state || {
        idx: null
      };
      return state.idx;
    }
    function handlePop() {
      action = Action.Pop;
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: history.location,
          delta
        });
      }
    }
    function push(to, state) {
      action = Action.Push;
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex() + 1;
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 1
        });
      }
    }
    function replace2(to, state) {
      action = Action.Replace;
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex();
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 0
        });
      }
    }
    function createURL(to) {
      let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
      let href = typeof to === "string" ? to : createPath(to);
      href = href.replace(/ $/, "%20");
      invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
      return new URL(href, base);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n) {
        return globalHistory.go(n);
      }
    };
    return history;
  }
  var ResultType;
  (function(ResultType2) {
    ResultType2["data"] = "data";
    ResultType2["deferred"] = "deferred";
    ResultType2["redirect"] = "redirect";
    ResultType2["error"] = "error";
  })(ResultType || (ResultType = {}));
  function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; ++i) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
  }
  function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }
    if (parentsMeta === void 0) {
      parentsMeta = [];
    }
    if (parentPath === void 0) {
      parentPath = "";
    }
    let flattenRoute = (route, index, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
        );
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index) => {
      var _route$path;
      if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
  }
  function rankRouteBranches(branches) {
    branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial) {
    if (allowPartial === void 0) {
      allowPartial = false;
    }
    let {
      routesMeta
    } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      }, remainingPathname);
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        }, remainingPathname);
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo2, _ref, index) => {
      let {
        paramName,
        isOptional
      } = _ref;
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }
    if (end === void 0) {
      end = true;
    }
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
      params.push({
        paramName,
        isOptional: isOptional != null
      });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
      params.push({
        paramName: "*"
      });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else ;
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  var ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX$1.test(url);
  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
      if (isAbsoluteUrl(toPathname)) {
        pathname = toPathname;
      } else {
        if (toPathname.includes("//")) {
          let oldPathname = toPathname;
          toPathname = toPathname.replace(/\/\/+/g, "/");
          warning(false, "Pathnames cannot have embedded double slashes - normalizing " + (oldPathname + " -> " + toPathname));
        }
        if (toPathname.startsWith("/")) {
          pathname = resolvePathname(toPathname.substring(1), "/");
        } else {
          pathname = resolvePathname(toPathname, fromPathname);
        }
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function getPathContributingMatches(matches) {
    return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
  }
  function getResolveToMatches(matches, v7_relativeSplatPath) {
    let pathMatches = getPathContributingMatches(matches);
    if (v7_relativeSplatPath) {
      return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
    }
    return pathMatches.map((match) => match.pathnameBase);
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) {
      isPathRelative = false;
    }
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = _extends({}, toArg);
      invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
      invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
      invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = ["post", "put", "patch", "delete"];
  var validMutationMethods = new Set(validMutationMethodsArr);
  var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
  var validRequestMethods = new Set(validRequestMethodsArr);

  // node_modules/react-router/dist/index.js
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var DataRouterContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    DataRouterContext.displayName = "DataRouter";
  }
  var DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    DataRouterStateContext.displayName = "DataRouterState";
  }
  if (false) {
    AwaitContext.displayName = "Await";
  }
  var NavigationContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    NavigationContext.displayName = "Navigation";
  }
  var LocationContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    LocationContext.displayName = "Location";
  }
  var RouteContext = /* @__PURE__ */ React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  if (false) {
    RouteContext.displayName = "Route";
  }
  var RouteErrorContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    RouteErrorContext.displayName = "RouteError";
  }
  function useInRouterContext() {
    return React.useContext(LocationContext) != null;
  }
  function useLocation() {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useLocation() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    return React.useContext(LocationContext).location;
  }
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React.useContext(NavigationContext).static;
    if (!isStatic) {
      React.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let {
      isDataRoute
    } = React.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useNavigate() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let dataRouterContext = React.useContext(DataRouterContext);
    let {
      basename,
      future,
      navigator: navigator2
    } = React.useContext(NavigationContext);
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
    let activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      false ? warning(activeRef.current, navigateEffectWarning) : void 0;
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
    }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
    return navigate;
  }
  function useParams() {
    let {
      matches
    } = React.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useRoutes() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      navigator: navigator2
    } = React.useContext(NavigationContext);
    let {
      matches: parentMatches
    } = React.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (false) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      var _parsedLocationArg$pa;
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? false ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, {
      pathname: remainingPathname
    });
    if (false) {
      false ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
      false ? warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
    }
    let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
      ]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
      ])
    })), parentMatches, dataRouterState, future);
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React.createElement(LocationContext.Provider, {
        value: {
          location: _extends2({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default"
          }, location),
          navigationType: Action.Pop
        }
      }, renderedMatches);
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
      padding: "0.5rem",
      backgroundColor: lightgrey
    };
    let codeStyles = {
      padding: "2px 4px",
      backgroundColor: lightgrey
    };
    let devInfo = null;
    if (false) {
      console.error("Error handled by React Router default ErrorBoundary:", error);
      devInfo = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, message), stack ? /* @__PURE__ */ React.createElement("pre", {
      style: preStyles
    }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return {
        error
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
      return this.state.error !== void 0 ? /* @__PURE__ */ React.createElement(RouteContext.Provider, {
        value: this.props.routeContext
      }, /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function RenderedRoute(_ref) {
    let {
      routeContext,
      match,
      children
    } = _ref;
    let dataRouterContext = React.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React.createElement(RouteContext.Provider, {
      value: routeContext
    }, children);
  }
  function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState;
    if (parentMatches === void 0) {
      parentMatches = [];
    }
    if (dataRouterState === void 0) {
      dataRouterState = null;
    }
    if (future === void 0) {
      future = null;
    }
    if (matches == null) {
      var _future;
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0);
      !(errorIndex >= 0) ? false ? invariant(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : invariant(false) : void 0;
      renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) {
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let {
            loaderData,
            errors: errors2
          } = dataRouterState;
          let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            renderFallback = true;
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    return renderedMatches.reduceRight((outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ React.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ React.createElement(RenderedRoute, {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        });
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: {
          outlet: null,
          matches: matches2,
          isDataRoute: true
        }
      }) : getChildren();
    }, null);
  }
  var DataRouterHook = /* @__PURE__ */ (function(DataRouterHook3) {
    DataRouterHook3["UseBlocker"] = "useBlocker";
    DataRouterHook3["UseRevalidator"] = "useRevalidator";
    DataRouterHook3["UseNavigateStable"] = "useNavigate";
    return DataRouterHook3;
  })(DataRouterHook || {});
  var DataRouterStateHook = /* @__PURE__ */ (function(DataRouterStateHook3) {
    DataRouterStateHook3["UseBlocker"] = "useBlocker";
    DataRouterStateHook3["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook3["UseActionData"] = "useActionData";
    DataRouterStateHook3["UseRouteError"] = "useRouteError";
    DataRouterStateHook3["UseNavigation"] = "useNavigation";
    DataRouterStateHook3["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook3["UseMatches"] = "useMatches";
    DataRouterStateHook3["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook3["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook3["UseRouteId"] = "useRouteId";
    return DataRouterStateHook3;
  })(DataRouterStateHook || {});
  function useDataRouterContext(hookName) {
    let ctx = React.useContext(DataRouterContext);
    !ctx ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React.useContext(DataRouterStateContext);
    !state ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return state;
  }
  function useRouteContext(hookName) {
    let route = React.useContext(RouteContext);
    !route ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ? false ? invariant(false, hookName + ' can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
    return thisRoute.route.id;
  }
  function useRouteError() {
    var _state$errors;
    let error = React.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    if (error !== void 0) {
      return error;
    }
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
  }
  function useNavigateStable() {
    let {
      router
    } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    let activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      false ? warning(activeRef.current, navigateEffectWarning) : void 0;
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        router.navigate(to, _extends2({
          fromRouteId: id
        }, options));
      }
    }, [router, id]);
    return navigate;
  }
  var alreadyWarned$1 = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned$1[key]) {
      alreadyWarned$1[key] = true;
      false ? warning(false, message) : void 0;
    }
  }
  function warnOnce(key, message) {
    if (false) {
      alreadyWarned[message] = true;
      console.warn(message);
    }
  }
  var logDeprecation = (flag, msg, link) => warnOnce(flag, "\u26A0\uFE0F React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
  function logV6DeprecationWarnings(renderFuture, routerFuture) {
    if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === void 0) {
      logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
    }
    if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === void 0 && (!routerFuture || routerFuture.v7_relativeSplatPath === void 0)) {
      logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
    }
    if (routerFuture) {
      if (routerFuture.v7_fetcherPersist === void 0) {
        logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
      }
      if (routerFuture.v7_normalizeFormMethod === void 0) {
        logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
      }
      if (routerFuture.v7_partialHydration === void 0) {
        logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
      }
      if (routerFuture.v7_skipActionErrorRevalidation === void 0) {
        logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
      }
    }
  }
  var START_TRANSITION = "startTransition";
  var startTransitionImpl = React[START_TRANSITION];
  function Navigate(_ref4) {
    let {
      to,
      replace: replace2,
      state,
      relative
    } = _ref4;
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of
      // the router loaded. We can help them understand how to avoid that.
      "<Navigate> may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      future,
      static: isStatic
    } = React.useContext(NavigationContext);
    false ? warning(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.") : void 0;
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let navigate = useNavigate();
    let path = resolveTo(to, getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    React.useEffect(() => navigate(JSON.parse(jsonPath), {
      replace: replace2,
      state,
      relative
    }), [navigate, jsonPath, relative, replace2, state]);
    return null;
  }
  function Route(_props) {
    false ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false);
  }
  function Router(_ref5) {
    let {
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = Action.Pop,
      navigator: navigator2,
      static: staticProp = false,
      future
    } = _ref5;
    !!useInRouterContext() ? false ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React.useMemo(() => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: _extends2({
        v7_relativeSplatPath: false
      }, future)
    }), [basename, future, navigator2, staticProp]);
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let locationContext = React.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType]);
    false ? warning(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
      value: navigationContext
    }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
      children,
      value: locationContext
    }));
  }
  function Routes(_ref6) {
    let {
      children,
      location
    } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
  }
  var neverSettledPromise = new Promise(() => {
  });
  function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
      parentPath = [];
    }
    let routes = [];
    React.Children.forEach(children, (element, index) => {
      if (!/* @__PURE__ */ React.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index];
      if (element.type === React.Fragment) {
        routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
        return;
      }
      !(element.type === Route) ? false ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
      !(!element.props.index || !element.props.children) ? false ? invariant(false, "An index route cannot have child routes.") : invariant(false) : void 0;
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        loader: element.props.loader,
        action: element.props.action,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children, treePath);
      }
      routes.push(route);
    });
    return routes;
  }

  // node_modules/react-router-dom/dist/index.js
  var REACT_ROUTER_VERSION = "6";
  try {
    window.__reactRouterVersion = REACT_ROUTER_VERSION;
  } catch (e) {
  }
  if (false) {
    ViewTransitionContext.displayName = "ViewTransition";
  }
  if (false) {
    FetchersContext.displayName = "Fetchers";
  }
  var START_TRANSITION2 = "startTransition";
  var startTransitionImpl2 = React2[START_TRANSITION2];
  var FLUSH_SYNC = "flushSync";
  var flushSyncImpl = ReactDOM[FLUSH_SYNC];
  var USE_ID = "useId";
  var useIdImpl = React2[USE_ID];
  function HashRouter(_ref5) {
    let {
      basename,
      children,
      future,
      window: window2
    } = _ref5;
    let historyRef = React2.useRef();
    if (historyRef.current == null) {
      historyRef.current = createHashHistory({
        window: window2,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React2.useState({
      action: history.action,
      location: history.location
    });
    let {
      v7_startTransition
    } = future || {};
    let setState = React2.useCallback((newState) => {
      v7_startTransition && startTransitionImpl2 ? startTransitionImpl2(() => setStateImpl(newState)) : setStateImpl(newState);
    }, [setStateImpl, v7_startTransition]);
    React2.useLayoutEffect(() => history.listen(setState), [history, setState]);
    React2.useEffect(() => logV6DeprecationWarnings(future), [future]);
    return /* @__PURE__ */ React2.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history,
      future
    });
  }
  if (false) {
    HistoryRouter.displayName = "unstable_HistoryRouter";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  if (false) {
    Link.displayName = "Link";
  }
  if (false) {
    NavLink.displayName = "NavLink";
  }
  if (false) {
    Form.displayName = "Form";
  }
  if (false) {
    ScrollRestoration.displayName = "ScrollRestoration";
  }
  var DataRouterHook2;
  (function(DataRouterHook3) {
    DataRouterHook3["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook3["UseSubmit"] = "useSubmit";
    DataRouterHook3["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook3["UseFetcher"] = "useFetcher";
    DataRouterHook3["useViewTransitionState"] = "useViewTransitionState";
  })(DataRouterHook2 || (DataRouterHook2 = {}));
  var DataRouterStateHook2;
  (function(DataRouterStateHook3) {
    DataRouterStateHook3["UseFetcher"] = "useFetcher";
    DataRouterStateHook3["UseFetchers"] = "useFetchers";
    DataRouterStateHook3["UseScrollRestoration"] = "useScrollRestoration";
  })(DataRouterStateHook2 || (DataRouterStateHook2 = {}));

  // ui/app/Layout.jsx
  var import_react2 = __toESM(require_react());

  // ui/app/Sidebar.jsx
  var import_react = __toESM(require_react());
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var MAIN_ITEMS = [
    { path: "/", icon: "\u{1F3E0}", label: "Home" },
    { path: "/create", icon: "\u271A", label: "Create Rich Filter", create: true },
    { path: "/get-started", icon: "\u{1F680}", label: "Get Started" }
  ];
  var MANAGE_ITEMS = [
    { path: "/trash", icon: "\u{1F5D1}\uFE0F", label: "Trash" },
    { path: "/archive", icon: "\u{1F4E6}", label: "Archive" }
  ];
  var TOOLS_ITEMS = [
    { path: "/bulk", icon: "\u26A1", label: "Bulk Ops" },
    { path: "/import", icon: "\u{1F4E5}", label: "Import" },
    { path: "/config", icon: "\u2699\uFE0F", label: "Config" }
  ];
  function NavItem({ item }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const isActive = item.path === "/" ? currentPath === "/" || currentPath.startsWith("/edit") : currentPath === item.path;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        className: `rf-nav-item${isActive ? " active" : ""}`,
        onClick: () => navigate(item.path),
        title: item.label,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rf-nav-icon", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rf-nav-label", children: item.label })
        ]
      }
    );
  }
  function NavSection({ title, items }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rf-nav-section", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rf-nav-section-title", children: title }),
      items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, { item }, item.path))
    ] });
  }
  function Sidebar() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "rf-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rf-sidebar-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rf-sidebar-logo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rf-sidebar-logo-icon", children: "\u26A1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rf-sidebar-logo-title", children: "Rich Filters" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rf-sidebar-logo-sub", children: "Administration" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "rf-sidebar-nav", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, { items: MAIN_ITEMS }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, { title: "Manage", items: MANAGE_ITEMS }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, { title: "Tools", items: TOOLS_ITEMS })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rf-sidebar-footer", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rich Filters" }) })
    ] });
  }

  // ui/app/Layout.jsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  var LEGACY_ROUTES = ["/", "/create", "/edit"];
  function Layout({ children }) {
    const location = useLocation();
    const isLegacyRoute = LEGACY_ROUTES.some(
      (r) => r === "/" ? location.pathname === "/" : location.pathname.startsWith(r)
    );
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "rf-layout", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sidebar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "rf-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            id: "content-area",
            style: { display: isLegacyRoute ? "block" : "none", minHeight: "100%" }
          }
        ),
        children
      ] })
    ] });
  }

  // ui/app/pages/PlaceholderPage.jsx
  var import_react3 = __toESM(require_react());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
  function PlaceholderPage({ title, icon, desc }) {
    const navigate = useNavigate();
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "rf-placeholder", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "rf-placeholder-inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "rf-placeholder-icon", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "rf-placeholder-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "rf-placeholder-desc", children: desc }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "btn btn-d", onClick: () => navigate("/"), children: "\u2190 Back to Rich Filters" })
    ] }) });
  }

  // ui/app/pages/ContentPage.jsx
  var import_react4 = __toESM(require_react());
  function ContentPage({ route }) {
    const { id } = useParams();
    (0, import_react4.useEffect)(() => {
      const go = async () => {
        if (typeof window.__rfInit === "function") {
          await window.__rfInit();
          window.__rfInit = null;
        }
        if (typeof window.__rfGo === "function") {
          window.__rfGo(route, id);
        }
      };
      go();
    }, [route, id]);
    return null;
  }

  // ui/app/pages/TrashPage.jsx
  var import_react5 = __toESM(require_react());
  var import_bridge2 = __toESM(require_out3());
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  function formatDate(iso) {
    if (!iso) return "\u2014";
    try {
      return new Date(iso).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return iso;
    }
  }
  function TrashPage() {
    const navigate = useNavigate();
    const [items, setItems] = (0, import_react5.useState)([]);
    const [loading, setLoading] = (0, import_react5.useState)(true);
    const [busy, setBusy] = (0, import_react5.useState)(null);
    async function load() {
      setLoading(true);
      try {
        const data = await (0, import_bridge2.invoke)("listTrashedFilters");
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("listTrashedFilters error", e);
      } finally {
        setLoading(false);
      }
    }
    (0, import_react5.useEffect)(() => {
      load();
    }, []);
    async function handleRestore(id, name) {
      if (!window.confirm(`Restore "${name}"?`)) return;
      setBusy(id);
      try {
        await (0, import_bridge2.invoke)("restoreRichFilter", { id });
        setItems((prev) => prev.filter((f) => f.id !== id));
      } finally {
        setBusy(null);
      }
    }
    async function handleDelete(id, name) {
      if (!window.confirm(`Permanently delete "${name}"? This cannot be undone.`)) return;
      setBusy(id);
      try {
        await (0, import_bridge2.invoke)("permanentlyDeleteFilter", { id });
        setItems((prev) => prev.filter((f) => f.id !== id));
      } finally {
        setBusy(null);
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { padding: "24px", background: "#fff", minHeight: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { fontSize: 32 }, children: "\u{1F5D1}\uFE0F" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "#172b4d" }, children: "Trash" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { margin: 0, fontSize: 13, color: "#6b778c" }, children: "Rich filters you delete are moved here. Restore or permanently remove them." })
        ] })
      ] }),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { color: "#6b778c" }, children: "Loading\u2026" }) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { textAlign: "center", padding: "60px 0", color: "#6b778c" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: 48, marginBottom: 12 }, children: "\u{1F5D1}\uFE0F" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { fontSize: 16, margin: 0 }, children: "Trash is empty" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { fontSize: 13, marginTop: 4 }, children: "Deleted rich filters will appear here." })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { style: { borderBottom: "2px solid #dfe1e6" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: thStyle, children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: thStyle, children: "Description" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: thStyle, children: "Deleted on" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: { ...thStyle, textAlign: "right" }, children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tbody", { children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { style: { borderBottom: "1px solid #f0f1f3" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: tdStyle, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: f.name }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: { ...tdStyle, color: "#6b778c" }, children: f.description || "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: { ...tdStyle, color: "#6b778c" }, children: formatDate(f.deletedAt) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("td", { style: { ...tdStyle, textAlign: "right" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                disabled: busy === f.id,
                onClick: () => handleRestore(f.id, f.name),
                style: restoreBtn,
                children: "\u21A9 Restore"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                disabled: busy === f.id,
                onClick: () => handleDelete(f.id, f.name),
                style: deleteBtn,
                children: "Delete permanently"
              }
            )
          ] })
        ] }, f.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { marginTop: 32 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { onClick: () => navigate("/"), style: backBtn, children: "\u2190 Back to Rich Filters" }) })
    ] });
  }
  var thStyle = { padding: "8px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#6b778c", textTransform: "uppercase", letterSpacing: ".04em" };
  var tdStyle = { padding: "10px 12px", fontSize: 14, color: "#172b4d", verticalAlign: "middle" };
  var restoreBtn = { marginRight: 8, padding: "5px 12px", background: "#0052cc", color: "#fff", border: "none", borderRadius: 3, fontSize: 13, cursor: "pointer" };
  var deleteBtn = { padding: "5px 12px", background: "#fff", color: "#de350b", border: "1px solid #de350b", borderRadius: 3, fontSize: 13, cursor: "pointer" };
  var backBtn = { padding: "7px 16px", background: "#f4f5f7", color: "#172b4d", border: "1px solid #dfe1e6", borderRadius: 3, fontSize: 14, cursor: "pointer" };

  // ui/app/pages/ArchivePage.jsx
  var import_react6 = __toESM(require_react());
  var import_bridge3 = __toESM(require_out3());
  var import_jsx_runtime5 = __toESM(require_jsx_runtime());
  function formatDate2(iso) {
    if (!iso) return "\u2014";
    try {
      return new Date(iso).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return iso;
    }
  }
  function ArchivePage() {
    const navigate = useNavigate();
    const [items, setItems] = (0, import_react6.useState)([]);
    const [loading, setLoading] = (0, import_react6.useState)(true);
    const [busy, setBusy] = (0, import_react6.useState)(null);
    async function load() {
      setLoading(true);
      try {
        const data = await (0, import_bridge3.invoke)("listArchivedFilters");
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("listArchivedFilters error", e);
      } finally {
        setLoading(false);
      }
    }
    (0, import_react6.useEffect)(() => {
      load();
    }, []);
    async function handleRestore(id, name) {
      if (!window.confirm(`Restore "${name}" to active filters?`)) return;
      setBusy(id);
      try {
        await (0, import_bridge3.invoke)("restoreFromArchive", { id });
        setItems((prev) => prev.filter((f) => f.id !== id));
      } finally {
        setBusy(null);
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { padding: "24px", background: "#fff", minHeight: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { fontSize: 32 }, children: "\u{1F4E6}" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "#172b4d" }, children: "Archive" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, fontSize: 13, color: "#6b778c" }, children: "Long-term storage for rich filters you want to keep but no longer actively use." })
        ] })
      ] }),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { color: "#6b778c" }, children: "Loading\u2026" }) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { textAlign: "center", padding: "60px 0", color: "#6b778c" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 48, marginBottom: 12 }, children: "\u{1F4E6}" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { fontSize: 16, margin: 0 }, children: "Archive is empty" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { fontSize: 13, marginTop: 4 }, children: "Archived rich filters will appear here. Use the \u22EF menu on any filter to archive it." })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { style: { borderBottom: "2px solid #dfe1e6" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: thStyle2, children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: thStyle2, children: "Description" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: thStyle2, children: "Archived on" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: { ...thStyle2, textAlign: "right" }, children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { style: { borderBottom: "1px solid #f0f1f3" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: tdStyle2, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: f.name }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: { ...tdStyle2, color: "#6b778c" }, children: f.description || "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: { ...tdStyle2, color: "#6b778c" }, children: formatDate2(f.archivedAt) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: { ...tdStyle2, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              disabled: busy === f.id,
              onClick: () => handleRestore(f.id, f.name),
              style: restoreBtn2,
              children: "\u21A9 Restore"
            }
          ) })
        ] }, f.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { marginTop: 32 }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick: () => navigate("/"), style: backBtn2, children: "\u2190 Back to Rich Filters" }) })
    ] });
  }
  var thStyle2 = { padding: "8px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#6b778c", textTransform: "uppercase", letterSpacing: ".04em" };
  var tdStyle2 = { padding: "10px 12px", fontSize: 14, color: "#172b4d", verticalAlign: "middle" };
  var restoreBtn2 = { padding: "5px 12px", background: "#0052cc", color: "#fff", border: "none", borderRadius: 3, fontSize: 13, cursor: "pointer" };
  var backBtn2 = { padding: "7px 16px", background: "#f4f5f7", color: "#172b4d", border: "1px solid #dfe1e6", borderRadius: 3, fontSize: 14, cursor: "pointer" };

  // ui/app/pages/BulkOpsPage.jsx
  var import_react7 = __toESM(require_react());
  var import_bridge4 = __toESM(require_out3());
  var import_jsx_runtime6 = __toESM(require_jsx_runtime());
  var OPERATIONS = [
    { value: "downloadUsageData", label: "Download usage data" },
    { value: "moveToTrash", label: "Move to trash" },
    { value: "restoreFromTrash", label: "Restore from trash" },
    { value: "deleteForever", label: "Delete forever", danger: true },
    { value: "moveToArchive", label: "Move to archive" },
    { value: "restoreFromArchive", label: "Restore from archive" },
    { value: "exportToBackup", label: "Export to backup", beta: true }
  ];
  var SOURCES = [
    { value: "active", label: "Active rich filters", fn: "listRichFilters" },
    { value: "archived", label: "Archived rich filters", fn: "listArchivedFilters" },
    { value: "trashed", label: "Trashed rich filters", fn: "listTrashedFilters" }
  ];
  var BULK_INVOKE = {
    moveToTrash: "bulkMoveToTrash",
    restoreFromTrash: "bulkRestoreFromTrash",
    deleteForever: "bulkDeleteForever",
    moveToArchive: "bulkMoveToArchive",
    restoreFromArchive: "bulkRestoreFromArchive"
  };
  function formatRelativeDate(iso) {
    if (!iso) return "\u2014";
    try {
      const diff = Date.now() - new Date(iso).getTime();
      const days = Math.floor(diff / 864e5);
      if (days === 0) return "today";
      if (days === 1) return "yesterday";
      if (days < 7) return `${days} days ago`;
      return new Date(iso).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return "\u2014";
    }
  }
  function triggerDownload(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  function initials(name) {
    if (!name) return "DT";
    return name.split(" ").map((w) => w[0] || "").join("").slice(0, 2).toUpperCase();
  }
  var thStyle3 = {
    padding: "10px 14px",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 600,
    color: "#6b778c",
    borderBottom: "2px solid #dfe1e6",
    background: "#fafbfc",
    whiteSpace: "nowrap"
  };
  var tdStyle3 = {
    padding: "10px 14px",
    fontSize: 14,
    borderBottom: "1px solid #f4f5f7",
    verticalAlign: "middle"
  };
  function IndeterminateCheckbox({ checked, indeterminate, onChange }) {
    const ref = (0, import_react7.useRef)(null);
    (0, import_react7.useEffect)(() => {
      if (ref.current) ref.current.indeterminate = indeterminate;
    }, [indeterminate]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { ref, type: "checkbox", checked, onChange, style: { cursor: "pointer" } });
  }
  function Toast({ type, msg }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: {
      position: "fixed",
      top: 14,
      right: 14,
      zIndex: 1e3,
      padding: "11px 16px",
      borderRadius: 4,
      fontSize: 14,
      boxShadow: "0 4px 12px rgba(9,30,66,.2)",
      background: type === "ok" ? "#e3fcef" : "#ffebe6",
      color: type === "ok" ? "#006644" : "#bf2600",
      border: `1px solid ${type === "ok" ? "#abf5d1" : "#ff8f73"}`,
      display: "flex",
      alignItems: "center",
      gap: 8
    }, children: [
      type === "ok" ? "\u2713" : "\u26A0",
      " ",
      msg
    ] });
  }
  function Dropdown({ label, open, onToggle, children, minWidth = 200 }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "button",
        {
          onClick: onToggle,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            border: "1.5px solid #dfe1e6",
            borderRadius: 3,
            background: "#fff",
            fontSize: 14,
            cursor: "pointer",
            minWidth,
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { fontSize: 10, color: "#97a0af" }, children: "\u25BE" })
          ]
        }
      ),
      open && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: {
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 200,
        background: "#fff",
        border: "1px solid #dfe1e6",
        borderRadius: 4,
        boxShadow: "0 4px 16px rgba(9,30,66,.15)",
        minWidth,
        marginTop: 2
      }, children })
    ] });
  }
  function DropdownItem({ active, danger, onClick, children, beta }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "button",
      {
        onClick,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "9px 14px",
          background: active ? "#deebff" : "none",
          border: "none",
          fontSize: 14,
          cursor: "pointer",
          textAlign: "left",
          color: danger ? "#de350b" : "#172b4d"
        },
        children: [
          children,
          beta && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: {
            fontSize: 10,
            background: "#dfe1e6",
            borderRadius: 3,
            padding: "1px 5px",
            color: "#6b778c",
            fontWeight: 700
          }, children: "BETA" })
        ]
      }
    );
  }
  function BulkOpsPage() {
    const navigate = useNavigate();
    const [source, setSource] = (0, import_react7.useState)("active");
    const [items, setItems] = (0, import_react7.useState)([]);
    const [loading, setLoading] = (0, import_react7.useState)(true);
    const [search, setSearch] = (0, import_react7.useState)("");
    const [selected, setSelected] = (0, import_react7.useState)(/* @__PURE__ */ new Set());
    const [operation, setOperation] = (0, import_react7.useState)("downloadUsageData");
    const [busy, setBusy] = (0, import_react7.useState)(false);
    const [showSourceDrop, setShowSourceDrop] = (0, import_react7.useState)(false);
    const [showOpDrop, setShowOpDrop] = (0, import_react7.useState)(false);
    const [toast2, setToast] = (0, import_react7.useState)(null);
    const load = (0, import_react7.useCallback)(async () => {
      setLoading(true);
      setSelected(/* @__PURE__ */ new Set());
      try {
        const src = SOURCES.find((s) => s.value === source);
        const data = await (0, import_bridge4.invoke)(src.fn);
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("BulkOpsPage load error", e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }, [source]);
    (0, import_react7.useEffect)(() => {
      load();
    }, [load]);
    (0, import_react7.useEffect)(() => {
      const handler = () => {
        setShowSourceDrop(false);
        setShowOpDrop(false);
      };
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }, []);
    const filtered = search ? items.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())) : items;
    const selectedIds = [...selected];
    const allChecked = filtered.length > 0 && filtered.every((f) => selected.has(f.id));
    const someChecked = filtered.some((f) => selected.has(f.id));
    const currentSource = SOURCES.find((s) => s.value === source);
    const currentOp = OPERATIONS.find((o) => o.value === operation);
    const toggleAll = () => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (allChecked) filtered.forEach((f) => next.delete(f.id));
        else filtered.forEach((f) => next.add(f.id));
        return next;
      });
    };
    const toggleOne = (id) => {
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    };
    const showToast = (type, msg) => {
      setToast({ type, msg });
      setTimeout(() => setToast(null), 3500);
    };
    const handleApply = async () => {
      if (selectedIds.length === 0 || busy) return;
      if (operation === "deleteForever") {
        if (!window.confirm(`Permanently delete ${selectedIds.length} filter(s)? This cannot be undone.`)) return;
      } else if (operation === "moveToTrash") {
        if (!window.confirm(`Move ${selectedIds.length} filter(s) to trash?`)) return;
      }
      setBusy(true);
      try {
        if (operation === "downloadUsageData") {
          const csv = await (0, import_bridge4.invoke)("bulkDownloadUsageData", { ids: selectedIds, source });
          triggerDownload(csv, "rich-filters-usage.csv", "text/csv");
          showToast("ok", "Usage data downloaded");
          return;
        }
        if (operation === "exportToBackup") {
          const json2 = await (0, import_bridge4.invoke)("bulkExportToBackup", { ids: selectedIds, source });
          triggerDownload(json2, "rich-filters-backup.json", "application/json");
          showToast("ok", "Backup exported");
          return;
        }
        const fn = BULK_INVOKE[operation];
        if (fn) {
          await (0, import_bridge4.invoke)(fn, { ids: selectedIds });
          showToast("ok", `Done \u2014 ${selectedIds.length} filter(s) updated`);
          load();
        }
      } catch (e) {
        console.error("BulkOpsPage apply error", e);
        showToast("err", "Operation failed. Please try again.");
      } finally {
        setBusy(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { background: "#fff", minHeight: "100%" }, children: [
      toast2 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Toast, { type: toast2.type, msg: toast2.msg }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { display: "flex", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #dfe1e6" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "#172b4d" }, children: "Bulk operations" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { padding: "12px 24px 10px", borderBottom: "1px solid #f0f1f3", background: "#fffbef" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }, onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { fontSize: 13, fontWeight: 600, color: "#172b4d", minWidth: 110 }, children: "Bulk operation" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Dropdown,
            {
              label: (currentOp == null ? void 0 : currentOp.label) || "Select\u2026",
              open: showOpDrop,
              onToggle: () => {
                setShowOpDrop((p) => !p);
                setShowSourceDrop(false);
              },
              minWidth: 220,
              children: OPERATIONS.map((op) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                DropdownItem,
                {
                  active: op.value === operation,
                  danger: op.danger,
                  beta: op.beta,
                  onClick: () => {
                    setOperation(op.value);
                    setShowOpDrop(false);
                  },
                  children: op.label
                },
                op.value
              ))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              onClick: handleApply,
              disabled: selectedIds.length === 0 || busy,
              style: {
                padding: "6px 16px",
                background: selectedIds.length > 0 && !busy ? "#0052cc" : "#f4f5f7",
                color: selectedIds.length > 0 && !busy ? "#fff" : "#97a0af",
                border: "none",
                borderRadius: 3,
                fontSize: 14,
                fontWeight: 500,
                cursor: selectedIds.length > 0 && !busy ? "pointer" : "not-allowed"
              },
              children: busy ? "Applying\u2026" : "Apply"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { style: { fontSize: 13, color: "#6b778c", margin: 0 }, children: [
          "Select the rich filters for the bulk operation. Only the rich filters you administer are available.",
          " ",
          filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              onClick: toggleAll,
              style: { background: "none", border: "none", color: "#0052cc", cursor: "pointer", fontSize: 13, padding: 0 },
              children: allChecked ? "Deselect all" : "Select all"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "div",
        {
          style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 24px", borderBottom: "1px solid #f0f1f3" },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              Dropdown,
              {
                label: currentSource == null ? void 0 : currentSource.label,
                open: showSourceDrop,
                onToggle: () => {
                  setShowSourceDrop((p) => !p);
                  setShowOpDrop(false);
                },
                minWidth: 190,
                children: SOURCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  DropdownItem,
                  {
                    active: s.value === source,
                    onClick: () => {
                      setSource(s.value);
                      setShowSourceDrop(false);
                      setSearch("");
                    },
                    children: s.label
                  },
                  s.value
                ))
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { position: "relative", flex: 1, maxWidth: 300 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "#97a0af", fontSize: 13, pointerEvents: "none" }, children: "\u{1F50D}" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "input",
                {
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  placeholder: "Search",
                  style: { width: "100%", padding: "6px 10px 6px 28px", border: "1.5px solid #dfe1e6", borderRadius: 3, fontSize: 14, outline: "none", background: "#fafbfc" }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                onClick: load,
                disabled: loading,
                title: "Refresh",
                style: {
                  background: "none",
                  border: "1.5px solid #dfe1e6",
                  borderRadius: 3,
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  fontSize: 15,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#42526e",
                  opacity: loading ? 0.5 : 1
                },
                children: "\u{1F504}"
              }
            )
          ]
        }
      ),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 80, gap: 12, color: "#6b778c" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { width: 32, height: 32, border: "3px solid #dfe1e6", borderTopColor: "#0052cc", borderRadius: "50%", animation: "spin .7s linear infinite" } }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Loading\u2026" })
      ] }) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { textAlign: "center", padding: "60px 24px", color: "#6b778c" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { fontSize: 44, marginBottom: 10, opacity: 0.3 }, children: "\u{1F50D}" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: { fontSize: 14 }, children: items.length === 0 ? `No ${(currentSource == null ? void 0 : currentSource.label.toLowerCase()) || "filters"} found.` : "No filters match your search." })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: { ...thStyle3, width: 36 }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              IndeterminateCheckbox,
              {
                checked: allChecked,
                indeterminate: someChecked && !allChecked,
                onChange: toggleAll
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: { ...thStyle3, width: 32 }, children: "\u2605" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: thStyle3, children: "Name \u2195" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: thStyle3, children: "Administrators" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: thStyle3, children: "Jira filter" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: thStyle3, children: "Visibility" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { style: thStyle3, children: "Last used \u24D8" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tbody", { children: filtered.map((f) => {
            var _a, _b;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
              "tr",
              {
                style: { borderBottom: "1px solid #f4f5f7", background: selected.has(f.id) ? "#f0f5ff" : "transparent" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    "input",
                    {
                      type: "checkbox",
                      checked: selected.has(f.id),
                      onChange: () => toggleOne(f.id),
                      style: { cursor: "pointer" }
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { color: f.starred ? "#ff8b00" : "#dfe1e6", fontSize: 17, lineHeight: 1 }, children: "\u2605" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: `#/edit/${f.id}`, style: { color: "#0052cc", fontWeight: 500 }, children: f.name }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#0052cc",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      flexShrink: 0
                    }, children: initials((_a = f.admins) == null ? void 0 : _a[0]) }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { fontSize: 13 }, children: ((_b = f.admins) == null ? void 0 : _b[0]) || "\u2014" })
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: f.jiraFilter ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { style: { background: "none", border: "none", color: "#0052cc", cursor: "pointer", fontSize: 13, padding: 0 }, children: "Copy rich filter" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { color: "#97a0af" }, children: "\u2014" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: tdStyle3, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { display: "inline-block", padding: "2px 8px", borderRadius: 3, fontSize: 11, fontWeight: 700, background: "#dfe1e6", color: "#42526e", letterSpacing: 0.3 }, children: f.visibility || "PRIVATE" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { style: { ...tdStyle3, fontSize: 13, color: "#6b778c" }, children: formatRelativeDate(f.lastUsed || f.updatedAt) })
                ]
              },
              f.id
            );
          }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { padding: "8px 24px", fontSize: 13, color: "#6b778c", borderTop: "1px solid #f0f1f3" }, children: [
          "Showing ",
          filtered.length,
          " rich filter",
          filtered.length !== 1 ? "s" : "",
          selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { style: { marginLeft: 8, color: "#0052cc", fontWeight: 600 }, children: [
            "\xB7 ",
            selected.size,
            " selected"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { padding: "8px 24px 28px" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          onClick: () => navigate("/"),
          style: { background: "none", border: "1.5px solid #dfe1e6", borderRadius: 3, padding: "6px 14px", fontSize: 14, cursor: "pointer", color: "#42526e" },
          children: "\u2190 Back to Rich Filters"
        }
      ) })
    ] });
  }

  // ui/app/pages/ImportPage.jsx
  var import_react8 = __toESM(require_react());
  var import_bridge5 = __toESM(require_out3());
  var import_jsx_runtime7 = __toESM(require_jsx_runtime());
  var IMPORT_TYPES = [
    { value: "newIds", label: "Create with new IDs", beta: true },
    { value: "asExported", label: "Restore as exported", beta: true }
  ];
  function Badge({ text }) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: {
      fontSize: 10,
      background: "#dfe1e6",
      borderRadius: 3,
      padding: "1px 5px",
      color: "#6b778c",
      fontWeight: 700,
      marginLeft: 6,
      verticalAlign: "middle"
    }, children: text });
  }
  function Toast2({ type, msg }) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: {
      position: "fixed",
      top: 14,
      right: 14,
      zIndex: 1e3,
      padding: "11px 16px",
      borderRadius: 4,
      fontSize: 14,
      boxShadow: "0 4px 12px rgba(9,30,66,.2)",
      background: type === "ok" ? "#e3fcef" : "#ffebe6",
      color: type === "ok" ? "#006644" : "#bf2600",
      border: `1px solid ${type === "ok" ? "#abf5d1" : "#ff8f73"}`,
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 220
    }, children: [
      type === "ok" ? "\u2713" : "\u26A0",
      " ",
      msg
    ] });
  }
  function Dropdown2({ options, value, onChange }) {
    const [open, setOpen] = (0, import_react8.useState)(false);
    const selected = options.find((o) => o.value === value) || options[0];
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { position: "relative" }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "button",
        {
          onClick: () => setOpen((p) => !p),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            border: "1.5px solid #dfe1e6",
            borderRadius: 3,
            background: "#fff",
            fontSize: 14,
            cursor: "pointer",
            minWidth: 220,
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
              selected.label,
              selected.beta && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { text: "BETA" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 10, color: "#97a0af" }, children: "\u25BE" })
          ]
        }
      ),
      open && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: {
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 200,
        background: "#fff",
        border: "1px solid #dfe1e6",
        borderRadius: 4,
        boxShadow: "0 4px 16px rgba(9,30,66,.15)",
        minWidth: 220,
        marginTop: 2
      }, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "button",
        {
          onClick: () => {
            onChange(opt.value);
            setOpen(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            width: "100%",
            padding: "9px 14px",
            background: opt.value === value ? "#deebff" : "none",
            border: "none",
            fontSize: 14,
            cursor: "pointer",
            textAlign: "left",
            color: "#172b4d"
          },
          children: [
            opt.label,
            opt.beta && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { text: "BETA" })
          ]
        },
        opt.value
      )) })
    ] });
  }
  function FileDropZone({ file, onFile }) {
    const [dragging, setDragging] = (0, import_react8.useState)(false);
    const inputRef = (0, import_react8.useRef)(null);
    const handleDrop = (0, import_react8.useCallback)((e) => {
      e.preventDefault();
      setDragging(false);
      const f = e.dataTransfer.files[0];
      if (f) onFile(f);
    }, [onFile]);
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragging(true);
    };
    const handleDragLeave = () => setDragging(false);
    const handleFileInput = (e) => {
      const f = e.target.files[0];
      if (f) onFile(f);
      e.target.value = "";
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "div",
      {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.click();
        },
        style: {
          border: `2px dashed ${dragging ? "#0052cc" : "#b3c7e6"}`,
          borderRadius: 6,
          background: dragging ? "#f0f5ff" : "#f0f5ff",
          padding: "60px 24px",
          textAlign: "center",
          cursor: "pointer",
          transition: "border-color 0.15s, background 0.15s",
          minHeight: 140,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: ".json,application/json",
              style: { display: "none" },
              onChange: handleFileInput
            }
          ),
          file ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 28 }, children: "\u{1F4C4}" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 14, fontWeight: 600, color: "#172b4d" }, children: file.name }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { fontSize: 12, color: "#6b778c" }, children: [
              (file.size / 1024).toFixed(1),
              " KB \xB7 click to replace"
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { fontSize: 14, color: "#6b778c" }, children: [
            "Drop a backup file here, or ",
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { color: "#0052cc", textDecoration: "underline" }, children: "click to browse" }),
            " and select it."
          ] })
        ]
      }
    );
  }
  function ResultsSummary({ result }) {
    var _a, _b, _c;
    if (!result) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: {
      marginTop: 20,
      padding: "14px 16px",
      borderRadius: 4,
      background: ((_a = result.errors) == null ? void 0 : _a.length) ? "#fffbeb" : "#e3fcef",
      border: `1px solid ${((_b = result.errors) == null ? void 0 : _b.length) ? "#ffe58f" : "#abf5d1"}`,
      fontSize: 13
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { style: { fontWeight: 600, color: "#172b4d", marginBottom: 6 }, children: [
        "Import complete: ",
        result.imported,
        " filter",
        result.imported !== 1 ? "s" : "",
        " imported",
        result.skipped > 0 && `, ${result.skipped} skipped`
      ] }),
      ((_c = result.errors) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { style: { margin: 0, paddingLeft: 18, color: "#6b778c" }, children: result.errors.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: e }, i)) })
    ] });
  }
  function ImportPage() {
    const navigate = useNavigate();
    const [importType, setImportType] = (0, import_react8.useState)("newIds");
    const [file, setFile] = (0, import_react8.useState)(null);
    const [busy, setBusy] = (0, import_react8.useState)(false);
    const [toast2, setToast] = (0, import_react8.useState)(null);
    const [result, setResult] = (0, import_react8.useState)(null);
    const showToast = (type, msg) => {
      setToast({ type, msg });
      setTimeout(() => setToast(null), 4e3);
    };
    const handleApply = async () => {
      if (!file || busy) return;
      setBusy(true);
      setResult(null);
      try {
        const text = await file.text();
        let parsed;
        try {
          parsed = JSON.parse(text);
        } catch {
          showToast("err", "Invalid JSON file. Please select a valid backup file.");
          return;
        }
        const filters = Array.isArray(parsed) ? parsed : Array.isArray(parsed == null ? void 0 : parsed.filters) ? parsed.filters : null;
        if (!filters) {
          showToast("err", 'Unrecognised backup format. Expected a file exported via "Export to backup".');
          return;
        }
        const res = await (0, import_bridge5.invoke)("importFromBackup", { filters, importType });
        setResult(res);
        showToast("ok", `Imported ${res.imported} filter${res.imported !== 1 ? "s" : ""} successfully`);
        setFile(null);
      } catch (e) {
        console.error("ImportPage apply error", e);
        showToast("err", "Import failed. Please try again.");
      } finally {
        setBusy(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { background: "#fff", minHeight: "100%" }, onClick: () => {
    }, children: [
      toast2 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Toast2, { type: toast2.type, msg: toast2.msg }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: "flex", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #dfe1e6" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "#172b4d" }, children: "Import from backup" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { padding: "12px 24px 12px", borderBottom: "1px solid #f0f1f3", background: "#fffbef" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 13, fontWeight: 600, color: "#172b4d", minWidth: 90 }, children: "Import type" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Dropdown2, { options: IMPORT_TYPES, value: importType, onChange: setImportType }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              onClick: handleApply,
              disabled: !file || busy,
              style: {
                padding: "6px 16px",
                background: file && !busy ? "#0052cc" : "#f4f5f7",
                color: file && !busy ? "#fff" : "#97a0af",
                border: "none",
                borderRadius: 3,
                fontSize: 14,
                fontWeight: 500,
                cursor: file && !busy ? "pointer" : "not-allowed"
              },
              children: busy ? "Importing\u2026" : "Apply"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { style: { fontSize: 13, color: "#6b778c", margin: 0 }, children: [
          "Choose a backup file to import. You can create backups using the",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              onClick: () => navigate("/bulk"),
              style: { background: "none", border: "none", color: "#0052cc", cursor: "pointer", fontSize: 13, padding: 0, fontWeight: 600 },
              children: "Export to backup"
            }
          ),
          " ",
          "bulk operation."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { padding: "24px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FileDropZone, { file, onFile: setFile }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ResultsSummary, { result })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { padding: "0 24px 28px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          onClick: () => navigate("/"),
          style: {
            background: "none",
            border: "1.5px solid #dfe1e6",
            borderRadius: 3,
            padding: "6px 14px",
            fontSize: 14,
            cursor: "pointer",
            color: "#42526e"
          },
          children: "\u2190 Back to Rich Filters"
        }
      ) })
    ] });
  }

  // ui/app/pages/ConfigPage.jsx
  var import_react9 = __toESM(require_react());
  var import_bridge6 = __toESM(require_out3());
  var import_jsx_runtime8 = __toESM(require_jsx_runtime());
  var DEFAULT_CONFIG = {
    whoCanCreate: ["All logged-in users"],
    whoCanManage: ["Jira admins"],
    whoCanBulkOps: ["Jira admins"],
    whoCanExport: ["Anyone"]
  };
  function Toast3({ type, msg }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: {
      position: "fixed",
      top: 14,
      right: 14,
      zIndex: 1e3,
      padding: "11px 16px",
      borderRadius: 4,
      fontSize: 14,
      boxShadow: "0 4px 12px rgba(9,30,66,.2)",
      background: type === "ok" ? "#e3fcef" : "#ffebe6",
      color: type === "ok" ? "#006644" : "#bf2600",
      border: `1px solid ${type === "ok" ? "#abf5d1" : "#ff8f73"}`,
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 220
    }, children: [
      type === "ok" ? "\u2713" : "\u26A0",
      " ",
      msg
    ] });
  }
  function Tag({ label, onRemove }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "#e9f2ff",
      border: "1px solid #b3d4ff",
      borderRadius: 3,
      padding: "2px 6px 2px 8px",
      fontSize: 13,
      color: "#0052cc",
      fontWeight: 500,
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { fontSize: 13, color: "#0052cc", marginRight: 2 }, children: "\u{1F465}" }),
      label,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: onRemove,
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#5a7fa8",
            fontSize: 14,
            lineHeight: 1,
            padding: "0 0 1px 2px",
            display: "flex",
            alignItems: "center"
          },
          title: `Remove ${label}`,
          children: "\xD7"
        }
      )
    ] });
  }
  function GroupPicker({ value, onChange, id }) {
    const [query, setQuery] = (0, import_react9.useState)("");
    const [suggestions, setSuggestions] = (0, import_react9.useState)([]);
    const [open, setOpen] = (0, import_react9.useState)(false);
    const [loading, setLoading] = (0, import_react9.useState)(false);
    const inputRef = (0, import_react9.useRef)(null);
    const containerRef = (0, import_react9.useRef)(null);
    const debounceRef = (0, import_react9.useRef)(null);
    (0, import_react9.useEffect)(() => {
      const handler = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);
    const fetchGroups = (0, import_react9.useCallback)(async (q2) => {
      setLoading(true);
      try {
        const groups = await (0, import_bridge6.invoke)("searchJiraGroups", { query: q2 });
        const selectedSet = new Set(value.map((v) => v.toLowerCase()));
        setSuggestions((groups || []).filter((g) => !selectedSet.has(g.toLowerCase())));
        setOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, [value]);
    (0, import_react9.useEffect)(() => {
      clearTimeout(debounceRef.current);
      if (!query.trim()) return;
      debounceRef.current = setTimeout(() => fetchGroups(query.trim()), 300);
      return () => clearTimeout(debounceRef.current);
    }, [query]);
    const addGroup = (g) => {
      var _a;
      if (!value.includes(g)) onChange([...value, g]);
      setQuery("");
      setSuggestions([]);
      setOpen(false);
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    };
    const removeGroup = (g) => onChange(value.filter((v) => v !== g));
    const clearAll = () => onChange([]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && query.trim()) {
        addGroup(query.trim());
      }
      if (e.key === "Backspace" && !query && value.length > 0) {
        removeGroup(value[value.length - 1]);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { ref: containerRef, style: { position: "relative", flex: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "div",
        {
          onClick: () => {
            var _a;
            return (_a = inputRef.current) == null ? void 0 : _a.focus();
          },
          style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 5,
            padding: "5px 36px 5px 8px",
            position: "relative",
            border: "1.5px solid #dfe1e6",
            borderRadius: 3,
            background: "#fff",
            minHeight: 38,
            cursor: "text"
          },
          children: [
            value.map((g) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tag, { label: g, onRemove: () => removeGroup(g) }, g)),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "input",
              {
                ref: inputRef,
                id,
                value: query,
                onChange: (e) => {
                  const v = e.target.value;
                  setQuery(v);
                  if (!v.trim()) fetchGroups("");
                },
                onKeyDown: handleKeyDown,
                onFocus: () => fetchGroups(query.trim()),
                placeholder: value.length === 0 ? "Select groups\u2026" : "",
                style: {
                  border: "none",
                  outline: "none",
                  fontSize: 13,
                  flex: 1,
                  minWidth: 80,
                  background: "transparent",
                  padding: "2px 0"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { position: "absolute", right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", gap: 2, paddingRight: 6 }, children: [
              value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    clearAll();
                  },
                  title: "Clear selection",
                  style: { background: "none", border: "none", cursor: "pointer", color: "#97a0af", fontSize: 16, lineHeight: 1, padding: "0 2px" },
                  children: "\xD7"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { color: "#97a0af", fontSize: 10 }, children: "\u25BE" })
            ] })
          ]
        }
      ),
      open && (loading || suggestions.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: {
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 300,
        background: "#fff",
        border: "1px solid #dfe1e6",
        borderRadius: 4,
        boxShadow: "0 4px 16px rgba(9,30,66,.15)",
        marginTop: 2,
        maxHeight: 240,
        overflowY: "auto"
      }, children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { padding: "10px 14px", fontSize: 13, color: "#6b778c" }, children: "Searching\u2026" }),
        !loading && suggestions.map((g) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "button",
          {
            onMouseDown: (e) => {
              e.preventDefault();
              addGroup(g);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              width: "100%",
              padding: "9px 14px",
              background: "none",
              border: "none",
              fontSize: 13,
              cursor: "pointer",
              textAlign: "left",
              color: "#172b4d"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { fontSize: 13 }, children: "\u{1F465}" }),
              g,
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { fontSize: 11, color: "#97a0af", marginLeft: 4 }, children: "(group)" })
            ]
          },
          g
        )),
        !loading && suggestions.length === 0 && query && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { padding: "9px 14px", fontSize: 13, color: "#6b778c" }, children: [
          'No groups found. Press Enter to add "',
          query,
          '" as a custom group.'
        ] })
      ] })
    ] });
  }
  function PermissionSection({ title, description, fieldLabel, helpText, value, onChange, fieldId }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontSize: 16, fontWeight: 700, color: "#172b4d", marginBottom: 8 }, children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontSize: 13, color: "#42526e", marginBottom: 14, lineHeight: 1.6 }, children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", alignItems: "flex-start", gap: 16 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "label",
          {
            htmlFor: fieldId,
            style: { fontSize: 13, color: "#172b4d", fontWeight: 500, minWidth: 180, paddingTop: 10 },
            children: fieldLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GroupPicker, { id: fieldId, value, onChange }),
          helpText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontSize: 12, color: "#6b778c", marginTop: 5 }, children: helpText })
        ] })
      ] })
    ] });
  }
  function PermissionsTab({ config, onChange, onSave, saving }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { padding: "24px 28px", maxWidth: 860 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PermissionSection,
        {
          title: "Creating rich filters",
          description: "Here you can choose which logged-in users are allowed to create new rich filters (to modify who is allowed to edit an existing rich filter, use the Administrators setting on the rich filter's Details configuration screen).",
          fieldLabel: "Who can create rich filters:",
          helpText: "Select one or several groups. Clear the selection to allow all logged-in users to create rich filters.",
          value: config.whoCanCreate,
          onChange: (v) => onChange("whoCanCreate", v),
          fieldId: "whoCanCreate"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PermissionSection,
        {
          title: "Managing rich filters",
          description: "Here you can choose which logged-in users are implicit administrators of all the rich filter objects. Implicit administrators can edit or delete any rich filter, even if they are not explicitly selected as administrators of the rich filter.",
          fieldLabel: "Who can manage all rich filters:",
          helpText: "Select one or several groups, in addition to Jira admins. Clear the selection to allow only Jira admins to manage all the rich filters (this is the default).",
          value: config.whoCanManage,
          onChange: (v) => onChange("whoCanManage", v),
          fieldId: "whoCanManage"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PermissionSection,
        {
          title: "Bulk operations on rich filters",
          description: "Here you can choose which logged-in users are allowed to perform bulk operations on rich filters. Authorized users can only perform bulk operations on the rich filters for which they have the admin permission.",
          fieldLabel: "Who can execute bulk ops:",
          helpText: "Select one or several groups, in addition to Jira admins. Clear the selection to allow only Jira admins to execute bulk operations on rich filters (this is the default).",
          value: config.whoCanBulkOps,
          onChange: (v) => onChange("whoCanBulkOps", v),
          fieldId: "whoCanBulkOps"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PermissionSection,
        {
          title: "Exporting rich filter gadget results",
          description: "Here you can choose which users are allowed to export results displayed by rich filter gadgets (applies to all export types \u2014 PDF, Excel, CSV). Authorized users can only export results they have access to, i.e. results they can actually see in dashboards. If Anyone is selected, this also applies to non-logged-in (anonymous) users, who will be able to see and export only public issues.",
          fieldLabel: "Who can export results:",
          helpText: "Select one or several groups. Clear the selection to allow anyone to export results.",
          value: config.whoCanExport,
          onChange: (v) => onChange("whoCanExport", v),
          fieldId: "whoCanExport"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { borderTop: "1px solid #f0f1f3", paddingTop: 20, display: "flex", gap: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: onSave,
          disabled: saving,
          style: {
            padding: "7px 18px",
            background: saving ? "#f4f5f7" : "#0052cc",
            color: saving ? "#97a0af" : "#fff",
            border: "none",
            borderRadius: 3,
            fontSize: 14,
            fontWeight: 500,
            cursor: saving ? "not-allowed" : "pointer"
          },
          children: saving ? "Saving\u2026" : "Save"
        }
      ) })
    ] });
  }
  function DeleteAllAppDataTab({ onDelete, deleting }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { padding: "24px 28px", maxWidth: 760 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { style: { fontSize: 14, color: "#172b4d", lineHeight: 1.7, marginBottom: 14 }, children: [
        "On this screen you can initiate the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "permanent deletion of all your data" }),
        " in the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("em", { children: "Rich Filters for Jira Dashboards" }),
        " app for this Jira instance. This covers the rich filter objects and the permissions configured in the app. Dashboards and gadgets that use rich filters are not stored in the app but directly in Jira, so they will not be deleted by this operation. These gadgets will however stop working, since the rich filters they rely on will no longer exist."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontSize: 14, color: "#172b4d", lineHeight: 1.7, marginBottom: 14 }, children: "For security reasons, the data will not be deleted immediately but only after a one-week delay. During this time the deletion can be aborted on this page by any Jira admin." }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontSize: 14, color: "#172b4d", lineHeight: 1.7, marginBottom: 14 }, children: "The app cannot be used while the deletion is pending. It becomes usable again after the deletion is completed or aborted." }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontSize: 14, color: "#172b4d", lineHeight: 1.7, marginBottom: 24 }, children: "The data deletion does not uninstall the app. You can uninstall the app at any time. An initiated deletion will be completed even if you uninstall the app while the deletion is pending." }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "12px 16px",
        background: "#fffbeb",
        border: "1px solid #ffe58f",
        borderRadius: 4,
        marginBottom: 24
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { fontSize: 18, flexShrink: 0 }, children: "\u26A0\uFE0F" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { margin: 0, fontSize: 14, color: "#7d5f00", lineHeight: 1.6 }, children: "Once the deletion is completed, it will be impossible to recover the data." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: onDelete,
          disabled: deleting,
          style: {
            padding: "8px 20px",
            background: deleting ? "#f4f5f7" : "#ffc400",
            color: deleting ? "#97a0af" : "#172b4d",
            border: "none",
            borderRadius: 3,
            fontSize: 14,
            fontWeight: 600,
            cursor: deleting ? "not-allowed" : "pointer",
            boxShadow: deleting ? "none" : "0 1px 3px rgba(0,0,0,.15)"
          },
          children: deleting ? "Deleting\u2026" : "Delete all app data"
        }
      )
    ] });
  }
  var TABS2 = [
    { id: "permissions", label: "Permissions" },
    { id: "deleteAppData", label: "Delete all app data" }
  ];
  function ConfigPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = (0, import_react9.useState)("permissions");
    const [config, setConfig] = (0, import_react9.useState)(DEFAULT_CONFIG);
    const [loading, setLoading] = (0, import_react9.useState)(true);
    const [saving, setSaving] = (0, import_react9.useState)(false);
    const [deleting, setDeleting] = (0, import_react9.useState)(false);
    const [toast2, setToast] = (0, import_react9.useState)(null);
    const showToast = (type, msg) => {
      setToast({ type, msg });
      setTimeout(() => setToast(null), 4e3);
    };
    (0, import_react9.useEffect)(() => {
      (0, import_bridge6.invoke)("getAppConfig").then((saved) => {
        if (saved) setConfig({ ...DEFAULT_CONFIG, ...saved });
      }).catch(() => {
      }).finally(() => setLoading(false));
    }, []);
    const handleConfigChange = (0, import_react9.useCallback)((field, value) => {
      setConfig((prev) => ({ ...prev, [field]: value }));
    }, []);
    const handleSave = async () => {
      setSaving(true);
      try {
        await (0, import_bridge6.invoke)("saveAppConfig", { config });
        showToast("ok", "Configuration saved");
      } catch (e) {
        console.error("ConfigPage save error", e);
        showToast("err", "Failed to save. Please try again.");
      } finally {
        setSaving(false);
      }
    };
    const handleDeleteAll = async () => {
      if (!window.confirm(
        "Are you sure you want to permanently delete ALL app data?\n\nThis includes all rich filters, archived filters, trashed filters, and settings.\n\nThis action cannot be undone."
      )) return;
      setDeleting(true);
      try {
        await (0, import_bridge6.invoke)("deleteAllAppData");
        showToast("ok", "All app data has been deleted");
        setConfig(DEFAULT_CONFIG);
      } catch (e) {
        console.error("ConfigPage deleteAll error", e);
        showToast("err", "Deletion failed. Please try again.");
      } finally {
        setDeleting(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { background: "#fff", minHeight: "100%" }, children: [
      toast2 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Toast3, { type: toast2.type, msg: toast2.msg }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { padding: "16px 24px", borderBottom: "1px solid #dfe1e6" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "#172b4d" }, children: "App configuration" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { display: "flex", borderBottom: "2px solid #dfe1e6", padding: "0 24px", background: "#fff" }, children: TABS2.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          style: {
            padding: "10px 16px",
            background: "none",
            border: "none",
            borderBottom: `3px solid ${activeTab === tab.id ? "#0052cc" : "transparent"}`,
            marginBottom: -2,
            cursor: "pointer",
            fontSize: 14,
            color: activeTab === tab.id ? "#0052cc" : "#42526e",
            fontWeight: activeTab === tab.id ? 600 : 400,
            whiteSpace: "nowrap"
          },
          children: tab.label
        },
        tab.id
      )) }),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { padding: 60, textAlign: "center", color: "#6b778c" }, children: "Loading\u2026" }) : activeTab === "permissions" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PermissionsTab,
        {
          config,
          onChange: handleConfigChange,
          onSave: handleSave,
          saving
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DeleteAllAppDataTab, { onDelete: handleDeleteAll, deleting }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { padding: "0 28px 28px" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: () => navigate("/"),
          style: {
            background: "none",
            border: "1.5px solid #dfe1e6",
            borderRadius: 3,
            padding: "6px 14px",
            fontSize: 14,
            cursor: "pointer",
            color: "#42526e"
          },
          children: "\u2190 Back to Rich Filters"
        }
      ) })
    ] });
  }

  // ui/app/AppShell.jsx
  var import_jsx_runtime9 = __toESM(require_jsx_runtime());
  function AppShell() {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(HashRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Routes, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ContentPage, { route: "home" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/create", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ContentPage, { route: "create" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/edit/:id", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ContentPage, { route: "edit" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/get-started", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PlaceholderPage, { title: "Get Started", icon: "\u{1F680}", desc: "Learn how to create and configure Rich Filters to display your Jira issues exactly how you need." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/trash", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TrashPage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/archive", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ArchivePage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/bulk", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BulkOpsPage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/import", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ImportPage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "/config", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ConfigPage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Route, { path: "*", element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Navigate, { to: "/", replace: true }) })
    ] }) }) });
  }

  // ui/app/main.jsx
  var import_jsx_runtime10 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("app")).render(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AppShell, {}));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.23.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.30.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.30.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
