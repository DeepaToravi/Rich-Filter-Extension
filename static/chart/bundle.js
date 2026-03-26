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
  var __copyProps = (to2, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to2;
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
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
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
  function __spreadArray(to2, from2, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
    return to2.concat(ar || Array.prototype.slice.call(from2));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
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
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
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
        return new Promise(function(resolve2, reject) {
          v = o[n](v), settle(resolve2, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve2, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve2({ value: v2, done: d });
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
      var isArray2 = Array.isArray;
      module.exports = isArray2;
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
      var isArray2 = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray2(value)) {
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
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject2;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject2 = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction2;
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
        var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid2 ? "Symbol(src)_1." + uid2 : "";
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
      var isFunction2 = require_isFunction();
      var isMasked = require_isMasked();
      var isObject2 = require_isObject();
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
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
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
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
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
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq2;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq2 = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
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
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
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
        var data = this.__data__, index2 = assocIndexOf(data, key);
        return index2 < 0 ? void 0 : data[index2][1];
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
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
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
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
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
      function getMapData(map3, key) {
        var data = map3.__data__;
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
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
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
        var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index2 < length) {
          result[index2] = iteratee(array[index2], index2, array);
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
      var isArray2 = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY2 = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
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
      var isArray2 = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray2(value)) {
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
      var INFINITY2 = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
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
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object : void 0;
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
      var isObject2 = (value) => {
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
          if (!isObject2(value) || visited.has(value)) {
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
        return new Promise((resolve2, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve2(reader.result);
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
      var wrapCallback = (callback2) => {
        return (payload) => {
          let newPayload = payload;
          if ((0, serialiseBlob_1.containsSerialisedBlobs)(payload)) {
            newPayload = (0, serialiseBlob_1.deserialiseBlobsInPayload)(payload);
          }
          return callback2(newPayload);
        };
      };
      var emit = async (event, payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsBlobs)(payload)) {
          newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
        }
        return callBridge("emit", { event, payload: newPayload });
      };
      var on = (event, callback2) => {
        return callBridge("on", { event, callback: wrapCallback(callback2) });
      };
      var emitPublic = async (event, payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsBlobs)(payload)) {
          newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
        }
        return callBridge("emitPublic", { event, payload: newPayload });
      };
      var onPublic = (event, callback2) => {
        return callBridge("onPublic", { event, callback: wrapCallback(callback2) });
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
      function parse2(uuid) {
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
      var _default = parse2;
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
      function v35(name, version2, hashfunc) {
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
          bytes[6] = bytes[6] & 15 | version2;
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
          const hex2 = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex2);
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
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
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
      function version2(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version2;
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
        }), settings = {}, timer = null, defaults2 = Object.freeze({
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
            function warning() {
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
                warning,
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
        function isNumber2(value) {
          return typeof value === "number";
        }
        function setupIFrame(iframe, options) {
          function setLimits() {
            function addStyle(style) {
              var styleValue = settings[iframeId][style];
              if (Infinity !== styleValue && 0 !== styleValue) {
                iframe.style[style] = isNumber2(styleValue) ? styleValue + "px" : styleValue;
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
            var id = options && options.id || defaults2.id + count++;
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
            function createDestroyObserver(MutationObserver3) {
              if (!iframe.parentNode) {
                return null;
              }
              var destroyObserver2 = new MutationObserver3(function(mutations) {
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
            var MutationObserver2 = getMutationObserver();
            if (MutationObserver2) {
              destroyObserver = createDestroyObserver(MutationObserver2);
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
            for (var option in defaults2) {
              if (Object.prototype.hasOwnProperty.call(defaults2, option)) {
                settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
                  options2,
                  option
                ) ? options2[option] : defaults2[option];
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
            }, observer = new MutationObserver2(mutationObserved);
            observer.observe(target, config);
          }
          var MutationObserver2 = getMutationObserver();
          if (MutationObserver2) {
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
              function init2(index2, element) {
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
        function noop2() {
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
          window.addEventListener("test", noop2, options);
          window.removeEventListener("test", noop2, options);
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
            getPageInfo: function getPageInfoF(callback2) {
              if ("function" === typeof callback2) {
                onPageInfo = callback2;
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
                elements2.push(element);
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
            elements2.splice(elements2.indexOf(element), 1);
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
            observer = new MutationObserver2(mutationObserved);
            log("Create body MutationObserver");
            observer.observe(target2, config);
            return observer;
          }
          var elements2 = [], MutationObserver2 = window.MutationObserver || window.WebKitMutationObserver, observer = createMutationObserver();
          return {
            disconnect: function() {
              if ("disconnect" in observer) {
                log("Disconnect body MutationObserver");
                observer.disconnect();
                elements2.forEach(removeImageLoadListener);
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
        function getComputedStyle3(prop, el) {
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
        function getMaxElement(side, elements2) {
          var elementsLength = elements2.length, elVal = 0, maxVal = 0, Side = capitalizeFirstLetter(side), timer = Date.now();
          for (var i = 0; i < elementsLength; i++) {
            elVal = elements2[i].getBoundingClientRect()[side] + getComputedStyle3("margin" + Side, elements2[i]);
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
          var elements2 = document.querySelectorAll("[" + tag + "]");
          if (elements2.length === 0) noTaggedElementsFound();
          return getMaxElement(side, elements2);
        }
        function getAllElements() {
          return document.querySelectorAll("body *");
        }
        var getHeight = {
          bodyOffset: function getBodyOffsetHeight() {
            return document.body.offsetHeight + getComputedStyle3("marginTop") + getComputedStyle3("marginBottom");
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
      var noop2 = () => {
      };
      var Modal = class {
        constructor(opts) {
          var _a, _b;
          this.resource = (opts === null || opts === void 0 ? void 0 : opts.resource) || null;
          this.onClose = (opts === null || opts === void 0 ? void 0 : opts.onClose) || noop2;
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
      var subscribe = (channel, callback2, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback2,
          options
        });
      };
      var publishGlobal = (channel, payload, options) => {
        return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options, isGlobal: true });
      };
      var subscribeGlobal = (channel, callback2, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback2,
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
        const blobs = objects.map((obj, index2) => {
          if (obj instanceof Blob) {
            return obj;
          }
          const isBase64Object = obj && typeof obj === "object" && "data" in obj && typeof obj.data === "string";
          if (!isBase64Object) {
            throw new errors_1.BridgeAPIError(`Invalid object type at index ${index2}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`);
          }
          try {
            return base64ToBlob(obj.data, obj.mimeType);
          } catch (e) {
            throw new errors_1.BridgeAPIError(`Invalid base64 data at index ${index2}. The data string must be valid base64 encoded.`);
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
        blobs.forEach((blob, index2) => {
          const metadata = allObjectMetadata[index2];
          checksumToBlobMap.set(metadata.checksum, blob);
          checksumToIndexMap.set(metadata.checksum, index2);
        });
        const uploadPromises = Object.entries(presignedURLsToObjectMetadata).map(([presignedUrl, metadata]) => {
          const { key, checksum } = metadata;
          const object = checksumToBlobMap.get(checksum);
          const index2 = checksumToIndexMap.get(checksum);
          if (index2 === void 0) {
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
              index: index2
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
          return { promise: uploadPromise, index: index2, objectType: object.type, objectSize: object.size };
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

  // ui/chart/app.js
  var import_bridge = __toESM(require_out3());

  // node_modules/@kurkle/color/dist/color.esm.js
  function round(v) {
    return v + 0.5 | 0;
  }
  var lim = (v, l, h) => Math.max(Math.min(v, h), l);
  function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
  }
  function n2b(v) {
    return lim(round(v * 255), 0, 255);
  }
  function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
  }
  function n2p(v) {
    return lim(round(v * 100), 0, 100);
  }
  var map$1 = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  var hex = [..."0123456789ABCDEF"];
  var h1 = (b) => hex[b & 15];
  var h2 = (b) => hex[(b & 240) >> 4] + hex[b & 15];
  var eq = (b) => (b & 240) >> 4 === (b & 15);
  var isShort = (v) => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
  function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
      if (len === 4 || len === 5) {
        ret = {
          r: 255 & map$1[str[1]] * 17,
          g: 255 & map$1[str[2]] * 17,
          b: 255 & map$1[str[3]] * 17,
          a: len === 5 ? map$1[str[4]] * 17 : 255
        };
      } else if (len === 7 || len === 9) {
        ret = {
          r: map$1[str[1]] << 4 | map$1[str[2]],
          g: map$1[str[3]] << 4 | map$1[str[4]],
          b: map$1[str[5]] << 4 | map$1[str[6]],
          a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
      }
    }
    return ret;
  }
  var alpha = (a, f) => a < 255 ? f(a) : "";
  function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : void 0;
  }
  var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0), f(8), f(4)];
  }
  function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [f(5), f(3), f(1)];
  }
  function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
      i = 1 / (w + b);
      w *= i;
      b *= i;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] *= 1 - w - b;
      rgb[i] += w;
    }
    return rgb;
  }
  function hueValue(r, g, b, d, max) {
    if (r === max) {
      return (g - b) / d + (g < b ? 6 : 0);
    }
    if (g === max) {
      return (b - r) / d + 2;
    }
    return (r - g) / d + 4;
  }
  function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = hueValue(r, g, b, d, max);
      h = h * 60 + 0.5;
    }
    return [h | 0, s || 0, l];
  }
  function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
  }
  function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
  }
  function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
  }
  function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
  }
  function hue(h) {
    return (h % 360 + 360) % 360;
  }
  function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) {
      return;
    }
    if (m[5] !== v) {
      a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    }
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") {
      v = hwb2rgb(h, p1, p2);
    } else if (m[1] === "hsv") {
      v = hsv2rgb(h, p1, p2);
    } else {
      v = hsl2rgb(h, p1, p2);
    }
    return {
      r: v[0],
      g: v[1],
      b: v[2],
      a
    };
  }
  function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
  }
  function hslString(v) {
    if (!v) {
      return;
    }
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
  }
  var map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
  };
  var names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
  };
  function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i, j, k, ok, nk;
    for (i = 0; i < keys.length; i++) {
      ok = nk = keys[i];
      for (j = 0; j < tkeys.length; j++) {
        k = tkeys[j];
        nk = nk.replace(k, map[k]);
      }
      k = parseInt(names$1[ok], 16);
      unpacked[nk] = [k >> 16 & 255, k >> 8 & 255, k & 255];
    }
    return unpacked;
  }
  var names;
  function nameParse(str) {
    if (!names) {
      names = unpack();
      names.transparent = [0, 0, 0, 0];
    }
    const a = names[str.toLowerCase()];
    return a && {
      r: a[0],
      g: a[1],
      b: a[2],
      a: a.length === 4 ? a[3] : 255
    };
  }
  var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) {
      return;
    }
    if (m[7] !== r) {
      const v = +m[7];
      a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
    g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
    b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
    return {
      r,
      g,
      b,
      a
    };
  }
  function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
  }
  var to = (v) => v <= 31308e-7 ? v * 12.92 : Math.pow(v, 1 / 2.4) * 1.055 - 0.055;
  var from = (v) => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  function interpolate(rgb1, rgb2, t) {
    const r = from(b2n(rgb1.r));
    const g = from(b2n(rgb1.g));
    const b = from(b2n(rgb1.b));
    return {
      r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
      g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
      b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
      a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
  }
  function modHSL(v, i, ratio) {
    if (v) {
      let tmp = rgb2hsl(v);
      tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
      tmp = hsl2rgb(tmp);
      v.r = tmp[0];
      v.g = tmp[1];
      v.b = tmp[2];
    }
  }
  function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
  }
  function fromObject(input) {
    var v = { r: 0, g: 0, b: 0, a: 255 };
    if (Array.isArray(input)) {
      if (input.length >= 3) {
        v = { r: input[0], g: input[1], b: input[2], a: 255 };
        if (input.length > 3) {
          v.a = n2b(input[3]);
        }
      }
    } else {
      v = clone(input, { r: 0, g: 0, b: 0, a: 1 });
      v.a = n2b(v.a);
    }
    return v;
  }
  function functionParse(str) {
    if (str.charAt(0) === "r") {
      return rgbParse(str);
    }
    return hueParse(str);
  }
  var Color = class _Color {
    constructor(input) {
      if (input instanceof _Color) {
        return input;
      }
      const type = typeof input;
      let v;
      if (type === "object") {
        v = fromObject(input);
      } else if (type === "string") {
        v = hexParse(input) || nameParse(input) || functionParse(input);
      }
      this._rgb = v;
      this._valid = !!v;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var v = clone(this._rgb);
      if (v) {
        v.a = b2n(v.a);
      }
      return v;
    }
    set rgb(obj) {
      this._rgb = fromObject(obj);
    }
    rgbString() {
      return this._valid ? rgbString(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? hexString(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? hslString(this._rgb) : void 0;
    }
    mix(color2, weight) {
      if (color2) {
        const c1 = this.rgb;
        const c2 = color2.rgb;
        let w2;
        const p = weight === w2 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = c1.a - c2.a;
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        w2 = 1 - w1;
        c1.r = 255 & w1 * c1.r + w2 * c2.r + 0.5;
        c1.g = 255 & w1 * c1.g + w2 * c2.g + 0.5;
        c1.b = 255 & w1 * c1.b + w2 * c2.b + 0.5;
        c1.a = p * c1.a + (1 - p) * c2.a;
        this.rgb = c1;
      }
      return this;
    }
    interpolate(color2, t) {
      if (color2) {
        this._rgb = interpolate(this._rgb, color2._rgb, t);
      }
      return this;
    }
    clone() {
      return new _Color(this.rgb);
    }
    alpha(a) {
      this._rgb.a = n2b(a);
      return this;
    }
    clearer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 - ratio;
      return this;
    }
    greyscale() {
      const rgb = this._rgb;
      const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
      rgb.r = rgb.g = rgb.b = val;
      return this;
    }
    opaquer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 + ratio;
      return this;
    }
    negate() {
      const v = this._rgb;
      v.r = 255 - v.r;
      v.g = 255 - v.g;
      v.b = 255 - v.b;
      return this;
    }
    lighten(ratio) {
      modHSL(this._rgb, 2, ratio);
      return this;
    }
    darken(ratio) {
      modHSL(this._rgb, 2, -ratio);
      return this;
    }
    saturate(ratio) {
      modHSL(this._rgb, 1, ratio);
      return this;
    }
    desaturate(ratio) {
      modHSL(this._rgb, 1, -ratio);
      return this;
    }
    rotate(deg) {
      rotate(this._rgb, deg);
      return this;
    }
  };

  // node_modules/chart.js/dist/chunks/helpers.dataset.js
  function noop() {
  }
  var uid = /* @__PURE__ */ (() => {
    let id = 0;
    return () => id++;
  })();
  function isNullOrUndef(value) {
    return value === null || value === void 0;
  }
  function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") {
      return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
  }
  function isNumberFinite(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
  }
  function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
  }
  function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
  }
  var toPercentage = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
  var toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
  function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") {
      return fn.apply(thisArg, args);
    }
  }
  function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
      len = loopable.length;
      if (reverse) {
        for (i = len - 1; i >= 0; i--) {
          fn.call(thisArg, loopable[i], i);
        }
      } else {
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[i], i);
        }
      }
    } else if (isObject(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[keys[i]], keys[i]);
      }
    }
  }
  function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }
    for (i = 0, ilen = a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];
      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }
    return true;
  }
  function clone2(source) {
    if (isArray(source)) {
      return source.map(clone2);
    }
    if (isObject(source)) {
      const target = /* @__PURE__ */ Object.create(null);
      const keys = Object.keys(source);
      const klen = keys.length;
      let k = 0;
      for (; k < klen; ++k) {
        target[keys[k]] = clone2(source[keys[k]]);
      }
      return target;
    }
    return source;
  }
  function isValidKey(key) {
    return [
      "__proto__",
      "prototype",
      "constructor"
    ].indexOf(key) === -1;
  }
  function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      merge(tval, sval, options);
    } else {
      target[key] = clone2(sval);
    }
  }
  function merge(target, source, options) {
    const sources = isArray(source) ? source : [
      source
    ];
    const ilen = sources.length;
    if (!isObject(target)) {
      return target;
    }
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for (let i = 0; i < ilen; ++i) {
      current = sources[i];
      if (!isObject(current)) {
        continue;
      }
      const keys = Object.keys(current);
      for (let k = 0, klen = keys.length; k < klen; ++k) {
        merger(keys[k], target, current, options);
      }
    }
    return target;
  }
  function mergeIf(target, source) {
    return merge(target, source, {
      merger: _mergerIf
    });
  }
  function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = clone2(sval);
    }
  }
  var keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v) => v,
    // default resolvers
    x: (o) => o.x,
    y: (o) => o.y
  };
  function _splitKey(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts) {
      tmp += part;
      if (tmp.endsWith("\\")) {
        tmp = tmp.slice(0, -1) + ".";
      } else {
        keys.push(tmp);
        tmp = "";
      }
    }
    return keys;
  }
  function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj) => {
      for (const k of keys) {
        if (k === "") {
          break;
        }
        obj = obj && obj[k];
      }
      return obj;
    };
  }
  function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
  }
  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  var defined = (value) => typeof value !== "undefined";
  var isFunction = (value) => typeof value === "function";
  var setsEqual = (a, b) => {
    if (a.size !== b.size) {
      return false;
    }
    for (const item of a) {
      if (!b.has(item)) {
        return false;
      }
    }
    return true;
  };
  function _isClickEvent(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
  }
  var PI = Math.PI;
  var TAU = 2 * PI;
  var PITAU = TAU + PI;
  var INFINITY = Number.POSITIVE_INFINITY;
  var RAD_PER_DEG = PI / 180;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  var log10 = Math.log10;
  var sign = Math.sign;
  function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  }
  function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
  }
  function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for (i = 1; i < sqrt; i++) {
      if (value % i === 0) {
        result.push(i);
        result.push(value / i);
      }
    }
    if (sqrt === (sqrt | 0)) {
      result.push(sqrt);
    }
    result.sort((a, b) => a - b).pop();
    return result;
  }
  function isNonPrimitive(n) {
    return typeof n === "symbol" || typeof n === "object" && n !== null && !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n);
  }
  function isNumber(n) {
    return !isNonPrimitive(n) && !isNaN(parseFloat(n)) && isFinite(n);
  }
  function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
  }
  function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for (i = 0, ilen = array.length; i < ilen; i++) {
      value = array[i][property];
      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  }
  function toRadians(degrees) {
    return degrees * (PI / 180);
  }
  function toDegrees(radians) {
    return radians * (180 / PI);
  }
  function _decimalPlaces(x) {
    if (!isNumberFinite(x)) {
      return;
    }
    let e = 1;
    let p = 0;
    while (Math.round(x * e) / e !== x) {
      e *= 10;
      p++;
    }
    return p;
  }
  function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) {
      angle += TAU;
    }
    return {
      angle,
      distance: radialDistanceFromCenter
    };
  }
  function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  }
  function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
  }
  function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
  }
  function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
  }
  function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
  }
  function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
  }
  function _lookup(table, value, cmp) {
    cmp = cmp || ((index2) => table[index2] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while (hi - lo > 1) {
      mid = lo + hi >> 1;
      if (cmp(mid)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return {
      lo,
      hi
    };
  }
  var _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? (index2) => {
    const ti = table[index2][key];
    return ti < value || ti === value && table[index2 + 1][key] === value;
  } : (index2) => table[index2][key] < value);
  var _rlookupByKey = (table, key, value) => _lookup(table, value, (index2) => table[index2][key] >= value);
  function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while (start < end && values[start] < min) {
      start++;
    }
    while (end > start && values[end - 1] > max) {
      end--;
    }
    return start > 0 || end < values.length ? values.slice(start, end) : values;
  }
  var arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
  ];
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }
    Object.defineProperty(array, "_chartjs", {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [
          listener
        ]
      }
    });
    arrayEvents.forEach((key) => {
      const method = "_onData" + _capitalize(key);
      const base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value(...args) {
          const res = base.apply(this, args);
          array._chartjs.listeners.forEach((object) => {
            if (typeof object[method] === "function") {
              object[method](...args);
            }
          });
          return res;
        }
      });
    });
  }
  function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) {
      return;
    }
    const listeners = stub.listeners;
    const index2 = listeners.indexOf(listener);
    if (index2 !== -1) {
      listeners.splice(index2, 1);
    }
    if (listeners.length > 0) {
      return;
    }
    arrayEvents.forEach((key) => {
      delete array[key];
    });
    delete array._chartjs;
  }
  function _arrayUnique(items) {
    const set2 = new Set(items);
    if (set2.size === items.length) {
      return items;
    }
    return Array.from(set2);
  }
  var requestAnimFrame = (function() {
    if (typeof window === "undefined") {
      return function(callback2) {
        return callback2();
      };
    }
    return window.requestAnimationFrame;
  })();
  function throttled(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
      argsToUse = args;
      if (!ticking) {
        ticking = true;
        requestAnimFrame.call(window, () => {
          ticking = false;
          fn.apply(thisArg, argsToUse);
        });
      }
    };
  }
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      if (delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay, args);
      } else {
        fn.apply(this, args);
      }
      return delay;
    };
  }
  var _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
  var _alignStartEnd = (align, start, end) => align === "start" ? start : align === "end" ? end : (start + end) / 2;
  var _textX = (align, left, right, rtl) => {
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
  };
  function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
      const { iScale, vScale, _parsed } = meta;
      const spanGaps = meta.dataset ? meta.dataset.options ? meta.dataset.options.spanGaps : null : null;
      const axis = iScale.axis;
      const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
      if (minDefined) {
        start = Math.min(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, axis, min).lo,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo
        );
        if (spanGaps) {
          const distanceToDefinedLo = _parsed.slice(0, start + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          start -= Math.max(0, distanceToDefinedLo);
        }
        start = _limitValue(start, 0, pointCount - 1);
      }
      if (maxDefined) {
        let end = Math.max(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1
        );
        if (spanGaps) {
          const distanceToDefinedHi = _parsed.slice(end - 1).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          end += Math.max(0, distanceToDefinedHi);
        }
        count = _limitValue(end, start, pointCount) - start;
      } else {
        count = pointCount - start;
      }
    }
    return {
      start,
      count
    };
  }
  function _scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
      xmin: xScale.min,
      xmax: xScale.max,
      ymin: yScale.min,
      ymax: yScale.max
    };
    if (!_scaleRanges) {
      meta._scaleRanges = newRanges;
      return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
  }
  var atEdge = (t) => t === 0 || t === 1;
  var elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
  var elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
  var effects = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => -Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t) => Math.sin(t * HALF_PI),
    easeInOutSine: (t) => -0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t) => atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t) => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic(t) {
      const s = 0.1125;
      const p = 0.45;
      return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack(t) {
      const s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
    easeOutBack(t) {
      const s = 1.70158;
      return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack(t) {
      let s = 1.70158;
      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }
      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t) => 1 - effects.easeOutBounce(1 - t),
    easeOutBounce(t) {
      const m = 7.5625;
      const d = 2.75;
      if (t < 1 / d) {
        return m * t * t;
      }
      if (t < 2 / d) {
        return m * (t -= 1.5 / d) * t + 0.75;
      }
      if (t < 2.5 / d) {
        return m * (t -= 2.25 / d) * t + 0.9375;
      }
      return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t) => t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
  };
  function isPatternOrGradient(value) {
    if (value && typeof value === "object") {
      const type = value.toString();
      return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
  }
  function color(value) {
    return isPatternOrGradient(value) ? value : new Color(value);
  }
  function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new Color(value).saturate(0.5).darken(0.1).hexString();
  }
  var numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
  ];
  var colors = [
    "color",
    "borderColor",
    "backgroundColor"
  ];
  function applyAnimationsDefaults(defaults2) {
    defaults2.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0
    });
    defaults2.describe("animation", {
      _fallback: false,
      _indexable: false,
      _scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults2.set("animations", {
      colors: {
        type: "color",
        properties: colors
      },
      numbers: {
        type: "number",
        properties: numbers
      }
    });
    defaults2.describe("animations", {
      _fallback: "animation"
    });
    defaults2.set("transitions", {
      active: {
        animation: {
          duration: 400
        }
      },
      resize: {
        animation: {
          duration: 0
        }
      },
      show: {
        animations: {
          colors: {
            from: "transparent"
          },
          visible: {
            type: "boolean",
            duration: 0
          }
        }
      },
      hide: {
        animations: {
          colors: {
            to: "transparent"
          },
          visible: {
            type: "boolean",
            easing: "linear",
            fn: (v) => v | 0
          }
        }
      }
    });
  }
  function applyLayoutsDefaults(defaults2) {
    defaults2.set("layout", {
      autoPadding: true,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
  }
  var intlCache = /* @__PURE__ */ new Map();
  function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, options);
      intlCache.set(cacheKey, formatter);
    }
    return formatter;
  }
  function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
  }
  var formatters = {
    values(value) {
      return isArray(value) ? value : "" + value;
    },
    numeric(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const locale = this.chart.options.locale;
      let notation;
      let delta = tickValue;
      if (ticks.length > 1) {
        const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
        if (maxTick < 1e-4 || maxTick > 1e15) {
          notation = "scientific";
        }
        delta = calculateDelta(tickValue, ticks);
      }
      const logDelta = log10(Math.abs(delta));
      const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
      const options = {
        notation,
        minimumFractionDigits: numDecimal,
        maximumFractionDigits: numDecimal
      };
      Object.assign(options, this.options.ticks.format);
      return formatNumber(tickValue, locale, options);
    },
    logarithmic(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const remain = ticks[index2].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
      if ([
        1,
        2,
        3,
        5,
        10,
        15
      ].includes(remain) || index2 > 0.8 * ticks.length) {
        return formatters.numeric.call(this, tickValue, index2, ticks);
      }
      return "";
    }
  };
  function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
      delta = tickValue - Math.floor(tickValue);
    }
    return delta;
  }
  var Ticks = {
    formatters
  };
  function applyScaleDefaults(defaults2) {
    defaults2.set("scale", {
      display: true,
      offset: false,
      reverse: false,
      beginAtZero: false,
      bounds: "ticks",
      clip: true,
      grace: 0,
      grid: {
        display: true,
        lineWidth: 1,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 8,
        tickWidth: (_ctx, options) => options.lineWidth,
        tickColor: (_ctx, options) => options.color,
        offset: false
      },
      border: {
        display: true,
        dash: [],
        dashOffset: 0,
        width: 1
      },
      title: {
        display: false,
        text: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: false,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: true,
        autoSkip: true,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ticks.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: false,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
      }
    });
    defaults2.route("scale.ticks", "color", "", "color");
    defaults2.route("scale.grid", "color", "", "borderColor");
    defaults2.route("scale.border", "color", "", "borderColor");
    defaults2.route("scale.title", "color", "", "color");
    defaults2.describe("scale", {
      _fallback: false,
      _scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
      _indexable: (name) => name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults2.describe("scales", {
      _fallback: "scale"
    });
    defaults2.describe("scale.ticks", {
      _scriptable: (name) => name !== "backdropPadding" && name !== "callback",
      _indexable: (name) => name !== "backdropPadding"
    });
  }
  var overrides = /* @__PURE__ */ Object.create(null);
  var descriptors = /* @__PURE__ */ Object.create(null);
  function getScope$1(node, key) {
    if (!key) {
      return node;
    }
    const keys = key.split(".");
    for (let i = 0, n = keys.length; i < n; ++i) {
      const k = keys[i];
      node = node[k] || (node[k] = /* @__PURE__ */ Object.create(null));
    }
    return node;
  }
  function set(root, scope, values) {
    if (typeof scope === "string") {
      return merge(getScope$1(root, scope), values);
    }
    return merge(getScope$1(root, ""), scope);
  }
  var Defaults = class {
    constructor(_descriptors2, _appliers) {
      this.animation = void 0;
      this.backgroundColor = "rgba(0,0,0,0.1)";
      this.borderColor = "rgba(0,0,0,0.1)";
      this.color = "#666";
      this.datasets = {};
      this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
      this.elements = {};
      this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove"
      ];
      this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      };
      this.hover = {};
      this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
      this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
      this.hoverColor = (ctx, options) => getHoverColor(options.color);
      this.indexAxis = "x";
      this.interaction = {
        mode: "nearest",
        intersect: true,
        includeInvisible: false
      };
      this.maintainAspectRatio = true;
      this.onHover = null;
      this.onClick = null;
      this.parsing = true;
      this.plugins = {};
      this.responsive = true;
      this.scale = void 0;
      this.scales = {};
      this.showLine = true;
      this.drawActiveElementsOnTop = true;
      this.describe(_descriptors2);
      this.apply(_appliers);
    }
    set(scope, values) {
      return set(this, scope, values);
    }
    get(scope) {
      return getScope$1(this, scope);
    }
    describe(scope, values) {
      return set(descriptors, scope, values);
    }
    override(scope, values) {
      return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
      const scopeObject = getScope$1(this, scope);
      const targetScopeObject = getScope$1(this, targetScope);
      const privateName = "_" + name;
      Object.defineProperties(scopeObject, {
        [privateName]: {
          value: scopeObject[name],
          writable: true
        },
        [name]: {
          enumerable: true,
          get() {
            const local = this[privateName];
            const target = targetScopeObject[targetName];
            if (isObject(local)) {
              return Object.assign({}, target, local);
            }
            return valueOrDefault(local, target);
          },
          set(value) {
            this[privateName] = value;
          }
        }
      });
    }
    apply(appliers) {
      appliers.forEach((apply) => apply(this));
    }
  };
  var defaults = /* @__PURE__ */ new Defaults({
    _scriptable: (name) => !name.startsWith("on"),
    _indexable: (name) => name !== "events",
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: false,
      _indexable: false
    }
  }, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
  ]);
  function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
  }
  function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }
    if (textWidth > longest) {
      longest = textWidth;
    }
    return longest;
  }
  function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for (i = 0; i < ilen; i++) {
      thing = arrayOfThings[i];
      if (thing !== void 0 && thing !== null && !isArray(thing)) {
        longest = _measureText(ctx, data, gc, longest, thing);
      } else if (isArray(thing)) {
        for (j = 0, jlen = thing.length; j < jlen; j++) {
          nestedThing = thing[j];
          if (nestedThing !== void 0 && nestedThing !== null && !isArray(nestedThing)) {
            longest = _measureText(ctx, data, gc, longest, nestedThing);
          }
        }
      }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
      for (i = 0; i < gcLen; i++) {
        delete data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
    return longest;
  }
  function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  }
  function clearCanvas(canvas, ctx) {
    if (!ctx && !canvas) {
      return;
    }
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  function drawPoint(ctx, options, x, y) {
    drawPointLegend(ctx, options, x, y, null);
  }
  function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
      type = style.toString();
      if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }
    if (isNaN(radius) || radius <= 0) {
      return;
    }
    ctx.beginPath();
    switch (style) {
      // Default includes circle
      default:
        if (w) {
          ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
        } else {
          ctx.arc(x, y, radius, 0, TAU);
        }
        ctx.closePath();
        break;
      case "triangle":
        width = w ? w / 2 : radius;
        ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
        ctx.closePath();
        break;
      case "rectRounded":
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
        ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;
      case "rect":
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          width = w ? w / 2 : size;
          ctx.rect(x - width, y - size, 2 * width, 2 * size);
          break;
        }
        rad += QUARTER_PI;
      /* falls through */
      case "rectRot":
        xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
        ctx.moveTo(x - xOffsetW, y - yOffset);
        ctx.lineTo(x + yOffsetW, y - xOffset);
        ctx.lineTo(x + xOffsetW, y + yOffset);
        ctx.lineTo(x - yOffsetW, y + xOffset);
        ctx.closePath();
        break;
      case "crossRot":
        rad += QUARTER_PI;
      /* falls through */
      case "cross":
        xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
        ctx.moveTo(x - xOffsetW, y - yOffset);
        ctx.lineTo(x + xOffsetW, y + yOffset);
        ctx.moveTo(x + yOffsetW, y - xOffset);
        ctx.lineTo(x - yOffsetW, y + xOffset);
        break;
      case "star":
        xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
        ctx.moveTo(x - xOffsetW, y - yOffset);
        ctx.lineTo(x + xOffsetW, y + yOffset);
        ctx.moveTo(x + yOffsetW, y - xOffset);
        ctx.lineTo(x - yOffsetW, y + xOffset);
        rad += QUARTER_PI;
        xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
        ctx.moveTo(x - xOffsetW, y - yOffset);
        ctx.lineTo(x + xOffsetW, y + yOffset);
        ctx.moveTo(x + yOffsetW, y - xOffset);
        ctx.lineTo(x - yOffsetW, y + xOffset);
        break;
      case "line":
        xOffset = w ? w / 2 : Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        break;
      case "dash":
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
        break;
      case false:
        ctx.closePath();
        break;
    }
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
  }
  function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  }
  function unclipArea(ctx) {
    ctx.restore();
  }
  function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    if (mode === "middle") {
      const midpoint = (previous.x + target.x) / 2;
      ctx.lineTo(midpoint, previous.y);
      ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }
    ctx.lineTo(target.x, target.y);
  }
  function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
  }
  function setRenderOpts(ctx, opts) {
    if (opts.translation) {
      ctx.translate(opts.translation[0], opts.translation[1]);
    }
    if (!isNullOrUndef(opts.rotation)) {
      ctx.rotate(opts.rotation);
    }
    if (opts.color) {
      ctx.fillStyle = opts.color;
    }
    if (opts.textAlign) {
      ctx.textAlign = opts.textAlign;
    }
    if (opts.textBaseline) {
      ctx.textBaseline = opts.textBaseline;
    }
  }
  function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
      const metrics = ctx.measureText(line);
      const left = x - metrics.actualBoundingBoxLeft;
      const right = x + metrics.actualBoundingBoxRight;
      const top = y - metrics.actualBoundingBoxAscent;
      const bottom = y + metrics.actualBoundingBoxDescent;
      const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.lineWidth = opts.decorationWidth || 2;
      ctx.moveTo(left, yDecoration);
      ctx.lineTo(right, yDecoration);
      ctx.stroke();
    }
  }
  function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
  }
  function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
      text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for (i = 0; i < lines.length; ++i) {
      line = lines[i];
      if (opts.backdrop) {
        drawBackdrop(ctx, opts.backdrop);
      }
      if (stroke) {
        if (opts.strokeColor) {
          ctx.strokeStyle = opts.strokeColor;
        }
        if (!isNullOrUndef(opts.strokeWidth)) {
          ctx.lineWidth = opts.strokeWidth;
        }
        ctx.strokeText(line, x, y, opts.maxWidth);
      }
      ctx.fillText(line, x, y, opts.maxWidth);
      decorateText(ctx, x, y, line, opts);
      y += Number(font.lineHeight);
    }
    ctx.restore();
  }
  function addRoundedRectPath(ctx, rect) {
    const { x, y, w, h, radius } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x + radius.topLeft, y);
  }
  var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
  var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function toLineHeight(value, size) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") {
      return size * 1.2;
    }
    value = +matches[2];
    switch (matches[3]) {
      case "px":
        return value;
      case "%":
        value /= 100;
        break;
    }
    return size * value;
  }
  var numberOrZero = (v) => +v || 0;
  function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
    for (const prop of keys) {
      ret[prop] = numberOrZero(read(prop));
    }
    return ret;
  }
  function toTRBL(value) {
    return _readValueToProps(value, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }
  function toTRBLCorners(value) {
    return _readValueToProps(value, [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ]);
  }
  function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
  }
  function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === "string") {
      size = parseInt(size, 10);
    }
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
      console.warn('Invalid font style specified: "' + style + '"');
      style = void 0;
    }
    const font = {
      family: valueOrDefault(options.family, fallback.family),
      lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
      size,
      style,
      weight: valueOrDefault(options.weight, fallback.weight),
      string: ""
    };
    font.string = toFontString(font);
    return font;
  }
  function resolve(inputs, context, index2, info) {
    let cacheable = true;
    let i, ilen, value;
    for (i = 0, ilen = inputs.length; i < ilen; ++i) {
      value = inputs[i];
      if (value === void 0) {
        continue;
      }
      if (context !== void 0 && typeof value === "function") {
        value = value(context);
        cacheable = false;
      }
      if (index2 !== void 0 && isArray(value)) {
        value = value[index2 % value.length];
        cacheable = false;
      }
      if (value !== void 0) {
        if (info && !cacheable) {
          info.cacheable = false;
        }
        return value;
      }
    }
  }
  function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
    return {
      min: keepZero(min, -Math.abs(change)),
      max: keepZero(max, change)
    };
  }
  function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
  }
  function _createResolver(scopes, prefixes = [
    ""
  ], rootScopes, fallback, getTarget = () => scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === "undefined") {
      fallback = _resolve("_fallback", scopes);
    }
    const cache = {
      [Symbol.toStringTag]: "Object",
      _cacheable: true,
      _scopes: scopes,
      _rootScopes: finalRootScopes,
      _fallback: fallback,
      _getTarget: getTarget,
      override: (scope) => _createResolver([
        scope,
        ...scopes
      ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete target._keys;
        delete scopes[0][prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop) {
        return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(scopes[0]);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return getKeysFromAllScopes(target).includes(prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys(target) {
        return getKeysFromAllScopes(target);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        const storage = target._storage || (target._storage = getTarget());
        target[prop] = storage[prop] = value;
        delete target._keys;
        return true;
      }
    });
  }
  function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
      _cacheable: false,
      _proxy: proxy,
      _context: context,
      _subProxy: subProxy,
      _stack: /* @__PURE__ */ new Set(),
      _descriptors: _descriptors(proxy, descriptorDefaults),
      setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
      override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete proxy[prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop, receiver) {
        return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
          enumerable: true,
          configurable: true
        } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(proxy);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return Reflect.has(proxy, prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys() {
        return Reflect.ownKeys(proxy);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        proxy[prop] = value;
        delete target[prop];
        return true;
      }
    });
  }
  function _descriptors(proxy, defaults2 = {
    scriptable: true,
    indexable: true
  }) {
    const { _scriptable = defaults2.scriptable, _indexable = defaults2.indexable, _allKeys = defaults2.allKeys } = proxy;
    return {
      allKeys: _allKeys,
      scriptable: _scriptable,
      indexable: _indexable,
      isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
      isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
    };
  }
  var readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
  var needsSubResolver = (prop, value) => isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
  function _cached(target, prop, resolve2) {
    if (Object.prototype.hasOwnProperty.call(target, prop) || prop === "constructor") {
      return target[prop];
    }
    const value = resolve2();
    target[prop] = value;
    return value;
  }
  function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors2.isScriptable(prop)) {
      value = _resolveScriptable(prop, value, target, receiver);
    }
    if (isArray(value) && value.length) {
      value = _resolveArray(prop, value, target, descriptors2.isIndexable);
    }
    if (needsSubResolver(prop, value)) {
      value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors2);
    }
    return value;
  }
  function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) {
      throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    }
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) {
      value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }
    return value;
  }
  function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    if (typeof _context.index !== "undefined" && isIndexable(prop)) {
      return value[_context.index % value.length];
    } else if (isObject(value[0])) {
      const arr = value;
      const scopes = _proxy._scopes.filter((s) => s !== arr);
      value = [];
      for (const item of arr) {
        const resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
      }
    }
    return value;
  }
  function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
  }
  var getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
  function addScopes(set2, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes) {
      const scope = getScope(key, parent);
      if (scope) {
        set2.add(scope);
        const fallback = resolveFallback(scope._fallback, key, value);
        if (typeof fallback !== "undefined" && fallback !== key && fallback !== parentFallback) {
          return fallback;
        }
      } else if (scope === false && typeof parentFallback !== "undefined" && key !== parentFallback) {
        return null;
      }
    }
    return false;
  }
  function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
      ...parentScopes,
      ...rootScopes
    ];
    const set2 = /* @__PURE__ */ new Set();
    set2.add(value);
    let key = addScopesFromKey(set2, allScopes, prop, fallback || prop, value);
    if (key === null) {
      return false;
    }
    if (typeof fallback !== "undefined" && fallback !== prop) {
      key = addScopesFromKey(set2, allScopes, fallback, key, value);
      if (key === null) {
        return false;
      }
    }
    return _createResolver(Array.from(set2), [
      ""
    ], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
  }
  function addScopesFromKey(set2, allScopes, key, fallback, item) {
    while (key) {
      key = addScopes(set2, allScopes, key, fallback, item);
    }
    return key;
  }
  function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) {
      parent[prop] = {};
    }
    const target = parent[prop];
    if (isArray(target) && isObject(value)) {
      return value;
    }
    return target || {};
  }
  function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes) {
      value = _resolve(readKey(prefix, prop), scopes);
      if (typeof value !== "undefined") {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  }
  function _resolve(key, scopes) {
    for (const scope of scopes) {
      if (!scope) {
        continue;
      }
      const value = scope[key];
      if (typeof value !== "undefined") {
        return value;
      }
    }
  }
  function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) {
      keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }
    return keys;
  }
  function resolveKeysFromAllScopes(scopes) {
    const set2 = /* @__PURE__ */ new Set();
    for (const scope of scopes) {
      for (const key of Object.keys(scope).filter((k) => !k.startsWith("_"))) {
        set2.add(key);
      }
    }
    return Array.from(set2);
  }
  function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale } = meta;
    const { key = "r" } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index2, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index2 = i + start;
      item = data[index2];
      parsed[i] = {
        r: iScale.parse(resolveObjectKey(item, key), index2)
      };
    }
    return parsed;
  }
  var EPSILON = Number.EPSILON || 1e-14;
  var getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
  var getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
  function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01;
    const fb = t * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  }
  function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i = 0; i < pointsLen - 1; ++i) {
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent || !pointAfter) {
        continue;
      }
      if (almostEquals(deltaK[i], 0, EPSILON)) {
        mK[i] = mK[i + 1] = 0;
        continue;
      }
      alphaK = mK[i] / deltaK[i];
      betaK = mK[i + 1] / deltaK[i];
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
      if (squaredMagnitude <= 9) {
        continue;
      }
      tauK = 3 / Math.sqrt(squaredMagnitude);
      mK[i] = alphaK * tauK * deltaK[i];
      mK[i + 1] = betaK * tauK * deltaK[i];
    }
  }
  function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent) {
        continue;
      }
      const iPixel = pointCurrent[indexAxis];
      const vPixel = pointCurrent[valueAxis];
      if (pointBefore) {
        delta = (iPixel - pointBefore[indexAxis]) / 3;
        pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
        pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
      }
      if (pointAfter) {
        delta = (pointAfter[indexAxis] - iPixel) / 3;
        pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
        pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
      }
    }
  }
  function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent) {
        continue;
      }
      if (pointAfter) {
        const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
        deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
      }
      mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
  }
  function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
  }
  function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      inAreaPrev = inArea;
      inArea = inAreaNext;
      inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
      if (!inArea) {
        continue;
      }
      point = points[i];
      if (inAreaPrev) {
        point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
        point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
      }
      if (inAreaNext) {
        point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
        point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
      }
    }
  }
  function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    if (options.spanGaps) {
      points = points.filter((pt) => !pt.skip);
    }
    if (options.cubicInterpolationMode === "monotone") {
      splineCurveMonotone(points, indexAxis);
    } else {
      let prev = loop ? points[points.length - 1] : points[0];
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        point = points[i];
        controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
        point.cp1x = controlPoints.previous.x;
        point.cp1y = controlPoints.previous.y;
        point.cp2x = controlPoints.next.x;
        point.cp2y = controlPoints.next.y;
        prev = point;
      }
    }
    if (options.capBezierPoints) {
      capBezierPoints(points, area);
    }
  }
  function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") {
      parent = parent.host;
    }
    return parent;
  }
  function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
      valueInPixels = parseInt(styleValue, 10);
      if (styleValue.indexOf("%") !== -1) {
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }
    return valueInPixels;
  }
  var getComputedStyle2 = (element) => element.ownerDocument.defaultView.getComputedStyle(element, null);
  function getStyle(el, property) {
    return getComputedStyle2(el).getPropertyValue(property);
  }
  var positions = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for (let i = 0; i < 4; i++) {
      const pos = positions[i];
      result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
  }
  var useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
  function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX, offsetY } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
      x = offsetX;
      y = offsetY;
    } else {
      const rect = canvas.getBoundingClientRect();
      x = source.clientX - rect.left;
      y = source.clientY - rect.top;
      box = true;
    }
    return {
      x,
      y,
      box
    };
  }
  function getRelativePosition(event, chart) {
    if ("native" in event) {
      return event;
    }
    const { canvas, currentDevicePixelRatio } = chart;
    const style = getComputedStyle2(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x, y, box } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart;
    if (borderBox) {
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    return {
      x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
      y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
  }
  function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === void 0 || height === void 0) {
      const container = canvas && _getParentNode(canvas);
      if (!container) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
      } else {
        const rect = container.getBoundingClientRect();
        const containerStyle = getComputedStyle2(container);
        const containerBorder = getPositionedStyle(containerStyle, "border", "width");
        const containerPadding = getPositionedStyle(containerStyle, "padding");
        width = rect.width - containerPadding.width - containerBorder.width;
        height = rect.height - containerPadding.height - containerBorder.height;
        maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
        maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
      }
    }
    return {
      width,
      height,
      maxWidth: maxWidth || INFINITY,
      maxHeight: maxHeight || INFINITY
    };
  }
  var round1 = (v) => Math.round(v * 10) / 10;
  function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle2(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === "content-box") {
      const borders = getPositionedStyle(style, "border", "width");
      const paddings = getPositionedStyle(style, "padding");
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) {
      height = round1(width / 2);
    }
    const maintainHeight = bbWidth !== void 0 || bbHeight !== void 0;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
      height = containerSize.height;
      width = round1(Math.floor(height * aspectRatio));
    }
    return {
      width,
      height
    };
  }
  function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = round1(chart.height * pixelRatio);
    const deviceWidth = round1(chart.width * pixelRatio);
    chart.height = round1(chart.height);
    chart.width = round1(chart.width);
    const canvas = chart.canvas;
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
      canvas.style.height = `${chart.height}px`;
      canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
      chart.currentDevicePixelRatio = pixelRatio;
      canvas.height = deviceHeight;
      canvas.width = deviceWidth;
      chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return true;
    }
    return false;
  }
  var supportsEventListenerOptions = (function() {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      if (_isDomSupported()) {
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
      }
    } catch (e) {
    }
    return passiveSupported;
  })();
  function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : void 0;
  }
  function _pointInLine(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: p1.y + t * (p2.y - p1.y)
    };
  }
  function _steppedInterpolation(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
  }
  function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
      x: p1.cp2x,
      y: p1.cp2y
    };
    const cp2 = {
      x: p2.cp1x,
      y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
  }
  var getRightToLeftAdapter = function(rectX, width) {
    return {
      x(x) {
        return rectX + rectX + width - x;
      },
      setWidth(w) {
        width = w;
      },
      textAlign(align) {
        if (align === "center") {
          return align;
        }
        return align === "right" ? "left" : "right";
      },
      xPlus(x, value) {
        return x - value;
      },
      leftForLtr(x, itemWidth) {
        return x - itemWidth;
      }
    };
  };
  var getLeftToRightAdapter = function() {
    return {
      x(x) {
        return x;
      },
      setWidth(w) {
      },
      textAlign(align) {
        return align;
      },
      xPlus(x, value) {
        return x + value;
      },
      leftForLtr(x, _itemWidth) {
        return x;
      }
    };
  };
  function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
  }
  function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
      style = ctx.canvas.style;
      original = [
        style.getPropertyValue("direction"),
        style.getPropertyPriority("direction")
      ];
      style.setProperty("direction", direction, "important");
      ctx.prevTextDirection = original;
    }
  }
  function restoreTextDirection(ctx, original) {
    if (original !== void 0) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
  }
  function propertyFn(property) {
    if (property === "angle") {
      return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
      };
    }
    return {
      between: _isBetween,
      compare: (a, b) => a - b,
      normalize: (x) => x
    };
  }
  function normalizeSegment({ start, end, count, loop, style }) {
    return {
      start: start % count,
      end: end % count,
      loop: loop && (end - start + 1) % count === 0,
      style
    };
  }
  function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start, end, loop } = segment;
    let i, ilen;
    if (loop) {
      start += count;
      end += count;
      for (i = 0, ilen = count; i < ilen; ++i) {
        if (!between(normalize(points[start % count][property]), startBound, endBound)) {
          break;
        }
        start--;
        end--;
      }
      start %= count;
      end %= count;
    }
    if (end < start) {
      end += count;
    }
    return {
      start,
      end,
      loop,
      style: segment.style
    };
  }
  function _boundSegment(segment, points, bounds) {
    if (!bounds) {
      return [
        segment
      ];
    }
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start, end, loop, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = () => inside || startIsBefore();
    const shouldStop = () => !inside || endIsBefore();
    for (let i = start, prev = start; i <= end; ++i) {
      point = points[i % count];
      if (point.skip) {
        continue;
      }
      value = normalize(point[property]);
      if (value === prevValue) {
        continue;
      }
      inside = between(value, startBound, endBound);
      if (subStart === null && shouldStart()) {
        subStart = compare(value, startBound) === 0 ? i : prev;
      }
      if (subStart !== null && shouldStop()) {
        result.push(normalizeSegment({
          start: subStart,
          end: i,
          loop,
          count,
          style
        }));
        subStart = null;
      }
      prev = i;
      prevValue = value;
    }
    if (subStart !== null) {
      result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
      }));
    }
    return result;
  }
  function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for (let i = 0; i < segments.length; i++) {
      const sub = _boundSegment(segments[i], line.points, bounds);
      if (sub.length) {
        result.push(...sub);
      }
    }
    return result;
  }
  function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) {
      while (start < count && !points[start].skip) {
        start++;
      }
    }
    while (start < count && points[start].skip) {
      start++;
    }
    start %= count;
    if (loop) {
      end += start;
    }
    while (end > start && points[end % count].skip) {
      end--;
    }
    end %= count;
    return {
      start,
      end
    };
  }
  function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for (end = start + 1; end <= max; ++end) {
      const cur = points[end % count];
      if (cur.skip || cur.stop) {
        if (!prev.skip) {
          loop = false;
          result.push({
            start: start % count,
            end: (end - 1) % count,
            loop
          });
          start = last = cur.stop ? end : null;
        }
      } else {
        last = end;
        if (prev.skip) {
          start = end;
        }
      }
      prev = cur;
    }
    if (last !== null) {
      result.push({
        start: start % count,
        end: last % count,
        loop
      });
    }
    return result;
  }
  function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) {
      return [];
    }
    const loop = !!line._loop;
    const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) {
      return splitByStyles(line, [
        {
          start,
          end,
          loop
        }
      ], points, segmentOptions);
    }
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
  }
  function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) {
      return segments;
    }
    return doSplitByStyles(line, segments, points, segmentOptions);
  }
  function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
      const dir = spanGaps ? -1 : 1;
      if (s === e) {
        return;
      }
      s += count;
      while (points[s % count].skip) {
        s -= dir;
      }
      while (points[e % count].skip) {
        e += dir;
      }
      if (s % count !== e % count) {
        result.push({
          start: s % count,
          end: e % count,
          loop: l,
          style: st
        });
        prevStyle = st;
        start = e % count;
      }
    }
    for (const segment of segments) {
      start = spanGaps ? start : segment.start;
      let prev = points[start % count];
      let style;
      for (i = start + 1; i <= segment.end; i++) {
        const pt = points[i % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: "segment",
          p0: prev,
          p1: pt,
          p0DataIndex: (i - 1) % count,
          p1DataIndex: i % count,
          datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start, i - 1, segment.loop, prevStyle);
        }
        prev = pt;
        prevStyle = style;
      }
      if (start < i - 1) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
    }
    return result;
  }
  function readStyle(options) {
    return {
      backgroundColor: options.backgroundColor,
      borderCapStyle: options.borderCapStyle,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderJoinStyle: options.borderJoinStyle,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor
    };
  }
  function styleChanged(style, prevStyle) {
    if (!prevStyle) {
      return false;
    }
    const cache = [];
    const replacer = function(key, value) {
      if (!isPatternOrGradient(value)) {
        return value;
      }
      if (!cache.includes(value)) {
        cache.push(value);
      }
      return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
  }
  function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
  }
  function getDatasetArea(meta, chartArea) {
    const { xScale, yScale } = meta;
    if (xScale && yScale) {
      return {
        left: getSizeForArea(xScale, chartArea, "left"),
        right: getSizeForArea(xScale, chartArea, "right"),
        top: getSizeForArea(yScale, chartArea, "top"),
        bottom: getSizeForArea(yScale, chartArea, "bottom")
      };
    }
    return chartArea;
  }
  function getDatasetClipArea(chart, meta) {
    const clip = meta._clip;
    if (clip.disabled) {
      return false;
    }
    const area = getDatasetArea(meta, chart.chartArea);
    return {
      left: clip.left === false ? 0 : area.left - (clip.left === true ? 0 : clip.left),
      right: clip.right === false ? chart.width : area.right + (clip.right === true ? 0 : clip.right),
      top: clip.top === false ? 0 : area.top - (clip.top === true ? 0 : clip.top),
      bottom: clip.bottom === false ? chart.height : area.bottom + (clip.bottom === true ? 0 : clip.bottom)
    };
  }

  // node_modules/chart.js/dist/chart.js
  var Animator = class {
    constructor() {
      this._request = null;
      this._charts = /* @__PURE__ */ new Map();
      this._running = false;
      this._lastDate = void 0;
    }
    _notify(chart, anims, date, type) {
      const callbacks = anims.listeners[type];
      const numSteps = anims.duration;
      callbacks.forEach((fn) => fn({
        chart,
        initial: anims.initial,
        numSteps,
        currentStep: Math.min(date - anims.start, numSteps)
      }));
    }
    _refresh() {
      if (this._request) {
        return;
      }
      this._running = true;
      this._request = requestAnimFrame.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
    _update(date = Date.now()) {
      let remaining = 0;
      this._charts.forEach((anims, chart) => {
        if (!anims.running || !anims.items.length) {
          return;
        }
        const items = anims.items;
        let i = items.length - 1;
        let draw2 = false;
        let item;
        for (; i >= 0; --i) {
          item = items[i];
          if (item._active) {
            if (item._total > anims.duration) {
              anims.duration = item._total;
            }
            item.tick(date);
            draw2 = true;
          } else {
            items[i] = items[items.length - 1];
            items.pop();
          }
        }
        if (draw2) {
          chart.draw();
          this._notify(chart, anims, date, "progress");
        }
        if (!items.length) {
          anims.running = false;
          this._notify(chart, anims, date, "complete");
          anims.initial = false;
        }
        remaining += items.length;
      });
      this._lastDate = date;
      if (remaining === 0) {
        this._running = false;
      }
    }
    _getAnims(chart) {
      const charts = this._charts;
      let anims = charts.get(chart);
      if (!anims) {
        anims = {
          running: false,
          initial: true,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        };
        charts.set(chart, anims);
      }
      return anims;
    }
    listen(chart, event, cb) {
      this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
      if (!items || !items.length) {
        return;
      }
      this._getAnims(chart).items.push(...items);
    }
    has(chart) {
      return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
      const anims = this._charts.get(chart);
      if (!anims) {
        return;
      }
      anims.running = true;
      anims.start = Date.now();
      anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
      this._refresh();
    }
    running(chart) {
      if (!this._running) {
        return false;
      }
      const anims = this._charts.get(chart);
      if (!anims || !anims.running || !anims.items.length) {
        return false;
      }
      return true;
    }
    stop(chart) {
      const anims = this._charts.get(chart);
      if (!anims || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      for (; i >= 0; --i) {
        items[i].cancel();
      }
      anims.items = [];
      this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
      return this._charts.delete(chart);
    }
  };
  var animator = /* @__PURE__ */ new Animator();
  var transparent = "transparent";
  var interpolators = {
    boolean(from2, to2, factor) {
      return factor > 0.5 ? to2 : from2;
    },
    color(from2, to2, factor) {
      const c0 = color(from2 || transparent);
      const c1 = c0.valid && color(to2 || transparent);
      return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to2;
    },
    number(from2, to2, factor) {
      return from2 + (to2 - from2) * factor;
    }
  };
  var Animation = class {
    constructor(cfg, target, prop, to2) {
      const currentValue = target[prop];
      to2 = resolve([
        cfg.to,
        to2,
        currentValue,
        cfg.from
      ]);
      const from2 = resolve([
        cfg.from,
        currentValue,
        to2
      ]);
      this._active = true;
      this._fn = cfg.fn || interpolators[cfg.type || typeof from2];
      this._easing = effects[cfg.easing] || effects.linear;
      this._start = Math.floor(Date.now() + (cfg.delay || 0));
      this._duration = this._total = Math.floor(cfg.duration);
      this._loop = !!cfg.loop;
      this._target = target;
      this._prop = prop;
      this._from = from2;
      this._to = to2;
      this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(cfg, to2, date) {
      if (this._active) {
        this._notify(false);
        const currentValue = this._target[this._prop];
        const elapsed = date - this._start;
        const remain = this._duration - elapsed;
        this._start = date;
        this._duration = Math.floor(Math.max(remain, cfg.duration));
        this._total += elapsed;
        this._loop = !!cfg.loop;
        this._to = resolve([
          cfg.to,
          to2,
          currentValue,
          cfg.from
        ]);
        this._from = resolve([
          cfg.from,
          currentValue,
          to2
        ]);
      }
    }
    cancel() {
      if (this._active) {
        this.tick(Date.now());
        this._active = false;
        this._notify(false);
      }
    }
    tick(date) {
      const elapsed = date - this._start;
      const duration = this._duration;
      const prop = this._prop;
      const from2 = this._from;
      const loop = this._loop;
      const to2 = this._to;
      let factor;
      this._active = from2 !== to2 && (loop || elapsed < duration);
      if (!this._active) {
        this._target[prop] = to2;
        this._notify(true);
        return;
      }
      if (elapsed < 0) {
        this._target[prop] = from2;
        return;
      }
      factor = elapsed / duration % 2;
      factor = loop && factor > 1 ? 2 - factor : factor;
      factor = this._easing(Math.min(1, Math.max(0, factor)));
      this._target[prop] = this._fn(from2, to2, factor);
    }
    wait() {
      const promises = this._promises || (this._promises = []);
      return new Promise((res, rej) => {
        promises.push({
          res,
          rej
        });
      });
    }
    _notify(resolved) {
      const method = resolved ? "res" : "rej";
      const promises = this._promises || [];
      for (let i = 0; i < promises.length; i++) {
        promises[i][method]();
      }
    }
  };
  var Animations = class {
    constructor(chart, config) {
      this._chart = chart;
      this._properties = /* @__PURE__ */ new Map();
      this.configure(config);
    }
    configure(config) {
      if (!isObject(config)) {
        return;
      }
      const animationOptions = Object.keys(defaults.animation);
      const animatedProps = this._properties;
      Object.getOwnPropertyNames(config).forEach((key) => {
        const cfg = config[key];
        if (!isObject(cfg)) {
          return;
        }
        const resolved = {};
        for (const option of animationOptions) {
          resolved[option] = cfg[option];
        }
        (isArray(cfg.properties) && cfg.properties || [
          key
        ]).forEach((prop) => {
          if (prop === key || !animatedProps.has(prop)) {
            animatedProps.set(prop, resolved);
          }
        });
      });
    }
    _animateOptions(target, values) {
      const newOptions = values.options;
      const options = resolveTargetOptions(target, newOptions);
      if (!options) {
        return [];
      }
      const animations = this._createAnimations(options, newOptions);
      if (newOptions.$shared) {
        awaitAll(target.options.$animations, newOptions).then(() => {
          target.options = newOptions;
        }, () => {
        });
      }
      return animations;
    }
    _createAnimations(target, values) {
      const animatedProps = this._properties;
      const animations = [];
      const running = target.$animations || (target.$animations = {});
      const props = Object.keys(values);
      const date = Date.now();
      let i;
      for (i = props.length - 1; i >= 0; --i) {
        const prop = props[i];
        if (prop.charAt(0) === "$") {
          continue;
        }
        if (prop === "options") {
          animations.push(...this._animateOptions(target, values));
          continue;
        }
        const value = values[prop];
        let animation = running[prop];
        const cfg = animatedProps.get(prop);
        if (animation) {
          if (cfg && animation.active()) {
            animation.update(cfg, value, date);
            continue;
          } else {
            animation.cancel();
          }
        }
        if (!cfg || !cfg.duration) {
          target[prop] = value;
          continue;
        }
        running[prop] = animation = new Animation(cfg, target, prop, value);
        animations.push(animation);
      }
      return animations;
    }
    update(target, values) {
      if (this._properties.size === 0) {
        Object.assign(target, values);
        return;
      }
      const animations = this._createAnimations(target, values);
      if (animations.length) {
        animator.add(this._chart, animations);
        return true;
      }
    }
  };
  function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for (let i = 0; i < keys.length; i++) {
      const anim = animations[keys[i]];
      if (anim && anim.active()) {
        running.push(anim.wait());
      }
    }
    return Promise.all(running);
  }
  function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
      return;
    }
    let options = target.options;
    if (!options) {
      target.options = newOptions;
      return;
    }
    if (options.$shared) {
      target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
      });
    }
    return options;
  }
  function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === void 0 ? allowedOverflow : 0;
    const max = opts.max === void 0 ? allowedOverflow : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }
  function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
      return false;
    }
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start
    };
  }
  function toClip(value) {
    let t, r, b, l;
    if (isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }
    return {
      top: t,
      right: r,
      bottom: b,
      left: l,
      disabled: value === false
    };
  }
  function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      keys.push(metasets[i].index);
    }
    return keys;
  }
  function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) {
      return;
    }
    let found = false;
    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      datasetIndex = +keys[i];
      if (datasetIndex === dsIndex) {
        found = true;
        if (options.all) {
          continue;
        }
        break;
      }
      otherValue = stack.values[datasetIndex];
      if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) {
        value += otherValue;
      }
    }
    if (!found && !options.all) {
      return 0;
    }
    return value;
  }
  function convertObjectDataToArray(data, meta) {
    const { iScale, vScale } = meta;
    const iAxisKey = iScale.axis === "x" ? "x" : "y";
    const vAxisKey = vScale.axis === "x" ? "x" : "y";
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      adata[i] = {
        [iAxisKey]: key,
        [vAxisKey]: data[key]
      };
    }
    return adata;
  }
  function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === void 0 && meta.stack !== void 0;
  }
  function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
  }
  function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
      min: minDefined ? min : Number.NEGATIVE_INFINITY,
      max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
  }
  function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
  }
  function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
      const value = stack[meta.index];
      if (positive && value > 0 || !positive && value < 0) {
        return meta.index;
      }
    }
    return null;
  }
  function updateStacks(controller, parsed) {
    const { chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for (let i = 0; i < ilen; ++i) {
      const item = parsed[i];
      const { [iAxis]: index2, [vAxis]: value } = item;
      const itemStacks = item._stacks || (item._stacks = {});
      stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index2);
      stack[datasetIndex] = value;
      stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
      stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
      const visualValues = stack._visualValues || (stack._visualValues = {});
      visualValues[datasetIndex] = value;
    }
  }
  function getFirstScaleId(chart, axis) {
    const scales2 = chart.scales;
    return Object.keys(scales2).filter((key) => scales2[key].axis === axis).shift();
  }
  function createDatasetContext(parent, index2) {
    return createContext(parent, {
      active: false,
      dataset: void 0,
      datasetIndex: index2,
      index: index2,
      mode: "default",
      type: "dataset"
    });
  }
  function createDataContext(parent, index2, element) {
    return createContext(parent, {
      active: false,
      dataIndex: index2,
      parsed: void 0,
      raw: void 0,
      element,
      index: index2,
      mode: "default",
      type: "data"
    });
  }
  function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
      return;
    }
    items = items || meta._parsed;
    for (const parsed of items) {
      const stacks = parsed._stacks;
      if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) {
        return;
      }
      delete stacks[axis][datasetIndex];
      if (stacks[axis]._visualValues !== void 0 && stacks[axis]._visualValues[datasetIndex] !== void 0) {
        delete stacks[axis]._visualValues[datasetIndex];
      }
    }
  }
  var isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
  var cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
  var createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
    keys: getSortedDatasetIndices(chart, true),
    values: null
  };
  var DatasetController = class {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex) {
      this.chart = chart;
      this._ctx = chart.ctx;
      this.index = datasetIndex;
      this._cachedDataOpts = {};
      this._cachedMeta = this.getMeta();
      this._type = this._cachedMeta.type;
      this.options = void 0;
      this._parsing = false;
      this._data = void 0;
      this._objectData = void 0;
      this._sharedOptions = void 0;
      this._drawStart = void 0;
      this._drawCount = void 0;
      this.enableOptionSharing = false;
      this.supportsDecimation = false;
      this.$context = void 0;
      this._syncList = [];
      this.datasetElementType = new.target.datasetElementType;
      this.dataElementType = new.target.dataElementType;
      this.initialize();
    }
    initialize() {
      const meta = this._cachedMeta;
      this.configure();
      this.linkScales();
      meta._stacked = isStacked(meta.vScale, meta);
      this.addElements();
      if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
        console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
    }
    updateIndex(datasetIndex) {
      if (this.index !== datasetIndex) {
        clearStacks(this._cachedMeta);
      }
      this.index = datasetIndex;
    }
    linkScales() {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      const chooseId = (axis, x, y, r) => axis === "x" ? x : axis === "r" ? r : y;
      const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
      const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
      const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
      const indexAxis = meta.indexAxis;
      const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
      const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
      meta.xScale = this.getScaleForId(xid);
      meta.yScale = this.getScaleForId(yid);
      meta.rScale = this.getScaleForId(rid);
      meta.iScale = this.getScaleForId(iid);
      meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
      const meta = this._cachedMeta;
      return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const meta = this._cachedMeta;
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
      if (meta._stacked) {
        clearStacks(meta);
      }
    }
    _dataCheck() {
      const dataset = this.getDataset();
      const data = dataset.data || (dataset.data = []);
      const _data = this._data;
      if (isObject(data)) {
        const meta = this._cachedMeta;
        this._data = convertObjectDataToArray(data, meta);
      } else if (_data !== data) {
        if (_data) {
          unlistenArrayEvents(_data, this);
          const meta = this._cachedMeta;
          clearStacks(meta);
          meta._parsed = [];
        }
        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, this);
        }
        this._syncList = [];
        this._data = data;
      }
    }
    addElements() {
      const meta = this._cachedMeta;
      this._dataCheck();
      if (this.datasetElementType) {
        meta.dataset = new this.datasetElementType();
      }
    }
    buildOrUpdateElements(resetNewElements) {
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      let stackChanged = false;
      this._dataCheck();
      const oldStacked = meta._stacked;
      meta._stacked = isStacked(meta.vScale, meta);
      if (meta.stack !== dataset.stack) {
        stackChanged = true;
        clearStacks(meta);
        meta.stack = dataset.stack;
      }
      this._resyncElements(resetNewElements);
      if (stackChanged || oldStacked !== meta._stacked) {
        updateStacks(this, meta._parsed);
        meta._stacked = isStacked(meta.vScale, meta);
      }
    }
    configure() {
      const config = this.chart.config;
      const scopeKeys = config.datasetScopeKeys(this._type);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
      this.options = config.createResolver(scopes, this.getContext());
      this._parsing = this.options.parsing;
      this._cachedDataOpts = {};
    }
    parse(start, count) {
      const { _cachedMeta: meta, _data: data } = this;
      const { iScale, _stacked } = meta;
      const iAxis = iScale.axis;
      let sorted = start === 0 && count === data.length ? true : meta._sorted;
      let prev = start > 0 && meta._parsed[start - 1];
      let i, cur, parsed;
      if (this._parsing === false) {
        meta._parsed = data;
        meta._sorted = true;
        parsed = data;
      } else {
        if (isArray(data[start])) {
          parsed = this.parseArrayData(meta, data, start, count);
        } else if (isObject(data[start])) {
          parsed = this.parseObjectData(meta, data, start, count);
        } else {
          parsed = this.parsePrimitiveData(meta, data, start, count);
        }
        const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
        for (i = 0; i < count; ++i) {
          meta._parsed[i + start] = cur = parsed[i];
          if (sorted) {
            if (isNotInOrderComparedToPrev()) {
              sorted = false;
            }
            prev = cur;
          }
        }
        meta._sorted = sorted;
      }
      if (_stacked) {
        updateStacks(this, parsed);
      }
    }
    parsePrimitiveData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const labels = iScale.getLabels();
      const singleScale = iScale === vScale;
      const parsed = new Array(count);
      let i, ilen, index2;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index2 = i + start;
        parsed[i] = {
          [iAxis]: singleScale || iScale.parse(labels[index2], index2),
          [vAxis]: vScale.parse(data[index2], index2)
        };
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const parsed = new Array(count);
      let i, ilen, index2, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index2 = i + start;
        item = data[index2];
        parsed[i] = {
          x: xScale.parse(item[0], index2),
          y: yScale.parse(item[1], index2)
        };
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const parsed = new Array(count);
      let i, ilen, index2, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index2 = i + start;
        item = data[index2];
        parsed[i] = {
          x: xScale.parse(resolveObjectKey(item, xAxisKey), index2),
          y: yScale.parse(resolveObjectKey(item, yAxisKey), index2)
        };
      }
      return parsed;
    }
    getParsed(index2) {
      return this._cachedMeta._parsed[index2];
    }
    getDataElement(index2) {
      return this._cachedMeta.data[index2];
    }
    applyStack(scale, parsed, mode) {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const value = parsed[scale.axis];
      const stack = {
        keys: getSortedDatasetIndices(chart, true),
        values: parsed._stacks[scale.axis]._visualValues
      };
      return applyStack(stack, value, meta.index, {
        mode
      });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      const parsedValue = parsed[scale.axis];
      let value = parsedValue === null ? NaN : parsedValue;
      const values = stack && parsed._stacks[scale.axis];
      if (stack && values) {
        stack.values = values;
        value = applyStack(stack, parsedValue, this._cachedMeta.index);
      }
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
      const meta = this._cachedMeta;
      const _parsed = meta._parsed;
      const sorted = meta._sorted && scale === meta.iScale;
      const ilen = _parsed.length;
      const otherScale = this._getOtherScale(scale);
      const stack = createStack(canStack, meta, this.chart);
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
      let i, parsed;
      function _skip() {
        parsed = _parsed[i];
        const otherValue = parsed[otherScale.axis];
        return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
      }
      for (i = 0; i < ilen; ++i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        if (sorted) {
          break;
        }
      }
      if (sorted) {
        for (i = ilen - 1; i >= 0; --i) {
          if (_skip()) {
            continue;
          }
          this.updateRangeFromParsed(range, scale, parsed, stack);
          break;
        }
      }
      return range;
    }
    getAllParsedValues(scale) {
      const parsed = this._cachedMeta._parsed;
      const values = [];
      let i, ilen, value;
      for (i = 0, ilen = parsed.length; i < ilen; ++i) {
        value = parsed[i][scale.axis];
        if (isNumberFinite(value)) {
          values.push(value);
        }
      }
      return values;
    }
    getMaxOverflow() {
      return false;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const vScale = meta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
        value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
      };
    }
    _update(mode) {
      const meta = this._cachedMeta;
      this.update(mode || "default");
      meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {
    }
    draw() {
      const ctx = this._ctx;
      const chart = this.chart;
      const meta = this._cachedMeta;
      const elements2 = meta.data || [];
      const area = chart.chartArea;
      const active = [];
      const start = this._drawStart || 0;
      const count = this._drawCount || elements2.length - start;
      const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
      let i;
      if (meta.dataset) {
        meta.dataset.draw(ctx, area, start, count);
      }
      for (i = start; i < start + count; ++i) {
        const element = elements2[i];
        if (element.hidden) {
          continue;
        }
        if (element.active && drawActiveElementsOnTop) {
          active.push(element);
        } else {
          element.draw(ctx, area);
        }
      }
      for (i = 0; i < active.length; ++i) {
        active[i].draw(ctx, area);
      }
    }
    getStyle(index2, active) {
      const mode = active ? "active" : "default";
      return index2 === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index2 || 0, mode);
    }
    getContext(index2, active, mode) {
      const dataset = this.getDataset();
      let context;
      if (index2 >= 0 && index2 < this._cachedMeta.data.length) {
        const element = this._cachedMeta.data[index2];
        context = element.$context || (element.$context = createDataContext(this.getContext(), index2, element));
        context.parsed = this.getParsed(index2);
        context.raw = dataset.data[index2];
        context.index = context.dataIndex = index2;
      } else {
        context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
        context.dataset = dataset;
        context.index = context.datasetIndex = this.index;
      }
      context.active = !!active;
      context.mode = mode;
      return context;
    }
    resolveDatasetElementOptions(mode) {
      return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index2, mode) {
      return this._resolveElementOptions(this.dataElementType.id, mode, index2);
    }
    _resolveElementOptions(elementType, mode = "default", index2) {
      const active = mode === "active";
      const cache = this._cachedDataOpts;
      const cacheKey = elementType + "-" + mode;
      const cached = cache[cacheKey];
      const sharing = this.enableOptionSharing && defined(index2);
      if (cached) {
        return cloneIfNotShared(cached, sharing);
      }
      const config = this.chart.config;
      const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
      const prefixes = active ? [
        `${elementType}Hover`,
        "hover",
        elementType,
        ""
      ] : [
        elementType,
        ""
      ];
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      const names2 = Object.keys(defaults.elements[elementType]);
      const context = () => this.getContext(index2, active, mode);
      const values = config.resolveNamedOptions(scopes, names2, context, prefixes);
      if (values.$shared) {
        values.$shared = sharing;
        cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
      }
      return values;
    }
    _resolveAnimations(index2, transition, active) {
      const chart = this.chart;
      const cache = this._cachedDataOpts;
      const cacheKey = `animation-${transition}`;
      const cached = cache[cacheKey];
      if (cached) {
        return cached;
      }
      let options;
      if (chart.options.animation !== false) {
        const config = this.chart.config;
        const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        options = config.createResolver(scopes, this.getContext(index2, active, transition));
      }
      const animations = new Animations(chart, options && options.animations);
      if (options && options._cacheable) {
        cache[cacheKey] = Object.freeze(animations);
      }
      return animations;
    }
    getSharedOptions(options) {
      if (!options.$shared) {
        return;
      }
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
      return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const previouslySharedOptions = this._sharedOptions;
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
      return {
        sharedOptions,
        includeOptions
      };
    }
    updateElement(element, index2, properties, mode) {
      if (isDirectUpdateMode(mode)) {
        Object.assign(element, properties);
      } else {
        this._resolveAnimations(index2, mode).update(element, properties);
      }
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
      if (sharedOptions && !isDirectUpdateMode(mode)) {
        this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
      }
    }
    _setStyle(element, index2, mode, active) {
      element.active = active;
      const options = this.getStyle(index2, active);
      this._resolveAnimations(index2, mode, active).update(element, {
        options: !active && this.getSharedOptions(options) || options
      });
    }
    removeHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", false);
    }
    setHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", true);
    }
    _removeDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", false);
      }
    }
    _setDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", true);
      }
    }
    _resyncElements(resetNewElements) {
      const data = this._data;
      const elements2 = this._cachedMeta.data;
      for (const [method, arg1, arg2] of this._syncList) {
        this[method](arg1, arg2);
      }
      this._syncList = [];
      const numMeta = elements2.length;
      const numData = data.length;
      const count = Math.min(numData, numMeta);
      if (count) {
        this.parse(0, count);
      }
      if (numData > numMeta) {
        this._insertElements(numMeta, numData - numMeta, resetNewElements);
      } else if (numData < numMeta) {
        this._removeElements(numData, numMeta - numData);
      }
    }
    _insertElements(start, count, resetNewElements = true) {
      const meta = this._cachedMeta;
      const data = meta.data;
      const end = start + count;
      let i;
      const move = (arr) => {
        arr.length += count;
        for (i = arr.length - 1; i >= end; i--) {
          arr[i] = arr[i - count];
        }
      };
      move(data);
      for (i = start; i < end; ++i) {
        data[i] = new this.dataElementType();
      }
      if (this._parsing) {
        move(meta._parsed);
      }
      this.parse(start, count);
      if (resetNewElements) {
        this.updateElements(data, start, count, "reset");
      }
    }
    updateElements(element, start, count, mode) {
    }
    _removeElements(start, count) {
      const meta = this._cachedMeta;
      if (this._parsing) {
        const removed = meta._parsed.splice(start, count);
        if (meta._stacked) {
          clearStacks(meta, removed);
        }
      }
      meta.data.splice(start, count);
    }
    _sync(args) {
      if (this._parsing) {
        this._syncList.push(args);
      } else {
        const [method, arg1, arg2] = args;
        this[method](arg1, arg2);
      }
      this.chart._dataChanges.push([
        this.index,
        ...args
      ]);
    }
    _onDataPush() {
      const count = arguments.length;
      this._sync([
        "_insertElements",
        this.getDataset().data.length - count,
        count
      ]);
    }
    _onDataPop() {
      this._sync([
        "_removeElements",
        this._cachedMeta.data.length - 1,
        1
      ]);
    }
    _onDataShift() {
      this._sync([
        "_removeElements",
        0,
        1
      ]);
    }
    _onDataSplice(start, count) {
      if (count) {
        this._sync([
          "_removeElements",
          start,
          count
        ]);
      }
      const newCount = arguments.length - 2;
      if (newCount) {
        this._sync([
          "_insertElements",
          start,
          newCount
        ]);
      }
    }
    _onDataUnshift() {
      this._sync([
        "_insertElements",
        0,
        arguments.length
      ]);
    }
  };
  function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
      const visibleMetas = scale.getMatchingVisibleMetas(type);
      let values = [];
      for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
        values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
      }
      scale._cache.$bar = _arrayUnique(values.sort((a, b) => a - b));
    }
    return scale._cache.$bar;
  }
  function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = () => {
      if (curr === 32767 || curr === -32768) {
        return;
      }
      if (defined(prev)) {
        min = Math.min(min, Math.abs(curr - prev) || min);
      }
      prev = curr;
    };
    for (i = 0, ilen = values.length; i < ilen; ++i) {
      curr = scale.getPixelForValue(values[i]);
      updateMinAndPrev();
    }
    prev = void 0;
    for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      updateMinAndPrev();
    }
    return min;
  }
  function computeFitCategoryTraits(index2, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if (isNullOrUndef(thickness)) {
      size = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      size = thickness * stackCount;
      ratio = 1;
    }
    return {
      chunk: size / stackCount,
      ratio,
      start: ruler.pixels[index2] - size / 2
    };
  }
  function computeFlexCategoryTraits(index2, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index2];
    let prev = index2 > 0 ? pixels[index2 - 1] : null;
    let next = index2 < pixels.length - 1 ? pixels[index2 + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
      next = curr + curr - prev;
    }
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / stackCount,
      ratio: options.barPercentage,
      start
    };
  }
  function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
      barStart = max;
      barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
      barStart,
      barEnd,
      start: startValue,
      end: endValue,
      min,
      max
    };
  }
  function parseValue(entry, item, vScale, i) {
    if (isArray(entry)) {
      parseFloatBar(entry, item, vScale, i);
    } else {
      item[vScale.axis] = vScale.parse(entry, i);
    }
    return item;
  }
  function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      entry = data[i];
      item = {};
      item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
      parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
  }
  function isFloatBar(custom) {
    return custom && custom.barStart !== void 0 && custom.barEnd !== void 0;
  }
  function barSign(size, vScale, actualBase) {
    if (size !== 0) {
      return sign(size);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
  }
  function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
      reverse = properties.base > properties.x;
      start = "left";
      end = "right";
    } else {
      reverse = properties.base < properties.y;
      start = "bottom";
      end = "top";
    }
    if (reverse) {
      top = "end";
      bottom = "start";
    } else {
      top = "start";
      bottom = "end";
    }
    return {
      start,
      end,
      reverse,
      top,
      bottom
    };
  }
  function setBorderSkipped(properties, options, stack, index2) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
      properties.borderSkipped = res;
      return;
    }
    if (edge === true) {
      properties.borderSkipped = {
        top: true,
        right: true,
        bottom: true,
        left: true
      };
      return;
    }
    const { start, end, reverse, top, bottom } = borderProps(properties);
    if (edge === "middle" && stack) {
      properties.enableBorderRadius = true;
      if ((stack._top || 0) === index2) {
        edge = top;
      } else if ((stack._bottom || 0) === index2) {
        edge = bottom;
      } else {
        res[parseEdge(bottom, start, end, reverse)] = true;
        edge = top;
      }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
  }
  function parseEdge(edge, a, b, reverse) {
    if (reverse) {
      edge = swap(edge, a, b);
      edge = startEnd(edge, b, a);
    } else {
      edge = startEnd(edge, a, b);
    }
    return edge;
  }
  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }
  function startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
  }
  function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
  }
  var BarController = class extends DatasetController {
    static id = "bar";
    static defaults = {
      datasetElementType: false,
      dataElementType: "bar",
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: true,
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "base",
            "width",
            "height"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category",
          offset: true,
          grid: {
            offset: true
          }
        },
        _value_: {
          type: "linear",
          beginAtZero: true
        }
      }
    };
    parsePrimitiveData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
      const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
      const parsed = [];
      let i, ilen, item, obj;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        obj = data[i];
        item = {};
        item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
        parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
      }
      return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      super.updateRangeFromParsed(range, scale, parsed, stack);
      const custom = parsed._custom;
      if (custom && scale === this._cachedMeta.vScale) {
        range.min = Math.min(range.min, custom.min);
        range.max = Math.max(range.max, custom.max);
      }
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const { iScale, vScale } = meta;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
      return {
        label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
        value
      };
    }
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
      const meta = this._cachedMeta;
      meta.stack = this.getDataset().stack;
    }
    update(mode) {
      const meta = this._cachedMeta;
      this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
      const reset = mode === "reset";
      const { index: index2, _cachedMeta: { vScale } } = this;
      const base = vScale.getBasePixel();
      const horizontal = vScale.isHorizontal();
      const ruler = this._getRuler();
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      for (let i = start; i < start + count; i++) {
        const parsed = this.getParsed(i);
        const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {
          base,
          head: base
        } : this._calculateBarValuePixels(i);
        const ipixels = this._calculateBarIndexPixels(i, ruler);
        const stack = (parsed._stacks || {})[vScale.axis];
        const properties = {
          horizontal,
          base: vpixels.base,
          enableBorderRadius: !stack || isFloatBar(parsed._custom) || index2 === stack._top || index2 === stack._bottom,
          x: horizontal ? vpixels.head : ipixels.center,
          y: horizontal ? ipixels.center : vpixels.head,
          height: horizontal ? ipixels.size : Math.abs(vpixels.size),
          width: horizontal ? Math.abs(vpixels.size) : ipixels.size
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
        }
        const options = properties.options || bars[i].options;
        setBorderSkipped(properties, options, stack, index2);
        setInflateAmount(properties, options, ruler.ratio);
        this.updateElement(bars[i], i, properties, mode);
      }
    }
    _getStacks(last, dataIndex) {
      const { iScale } = this._cachedMeta;
      const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta) => meta.controller.options.grouped);
      const stacked = iScale.options.stacked;
      const stacks = [];
      const currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
      const iScaleValue = currentParsed && currentParsed[iScale.axis];
      const skipNull = (meta) => {
        const parsed = meta._parsed.find((item) => item[iScale.axis] === iScaleValue);
        const val = parsed && parsed[meta.vScale.axis];
        if (isNullOrUndef(val) || isNaN(val)) {
          return true;
        }
      };
      for (const meta of metasets) {
        if (dataIndex !== void 0 && skipNull(meta)) {
          continue;
        }
        if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === void 0 && meta.stack === void 0) {
          stacks.push(meta.stack);
        }
        if (meta.index === last) {
          break;
        }
      }
      if (!stacks.length) {
        stacks.push(void 0);
      }
      return stacks;
    }
    _getStackCount(index2) {
      return this._getStacks(void 0, index2).length;
    }
    _getAxisCount() {
      return this._getAxis().length;
    }
    getFirstScaleIdForIndexAxis() {
      const scales2 = this.chart.scales;
      const indexScaleId = this.chart.options.indexAxis;
      return Object.keys(scales2).filter((key) => scales2[key].axis === indexScaleId).shift();
    }
    _getAxis() {
      const axis = {};
      const firstScaleAxisId = this.getFirstScaleIdForIndexAxis();
      for (const dataset of this.chart.data.datasets) {
        axis[valueOrDefault(this.chart.options.indexAxis === "x" ? dataset.xAxisID : dataset.yAxisID, firstScaleAxisId)] = true;
      }
      return Object.keys(axis);
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
      const stacks = this._getStacks(datasetIndex, dataIndex);
      const index2 = name !== void 0 ? stacks.indexOf(name) : -1;
      return index2 === -1 ? stacks.length - 1 : index2;
    }
    _getRuler() {
      const opts = this.options;
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const pixels = [];
      let i, ilen;
      for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
        pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
      }
      const barThickness = opts.barThickness;
      const min = barThickness || computeMinSampleSize(meta);
      return {
        min,
        pixels,
        start: iScale._startPixel,
        end: iScale._endPixel,
        stackCount: this._getStackCount(),
        scale: iScale,
        grouped: opts.grouped,
        ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
      };
    }
    _calculateBarValuePixels(index2) {
      const { _cachedMeta: { vScale, _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength } } = this;
      const actualBase = baseValue || 0;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const floating = isFloatBar(custom);
      let value = parsed[vScale.axis];
      let start = 0;
      let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
      let head, size;
      if (length !== value) {
        start = length - value;
        length = value;
      }
      if (floating) {
        value = custom.barStart;
        length = custom.barEnd - custom.barStart;
        if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
          start = 0;
        }
        start += value;
      }
      const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
      let base = vScale.getPixelForValue(startValue);
      if (this.chart.getDataVisibility(index2)) {
        head = vScale.getPixelForValue(start + length);
      } else {
        head = base;
      }
      size = head - base;
      if (Math.abs(size) < minBarLength) {
        size = barSign(size, vScale, actualBase) * minBarLength;
        if (value === actualBase) {
          base -= size / 2;
        }
        const startPixel = vScale.getPixelForDecimal(0);
        const endPixel = vScale.getPixelForDecimal(1);
        const min = Math.min(startPixel, endPixel);
        const max = Math.max(startPixel, endPixel);
        base = Math.max(Math.min(base, max), min);
        head = base + size;
        if (_stacked && !floating) {
          parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
      }
      if (base === vScale.getPixelForValue(actualBase)) {
        const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
        base += halfGrid;
        size -= halfGrid;
      }
      return {
        size,
        base,
        head,
        center: head + size / 2
      };
    }
    _calculateBarIndexPixels(index2, ruler) {
      const scale = ruler.scale;
      const options = this.options;
      const skipNull = options.skipNull;
      const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
      let center, size;
      const axisCount = this._getAxisCount();
      if (ruler.grouped) {
        const stackCount = skipNull ? this._getStackCount(index2) : ruler.stackCount;
        const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index2, ruler, options, stackCount * axisCount) : computeFitCategoryTraits(index2, ruler, options, stackCount * axisCount);
        const axisID = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID;
        const axisNumber = this._getAxis().indexOf(valueOrDefault(axisID, this.getFirstScaleIdForIndexAxis()));
        const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index2 : void 0) + axisNumber;
        center = range.start + range.chunk * stackIndex + range.chunk / 2;
        size = Math.min(maxBarThickness, range.chunk * range.ratio);
      } else {
        center = scale.getPixelForValue(this.getParsed(index2)[scale.axis], index2);
        size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
      }
      return {
        base: center - size / 2,
        head: center + size / 2,
        center,
        size
      };
    }
    draw() {
      const meta = this._cachedMeta;
      const vScale = meta.vScale;
      const rects = meta.data;
      const ilen = rects.length;
      let i = 0;
      for (; i < ilen; ++i) {
        if (this.getParsed(i)[vScale.axis] !== null && !rects[i].hidden) {
          rects[i].draw(this._ctx);
        }
      }
    }
  };
  var BubbleController = class extends DatasetController {
    static id = "bubble";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "borderWidth",
            "radius"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
      const parsed = super.parsePrimitiveData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const parsed = super.parseArrayData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const parsed = super.parseObjectData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
    getMaxOverflow() {
      const data = this._cachedMeta.data;
      let max = 0;
      for (let i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x = xScale.getLabelForValue(parsed.x);
      const y = yScale.getLabelForValue(parsed.y);
      const r = parsed._custom;
      return {
        label: labels[index2] || "",
        value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
      };
    }
    update(mode) {
      const points = this._cachedMeta.data;
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const parsed = !reset && this.getParsed(i);
        const properties = {};
        const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
        const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
        properties.skip = isNaN(iPixel) || isNaN(vPixel);
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
          if (reset) {
            properties.options.radius = 0;
          }
        }
        this.updateElement(point, i, properties, mode);
      }
    }
    resolveDataElementOptions(index2, mode) {
      const parsed = this.getParsed(index2);
      let values = super.resolveDataElementOptions(index2, mode);
      if (values.$shared) {
        values = Object.assign({}, values, {
          $shared: false
        });
      }
      const radius = values.radius;
      if (mode !== "active") {
        values.radius = 0;
      }
      values.radius += valueOrDefault(parsed && parsed._custom, radius);
      return values;
    }
  };
  function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < TAU) {
      const startAngle = rotation;
      const endAngle = startAngle + circumference;
      const startX = Math.cos(startAngle);
      const startY = Math.sin(startAngle);
      const endX = Math.cos(endAngle);
      const endY = Math.sin(endAngle);
      const calcMax = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
      const calcMin = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
      const maxX = calcMax(0, startX, endX);
      const maxY = calcMax(HALF_PI, startY, endY);
      const minX = calcMin(PI, startX, endX);
      const minY = calcMin(PI + HALF_PI, startY, endY);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }
    return {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    };
  }
  var DoughnutController = class extends DatasetController {
    static id = "doughnut";
    static defaults = {
      datasetElementType: false,
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: false
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing"
          ]
        }
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r"
    };
    static descriptors = {
      _scriptable: (name) => name !== "spacing",
      _indexable: (name) => name !== "spacing" && !name.startsWith("borderDash") && !name.startsWith("hoverBorderDash")
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data = chart.data;
              const { labels: { pointStyle, textAlign, color: color2, useBorderRadius, borderRadius } } = chart.legend.options;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    fontColor: color2,
                    hidden: !chart.getDataVisibility(i),
                    lineDash: style.borderDash,
                    lineDashOffset: style.borderDashOffset,
                    lineJoin: style.borderJoinStyle,
                    lineWidth: style.borderWidth,
                    strokeStyle: style.borderColor,
                    textAlign,
                    pointStyle,
                    borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                    index: i
                  };
                });
              }
              return [];
            }
          },
          onClick(e, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.enableOptionSharing = true;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.offsetX = void 0;
      this.offsetY = void 0;
    }
    linkScales() {
    }
    parse(start, count) {
      const data = this.getDataset().data;
      const meta = this._cachedMeta;
      if (this._parsing === false) {
        meta._parsed = data;
      } else {
        let getter = (i2) => +data[i2];
        if (isObject(data[start])) {
          const { key = "value" } = this._parsing;
          getter = (i2) => +resolveObjectKey(data[i2], key);
        }
        let i, ilen;
        for (i = start, ilen = start + count; i < ilen; ++i) {
          meta._parsed[i] = getter(i);
        }
      }
    }
    _getRotation() {
      return toRadians(this.options.rotation - 90);
    }
    _getCircumference() {
      return toRadians(this.options.circumference);
    }
    _getRotationExtents() {
      let min = TAU;
      let max = -TAU;
      for (let i = 0; i < this.chart.data.datasets.length; ++i) {
        if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
          const controller = this.chart.getDatasetMeta(i).controller;
          const rotation = controller._getRotation();
          const circumference = controller._getCircumference();
          min = Math.min(min, rotation);
          max = Math.max(max, rotation + circumference);
        }
      }
      return {
        rotation: min,
        circumference: max - min
      };
    }
    update(mode) {
      const chart = this.chart;
      const { chartArea } = chart;
      const meta = this._cachedMeta;
      const arcs = meta.data;
      const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
      const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
      const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
      const chartWeight = this._getRingWeight(this.index);
      const { circumference, rotation } = this._getRotationExtents();
      const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
      const maxWidth = (chartArea.width - spacing) / ratioX;
      const maxHeight = (chartArea.height - spacing) / ratioY;
      const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      const outerRadius = toDimension(this.options.radius, maxRadius);
      const innerRadius = Math.max(outerRadius * cutout, 0);
      const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
      this.offsetX = offsetX * outerRadius;
      this.offsetY = offsetY * outerRadius;
      meta.total = this.calculateTotal();
      this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
      this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
      const opts = this.options;
      const meta = this._cachedMeta;
      const circumference = this._getCircumference();
      if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
        return 0;
      }
      return this.calculateCircumference(meta._parsed[i] * circumference / TAU);
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const animateScale = reset && animationOpts.animateScale;
      const innerRadius = animateScale ? 0 : this.innerRadius;
      const outerRadius = animateScale ? 0 : this.outerRadius;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      let startAngle = this._getRotation();
      let i;
      for (i = 0; i < start; ++i) {
        startAngle += this._circumference(i, reset);
      }
      for (i = start; i < start + count; ++i) {
        const circumference = this._circumference(i, reset);
        const arc = arcs[i];
        const properties = {
          x: centerX + this.offsetX,
          y: centerY + this.offsetY,
          startAngle,
          endAngle: startAngle + circumference,
          circumference,
          outerRadius,
          innerRadius
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
        }
        startAngle += circumference;
        this.updateElement(arc, i, properties, mode);
      }
    }
    calculateTotal() {
      const meta = this._cachedMeta;
      const metaData = meta.data;
      let total = 0;
      let i;
      for (i = 0; i < metaData.length; i++) {
        const value = meta._parsed[i];
        if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
          total += Math.abs(value);
        }
      }
      return total;
    }
    calculateCircumference(value) {
      const total = this._cachedMeta.total;
      if (total > 0 && !isNaN(value)) {
        return TAU * (Math.abs(value) / total);
      }
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2], chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    getMaxBorderWidth(arcs) {
      let max = 0;
      const chart = this.chart;
      let i, ilen, meta, controller, options;
      if (!arcs) {
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;
            controller = meta.controller;
            break;
          }
        }
      }
      if (!arcs) {
        return 0;
      }
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        options = controller.resolveDataElementOptions(i);
        if (options.borderAlign !== "inner") {
          max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
      }
      return max;
    }
    getMaxOffset(arcs) {
      let max = 0;
      for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
        const options = this.resolveDataElementOptions(i);
        max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
      }
      return max;
    }
    _getRingWeightOffset(datasetIndex) {
      let ringWeightOffset = 0;
      for (let i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }
      return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
      return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  };
  var LineController = class extends DatasetController {
    static id = "line";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: true,
      spanGaps: false
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category"
        },
        _value_: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      this.supportsDecimation = true;
      super.initialize();
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { dataset: line, data: points = [], _dataset } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start = 0;
        count = points.length;
      }
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      options.segment = this.options.segment;
      this.updateElement(line, void 0, {
        animated: !animationsDisabled,
        options
      }, mode);
      this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      const end = start + count;
      const pointsCount = points.length;
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i = 0; i < pointsCount; ++i) {
        const point = points[i];
        const properties = directUpdate ? point : {};
        if (i < start || i >= end) {
          properties.skip = true;
          continue;
        }
        const parsed = this.getParsed(i);
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i, properties, mode);
        }
        prevParsed = parsed;
      }
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      const data = meta.data || [];
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
      const meta = this._cachedMeta;
      meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
      super.draw();
    }
  };
  var PolarAreaController = class extends DatasetController {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: true
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius"
          ]
        }
      },
      indexAxis: "r",
      startAngle: 0
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                const { labels: { pointStyle, color: color2 } } = chart.legend.options;
                return data.labels.map((label, i) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    fontColor: color2,
                    lineWidth: style.borderWidth,
                    pointStyle,
                    hidden: !chart.getDataVisibility(i),
                    index: i
                  };
                });
              }
              return [];
            }
          },
          onClick(e, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: {
            display: false
          },
          beginAtZero: true,
          grid: {
            circular: true
          },
          pointLabels: {
            display: false
          },
          startAngle: 0
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.innerRadius = void 0;
      this.outerRadius = void 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2].r, chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    parseObjectData(meta, data, start, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
      const arcs = this._cachedMeta.data;
      this._updateRadius();
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
      const meta = this._cachedMeta;
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      meta.data.forEach((element, index2) => {
        const parsed = this.getParsed(index2).r;
        if (!isNaN(parsed) && this.chart.getDataVisibility(index2)) {
          if (parsed < range.min) {
            range.min = parsed;
          }
          if (parsed > range.max) {
            range.max = parsed;
          }
        }
      });
      return range;
    }
    _updateRadius() {
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      const outerRadius = Math.max(minSize / 2, 0);
      const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
      this.outerRadius = outerRadius - radiusLength * this.index;
      this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const scale = this._cachedMeta.rScale;
      const centerX = scale.xCenter;
      const centerY = scale.yCenter;
      const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
      let angle = datasetStartAngle;
      let i;
      const defaultAngle = 360 / this.countVisibleElements();
      for (i = 0; i < start; ++i) {
        angle += this._computeAngle(i, mode, defaultAngle);
      }
      for (i = start; i < start + count; i++) {
        const arc = arcs[i];
        let startAngle = angle;
        let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
        let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
        angle = endAngle;
        if (reset) {
          if (animationOpts.animateScale) {
            outerRadius = 0;
          }
          if (animationOpts.animateRotate) {
            startAngle = endAngle = datasetStartAngle;
          }
        }
        const properties = {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius,
          startAngle,
          endAngle,
          options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
        };
        this.updateElement(arc, i, properties, mode);
      }
    }
    countVisibleElements() {
      const meta = this._cachedMeta;
      let count = 0;
      meta.data.forEach((element, index2) => {
        if (!isNaN(this.getParsed(index2).r) && this.chart.getDataVisibility(index2)) {
          count++;
        }
      });
      return count;
    }
    _computeAngle(index2, mode, defaultAngle) {
      return this.chart.getDataVisibility(index2) ? toRadians(this.resolveDataElementOptions(index2, mode).angle || defaultAngle) : 0;
    }
  };
  var PieController = class extends DoughnutController {
    static id = "pie";
    static defaults = {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%"
    };
  };
  var RadarController = class extends DatasetController {
    static id = "radar";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: true,
      elements: {
        line: {
          fill: "start"
        }
      }
    };
    static overrides = {
      aspectRatio: 1,
      scales: {
        r: {
          type: "radialLinear"
        }
      }
    };
    getLabelAndValue(index2) {
      const vScale = this._cachedMeta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: vScale.getLabels()[index2],
        value: "" + vScale.getLabelForValue(parsed[vScale.axis])
      };
    }
    parseObjectData(meta, data, start, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset;
      const points = meta.data || [];
      const labels = meta.iScale.getLabels();
      line.points = points;
      if (mode !== "resize") {
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
          options.borderWidth = 0;
        }
        const properties = {
          _loop: true,
          _fullLoop: labels.length === points.length,
          options
        };
        this.updateElement(line, void 0, properties, mode);
      }
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const scale = this._cachedMeta.rScale;
      const reset = mode === "reset";
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
        const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
        const x = reset ? scale.xCenter : pointPosition.x;
        const y = reset ? scale.yCenter : pointPosition.y;
        const properties = {
          x,
          y,
          angle: pointPosition.angle,
          skip: isNaN(x) || isNaN(y),
          options
        };
        this.updateElement(point, i, properties, mode);
      }
    }
  };
  var ScatterController = class extends DatasetController {
    static id = "scatter";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      showLine: false,
      fill: false
    };
    static overrides = {
      interaction: {
        mode: "point"
      },
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x = xScale.getLabelForValue(parsed.x);
      const y = yScale.getLabelForValue(parsed.y);
      return {
        label: labels[index2] || "",
        value: "(" + x + ", " + y + ")"
      };
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { data: points = [] } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start = 0;
        count = points.length;
      }
      if (this.options.showLine) {
        if (!this.datasetElementType) {
          this.addElements();
        }
        const { dataset: line, _dataset } = meta;
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        options.segment = this.options.segment;
        this.updateElement(line, void 0, {
          animated: !animationsDisabled,
          options
        }, mode);
      } else if (this.datasetElementType) {
        delete meta.dataset;
        this.datasetElementType = false;
      }
      this.updateElements(points, start, count, mode);
    }
    addElements() {
      const { showLine } = this.options;
      if (!this.datasetElementType && showLine) {
        this.datasetElementType = this.chart.registry.getElement("line");
      }
      super.addElements();
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i = start; i < start + count; ++i) {
        const point = points[i];
        const parsed = this.getParsed(i);
        const properties = directUpdate ? point : {};
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i, properties, mode);
        }
        prevParsed = parsed;
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const data = meta.data || [];
      if (!this.options.showLine) {
        let max = 0;
        for (let i = data.length - 1; i >= 0; --i) {
          max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        }
        return max > 0 && max;
      }
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
  };
  var controllers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController
  });
  function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  var DateAdapterBase = class _DateAdapterBase {
    /**
    * Override default date adapter methods.
    * Accepts type parameter to define options type.
    * @example
    * Chart._adapters._date.override<{myAdapterOption: string}>({
    *   init() {
    *     console.log(this.options.myAdapterOption);
    *   }
    * })
    */
    static override(members) {
      Object.assign(_DateAdapterBase.prototype, members);
    }
    options;
    constructor(options) {
      this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {
    }
    formats() {
      return abstract();
    }
    parse() {
      return abstract();
    }
    format() {
      return abstract();
    }
    add() {
      return abstract();
    }
    diff() {
      return abstract();
    }
    startOf() {
      return abstract();
    }
    endOf() {
      return abstract();
    }
  };
  var adapters = {
    _date: DateAdapterBase
  };
  function binarySearch(metaset, axis, value, intersect) {
    const { controller, data, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    const spanGaps = metaset.dataset ? metaset.dataset.options ? metaset.dataset.options.spanGaps : null : null;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
      const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
      if (!intersect) {
        const result = lookupMethod(data, axis, value);
        if (spanGaps) {
          const { vScale } = controller._cachedMeta;
          const { _parsed } = metaset;
          const distanceToDefinedLo = _parsed.slice(0, result.lo + 1).reverse().findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          result.lo -= Math.max(0, distanceToDefinedLo);
          const distanceToDefinedHi = _parsed.slice(result.hi).findIndex((point) => !isNullOrUndef(point[vScale.axis]));
          result.hi += Math.max(0, distanceToDefinedHi);
        }
        return result;
      } else if (controller._sharedOptions) {
        const el = data[0];
        const range = typeof el.getRange === "function" && el.getRange(axis);
        if (range) {
          const start = lookupMethod(data, axis, value - range);
          const end = lookupMethod(data, axis, value + range);
          return {
            lo: start.lo,
            hi: end.hi
          };
        }
      }
    }
    return {
      lo: 0,
      hi: data.length - 1
    };
  }
  function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
      const { index: index2, data } = metasets[i];
      const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
      for (let j = lo; j <= hi; ++j) {
        const element = data[j];
        if (!element.skip) {
          handler(element, index2, j);
        }
      }
    }
  }
  function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
      const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }
  function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return items;
    }
    const evaluationFunc = function(element, datasetIndex, index2) {
      if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) {
        return;
      }
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
  }
  function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index2) {
      const { startAngle, endAngle } = element.getProps([
        "startAngle",
        "endAngle"
      ], useFinalPosition);
      const { angle } = getAngleFromPoint(element, {
        x: position.x,
        y: position.y
      });
      if (_angleBetween(angle, startAngle, endAngle)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index2) {
      const inRange2 = element.inRange(position.x, position.y, useFinalPosition);
      if (intersect && !inRange2) {
        return;
      }
      const center = element.getCenterPoint(useFinalPosition);
      const pointInArea = !!includeInvisible || chart.isPointInArea(center);
      if (!pointInArea && !inRange2) {
        return;
      }
      const distance = distanceMetric(position, center);
      if (distance < minDistance) {
        items = [
          {
            element,
            datasetIndex,
            index: index2
          }
        ];
        minDistance = distance;
      } else if (distance === minDistance) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return [];
    }
    return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
  }
  function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index2) => {
      if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
        intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
      }
    });
    if (intersect && !intersectsItem) {
      return [];
    }
    return items;
  }
  var Interaction = {
    evaluateInteractionItems,
    modes: {
      index(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        const axis = options.axis || "x";
        const includeInvisible = options.includeInvisible || false;
        const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        const elements2 = [];
        if (!items.length) {
          return [];
        }
        chart.getSortedVisibleDatasetMetas().forEach((meta) => {
          const index2 = items[0].index;
          const element = meta.data[index2];
          if (element && !element.skip) {
            elements2.push({
              element,
              datasetIndex: meta.index,
              index: index2
            });
          }
        });
        return elements2;
      },
      dataset(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        if (items.length > 0) {
          const datasetIndex = items[0].datasetIndex;
          const data = chart.getDatasetMeta(datasetIndex).data;
          items = [];
          for (let i = 0; i < data.length; ++i) {
            items.push({
              element: data[i],
              datasetIndex,
              index: i
            });
          }
        }
        return items;
      },
      point(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
      },
      nearest(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
      },
      x(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
      },
      y(chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
      }
    }
  };
  var STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
  ];
  function filterByPosition(array, position) {
    return array.filter((v) => v.pos === position);
  }
  function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v) => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
  }
  function sortByWeight(array, reverse) {
    return array.sort((a, b) => {
      const v0 = reverse ? b : a;
      const v1 = reverse ? a : b;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }
  function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      ({ position: pos, options: { stack, stackWeight = 1 } } = box);
      layoutBoxes.push({
        index: i,
        box,
        pos,
        horizontal: box.isHorizontal(),
        weight: box.weight,
        stack: stack && pos + stack,
        stackWeight
      });
    }
    return layoutBoxes;
  }
  function buildStacks(layouts2) {
    const stacks = {};
    for (const wrap of layouts2) {
      const { stack, pos, stackWeight } = wrap;
      if (!stack || !STATIC_POSITIONS.includes(pos)) {
        continue;
      }
      const _stack = stacks[stack] || (stacks[stack] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0
      });
      _stack.count++;
      _stack.weight += stackWeight;
    }
    return stacks;
  }
  function setLayoutDims(layouts2, params) {
    const stacks = buildStacks(layouts2);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i, ilen, layout;
    for (i = 0, ilen = layouts2.length; i < ilen; ++i) {
      layout = layouts2[i];
      const { fullSize } = layout.box;
      const stack = stacks[layout.stack];
      const factor = stack && layout.stackWeight / stack.weight;
      if (layout.horizontal) {
        layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
        layout.height = hBoxMaxHeight;
      } else {
        layout.width = vBoxMaxWidth;
        layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
      }
    }
    return stacks;
  }
  function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
      fullSize,
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
      chartArea: filterByPosition(layoutBoxes, "chartArea"),
      vertical: left.concat(right).concat(centerVertical),
      horizontal: top.concat(bottom).concat(centerHorizontal)
    };
  }
  function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
  }
  function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }
  function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!isObject(pos)) {
      if (layout.size) {
        chartArea[pos] -= layout.size;
      }
      const stack = stacks[layout.stack] || {
        size: 0,
        count: 1
      };
      stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
      layout.size = stack.size / stack.count;
      chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
      updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
      same: widthChanged,
      other: heightChanged
    } : {
      same: heightChanged,
      other: widthChanged
    };
  }
  function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
      const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
  }
  function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions2) {
      const margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions2.forEach((pos) => {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }
    return horizontal ? marginForPositions([
      "left",
      "right"
    ]) : marginForPositions([
      "top",
      "bottom"
    ]);
  }
  function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
      const { same, other } = updateDims(chartArea, params, layout, stacks);
      refit |= same && refitBoxes.length;
      changed = changed || other;
      if (!box.fullSize) {
        refitBoxes.push(layout);
      }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
  }
  function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
  }
  function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x, y } = chartArea;
    for (const layout of boxes) {
      const box = layout.box;
      const stack = stacks[layout.stack] || {
        count: 1,
        placed: 0,
        weight: 1
      };
      const weight = layout.stackWeight / stack.weight || 1;
      if (layout.horizontal) {
        const width = chartArea.w * weight;
        const height = stack.size || box.height;
        if (defined(stack.start)) {
          y = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
        } else {
          setBoxDims(box, chartArea.left + stack.placed, y, width, height);
        }
        stack.start = y;
        stack.placed += width;
        y = box.bottom;
      } else {
        const height = chartArea.h * weight;
        const width = stack.size || box.width;
        if (defined(stack.start)) {
          x = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
        } else {
          setBoxDims(box, x, chartArea.top + stack.placed, width, height);
        }
        stack.start = x;
        stack.placed += height;
        x = box.right;
      }
    }
    chartArea.x = x;
    chartArea.y = y;
  }
  var layouts = {
    addBox(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }
      item.fullSize = item.fullSize || false;
      item.position = item.position || "top";
      item.weight = item.weight || 0;
      item._layers = item._layers || function() {
        return [
          {
            z: 0,
            draw(chartArea) {
              item.draw(chartArea);
            }
          }
        ];
      };
      chart.boxes.push(item);
    },
    removeBox(chart, layoutItem) {
      const index2 = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
      if (index2 !== -1) {
        chart.boxes.splice(index2, 1);
      }
    },
    configure(chart, item, options) {
      item.fullSize = options.fullSize;
      item.position = options.position;
      item.weight = options.weight;
    },
    update(chart, width, height, minPadding) {
      if (!chart) {
        return;
      }
      const padding = toPadding(chart.options.layout.padding);
      const availableWidth = Math.max(width - padding.width, 0);
      const availableHeight = Math.max(height - padding.height, 0);
      const boxes = buildLayoutBoxes(chart.boxes);
      const verticalBoxes = boxes.vertical;
      const horizontalBoxes = boxes.horizontal;
      each(chart.boxes, (box) => {
        if (typeof box.beforeLayout === "function") {
          box.beforeLayout();
        }
      });
      const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
      const params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding,
        availableWidth,
        availableHeight,
        vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
        hBoxMaxHeight: availableHeight / 2
      });
      const maxPadding = Object.assign({}, padding);
      updateMaxPadding(maxPadding, toPadding(minPadding));
      const chartArea = Object.assign({
        maxPadding,
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
      fitBoxes(boxes.fullSize, chartArea, params, stacks);
      fitBoxes(verticalBoxes, chartArea, params, stacks);
      if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
        fitBoxes(verticalBoxes, chartArea, params, stacks);
      }
      handleMaxPadding(chartArea);
      placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
        height: chartArea.h,
        width: chartArea.w
      };
      each(boxes.chartArea, (layout) => {
        const box = layout.box;
        Object.assign(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };
  var BasePlatform = class {
    acquireContext(canvas, aspectRatio) {
    }
    releaseContext(context) {
      return false;
    }
    addEventListener(chart, type, listener) {
    }
    removeEventListener(chart, type, listener) {
    }
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
      width = Math.max(0, width || element.width);
      height = height || element.height;
      return {
        width,
        height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
      };
    }
    isAttached(canvas) {
      return true;
    }
    updateConfig(config) {
    }
  };
  var BasicPlatform = class extends BasePlatform {
    acquireContext(item) {
      return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
      config.options.animation = false;
    }
  };
  var EXPANDO_KEY = "$chartjs";
  var EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };
  var isNullOrEmpty = (value) => value === null || value === "";
  function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
      const displayWidth = readUsedSize(canvas, "width");
      if (displayWidth !== void 0) {
        canvas.width = displayWidth;
      }
    }
    if (isNullOrEmpty(renderHeight)) {
      if (canvas.style.height === "") {
        canvas.height = canvas.width / (aspectRatio || 2);
      } else {
        const displayHeight = readUsedSize(canvas, "height");
        if (displayHeight !== void 0) {
          canvas.height = displayHeight;
        }
      }
    }
    return canvas;
  }
  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;
  function addListener(node, type, listener) {
    if (node) {
      node.addEventListener(type, listener, eventListenerOptions);
    }
  }
  function removeListener(chart, type, listener) {
    if (chart && chart.canvas) {
      chart.canvas.removeEventListener(type, listener, eventListenerOptions);
    }
  }
  function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x, y } = getRelativePosition(event, chart);
    return {
      type,
      chart,
      native: event,
      x: x !== void 0 ? x : null,
      y: y !== void 0 ? y : null
    };
  }
  function nodeListContains(nodeList, canvas) {
    for (const node of nodeList) {
      if (node === canvas || node.contains(canvas)) {
        return true;
      }
    }
  }
  function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.addedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.removedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  var drpListeningCharts = /* @__PURE__ */ new Map();
  var oldDevicePixelRatio = 0;
  function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
      return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart) => {
      if (chart.currentDevicePixelRatio !== dpr) {
        resize();
      }
    });
  }
  function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
      window.addEventListener("resize", onWindowResize);
    }
    drpListeningCharts.set(chart, resize);
  }
  function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) {
      window.removeEventListener("resize", onWindowResize);
    }
  }
  function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && _getParentNode(canvas);
    if (!container) {
      return;
    }
    const resize = throttled((width, height) => {
      const w = container.clientWidth;
      listener(width, height);
      if (w < container.clientWidth) {
        listener();
      }
    }, window);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      if (width === 0 && height === 0) {
        return;
      }
      resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
  }
  function releaseObserver(chart, type, observer) {
    if (observer) {
      observer.disconnect();
    }
    if (type === "resize") {
      unlistenDevicePixelRatioChanges(chart);
    }
  }
  function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = throttled((event) => {
      if (chart.ctx !== null) {
        listener(fromNativeEvent(event, chart));
      }
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
  }
  var DomPlatform = class extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
      const context = canvas && canvas.getContext && canvas.getContext("2d");
      if (context && context.canvas === canvas) {
        initCanvas(canvas, aspectRatio);
        return context;
      }
      return null;
    }
    releaseContext(context) {
      const canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return false;
      }
      const initial = canvas[EXPANDO_KEY].initial;
      [
        "height",
        "width"
      ].forEach((prop) => {
        const value = initial[prop];
        if (isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      const style = initial.style || {};
      Object.keys(style).forEach((key) => {
        canvas.style[key] = style[key];
      });
      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
      return true;
    }
    addEventListener(chart, type, listener) {
      this.removeEventListener(chart, type);
      const proxies = chart.$proxies || (chart.$proxies = {});
      const handlers = {
        attach: createAttachObserver,
        detach: createDetachObserver,
        resize: createResizeObserver
      };
      const handler = handlers[type] || createProxyAndListen;
      proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
      const proxies = chart.$proxies || (chart.$proxies = {});
      const proxy = proxies[type];
      if (!proxy) {
        return;
      }
      const handlers = {
        attach: releaseObserver,
        detach: releaseObserver,
        resize: releaseObserver
      };
      const handler = handlers[type] || removeListener;
      handler(chart, type, proxy);
      proxies[type] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
      return getMaximumSize(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
      const container = canvas && _getParentNode(canvas);
      return !!(container && container.isConnected);
    }
  };
  function _detectPlatform(canvas) {
    if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
      return BasicPlatform;
    }
    return DomPlatform;
  }
  var Element = class {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
      const { x, y } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x,
        y
      };
    }
    hasValue() {
      return isNumber(this.x) && isNumber(this.y);
    }
    getProps(props, final) {
      const anims = this.$animations;
      if (!final || !anims) {
        return this;
      }
      const ret = {};
      props.forEach((prop) => {
        ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
      });
      return ret;
    }
  };
  function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
      let i, ilen;
      const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
      for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
        skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
      }
      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
  }
  function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
  }
  function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }
    const factors = _factorize(evenMajorSpacing);
    for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
      const factor = factors[i];
      if (factor > spacing) {
        return factor;
      }
    }
    return Math.max(spacing, 1);
  }
  function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }
    return result;
  }
  function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for (i = 0; i < ticks.length; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
      }
    }
  }
  function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = valueOrDefault(majorStart, 0);
    const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }
    for (i = Math.max(start, 0); i < end; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
      }
    }
  }
  function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) {
      return false;
    }
    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    return diff;
  }
  var reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
  var offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
  var getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
  function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }
    return result;
  }
  function getPixelForGridLine(scale, index2, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex2 = Math.min(index2, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex2);
    let offset;
    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index2 === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex2 - 1)) / 2;
      }
      lineValue += validIndex2 < index2 ? offset : -offset;
      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }
    return lineValue;
  }
  function garbageCollect(caches, length) {
    each(caches, (cache) => {
      const gc = cache.gc;
      const gcLen = gc.length / 2;
      let i;
      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }
        gc.splice(0, gcLen);
      }
    });
  }
  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
  }
  function getTitleHeight(options, fallback) {
    if (!options.display) {
      return 0;
    }
    const font = toFont(options.font, fallback);
    const padding = toPadding(options.padding);
    const lines = isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
  }
  function createScaleContext(parent, scale) {
    return createContext(parent, {
      scale,
      type: "scale"
    });
  }
  function createTickContext(parent, index2, tick) {
    return createContext(parent, {
      tick,
      index: index2,
      type: "tick"
    });
  }
  function titleAlign(align, position, reverse) {
    let ret = _toLeftRightCenter(align);
    if (reverse && position !== "right" || !reverse && position === "right") {
      ret = reverseAlign(ret);
    }
    return ret;
  }
  function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart } = scale;
    const { chartArea, scales: scales2 } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
      } else if (position === "center") {
        titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
      } else {
        titleY = offsetFromEdge(scale, position, offset);
      }
      maxWidth = right - left;
    } else {
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
      } else if (position === "center") {
        titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
      } else {
        titleX = offsetFromEdge(scale, position, offset);
      }
      titleY = _alignStartEnd(align, bottom, top);
      rotation = position === "left" ? -HALF_PI : HALF_PI;
    }
    return {
      titleX,
      titleY,
      maxWidth,
      rotation
    };
  }
  var Scale = class _Scale extends Element {
    constructor(cfg) {
      super();
      this.id = cfg.id;
      this.type = cfg.type;
      this.options = void 0;
      this.ctx = cfg.ctx;
      this.chart = cfg.chart;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this.maxWidth = void 0;
      this.maxHeight = void 0;
      this.paddingTop = void 0;
      this.paddingBottom = void 0;
      this.paddingLeft = void 0;
      this.paddingRight = void 0;
      this.axis = void 0;
      this.labelRotation = void 0;
      this.min = void 0;
      this.max = void 0;
      this._range = void 0;
      this.ticks = [];
      this._gridLineItems = null;
      this._labelItems = null;
      this._labelSizes = null;
      this._length = 0;
      this._maxLength = 0;
      this._longestTextCache = {};
      this._startPixel = void 0;
      this._endPixel = void 0;
      this._reversePixels = false;
      this._userMax = void 0;
      this._userMin = void 0;
      this._suggestedMax = void 0;
      this._suggestedMin = void 0;
      this._ticksLength = 0;
      this._borderValue = 0;
      this._cache = {};
      this._dataLimitsCached = false;
      this.$context = void 0;
    }
    init(options) {
      this.options = options.setContext(this.getContext());
      this.axis = options.axis;
      this._userMin = this.parse(options.min);
      this._userMax = this.parse(options.max);
      this._suggestedMin = this.parse(options.suggestedMin);
      this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index2) {
      return raw;
    }
    getUserBounds() {
      let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
      _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
      _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
      _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
      _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
      return {
        min: finiteOrDefault(_userMin, _suggestedMin),
        max: finiteOrDefault(_userMax, _suggestedMax),
        minDefined: isNumberFinite(_userMin),
        maxDefined: isNumberFinite(_userMax)
      };
    }
    getMinMax(canStack) {
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      let range;
      if (minDefined && maxDefined) {
        return {
          min,
          max
        };
      }
      const metas = this.getMatchingVisibleMetas();
      for (let i = 0, ilen = metas.length; i < ilen; ++i) {
        range = metas[i].controller.getMinMax(this, canStack);
        if (!minDefined) {
          min = Math.min(min, range.min);
        }
        if (!maxDefined) {
          max = Math.max(max, range.max);
        }
      }
      min = maxDefined && min > max ? max : min;
      max = minDefined && min > max ? min : max;
      return {
        min: finiteOrDefault(min, finiteOrDefault(max, min)),
        max: finiteOrDefault(max, finiteOrDefault(min, max))
      };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
      const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
      return items;
    }
    beforeLayout() {
      this._cache = {};
      this._dataLimitsCached = false;
    }
    beforeUpdate() {
      callback(this.options.beforeUpdate, [
        this
      ]);
    }
    update(maxWidth, maxHeight, margins) {
      const { beginAtZero, grace, ticks: tickOpts } = this.options;
      const sampleSize = tickOpts.sampleSize;
      this.beforeUpdate();
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      this.ticks = null;
      this._labelSizes = null;
      this._gridLineItems = null;
      this._labelItems = null;
      this.beforeSetDimensions();
      this.setDimensions();
      this.afterSetDimensions();
      this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
      if (!this._dataLimitsCached) {
        this.beforeDataLimits();
        this.determineDataLimits();
        this.afterDataLimits();
        this._range = _addGrace(this, grace, beginAtZero);
        this._dataLimitsCached = true;
      }
      this.beforeBuildTicks();
      this.ticks = this.buildTicks() || [];
      this.afterBuildTicks();
      const samplingEnabled = sampleSize < this.ticks.length;
      this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
      this.configure();
      this.beforeCalculateLabelRotation();
      this.calculateLabelRotation();
      this.afterCalculateLabelRotation();
      if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
        this.ticks = autoSkip(this, this.ticks);
        this._labelSizes = null;
        this.afterAutoSkip();
      }
      if (samplingEnabled) {
        this._convertTicksToLabels(this.ticks);
      }
      this.beforeFit();
      this.fit();
      this.afterFit();
      this.afterUpdate();
    }
    configure() {
      let reversePixels = this.options.reverse;
      let startPixel, endPixel;
      if (this.isHorizontal()) {
        startPixel = this.left;
        endPixel = this.right;
      } else {
        startPixel = this.top;
        endPixel = this.bottom;
        reversePixels = !reversePixels;
      }
      this._startPixel = startPixel;
      this._endPixel = endPixel;
      this._reversePixels = reversePixels;
      this._length = endPixel - startPixel;
      this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      callback(this.options.afterUpdate, [
        this
      ]);
    }
    beforeSetDimensions() {
      callback(this.options.beforeSetDimensions, [
        this
      ]);
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = 0;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = 0;
        this.bottom = this.height;
      }
      this.paddingLeft = 0;
      this.paddingTop = 0;
      this.paddingRight = 0;
      this.paddingBottom = 0;
    }
    afterSetDimensions() {
      callback(this.options.afterSetDimensions, [
        this
      ]);
    }
    _callHooks(name) {
      this.chart.notifyPlugins(name, this.getContext());
      callback(this.options[name], [
        this
      ]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {
    }
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      callback(this.options.beforeTickToLabelConversion, [
        this
      ]);
    }
    generateTickLabels(ticks) {
      const tickOpts = this.options.ticks;
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        tick = ticks[i];
        tick.label = callback(tickOpts.callback, [
          tick.value,
          i,
          ticks
        ], this);
      }
    }
    afterTickToLabelConversion() {
      callback(this.options.afterTickToLabelConversion, [
        this
      ]);
    }
    beforeCalculateLabelRotation() {
      callback(this.options.beforeCalculateLabelRotation, [
        this
      ]);
    }
    calculateLabelRotation() {
      const options = this.options;
      const tickOpts = options.ticks;
      const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
      const minRotation = tickOpts.minRotation || 0;
      const maxRotation = tickOpts.maxRotation;
      let labelRotation = minRotation;
      let tickWidth, maxHeight, maxLabelDiagonal;
      if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
        this.labelRotation = minRotation;
        return;
      }
      const labelSizes = this._getLabelSizes();
      const maxLabelWidth = labelSizes.widest.width;
      const maxLabelHeight = labelSizes.highest.height;
      const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
      tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }
      this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
      callback(this.options.afterCalculateLabelRotation, [
        this
      ]);
    }
    afterAutoSkip() {
    }
    beforeFit() {
      callback(this.options.beforeFit, [
        this
      ]);
    }
    fit() {
      const minSize = {
        width: 0,
        height: 0
      };
      const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
      const display = this._isVisible();
      const isHorizontal = this.isHorizontal();
      if (display) {
        const titleHeight = getTitleHeight(titleOpts, chart.options.font);
        if (isHorizontal) {
          minSize.width = this.maxWidth;
          minSize.height = getTickMarkLength(gridOpts) + titleHeight;
        } else {
          minSize.height = this.maxHeight;
          minSize.width = getTickMarkLength(gridOpts) + titleHeight;
        }
        if (tickOpts.display && this.ticks.length) {
          const { first, last, widest, highest } = this._getLabelSizes();
          const tickPadding = tickOpts.padding * 2;
          const angleRadians = toRadians(this.labelRotation);
          const cos = Math.cos(angleRadians);
          const sin = Math.sin(angleRadians);
          if (isHorizontal) {
            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
          } else {
            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
          }
          this._calculatePadding(first, last, sin, cos);
        }
      }
      this._handleMargins();
      if (isHorizontal) {
        this.width = this._length = chart.width - this._margins.left - this._margins.right;
        this.height = minSize.height;
      } else {
        this.width = minSize.width;
        this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
      }
    }
    _calculatePadding(first, last, sin, cos) {
      const { ticks: { align, padding }, position } = this.options;
      const isRotated = this.labelRotation !== 0;
      const labelsBelowTicks = position !== "top" && this.axis === "x";
      if (this.isHorizontal()) {
        const offsetLeft = this.getPixelForTick(0) - this.left;
        const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
        let paddingLeft = 0;
        let paddingRight = 0;
        if (isRotated) {
          if (labelsBelowTicks) {
            paddingLeft = cos * first.width;
            paddingRight = sin * last.height;
          } else {
            paddingLeft = sin * first.height;
            paddingRight = cos * last.width;
          }
        } else if (align === "start") {
          paddingRight = last.width;
        } else if (align === "end") {
          paddingLeft = first.width;
        } else if (align !== "inner") {
          paddingLeft = first.width / 2;
          paddingRight = last.width / 2;
        }
        this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
        this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
      } else {
        let paddingTop = last.height / 2;
        let paddingBottom = first.height / 2;
        if (align === "start") {
          paddingTop = 0;
          paddingBottom = first.height;
        } else if (align === "end") {
          paddingTop = last.height;
          paddingBottom = 0;
        }
        this.paddingTop = paddingTop + padding;
        this.paddingBottom = paddingBottom + padding;
      }
    }
    _handleMargins() {
      if (this._margins) {
        this._margins.left = Math.max(this.paddingLeft, this._margins.left);
        this._margins.top = Math.max(this.paddingTop, this._margins.top);
        this._margins.right = Math.max(this.paddingRight, this._margins.right);
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
      }
    }
    afterFit() {
      callback(this.options.afterFit, [
        this
      ]);
    }
    isHorizontal() {
      const { axis, position } = this.options;
      return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
      this.beforeTickToLabelConversion();
      this.generateTickLabels(ticks);
      let i, ilen;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        if (isNullOrUndef(ticks[i].label)) {
          ticks.splice(i, 1);
          ilen--;
          i--;
        }
      }
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let labelSizes = this._labelSizes;
      if (!labelSizes) {
        const sampleSize = this.options.ticks.sampleSize;
        let ticks = this.ticks;
        if (sampleSize < ticks.length) {
          ticks = sample(ticks, sampleSize);
        }
        this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
      }
      return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
      const { ctx, _longestTextCache: caches } = this;
      const widths = [];
      const heights = [];
      const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
      let widestLabelSize = 0;
      let highestLabelSize = 0;
      let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
      for (i = 0; i < length; i += increment) {
        label = ticks[i].label;
        tickFont = this._resolveTickFontOptions(i);
        ctx.font = fontString = tickFont.string;
        cache = caches[fontString] = caches[fontString] || {
          data: {},
          gc: []
        };
        lineHeight = tickFont.lineHeight;
        width = height = 0;
        if (!isNullOrUndef(label) && !isArray(label)) {
          width = _measureText(ctx, cache.data, cache.gc, width, label);
          height = lineHeight;
        } else if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            nestedLabel = label[j];
            if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
              width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
              height += lineHeight;
            }
          }
        }
        widths.push(width);
        heights.push(height);
        widestLabelSize = Math.max(width, widestLabelSize);
        highestLabelSize = Math.max(height, highestLabelSize);
      }
      garbageCollect(caches, length);
      const widest = widths.indexOf(widestLabelSize);
      const highest = heights.indexOf(highestLabelSize);
      const valueAt = (idx) => ({
        width: widths[idx] || 0,
        height: heights[idx] || 0
      });
      return {
        first: valueAt(0),
        last: valueAt(length - 1),
        widest: valueAt(widest),
        highest: valueAt(highest),
        widths,
        heights
      };
    }
    getLabelForValue(value) {
      return value;
    }
    getPixelForValue(value, index2) {
      return NaN;
    }
    getValueForPixel(pixel) {
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getPixelForDecimal(decimal) {
      if (this._reversePixels) {
        decimal = 1 - decimal;
      }
      const pixel = this._startPixel + decimal * this._length;
      return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
      const decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min, max } = this;
      return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index2) {
      const ticks = this.ticks || [];
      if (index2 >= 0 && index2 < ticks.length) {
        const tick = ticks[index2];
        return tick.$context || (tick.$context = createTickContext(this.getContext(), index2, tick));
      }
      return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
      const optionTicks = this.options.ticks;
      const rot = toRadians(this.labelRotation);
      const cos = Math.abs(Math.cos(rot));
      const sin = Math.abs(Math.sin(rot));
      const labelSizes = this._getLabelSizes();
      const padding = optionTicks.autoSkipPadding || 0;
      const w = labelSizes ? labelSizes.widest.width + padding : 0;
      const h = labelSizes ? labelSizes.highest.height + padding : 0;
      return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
      const display = this.options.display;
      if (display !== "auto") {
        return !!display;
      }
      return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
      const axis = this.axis;
      const chart = this.chart;
      const options = this.options;
      const { grid, position, border } = options;
      const offset = grid.offset;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const ticksLength = ticks.length + (offset ? 1 : 0);
      const tl = getTickMarkLength(grid);
      const items = [];
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = borderOpts.display ? borderOpts.width : 0;
      const axisHalfWidth = axisWidth / 2;
      const alignBorderValue = function(pixel) {
        return _alignPixel(chart, pixel, axisWidth);
      };
      let borderValue, i, lineValue, alignedLineValue;
      let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
      if (position === "top") {
        borderValue = alignBorderValue(this.bottom);
        ty1 = this.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === "bottom") {
        borderValue = alignBorderValue(this.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = this.top + tl;
      } else if (position === "left") {
        borderValue = alignBorderValue(this.right);
        tx1 = this.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else if (position === "right") {
        borderValue = alignBorderValue(this.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = this.left + tl;
      } else if (axis === "x") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        y1 = chartArea.top;
        y2 = chartArea.bottom;
        ty1 = borderValue + axisHalfWidth;
        ty2 = ty1 + tl;
      } else if (axis === "y") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        tx1 = borderValue - axisHalfWidth;
        tx2 = tx1 - tl;
        x1 = chartArea.left;
        x2 = chartArea.right;
      }
      const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
      const step = Math.max(1, Math.ceil(ticksLength / limit));
      for (i = 0; i < ticksLength; i += step) {
        const context = this.getContext(i);
        const optsAtIndex = grid.setContext(context);
        const optsAtIndexBorder = border.setContext(context);
        const lineWidth = optsAtIndex.lineWidth;
        const lineColor = optsAtIndex.color;
        const borderDash = optsAtIndexBorder.dash || [];
        const borderDashOffset = optsAtIndexBorder.dashOffset;
        const tickWidth = optsAtIndex.tickWidth;
        const tickColor = optsAtIndex.tickColor;
        const tickBorderDash = optsAtIndex.tickBorderDash || [];
        const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
        lineValue = getPixelForGridLine(this, i, offset);
        if (lineValue === void 0) {
          continue;
        }
        alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }
        items.push({
          tx1,
          ty1,
          tx2,
          ty2,
          x1,
          y1,
          x2,
          y2,
          width: lineWidth,
          color: lineColor,
          borderDash,
          borderDashOffset,
          tickWidth,
          tickColor,
          tickBorderDash,
          tickBorderDashOffset
        });
      }
      this._ticksLength = ticksLength;
      this._borderValue = borderValue;
      return items;
    }
    _computeLabelItems(chartArea) {
      const axis = this.axis;
      const options = this.options;
      const { position, ticks: optionTicks } = options;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const { align, crossAlign, padding, mirror } = optionTicks;
      const tl = getTickMarkLength(options.grid);
      const tickAndPadding = tl + padding;
      const hTickAndPadding = mirror ? -padding : tickAndPadding;
      const rotation = -toRadians(this.labelRotation);
      const items = [];
      let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
      let textBaseline = "middle";
      if (position === "top") {
        y = this.bottom - hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "bottom") {
        y = this.top + hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "left") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x = ret.x;
      } else if (position === "right") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x = ret.x;
      } else if (axis === "x") {
        if (position === "center") {
          y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
        }
        textAlign = this._getXAxisLabelAlignment();
      } else if (axis === "y") {
        if (position === "center") {
          x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          x = this.chart.scales[positionAxisID].getPixelForValue(value);
        }
        textAlign = this._getYAxisLabelAlignment(tl).textAlign;
      }
      if (axis === "y") {
        if (align === "start") {
          textBaseline = "top";
        } else if (align === "end") {
          textBaseline = "bottom";
        }
      }
      const labelSizes = this._getLabelSizes();
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label;
        const optsAtIndex = optionTicks.setContext(this.getContext(i));
        pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
        font = this._resolveTickFontOptions(i);
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;
        const halfCount = lineCount / 2;
        const color2 = optsAtIndex.color;
        const strokeColor = optsAtIndex.textStrokeColor;
        const strokeWidth = optsAtIndex.textStrokeWidth;
        let tickTextAlign = textAlign;
        if (isHorizontal) {
          x = pixel;
          if (textAlign === "inner") {
            if (i === ilen - 1) {
              tickTextAlign = !this.options.reverse ? "right" : "left";
            } else if (i === 0) {
              tickTextAlign = !this.options.reverse ? "left" : "right";
            } else {
              tickTextAlign = "center";
            }
          }
          if (position === "top") {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = -lineCount * lineHeight + lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
            } else {
              textOffset = -labelSizes.highest.height + lineHeight / 2;
            }
          } else {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
            } else {
              textOffset = labelSizes.highest.height - lineCount * lineHeight;
            }
          }
          if (mirror) {
            textOffset *= -1;
          }
          if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
            x += lineHeight / 2 * Math.sin(rotation);
          }
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }
        let backdrop;
        if (optsAtIndex.showLabelBackdrop) {
          const labelPadding = toPadding(optsAtIndex.backdropPadding);
          const height = labelSizes.heights[i];
          const width = labelSizes.widths[i];
          let top = textOffset - labelPadding.top;
          let left = 0 - labelPadding.left;
          switch (textBaseline) {
            case "middle":
              top -= height / 2;
              break;
            case "bottom":
              top -= height;
              break;
          }
          switch (textAlign) {
            case "center":
              left -= width / 2;
              break;
            case "right":
              left -= width;
              break;
            case "inner":
              if (i === ilen - 1) {
                left -= width;
              } else if (i > 0) {
                left -= width / 2;
              }
              break;
          }
          backdrop = {
            left,
            top,
            width: width + labelPadding.width,
            height: height + labelPadding.height,
            color: optsAtIndex.backdropColor
          };
        }
        items.push({
          label,
          font,
          textOffset,
          options: {
            rotation,
            color: color2,
            strokeColor,
            strokeWidth,
            textAlign: tickTextAlign,
            textBaseline,
            translation: [
              x,
              y
            ],
            backdrop
          }
        });
      }
      return items;
    }
    _getXAxisLabelAlignment() {
      const { position, ticks } = this.options;
      const rotation = -toRadians(this.labelRotation);
      if (rotation) {
        return position === "top" ? "left" : "right";
      }
      let align = "center";
      if (ticks.align === "start") {
        align = "left";
      } else if (ticks.align === "end") {
        align = "right";
      } else if (ticks.align === "inner") {
        align = "inner";
      }
      return align;
    }
    _getYAxisLabelAlignment(tl) {
      const { position, ticks: { crossAlign, mirror, padding } } = this.options;
      const labelSizes = this._getLabelSizes();
      const tickAndPadding = tl + padding;
      const widest = labelSizes.widest.width;
      let textAlign;
      let x;
      if (position === "left") {
        if (mirror) {
          x = this.right + padding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x += widest / 2;
          } else {
            textAlign = "right";
            x += widest;
          }
        } else {
          x = this.right - tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x -= widest / 2;
          } else {
            textAlign = "left";
            x = this.left;
          }
        }
      } else if (position === "right") {
        if (mirror) {
          x = this.left + padding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x -= widest / 2;
          } else {
            textAlign = "left";
            x -= widest;
          }
        } else {
          x = this.left + tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x += widest / 2;
          } else {
            textAlign = "right";
            x = this.right;
          }
        }
      } else {
        textAlign = "right";
      }
      return {
        textAlign,
        x
      };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) {
        return;
      }
      const chart = this.chart;
      const position = this.options.position;
      if (position === "left" || position === "right") {
        return {
          top: 0,
          left: this.left,
          bottom: chart.height,
          right: this.right
        };
      }
      if (position === "top" || position === "bottom") {
        return {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: chart.width
        };
      }
    }
    drawBackground() {
      const { ctx, options: { backgroundColor }, left, top, width, height } = this;
      if (backgroundColor) {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(left, top, width, height);
        ctx.restore();
      }
    }
    getLineWidthForValue(value) {
      const grid = this.options.grid;
      if (!this._isVisible() || !grid.display) {
        return 0;
      }
      const ticks = this.ticks;
      const index2 = ticks.findIndex((t) => t.value === value);
      if (index2 >= 0) {
        const opts = grid.setContext(this.getContext(index2));
        return opts.lineWidth;
      }
      return 0;
    }
    drawGrid(chartArea) {
      const grid = this.options.grid;
      const ctx = this.ctx;
      const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
      let i, ilen;
      const drawLine = (p1, p2, style) => {
        if (!style.width || !style.color) {
          return;
        }
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.setLineDash(style.borderDash || []);
        ctx.lineDashOffset = style.borderDashOffset;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      };
      if (grid.display) {
        for (i = 0, ilen = items.length; i < ilen; ++i) {
          const item = items[i];
          if (grid.drawOnChartArea) {
            drawLine({
              x: item.x1,
              y: item.y1
            }, {
              x: item.x2,
              y: item.y2
            }, item);
          }
          if (grid.drawTicks) {
            drawLine({
              x: item.tx1,
              y: item.ty1
            }, {
              x: item.tx2,
              y: item.ty2
            }, {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            });
          }
        }
      }
    }
    drawBorder() {
      const { chart, ctx, options: { border, grid } } = this;
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = border.display ? borderOpts.width : 0;
      if (!axisWidth) {
        return;
      }
      const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
      const borderValue = this._borderValue;
      let x1, x2, y1, y2;
      if (this.isHorizontal()) {
        x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
        x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
        y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.save();
      ctx.lineWidth = borderOpts.width;
      ctx.strokeStyle = borderOpts.color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }
    drawLabels(chartArea) {
      const optionTicks = this.options.ticks;
      if (!optionTicks.display) {
        return;
      }
      const ctx = this.ctx;
      const area = this._computeLabelArea();
      if (area) {
        clipArea(ctx, area);
      }
      const items = this.getLabelItems(chartArea);
      for (const item of items) {
        const renderTextOptions = item.options;
        const tickFont = item.font;
        const label = item.label;
        const y = item.textOffset;
        renderText(ctx, label, 0, y, tickFont, renderTextOptions);
      }
      if (area) {
        unclipArea(ctx);
      }
    }
    drawTitle() {
      const { ctx, options: { position, title, reverse } } = this;
      if (!title.display) {
        return;
      }
      const font = toFont(title.font);
      const padding = toPadding(title.padding);
      const align = title.align;
      let offset = font.lineHeight / 2;
      if (position === "bottom" || position === "center" || isObject(position)) {
        offset += padding.bottom;
        if (isArray(title.text)) {
          offset += font.lineHeight * (title.text.length - 1);
        }
      } else {
        offset += padding.top;
      }
      const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
      renderText(ctx, title.text, 0, 0, font, {
        color: title.color,
        maxWidth,
        rotation,
        textAlign: titleAlign(align, position, reverse),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
    draw(chartArea) {
      if (!this._isVisible()) {
        return;
      }
      this.drawBackground();
      this.drawGrid(chartArea);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(chartArea);
    }
    _layers() {
      const opts = this.options;
      const tz = opts.ticks && opts.ticks.z || 0;
      const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
      const bz = valueOrDefault(opts.border && opts.border.z, 0);
      if (!this._isVisible() || this.draw !== _Scale.prototype.draw) {
        return [
          {
            z: tz,
            draw: (chartArea) => {
              this.draw(chartArea);
            }
          }
        ];
      }
      return [
        {
          z: gz,
          draw: (chartArea) => {
            this.drawBackground();
            this.drawGrid(chartArea);
            this.drawTitle();
          }
        },
        {
          z: bz,
          draw: () => {
            this.drawBorder();
          }
        },
        {
          z: tz,
          draw: (chartArea) => {
            this.drawLabels(chartArea);
          }
        }
      ];
    }
    getMatchingVisibleMetas(type) {
      const metas = this.chart.getSortedVisibleDatasetMetas();
      const axisID = this.axis + "AxisID";
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        const meta = metas[i];
        if (meta[axisID] === this.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }
      return result;
    }
    _resolveTickFontOptions(index2) {
      const opts = this.options.ticks.setContext(this.getContext(index2));
      return toFont(opts.font);
    }
    _maxDigits() {
      const fontSize = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
  };
  var TypedRegistry = class {
    constructor(type, scope, override) {
      this.type = type;
      this.scope = scope;
      this.override = override;
      this.items = /* @__PURE__ */ Object.create(null);
    }
    isForType(type) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
      const proto = Object.getPrototypeOf(item);
      let parentScope;
      if (isIChartComponent(proto)) {
        parentScope = this.register(proto);
      }
      const items = this.items;
      const id = item.id;
      const scope = this.scope + "." + id;
      if (!id) {
        throw new Error("class does not have id: " + item);
      }
      if (id in items) {
        return scope;
      }
      items[id] = item;
      registerDefaults(item, scope, parentScope);
      if (this.override) {
        defaults.override(item.id, item.overrides);
      }
      return scope;
    }
    get(id) {
      return this.items[id];
    }
    unregister(item) {
      const items = this.items;
      const id = item.id;
      const scope = this.scope;
      if (id in items) {
        delete items[id];
      }
      if (scope && id in defaults[scope]) {
        delete defaults[scope][id];
        if (this.override) {
          delete overrides[id];
        }
      }
    }
  };
  function registerDefaults(item, scope, parentScope) {
    const itemDefaults = merge(/* @__PURE__ */ Object.create(null), [
      parentScope ? defaults.get(parentScope) : {},
      defaults.get(scope),
      item.defaults
    ]);
    defaults.set(scope, itemDefaults);
    if (item.defaultRoutes) {
      routeDefaults(scope, item.defaultRoutes);
    }
    if (item.descriptors) {
      defaults.describe(scope, item.descriptors);
    }
  }
  function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property) => {
      const propertyParts = property.split(".");
      const sourceName = propertyParts.pop();
      const sourceScope = [
        scope
      ].concat(propertyParts).join(".");
      const parts = routes[property].split(".");
      const targetName = parts.pop();
      const targetScope = parts.join(".");
      defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
  }
  function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
  }
  var Registry = class {
    constructor() {
      this.controllers = new TypedRegistry(DatasetController, "datasets", true);
      this.elements = new TypedRegistry(Element, "elements");
      this.plugins = new TypedRegistry(Object, "plugins");
      this.scales = new TypedRegistry(Scale, "scales");
      this._typedRegistries = [
        this.controllers,
        this.scales,
        this.elements
      ];
    }
    add(...args) {
      this._each("register", args);
    }
    remove(...args) {
      this._each("unregister", args);
    }
    addControllers(...args) {
      this._each("register", args, this.controllers);
    }
    addElements(...args) {
      this._each("register", args, this.elements);
    }
    addPlugins(...args) {
      this._each("register", args, this.plugins);
    }
    addScales(...args) {
      this._each("register", args, this.scales);
    }
    getController(id) {
      return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
      return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
      return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
      return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
      this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
      this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
      this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
      this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
      [
        ...args
      ].forEach((arg) => {
        const reg = typedRegistry || this._getRegistryForType(arg);
        if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
          this._exec(method, reg, arg);
        } else {
          each(arg, (item) => {
            const itemReg = typedRegistry || this._getRegistryForType(item);
            this._exec(method, itemReg, item);
          });
        }
      });
    }
    _exec(method, registry2, component) {
      const camelMethod = _capitalize(method);
      callback(component["before" + camelMethod], [], component);
      registry2[method](component);
      callback(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
      for (let i = 0; i < this._typedRegistries.length; i++) {
        const reg = this._typedRegistries[i];
        if (reg.isForType(type)) {
          return reg;
        }
      }
      return this.plugins;
    }
    _get(id, typedRegistry, type) {
      const item = typedRegistry.get(id);
      if (item === void 0) {
        throw new Error('"' + id + '" is not a registered ' + type + ".");
      }
      return item;
    }
  };
  var registry = /* @__PURE__ */ new Registry();
  var PluginService = class {
    constructor() {
      this._init = void 0;
    }
    notify(chart, hook, args, filter) {
      if (hook === "beforeInit") {
        this._init = this._createDescriptors(chart, true);
        this._notify(this._init, chart, "install");
      }
      if (this._init === void 0) {
        return;
      }
      const descriptors2 = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
      const result = this._notify(descriptors2, chart, hook, args);
      if (hook === "afterDestroy") {
        this._notify(descriptors2, chart, "stop");
        this._notify(this._init, chart, "uninstall");
        this._init = void 0;
      }
      return result;
    }
    _notify(descriptors2, chart, hook, args) {
      args = args || {};
      for (const descriptor of descriptors2) {
        const plugin = descriptor.plugin;
        const method = plugin[hook];
        const params = [
          chart,
          args,
          descriptor.options
        ];
        if (callback(method, params, plugin) === false && args.cancelable) {
          return false;
        }
      }
      return true;
    }
    invalidate() {
      if (!isNullOrUndef(this._cache)) {
        this._oldCache = this._cache;
        this._cache = void 0;
      }
    }
    _descriptors(chart) {
      if (this._cache) {
        return this._cache;
      }
      const descriptors2 = this._cache = this._createDescriptors(chart);
      this._notifyStateChanges(chart);
      return descriptors2;
    }
    _createDescriptors(chart, all) {
      const config = chart && chart.config;
      const options = valueOrDefault(config.options && config.options.plugins, {});
      const plugins2 = allPlugins(config);
      return options === false && !all ? [] : createDescriptors(chart, plugins2, options, all);
    }
    _notifyStateChanges(chart) {
      const previousDescriptors = this._oldCache || [];
      const descriptors2 = this._cache;
      const diff = (a, b) => a.filter((x) => !b.some((y) => x.plugin.id === y.plugin.id));
      this._notify(diff(previousDescriptors, descriptors2), chart, "stop");
      this._notify(diff(descriptors2, previousDescriptors), chart, "start");
    }
  };
  function allPlugins(config) {
    const localIds = {};
    const plugins2 = [];
    const keys = Object.keys(registry.plugins.items);
    for (let i = 0; i < keys.length; i++) {
      plugins2.push(registry.getPlugin(keys[i]));
    }
    const local = config.plugins || [];
    for (let i = 0; i < local.length; i++) {
      const plugin = local[i];
      if (plugins2.indexOf(plugin) === -1) {
        plugins2.push(plugin);
        localIds[plugin.id] = true;
      }
    }
    return {
      plugins: plugins2,
      localIds
    };
  }
  function getOpts(options, all) {
    if (!all && options === false) {
      return null;
    }
    if (options === true) {
      return {};
    }
    return options;
  }
  function createDescriptors(chart, { plugins: plugins2, localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins2) {
      const id = plugin.id;
      const opts = getOpts(options[id], all);
      if (opts === null) {
        continue;
      }
      result.push({
        plugin,
        options: pluginOpts(chart.config, {
          plugin,
          local: localIds[id]
        }, opts, context)
      });
    }
    return result;
  }
  function pluginOpts(config, { plugin, local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) {
      scopes.push(plugin.defaults);
    }
    return config.createResolver(scopes, context, [
      ""
    ], {
      scriptable: false,
      indexable: false,
      allKeys: true
    });
  }
  function getIndexAxis(type, options) {
    const datasetDefaults = defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
  }
  function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") {
      axis = indexAxis;
    } else if (id === "_value_") {
      axis = indexAxis === "x" ? "y" : "x";
    }
    return axis;
  }
  function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
  }
  function idMatchesAxis(id) {
    if (id === "x" || id === "y" || id === "r") {
      return id;
    }
  }
  function axisFromPosition(position) {
    if (position === "top" || position === "bottom") {
      return "x";
    }
    if (position === "left" || position === "right") {
      return "y";
    }
  }
  function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) {
      return id;
    }
    for (const opts of scaleOptions) {
      const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
      if (axis) {
        return axis;
      }
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
  }
  function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + "AxisID"] === id) {
      return {
        axis
      };
    }
  }
  function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
      const boundDs = config.data.datasets.filter((d) => d.xAxisID === id || d.yAxisID === id);
      if (boundDs.length) {
        return getAxisFromDataset(id, "x", boundDs[0]) || getAxisFromDataset(id, "y", boundDs[0]);
      }
    }
    return {};
  }
  function mergeScaleConfig(config, options) {
    const chartDefaults = overrides[config.type] || {
      scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales2 = /* @__PURE__ */ Object.create(null);
    Object.keys(configScales).forEach((id) => {
      const scaleConf = configScales[id];
      if (!isObject(scaleConf)) {
        return console.error(`Invalid scale configuration for scale: ${id}`);
      }
      if (scaleConf._proxy) {
        return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
      }
      const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), defaults.scales[scaleConf.type]);
      const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
      const defaultScaleOptions = chartDefaults.scales || {};
      scales2[id] = mergeIf(/* @__PURE__ */ Object.create(null), [
        {
          axis
        },
        scaleConf,
        defaultScaleOptions[axis],
        defaultScaleOptions[defaultId]
      ]);
    });
    config.data.datasets.forEach((dataset) => {
      const type = dataset.type || config.type;
      const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
      const datasetDefaults = overrides[type] || {};
      const defaultScaleOptions = datasetDefaults.scales || {};
      Object.keys(defaultScaleOptions).forEach((defaultID) => {
        const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
        const id = dataset[axis + "AxisID"] || axis;
        scales2[id] = scales2[id] || /* @__PURE__ */ Object.create(null);
        mergeIf(scales2[id], [
          {
            axis
          },
          configScales[id],
          defaultScaleOptions[defaultID]
        ]);
      });
    });
    Object.keys(scales2).forEach((key) => {
      const scale = scales2[key];
      mergeIf(scale, [
        defaults.scales[scale.type],
        defaults.scale
      ]);
    });
    return scales2;
  }
  function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
  }
  function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
  }
  function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
  }
  var keyCache = /* @__PURE__ */ new Map();
  var keysCached = /* @__PURE__ */ new Set();
  function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
      keys = generate();
      keyCache.set(cacheKey, keys);
      keysCached.add(keys);
    }
    return keys;
  }
  var addIfFound = (set2, obj, key) => {
    const opts = resolveObjectKey(obj, key);
    if (opts !== void 0) {
      set2.add(opts);
    }
  };
  var Config = class {
    constructor(config) {
      this._config = initConfig(config);
      this._scopeCache = /* @__PURE__ */ new Map();
      this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(type) {
      this._config.type = type;
    }
    get data() {
      return this._config.data;
    }
    set data(data) {
      this._config.data = initData(data);
    }
    get options() {
      return this._config.options;
    }
    set options(options) {
      this._config.options = options;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const config = this._config;
      this.clearCache();
      initOptions(config);
    }
    clearCache() {
      this._scopeCache.clear();
      this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
      return cachedKeys(datasetType, () => [
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
      return cachedKeys(`${datasetType}.transition.${transition}`, () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`
        ],
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
      return cachedKeys(`${datasetType}-${elementType}`, () => [
        [
          `datasets.${datasetType}.elements.${elementType}`,
          `datasets.${datasetType}`,
          `elements.${elementType}`,
          ""
        ]
      ]);
    }
    pluginScopeKeys(plugin) {
      const id = plugin.id;
      const type = this.type;
      return cachedKeys(`${type}-plugin-${id}`, () => [
        [
          `plugins.${id}`,
          ...plugin.additionalOptionScopes || []
        ]
      ]);
    }
    _cachedScopes(mainScope, resetCache) {
      const _scopeCache = this._scopeCache;
      let cache = _scopeCache.get(mainScope);
      if (!cache || resetCache) {
        cache = /* @__PURE__ */ new Map();
        _scopeCache.set(mainScope, cache);
      }
      return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
      const { options, type } = this;
      const cache = this._cachedScopes(mainScope, resetCache);
      const cached = cache.get(keyLists);
      if (cached) {
        return cached;
      }
      const scopes = /* @__PURE__ */ new Set();
      keyLists.forEach((keys) => {
        if (mainScope) {
          scopes.add(mainScope);
          keys.forEach((key) => addIfFound(scopes, mainScope, key));
        }
        keys.forEach((key) => addIfFound(scopes, options, key));
        keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
        keys.forEach((key) => addIfFound(scopes, defaults, key));
        keys.forEach((key) => addIfFound(scopes, descriptors, key));
      });
      const array = Array.from(scopes);
      if (array.length === 0) {
        array.push(/* @__PURE__ */ Object.create(null));
      }
      if (keysCached.has(keyLists)) {
        cache.set(keyLists, array);
      }
      return array;
    }
    chartOptionScopes() {
      const { options, type } = this;
      return [
        options,
        overrides[type] || {},
        defaults.datasets[type] || {},
        {
          type
        },
        defaults,
        descriptors
      ];
    }
    resolveNamedOptions(scopes, names2, context, prefixes = [
      ""
    ]) {
      const result = {
        $shared: true
      };
      const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
      let options = resolver;
      if (needContext(resolver, names2)) {
        result.$shared = false;
        context = isFunction(context) ? context() : context;
        const subResolver = this.createResolver(scopes, context, subPrefixes);
        options = _attachContext(resolver, context, subResolver);
      }
      for (const prop of names2) {
        result[prop] = options[prop];
      }
      return result;
    }
    createResolver(scopes, context, prefixes = [
      ""
    ], descriptorDefaults) {
      const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
      return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
    }
  };
  function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
      const resolver = _createResolver(scopes, prefixes);
      cached = {
        resolver,
        subPrefixes: prefixes.filter((p) => !p.toLowerCase().includes("hover"))
      };
      cache.set(cacheKey, cached);
    }
    return cached;
  }
  var hasFunction = (value) => isObject(value) && Object.getOwnPropertyNames(value).some((key) => isFunction(value[key]));
  function needContext(proxy, names2) {
    const { isScriptable, isIndexable } = _descriptors(proxy);
    for (const prop of names2) {
      const scriptable = isScriptable(prop);
      const indexable = isIndexable(prop);
      const value = (indexable || scriptable) && proxy[prop];
      if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) {
        return true;
      }
    }
    return false;
  }
  var version = "4.5.1";
  var KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
  ];
  function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
  }
  function compare2Level(l1, l2) {
    return function(a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }
  function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    callback(animationOptions && animationOptions.onComplete, [
      context
    ], chart);
  }
  function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    callback(animationOptions && animationOptions.onProgress, [
      context
    ], chart);
  }
  function getCanvas(item) {
    if (_isDomSupported() && typeof item === "string") {
      item = document.getElementById(item);
    } else if (item && item.length) {
      item = item[0];
    }
    if (item && item.canvas) {
      item = item.canvas;
    }
    return item;
  }
  var instances = {};
  var getChart = (key) => {
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c) => c.canvas === canvas).pop();
  };
  function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const intKey = +key;
      if (intKey >= start) {
        const value = obj[key];
        delete obj[key];
        if (move > 0 || intKey > start) {
          obj[intKey + move] = value;
        }
      }
    }
  }
  function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") {
      return null;
    }
    if (isClick) {
      return lastEvent;
    }
    return e;
  }
  var Chart = class {
    static defaults = defaults;
    static instances = instances;
    static overrides = overrides;
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
      registry.add(...items);
      invalidatePlugins();
    }
    static unregister(...items) {
      registry.remove(...items);
      invalidatePlugins();
    }
    constructor(item, userConfig) {
      const config = this.config = new Config(userConfig);
      const initialCanvas = getCanvas(item);
      const existingChart = getChart(initialCanvas);
      if (existingChart) {
        throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
      }
      const options = config.createResolver(config.chartOptionScopes(), this.getContext());
      this.platform = new (config.platform || _detectPlatform(initialCanvas))();
      this.platform.updateConfig(config);
      const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
      const canvas = context && context.canvas;
      const height = canvas && canvas.height;
      const width = canvas && canvas.width;
      this.id = uid();
      this.ctx = context;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this._options = options;
      this._aspectRatio = this.aspectRatio;
      this._layers = [];
      this._metasets = [];
      this._stacks = void 0;
      this.boxes = [];
      this.currentDevicePixelRatio = void 0;
      this.chartArea = void 0;
      this._active = [];
      this._lastEvent = void 0;
      this._listeners = {};
      this._responsiveListeners = void 0;
      this._sortedMetasets = [];
      this.scales = {};
      this._plugins = new PluginService();
      this.$proxies = {};
      this._hiddenIndices = {};
      this.attached = false;
      this._animationsDisabled = void 0;
      this.$context = void 0;
      this._doResize = debounce((mode) => this.update(mode), options.resizeDelay || 0);
      this._dataChanges = [];
      instances[this.id] = this;
      if (!context || !canvas) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      animator.listen(this, "complete", onAnimationsComplete);
      animator.listen(this, "progress", onAnimationProgress);
      this._initialize();
      if (this.attached) {
        this.update();
      }
    }
    get aspectRatio() {
      const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
      if (!isNullOrUndef(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
    get data() {
      return this.config.data;
    }
    set data(data) {
      this.config.data = data;
    }
    get options() {
      return this._options;
    }
    set options(options) {
      this.config.options = options;
    }
    get registry() {
      return registry;
    }
    _initialize() {
      this.notifyPlugins("beforeInit");
      if (this.options.responsive) {
        this.resize();
      } else {
        retinaScale(this, this.options.devicePixelRatio);
      }
      this.bindEvents();
      this.notifyPlugins("afterInit");
      return this;
    }
    clear() {
      clearCanvas(this.canvas, this.ctx);
      return this;
    }
    stop() {
      animator.stop(this);
      return this;
    }
    resize(width, height) {
      if (!animator.running(this)) {
        this._resize(width, height);
      } else {
        this._resizeBeforeDraw = {
          width,
          height
        };
      }
    }
    _resize(width, height) {
      const options = this.options;
      const canvas = this.canvas;
      const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
      const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
      const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
      const mode = this.width ? "resize" : "attach";
      this.width = newSize.width;
      this.height = newSize.height;
      this._aspectRatio = this.aspectRatio;
      if (!retinaScale(this, newRatio, true)) {
        return;
      }
      this.notifyPlugins("resize", {
        size: newSize
      });
      callback(options.onResize, [
        this,
        newSize
      ], this);
      if (this.attached) {
        if (this._doResize(mode)) {
          this.render();
        }
      }
    }
    ensureScalesHaveIDs() {
      const options = this.options;
      const scalesOptions = options.scales || {};
      each(scalesOptions, (axisOptions, axisID) => {
        axisOptions.id = axisID;
      });
    }
    buildOrUpdateScales() {
      const options = this.options;
      const scaleOpts = options.scales;
      const scales2 = this.scales;
      const updated = Object.keys(scales2).reduce((obj, id) => {
        obj[id] = false;
        return obj;
      }, {});
      let items = [];
      if (scaleOpts) {
        items = items.concat(Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === "r";
          const isHorizontal = axis === "x";
          return {
            options: scaleOptions,
            dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
            dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
          };
        }));
      }
      each(items, (item) => {
        const scaleOptions = item.options;
        const id = scaleOptions.id;
        const axis = determineAxis(id, scaleOptions);
        const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
        if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
        updated[id] = true;
        let scale = null;
        if (id in scales2 && scales2[id].type === scaleType) {
          scale = scales2[id];
        } else {
          const scaleClass = registry.getScale(scaleType);
          scale = new scaleClass({
            id,
            type: scaleType,
            ctx: this.ctx,
            chart: this
          });
          scales2[scale.id] = scale;
        }
        scale.init(scaleOptions, options);
      });
      each(updated, (hasUpdated, id) => {
        if (!hasUpdated) {
          delete scales2[id];
        }
      });
      each(scales2, (scale) => {
        layouts.configure(this, scale, scale.options);
        layouts.addBox(this, scale);
      });
    }
    _updateMetasets() {
      const metasets = this._metasets;
      const numData = this.data.datasets.length;
      const numMeta = metasets.length;
      metasets.sort((a, b) => a.index - b.index);
      if (numMeta > numData) {
        for (let i = numData; i < numMeta; ++i) {
          this._destroyDatasetMeta(i);
        }
        metasets.splice(numData, numMeta - numData);
      }
      this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: metasets, data: { datasets } } = this;
      if (metasets.length > datasets.length) {
        delete this._stacks;
      }
      metasets.forEach((meta, index2) => {
        if (datasets.filter((x) => x === meta._dataset).length === 0) {
          this._destroyDatasetMeta(index2);
        }
      });
    }
    buildOrUpdateControllers() {
      const newControllers = [];
      const datasets = this.data.datasets;
      let i, ilen;
      this._removeUnreferencedMetasets();
      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        const dataset = datasets[i];
        let meta = this.getDatasetMeta(i);
        const type = dataset.type || this.config.type;
        if (meta.type && meta.type !== type) {
          this._destroyDatasetMeta(i);
          meta = this.getDatasetMeta(i);
        }
        meta.type = type;
        meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
        meta.order = dataset.order || 0;
        meta.index = i;
        meta.label = "" + dataset.label;
        meta.visible = this.isDatasetVisible(i);
        if (meta.controller) {
          meta.controller.updateIndex(i);
          meta.controller.linkScales();
        } else {
          const ControllerClass = registry.getController(type);
          const { datasetElementType, dataElementType } = defaults.datasets[type];
          Object.assign(ControllerClass, {
            dataElementType: registry.getElement(dataElementType),
            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
          });
          meta.controller = new ControllerClass(this, i);
          newControllers.push(meta.controller);
        }
      }
      this._updateMetasets();
      return newControllers;
    }
    _resetElements() {
      each(this.data.datasets, (dataset, datasetIndex) => {
        this.getDatasetMeta(datasetIndex).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements();
      this.notifyPlugins("reset");
    }
    update(mode) {
      const config = this.config;
      config.update();
      const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
      const animsDisabled = this._animationsDisabled = !options.animation;
      this._updateScales();
      this._checkEventBindings();
      this._updateHiddenIndices();
      this._plugins.invalidate();
      if (this.notifyPlugins("beforeUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      const newControllers = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let minPadding = 0;
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
        const { controller } = this.getDatasetMeta(i);
        const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
        controller.buildOrUpdateElements(reset);
        minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
      }
      minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
      this._updateLayout(minPadding);
      if (!animsDisabled) {
        each(newControllers, (controller) => {
          controller.reset();
        });
      }
      this._updateDatasets(mode);
      this.notifyPlugins("afterUpdate", {
        mode
      });
      this._layers.sort(compare2Level("z", "_idx"));
      const { _active, _lastEvent } = this;
      if (_lastEvent) {
        this._eventHandler(_lastEvent, true);
      } else if (_active.length) {
        this._updateHoverStyles(_active, _active, true);
      }
      this.render();
    }
    _updateScales() {
      each(this.scales, (scale) => {
        layouts.removeBox(this, scale);
      });
      this.ensureScalesHaveIDs();
      this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const options = this.options;
      const existingEvents = new Set(Object.keys(this._listeners));
      const newEvents = new Set(options.events);
      if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
        this.unbindEvents();
        this.bindEvents();
      }
    }
    _updateHiddenIndices() {
      const { _hiddenIndices } = this;
      const changes = this._getUniformDataChanges() || [];
      for (const { method, start, count } of changes) {
        const move = method === "_removeElements" ? -count : count;
        moveNumericKeys(_hiddenIndices, start, move);
      }
    }
    _getUniformDataChanges() {
      const _dataChanges = this._dataChanges;
      if (!_dataChanges || !_dataChanges.length) {
        return;
      }
      this._dataChanges = [];
      const datasetCount = this.data.datasets.length;
      const makeSet = (idx) => new Set(_dataChanges.filter((c) => c[0] === idx).map((c, i) => i + "," + c.splice(1).join(",")));
      const changeSet = makeSet(0);
      for (let i = 1; i < datasetCount; i++) {
        if (!setsEqual(changeSet, makeSet(i))) {
          return;
        }
      }
      return Array.from(changeSet).map((c) => c.split(",")).map((a) => ({
        method: a[1],
        start: +a[2],
        count: +a[3]
      }));
    }
    _updateLayout(minPadding) {
      if (this.notifyPlugins("beforeLayout", {
        cancelable: true
      }) === false) {
        return;
      }
      layouts.update(this, this.width, this.height, minPadding);
      const area = this.chartArea;
      const noArea = area.width <= 0 || area.height <= 0;
      this._layers = [];
      each(this.boxes, (box) => {
        if (noArea && box.position === "chartArea") {
          return;
        }
        if (box.configure) {
          box.configure();
        }
        this._layers.push(...box._layers());
      }, this);
      this._layers.forEach((item, index2) => {
        item._idx = index2;
      });
      this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
      if (this.notifyPlugins("beforeDatasetsUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this.getDatasetMeta(i).controller.configure();
      }
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this._updateDataset(i, isFunction(mode) ? mode({
          datasetIndex: i
        }) : mode);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode
      });
    }
    _updateDataset(index2, mode) {
      const meta = this.getDatasetMeta(index2);
      const args = {
        meta,
        index: index2,
        mode,
        cancelable: true
      };
      if (this.notifyPlugins("beforeDatasetUpdate", args) === false) {
        return;
      }
      meta.controller._update(mode);
      args.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
      if (this.notifyPlugins("beforeRender", {
        cancelable: true
      }) === false) {
        return;
      }
      if (animator.has(this)) {
        if (this.attached && !animator.running(this)) {
          animator.start(this);
        }
      } else {
        this.draw();
        onAnimationsComplete({
          chart: this
        });
      }
    }
    draw() {
      let i;
      if (this._resizeBeforeDraw) {
        const { width, height } = this._resizeBeforeDraw;
        this._resizeBeforeDraw = null;
        this._resize(width, height);
      }
      this.clear();
      if (this.width <= 0 || this.height <= 0) {
        return;
      }
      if (this.notifyPlugins("beforeDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const layers = this._layers;
      for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
        layers[i].draw(this.chartArea);
      }
      this._drawDatasets();
      for (; i < layers.length; ++i) {
        layers[i].draw(this.chartArea);
      }
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
      const metasets = this._sortedMetasets;
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metasets.length; i < ilen; ++i) {
        const meta = metasets[i];
        if (!filterVisible || meta.visible) {
          result.push(meta);
        }
      }
      return result;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const metasets = this.getSortedVisibleDatasetMetas();
      for (let i = metasets.length - 1; i >= 0; --i) {
        this._drawDataset(metasets[i]);
      }
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
      const ctx = this.ctx;
      const args = {
        meta,
        index: meta.index,
        cancelable: true
      };
      const clip = getDatasetClipArea(this, meta);
      if (this.notifyPlugins("beforeDatasetDraw", args) === false) {
        return;
      }
      if (clip) {
        clipArea(ctx, clip);
      }
      meta.controller.draw();
      if (clip) {
        unclipArea(ctx);
      }
      args.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
      return _isPointInArea(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
      const method = Interaction.modes[mode];
      if (typeof method === "function") {
        return method(this, e, options, useFinalPosition);
      }
      return [];
    }
    getDatasetMeta(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      const metasets = this._metasets;
      let meta = metasets.filter((x) => x && x._dataset === dataset).pop();
      if (!meta) {
        meta = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: dataset && dataset.order || 0,
          index: datasetIndex,
          _dataset: dataset,
          _parsed: [],
          _sorted: false
        };
        metasets.push(meta);
      }
      return meta;
    }
    getContext() {
      return this.$context || (this.$context = createContext(null, {
        chart: this,
        type: "chart"
      }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      if (!dataset) {
        return false;
      }
      const meta = this.getDatasetMeta(datasetIndex);
      return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
      const meta = this.getDatasetMeta(datasetIndex);
      meta.hidden = !visible;
    }
    toggleDataVisibility(index2) {
      this._hiddenIndices[index2] = !this._hiddenIndices[index2];
    }
    getDataVisibility(index2) {
      return !this._hiddenIndices[index2];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
      const mode = visible ? "show" : "hide";
      const meta = this.getDatasetMeta(datasetIndex);
      const anims = meta.controller._resolveAnimations(void 0, mode);
      if (defined(dataIndex)) {
        meta.data[dataIndex].hidden = !visible;
        this.update();
      } else {
        this.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, {
          visible
        });
        this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
      }
    }
    hide(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
      const meta = this._metasets[datasetIndex];
      if (meta && meta.controller) {
        meta.controller._destroy();
      }
      delete this._metasets[datasetIndex];
    }
    _stop() {
      let i, ilen;
      this.stop();
      animator.remove(this);
      for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this._destroyDatasetMeta(i);
      }
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas, ctx } = this;
      this._stop();
      this.config.clearCache();
      if (canvas) {
        this.unbindEvents();
        clearCanvas(canvas, ctx);
        this.platform.releaseContext(ctx);
        this.canvas = null;
        this.ctx = null;
      }
      delete instances[this.id];
      this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
      return this.canvas.toDataURL(...args);
    }
    bindEvents() {
      this.bindUserEvents();
      if (this.options.responsive) {
        this.bindResponsiveEvents();
      } else {
        this.attached = true;
      }
    }
    bindUserEvents() {
      const listeners = this._listeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const listener = (e, x, y) => {
        e.offsetX = x;
        e.offsetY = y;
        this._eventHandler(e);
      };
      each(this.options.events, (type) => _add(type, listener));
    }
    bindResponsiveEvents() {
      if (!this._responsiveListeners) {
        this._responsiveListeners = {};
      }
      const listeners = this._responsiveListeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const _remove = (type, listener2) => {
        if (listeners[type]) {
          platform.removeEventListener(this, type, listener2);
          delete listeners[type];
        }
      };
      const listener = (width, height) => {
        if (this.canvas) {
          this.resize(width, height);
        }
      };
      let detached;
      const attached = () => {
        _remove("attach", attached);
        this.attached = true;
        this.resize();
        _add("resize", listener);
        _add("detach", detached);
      };
      detached = () => {
        this.attached = false;
        _remove("resize", listener);
        this._stop();
        this._resize(0, 0);
        _add("attach", attached);
      };
      if (platform.isAttached(this.canvas)) {
        attached();
      } else {
        detached();
      }
    }
    unbindEvents() {
      each(this._listeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._listeners = {};
      each(this._responsiveListeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._responsiveListeners = void 0;
    }
    updateHoverStyle(items, mode, enabled) {
      const prefix = enabled ? "set" : "remove";
      let meta, item, i, ilen;
      if (mode === "dataset") {
        meta = this.getDatasetMeta(items[0].datasetIndex);
        meta.controller["_" + prefix + "DatasetHoverStyle"]();
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
        if (controller) {
          controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements) {
      const lastActive = this._active || [];
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("No dataset found at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(active, lastActive);
      if (changed) {
        this._active = active;
        this._lastEvent = null;
        this._updateHoverStyles(active, lastActive);
      }
    }
    notifyPlugins(hook, args, filter) {
      return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
      return this._plugins._cache.filter((p) => p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
      const hoverOptions = this.options.hover;
      const diff = (a, b) => a.filter((x) => !b.some((y) => x.datasetIndex === y.datasetIndex && x.index === y.index));
      const deactivated = diff(lastActive, active);
      const activated = replay ? active : diff(active, lastActive);
      if (deactivated.length) {
        this.updateHoverStyle(deactivated, hoverOptions.mode, false);
      }
      if (activated.length && hoverOptions.mode) {
        this.updateHoverStyle(activated, hoverOptions.mode, true);
      }
    }
    _eventHandler(e, replay) {
      const args = {
        event: e,
        replay,
        cancelable: true,
        inChartArea: this.isPointInArea(e)
      };
      const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) {
        return;
      }
      const changed = this._handleEvent(e, replay, args.inChartArea);
      args.cancelable = false;
      this.notifyPlugins("afterEvent", args, eventFilter);
      if (changed || args.changed) {
        this.render();
      }
      return this;
    }
    _handleEvent(e, replay, inChartArea) {
      const { _active: lastActive = [], options } = this;
      const useFinalPosition = replay;
      const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
      const isClick = _isClickEvent(e);
      const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
      if (inChartArea) {
        this._lastEvent = null;
        callback(options.onHover, [
          e,
          active,
          this
        ], this);
        if (isClick) {
          callback(options.onClick, [
            e,
            active,
            this
          ], this);
        }
      }
      const changed = !_elementsEqual(active, lastActive);
      if (changed || replay) {
        this._active = active;
        this._updateHoverStyles(active, lastActive, replay);
      }
      this._lastEvent = lastEvent;
      return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
      if (e.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const hoverOptions = this.options.hover;
      return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
  };
  function invalidatePlugins() {
    return each(Chart.instances, (chart) => chart._plugins.invalidate());
  }
  function clipSelf(ctx, element, endAngle) {
    const { startAngle, x, y, outerRadius, innerRadius, options } = element;
    const { borderWidth, borderJoinStyle } = options;
    const outerAngleClip = Math.min(borderWidth / outerRadius, _normalizeAngle(startAngle - endAngle));
    ctx.beginPath();
    ctx.arc(x, y, outerRadius - borderWidth / 2, startAngle + outerAngleClip / 2, endAngle - outerAngleClip / 2);
    if (innerRadius > 0) {
      const innerAngleClip = Math.min(borderWidth / innerRadius, _normalizeAngle(startAngle - endAngle));
      ctx.arc(x, y, innerRadius + borderWidth / 2, endAngle - innerAngleClip / 2, startAngle + innerAngleClip / 2, true);
    } else {
      const clipWidth = Math.min(borderWidth / 2, outerRadius * _normalizeAngle(startAngle - endAngle));
      if (borderJoinStyle === "round") {
        ctx.arc(x, y, clipWidth, endAngle - PI / 2, startAngle + PI / 2, true);
      } else if (borderJoinStyle === "bevel") {
        const r = 2 * clipWidth * clipWidth;
        const endX = -r * Math.cos(endAngle + PI / 2) + x;
        const endY = -r * Math.sin(endAngle + PI / 2) + y;
        const startX = r * Math.cos(startAngle + PI / 2) + x;
        const startY = r * Math.sin(startAngle + PI / 2) + y;
        ctx.lineTo(endX, endY);
        ctx.lineTo(startX, startY);
      }
    }
    ctx.closePath();
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.clip("evenodd");
  }
  function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x, y, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
      angleMargin = pixelMargin / innerRadius;
      ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
  }
  function toRadiusCorners(value) {
    return _readValueToProps(value, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd"
    ]);
  }
  function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val) => {
      const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
      return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
      outerStart: computeOuterLimit(o.outerStart),
      outerEnd: computeOuterLimit(o.outerEnd),
      innerStart: _limitValue(o.innerStart, 0, innerLimit),
      innerEnd: _limitValue(o.innerEnd, 0, innerLimit)
    };
  }
  function rThetaToXY(r, theta, x, y) {
    return {
      x: x + r * Math.cos(theta),
      y: y + r * Math.sin(theta)
    };
  }
  function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x, y, startAngle: start, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha2 = end - start;
    if (spacing) {
      const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
      const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
      const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
      const adjustedAngle = avNogSpacingRadius !== 0 ? alpha2 * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha2;
      spacingOffset = (alpha2 - adjustedAngle) / 2;
    }
    const beta = Math.max(1e-3, alpha2 * outerRadius - offset / PI) / outerRadius;
    const angleOffset = (alpha2 - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
      const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
      ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
      ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
      if (outerEnd > 0) {
        const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
      }
      const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
      ctx.lineTo(p4.x, p4.y);
      if (innerEnd > 0) {
        const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
      }
      const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
      ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
      ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
      if (innerStart > 0) {
        const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
      }
      const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
      ctx.lineTo(p8.x, p8.y);
      if (outerStart > 0) {
        const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
      }
    } else {
      ctx.moveTo(x, y);
      const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
      const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
      ctx.lineTo(outerStartX, outerStartY);
      const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
      const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
      ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
  }
  function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i = 0; i < fullCircles; ++i) {
        ctx.fill();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
  }
  function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference, options } = element;
    const { borderWidth, borderJoinStyle, borderDash, borderDashOffset, borderRadius } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) {
      return;
    }
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
      ctx.lineWidth = borderWidth * 2;
      ctx.lineJoin = borderJoinStyle || "round";
    } else {
      ctx.lineWidth = borderWidth;
      ctx.lineJoin = borderJoinStyle || "bevel";
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i = 0; i < fullCircles; ++i) {
        ctx.stroke();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    if (inner) {
      clipArc(ctx, element, endAngle);
    }
    if (options.selfJoin && endAngle - startAngle >= PI && borderRadius === 0 && borderJoinStyle !== "miter") {
      clipSelf(ctx, element, endAngle);
    }
    if (!fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      ctx.stroke();
    }
  }
  var ArcElement = class extends Element {
    static id = "arc";
    static defaults = {
      borderAlign: "center",
      borderColor: "#fff",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: true,
      selfJoin: false
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash"
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg) {
      super();
      this.options = void 0;
      this.circumference = void 0;
      this.startAngle = void 0;
      this.endAngle = void 0;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.pixelMargin = 0;
      this.fullCircles = 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(chartX, chartY, useFinalPosition) {
      const point = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      const { angle, distance } = getAngleFromPoint(point, {
        x: chartX,
        y: chartY
      });
      const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "circumference"
      ], useFinalPosition);
      const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
      const _circumference = valueOrDefault(circumference, endAngle - startAngle);
      const nonZeroBetween = _angleBetween(angle, startAngle, endAngle) && startAngle !== endAngle;
      const betweenAngles = _circumference >= TAU || nonZeroBetween;
      const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
      return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
      const { x, y, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ], useFinalPosition);
      const { offset, spacing } = this.options;
      const halfAngle = (startAngle + endAngle) / 2;
      const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
      return {
        x: x + Math.cos(halfAngle) * halfRadius,
        y: y + Math.sin(halfAngle) * halfRadius
      };
    }
    tooltipPosition(useFinalPosition) {
      return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
      const { options, circumference } = this;
      const offset = (options.offset || 0) / 4;
      const spacing = (options.spacing || 0) / 2;
      const circular = options.circular;
      this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
      this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
      if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
        return;
      }
      ctx.save();
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
      const fix = 1 - Math.sin(Math.min(PI, circumference || 0));
      const radiusOffset = offset * fix;
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      drawArc(ctx, this, radiusOffset, spacing, circular);
      drawBorder(ctx, this, radiusOffset, spacing, circular);
      ctx.restore();
    }
  };
  function setStyle(ctx, options, style = options) {
    ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
  }
  function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
  }
  function getLineMethod(options) {
    if (options.stepped) {
      return _steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierCurveTo;
    }
    return lineTo;
  }
  function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
      count,
      start,
      loop: segment.loop,
      ilen: end < start && !outside ? count + end - start : end - start
    };
  }
  function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start, loop, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i, point, prev;
    for (i = 0; i <= ilen; ++i) {
      point = points[(start + (reverse ? ilen - i : i)) % count];
      if (point.skip) {
        continue;
      } else if (move) {
        ctx.moveTo(point.x, point.y);
        move = false;
      } else {
        lineMethod(ctx, prev, point, reverse, options.stepped);
      }
      prev = point;
    }
    if (loop) {
      point = points[(start + (reverse ? ilen : 0)) % count];
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
  }
  function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index2) => (start + (reverse ? ilen - index2 : index2)) % count;
    const drawX = () => {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
    };
    if (move) {
      point = points[pointIndex(0)];
      ctx.moveTo(point.x, point.y);
    }
    for (i = 0; i <= ilen; ++i) {
      point = points[pointIndex(i)];
      if (point.skip) {
        continue;
      }
      const x = point.x;
      const y = point.y;
      const truncX = x | 0;
      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
        } else if (y > maxY) {
          maxY = y;
        }
        avgX = (countX * avgX + x) / ++countX;
      } else {
        drawX();
        ctx.lineTo(x, y);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
      }
      lastY = y;
    }
    drawX();
  }
  function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
  }
  function _getInterpolationMethod(options) {
    if (options.stepped) {
      return _steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierInterpolation;
    }
    return _pointInLine;
  }
  function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
      path = line._path = new Path2D();
      if (line.path(path, start, count)) {
        path.closePath();
      }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
  }
  function strokePathDirect(ctx, line, start, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments) {
      setStyle(ctx, options, segment.style);
      ctx.beginPath();
      if (segmentMethod(ctx, line, segment, {
        start,
        end: start + count - 1
      })) {
        ctx.closePath();
      }
      ctx.stroke();
    }
  }
  var usePath2D = typeof Path2D === "function";
  function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) {
      strokePathWithCache(ctx, line, start, count);
    } else {
      strokePathDirect(ctx, line, start, count);
    }
  }
  var LineElement = class extends Element {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: true,
      cubicInterpolationMode: "default",
      fill: false,
      spanGaps: false,
      stepped: false,
      tension: 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash" && name !== "fill"
    };
    constructor(cfg) {
      super();
      this.animated = true;
      this.options = void 0;
      this._chart = void 0;
      this._loop = void 0;
      this._fullLoop = void 0;
      this._path = void 0;
      this._points = void 0;
      this._segments = void 0;
      this._decimated = false;
      this._pointsUpdated = false;
      this._datasetIndex = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    updateControlPoints(chartArea, indexAxis) {
      const options = this.options;
      if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
        const loop = options.spanGaps ? this._loop : this._fullLoop;
        _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
        this._pointsUpdated = true;
      }
    }
    set points(points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = _computeSegments(this, this.options.segment));
    }
    first() {
      const segments = this.segments;
      const points = this.points;
      return segments.length && points[segments[0].start];
    }
    last() {
      const segments = this.segments;
      const points = this.points;
      const count = segments.length;
      return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
      const options = this.options;
      const value = point[property];
      const points = this.points;
      const segments = _boundSegments(this, {
        property,
        start: value,
        end: value
      });
      if (!segments.length) {
        return;
      }
      const result = [];
      const _interpolate = _getInterpolationMethod(options);
      let i, ilen;
      for (i = 0, ilen = segments.length; i < ilen; ++i) {
        const { start, end } = segments[i];
        const p1 = points[start];
        const p2 = points[end];
        if (p1 === p2) {
          result.push(p1);
          continue;
        }
        const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
        const interpolated = _interpolate(p1, p2, t, options.stepped);
        interpolated[property] = point[property];
        result.push(interpolated);
      }
      return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
      const segmentMethod = _getSegmentMethod(this);
      return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
      const segments = this.segments;
      const segmentMethod = _getSegmentMethod(this);
      let loop = this._loop;
      start = start || 0;
      count = count || this.points.length - start;
      for (const segment of segments) {
        loop &= segmentMethod(ctx, this, segment, {
          start,
          end: start + count - 1
        });
      }
      return !!loop;
    }
    draw(ctx, chartArea, start, count) {
      const options = this.options || {};
      const points = this.points || [];
      if (points.length && options.borderWidth) {
        ctx.save();
        draw(ctx, this, start, count);
        ctx.restore();
      }
      if (this.animated) {
        this._pointsUpdated = false;
        this._path = void 0;
      }
    }
  };
  function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
      axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
  }
  var PointElement = class extends Element {
    static id = "point";
    parsed;
    skip;
    stop;
    /**
    * @type {any}
    */
    static defaults = {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0
    };
    /**
    * @type {any}
    */
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.parsed = void 0;
      this.skip = void 0;
      this.stop = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      const options = this.options;
      const { x, y } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x, y } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x,
        y
      };
    }
    size(options) {
      options = options || this.options || {};
      let radius = options.radius || 0;
      radius = Math.max(radius, radius && options.hoverRadius || 0);
      const borderWidth = radius && options.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
      const options = this.options;
      if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
        return;
      }
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
      const options = this.options || {};
      return options.radius + options.hitRadius;
    }
  };
  function getBarBounds(bar, useFinalPosition) {
    const { x, y, base, width, height } = bar.getProps([
      "x",
      "y",
      "base",
      "width",
      "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
      half = height / 2;
      left = Math.min(x, base);
      right = Math.max(x, base);
      top = y - half;
      bottom = y + half;
    } else {
      half = width / 2;
      left = x - half;
      right = x + half;
      top = Math.min(y, base);
      bottom = Math.max(y, base);
    }
    return {
      left,
      top,
      right,
      bottom
    };
  }
  function skipOrLimit(skip2, value, min, max) {
    return skip2 ? 0 : _limitValue(value, min, max);
  }
  function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip2 = bar.borderSkipped;
    const o = toTRBL(value);
    return {
      t: skipOrLimit(skip2.top, o.top, 0, maxH),
      r: skipOrLimit(skip2.right, o.right, 0, maxW),
      b: skipOrLimit(skip2.bottom, o.bottom, 0, maxH),
      l: skipOrLimit(skip2.left, o.left, 0, maxW)
    };
  }
  function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps([
      "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o = toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip2 = bar.borderSkipped;
    const enableBorder = enableBorderRadius || isObject(value);
    return {
      topLeft: skipOrLimit(!enableBorder || skip2.top || skip2.left, o.topLeft, 0, maxR),
      topRight: skipOrLimit(!enableBorder || skip2.top || skip2.right, o.topRight, 0, maxR),
      bottomLeft: skipOrLimit(!enableBorder || skip2.bottom || skip2.left, o.bottomLeft, 0, maxR),
      bottomRight: skipOrLimit(!enableBorder || skip2.bottom || skip2.right, o.bottomRight, 0, maxR)
    };
  }
  function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
        radius
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
        radius: {
          topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
          topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
          bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
          bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
        }
      }
    };
  }
  function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || _isBetween(x, bounds.left, bounds.right)) && (skipY || _isBetween(y, bounds.top, bounds.bottom));
  }
  function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
  }
  function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
  }
  function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
      x: rect.x + x,
      y: rect.y + y,
      w: rect.w + w,
      h: rect.h + h,
      radius: rect.radius
    };
  }
  var BarElement = class extends Element {
    static id = "bar";
    static defaults = {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: "auto",
      pointStyle: void 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.horizontal = void 0;
      this.base = void 0;
      this.width = void 0;
      this.height = void 0;
      this.inflateAmount = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    draw(ctx) {
      const { inflateAmount, options: { borderColor, backgroundColor } } = this;
      const { inner, outer } = boundingRects(this);
      const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
      ctx.save();
      if (outer.w !== inner.w || outer.h !== inner.h) {
        ctx.beginPath();
        addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
        ctx.clip();
        addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
        ctx.fillStyle = borderColor;
        ctx.fill("evenodd");
      }
      ctx.beginPath();
      addRectPath(ctx, inflateRect(inner, inflateAmount));
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x, y, base, horizontal } = this.getProps([
        "x",
        "y",
        "base",
        "horizontal"
      ], useFinalPosition);
      return {
        x: horizontal ? (x + base) / 2 : x,
        y: horizontal ? y : (y + base) / 2
      };
    }
    getRange(axis) {
      return axis === "x" ? this.width / 2 : this.height / 2;
    }
  };
  var elements = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcElement,
    BarElement,
    LineElement,
    PointElement
  });
  var BORDER_COLORS = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)"
    // grey
  ];
  var BACKGROUND_COLORS = /* @__PURE__ */ BORDER_COLORS.map((color2) => color2.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
  }
  function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
  }
  function colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
    return ++i;
  }
  function colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(() => getBorderColor(i++));
    return i;
  }
  function colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(() => getBackgroundColor(i++));
    return i;
  }
  function getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex) => {
      const controller = chart.getDatasetMeta(datasetIndex).controller;
      if (controller instanceof DoughnutController) {
        i = colorizeDoughnutDataset(dataset, i);
      } else if (controller instanceof PolarAreaController) {
        i = colorizePolarAreaDataset(dataset, i);
      } else if (controller) {
        i = colorizeDefaultDataset(dataset, i);
      }
    };
  }
  function containsColorsDefinitions(descriptors2) {
    let k;
    for (k in descriptors2) {
      if (descriptors2[k].borderColor || descriptors2[k].backgroundColor) {
        return true;
      }
    }
    return false;
  }
  function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
  }
  function containsDefaultColorsDefenitions() {
    return defaults.borderColor !== "rgba(0,0,0,0.1)" || defaults.backgroundColor !== "rgba(0,0,0,0.1)";
  }
  var plugin_colors = {
    id: "colors",
    defaults: {
      enabled: true,
      forceOverride: false
    },
    beforeLayout(chart, _args, options) {
      if (!options.enabled) {
        return;
      }
      const { data: { datasets }, options: chartOptions } = chart.config;
      const { elements: elements2 } = chartOptions;
      const containsColorDefenition = containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements2 && containsColorsDefinitions(elements2) || containsDefaultColorsDefenitions();
      if (!options.forceOverride && containsColorDefenition) {
        return;
      }
      const colorizer = getColorizer(chart);
      datasets.forEach(colorizer);
    }
  };
  function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) {
      return data.slice(start, start + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for (i = 0; i < samples - 2; i++) {
      let avgX = 0;
      let avgY = 0;
      let j;
      const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
      const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
      const avgRangeLength = avgRangeEnd - avgRangeStart;
      for (j = avgRangeStart; j < avgRangeEnd; j++) {
        avgX += data[j].x;
        avgY += data[j].y;
      }
      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
      const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
      const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
      const { x: pointAx, y: pointAy } = data[a];
      maxArea = area = -1;
      for (j = rangeOffs; j < rangeTo; j++) {
        area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = data[j];
          nextA = j;
        }
      }
      decimated[sampledIndex++] = maxAreaPoint;
      a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
  }
  function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for (i = start; i < start + count; ++i) {
      point = data[i];
      x = (point.x - xMin) / dx * availableWidth;
      y = point.y;
      const truncX = x | 0;
      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
          minIndex = i;
        } else if (y > maxY) {
          maxY = y;
          maxIndex = i;
        }
        avgX = (countX * avgX + point.x) / ++countX;
      } else {
        const lastIndex = i - 1;
        if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
          const intermediateIndex1 = Math.min(minIndex, maxIndex);
          const intermediateIndex2 = Math.max(minIndex, maxIndex);
          if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
            decimated.push({
              ...data[intermediateIndex1],
              x: avgX
            });
          }
          if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
            decimated.push({
              ...data[intermediateIndex2],
              x: avgX
            });
          }
        }
        if (i > 0 && lastIndex !== startIndex) {
          decimated.push(data[lastIndex]);
        }
        decimated.push(point);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
        minIndex = maxIndex = startIndex = i;
      }
    }
    return decimated;
  }
  function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
      const data = dataset._data;
      delete dataset._decimated;
      delete dataset._data;
      Object.defineProperty(dataset, "data", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: data
      });
    }
  }
  function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset) => {
      cleanDecimatedDataset(dataset);
    });
  }
  function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
    return {
      start,
      count
    };
  }
  var plugin_decimation = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: false
    },
    beforeElementsUpdate: (chart, args, options) => {
      if (!options.enabled) {
        cleanDecimatedData(chart);
        return;
      }
      const availableWidth = chart.width;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const { _data, indexAxis } = dataset;
        const meta = chart.getDatasetMeta(datasetIndex);
        const data = _data || dataset.data;
        if (resolve([
          indexAxis,
          chart.options.indexAxis
        ]) === "y") {
          return;
        }
        if (!meta.controller.supportsDecimation) {
          return;
        }
        const xAxis = chart.scales[meta.xAxisID];
        if (xAxis.type !== "linear" && xAxis.type !== "time") {
          return;
        }
        if (chart.options.parsing) {
          return;
        }
        let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
        const threshold = options.threshold || 4 * availableWidth;
        if (count <= threshold) {
          cleanDecimatedDataset(dataset);
          return;
        }
        if (isNullOrUndef(_data)) {
          dataset._data = data;
          delete dataset.data;
          Object.defineProperty(dataset, "data", {
            configurable: true,
            enumerable: true,
            get: function() {
              return this._decimated;
            },
            set: function(d) {
              this._data = d;
            }
          });
        }
        let decimated;
        switch (options.algorithm) {
          case "lttb":
            decimated = lttbDecimation(data, start, count, availableWidth, options);
            break;
          case "min-max":
            decimated = minMaxDecimation(data, start, count, availableWidth);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
        }
        dataset._decimated = decimated;
      });
    },
    destroy(chart) {
      cleanDecimatedData(chart);
    }
  };
  function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments) {
      let { start, end } = segment;
      end = _findSegmentEnd(start, end, points);
      const bounds = _getBounds(property, points[start], points[end], segment.loop);
      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[start],
          end: points[end]
        });
        continue;
      }
      const targetSegments = _boundSegments(target, bounds);
      for (const tgt of targetSegments) {
        const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
        const fillSources = _boundSegment(segment, points, subBounds);
        for (const fillSource of fillSources) {
          parts.push({
            source: fillSource,
            target: tgt,
            start: {
              [property]: _getEdge(bounds, subBounds, "start", Math.max)
            },
            end: {
              [property]: _getEdge(bounds, subBounds, "end", Math.min)
            }
          });
        }
      }
    }
    return parts;
  }
  function _getBounds(property, first, last, loop) {
    if (loop) {
      return;
    }
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
      start = _normalizeAngle(start);
      end = _normalizeAngle(end);
    }
    return {
      property,
      start,
      end
    };
  }
  function _pointsFromSegments(boundary, line) {
    const { x = null, y = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start, end }) => {
      end = _findSegmentEnd(start, end, linePoints);
      const first = linePoints[start];
      const last = linePoints[end];
      if (y !== null) {
        points.push({
          x: first.x,
          y
        });
        points.push({
          x: last.x,
          y
        });
      } else if (x !== null) {
        points.push({
          x,
          y: first.y
        });
        points.push({
          x,
          y: last.y
        });
      }
    });
    return points;
  }
  function _findSegmentEnd(start, end, points) {
    for (; end > start; end--) {
      const point = points[end];
      if (!isNaN(point.x) && !isNaN(point.y)) {
        break;
      }
    }
    return end;
  }
  function _getEdge(a, b, prop, fn) {
    if (a && b) {
      return fn(a[prop], b[prop]);
    }
    return a ? a[prop] : b ? b[prop] : 0;
  }
  function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (isArray(boundary)) {
      _loop = true;
      points = boundary;
    } else {
      points = _pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
      points,
      options: {
        tension: 0
      },
      _loop,
      _fullLoop: _loop
    }) : null;
  }
  function _shouldApplyFill(source) {
    return source && source.fill !== false;
  }
  function _resolveTarget(sources, index2, propagate) {
    const source = sources[index2];
    let fill2 = source.fill;
    const visited = [
      index2
    ];
    let target;
    if (!propagate) {
      return fill2;
    }
    while (fill2 !== false && visited.indexOf(fill2) === -1) {
      if (!isNumberFinite(fill2)) {
        return fill2;
      }
      target = sources[fill2];
      if (!target) {
        return false;
      }
      if (target.visible) {
        return fill2;
      }
      visited.push(fill2);
      fill2 = target.fill;
    }
    return false;
  }
  function _decodeFill(line, index2, count) {
    const fill2 = parseFillOption(line);
    if (isObject(fill2)) {
      return isNaN(fill2.value) ? false : fill2;
    }
    let target = parseFloat(fill2);
    if (isNumberFinite(target) && Math.floor(target) === target) {
      return decodeTargetIndex(fill2[0], index2, target, count);
    }
    return [
      "origin",
      "start",
      "end",
      "stack",
      "shape"
    ].indexOf(fill2) >= 0 && fill2;
  }
  function decodeTargetIndex(firstCh, index2, target, count) {
    if (firstCh === "-" || firstCh === "+") {
      target = index2 + target;
    }
    if (target === index2 || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  function _getTargetPixel(fill2, scale) {
    let pixel = null;
    if (fill2 === "start") {
      pixel = scale.bottom;
    } else if (fill2 === "end") {
      pixel = scale.top;
    } else if (isObject(fill2)) {
      pixel = scale.getPixelForValue(fill2.value);
    } else if (scale.getBasePixel) {
      pixel = scale.getBasePixel();
    }
    return pixel;
  }
  function _getTargetValue(fill2, scale, startValue) {
    let value;
    if (fill2 === "start") {
      value = startValue;
    } else if (fill2 === "end") {
      value = scale.options.reverse ? scale.min : scale.max;
    } else if (isObject(fill2)) {
      value = fill2.value;
    } else {
      value = scale.getBaseValue();
    }
    return value;
  }
  function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill2 = valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill2 === void 0) {
      fill2 = !!options.backgroundColor;
    }
    if (fill2 === false || fill2 === null) {
      return false;
    }
    if (fill2 === true) {
      return "origin";
    }
    return fill2;
  }
  function _buildStackLine(source) {
    const { scale, index: index2, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index2);
    linesBelow.push(_createBoundaryLine({
      x: null,
      y: scale.bottom
    }, line));
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      for (let j = segment.start; j <= segment.end; j++) {
        addPointsBelow(points, sourcePoints[j], linesBelow);
      }
    }
    return new LineElement({
      points,
      options: {}
    });
  }
  function getLinesBelow(scale, index2) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for (let i = 0; i < metas.length; i++) {
      const meta = metas[i];
      if (meta.index === index2) {
        break;
      }
      if (!meta.hidden) {
        below.unshift(meta.dataset);
      }
    }
    return below;
  }
  function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for (let j = 0; j < linesBelow.length; j++) {
      const line = linesBelow[j];
      const { first, last, point } = findPoint(line, sourcePoint, "x");
      if (!point || first && last) {
        continue;
      }
      if (first) {
        postponed.unshift(point);
      } else {
        points.push(point);
        if (!last) {
          break;
        }
      }
    }
    points.push(...postponed);
  }
  function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
      return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const firstValue = linePoints[segment.start][property];
      const lastValue = linePoints[segment.end][property];
      if (_isBetween(pointValue, firstValue, lastValue)) {
        first = pointValue === firstValue;
        last = pointValue === lastValue;
        break;
      }
    }
    return {
      first,
      last,
      point
    };
  }
  var simpleArc = class {
    constructor(opts) {
      this.x = opts.x;
      this.y = opts.y;
      this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
      const { x, y, radius } = this;
      bounds = bounds || {
        start: 0,
        end: TAU
      };
      ctx.arc(x, y, radius, bounds.end, bounds.start, true);
      return !opts.bounds;
    }
    interpolate(point) {
      const { x, y, radius } = this;
      const angle = point.angle;
      return {
        x: x + Math.cos(angle) * radius,
        y: y + Math.sin(angle) * radius,
        angle
      };
    }
  };
  function _getTarget(source) {
    const { chart, fill: fill2, line } = source;
    if (isNumberFinite(fill2)) {
      return getLineByIndex(chart, fill2);
    }
    if (fill2 === "stack") {
      return _buildStackLine(source);
    }
    if (fill2 === "shape") {
      return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
      return boundary;
    }
    return _createBoundaryLine(boundary, line);
  }
  function getLineByIndex(chart, index2) {
    const meta = chart.getDatasetMeta(index2);
    const visible = meta && chart.isDatasetVisible(index2);
    return visible ? meta.dataset : null;
  }
  function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
  }
  function computeLinearBoundary(source) {
    const { scale = {}, fill: fill2 } = source;
    const pixel = _getTargetPixel(fill2, scale);
    if (isNumberFinite(pixel)) {
      const horizontal = scale.isHorizontal();
      return {
        x: horizontal ? pixel : null,
        y: horizontal ? null : pixel
      };
    }
    return null;
  }
  function computeCircularBoundary(source) {
    const { scale, fill: fill2 } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill2, scale, start);
    const target = [];
    if (options.grid.circular) {
      const center = scale.getPointPositionForValue(0, start);
      return new simpleArc({
        x: center.x,
        y: center.y,
        radius: scale.getDistanceFromCenterForValue(value)
      });
    }
    for (let i = 0; i < length; ++i) {
      target.push(scale.getPointPositionForValue(i, value));
    }
    return target;
  }
  function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { chart, index: index2, line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color2 = lineOpts.backgroundColor;
    const { above = color2, below = color2 } = fillOption || {};
    const meta = chart.getDatasetMeta(index2);
    const clip = getDatasetClipArea(chart, meta);
    if (target && line.points.length) {
      clipArea(ctx, area);
      doFill(ctx, {
        line,
        target,
        above,
        below,
        area,
        scale,
        axis,
        clip
      });
      unclipArea(ctx);
    }
  }
  function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale, clip } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    let fillColor = below;
    if (below !== above) {
      if (property === "x") {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
          line,
          target,
          color: above,
          scale,
          property,
          clip
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
      } else if (property === "y") {
        clipHorizontal(ctx, target, area.left);
        fill(ctx, {
          line,
          target,
          color: below,
          scale,
          property,
          clip
        });
        ctx.restore();
        ctx.save();
        clipHorizontal(ctx, target, area.right);
        fillColor = above;
      }
    }
    fill(ctx, {
      line,
      target,
      color: fillColor,
      scale,
      property,
      clip
    });
    ctx.restore();
  }
  function clipVertical(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start, end } = segment;
      const firstPoint = points[start];
      const lastPoint = points[_findSegmentEnd(start, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(firstPoint.x, clipY);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(lastPoint.x, clipY);
      }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
  }
  function clipHorizontal(ctx, target, clipX) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start, end } = segment;
      const firstPoint = points[start];
      const lastPoint = points[_findSegmentEnd(start, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(clipX, firstPoint.y);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(clipX, lastPoint.y);
      }
    }
    ctx.lineTo(clipX, target.first().y);
    ctx.closePath();
    ctx.clip();
  }
  function fill(ctx, cfg) {
    const { line, target, property, color: color2, scale, clip } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start, end } of segments) {
      const { style: { backgroundColor = color2 } = {} } = src;
      const notShape = target !== true;
      ctx.save();
      ctx.fillStyle = backgroundColor;
      clipBounds(ctx, scale, clip, notShape && _getBounds(property, start, end));
      ctx.beginPath();
      const lineLoop = !!line.pathSegment(ctx, src);
      let loop;
      if (notShape) {
        if (lineLoop) {
          ctx.closePath();
        } else {
          interpolatedLineTo(ctx, target, end, property);
        }
        const targetLoop = !!target.pathSegment(ctx, tgt, {
          move: lineLoop,
          reverse: true
        });
        loop = lineLoop && targetLoop;
        if (!loop) {
          interpolatedLineTo(ctx, target, start, property);
        }
      }
      ctx.closePath();
      ctx.fill(loop ? "evenodd" : "nonzero");
      ctx.restore();
    }
  }
  function clipBounds(ctx, scale, clip, bounds) {
    const chartArea = scale.chart.chartArea;
    const { property, start, end } = bounds || {};
    if (property === "x" || property === "y") {
      let left, top, right, bottom;
      if (property === "x") {
        left = start;
        top = chartArea.top;
        right = end;
        bottom = chartArea.bottom;
      } else {
        left = chartArea.left;
        top = start;
        right = chartArea.right;
        bottom = end;
      }
      ctx.beginPath();
      if (clip) {
        left = Math.max(left, clip.left);
        right = Math.min(right, clip.right);
        top = Math.max(top, clip.top);
        bottom = Math.min(bottom, clip.bottom);
      }
      ctx.rect(left, top, right - left, bottom - top);
      ctx.clip();
    }
  }
  function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
      ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
  }
  var index = {
    id: "filler",
    afterDatasetsUpdate(chart, _args, options) {
      const count = (chart.data.datasets || []).length;
      const sources = [];
      let meta, i, line, source;
      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        line = meta.dataset;
        source = null;
        if (line && line.options && line instanceof LineElement) {
          source = {
            visible: chart.isDatasetVisible(i),
            index: i,
            fill: _decodeFill(line, i, count),
            chart,
            axis: meta.controller.options.indexAxis,
            scale: meta.vScale,
            line
          };
        }
        meta.$filler = source;
        sources.push(source);
      }
      for (i = 0; i < count; ++i) {
        source = sources[i];
        if (!source || source.fill === false) {
          continue;
        }
        source.fill = _resolveTarget(sources, i, options.propagate);
      }
    },
    beforeDraw(chart, _args, options) {
      const draw2 = options.drawTime === "beforeDraw";
      const metasets = chart.getSortedVisibleDatasetMetas();
      const area = chart.chartArea;
      for (let i = metasets.length - 1; i >= 0; --i) {
        const source = metasets[i].$filler;
        if (!source) {
          continue;
        }
        source.line.updateControlPoints(area, source.axis);
        if (draw2 && source.fill) {
          _drawfill(chart.ctx, source, area);
        }
      }
    },
    beforeDatasetsDraw(chart, _args, options) {
      if (options.drawTime !== "beforeDatasetsDraw") {
        return;
      }
      const metasets = chart.getSortedVisibleDatasetMetas();
      for (let i = metasets.length - 1; i >= 0; --i) {
        const source = metasets[i].$filler;
        if (_shouldApplyFill(source)) {
          _drawfill(chart.ctx, source, chart.chartArea);
        }
      }
    },
    beforeDatasetDraw(chart, args, options) {
      const source = args.meta.$filler;
      if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") {
        return;
      }
      _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
      propagate: true,
      drawTime: "beforeDatasetDraw"
    }
  };
  var getBoxSize = (labelOpts, fontSize) => {
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
      boxHeight = Math.min(boxHeight, fontSize);
      boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
      boxWidth,
      boxHeight,
      itemHeight: Math.max(fontSize, boxHeight)
    };
  };
  var itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
  var Legend = class extends Element {
    constructor(config) {
      super();
      this._added = false;
      this.legendHitBoxes = [];
      this._hoveredItem = null;
      this.doughnutMode = false;
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this.legendItems = void 0;
      this.columnSizes = void 0;
      this.lineWidths = void 0;
      this.maxHeight = void 0;
      this.maxWidth = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.height = void 0;
      this.width = void 0;
      this._margins = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight, margins) {
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins;
      this.setDimensions();
      this.buildLabels();
      this.fit();
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = this._margins.left;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = this._margins.top;
        this.bottom = this.height;
      }
    }
    buildLabels() {
      const labelOpts = this.options.labels || {};
      let legendItems = callback(labelOpts.generateLabels, [
        this.chart
      ], this) || [];
      if (labelOpts.filter) {
        legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
      }
      if (labelOpts.sort) {
        legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
      }
      if (this.options.reverse) {
        legendItems.reverse();
      }
      this.legendItems = legendItems;
    }
    fit() {
      const { options, ctx } = this;
      if (!options.display) {
        this.width = this.height = 0;
        return;
      }
      const labelOpts = options.labels;
      const labelFont = toFont(labelOpts.font);
      const fontSize = labelFont.size;
      const titleHeight = this._computeTitleHeight();
      const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
      let width, height;
      ctx.font = labelFont.string;
      if (this.isHorizontal()) {
        width = this.maxWidth;
        height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      } else {
        height = this.maxHeight;
        width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
      }
      this.width = Math.min(width, options.maxWidth || this.maxWidth);
      this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
      const { ctx, maxWidth, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const lineWidths = this.lineWidths = [
        0
      ];
      const lineHeight = itemHeight + padding;
      let totalHeight = titleHeight;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      let row = -1;
      let top = -lineHeight;
      this.legendItems.forEach((legendItem, i) => {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
          totalHeight += lineHeight;
          lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          top += lineHeight;
          row++;
        }
        hitboxes[i] = {
          left: 0,
          top,
          row,
          width: itemWidth,
          height: itemHeight
        };
        lineWidths[lineWidths.length - 1] += itemWidth + padding;
      });
      return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
      const { ctx, maxHeight, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const columnSizes = this.columnSizes = [];
      const heightLimit = maxHeight - titleHeight;
      let totalWidth = padding;
      let currentColWidth = 0;
      let currentColHeight = 0;
      let left = 0;
      let col = 0;
      this.legendItems.forEach((legendItem, i) => {
        const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
        if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
          totalWidth += currentColWidth + padding;
          columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
          });
          left += currentColWidth + padding;
          col++;
          currentColWidth = currentColHeight = 0;
        }
        hitboxes[i] = {
          left,
          top: currentColHeight,
          col,
          width: itemWidth,
          height: itemHeight
        };
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += itemHeight + padding;
      });
      totalWidth += currentColWidth;
      columnSizes.push({
        width: currentColWidth,
        height: currentColHeight
      });
      return totalWidth;
    }
    adjustHitBoxes() {
      if (!this.options.display) {
        return;
      }
      const titleHeight = this._computeTitleHeight();
      const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
      const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
      if (this.isHorizontal()) {
        let row = 0;
        let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
        for (const hitbox of hitboxes) {
          if (row !== hitbox.row) {
            row = hitbox.row;
            left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
          }
          hitbox.top += this.top + titleHeight + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
          left += hitbox.width + padding;
        }
      } else {
        let col = 0;
        let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        for (const hitbox of hitboxes) {
          if (hitbox.col !== col) {
            col = hitbox.col;
            top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
          }
          hitbox.top = top;
          hitbox.left += this.left + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
          top += hitbox.height + padding;
        }
      }
    }
    isHorizontal() {
      return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
      if (this.options.display) {
        const ctx = this.ctx;
        clipArea(ctx, this);
        this._draw();
        unclipArea(ctx);
      }
    }
    _draw() {
      const { options: opts, columnSizes, lineWidths, ctx } = this;
      const { align, labels: labelOpts } = opts;
      const defaultColor = defaults.color;
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const labelFont = toFont(labelOpts.font);
      const { padding } = labelOpts;
      const fontSize = labelFont.size;
      const halfFontSize = fontSize / 2;
      let cursor;
      this.drawTitle();
      ctx.textAlign = rtlHelper.textAlign("left");
      ctx.textBaseline = "middle";
      ctx.lineWidth = 0.5;
      ctx.font = labelFont.string;
      const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
      const drawLegendBox = function(x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
          return;
        }
        ctx.save();
        const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
        ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
        ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
        ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
        ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
        if (labelOpts.usePointStyle) {
          const drawOptions = {
            radius: boxHeight * Math.SQRT2 / 2,
            pointStyle: legendItem.pointStyle,
            rotation: legendItem.rotation,
            borderWidth: lineWidth
          };
          const centerX = rtlHelper.xPlus(x, boxWidth / 2);
          const centerY = y + halfFontSize;
          drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
        } else {
          const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
          const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
          const borderRadius = toTRBLCorners(legendItem.borderRadius);
          ctx.beginPath();
          if (Object.values(borderRadius).some((v) => v !== 0)) {
            addRoundedRectPath(ctx, {
              x: xBoxLeft,
              y: yBoxTop,
              w: boxWidth,
              h: boxHeight,
              radius: borderRadius
            });
          } else {
            ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
          }
          ctx.fill();
          if (lineWidth !== 0) {
            ctx.stroke();
          }
        }
        ctx.restore();
      };
      const fillText = function(x, y, legendItem) {
        renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
          strikethrough: legendItem.hidden,
          textAlign: rtlHelper.textAlign(legendItem.textAlign)
        });
      };
      const isHorizontal = this.isHorizontal();
      const titleHeight = this._computeTitleHeight();
      if (isHorizontal) {
        cursor = {
          x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
          y: this.top + padding + titleHeight,
          line: 0
        };
      } else {
        cursor = {
          x: this.left + padding,
          y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
          line: 0
        };
      }
      overrideTextDirection(this.ctx, opts.textDirection);
      const lineHeight = itemHeight + padding;
      this.legendItems.forEach((legendItem, i) => {
        ctx.strokeStyle = legendItem.fontColor;
        ctx.fillStyle = legendItem.fontColor;
        const textWidth = ctx.measureText(legendItem.text).width;
        const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
        const width = boxWidth + halfFontSize + textWidth;
        let x = cursor.x;
        let y = cursor.y;
        rtlHelper.setWidth(this.width);
        if (isHorizontal) {
          if (i > 0 && x + width + padding > this.right) {
            y = cursor.y += lineHeight;
            cursor.line++;
            x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + lineHeight > this.bottom) {
          x = cursor.x = x + columnSizes[cursor.line].width + padding;
          cursor.line++;
          y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
        }
        const realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
        fillText(rtlHelper.x(x), y, legendItem);
        if (isHorizontal) {
          cursor.x += width + padding;
        } else if (typeof legendItem.text !== "string") {
          const fontLineHeight = labelFont.lineHeight;
          cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
        } else {
          cursor.y += lineHeight;
        }
      });
      restoreTextDirection(this.ctx, opts.textDirection);
    }
    drawTitle() {
      const opts = this.options;
      const titleOpts = opts.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      if (!titleOpts.display) {
        return;
      }
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const ctx = this.ctx;
      const position = titleOpts.position;
      const halfFontSize = titleFont.size / 2;
      const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
      let y;
      let left = this.left;
      let maxWidth = this.width;
      if (this.isHorizontal()) {
        maxWidth = Math.max(...this.lineWidths);
        y = this.top + topPaddingPlusHalfFontSize;
        left = _alignStartEnd(opts.align, left, this.right - maxWidth);
      } else {
        const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
        y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
      }
      const x = _alignStartEnd(position, left, left + maxWidth);
      ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
      ctx.textBaseline = "middle";
      ctx.strokeStyle = titleOpts.color;
      ctx.fillStyle = titleOpts.color;
      ctx.font = titleFont.string;
      renderText(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
      const titleOpts = this.options.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
      let i, hitBox, lh;
      if (_isBetween(x, this.left, this.right) && _isBetween(y, this.top, this.bottom)) {
        lh = this.legendHitBoxes;
        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];
          if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
            return this.legendItems[i];
          }
        }
      }
      return null;
    }
    handleEvent(e) {
      const opts = this.options;
      if (!isListened(e.type, opts)) {
        return;
      }
      const hoveredItem = this._getLegendItemAt(e.x, e.y);
      if (e.type === "mousemove" || e.type === "mouseout") {
        const previous = this._hoveredItem;
        const sameItem = itemsEqual(previous, hoveredItem);
        if (previous && !sameItem) {
          callback(opts.onLeave, [
            e,
            previous,
            this
          ], this);
        }
        this._hoveredItem = hoveredItem;
        if (hoveredItem && !sameItem) {
          callback(opts.onHover, [
            e,
            hoveredItem,
            this
          ], this);
        }
      } else if (hoveredItem) {
        callback(opts.onClick, [
          e,
          hoveredItem,
          this
        ], this);
      }
    }
  };
  function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
      itemWidth,
      itemHeight
    };
  }
  function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== "string") {
      legendItemText = legendItemText.reduce((a, b) => a.length > b.length ? a : b);
    }
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
  }
  function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== "string") {
      itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    }
    return itemHeight;
  }
  function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
  }
  function isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) {
      return true;
    }
    if (opts.onClick && (type === "click" || type === "mouseup")) {
      return true;
    }
    return false;
  }
  var plugin_legend = {
    id: "legend",
    _element: Legend,
    start(chart, _args, options) {
      const legend = chart.legend = new Legend({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, legend, options);
      layouts.addBox(chart, legend);
    },
    stop(chart) {
      layouts.removeBox(chart, chart.legend);
      delete chart.legend;
    },
    beforeUpdate(chart, _args, options) {
      const legend = chart.legend;
      layouts.configure(chart, legend, options);
      legend.options = options;
    },
    afterUpdate(chart) {
      const legend = chart.legend;
      legend.buildLabels();
      legend.adjustHitBoxes();
    },
    afterEvent(chart, args) {
      if (!args.replay) {
        chart.legend.handleEvent(args.event);
      }
    },
    defaults: {
      display: true,
      position: "top",
      align: "center",
      fullSize: true,
      reverse: false,
      weight: 1e3,
      onClick(e, legendItem, legend) {
        const index2 = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index2)) {
          ci.hide(index2);
          legendItem.hidden = true;
        } else {
          ci.show(index2);
          legendItem.hidden = false;
        }
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (ctx) => ctx.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(chart) {
          const datasets = chart.data.datasets;
          const { labels: { usePointStyle, pointStyle, textAlign, color: color2, useBorderRadius, borderRadius } } = chart.legend.options;
          return chart._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
            const borderWidth = toPadding(style.borderWidth);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              fontColor: color2,
              hidden: !meta.visible,
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: (borderWidth.width + borderWidth.height) / 4,
              strokeStyle: style.borderColor,
              pointStyle: pointStyle || style.pointStyle,
              rotation: style.rotation,
              textAlign: textAlign || style.textAlign,
              borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
              datasetIndex: meta.index
            };
          }, this);
        }
      },
      title: {
        color: (ctx) => ctx.chart.options.color,
        display: false,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: (name) => !name.startsWith("on"),
      labels: {
        _scriptable: (name) => ![
          "generateLabels",
          "filter",
          "sort"
        ].includes(name)
      }
    }
  };
  var Title = class extends Element {
    constructor(config) {
      super();
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this._padding = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight) {
      const opts = this.options;
      this.left = 0;
      this.top = 0;
      if (!opts.display) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      this.width = this.right = maxWidth;
      this.height = this.bottom = maxHeight;
      const lineCount = isArray(opts.text) ? opts.text.length : 1;
      this._padding = toPadding(opts.padding);
      const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
      if (this.isHorizontal()) {
        this.height = textSize;
      } else {
        this.width = textSize;
      }
    }
    isHorizontal() {
      const pos = this.options.position;
      return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
      const { top, left, bottom, right, options } = this;
      const align = options.align;
      let rotation = 0;
      let maxWidth, titleX, titleY;
      if (this.isHorizontal()) {
        titleX = _alignStartEnd(align, left, right);
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        if (options.position === "left") {
          titleX = left + offset;
          titleY = _alignStartEnd(align, bottom, top);
          rotation = PI * -0.5;
        } else {
          titleX = right - offset;
          titleY = _alignStartEnd(align, top, bottom);
          rotation = PI * 0.5;
        }
        maxWidth = bottom - top;
      }
      return {
        titleX,
        titleY,
        maxWidth,
        rotation
      };
    }
    draw() {
      const ctx = this.ctx;
      const opts = this.options;
      if (!opts.display) {
        return;
      }
      const fontOpts = toFont(opts.font);
      const lineHeight = fontOpts.lineHeight;
      const offset = lineHeight / 2 + this._padding.top;
      const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
      renderText(ctx, opts.text, 0, 0, fontOpts, {
        color: opts.color,
        maxWidth,
        rotation,
        textAlign: _toLeftRightCenter(opts.align),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
  };
  function createTitle(chart, titleOpts) {
    const title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
  }
  var plugin_title = {
    id: "title",
    _element: Title,
    start(chart, _args, options) {
      createTitle(chart, options);
    },
    stop(chart) {
      const titleBlock = chart.titleBlock;
      layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    },
    beforeUpdate(chart, _args, options) {
      const title = chart.titleBlock;
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "bold"
      },
      fullSize: true,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var map2 = /* @__PURE__ */ new WeakMap();
  var plugin_subtitle = {
    id: "subtitle",
    start(chart, _args, options) {
      const title = new Title({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, title, options);
      layouts.addBox(chart, title);
      map2.set(chart, title);
    },
    stop(chart) {
      layouts.removeBox(chart, map2.get(chart));
      map2.delete(chart);
    },
    beforeUpdate(chart, _args, options) {
      const title = map2.get(chart);
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "normal"
      },
      fullSize: true,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var positioners = {
    average(items) {
      if (!items.length) {
        return false;
      }
      let i, len;
      let xSet = /* @__PURE__ */ new Set();
      let y = 0;
      let count = 0;
      for (i = 0, len = items.length; i < len; ++i) {
        const el = items[i].element;
        if (el && el.hasValue()) {
          const pos = el.tooltipPosition();
          xSet.add(pos.x);
          y += pos.y;
          ++count;
        }
      }
      if (count === 0 || xSet.size === 0) {
        return false;
      }
      const xAverage = [
        ...xSet
      ].reduce((a, b) => a + b) / xSet.size;
      return {
        x: xAverage,
        y: y / count
      };
    },
    nearest(items, eventPosition) {
      if (!items.length) {
        return false;
      }
      let x = eventPosition.x;
      let y = eventPosition.y;
      let minDistance = Number.POSITIVE_INFINITY;
      let i, len, nearestElement;
      for (i = 0, len = items.length; i < len; ++i) {
        const el = items[i].element;
        if (el && el.hasValue()) {
          const center = el.getCenterPoint();
          const d = distanceBetweenPoints(eventPosition, center);
          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }
      if (nearestElement) {
        const tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }
      return {
        x,
        y
      };
    }
  };
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (isArray(toPush)) {
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }
    return base;
  }
  function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) {
      return str.split("\n");
    }
    return str;
  }
  function createTooltipItem(chart, item) {
    const { element, datasetIndex, index: index2 } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index2);
    return {
      chart,
      label,
      parsed: controller.getParsed(index2),
      raw: chart.data.datasets[datasetIndex].data[index2],
      formattedValue: value,
      dataset: controller.getDataset(),
      dataIndex: index2,
      datasetIndex,
      element
    };
  }
  function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = toFont(options.bodyFont);
    const titleFont = toFont(options.titleFont);
    const footerFont = toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
      height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
      const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
      height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
      height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    each(body, (bodyItem) => {
      each(bodyItem.before, maxLineWidth);
      each(bodyItem.lines, maxLineWidth);
      each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
      width,
      height
    };
  }
  function determineYAlign(chart, size) {
    const { y, height } = size;
    if (y < height / 2) {
      return "top";
    } else if (y > chart.height - height / 2) {
      return "bottom";
    }
    return "center";
  }
  function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x, width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart.width) {
      return true;
    }
    if (xAlign === "right" && x - width - caret < 0) {
      return true;
    }
  }
  function determineXAlign(chart, options, size, yAlign) {
    const { x, width } = size;
    const { width: chartWidth, chartArea: { left, right } } = chart;
    let xAlign = "center";
    if (yAlign === "center") {
      xAlign = x <= (left + right) / 2 ? "left" : "right";
    } else if (x <= width / 2) {
      xAlign = "left";
    } else if (x >= chartWidth - width / 2) {
      xAlign = "right";
    }
    if (doesNotFitWithAlign(xAlign, chart, options, size)) {
      xAlign = "center";
    }
    return xAlign;
  }
  function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
      xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
      yAlign
    };
  }
  function alignX(size, xAlign) {
    let { x, width } = size;
    if (xAlign === "right") {
      x -= width;
    } else if (xAlign === "center") {
      x -= width / 2;
    }
    return x;
  }
  function alignY(size, yAlign, paddingAndSize) {
    let { y, height } = size;
    if (yAlign === "top") {
      y += paddingAndSize;
    } else if (yAlign === "bottom") {
      y -= height + paddingAndSize;
    } else {
      y -= height / 2;
    }
    return y;
  }
  function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
      if (xAlign === "left") {
        x += paddingAndSize;
      } else if (xAlign === "right") {
        x -= paddingAndSize;
      }
    } else if (xAlign === "left") {
      x -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === "right") {
      x += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
      x: _limitValue(x, 0, chart.width - size.width),
      y: _limitValue(y, 0, chart.height - size.height)
    };
  }
  function getAlignedX(tooltip, align, options) {
    const padding = toPadding(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
  }
  function getBeforeAfterBodyLines(callback2) {
    return pushOrConcat([], splitNewlines(callback2));
  }
  function createTooltipContext(parent, tooltip, tooltipItems) {
    return createContext(parent, {
      tooltip,
      tooltipItems,
      type: "tooltip"
    });
  }
  function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
  }
  var defaultCallbacks = {
    beforeTitle: noop,
    title(tooltipItems) {
      if (tooltipItems.length > 0) {
        const item = tooltipItems[0];
        const labels = item.chart.data.labels;
        const labelCount = labels ? labels.length : 0;
        if (this && this.options && this.options.mode === "dataset") {
          return item.dataset.label || "";
        } else if (item.label) {
          return item.label;
        } else if (labelCount > 0 && item.dataIndex < labelCount) {
          return labels[item.dataIndex];
        }
      }
      return "";
    },
    afterTitle: noop,
    beforeBody: noop,
    beforeLabel: noop,
    label(tooltipItem) {
      if (this && this.options && this.options.mode === "dataset") {
        return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
      }
      let label = tooltipItem.dataset.label || "";
      if (label) {
        label += ": ";
      }
      const value = tooltipItem.formattedValue;
      if (!isNullOrUndef(value)) {
        label += value;
      }
      return label;
    },
    labelColor(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        borderColor: options.borderColor,
        backgroundColor: options.backgroundColor,
        borderWidth: options.borderWidth,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderRadius: 0
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        pointStyle: options.pointStyle,
        rotation: options.rotation
      };
    },
    afterLabel: noop,
    afterBody: noop,
    beforeFooter: noop,
    footer: noop,
    afterFooter: noop
  };
  function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === "undefined") {
      return defaultCallbacks[name].call(ctx, arg);
    }
    return result;
  }
  var Tooltip = class extends Element {
    static positioners = positioners;
    constructor(config) {
      super();
      this.opacity = 0;
      this._active = [];
      this._eventPosition = void 0;
      this._size = void 0;
      this._cachedAnimations = void 0;
      this._tooltipItems = [];
      this.$animations = void 0;
      this.$context = void 0;
      this.chart = config.chart;
      this.options = config.options;
      this.dataPoints = void 0;
      this.title = void 0;
      this.beforeBody = void 0;
      this.body = void 0;
      this.afterBody = void 0;
      this.footer = void 0;
      this.xAlign = void 0;
      this.yAlign = void 0;
      this.x = void 0;
      this.y = void 0;
      this.height = void 0;
      this.width = void 0;
      this.caretX = void 0;
      this.caretY = void 0;
      this.labelColors = void 0;
      this.labelPointStyles = void 0;
      this.labelTextColors = void 0;
    }
    initialize(options) {
      this.options = options;
      this._cachedAnimations = void 0;
      this.$context = void 0;
    }
    _resolveAnimations() {
      const cached = this._cachedAnimations;
      if (cached) {
        return cached;
      }
      const chart = this.chart;
      const options = this.options.setContext(this.getContext());
      const opts = options.enabled && chart.options.animation && options.animations;
      const animations = new Animations(this.chart, opts);
      if (opts._cacheable) {
        this._cachedAnimations = Object.freeze(animations);
      }
      return animations;
    }
    getContext() {
      return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
      const { callbacks } = options;
      const beforeTitle = invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
      const title = invokeCallbackWithFallback(callbacks, "title", this, context);
      const afterTitle = invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    }
    getBeforeBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
    }
    getBody(tooltipItems, options) {
      const { callbacks } = options;
      const bodyItems = [];
      each(tooltipItems, (context) => {
        const bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        const scoped = overrideCallbacks(callbacks, context);
        pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
        pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, "label", this, context));
        pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
      const { callbacks } = options;
      const beforeFooter = invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
      const footer = invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
      const afterFooter = invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
    _createItems(options) {
      const active = this._active;
      const data = this.chart.data;
      const labelColors = [];
      const labelPointStyles = [];
      const labelTextColors = [];
      let tooltipItems = [];
      let i, len;
      for (i = 0, len = active.length; i < len; ++i) {
        tooltipItems.push(createTooltipItem(this.chart, active[i]));
      }
      if (options.filter) {
        tooltipItems = tooltipItems.filter((element, index2, array) => options.filter(element, index2, array, data));
      }
      if (options.itemSort) {
        tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
      }
      each(tooltipItems, (context) => {
        const scoped = overrideCallbacks(options.callbacks, context);
        labelColors.push(invokeCallbackWithFallback(scoped, "labelColor", this, context));
        labelPointStyles.push(invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
        labelTextColors.push(invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
      });
      this.labelColors = labelColors;
      this.labelPointStyles = labelPointStyles;
      this.labelTextColors = labelTextColors;
      this.dataPoints = tooltipItems;
      return tooltipItems;
    }
    update(changed, replay) {
      const options = this.options.setContext(this.getContext());
      const active = this._active;
      let properties;
      let tooltipItems = [];
      if (!active.length) {
        if (this.opacity !== 0) {
          properties = {
            opacity: 0
          };
        }
      } else {
        const position = positioners[options.position].call(this, active, this._eventPosition);
        tooltipItems = this._createItems(options);
        this.title = this.getTitle(tooltipItems, options);
        this.beforeBody = this.getBeforeBody(tooltipItems, options);
        this.body = this.getBody(tooltipItems, options);
        this.afterBody = this.getAfterBody(tooltipItems, options);
        this.footer = this.getFooter(tooltipItems, options);
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, size);
        const alignment = determineAlignment(this.chart, options, positionAndSize);
        const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        properties = {
          opacity: 1,
          x: backgroundPoint.x,
          y: backgroundPoint.y,
          width: size.width,
          height: size.height,
          caretX: position.x,
          caretY: position.y
        };
      }
      this._tooltipItems = tooltipItems;
      this.$context = void 0;
      if (properties) {
        this._resolveAnimations().update(this, properties);
      }
      if (changed && options.external) {
        options.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay
        });
      }
    }
    drawCaret(tooltipPoint, ctx, size, options) {
      const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
      const { xAlign, yAlign } = this;
      const { caretSize, cornerRadius } = options;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
      const { x: ptX, y: ptY } = tooltipPoint;
      const { width, height } = size;
      let x1, x2, x3, y1, y2, y3;
      if (yAlign === "center") {
        y2 = ptY + height / 2;
        if (xAlign === "left") {
          x1 = ptX;
          x2 = x1 - caretSize;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
        x3 = x1;
      } else {
        if (xAlign === "left") {
          x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === "right") {
          x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
        } else {
          x2 = this.caretX;
        }
        if (yAlign === "top") {
          y1 = ptY;
          y2 = y1 - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          x1 = x2 + caretSize;
          x3 = x2 - caretSize;
        }
        y3 = y1;
      }
      return {
        x1,
        x2,
        x3,
        y1,
        y2,
        y3
      };
    }
    drawTitle(pt, ctx, options) {
      const title = this.title;
      const length = title.length;
      let titleFont, titleSpacing, i;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.titleAlign, options);
        ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
        ctx.textBaseline = "middle";
        titleFont = toFont(options.titleFont);
        titleSpacing = options.titleSpacing;
        ctx.fillStyle = options.titleColor;
        ctx.font = titleFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
          pt.y += titleFont.lineHeight + titleSpacing;
          if (i + 1 === length) {
            pt.y += options.titleMarginBottom - titleSpacing;
          }
        }
      }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
      const labelColor = this.labelColors[i];
      const labelPointStyle = this.labelPointStyles[i];
      const { boxHeight, boxWidth } = options;
      const bodyFont = toFont(options.bodyFont);
      const colorX = getAlignedX(this, "left", options);
      const rtlColorX = rtlHelper.x(colorX);
      const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
      const colorY = pt.y + yOffSet;
      if (options.usePointStyle) {
        const drawOptions = {
          radius: Math.min(boxWidth, boxHeight) / 2,
          pointStyle: labelPointStyle.pointStyle,
          rotation: labelPointStyle.rotation,
          borderWidth: 1
        };
        const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
        const centerY = colorY + boxHeight / 2;
        ctx.strokeStyle = options.multiKeyBackground;
        ctx.fillStyle = options.multiKeyBackground;
        drawPoint(ctx, drawOptions, centerX, centerY);
        ctx.strokeStyle = labelColor.borderColor;
        ctx.fillStyle = labelColor.backgroundColor;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.lineWidth = isObject(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
        ctx.strokeStyle = labelColor.borderColor;
        ctx.setLineDash(labelColor.borderDash || []);
        ctx.lineDashOffset = labelColor.borderDashOffset || 0;
        const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
        const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
        const borderRadius = toTRBLCorners(labelColor.borderRadius);
        if (Object.values(borderRadius).some((v) => v !== 0)) {
          ctx.beginPath();
          ctx.fillStyle = options.multiKeyBackground;
          addRoundedRectPath(ctx, {
            x: outerX,
            y: colorY,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.beginPath();
          addRoundedRectPath(ctx, {
            x: innerX,
            y: colorY + 1,
            w: boxWidth - 2,
            h: boxHeight - 2,
            radius: borderRadius
          });
          ctx.fill();
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
          ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
        }
      }
      ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
      const { body } = this;
      const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
      const bodyFont = toFont(options.bodyFont);
      let bodyLineHeight = bodyFont.lineHeight;
      let xLinePadding = 0;
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      const fillLineOfText = function(line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
        pt.y += bodyLineHeight + bodySpacing;
      };
      const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      let bodyItem, textColor, lines, i, j, ilen, jlen;
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = "middle";
      ctx.font = bodyFont.string;
      pt.x = getAlignedX(this, bodyAlignForCalculation, options);
      ctx.fillStyle = options.bodyColor;
      each(this.beforeBody, fillLineOfText);
      xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = this.labelTextColors[i];
        ctx.fillStyle = textColor;
        each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;
        if (displayColors && lines.length) {
          this._drawColorBox(ctx, pt, i, rtlHelper, options);
          bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
        }
        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          fillLineOfText(lines[j]);
          bodyLineHeight = bodyFont.lineHeight;
        }
        each(bodyItem.after, fillLineOfText);
      }
      xLinePadding = 0;
      bodyLineHeight = bodyFont.lineHeight;
      each(this.afterBody, fillLineOfText);
      pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
      const footer = this.footer;
      const length = footer.length;
      let footerFont, i;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.footerAlign, options);
        pt.y += options.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
        ctx.textBaseline = "middle";
        footerFont = toFont(options.footerFont);
        ctx.fillStyle = options.footerColor;
        ctx.font = footerFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
          pt.y += footerFont.lineHeight + options.footerSpacing;
        }
      }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
      const { xAlign, yAlign } = this;
      const { x, y } = pt;
      const { width, height } = tooltipSize;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.beginPath();
      ctx.moveTo(x + topLeft, y);
      if (yAlign === "top") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width - topRight, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
      if (yAlign === "center" && xAlign === "right") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width, y + height - bottomRight);
      ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
      if (yAlign === "bottom") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + bottomLeft, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
      if (yAlign === "center" && xAlign === "left") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x, y + topLeft);
      ctx.quadraticCurveTo(x, y, x + topLeft, y);
      ctx.closePath();
      ctx.fill();
      if (options.borderWidth > 0) {
        ctx.stroke();
      }
    }
    _updateAnimationTarget(options) {
      const chart = this.chart;
      const anims = this.$animations;
      const animX = anims && anims.x;
      const animY = anims && anims.y;
      if (animX || animY) {
        const position = positioners[options.position].call(this, this._active, this._eventPosition);
        if (!position) {
          return;
        }
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, this._size);
        const alignment = determineAlignment(chart, options, positionAndSize);
        const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
        if (animX._to !== point.x || animY._to !== point.y) {
          this.xAlign = alignment.xAlign;
          this.yAlign = alignment.yAlign;
          this.width = size.width;
          this.height = size.height;
          this.caretX = position.x;
          this.caretY = position.y;
          this._resolveAnimations().update(this, point);
        }
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(ctx) {
      const options = this.options.setContext(this.getContext());
      let opacity = this.opacity;
      if (!opacity) {
        return;
      }
      this._updateAnimationTarget(options);
      const tooltipSize = {
        width: this.width,
        height: this.height
      };
      const pt = {
        x: this.x,
        y: this.y
      };
      opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
      const padding = toPadding(options.padding);
      const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      if (options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
        this.drawBackground(pt, ctx, tooltipSize, options);
        overrideTextDirection(ctx, options.textDirection);
        pt.y += padding.top;
        this.drawTitle(pt, ctx, options);
        this.drawBody(pt, ctx, options);
        this.drawFooter(pt, ctx, options);
        restoreTextDirection(ctx, options.textDirection);
        ctx.restore();
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
      const lastActive = this._active;
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.chart.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("Cannot find a dataset at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(lastActive, active);
      const positionChanged = this._positionChanged(active, eventPosition);
      if (changed || positionChanged) {
        this._active = active;
        this._eventPosition = eventPosition;
        this._ignoreReplayEvents = true;
        this.update(true);
      }
    }
    handleEvent(e, replay, inChartArea = true) {
      if (replay && this._ignoreReplayEvents) {
        return false;
      }
      this._ignoreReplayEvents = false;
      const options = this.options;
      const lastActive = this._active || [];
      const active = this._getActiveElements(e, lastActive, replay, inChartArea);
      const positionChanged = this._positionChanged(active, e);
      const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
      if (changed) {
        this._active = active;
        if (options.enabled || options.external) {
          this._eventPosition = {
            x: e.x,
            y: e.y
          };
          this.update(true, replay);
        }
      }
      return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
      const options = this.options;
      if (e.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive.filter((i) => this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== void 0);
      }
      const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
      return active;
    }
    _positionChanged(active, e) {
      const { caretX, caretY, options } = this;
      const position = positioners[options.position].call(this, active, e);
      return position !== false && (caretX !== position.x || caretY !== position.y);
    }
  };
  var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit(chart, _args, options) {
      if (options) {
        chart.tooltip = new Tooltip({
          chart,
          options
        });
      }
    },
    beforeUpdate(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    reset(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    afterDraw(chart) {
      const tooltip = chart.tooltip;
      if (tooltip && tooltip._willRender()) {
        const args = {
          tooltip
        };
        if (chart.notifyPlugins("beforeTooltipDraw", {
          ...args,
          cancelable: true
        }) === false) {
          return;
        }
        tooltip.draw(chart.ctx);
        chart.notifyPlugins("afterTooltipDraw", args);
      }
    },
    afterEvent(chart, args) {
      if (chart.tooltip) {
        const useFinalPosition = args.replay;
        if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
          args.changed = true;
        }
      }
    },
    defaults: {
      enabled: true,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (ctx, opts) => opts.bodyFont.size,
      boxWidth: (ctx, opts) => opts.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: true,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "width",
            "height",
            "caretX",
            "caretY"
          ]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: defaultCallbacks
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
      _indexable: false,
      callbacks: {
        _scriptable: false,
        _indexable: false
      },
      animation: {
        _fallback: false
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: [
      "interaction"
    ]
  };
  var plugins = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
  });
  var addIfString = (labels, raw, index2, addedLabels) => {
    if (typeof raw === "string") {
      index2 = labels.push(raw) - 1;
      addedLabels.unshift({
        index: index2,
        label: raw
      });
    } else if (isNaN(raw)) {
      index2 = null;
    }
    return index2;
  };
  function findOrAddLabel(labels, raw, index2, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) {
      return addIfString(labels, raw, index2, addedLabels);
    }
    const last = labels.lastIndexOf(raw);
    return first !== last ? index2 : first;
  }
  var validIndex = (index2, max) => index2 === null ? null : _limitValue(Math.round(index2), 0, max);
  function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  var CategoryScale = class extends Scale {
    static id = "category";
    static defaults = {
      ticks: {
        callback: _getLabelForValue
      }
    };
    constructor(cfg) {
      super(cfg);
      this._startValue = void 0;
      this._valueRange = 0;
      this._addedLabels = [];
    }
    init(scaleOptions) {
      const added = this._addedLabels;
      if (added.length) {
        const labels = this.getLabels();
        for (const { index: index2, label } of added) {
          if (labels[index2] === label) {
            labels.splice(index2, 1);
          }
        }
        this._addedLabels = [];
      }
      super.init(scaleOptions);
    }
    parse(raw, index2) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      const labels = this.getLabels();
      index2 = isFinite(index2) && labels[index2] === raw ? index2 : findOrAddLabel(labels, raw, valueOrDefault(index2, raw), this._addedLabels);
      return validIndex(index2, labels.length - 1);
    }
    determineDataLimits() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this.getMinMax(true);
      if (this.options.bounds === "ticks") {
        if (!minDefined) {
          min = 0;
        }
        if (!maxDefined) {
          max = this.getLabels().length - 1;
        }
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const min = this.min;
      const max = this.max;
      const offset = this.options.offset;
      const ticks = [];
      let labels = this.getLabels();
      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
      this._startValue = this.min - (offset ? 0.5 : 0);
      for (let value = min; value <= max; value++) {
        ticks.push({
          value
        });
      }
      return ticks;
    }
    getLabelForValue(value) {
      return _getLabelForValue.call(this, value);
    }
    configure() {
      super.configure();
      if (!this.isHorizontal()) {
        this._reversePixels = !this._reversePixels;
      }
    }
    getPixelForValue(value) {
      if (typeof value !== "number") {
        value = this.parse(value);
      }
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getValueForPixel(pixel) {
      return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  };
  function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !isNullOrUndef(min);
    const maxDefined = !isNullOrUndef(max);
    const countDefined = !isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
      return [
        {
          value: rmin
        },
        {
          value: rmax
        }
      ];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
      spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!isNullOrUndef(precision)) {
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
      niceMin = Math.floor(rmin / spacing) * spacing;
      niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
      niceMin = rmin;
      niceMax = rmax;
    }
    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
      numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
      spacing = (max - min) / numSpaces;
      niceMin = min;
      niceMax = max;
    } else if (countDefined) {
      niceMin = minDefined ? min : niceMin;
      niceMax = maxDefined ? max : niceMax;
      numSpaces = count - 1;
      spacing = (niceMax - niceMin) / numSpaces;
    } else {
      numSpaces = (niceMax - niceMin) / spacing;
      if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) {
        numSpaces = Math.round(numSpaces);
      } else {
        numSpaces = Math.ceil(numSpaces);
      }
    }
    const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
    factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
      if (includeBounds && niceMin !== min) {
        ticks.push({
          value: min
        });
        if (niceMin < min) {
          j++;
        }
        if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
          j++;
        }
      } else if (niceMin < min) {
        j++;
      }
    }
    for (; j < numSpaces; ++j) {
      const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
      if (maxDefined && tickValue > max) {
        break;
      }
      ticks.push({
        value: tickValue
      });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
      if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
        ticks[ticks.length - 1].value = max;
      } else {
        ticks.push({
          value: max
        });
      }
    } else if (!maxDefined || niceMax === max) {
      ticks.push({
        value: niceMax
      });
    }
    return ticks;
  }
  function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 1e-3;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
  }
  var LinearScaleBase = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._endValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index2) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) {
        return null;
      }
      return +raw;
    }
    handleTickRangeOptions() {
      const { beginAtZero } = this.options;
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this;
      const setMin = (v) => min = minDefined ? min : v;
      const setMax = (v) => max = maxDefined ? max : v;
      if (beginAtZero) {
        const minSign = sign(min);
        const maxSign = sign(max);
        if (minSign < 0 && maxSign < 0) {
          setMax(0);
        } else if (minSign > 0 && maxSign > 0) {
          setMin(0);
        }
      }
      if (min === max) {
        let offset = max === 0 ? 1 : Math.abs(max * 0.05);
        setMax(max + offset);
        if (!beginAtZero) {
          setMin(min - offset);
        }
      }
      this.min = min;
      this.max = max;
    }
    getTickLimit() {
      const tickOpts = this.options.ticks;
      let { maxTicksLimit, stepSize } = tickOpts;
      let maxTicks;
      if (stepSize) {
        maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
        if (maxTicks > 1e3) {
          console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
          maxTicks = 1e3;
        }
      } else {
        maxTicks = this.computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
      return maxTicks;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const opts = this.options;
      const tickOpts = opts.ticks;
      let maxTicks = this.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      const numericGeneratorOptions = {
        maxTicks,
        bounds: opts.bounds,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        step: tickOpts.stepSize,
        count: tickOpts.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: tickOpts.minRotation || 0,
        includeBounds: tickOpts.includeBounds !== false
      };
      const dataRange = this._range || this;
      const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    configure() {
      const ticks = this.ticks;
      let start = this.min;
      let end = this.max;
      super.configure();
      if (this.options.offset && ticks.length) {
        const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }
      this._startValue = start;
      this._endValue = end;
      this._valueRange = end - start;
    }
    getLabelForValue(value) {
      return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
  };
  var LinearScale = class extends LinearScaleBase {
    static id = "linear";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.numeric
      }
    };
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? min : 0;
      this.max = isNumberFinite(max) ? max : 1;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const horizontal = this.isHorizontal();
      const length = horizontal ? this.width : this.height;
      const minRotation = toRadians(this.options.ticks.minRotation);
      const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 1e-3;
      const tickFont = this._resolveTickFontOptions(0);
      return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  };
  var log10Floor = (v) => Math.floor(log10(v));
  var changeExponent = (v, m) => Math.pow(10, log10Floor(v) + m);
  function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
  }
  function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
  }
  function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while (steps(min, max, rangeExp) > 10) {
      rangeExp++;
    }
    while (steps(min, max, rangeExp) < 10) {
      rangeExp--;
    }
    return Math.min(rangeExp, log10Floor(min));
  }
  function generateTicks(generationOptions, { min, max }) {
    min = finiteOrDefault(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while (value < max) {
      ticks.push({
        value,
        major: isMajor(value),
        significand
      });
      if (significand >= 10) {
        significand = significand < 15 ? 15 : 20;
      } else {
        significand++;
      }
      if (significand >= 20) {
        exp++;
        significand = 2;
        precision = exp >= 0 ? 1 : precision;
      }
      value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = finiteOrDefault(generationOptions.max, value);
    ticks.push({
      value: lastTick,
      major: isMajor(lastTick),
      significand
    });
    return ticks;
  }
  var LogarithmicScale = class extends Scale {
    static id = "logarithmic";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.logarithmic,
        major: {
          enabled: true
        }
      }
    };
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index2) {
      const value = LinearScaleBase.prototype.parse.apply(this, [
        raw,
        index2
      ]);
      if (value === 0) {
        this._zero = true;
        return void 0;
      }
      return isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? Math.max(0, min) : null;
      this.max = isNumberFinite(max) ? Math.max(0, max) : null;
      if (this.options.beginAtZero) {
        this._zero = true;
      }
      if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) {
        this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
      }
      this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let min = this.min;
      let max = this.max;
      const setMin = (v) => min = minDefined ? min : v;
      const setMax = (v) => max = maxDefined ? max : v;
      if (min === max) {
        if (min <= 0) {
          setMin(1);
          setMax(10);
        } else {
          setMin(changeExponent(min, -1));
          setMax(changeExponent(max, 1));
        }
      }
      if (min <= 0) {
        setMin(changeExponent(max, -1));
      }
      if (max <= 0) {
        setMax(changeExponent(min, 1));
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const opts = this.options;
      const generationOptions = {
        min: this._userMin,
        max: this._userMax
      };
      const ticks = generateTicks(generationOptions, this);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    getLabelForValue(value) {
      return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const start = this.min;
      super.configure();
      this._startValue = log10(start);
      this._valueRange = log10(this.max) - log10(start);
    }
    getPixelForValue(value) {
      if (value === void 0 || value === 0) {
        value = this.min;
      }
      if (value === null || isNaN(value)) {
        return NaN;
      }
      return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      const decimal = this.getDecimalForPixel(pixel);
      return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
  };
  function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
      const padding = toPadding(tickOpts.backdropPadding);
      return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }
    return 0;
  }
  function measureLabelSize(ctx, font, label) {
    label = isArray(label) ? label : [
      label
    ];
    return {
      w: _longestText(ctx, font.string, label),
      h: label.length * font.lineHeight
    };
  }
  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }
    return {
      start: pos,
      end: pos + size
    };
  }
  function fitWithPointLabels(scale) {
    const orig = {
      l: scale.left + scale._padding.left,
      r: scale.right - scale._padding.right,
      t: scale.top + scale._padding.top,
      b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
    for (let i = 0; i < valueCount; i++) {
      const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
      padding[i] = opts.padding;
      const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
      const plFont = toFont(opts.font);
      const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
      labelSizes[i] = textSize;
      const angleRadians = _normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
      const angle = Math.round(toDegrees(angleRadians));
      const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
      updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
  }
  function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
      x = (orig.l - hLimits.start) / sin;
      limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
      x = (hLimits.end - orig.r) / sin;
      limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
      y = (orig.t - vLimits.start) / cos;
      limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
      y = (vLimits.end - orig.b) / cos;
      limits.b = Math.max(limits.b, orig.b + y);
    }
  }
  function createPointLabelItem(scale, index2, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra, additionalAngle, padding, size } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index2, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
      visible: true,
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    };
  }
  function isNotOverlapped(item, area) {
    if (!area) {
      return true;
    }
    const { left, top, right, bottom } = item;
    const apexesInArea = _isPointInArea({
      x: left,
      y: top
    }, area) || _isPointInArea({
      x: left,
      y: bottom
    }, area) || _isPointInArea({
      x: right,
      y: top
    }, area) || _isPointInArea({
      x: right,
      y: bottom
    }, area);
    return !apexesInArea;
  }
  function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels, display } = opts.pointLabels;
    const itemOpts = {
      extra: getTickBackdropHeight(opts) / 2,
      additionalAngle: centerPointLabels ? PI / valueCount : 0
    };
    let area;
    for (let i = 0; i < valueCount; i++) {
      itemOpts.padding = padding[i];
      itemOpts.size = labelSizes[i];
      const item = createPointLabelItem(scale, i, itemOpts);
      items.push(item);
      if (display === "auto") {
        item.visible = isNotOverlapped(item, area);
        if (item.visible) {
          area = item;
        }
      }
    }
    return items;
  }
  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return "center";
    } else if (angle < 180) {
      return "left";
    }
    return "right";
  }
  function leftForTextAlign(x, w, align) {
    if (align === "right") {
      x -= w;
    } else if (align === "center") {
      x -= w / 2;
    }
    return x;
  }
  function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) {
      y -= h / 2;
    } else if (angle > 270 || angle < 90) {
      y -= h;
    }
    return y;
  }
  function drawPointLabelBox(ctx, opts, item) {
    const { left, top, right, bottom } = item;
    const { backdropColor } = opts;
    if (!isNullOrUndef(backdropColor)) {
      const borderRadius = toTRBLCorners(opts.borderRadius);
      const padding = toPadding(opts.backdropPadding);
      ctx.fillStyle = backdropColor;
      const backdropLeft = left - padding.left;
      const backdropTop = top - padding.top;
      const backdropWidth = right - left + padding.width;
      const backdropHeight = bottom - top + padding.height;
      if (Object.values(borderRadius).some((v) => v !== 0)) {
        ctx.beginPath();
        addRoundedRectPath(ctx, {
          x: backdropLeft,
          y: backdropTop,
          w: backdropWidth,
          h: backdropHeight,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
      }
    }
  }
  function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for (let i = labelCount - 1; i >= 0; i--) {
      const item = scale._pointLabelItems[i];
      if (!item.visible) {
        continue;
      }
      const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
      drawPointLabelBox(ctx, optsAtIndex, item);
      const plFont = toFont(optsAtIndex.font);
      const { x, y, textAlign } = item;
      renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
        color: optsAtIndex.color,
        textAlign,
        textBaseline: "middle"
      });
    }
  }
  function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) {
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
      let pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);
      for (let i = 1; i < labelCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
  }
  function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color2, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color2 || !lineWidth || radius < 0) {
      return;
    }
    ctx.save();
    ctx.strokeStyle = color2;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash || []);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  function createPointLabelContext(parent, index2, label) {
    return createContext(parent, {
      label,
      index: index2,
      type: "pointLabel"
    });
  }
  var RadialLinearScale = class extends LinearScaleBase {
    static id = "radialLinear";
    static defaults = {
      display: true,
      animate: true,
      position: "chartArea",
      angleLines: {
        display: true,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      grid: {
        circular: false
      },
      startAngle: 0,
      ticks: {
        showLabelBackdrop: true,
        callback: Ticks.formatters.numeric
      },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: true,
        font: {
          size: 10
        },
        callback(label) {
          return label;
        },
        padding: 5,
        centerPointLabels: false
      }
    };
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color"
    };
    static descriptors = {
      angleLines: {
        _fallback: "grid"
      }
    };
    constructor(cfg) {
      super(cfg);
      this.xCenter = void 0;
      this.yCenter = void 0;
      this.drawingArea = void 0;
      this._pointLabels = [];
      this._pointLabelItems = [];
    }
    setDimensions() {
      const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
      const w = this.width = this.maxWidth - padding.width;
      const h = this.height = this.maxHeight - padding.height;
      this.xCenter = Math.floor(this.left + w / 2 + padding.left);
      this.yCenter = Math.floor(this.top + h / 2 + padding.top);
      this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(false);
      this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
      this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
      LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
      this._pointLabels = this.getLabels().map((value, index2) => {
        const label = callback(this.options.pointLabels.callback, [
          value,
          index2
        ], this);
        return label || label === 0 ? label : "";
      }).filter((v, i) => this.chart.getDataVisibility(i));
    }
    fit() {
      const opts = this.options;
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        this.setCenterPoint(0, 0, 0, 0);
      }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
      this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
      this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index2) {
      const angleMultiplier = TAU / (this._pointLabels.length || 1);
      const startAngle = this.options.startAngle || 0;
      return _normalizeAngle(index2 * angleMultiplier + toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
      if (isNullOrUndef(value)) {
        return NaN;
      }
      const scalingFactor = this.drawingArea / (this.max - this.min);
      if (this.options.reverse) {
        return (this.max - value) * scalingFactor;
      }
      return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
      if (isNullOrUndef(distance)) {
        return NaN;
      }
      const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index2) {
      const pointLabels = this._pointLabels || [];
      if (index2 >= 0 && index2 < pointLabels.length) {
        const pointLabel = pointLabels[index2];
        return createPointLabelContext(this.getContext(), index2, pointLabel);
      }
    }
    getPointPosition(index2, distanceFromCenter, additionalAngle = 0) {
      const angle = this.getIndexAngle(index2) - HALF_PI + additionalAngle;
      return {
        x: Math.cos(angle) * distanceFromCenter + this.xCenter,
        y: Math.sin(angle) * distanceFromCenter + this.yCenter,
        angle
      };
    }
    getPointPositionForValue(index2, value) {
      return this.getPointPosition(index2, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index2) {
      return this.getPointPositionForValue(index2 || 0, this.getBaseValue());
    }
    getPointLabelPosition(index2) {
      const { left, top, right, bottom } = this._pointLabelItems[index2];
      return {
        left,
        top,
        right,
        bottom
      };
    }
    drawBackground() {
      const { backgroundColor, grid: { circular } } = this.options;
      if (backgroundColor) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
        ctx.closePath();
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }
    drawGrid() {
      const ctx = this.ctx;
      const opts = this.options;
      const { angleLines, grid, border } = opts;
      const labelCount = this._pointLabels.length;
      let i, offset, position;
      if (opts.pointLabels.display) {
        drawPointLabels(this, labelCount);
      }
      if (grid.display) {
        this.ticks.forEach((tick, index2) => {
          if (index2 !== 0 || index2 === 0 && this.min < 0) {
            offset = this.getDistanceFromCenterForValue(tick.value);
            const context = this.getContext(index2);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
          }
        });
      }
      if (angleLines.display) {
        ctx.save();
        for (i = labelCount - 1; i >= 0; i--) {
          const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
          const { color: color2, lineWidth } = optsAtIndex;
          if (!lineWidth || !color2) {
            continue;
          }
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color2;
          ctx.setLineDash(optsAtIndex.borderDash);
          ctx.lineDashOffset = optsAtIndex.borderDashOffset;
          offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
          position = this.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(this.xCenter, this.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
    drawBorder() {
    }
    drawLabels() {
      const ctx = this.ctx;
      const opts = this.options;
      const tickOpts = opts.ticks;
      if (!tickOpts.display) {
        return;
      }
      const startAngle = this.getIndexAngle(0);
      let offset, width;
      ctx.save();
      ctx.translate(this.xCenter, this.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      this.ticks.forEach((tick, index2) => {
        if (index2 === 0 && this.min >= 0 && !opts.reverse) {
          return;
        }
        const optsAtIndex = tickOpts.setContext(this.getContext(index2));
        const tickFont = toFont(optsAtIndex.font);
        offset = this.getDistanceFromCenterForValue(this.ticks[index2].value);
        if (optsAtIndex.showLabelBackdrop) {
          ctx.font = tickFont.string;
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = optsAtIndex.backdropColor;
          const padding = toPadding(optsAtIndex.backdropPadding);
          ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
        }
        renderText(ctx, tick.label, 0, -offset, tickFont, {
          color: optsAtIndex.color,
          strokeColor: optsAtIndex.textStrokeColor,
          strokeWidth: optsAtIndex.textStrokeWidth
        });
      });
      ctx.restore();
    }
    drawTitle() {
    }
  };
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1e3
    },
    second: {
      common: true,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: true,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: true,
      size: 36e5,
      steps: 24
    },
    day: {
      common: true,
      size: 864e5,
      steps: 30
    },
    week: {
      common: false,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: true,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: true,
      size: 3154e7
    }
  };
  var UNITS = /* @__PURE__ */ Object.keys(INTERVALS);
  function sorter(a, b) {
    return a - b;
  }
  function parse(scale, input) {
    if (isNullOrUndef(input)) {
      return null;
    }
    const adapter = scale._adapter;
    const { parser, round: round2, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") {
      value = parser(value);
    }
    if (!isNumberFinite(value)) {
      value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    }
    if (value === null) {
      return null;
    }
    if (round2) {
      value = round2 === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round2);
    }
    return +value;
  }
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      const interval = INTERVALS[UNITS[i]];
      const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }
    return UNITS[ilen - 1];
  }
  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      const unit = UNITS[i];
      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }
  function determineMajorUnit(unit) {
    for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }
  function addTick(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      const { lo, hi } = _lookup(timestamps, time);
      const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
      ticks[timestamp] = true;
    }
  }
  function setMajorTicks(scale, ticks, map3, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index2;
    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index2 = map3[major];
      if (index2 >= 0) {
        ticks[index2].major = true;
      }
    }
    return ticks;
  }
  function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map3 = {};
    const ilen = values.length;
    let i, value;
    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map3[value] = i;
      ticks.push({
        value,
        major: false
      });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map3, majorUnit);
  }
  var TimeScale = class extends Scale {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: false,
        unit: false,
        round: false,
        isoWeekday: false,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        source: "auto",
        callback: false,
        major: {
          enabled: false
        }
      }
    };
    constructor(props) {
      super(props);
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
      this._unit = "day";
      this._majorUnit = void 0;
      this._offsets = {};
      this._normalized = false;
      this._parseOpts = void 0;
    }
    init(scaleOpts, opts = {}) {
      const time = scaleOpts.time || (scaleOpts.time = {});
      const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
      adapter.init(opts);
      mergeIf(time.displayFormats, adapter.formats());
      this._parseOpts = {
        parser: time.parser,
        round: time.round,
        isoWeekday: time.isoWeekday
      };
      super.init(scaleOpts);
      this._normalized = opts.normalized;
    }
    parse(raw, index2) {
      if (raw === void 0) {
        return null;
      }
      return parse(this, raw);
    }
    beforeLayout() {
      super.beforeLayout();
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
    determineDataLimits() {
      const options = this.options;
      const adapter = this._adapter;
      const unit = options.time.unit || "day";
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }
        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      }
      if (!minDefined || !maxDefined) {
        _applyBounds(this._getLabelBounds());
        if (options.bounds !== "ticks" || options.ticks.source !== "labels") {
          _applyBounds(this.getMinMax(false));
        }
      }
      min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
      this.min = Math.min(min, max - 1);
      this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
      const arr = this.getLabelTimestamps();
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      if (arr.length) {
        min = arr[0];
        max = arr[arr.length - 1];
      }
      return {
        min,
        max
      };
    }
    buildTicks() {
      const options = this.options;
      const timeOpts = options.time;
      const tickOpts = options.ticks;
      const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
      if (options.bounds === "ticks" && timestamps.length) {
        this.min = this._userMin || timestamps[0];
        this.max = this._userMax || timestamps[timestamps.length - 1];
      }
      const min = this.min;
      const max = this.max;
      const ticks = _filterBetween(timestamps, min, max);
      this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
      this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
      this.initOffsets(timestamps);
      if (options.reverse) {
        ticks.reverse();
      }
      return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
      if (this.options.offsetAfterAutoskip) {
        this.initOffsets(this.ticks.map((tick) => +tick.value));
      }
    }
    initOffsets(timestamps = []) {
      let start = 0;
      let end = 0;
      let first, last;
      if (this.options.offset && timestamps.length) {
        first = this.getDecimalForValue(timestamps[0]);
        if (timestamps.length === 1) {
          start = 1 - first;
        } else {
          start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
        }
        last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
        if (timestamps.length === 1) {
          end = last;
        } else {
          end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
      }
      const limit = timestamps.length < 3 ? 0.5 : 0.25;
      start = _limitValue(start, 0, limit);
      end = _limitValue(end, 0, limit);
      this._offsets = {
        start,
        end,
        factor: 1 / (start + 1 + end)
      };
    }
    _generate() {
      const adapter = this._adapter;
      const min = this.min;
      const max = this.max;
      const options = this.options;
      const timeOpts = options.time;
      const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
      const stepSize = valueOrDefault(options.ticks.stepSize, 1);
      const weekday = minor === "week" ? timeOpts.isoWeekday : false;
      const hasWeekday = isNumber(weekday) || weekday === true;
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, "isoWeek", weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? "day" : minor);
      if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
        throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
      }
      const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
      for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
        addTick(ticks, time, timestamps);
      }
      if (time === max || options.bounds === "ticks" || count === 1) {
        addTick(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort(sorter).map((x) => +x);
    }
    getLabelForValue(value) {
      const adapter = this._adapter;
      const timeOpts = this.options.time;
      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }
      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
      const options = this.options;
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const fmt = format || formats[unit];
      return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index2, ticks, format) {
      const options = this.options;
      const formatter = options.ticks.callback;
      if (formatter) {
        return callback(formatter, [
          time,
          index2,
          ticks
        ], this);
      }
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const majorUnit = this._majorUnit;
      const minorFormat = unit && formats[unit];
      const majorFormat = majorUnit && formats[majorUnit];
      const tick = ticks[index2];
      const major = majorUnit && majorFormat && tick && tick.major;
      return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        tick.label = this._tickFormatFunction(tick.value, i, ticks);
      }
    }
    getDecimalForValue(value) {
      return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
      const offsets = this._offsets;
      const pos = this.getDecimalForValue(value);
      return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
      const ticksOpts = this.options.ticks;
      const tickLabelWidth = this.ctx.measureText(label).width;
      const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      const cosRotation = Math.cos(angle);
      const sinRotation = Math.sin(angle);
      const tickFontSize = this._resolveTickFontOptions(0).size;
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
    _getLabelCapacity(exampleTime) {
      const timeOpts = this.options.time;
      const displayFormats = timeOpts.displayFormats;
      const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
        exampleTime
      ], this._majorUnit), format);
      const size = this._getLabelSize(exampleLabel);
      const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
      return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
      let timestamps = this._cache.data || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const metas = this.getMatchingVisibleMetas();
      if (this._normalized && metas.length) {
        return this._cache.data = metas[0].controller.getAllParsedValues(this);
      }
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
      const timestamps = this._cache.labels || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const labels = this.getLabels();
      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        timestamps.push(parse(this, labels[i]));
      }
      return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
      return _arrayUnique(values.sort(sorter));
    }
  };
  function interpolate2(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
      if (val >= table[lo].pos && val <= table[hi].pos) {
        ({ lo, hi } = _lookupByKey(table, "pos", val));
      }
      ({ pos: prevSource, time: prevTarget } = table[lo]);
      ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
      if (val >= table[lo].time && val <= table[hi].time) {
        ({ lo, hi } = _lookupByKey(table, "time", val));
      }
      ({ time: prevSource, pos: prevTarget } = table[lo]);
      ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
  }
  var TimeSeriesScale = class extends TimeScale {
    static id = "timeseries";
    static defaults = TimeScale.defaults;
    constructor(props) {
      super(props);
      this._table = [];
      this._minPos = void 0;
      this._tableRange = void 0;
    }
    initOffsets() {
      const timestamps = this._getTimestampsForTable();
      const table = this._table = this.buildLookupTable(timestamps);
      this._minPos = interpolate2(table, this.min);
      this._tableRange = interpolate2(table, this.max) - this._minPos;
      super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
      const { min, max } = this;
      const items = [];
      const table = [];
      let i, ilen, prev, curr, next;
      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        curr = timestamps[i];
        if (curr >= min && curr <= max) {
          items.push(curr);
        }
      }
      if (items.length < 2) {
        return [
          {
            time: min,
            pos: 0
          },
          {
            time: max,
            pos: 1
          }
        ];
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        next = items[i + 1];
        prev = items[i - 1];
        curr = items[i];
        if (Math.round((next + prev) / 2) !== curr) {
          table.push({
            time: curr,
            pos: i / (ilen - 1)
          });
        }
      }
      return table;
    }
    _generate() {
      const min = this.min;
      const max = this.max;
      let timestamps = super.getDataTimestamps();
      if (!timestamps.includes(min) || !timestamps.length) {
        timestamps.splice(0, 0, min);
      }
      if (!timestamps.includes(max) || timestamps.length === 1) {
        timestamps.push(max);
      }
      return timestamps.sort((a, b) => a - b);
    }
    _getTimestampsForTable() {
      let timestamps = this._cache.all || [];
      if (timestamps.length) {
        return timestamps;
      }
      const data = this.getDataTimestamps();
      const label = this.getLabelTimestamps();
      if (data.length && label.length) {
        timestamps = this.normalize(data.concat(label));
      } else {
        timestamps = data.length ? data : label;
      }
      timestamps = this._cache.all = timestamps;
      return timestamps;
    }
    getDecimalForValue(value) {
      return (interpolate2(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate2(this._table, decimal * this._tableRange + this._minPos, true);
    }
  };
  var scales = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale
  });
  var registerables = [
    controllers,
    elements,
    plugins,
    scales
  ];

  // node_modules/chart.js/auto/auto.js
  Chart.register(...registerables);
  var auto_default = Chart;

  // ui/chart/app.js
  var FILTER_ID = "default-filter";
  var PALETTE = [
    "#0052CC",
    "#00875A",
    "#DE350B",
    "#FF8B00",
    "#6554C0",
    "#00B8D9",
    "#36B37E",
    "#FF5630",
    "#FFAB00",
    "#8777D9",
    "#2684FF",
    "#57ADB4",
    "#FFC400",
    "#998DD9",
    "#4BBBCE"
  ];
  var STATUS_BG = {
    "To Do": "#DFE1E6",
    "In Progress": "#0052CC",
    "In Review": "#6554C0",
    "Done": "#00875A",
    "Blocked": "#DE350B",
    "Waiting": "#FF8B00"
  };
  var PRIORITY_BG = {
    "Highest": "#DE350B",
    "High": "#FF5630",
    "Medium": "#FF8B00",
    "Low": "#0071CE",
    "Lowest": "#2684FF"
  };
  var chartInstance = null;
  var chartType = "doughnut";
  var groupField = "status";
  var rawIssues = [];
  var CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:#172b4d;background:#fff}

/* \u2500\u2500 TOOLBAR \u2500\u2500 */
.toolbar{background:#fff;border-bottom:2px solid #0052CC;padding:5px 8px;display:flex;flex-wrap:wrap;gap:3px;align-items:center}
.tgroup{display:inline-flex;border:1px solid #DFE1E6;border-radius:3px;overflow:hidden;flex-shrink:0}
.tbtn{padding:3px 9px;background:#fff;border:none;border-right:1px solid #DFE1E6;cursor:pointer;font-size:11px;color:#42526E;font-weight:500;line-height:1.4}
.tgroup>.tbtn:last-child{border-right:none}
.tbtn.active{background:#0052CC;color:#fff}
.tsep{width:1px;height:20px;background:#DFE1E6;margin:0 3px;flex-shrink:0}
.tlabel{font-size:10px;color:#6B778C;font-weight:700;white-space:nowrap;text-transform:uppercase;letter-spacing:.3px;flex-shrink:0}
.tbadge{font-size:11px;background:#DEEBFF;color:#0052CC;padding:1px 8px;border-radius:10px;font-weight:700;white-space:nowrap;flex-shrink:0;margin-left:auto}

/* \u2500\u2500 CHART AREA \u2014 table layout avoids all flex/height iframe issues \u2500\u2500 */
.chart-area{padding:8px 10px}
.chart-layout{border-collapse:collapse;width:100%}
.td-canvas{vertical-align:middle;padding-right:12px;width:1%;white-space:nowrap}
.td-legend{vertical-align:top}

/* \u2500\u2500 LEGEND \u2500\u2500 */
.leg-title{font-size:10px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
.leg-row{display:flex;align-items:center;gap:6px;padding:3px 0;border-bottom:1px solid #F4F5F7;font-size:12px}
.leg-row:last-child{border-bottom:none}
.leg-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}
.leg-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.leg-val{font-weight:700;color:#172b4d;white-space:nowrap}
.leg-pct{color:#6B778C;font-size:11px;white-space:nowrap;margin-left:2px}

/* \u2500\u2500 EMPTY / ERROR \u2500\u2500 */
.status-msg{padding:16px;text-align:center;color:#6B778C;font-size:13px}
`;
  function groupData(issues) {
    const result = {};
    issues.forEach((i) => {
      var _a, _b, _c, _d;
      let key;
      if (groupField === "status") key = ((_a = i.fields.status) == null ? void 0 : _a.name) || "Unknown";
      if (groupField === "priority") key = ((_b = i.fields.priority) == null ? void 0 : _b.name) || "Unknown";
      if (groupField === "assignee") key = ((_c = i.fields.assignee) == null ? void 0 : _c.displayName) || "Unassigned";
      if (groupField === "issuetype") key = ((_d = i.fields.issuetype) == null ? void 0 : _d.name) || "Unknown";
      result[key] = (result[key] || 0) + 1;
    });
    return result;
  }
  function getColor(label, idx) {
    if (groupField === "status" && STATUS_BG[label]) return STATUS_BG[label];
    if (groupField === "priority" && PRIORITY_BG[label]) return PRIORITY_BG[label];
    return PALETTE[idx % PALETTE.length];
  }
  function renderChart() {
    const canvas = document.getElementById("chartCanvas");
    if (!canvas) return;
    const grouped = groupData(rawIssues);
    const labels = Object.keys(grouped);
    const values = Object.values(grouped);
    const total = values.reduce((s, v) => s + v, 0);
    const colors2 = labels.map((l, i) => getColor(l, i));
    document.getElementById("totalBadge").textContent = `${total} issue${total !== 1 ? "s" : ""}`;
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
    const isBar = chartType === "bar";
    canvas.width = isBar ? 200 : 150;
    canvas.height = isBar ? 125 : 150;
    chartInstance = new auto_default(canvas, {
      type: chartType,
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: colors2, borderWidth: isBar ? 0 : 2, borderColor: "#fff" }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const val = isBar ? ctx.parsed.y : ctx.parsed;
                const pct = total ? Math.round(val / total * 100) : 0;
                return ` ${ctx.label}: ${val} (${pct}%)`;
              }
            }
          }
        },
        ...isBar ? {
          scales: {
            y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } },
            x: { grid: { display: false } }
          }
        } : {}
      }
    });
    const rows = labels.map((l, i) => {
      const v = values[i];
      const pct = total ? Math.round(v / total * 100) : 0;
      return `<div class="leg-row">
      <span class="leg-dot" style="background:${colors2[i]}"></span>
      <span class="leg-name">${l}</span>
      <span class="leg-val">${v}</span>
      <span class="leg-pct">${pct}%</span>
    </div>`;
    }).join("");
    document.getElementById("legend").innerHTML = rows;
  }
  function setChartType(type, el) {
    chartType = type;
    document.querySelectorAll(".tbtn-type").forEach((b) => b.classList.remove("active"));
    el.classList.add("active");
    renderChart();
  }
  function setGroup(field, el) {
    groupField = field;
    document.querySelectorAll(".tbtn-group").forEach((b) => b.classList.remove("active"));
    el.classList.add("active");
    renderChart();
  }
  window._setChartType = setChartType;
  window._setGroup = setGroup;
  function mount() {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    document.getElementById("app").innerHTML = `
    <div class="toolbar">
      <span class="tlabel">Type</span>
      <div class="tgroup">
        <button class="tbtn tbtn-type active" onclick="_setChartType('doughnut',this)">Doughnut</button>
        <button class="tbtn tbtn-type"        onclick="_setChartType('pie',this)">Pie</button>
        <button class="tbtn tbtn-type"        onclick="_setChartType('bar',this)">Bar</button>
      </div>
      <span class="tsep"></span>
      <span class="tlabel">Group</span>
      <div class="tgroup">
        <button class="tbtn tbtn-group active" onclick="_setGroup('status',this)">Status</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('priority',this)">Priority</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('assignee',this)">Assignee</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('issuetype',this)">Type</button>
      </div>
      <span class="tbadge" id="totalBadge">Loading\u2026</span>
    </div>
    <div id="statusMsg" class="status-msg" style="display:none"></div>
    <div class="chart-area" id="chartArea">
      <table class="chart-layout"><tr>
        <td class="td-canvas"><canvas id="chartCanvas" width="150" height="150"></canvas></td>
        <td class="td-legend">
          <div class="leg-title">Breakdown</div>
          <div id="legend"></div>
        </td>
      </tr></table>
    </div>`;
  }
  async function load() {
    const msg = document.getElementById("statusMsg");
    const area = document.getElementById("chartArea");
    try {
      const data = await (0, import_bridge.invoke)("getIssues", { richFilterId: FILTER_ID });
      rawIssues = data || [];
      if (!rawIssues.length) {
        msg.textContent = "\u{1F50D} No issues match the current filter.";
        msg.style.display = "block";
        area.style.display = "none";
        document.getElementById("totalBadge").textContent = "0 issues";
      } else {
        msg.style.display = "none";
        area.style.display = "block";
        renderChart();
      }
    } catch (err) {
      msg.textContent = "\u26A0 Error loading chart: " + (err.message || JSON.stringify(err));
      msg.style.display = "block";
      area.style.display = "none";
      console.error("Chart load error:", err);
    }
  }
  async function init() {
    mount();
    await load();
    setInterval(load, 1e4);
  }
  init();
})();
/*! Bundled license information:

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.4
   * https://github.com/kurkle/color#readme
   * (c) 2024 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.dataset.js:
chart.js/dist/chart.js:
  (*!
   * Chart.js v4.5.1
   * https://www.chartjs.org
   * (c) 2025 Chart.js Contributors
   * Released under the MIT License
   *)
*/
