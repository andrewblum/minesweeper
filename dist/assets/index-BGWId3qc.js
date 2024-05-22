var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "assets/index-BGWId3qc.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e = m2[i];
        if (typeof e !== "string" && !Array.isArray(e)) {
          for (const k2 in e) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d = Object.getOwnPropertyDescriptor(e, k2);
              if (d) {
                Object.defineProperty(n2, k2, d.get ? d : {
                  enumerable: true,
                  get: () => e[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$1(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z$1 && a[z$1] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b, e) {
      var d, c = {}, k2 = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
          J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
          f2[m2] = arguments[m2 + 2];
        c.children = f2;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
    }
    function N$1(a, b) {
      return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$1;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R$1(a, b, e, d, c) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l$1:
              case n$1:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I$1(a))
        for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q$1(k2, g);
          h += R$1(k2, b, e, f2, c);
        }
      else if (f2 = A$1(a), "function" === typeof f2)
        for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
          k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
      else if ("object" === k2)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S$1(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R$1(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    function X$1() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
      S$1(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S$1(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$2;
    react_production_min.Profiler = r$2;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$1;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.act = X$1;
    react_production_min.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f2 in b)
          J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d.children = e;
      else if (1 < f2) {
        g = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g[m2] = arguments[m2 + 2];
        d.children = g;
      }
      return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b = M$1.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$1, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a) {
      var b = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b;
      }
    };
    react_production_min.unstable_act = X$1;
    react_production_min.useCallback = function(a, b) {
      return U$1.current.useCallback(a, b);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b) {
      return U$1.current.useEffect(a, b);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b, e) {
      return U$1.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function(a, b) {
      return U$1.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function(a, b) {
      return U$1.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function(a, b) {
      return U$1.current.useMemo(a, b);
    };
    react_production_min.useReducer = function(a, b, e) {
      return U$1.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b, e) {
      return U$1.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const $2AODx$react = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a)
        m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps)
        for (b in a = c.defaultProps, a)
          void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var client = {};
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; 0 < c; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (0 < g(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length)
          return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
              var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
              if (0 > g(C2, c))
                n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
              else if (n2 < e && 0 > g(x2, c))
                a[d] = x2, a[n2] = c, d = n2;
              else
                break a;
            }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t2); null !== b; ) {
          if (null === b.callback)
            k2(t2);
          else if (b.startTime <= a)
            k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
          else
            break;
          b = h(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2)
          if (null !== h(r2))
            A2 = true, I2(J2);
          else {
            var b = h(t2);
            null !== b && K2(H2, b.startTime - a);
          }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports2.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else
              k2(r2);
            v2 = h(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h(t2);
            null !== m2 && K2(H2, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c = y2;
        y2 = b;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b) {
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
        var c = y2;
        y2 = a;
        try {
          return b();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b, c) {
        var d = exports2.unstable_now();
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
        a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b = y2;
        return function() {
          var c = y2;
          y2 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++)
        da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a))
        return true;
      if (ja.call(la, a))
        return false;
      if (ka.test(a))
        return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d)
            return false;
          if (null !== c)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d))
        return true;
      if (d)
        return false;
      if (null !== c)
        switch (c.type) {
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
    function v(a, b, c, d, e, f2, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f2;
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
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
        qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na)
        return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d && "string" === typeof l2.stack) {
          for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
            h--;
          for (; 1 <= g && 0 <= h; g--, h--)
            if (e[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f2[h]) {
                    var k2 = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
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
      if (null == a)
        return null;
      if ("function" === typeof a)
        return a.displayName || a.name || null;
      if ("string" === typeof a)
        return a;
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
      if ("object" === typeof a)
        switch (a.$$typeof) {
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
          if ("function" === typeof b)
            return b.displayName || b.name || null;
          if ("string" === typeof b)
            return b;
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
        var e = c.get, f2 = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f2.call(this, a2);
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
      if (!a)
        return false;
      var b = a._valueTracker;
      if (!b)
        return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a)
        return null;
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
      if (null != c)
        if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c)
            a.value = "" + c;
        } else
          a.value !== "" + c && (a.value = "" + c);
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
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
          return;
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
      if ("number" !== b || Xa(a.ownerDocument) !== a)
        null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++)
          b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++)
          e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
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
      if (null != b.dangerouslySetInnerHTML)
        throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b)
            throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length)
              throw Error(p(93));
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
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b.firstChild; )
          a.appendChild(b.firstChild);
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
    }, qb = ["Webkit", "ms", "Moz", "O"];
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
      for (var c in b)
        if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
          throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children)
            throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
            throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style)
          throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-"))
        return "string" === typeof b.is;
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
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb)
          throw Error(p(280));
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
        if (b)
          for (a = 0; a < b.length; a++)
            Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib)
        return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c)
        return null;
      var d = Db(c);
      if (null === d)
        return null;
      c = d[b];
      a:
        switch (b) {
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
      if (a)
        return null;
      if (c && "function" !== typeof c)
        throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia)
      try {
        var Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
    function Nb(a, b, c, d, e, f2, g, h, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f2, g, h, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f2, g, h, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate)
        for (; b.return; )
          b = b.return;
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
        if (null !== b)
          return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a)
        throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b)
          throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e)
          break;
        var f2 = e.alternate;
        if (null === f2) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f2.child) {
          for (f2 = e.child; f2; ) {
            if (f2 === c)
              return Xb(e), a;
            if (f2 === d)
              return Xb(e), b;
            f2 = f2.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return)
          c = e, d = f2;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f2;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f2;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f2.child; h; ) {
              if (h === c) {
                g = true;
                c = f2;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f2;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g)
              throw Error(p(189));
          }
        }
        if (c.alternate !== d)
          throw Error(p(190));
      }
      if (3 !== c.tag)
        throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag)
        return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b)
          return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
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
      if (0 === c)
        return 0;
      var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
      } else
        g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
      if (0 === d)
        return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
        return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b)
        for (a = a.entanglements, b &= d; 0 < b; )
          c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
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
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
        if (-1 === k2) {
          if (0 === (h & c) || 0 !== (h & d))
            e[g] = vc(h, b);
        } else
          k2 <= b && (a.expiredLanes |= h);
        f2 &= ~h;
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
      for (var b = [], c = 0; 31 > c; c++)
        b.push(a);
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
        var e = 31 - oc(c), f2 = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f2;
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
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
    function Tc(a, b, c, d, e, f2) {
      if (null === a || a.nativeEvent !== f2)
        return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
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
          var f2 = e.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
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
      if (null !== a.blockedOn)
        return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else
          return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
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
      for (c = 0; c < Qc.length; c++)
        d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
        Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e)
          hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d))
          d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f2 = Cb(e);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b, c, d);
            null === f2 && hd(a, b, d, id, c);
            if (f2 === e)
              break;
            e = f2;
          }
          null !== e && d.stopPropagation();
        } else
          hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a)
        if (b = Vb(a), null === b)
          a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a)
            return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated)
            return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else
          b !== a && (a = null);
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
    var kd = null, ld = null, md = null;
    function nd() {
      if (md)
        return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++)
        ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
        ;
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
      function b(b2, d, e, f2, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f2;
        this.target = g;
        this.currentTarget = null;
        for (var c in a)
          a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
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
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
    }, Nd = {
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
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
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
        if ("Unidentified" !== b)
          return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
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
          if (32 !== b.which)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie)
        return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
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
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b))
        return a;
    }
    function ve(a, b) {
      if ("change" === a)
        return b;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
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
      if ("selectionchange" === a || "keyup" === a || "keydown" === a)
        return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a)
        return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a)
        return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b))
        return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
        return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length)
        return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e]))
          return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b)
            return { node: c, offset: b - a };
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
        if (c)
          a = b.contentWindow;
        else
          break;
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
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
            c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f2 = Math.min(d.start, e);
            d = void 0 === d.end ? f2 : Math.min(d.end, e);
            !a.extend && f2 > d && (e = d, d = f2, f2 = e);
            e = Ke(c, f2);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; )
          1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++)
          a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
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
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a])
        return Xe[a];
      if (!We[a])
        return a;
      var b = We[a], c;
      for (c in b)
        if (b.hasOwnProperty(c) && c in Ye)
          return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
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
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
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
          var f2 = void 0;
          if (b)
            for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k2 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e.isPropagationStopped())
                break a;
              nf(e, h, l2);
              f2 = k2;
            }
          else
            for (g = 0; g < d.length; g++) {
              h = d[g];
              k2 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e.isPropagationStopped())
                break a;
              nf(e, h, l2);
              f2 = k2;
            }
        }
      }
      if (Qb)
        throw a = Rb, Qb = false, Rb = null, a;
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
      var f2 = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d)
        a:
          for (; ; ) {
            if (null === d)
              return;
            var g = d.tag;
            if (3 === g || 4 === g) {
              var h = d.stateNode.containerInfo;
              if (h === e || 8 === h.nodeType && h.parentNode === e)
                break;
              if (4 === g)
                for (g = d.return; null !== g; ) {
                  var k2 = g.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                      return;
                  }
                  g = g.return;
                }
              for (; null !== h; ) {
                g = Wc(h);
                if (null === g)
                  return;
                k2 = g.tag;
                if (5 === k2 || 6 === k2) {
                  d = f2 = g;
                  continue a;
                }
                h = h.parentNode;
              }
            }
            d = d.return;
          }
      Jb(function() {
        var d2 = f2, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
            t2 = [];
            for (var w2 = d2, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
              break a;
            if (k3 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k3) {
                if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                  n2 = null;
              } else
                k3 = null, n2 = d2;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a)
                  t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h2 : ue(k3);
                u2 = null == n2 ? h2 : ue(n2);
                h2 = new t2(F2, w2 + "leave", k3, c, e2);
                h2.target = J2;
                h2.relatedTarget = u2;
                F2 = null;
                Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2)
                  b: {
                    t2 = k3;
                    x2 = n2;
                    w2 = 0;
                    for (u2 = t2; u2; u2 = vf(u2))
                      w2++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2))
                      u2++;
                    for (; 0 < w2 - u2; )
                      t2 = vf(t2), w2--;
                    for (; 0 < u2 - w2; )
                      x2 = vf(x2), u2--;
                    for (; w2--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                        break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                else
                  t2 = null;
                null !== k3 && wf(g2, h2, k3, t2, false);
                null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k3 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h2.type)
              var na = ve;
            else if (me(h2))
              if (we)
                na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
            else
              (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
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
              if (me(xa) || "true" === xa.contentEditable)
                Qe = xa, Re = d2, Se = null;
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
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae)
            b: {
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
          else
            ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c))
            d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f2 = e.stateNode;
        5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a)
        return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k2 = h.alternate, l2 = h.stateNode;
        if (null !== k2 && k2 === d)
          break;
        5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c)
        throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
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
        if (e && 8 === e.nodeType)
          if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else
            "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b)
          break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b)
            break;
          if ("/$" === b)
            return null;
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
            if (0 === b)
              return a;
            b--;
          } else
            "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b)
        return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child)
            for (a = Mf(a); null !== a; ) {
              if (c = a[Of])
                return c;
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
      if (5 === a.tag || 6 === a.tag)
        return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
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
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c)
        return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
        return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f2;
      for (f2 in c)
        e[f2] = b[f2];
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
      if (H.current !== Vf)
        throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext)
        return c;
      d = d.getChildContext();
      for (var e in d)
        if (!(e in b))
          throw Error(p(108, Ra(a) || "Unknown", e));
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
      if (!d)
        throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null, fg = false, gg = false;
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
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
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
      var f2 = 32 - oc(b) + e;
      if (30 < f2) {
        var g = e - e % 5;
        f2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f2 + a;
      } else
        rg = 1 << f2 | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
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
            if (Dg(a))
              throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a))
            throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
        a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg)
        return false;
      if (!I)
        return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a))
          throw Hg(), Error(p(418));
        for (; b; )
          Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a)
          throw Error(p(317));
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
              } else
                "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; )
        a = Lf(a.nextSibling);
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
            if (1 !== c.tag)
              throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d)
            throw Error(p(147, a));
          var e = d, f2 = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
            return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f2] : b2[f2] = a2;
          };
          b._stringRef = f2;
          return b;
        }
        if ("string" !== typeof a)
          throw Error(p(284));
        if (!c._owner)
          throw Error(p(290, a));
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
        if (!a)
          return null;
        for (; null !== d2; )
          b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
          null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b2, c2, d2) {
        b2.index = d2;
        if (!a)
          return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2)
          return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag)
          return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k2(a2, b2, c2, d2) {
        var f3 = c2.type;
        if (f3 === ya)
          return m2(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type))
          return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l2(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
          return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m2(a2, b2, c2, d2, f3) {
        if (null === b2 || 7 !== b2.tag)
          return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q2(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
          return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
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
          if (eb(b2) || Ka(b2))
            return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
          return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2))
            return null !== e2 ? null : m2(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y2(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
          return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
            case Ha:
              var f3 = d2._init;
              return y2(a2, b2, c2, f3(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2))
            return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n2(e2, g2, h2, k3) {
        for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e2, u2, h2[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b(e2, u2);
          g2 = f2(n3, g2, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h2.length)
          return c(e2, u2), I && tg(e2, w2), l3;
        if (null === u2) {
          for (; w2 < h2.length; w2++)
            u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e2, w2);
          return l3;
        }
        for (u2 = d(e2, u2); w2 < h2.length; w2++)
          x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function t2(e2, g2, h2, k3) {
        var l3 = Ka(h2);
        if ("function" !== typeof l3)
          throw Error(p(150));
        h2 = l3.call(h2);
        if (null == h2)
          throw Error(p(151));
        for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e2, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b(e2, m3);
          g2 = f2(t3, g2, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done)
          return c(
            e2,
            m3
          ), I && tg(e2, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h2.next())
            n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e2, w2);
          return l3;
        }
        for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
          n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function J2(a2, d2, f3, h2) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c(a2, l3.sibling);
                        d2 = e(l3, f3.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props);
                      d2.ref = Lg(a2, l3, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l3);
                    break;
                  } else
                    b(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d2; ) {
                  if (d2.key === l3)
                    if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                  else
                    b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f3, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
          }
          if (eb(f3))
            return n2(a2, d2, f3, h2);
          if (Ka(f3))
            return t2(a2, d2, f3, h2);
          Mg(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J2;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
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
        if (a === c)
          break;
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
      if (Zg !== a)
        if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg)
            throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else
          Yg = Yg.next = a;
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
      for (a = a.return; null !== a; )
        a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
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
      if (null === d)
        return null;
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
        var e = null, f2 = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f2 ? e = f2 = g : f2 = f2.next = g;
            c = c.next;
          } while (null !== c);
          null === f2 ? e = f2 = b : f2 = f2.next = b;
        } else
          e = f2 = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
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
      var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k2 = h, l2 = k2.next;
        k2.next = null;
        null === g ? f2 = l2 : g.next = l2;
        g = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e.baseState;
        g = 0;
        m2 = l2 = k2 = null;
        h = f2;
        do {
          var r2 = h.lane, y2 = h.eventTime;
          if ((d & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h;
              r2 = b;
              y2 = c;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2)
                    break a;
                  q2 = A({}, q2, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
          } else
            y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
          h = h.next;
          if (null === h)
            if (h = e.shared.pending, null === h)
              break;
            else
              r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e.baseState = k2;
        e.firstBaseUpdate = l2;
        e.lastBaseUpdate = m2;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else
          null === f2 && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q2;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a)
        for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e)
              throw Error(p(191, e));
            e.call(d);
          }
        }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th)
        throw Error(p(174));
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
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
            return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128))
            return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++)
        Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b)
        return false;
      for (var c = 0; c < b.length && c < a.length; c++)
        if (!He(a[c], b[c]))
          return false;
      return true;
    }
    function Nh(a, b, c, d, e, f2) {
      Hh = f2;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f2 = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f2)
            throw Error(p(301));
          f2 += 1;
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
      if (b)
        throw Error(p(300));
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
      } else
        a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b)
        O = b, N = a;
      else {
        if (null === a)
          throw Error(p(310));
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
      if (null === c)
        throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f2 = c.pending;
      if (null !== f2) {
        if (null !== e) {
          var g = e.next;
          e.next = f2.next;
          f2.next = g;
        }
        d.baseQueue = e = f2;
        c.pending = null;
      }
      if (null !== e) {
        f2 = e.next;
        d = d.baseState;
        var h = g = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Hh & m2) === m2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
            M.lanes |= m2;
            rh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g = d : k2.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k2;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
        while (e !== a);
      } else
        null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c)
        throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f2 = a(f2, g.action), g = g.next;
        while (g !== e);
        He(f2, b.memoizedState) || (dh = true);
        b.memoizedState = f2;
        null === b.baseQueue && (b.baseState = f2);
        c.lastRenderedState = f2;
      }
      return [f2, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
      f2 && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q)
          throw Error(p(349));
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
      var f2 = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f2 = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f2, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f2, d);
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
      if ("function" === typeof b)
        return a = a(), b(a), function() {
          b(null);
        };
      if (null !== b && void 0 !== b)
        return a = a(), b.current = a, function() {
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
      if (null !== d && null !== b && Mh(b, d[1]))
        return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1]))
        return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21))
        return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
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
      if (zi(a))
        Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a))
        Ai(b, e);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
          try {
            var g = b.lastRenderedState, h = f2(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k2 = b.interleaved;
              null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l2) {
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
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
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
        if (void 0 === c)
          throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q)
          throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f2 = { value: c, getSnapshot: b };
      e.queue = f2;
      mi(ai.bind(
        null,
        d,
        f2,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f2, c, b), void 0, null);
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
      } else
        c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false }, Ph = {
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
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
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
        for (var c in a)
          void 0 === b[c] && (b[c] = a[c]);
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
      var d = R(), e = yi(a), f2 = mh(d, e);
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      b = nh(a, f2, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f2 = mh(d, e);
      f2.tag = 1;
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      b = nh(a, f2, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f2, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f2);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
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
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
      e.state = a.memoizedState;
      f2 = b.getDerivedStateFromProps;
      "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
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
      } catch (f2) {
        e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
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
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
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
      } else
        e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag)
          b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b)
          return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1))
        return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f2 = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f2, e);
      c = Sh();
      if (null !== a && !dh)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f2 = c.type;
        if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
          return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e)) {
        var g = f2.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref)
          return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f2, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d) && a.ref === b.ref)
          if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
            0 !== (a.flags & 131072) && (dh = true);
          else
            return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode)
        if (0 === (b.mode & 1))
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824))
            return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
      else
        null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c)
        b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f2 = Zf(c) ? Xf : H.current;
      f2 = Yf(b, f2);
      ch(b, e);
      c = Nh(a, b, c, d, f2, e);
      d = Sh();
      if (null !== a && !dh)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f2 = true;
        cg(b);
      } else
        f2 = false;
      ch(b, e);
      if (null === b.stateNode)
        ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k2 = g.context, l2 = c.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
        var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
        jh = false;
        var r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        k2 = b.memoizedState;
        h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l2 = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l2;
        q2 = b.pendingProps;
        r2 = g.context;
        k2 = c.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
        var y2 = c.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
        jh = false;
        r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        var n2 = b.memoizedState;
        h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f2, e);
    }
    function jj(a, b, c, d, e, f2) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g)
        return e && dg(b, c, false), Zi(a, b, f2);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
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
      var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h)
        f2 = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState)
        e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a))
          return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h))
        return rj(a, b, g, d, h, e, c);
      if (f2) {
        f2 = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k2 = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
        f2.return = b;
        d.return = b;
        d.sibling = f2;
        b.child = d;
        d = f2;
        f2 = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f2.memoizedState = g;
        f2.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f2 = a.child;
      a = f2.sibling;
      d = Pg(f2, { mode: "visible", children: d.children });
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
    function rj(a, b, c, d, e, f2, g) {
      if (c) {
        if (b.flags & 256)
          return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState)
          return b.child = a.child, b.flags |= 128, null;
        f2 = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f2 = Tg(f2, e, g, null);
        f2.flags |= 2;
        d.return = b;
        f2.return = b;
        d.sibling = f2;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f2;
      }
      if (0 === (b.mode & 1))
        return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d)
          var h = d.dgst;
        d = h;
        f2 = Error(p(419));
        d = Ki(f2, d, void 0);
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
          0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data)
        return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f2.treeContext;
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
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2))
        d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128))
          a:
            for (a = b.child; null !== a; ) {
              if (13 === a.tag)
                null !== a.memoizedState && vj(a, c, b);
              else if (19 === a.tag)
                vj(a, c, b);
              else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b)
                break a;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === b)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1))
        b.memoizedState = null;
      else
        switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; )
              a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f2);
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
            wj(b, true, c, null, f2);
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
      if (0 === (c & b.childLanes))
        return null;
      if (null !== a && b.child !== a.child)
        throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; )
          a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
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
            if (null !== d.dehydrated)
              return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes))
              return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d)
              return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d)
            break;
          else
            return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag)
          a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b)
            return;
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
        var f2 = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f2 = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f2 = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l2 in e)
          if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
            if ("style" === l2) {
              var h = e[l2];
              for (g in h)
                h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d) {
          var k2 = d[l2];
          h = null != e ? e[l2] : void 0;
          if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
            if ("style" === l2)
              if (h) {
                for (g in h)
                  !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for (g in k2)
                  k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
              } else
                c || (f2 || (f2 = []), f2.push(
                  l2,
                  c
                )), c = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c && (f2 = f2 || []).push("style", c);
        var l2 = f2;
        if (b.updateQueue = l2)
          b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I)
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; )
              null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; )
              null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b)
        for (var e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else
        for (e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
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
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child)
            Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode)
            Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode)
                throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f2 = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f2;
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
                  for (e = 0; e < lf.length; e++)
                    D(lf[e], d);
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
                  Za(d, f2);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f2), D("invalid", d);
              }
              ub(c, f2);
              e = null;
              for (var g in f2)
                if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f2, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d.onclick = Bf);
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
                    for (e = 0; e < lf.length; e++)
                      D(lf[e], a);
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
                for (f2 in h)
                  if (h.hasOwnProperty(f2)) {
                    var k2 = h[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
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
                    f2 = d.value;
                    null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
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
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode)
            Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode)
              throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f2 = d.nodeValue !== c) {
                if (a = xg, null !== a)
                  switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
              }
              f2 && (b.flags |= 4);
            } else
              d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
              Hg(), Ig(), b.flags |= 98560, f2 = false;
            else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f2)
                  throw Error(p(318));
                f2 = b.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2)
                  throw Error(p(317));
                f2[Of] = b;
              } else
                Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f2 = false;
            } else
              null !== zg && (Fj(zg), zg = null), f2 = true;
            if (!f2)
              return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128))
            return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f2 = b.memoizedState;
          if (null === f2)
            return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f2.rendering;
          if (null === g)
            if (d)
              Dj(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128))
                for (a = b.child; null !== a; ) {
                  g = Ch(a);
                  if (null !== g) {
                    b.flags |= 128;
                    Dj(f2, false);
                    d = g.updateQueue;
                    null !== d && (b.updateQueue = d, b.flags |= 4);
                    b.subtreeFlags = 0;
                    d = c;
                    for (c = b.child; null !== c; )
                      f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                    G(L, L.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
              null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
          else {
            if (!d)
              if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
                  return S(b), null;
              } else
                2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
          }
          if (null !== f2.tail)
            return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
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
            if (null === b.alternate)
              throw Error(p(340));
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
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c)
        if ("function" === typeof c)
          try {
            c(null);
          } catch (d) {
            W(a, b, d);
          }
        else
          c.current = null;
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
        if ("selectionStart" in a)
          var c = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                    q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                    3 === q2.nodeType && (g += q2.nodeValue.length);
                    if (null === (y2 = q2.firstChild))
                      break;
                    r2 = q2;
                    q2 = y2;
                  }
                  for (; ; ) {
                    if (q2 === a)
                      break b;
                    r2 === c && ++l2 === e && (h = g);
                    r2 === f2 && ++m2 === d && (k2 = g);
                    if (null !== (y2 = q2.nextSibling))
                      break;
                    q2 = r2;
                    r2 = q2.parentNode;
                  }
                  q2 = y2;
                }
              c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
            } else
              c = null;
          }
        c = c || { start: 0, end: 0 };
      } else
        c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; )
        if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
          a.return = b, V = a;
        else
          for (; null !== V; ) {
            b = V;
            try {
              var n2 = b.alternate;
              if (0 !== (b.flags & 1024))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n2) {
                      var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u2 = b.stateNode.containerInfo;
                    1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p(163));
                }
            } catch (F2) {
              W(b, b.return, F2);
            }
            a = b.sibling;
            if (null !== a) {
              a.return = b.return;
              V = a;
              break;
            }
            V = b.return;
          }
      n2 = Nj;
      Nj = false;
      return n2;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f2 = e.destroy;
            e.destroy = void 0;
            void 0 !== f2 && Mj(b, c, f2);
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
      a:
        for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return))
              return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2)
              continue a;
            if (null === a.child || 4 === a.tag)
              continue a;
            else
              a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2))
            return a.stateNode;
        }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d)
        a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a))
        for (Vj(a, b, c), a = a.sibling; null !== a; )
          Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d)
        a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a))
        for (Wj(a, b, c), a = a.sibling; null !== a; )
          Wj(a, b, c), a = a.sibling;
    }
    var X = null, Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; )
        Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
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
              var f2 = e, g = f2.destroy;
              f2 = f2.tag;
              void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
            try {
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
      if (null !== c)
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f2 = a, g = b, h = g;
            a:
              for (; null !== h; ) {
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
            if (null === X)
              throw Error(p(160));
            Zj(f2, g, e);
            X = null;
            Xj = false;
            var k2 = e.alternate;
            null !== k2 && (k2.return = null);
            e.return = null;
          } catch (l2) {
            W(e, b, l2);
          }
        }
      if (b.subtreeFlags & 12854)
        for (b = b.child; null !== b; )
          dk(b, a), b = b.sibling;
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
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Pj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
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
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
                vb(h, g);
                var l2 = vb(h, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var m2 = k2[g], q2 = k2[g + 1];
                  "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
                }
                switch (h) {
                  case "input":
                    bb(e, f2);
                    break;
                  case "textarea":
                    ib(e, f2);
                    break;
                  case "select":
                    var r2 = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e[Pf] = f2;
              } catch (t2) {
                W(a, a.return, t2);
              }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode)
              throw Error(p(162));
            e = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated)
            try {
              bd(b.containerInfo);
            } catch (t2) {
              W(a, a.return, t2);
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
          e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m2 = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
              for (V = a, m2 = a.child; null !== m2; ) {
                for (q2 = V = m2; null !== V; ) {
                  r2 = V;
                  y2 = r2.child;
                  switch (r2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r2, r2.return);
                      break;
                    case 1:
                      Lj(r2, r2.return);
                      var n2 = r2.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d = r2;
                        c = r2.return;
                        try {
                          b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                        } catch (t2) {
                          W(d, c, t2);
                        }
                      }
                      break;
                    case 5:
                      Lj(r2, r2.return);
                      break;
                    case 22:
                      if (null !== r2.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
                }
                m2 = m2.sibling;
              }
            a:
              for (m2 = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m2) {
                    m2 = q2;
                    try {
                      e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m2)
                    try {
                      q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a)
                    break a;
                  m2 === q2 && (m2 = null);
                  q2 = q2.return;
                }
                m2 === q2 && (m2 = null);
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
              var f2 = Uj(a);
              Wj(a, f2, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f2 = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l2 = U;
            Jj = g;
            if ((U = k2) && !l2)
              for (V = e; null !== V; )
                g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
            for (; null !== f2; )
              V = f2, ik(f2), f2 = f2.sibling;
            V = e;
            Jj = h;
            U = l2;
          }
          kk(a);
        } else
          0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U)
                    if (null === c)
                      d.componentDidMount();
                    else {
                      var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                      d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child)
                      switch (b.child.tag) {
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
                    var k2 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c.focus();
                        break;
                      case "img":
                        k2.src && (c.src = k2.src);
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
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q2 = m2.dehydrated;
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
          } catch (r2) {
            W(b, b.return, r2);
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
              } catch (k2) {
                W(b, c, k2);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k2) {
                  W(b, e, k2);
                }
              }
              var f2 = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, f2, k2);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, g, k2);
              }
          }
        } catch (k2) {
          W(b, b.return, k2);
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
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z)
        return Z & -Z;
      if (null !== Kg.transition)
        return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a)
        return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk)
        throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q)
        a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d)
        null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b)
          0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
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
      if (0 !== (K & 6))
        throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c)
        return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d)
        return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
        b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f2 = Jk();
        if (Q !== a || Z !== b)
          uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f2;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b)
          throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b)
          Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b))
            throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
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
                if (0 !== uc(a, 0))
                  break;
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
              if ((d & 4194240) === d)
                break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f2 = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f2;
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
          if (null !== c && (c = c.stores, null !== c))
            for (var d = 0; d < c.length; d++) {
              var e = c[d], f2 = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f2(), e))
                  return false;
              } catch (g) {
                return false;
              }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c)
          c.return = b, b = c;
        else {
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return true;
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
      if (0 !== (K & 6))
        throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1))
        return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c)
        throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c)
        throw Error(p(345));
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
        if (ok.transition = null, C = 1, a)
          return a();
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
      if (null !== Y)
        for (c = Y.return; null !== c; ) {
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
        for (b = 0; b < fh.length; b++)
          if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e;
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
            var f2 = a, g = c.return, h = c, k2 = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Ui(g);
              if (null !== y2) {
                y2.flags &= -257;
                Vi(y2, g, h, f2, b);
                y2.mode & 1 && Si(f2, l2, b);
                b = y2;
                k2 = l2;
                var n2 = b.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b.updateQueue = t2;
                } else
                  n2.add(k2);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f2, l2, b);
                  tj();
                  break a;
                }
                k2 = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J2 = Ui(g);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g, h, f2, b);
                Jg(Ji(k2, h));
                break a;
              }
            }
            f2 = k2 = Ji(k2, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f2] : sk.push(f2);
            f2 = g;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var x2 = Ni(f2, k2, b);
                  ph(f2, x2);
                  break a;
                case 1:
                  h = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var F2 = Qi(f2, h, b);
                    ph(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
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
      if (0 === T || 3 === T || 2 === T)
        T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b)
        uk = null, Kk(a, b);
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
      if (null !== Y)
        throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; )
        Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); )
        Uk(Y);
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
          if (null !== a)
            a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
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
      if (0 !== (K & 6))
        throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current)
        throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c.lanes | c.childLanes;
      Bc(a, f2);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f2 = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f2) {
        f2 = ok.transition;
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
        hk(c);
        dc();
        K = h;
        C = g;
        ok.transition = f2;
      } else
        a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f2 = a.pendingLanes;
      0 === f2 && (Ri = null);
      mc(c.stateNode);
      Dk(a, B());
      if (null !== b)
        for (d = a.onRecoverableError, c = 0; c < b.length; c++)
          e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi)
        throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk)
            var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6))
              throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f2 = V, g = f2.child;
              if (0 !== (V.flags & 16)) {
                var h = f2.deletions;
                if (null !== h) {
                  for (var k2 = 0; k2 < h.length; k2++) {
                    var l2 = h[k2];
                    for (V = l2; null !== V; ) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2)
                        q2.return = m2, V = q2;
                      else
                        for (; null !== V; ) {
                          m2 = V;
                          var r2 = m2.sibling, y2 = m2.return;
                          Sj(m2);
                          if (m2 === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r2) {
                            r2.return = y2;
                            V = r2;
                            break;
                          }
                          V = y2;
                        }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g)
                g.return = f2, V = g;
              else
                b:
                  for (; null !== V; ) {
                    f2 = V;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(9, f2, f2.return);
                      }
                    var x2 = f2.sibling;
                    if (null !== x2) {
                      x2.return = f2.return;
                      V = x2;
                      break b;
                    }
                    V = f2.return;
                  }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g = V;
              var u2 = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u2)
                u2.return = g, V = u2;
              else
                b:
                  for (g = w2; null !== V; ) {
                    h = V;
                    if (0 !== (h.flags & 2048))
                      try {
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
                    var F2 = h.sibling;
                    if (null !== F2) {
                      F2.return = h.return;
                      V = F2;
                      break b;
                    }
                    V = h.return;
                  }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
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
      if (3 === a.tag)
        Xk(a, a, c);
      else
        for (; null !== b; ) {
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
      if (null !== a)
        if (a.memoizedProps !== b.pendingProps || Wf.current)
          dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128))
            return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
      else
        dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f2 = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
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
            if (null === a)
              throw Error(p(387));
            d = b.pendingProps;
            f2 = b.memoizedState;
            e = f2.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f2.isDehydrated)
              if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else
                for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; )
                  c.flags = c.flags & -3 | 4096, c = c.sibling;
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
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
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
            f2 = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f2)
              if (He(f2.value, g)) {
                if (f2.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else
                for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                  var h = f2.dependencies;
                  if (null !== h) {
                    g = f2.child;
                    for (var k2 = h.firstContext; null !== k2; ) {
                      if (k2.context === d) {
                        if (1 === f2.tag) {
                          k2 = mh(-1, c & -c);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m2 = l2.pending;
                            null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c);
                        bh(
                          f2.return,
                          c,
                          b
                        );
                        h.lanes |= c;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g = f2.type === b.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g = f2.return;
                    if (null === g)
                      throw Error(p(341));
                    g.lanes |= c;
                    h = g.alternate;
                    null !== h && (h.lanes |= c);
                    bh(g, c, b);
                    g = f2.sibling;
                  } else
                    g = f2.child;
                  if (null !== g)
                    g.return = f2;
                  else
                    for (g = f2; null !== g; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      f2 = g.sibling;
                      if (null !== f2) {
                        f2.return = g.return;
                        g = f2;
                        break;
                      }
                      g = g.return;
                    }
                  f2 = g;
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
      if ("function" === typeof a)
        return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da)
          return 11;
        if (a === Ga)
          return 14;
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
    function Rg(a, b, c, d, e, f2) {
      var g = 2;
      d = a;
      if ("function" === typeof a)
        aj(a) && (g = 1);
      else if ("string" === typeof a)
        g = 5;
      else
        a:
          switch (a) {
            case ya:
              return Tg(c.children, e, f2, b);
            case za:
              g = 8;
              e |= 8;
              break;
            case Aa:
              return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
            case Ea:
              return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
            case Fa:
              return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
            case Ia:
              return pj(c, e, f2, b);
            default:
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
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
      b.lanes = f2;
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
    function bl(a, b, c, d, e, f2, g, h, k2) {
      a = new al(a, b, c, h, k2);
      1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
      f2 = Bg(3, null, null, b);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f2);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a)
        return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag)
          throw Error(p(170));
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
        if (Zf(c))
          return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f2, g, h, k2) {
      a = bl(c, d, true, a, e, f2, g, h, k2);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f2 = mh(d, e);
      f2.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f2, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f2 = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f2, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f2), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child)
        return null;
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
      if (null === b)
        throw Error(p(409));
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
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
          ;
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
          var f2 = d;
          d = function() {
            var a2 = gl(g);
            f2.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; )
        a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k2);
          h.call(a2);
        };
      }
      var k2 = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k2, c, d);
      });
      return k2;
    }
    function rl(a, b, c, d, e) {
      var f2 = c._reactRootContainer;
      if (f2) {
        var g = f2;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else
        g = ql(c, b, a, e, d);
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
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e)
                  throw Error(p(90));
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
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber)
        try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b))
        throw Error(p(200));
      return cl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function(a, b) {
      if (!nl(a))
        throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a)
        return null;
      if (1 === a.nodeType)
        return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render)
          throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b, c) {
      if (!ol(b))
        throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function(a, b, c) {
      if (!nl(a))
        throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
      a[uf] = b.current;
      sf(a);
      if (d)
        for (a = 0; a < d.length; a++)
          c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
            c,
            e
          );
      return new ml(b);
    };
    reactDom_production_min.render = function(a, b, c) {
      if (!ol(b))
        throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a))
        throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c))
        throw Error(p(200));
      if (null == a || void 0 === a._reactInternals)
        throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    const $7SXl2$reactdom = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
    var m = reactDomExports;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    const DIFFICULTIES = {
      EASY: { height: 8, width: 10, numberOfBombs: 5 },
      MEDIUM: { height: 14, width: 18, numberOfBombs: 40 },
      HARD: { height: 20, width: 24, numberOfBombs: 100 }
    };
    function makeBoard({ height, width }) {
      const board = Array.from(Array(height), () => new Array(width));
      for (let r2 = 0; r2 < height; r2++) {
        for (let c = 0; c < width; c++) {
          board[r2][c] = "_";
        }
      }
      return board;
    }
    function placeBombs(r2, c, board, numBombs) {
      const safeCoords = getSafeCoords(board, r2, c);
      const bombCoords = getBombCoords(board, numBombs, safeCoords);
      for (let r3 = 0; r3 < board.length; r3++) {
        for (let c2 = 0; c2 < board[0].length; c2++) {
          board[r3][c2] = bombCoords.has(`${r3},${c2}`) ? "M" : "_";
        }
      }
      return board;
    }
    function getSafeCoords(board, r2, c) {
      const safeCoords = /* @__PURE__ */ new Set();
      const area = board.length * board[0].length;
      const maxRatio = area <= 80 ? 0.33 : 0.28;
      const minRatio = area <= 80 ? 0.17 : 0.14;
      const max2 = area * maxRatio;
      const min2 = area * minRatio;
      const numSafe = Math.floor(Math.random() * (max2 - min2) + min2);
      const initialSurroundings = getSurroundingSquares(
        Number(r2),
        Number(c),
        board
      );
      initialSurroundings.forEach(([row, col]) => safeCoords.add(`${row},${col}`));
      safeCoords.add(`${r2},${c}`);
      while (safeCoords.size < numSafe) {
        const [row, col] = [...safeCoords][Math.floor(Math.random() * safeCoords.size)].split(",");
        const surroundings = getSurroundingSquares(Number(row), Number(col), board);
        const cell = surroundings[Math.floor(Math.random() * surroundings.length)];
        const coords = `${cell[0]},${cell[1]}`;
        if (!safeCoords.has(coords))
          safeCoords.add(coords);
      }
      return safeCoords;
    }
    function getBombCoords(board, numBombs, safeCoords) {
      const height = board.length;
      const width = board[0].length;
      const bombCoords = /* @__PURE__ */ new Set();
      while (bombCoords.size < numBombs) {
        const row = Math.floor(Math.random() * height);
        const col = Math.floor(Math.random() * width);
        const coords = `${row},${col}`;
        if (!bombCoords.has(coords) && !safeCoords.has(coords)) {
          bombCoords.add(coords);
        }
      }
      return bombCoords;
    }
    function getSurroundingSquares(r2, c, board) {
      const sqrs = [];
      for (const [i, j] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, -1]
      ]) {
        const [x2, y2] = [r2 + i, c + j];
        if (x2 >= 0 && y2 >= 0 && x2 < board.length && y2 < board[0].length) {
          sqrs.push([x2, y2]);
        }
      }
      return sqrs;
    }
    function numMinesAround(r2, c, board) {
      return getSurroundingSquares(r2, c, board).reduce((acc, [x2, y2]) => {
        return acc + Number(board[x2][y2] == "M" || board[x2][y2] == "MF");
      }, 0);
    }
    function revealEmptyAreaAroundClick(r2, c, board) {
      if (board[r2][c].startsWith("_")) {
        const mines = numMinesAround(r2, c, board);
        if (mines > 0) {
          board[r2][c] = String(mines);
        } else {
          board[r2][c] = "0";
          for (const [x2, y2] of getSurroundingSquares(r2, c, board)) {
            revealEmptyAreaAroundClick(x2, y2, board);
          }
        }
      }
    }
    function isGameOver(board) {
      let won = true;
      for (let r2 = 0; r2 < board.length; r2++) {
        for (let c = 0; c < board[0].length; c++) {
          if (board[r2][c] === "X")
            return "lose";
          if (board[r2][c] === "_" || board[r2][c] === "_F")
            won = false;
        }
      }
      return won ? "win" : null;
    }
    function countFlagsRemaining(board, difficulty) {
      return DIFFICULTIES[difficulty].numberOfBombs - board.reduce((acc, row) => {
        return acc + row.reduce((count, val) => count + Number(val.length > 1), 0);
      }, 0);
    }
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
    function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min2, max2]) {
      return Math.min(max2, Math.max(min2, value));
    }
    function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
      return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented)
          return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
      };
    }
    function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
      const Context = /* @__PURE__ */ reactExports.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = reactExports.useMemo(
          () => context,
          Object.values(context)
        );
        return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
          value
        }, children);
      }
      function useContext(consumerName) {
        const context = reactExports.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      Provider.displayName = rootComponentName + "Provider";
      return [
        Provider,
        useContext
      ];
    }
    function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
        const BaseContext = /* @__PURE__ */ reactExports.createContext(defaultContext);
        const index2 = defaultContexts.length;
        defaultContexts = [
          ...defaultContexts,
          defaultContext
        ];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
          const value = reactExports.useMemo(
            () => context,
            Object.values(context)
          );
          return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
            value
          }, children);
        }
        function useContext(consumerName, scope) {
          const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
          const context = reactExports.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + "Provider";
        return [
          Provider,
          useContext
        ];
      }
      const createScope = () => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return /* @__PURE__ */ reactExports.createContext(defaultContext);
        });
        return function useScope(scope) {
          const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
          return reactExports.useMemo(
            () => ({
              [`__scope${scopeName}`]: {
                ...scope,
                [scopeName]: contexts
              }
            }),
            [
              scope,
              contexts
            ]
          );
        };
      };
      createScope.scopeName = scopeName;
      return [
        $c512c27ab02ef895$export$fd42f52fd3ae11092,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
      ];
    }
    function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope1 = () => {
        const scopeHooks = scopes.map(
          (createScope) => ({
            useScope: createScope(),
            scopeName: createScope.scopeName
          })
        );
        return function useComposedScopes(overrideScopes) {
          const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return {
              ...nextScopes,
              ...currentScope
            };
          }, {});
          return reactExports.useMemo(
            () => ({
              [`__scope${baseScope.scopeName}`]: nextScopes1
            }),
            [
              nextScopes1
            ]
          );
        };
      };
      createScope1.scopeName = baseScope.scopeName;
      return createScope1;
    }
    function $6ed0406888f73fc4$var$setRef(ref, value) {
      if (typeof ref === "function")
        ref(value);
      else if (ref !== null && ref !== void 0)
        ref.current = value;
    }
    function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
      return (node) => refs.forEach(
        (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
      );
    }
    function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
      return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
    }
    const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      const childrenArray = reactExports.Children.toArray(children);
      const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (reactExports.Children.count(newElement) > 1)
              return reactExports.Children.only(null);
            return /* @__PURE__ */ reactExports.isValidElement(newElement) ? newElement.props.children : null;
          } else
            return child;
        });
        return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
          ref: forwardedRef
        }), /* @__PURE__ */ reactExports.isValidElement(newElement) ? /* @__PURE__ */ reactExports.cloneElement(newElement, void 0, newChildren) : null);
      }
      return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
      }), children);
    });
    $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
    const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      if (/* @__PURE__ */ reactExports.isValidElement(children))
        return /* @__PURE__ */ reactExports.cloneElement(children, {
          ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
          ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
        });
      return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
    });
    $5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
    const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children);
    };
    function $5e63c961fc1ce211$var$isSlottable(child) {
      return /* @__PURE__ */ reactExports.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
    }
    function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
      const overrideProps = {
        ...childProps
      };
      for (const propName in childProps) {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
          if (slotPropValue && childPropValue)
            overrideProps[propName] = (...args) => {
              childPropValue(...args);
              slotPropValue(...args);
            };
          else if (slotPropValue)
            overrideProps[propName] = slotPropValue;
        } else if (propName === "style")
          overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
          };
        else if (propName === "className")
          overrideProps[propName] = [
            slotPropValue,
            childPropValue
          ].filter(Boolean).join(" ");
      }
      return {
        ...slotProps,
        ...overrideProps
      };
    }
    function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
      const PROVIDER_NAME = name + "CollectionProvider";
      const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
      const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
          current: null
        },
        itemMap: /* @__PURE__ */ new Map()
      });
      const CollectionProvider = (props) => {
        const { scope, children } = props;
        const ref = React.useRef(null);
        const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ React.createElement(CollectionProviderImpl, {
          scope,
          itemMap,
          collectionRef: ref
        }, children);
      };
      const COLLECTION_SLOT_NAME = name + "CollectionSlot";
      const CollectionSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
          ref: composedRefs
        }, children);
      });
      const ITEM_SLOT_NAME = name + "CollectionItemSlot";
      const ITEM_DATA_ATTR = "data-radix-collection-item";
      const CollectionItemSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
        const { scope, children, ...itemData } = props;
        const ref = React.useRef(null);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        React.useEffect(() => {
          context.itemMap.set(ref, {
            ref,
            ...itemData
          });
          return () => void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
          [ITEM_DATA_ATTR]: "",
          ref: composedRefs
        }, children);
      });
      function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = React.useCallback(() => {
          const collectionNode = context.collectionRef.current;
          if (!collectionNode)
            return [];
          const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
          const items = Array.from(context.itemMap.values());
          const orderedItems = items.sort(
            (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
          );
          return orderedItems;
        }, [
          context.collectionRef,
          context.itemMap
        ]);
        return getItems;
      }
      return [
        {
          Provider: CollectionProvider,
          Slot: CollectionSlot,
          ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
      ];
    }
    const $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const $f631663db3294ace$export$c760c09fdd558351 = (props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ reactExports.createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
      }, children);
    };
    function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
      const globalDir = reactExports.useContext($f631663db3294ace$var$DirectionContext);
      return localDir || globalDir || "ltr";
    }
    const $8927f6f2acc4f386$var$NODES = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul"
    ];
    const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
      const Node2 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
        reactExports.useEffect(() => {
          window[Symbol.for("radix-ui")] = true;
        }, []);
        return /* @__PURE__ */ reactExports.createElement(Comp, _extends({}, primitiveProps, {
          ref: forwardedRef
        }));
      });
      Node2.displayName = `Primitive.${node}`;
      return {
        ...primitive,
        [node]: Node2
      };
    }, {});
    function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
      if (target)
        reactDomExports.flushSync(
          () => target.dispatchEvent(event)
        );
    }
    function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
      const callbackRef = reactExports.useRef(callback);
      reactExports.useEffect(() => {
        callbackRef.current = callback;
      });
      return reactExports.useMemo(
        () => (...args) => {
          var _callbackRef$current;
          return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        },
        []
      );
    }
    function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
      const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
      reactExports.useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape")
            onEscapeKeyDown(event);
        };
        ownerDocument.addEventListener("keydown", handleKeyDown);
        return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
      }, [
        onEscapeKeyDown,
        ownerDocument
      ]);
    }
    const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
    const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
    const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
    let $5cb92bef7577960e$var$originalBodyPointerEvents;
    const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ reactExports.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      var _node$ownerDocument;
      const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
      const context = reactExports.useContext($5cb92bef7577960e$var$DismissableLayerContext);
      const [node1, setNode] = reactExports.useState(null);
      const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
      const [, force] = reactExports.useState({});
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setNode(node)
      );
      const layers = Array.from(context.layers);
      const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
      ].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      const index2 = node1 ? layers.indexOf(node1) : -1;
      const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
      const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
      const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
        const target = event.target;
        const isPointerDownOnBranch = [
          ...context.branches
        ].some(
          (branch) => branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch)
          return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss === null || onDismiss === void 0 || onDismiss();
      }, ownerDocument);
      const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
        const target = event.target;
        const isFocusInBranch = [
          ...context.branches
        ].some(
          (branch) => branch.contains(target)
        );
        if (isFocusInBranch)
          return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss === null || onDismiss === void 0 || onDismiss();
      }, ownerDocument);
      $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
        const isHighestLayer = index2 === context.layers.size - 1;
        if (!isHighestLayer)
          return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
          event.preventDefault();
          onDismiss();
        }
      }, ownerDocument);
      reactExports.useEffect(() => {
        if (!node1)
          return;
        if (disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
            ownerDocument.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
        return () => {
          if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
            ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
        };
      }, [
        node1,
        ownerDocument,
        disableOutsidePointerEvents,
        context
      ]);
      reactExports.useEffect(() => {
        return () => {
          if (!node1)
            return;
          context.layers.delete(node1);
          context.layersWithOutsidePointerEventsDisabled.delete(node1);
          $5cb92bef7577960e$var$dispatchUpdate();
        };
      }, [
        node1,
        context
      ]);
      reactExports.useEffect(() => {
        const handleUpdate = () => force({});
        document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
        return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
      }, []);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
      }));
    });
    function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
      const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
      const isPointerInsideReactTreeRef = reactExports.useRef(false);
      const handleClickRef = reactExports.useRef(() => {
      });
      reactExports.useEffect(() => {
        const handlePointerDown = (event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent2 = function() {
              $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                discrete: true
              });
            };
            var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
            const eventDetail = {
              originalEvent: event
            };
            if (event.pointerType === "touch") {
              ownerDocument.removeEventListener("click", handleClickRef.current);
              handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
              ownerDocument.addEventListener("click", handleClickRef.current, {
                once: true
              });
            } else
              handleAndDispatchPointerDownOutsideEvent2();
          } else
            ownerDocument.removeEventListener("click", handleClickRef.current);
          isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(() => {
          ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return () => {
          window.clearTimeout(timerId);
          ownerDocument.removeEventListener("pointerdown", handlePointerDown);
          ownerDocument.removeEventListener("click", handleClickRef.current);
        };
      }, [
        ownerDocument,
        handlePointerDownOutside
      ]);
      return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
      };
    }
    function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
      const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
      const isFocusInsideReactTreeRef = reactExports.useRef(false);
      reactExports.useEffect(() => {
        const handleFocus = (event) => {
          if (event.target && !isFocusInsideReactTreeRef.current) {
            const eventDetail = {
              originalEvent: event
            };
            $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
              discrete: false
            });
          }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return () => ownerDocument.removeEventListener("focusin", handleFocus);
      }, [
        ownerDocument,
        handleFocusOutside
      ]);
      return {
        onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
        onBlurCapture: () => isFocusInsideReactTreeRef.current = false
      };
    }
    function $5cb92bef7577960e$var$dispatchUpdate() {
      const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
      document.dispatchEvent(event);
    }
    function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
      const target = detail.originalEvent.target;
      const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
      });
      if (handler)
        target.addEventListener(name, handler, {
          once: true
        });
      if (discrete)
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
      else
        target.dispatchEvent(event);
    }
    let $3db38b7d1fb3fe6a$var$count = 0;
    function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
      reactExports.useEffect(() => {
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
        document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
        $3db38b7d1fb3fe6a$var$count++;
        return () => {
          if ($3db38b7d1fb3fe6a$var$count === 1)
            document.querySelectorAll("[data-radix-focus-guard]").forEach(
              (node) => node.remove()
            );
          $3db38b7d1fb3fe6a$var$count--;
        };
      }, []);
    }
    function $3db38b7d1fb3fe6a$var$createFocusGuard() {
      const element = document.createElement("span");
      element.setAttribute("data-radix-focus-guard", "");
      element.tabIndex = 0;
      element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
      return element;
    }
    const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
      bubbles: false,
      cancelable: true
    };
    const $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
      const [container1, setContainer] = reactExports.useState(null);
      const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
      const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
      const lastFocusedElementRef = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContainer(node)
      );
      const focusScope = reactExports.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      reactExports.useEffect(() => {
        if (trapped) {
          let handleFocusIn2 = function(event) {
            if (focusScope.paused || !container1)
              return;
            const target = event.target;
            if (container1.contains(target))
              lastFocusedElementRef.current = target;
            else
              $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                select: true
              });
          }, handleFocusOut2 = function(event) {
            if (focusScope.paused || !container1)
              return;
            const relatedTarget = event.relatedTarget;
            if (relatedTarget === null)
              return;
            if (!container1.contains(relatedTarget))
              $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                select: true
              });
          }, handleMutations2 = function(mutations) {
            const focusedElement = document.activeElement;
            if (focusedElement !== document.body)
              return;
            for (const mutation of mutations)
              if (mutation.removedNodes.length > 0)
                $d3863c46a17e8a28$var$focus(container1);
          };
          var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
          document.addEventListener("focusin", handleFocusIn2);
          document.addEventListener("focusout", handleFocusOut2);
          const mutationObserver = new MutationObserver(handleMutations2);
          if (container1)
            mutationObserver.observe(container1, {
              childList: true,
              subtree: true
            });
          return () => {
            document.removeEventListener("focusin", handleFocusIn2);
            document.removeEventListener("focusout", handleFocusOut2);
            mutationObserver.disconnect();
          };
        }
      }, [
        trapped,
        container1,
        focusScope.paused
      ]);
      reactExports.useEffect(() => {
        if (container1) {
          $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
          const previouslyFocusedElement = document.activeElement;
          const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
          if (!hasFocusedCandidate) {
            const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
            container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            container1.dispatchEvent(mountEvent);
            if (!mountEvent.defaultPrevented) {
              $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
                select: true
              });
              if (document.activeElement === previouslyFocusedElement)
                $d3863c46a17e8a28$var$focus(container1);
            }
          }
          return () => {
            container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            setTimeout(() => {
              const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
              container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
              container1.dispatchEvent(unmountEvent);
              if (!unmountEvent.defaultPrevented)
                $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                  select: true
                });
              container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
              $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
            }, 0);
          };
        }
      }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
      ]);
      const handleKeyDown = reactExports.useCallback((event) => {
        if (!loop && !trapped)
          return;
        if (focusScope.paused)
          return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container = event.currentTarget;
          const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container)
              event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop)
                $d3863c46a17e8a28$var$focus(first, {
                  select: true
                });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop)
                $d3863c46a17e8a28$var$focus(last, {
                  select: true
                });
            }
          }
        }
      }, [
        loop,
        trapped,
        focusScope.paused
      ]);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        tabIndex: -1
      }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
      }));
    });
    function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        $d3863c46a17e8a28$var$focus(candidate, {
          select
        });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    function $d3863c46a17e8a28$var$getTabbableEdges(container) {
      const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
      const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
      const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
      return [
        first,
        last
      ];
    }
    function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    function $d3863c46a17e8a28$var$findVisible(elements, container) {
      for (const element of elements) {
        if (!$d3863c46a17e8a28$var$isHidden(element, {
          upTo: container
        }))
          return element;
      }
    }
    function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    function $d3863c46a17e8a28$var$isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
      if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
          preventScroll: true
        });
        if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
          element.select();
      }
    }
    const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
    function $d3863c46a17e8a28$var$createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope)
            activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
          stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _stack$;
          stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
          (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
      };
    }
    function $d3863c46a17e8a28$var$arrayRemove(array, item) {
      const updatedArray = [
        ...array
      ];
      const index2 = updatedArray.indexOf(item);
      if (index2 !== -1)
        updatedArray.splice(index2, 1);
      return updatedArray;
    }
    function $d3863c46a17e8a28$var$removeLinks(items) {
      return items.filter(
        (item) => item.tagName !== "A"
      );
    }
    const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
    };
    const $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
    let $1746a345f3d73bb7$var$count = 0;
    function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
      const [id2, setId] = reactExports.useState($1746a345f3d73bb7$var$useReactId());
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (!deterministicId)
          setId(
            (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
          );
      }, [
        deterministicId
      ]);
      return deterministicId || (id2 ? `radix-${id2}` : "");
    }
    const sides = ["top", "right", "bottom", "left"];
    const min = Math.min;
    const max = Math.max;
    const round = Math.round;
    const floor = Math.floor;
    const createCoords = (v2) => ({
      x: v2,
      y: v2
    });
    const oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    const oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
    function clamp(start, value, end) {
      return max(start, min(value, end));
    }
    function evaluate(value, param) {
      return typeof value === "function" ? value(param) : value;
    }
    function getSide(placement) {
      return placement.split("-")[0];
    }
    function getAlignment(placement) {
      return placement.split("-")[1];
    }
    function getOppositeAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    function getAxisLength(axis) {
      return axis === "y" ? "height" : "width";
    }
    function getSideAxis(placement) {
      return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
    }
    function getAlignmentAxis(placement) {
      return getOppositeAxis(getSideAxis(placement));
    }
    function getAlignmentSides(placement, rects, rtl) {
      if (rtl === void 0) {
        rtl = false;
      }
      const alignment = getAlignment(placement);
      const alignmentAxis = getAlignmentAxis(placement);
      const length = getAxisLength(alignmentAxis);
      let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
      if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
      }
      return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
    }
    function getExpandedPlacements(placement) {
      const oppositePlacement = getOppositePlacement(placement);
      return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
    }
    function getOppositeAlignmentPlacement(placement) {
      return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
    }
    function getSideList(side, isStart, rtl) {
      const lr = ["left", "right"];
      const rl2 = ["right", "left"];
      const tb2 = ["top", "bottom"];
      const bt = ["bottom", "top"];
      switch (side) {
        case "top":
        case "bottom":
          if (rtl)
            return isStart ? rl2 : lr;
          return isStart ? lr : rl2;
        case "left":
        case "right":
          return isStart ? tb2 : bt;
        default:
          return [];
      }
    }
    function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
      const alignment = getAlignment(placement);
      let list = getSideList(getSide(placement), direction === "start", rtl);
      if (alignment) {
        list = list.map((side) => side + "-" + alignment);
        if (flipAlignment) {
          list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
      }
      return list;
    }
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
    }
    function expandPaddingObject(padding) {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
      };
    }
    function getPaddingObject(padding) {
      return typeof padding !== "number" ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      };
    }
    function rectToClientRect(rect) {
      return {
        ...rect,
        top: rect.y,
        left: rect.x,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      };
    }
    function computeCoordsFromPlacement(_ref, placement, rtl) {
      let {
        reference,
        floating
      } = _ref;
      const sideAxis = getSideAxis(placement);
      const alignmentAxis = getAlignmentAxis(placement);
      const alignLength = getAxisLength(alignmentAxis);
      const side = getSide(placement);
      const isVertical = sideAxis === "y";
      const commonX = reference.x + reference.width / 2 - floating.width / 2;
      const commonY = reference.y + reference.height / 2 - floating.height / 2;
      const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
      let coords;
      switch (side) {
        case "top":
          coords = {
            x: commonX,
            y: reference.y - floating.height
          };
          break;
        case "bottom":
          coords = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;
        case "right":
          coords = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;
        case "left":
          coords = {
            x: reference.x - floating.width,
            y: commonY
          };
          break;
        default:
          coords = {
            x: reference.x,
            y: reference.y
          };
      }
      switch (getAlignment(placement)) {
        case "start":
          coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
          break;
        case "end":
          coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
          break;
      }
      return coords;
    }
    const computePosition$1 = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x: x2,
        y: y2
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i = 0; i < validMiddleware.length; i++) {
        const {
          name,
          fn
        } = validMiddleware[i];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x: x2,
          y: y2,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platform2,
          elements: {
            reference,
            floating
          }
        });
        x2 = nextX != null ? nextX : x2;
        y2 = nextY != null ? nextY : y2;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x: x2,
              y: y2
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i = -1;
        }
      }
      return {
        x: x2,
        y: y2,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    async function detectOverflow(state, options2) {
      var _await$platform$isEle;
      if (options2 === void 0) {
        options2 = {};
      }
      const {
        x: x2,
        y: y2,
        platform: platform2,
        rects,
        elements,
        strategy
      } = state;
      const {
        boundary = "clippingAncestors",
        rootBoundary = "viewport",
        elementContext = "floating",
        altBoundary = false,
        padding = 0
      } = evaluate(options2, state);
      const paddingObject = getPaddingObject(padding);
      const altContext = elementContext === "floating" ? "reference" : "floating";
      const element = elements[altBoundary ? altContext : elementContext];
      const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
        element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
      }));
      const rect = elementContext === "floating" ? {
        ...rects.floating,
        x: x2,
        y: y2
      } : rects.reference;
      const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
      const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
        x: 1,
        y: 1
      } : {
        x: 1,
        y: 1
      };
      const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
      }) : rect);
      return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
      };
    }
    const arrow$2 = (options2) => ({
      name: "arrow",
      options: options2,
      async fn(state) {
        const {
          x: x2,
          y: y2,
          placement,
          rects,
          platform: platform2,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options2, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x: x2,
          y: y2
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset2 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset2,
            centerOffset: center - offset2 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    const flip$1 = function(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      return {
        name: "flip",
        options: options2,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options2, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements[nextIndex];
            if (nextPlacement) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    function getSideOffsets(overflow, rect) {
      return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
      };
    }
    function isAnySideFullyClipped(overflow) {
      return sides.some((side) => overflow[side] >= 0);
    }
    const hide$1 = function(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      return {
        name: "hide",
        options: options2,
        async fn(state) {
          const {
            rects
          } = state;
          const {
            strategy = "referenceHidden",
            ...detectOverflowOptions
          } = evaluate(options2, state);
          switch (strategy) {
            case "referenceHidden": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                elementContext: "reference"
              });
              const offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
            case "escaped": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                altBoundary: true
              });
              const offsets = getSideOffsets(overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: offsets,
                  escaped: isAnySideFullyClipped(offsets)
                }
              };
            }
            default: {
              return {};
            }
          }
        }
      };
    };
    async function convertValueToCoords(state, options2) {
      const {
        placement,
        platform: platform2,
        elements
      } = state;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isVertical = getSideAxis(placement) === "y";
      const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
      const crossAxisMulti = rtl && isVertical ? -1 : 1;
      const rawValue = evaluate(options2, state);
      let {
        mainAxis,
        crossAxis,
        alignmentAxis
      } = typeof rawValue === "number" ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
      } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...rawValue
      };
      if (alignment && typeof alignmentAxis === "number") {
        crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
      }
      return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
      } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
      };
    }
    const offset = function(options2) {
      if (options2 === void 0) {
        options2 = 0;
      }
      return {
        name: "offset",
        options: options2,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x: x2,
            y: y2,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options2);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x2 + diffCoords.x,
            y: y2 + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    const shift$1 = function(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      return {
        name: "shift",
        options: options2,
        async fn(state) {
          const {
            x: x2,
            y: y2,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x3,
                  y: y3
                } = _ref;
                return {
                  x: x3,
                  y: y3
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options2, state);
          const coords = {
            x: x2,
            y: y2
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x2,
              y: limitedCoords.y - y2
            }
          };
        }
      };
    };
    const limitShift$1 = function(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      return {
        options: options2,
        fn(state) {
          const {
            x: x2,
            y: y2,
            placement,
            rects,
            middlewareData
          } = state;
          const {
            offset: offset2 = 0,
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true
          } = evaluate(options2, state);
          const coords = {
            x: x2,
            y: y2
          };
          const crossAxis = getSideAxis(placement);
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          const rawOffset = evaluate(offset2, state);
          const computedOffset = typeof rawOffset === "number" ? {
            mainAxis: rawOffset,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...rawOffset
          };
          if (checkMainAxis) {
            const len = mainAxis === "y" ? "height" : "width";
            const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
            const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
            if (mainAxisCoord < limitMin) {
              mainAxisCoord = limitMin;
            } else if (mainAxisCoord > limitMax) {
              mainAxisCoord = limitMax;
            }
          }
          if (checkCrossAxis) {
            var _middlewareData$offse, _middlewareData$offse2;
            const len = mainAxis === "y" ? "width" : "height";
            const isOriginSide = ["top", "left"].includes(getSide(placement));
            const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
            const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
            if (crossAxisCoord < limitMin) {
              crossAxisCoord = limitMin;
            } else if (crossAxisCoord > limitMax) {
              crossAxisCoord = limitMax;
            }
          }
          return {
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          };
        }
      };
    };
    const size$1 = function(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      return {
        name: "size",
        options: options2,
        async fn(state) {
          const {
            placement,
            rects,
            platform: platform2,
            elements
          } = state;
          const {
            apply = () => {
            },
            ...detectOverflowOptions
          } = evaluate(options2, state);
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === "y";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const overflowAvailableHeight = height - overflow[heightSide];
          const overflowAvailableWidth = width - overflow[widthSide];
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if (isYAxis) {
            const maximumClippingWidth = width - overflow.left - overflow.right;
            availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
          } else {
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform2.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };
    function getNodeName(node) {
      if (isNode(node)) {
        return (node.nodeName || "").toLowerCase();
      }
      return "#document";
    }
    function getWindow(node) {
      var _node$ownerDocument;
      return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
    }
    function getDocumentElement(node) {
      var _ref;
      return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
    }
    function isNode(value) {
      return value instanceof Node || value instanceof getWindow(value).Node;
    }
    function isElement(value) {
      return value instanceof Element || value instanceof getWindow(value).Element;
    }
    function isHTMLElement(value) {
      return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
    }
    function isShadowRoot(value) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
    }
    function isOverflowElement(element) {
      const {
        overflow,
        overflowX,
        overflowY,
        display
      } = getComputedStyle$1(element);
      return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
    }
    function isTableElement(element) {
      return ["table", "td", "th"].includes(getNodeName(element));
    }
    function isContainingBlock(element) {
      const webkit = isWebKit();
      const css = getComputedStyle$1(element);
      return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
    }
    function getContainingBlock(element) {
      let currentNode = getParentNode(element);
      while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
        if (isContainingBlock(currentNode)) {
          return currentNode;
        } else {
          currentNode = getParentNode(currentNode);
        }
      }
      return null;
    }
    function isWebKit() {
      if (typeof CSS === "undefined" || !CSS.supports)
        return false;
      return CSS.supports("-webkit-backdrop-filter", "none");
    }
    function isLastTraversableNode(node) {
      return ["html", "body", "#document"].includes(getNodeName(node));
    }
    function getComputedStyle$1(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function getNodeScroll(element) {
      if (isElement(element)) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      return {
        scrollLeft: element.pageXOffset,
        scrollTop: element.pageYOffset
      };
    }
    function getParentNode(node) {
      if (getNodeName(node) === "html") {
        return node;
      }
      const result = (
        // Step into the shadow DOM of the parent of a slotted node.
        node.assignedSlot || // DOM Element detected.
        node.parentNode || // ShadowRoot detected.
        isShadowRoot(node) && node.host || // Fallback.
        getDocumentElement(node)
      );
      return isShadowRoot(result) ? result.host : result;
    }
    function getNearestOverflowAncestor(node) {
      const parentNode = getParentNode(node);
      if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
      }
      if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
      }
      return getNearestOverflowAncestor(parentNode);
    }
    function getOverflowAncestors(node, list, traverseIframes) {
      var _node$ownerDocument2;
      if (list === void 0) {
        list = [];
      }
      if (traverseIframes === void 0) {
        traverseIframes = true;
      }
      const scrollableAncestor = getNearestOverflowAncestor(node);
      const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
      const win = getWindow(scrollableAncestor);
      if (isBody) {
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
      }
      return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
    function getCssDimensions(element) {
      const css = getComputedStyle$1(element);
      let width = parseFloat(css.width) || 0;
      let height = parseFloat(css.height) || 0;
      const hasOffset = isHTMLElement(element);
      const offsetWidth = hasOffset ? element.offsetWidth : width;
      const offsetHeight = hasOffset ? element.offsetHeight : height;
      const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
      if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
      }
      return {
        width,
        height,
        $: shouldFallback
      };
    }
    function unwrapElement(element) {
      return !isElement(element) ? element.contextElement : element;
    }
    function getScale(element) {
      const domElement = unwrapElement(element);
      if (!isHTMLElement(domElement)) {
        return createCoords(1);
      }
      const rect = domElement.getBoundingClientRect();
      const {
        width,
        height,
        $
      } = getCssDimensions(domElement);
      let x2 = ($ ? round(rect.width) : rect.width) / width;
      let y2 = ($ ? round(rect.height) : rect.height) / height;
      if (!x2 || !Number.isFinite(x2)) {
        x2 = 1;
      }
      if (!y2 || !Number.isFinite(y2)) {
        y2 = 1;
      }
      return {
        x: x2,
        y: y2
      };
    }
    const noOffsets = /* @__PURE__ */ createCoords(0);
    function getVisualOffsets(element) {
      const win = getWindow(element);
      if (!isWebKit() || !win.visualViewport) {
        return noOffsets;
      }
      return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
      };
    }
    function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
        return false;
      }
      return isFixed;
    }
    function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
      if (includeScale === void 0) {
        includeScale = false;
      }
      if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
      }
      const clientRect = element.getBoundingClientRect();
      const domElement = unwrapElement(element);
      let scale = createCoords(1);
      if (includeScale) {
        if (offsetParent) {
          if (isElement(offsetParent)) {
            scale = getScale(offsetParent);
          }
        } else {
          scale = getScale(element);
        }
      }
      const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
      let x2 = (clientRect.left + visualOffsets.x) / scale.x;
      let y2 = (clientRect.top + visualOffsets.y) / scale.y;
      let width = clientRect.width / scale.x;
      let height = clientRect.height / scale.y;
      if (domElement) {
        const win = getWindow(domElement);
        const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = currentWin.frameElement;
        while (currentIFrame && offsetParent && offsetWin !== currentWin) {
          const iframeScale = getScale(currentIFrame);
          const iframeRect = currentIFrame.getBoundingClientRect();
          const css = getComputedStyle$1(currentIFrame);
          const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
          const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
          x2 *= iframeScale.x;
          y2 *= iframeScale.y;
          width *= iframeScale.x;
          height *= iframeScale.y;
          x2 += left;
          y2 += top;
          currentWin = getWindow(currentIFrame);
          currentIFrame = currentWin.frameElement;
        }
      }
      return rectToClientRect({
        width,
        height,
        x: x2,
        y: y2
      });
    }
    const topLayerSelectors = [":popover-open", ":modal"];
    function isTopLayer(floating) {
      return topLayerSelectors.some((selector) => {
        try {
          return floating.matches(selector);
        } catch (e) {
          return false;
        }
      });
    }
    function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
      let {
        elements,
        rect,
        offsetParent,
        strategy
      } = _ref;
      const isFixed = strategy === "fixed";
      const documentElement = getDocumentElement(offsetParent);
      const topLayer = elements ? isTopLayer(elements.floating) : false;
      if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
      }
      let scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      let scale = createCoords(1);
      const offsets = createCoords(0);
      const isOffsetParentAnElement = isHTMLElement(offsetParent);
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          const offsetRect = getBoundingClientRect(offsetParent);
          scale = getScale(offsetParent);
          offsets.x = offsetRect.x + offsetParent.clientLeft;
          offsets.y = offsetRect.y + offsetParent.clientTop;
        }
      }
      return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
      };
    }
    function getClientRects(element) {
      return Array.from(element.getClientRects());
    }
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
    }
    function getDocumentRect(element) {
      const html = getDocumentElement(element);
      const scroll = getNodeScroll(element);
      const body = element.ownerDocument.body;
      const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
      const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
      let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
      const y2 = -scroll.scrollTop;
      if (getComputedStyle$1(body).direction === "rtl") {
        x2 += max(html.clientWidth, body.clientWidth) - width;
      }
      return {
        width,
        height,
        x: x2,
        y: y2
      };
    }
    function getViewportRect(element, strategy) {
      const win = getWindow(element);
      const html = getDocumentElement(element);
      const visualViewport = win.visualViewport;
      let width = html.clientWidth;
      let height = html.clientHeight;
      let x2 = 0;
      let y2 = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = isWebKit();
        if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
          x2 = visualViewport.offsetLeft;
          y2 = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x2,
        y: y2
      };
    }
    function getInnerBoundingClientRect(element, strategy) {
      const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
      const top = clientRect.top + element.clientTop;
      const left = clientRect.left + element.clientLeft;
      const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
      const width = element.clientWidth * scale.x;
      const height = element.clientHeight * scale.y;
      const x2 = left * scale.x;
      const y2 = top * scale.y;
      return {
        width,
        height,
        x: x2,
        y: y2
      };
    }
    function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
      let rect;
      if (clippingAncestor === "viewport") {
        rect = getViewportRect(element, strategy);
      } else if (clippingAncestor === "document") {
        rect = getDocumentRect(getDocumentElement(element));
      } else if (isElement(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
      } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
          ...clippingAncestor,
          x: clippingAncestor.x - visualOffsets.x,
          y: clippingAncestor.y - visualOffsets.y
        };
      }
      return rectToClientRect(rect);
    }
    function hasFixedPositionAncestor(element, stopNode) {
      const parentNode = getParentNode(element);
      if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
        return false;
      }
      return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
    }
    function getClippingElementAncestors(element, cache) {
      const cachedResult = cache.get(element);
      if (cachedResult) {
        return cachedResult;
      }
      let result = getOverflowAncestors(element, [], false).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
      let currentContainingBlockComputedStyle = null;
      const elementIsFixed = getComputedStyle$1(element).position === "fixed";
      let currentNode = elementIsFixed ? getParentNode(element) : element;
      while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
        const computedStyle = getComputedStyle$1(currentNode);
        const currentNodeIsContaining = isContainingBlock(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === "fixed") {
          currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
          result = result.filter((ancestor) => ancestor !== currentNode);
        } else {
          currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = getParentNode(currentNode);
      }
      cache.set(element, result);
      return result;
    }
    function getClippingRect(_ref) {
      let {
        element,
        boundary,
        rootBoundary,
        strategy
      } = _ref;
      const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
      const clippingAncestors = [...elementClippingAncestors, rootBoundary];
      const firstClippingAncestor = clippingAncestors[0];
      const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
      return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
      };
    }
    function getDimensions(element) {
      const {
        width,
        height
      } = getCssDimensions(element);
      return {
        width,
        height
      };
    }
    function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
      const isOffsetParentAnElement = isHTMLElement(offsetParent);
      const documentElement = getDocumentElement(offsetParent);
      const isFixed = strategy === "fixed";
      const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
      let scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      const offsets = createCoords(0);
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isOffsetParentAnElement) {
          const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
          offsets.x = offsetRect.x + offsetParent.clientLeft;
          offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      const x2 = rect.left + scroll.scrollLeft - offsets.x;
      const y2 = rect.top + scroll.scrollTop - offsets.y;
      return {
        x: x2,
        y: y2,
        width: rect.width,
        height: rect.height
      };
    }
    function getTrueOffsetParent(element, polyfill) {
      if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
        return null;
      }
      if (polyfill) {
        return polyfill(element);
      }
      return element.offsetParent;
    }
    function getOffsetParent(element, polyfill) {
      const window2 = getWindow(element);
      if (!isHTMLElement(element) || isTopLayer(element)) {
        return window2;
      }
      let offsetParent = getTrueOffsetParent(element, polyfill);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }
    const getElementRects = async function(data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          ...await getDimensionsFn(data.floating)
        }
      };
    };
    function isRTL(element) {
      return getComputedStyle$1(element).direction === "rtl";
    }
    const platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };
    function observeMove(element, onMove) {
      let io = null;
      let timeoutId;
      const root = getDocumentElement(element);
      function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
      }
      function refresh(skip, threshold) {
        if (skip === void 0) {
          skip = false;
        }
        if (threshold === void 0) {
          threshold = 1;
        }
        cleanup();
        const {
          left,
          top,
          width,
          height
        } = element.getBoundingClientRect();
        if (!skip) {
          onMove();
        }
        if (!width || !height) {
          return;
        }
        const insetTop = floor(top);
        const insetRight = floor(root.clientWidth - (left + width));
        const insetBottom = floor(root.clientHeight - (top + height));
        const insetLeft = floor(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options2 = {
          rootMargin,
          threshold: max(0, min(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
          const ratio = entries[0].intersectionRatio;
          if (ratio !== threshold) {
            if (!isFirstUpdate) {
              return refresh();
            }
            if (!ratio) {
              timeoutId = setTimeout(() => {
                refresh(false, 1e-7);
              }, 100);
            } else {
              refresh(false, ratio);
            }
          }
          isFirstUpdate = false;
        }
        try {
          io = new IntersectionObserver(handleObserve, {
            ...options2,
            // Handle <iframe>s
            root: root.ownerDocument
          });
        } catch (e) {
          io = new IntersectionObserver(handleObserve, options2);
        }
        io.observe(element);
      }
      refresh(true);
      return cleanup;
    }
    function autoUpdate(reference, floating, update, options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      const {
        ancestorScroll = true,
        ancestorResize = true,
        elementResize = typeof ResizeObserver === "function",
        layoutShift = typeof IntersectionObserver === "function",
        animationFrame = false
      } = options2;
      const referenceEl = unwrapElement(reference);
      const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.addEventListener("scroll", update, {
          passive: true
        });
        ancestorResize && ancestor.addEventListener("resize", update);
      });
      const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
      let reobserveFrame = -1;
      let resizeObserver = null;
      if (elementResize) {
        resizeObserver = new ResizeObserver((_ref) => {
          let [firstEntry] = _ref;
          if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
            resizeObserver.unobserve(floating);
            cancelAnimationFrame(reobserveFrame);
            reobserveFrame = requestAnimationFrame(() => {
              var _resizeObserver;
              (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
            });
          }
          update();
        });
        if (referenceEl && !animationFrame) {
          resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
      }
      let frameId;
      let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
      if (animationFrame) {
        frameLoop();
      }
      function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
          update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
      }
      update();
      return () => {
        var _resizeObserver2;
        ancestors.forEach((ancestor) => {
          ancestorScroll && ancestor.removeEventListener("scroll", update);
          ancestorResize && ancestor.removeEventListener("resize", update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
          cancelAnimationFrame(frameId);
        }
      };
    }
    const shift = shift$1;
    const flip = flip$1;
    const size = size$1;
    const hide = hide$1;
    const arrow$1 = arrow$2;
    const limitShift = limitShift$1;
    const computePosition = (reference, floating, options2) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options2
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition$1(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };
    const arrow = (options2) => {
      function isRef(value) {
        return {}.hasOwnProperty.call(value, "current");
      }
      return {
        name: "arrow",
        options: options2,
        fn(state) {
          const {
            element,
            padding
          } = typeof options2 === "function" ? options2(state) : options2;
          if (element && isRef(element)) {
            if (element.current != null) {
              return arrow$1({
                element: element.current,
                padding
              }).fn(state);
            }
            return {};
          }
          if (element) {
            return arrow$1({
              element,
              padding
            }).fn(state);
          }
          return {};
        }
      };
    };
    var index = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
    function deepEqual(a, b) {
      if (a === b) {
        return true;
      }
      if (typeof a !== typeof b) {
        return false;
      }
      if (typeof a === "function" && a.toString() === b.toString()) {
        return true;
      }
      let length;
      let i;
      let keys;
      if (a && b && typeof a === "object") {
        if (Array.isArray(a)) {
          length = a.length;
          if (length !== b.length)
            return false;
          for (i = length; i-- !== 0; ) {
            if (!deepEqual(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
          return false;
        }
        for (i = length; i-- !== 0; ) {
          if (!{}.hasOwnProperty.call(b, keys[i])) {
            return false;
          }
        }
        for (i = length; i-- !== 0; ) {
          const key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!deepEqual(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      return a !== a && b !== b;
    }
    function getDPR(element) {
      if (typeof window === "undefined") {
        return 1;
      }
      const win = element.ownerDocument.defaultView || window;
      return win.devicePixelRatio || 1;
    }
    function roundByDPR(element, value) {
      const dpr = getDPR(element);
      return Math.round(value * dpr) / dpr;
    }
    function useLatestRef(value) {
      const ref = reactExports.useRef(value);
      index(() => {
        ref.current = value;
      });
      return ref;
    }
    function useFloating(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2,
        elements: {
          reference: externalReference,
          floating: externalFloating
        } = {},
        transform = true,
        whileElementsMounted,
        open
      } = options2;
      const [data, setData] = reactExports.useState({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
      });
      const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
      if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
      }
      const [_reference, _setReference] = reactExports.useState(null);
      const [_floating, _setFloating] = reactExports.useState(null);
      const setReference = reactExports.useCallback((node) => {
        if (node !== referenceRef.current) {
          referenceRef.current = node;
          _setReference(node);
        }
      }, []);
      const setFloating = reactExports.useCallback((node) => {
        if (node !== floatingRef.current) {
          floatingRef.current = node;
          _setFloating(node);
        }
      }, []);
      const referenceEl = externalReference || _reference;
      const floatingEl = externalFloating || _floating;
      const referenceRef = reactExports.useRef(null);
      const floatingRef = reactExports.useRef(null);
      const dataRef = reactExports.useRef(data);
      const hasWhileElementsMounted = whileElementsMounted != null;
      const whileElementsMountedRef = useLatestRef(whileElementsMounted);
      const platformRef = useLatestRef(platform2);
      const update = reactExports.useCallback(() => {
        if (!referenceRef.current || !floatingRef.current) {
          return;
        }
        const config = {
          placement,
          strategy,
          middleware: latestMiddleware
        };
        if (platformRef.current) {
          config.platform = platformRef.current;
        }
        computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
          const fullData = {
            ...data2,
            isPositioned: true
          };
          if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
            dataRef.current = fullData;
            reactDomExports.flushSync(() => {
              setData(fullData);
            });
          }
        });
      }, [latestMiddleware, placement, strategy, platformRef]);
      index(() => {
        if (open === false && dataRef.current.isPositioned) {
          dataRef.current.isPositioned = false;
          setData((data2) => ({
            ...data2,
            isPositioned: false
          }));
        }
      }, [open]);
      const isMountedRef = reactExports.useRef(false);
      index(() => {
        isMountedRef.current = true;
        return () => {
          isMountedRef.current = false;
        };
      }, []);
      index(() => {
        if (referenceEl)
          referenceRef.current = referenceEl;
        if (floatingEl)
          floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
          if (whileElementsMountedRef.current) {
            return whileElementsMountedRef.current(referenceEl, floatingEl, update);
          }
          update();
        }
      }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
      const refs = reactExports.useMemo(() => ({
        reference: referenceRef,
        floating: floatingRef,
        setReference,
        setFloating
      }), [setReference, setFloating]);
      const elements = reactExports.useMemo(() => ({
        reference: referenceEl,
        floating: floatingEl
      }), [referenceEl, floatingEl]);
      const floatingStyles = reactExports.useMemo(() => {
        const initialStyles = {
          position: strategy,
          left: 0,
          top: 0
        };
        if (!elements.floating) {
          return initialStyles;
        }
        const x2 = roundByDPR(elements.floating, data.x);
        const y2 = roundByDPR(elements.floating, data.y);
        if (transform) {
          return {
            ...initialStyles,
            transform: "translate(" + x2 + "px, " + y2 + "px)",
            ...getDPR(elements.floating) >= 1.5 && {
              willChange: "transform"
            }
          };
        }
        return {
          position: strategy,
          left: x2,
          top: y2
        };
      }, [strategy, transform, elements.floating, data.x, data.y]);
      return reactExports.useMemo(() => ({
        ...data,
        update,
        refs,
        elements,
        floatingStyles
      }), [data, update, refs, elements, floatingStyles]);
    }
    const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { children, width = 10, height = 5, ...arrowProps } = props;
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
      }), props.asChild ? children : /* @__PURE__ */ reactExports.createElement("polygon", {
        points: "0,0 30,0 15,10"
      }));
    });
    const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;
    function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
      const [size2, setSize] = reactExports.useState(void 0);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (element) {
          setSize({
            width: element.offsetWidth,
            height: element.offsetHeight
          });
          const resizeObserver = new ResizeObserver((entries) => {
            if (!Array.isArray(entries))
              return;
            if (!entries.length)
              return;
            const entry = entries[0];
            let width;
            let height;
            if ("borderBoxSize" in entry) {
              const borderSizeEntry = entry["borderBoxSize"];
              const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
              width = borderSize["inlineSize"];
              height = borderSize["blockSize"];
            } else {
              width = element.offsetWidth;
              height = element.offsetHeight;
            }
            setSize({
              width,
              height
            });
          });
          resizeObserver.observe(element, {
            box: "border-box"
          });
          return () => resizeObserver.unobserve(element);
        } else
          setSize(void 0);
      }, [
        element
      ]);
      return size2;
    }
    const $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
    const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
    const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
    const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
      const { __scopePopper, children } = props;
      const [anchor, setAnchor] = reactExports.useState(null);
      return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor
      }, children);
    };
    const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
    const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopePopper, virtualRef, ...anchorProps } = props;
      const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
      const ref = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
      reactExports.useEffect(() => {
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
      });
      return virtualRef ? null : /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
        ref: composedRefs
      }));
    });
    const $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
    const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
    const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
      const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
      const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
      const [content, setContent] = reactExports.useState(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContent(node)
      );
      const [arrow$12, setArrow] = reactExports.useState(null);
      const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$12);
      const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
      const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
      const desiredPlacement = side + (align !== "center" ? "-" + align : "");
      const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
      };
      const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
      ];
      const hasExplicitBoundaries = boundary.length > 0;
      const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
      };
      const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: (...args) => {
          const cleanup = autoUpdate(...args, {
            animationFrame: updatePositionStrategy === "always"
          });
          return cleanup;
        },
        elements: {
          reference: context.anchor
        },
        middleware: [
          offset({
            mainAxis: sideOffset + arrowHeight,
            alignmentAxis: alignOffset
          }),
          avoidCollisions && shift({
            mainAxis: true,
            crossAxis: false,
            limiter: sticky === "partial" ? limitShift() : void 0,
            ...detectOverflowOptions
          }),
          avoidCollisions && flip({
            ...detectOverflowOptions
          }),
          size({
            ...detectOverflowOptions,
            apply: ({ elements, rects, availableWidth, availableHeight }) => {
              const { width: anchorWidth, height: anchorHeight } = rects.reference;
              const contentStyle = elements.floating.style;
              contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
              contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
              contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
              contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
            }
          }),
          arrow$12 && arrow({
            element: arrow$12,
            padding: arrowPadding
          }),
          $cf1ac5d9fe0e8206$var$transformOrigin({
            arrowWidth,
            arrowHeight
          }),
          hideWhenDetached && hide({
            strategy: "referenceHidden",
            ...detectOverflowOptions
          })
        ]
      });
      const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
      const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (isPositioned)
          handlePlaced === null || handlePlaced === void 0 || handlePlaced();
      }, [
        isPositioned,
        handlePlaced
      ]);
      const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
      const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
      const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
      const [contentZIndex, setContentZIndex] = reactExports.useState();
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (content)
          setContentZIndex(window.getComputedStyle(content).zIndex);
      }, [
        content
      ]);
      return /* @__PURE__ */ reactExports.createElement("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
            (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
          ].join(" ")
        },
        dir: props.dir
      }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide,
        onArrowChange: setArrow,
        arrowX,
        arrowY,
        shouldHideArrow: cannotCenterArrow
      }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-side": placedSide,
        "data-align": placedAlign
      }, contentProps, {
        ref: composedRefs,
        style: {
          ...contentProps.style,
          // if the PopperContent hasn't been placed yet (not all measurements done)
          // we prevent animations so that users's animation don't kick in too early referring wrong sides
          animation: !isPositioned ? "none" : void 0,
          // hide the content if using the hide middleware and should be hidden
          opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
        }
      }))));
    });
    const $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
    const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /* @__PURE__ */ reactExports.forwardRef(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
      const { __scopePopper, ...arrowProps } = props;
      const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
      const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
      return (
        // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
        // doesn't report size as we'd expect on SVG elements.
        // it reports their bounding box which is effectively the largest path inside the SVG.
        /* @__PURE__ */ reactExports.createElement("span", {
          ref: contentContext.onArrowChange,
          style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[contentContext.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: `rotate(180deg)`,
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
          }
        }, /* @__PURE__ */ reactExports.createElement($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
          ref: forwardedRef,
          style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: "block"
          }
        })))
      );
    });
    /* @__PURE__ */ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
      displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
    });
    function $cf1ac5d9fe0e8206$var$isNotNull(value) {
      return value !== null;
    }
    const $cf1ac5d9fe0e8206$var$transformOrigin = (options2) => ({
      name: "transformOrigin",
      options: options2,
      fn(data) {
        var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
        const { placement, rects, middlewareData } = data;
        const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
        const isArrowHidden = cannotCenterArrow;
        const arrowWidth = isArrowHidden ? 0 : options2.arrowWidth;
        const arrowHeight = isArrowHidden ? 0 : options2.arrowHeight;
        const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
        const noArrowAlign = {
          start: "0%",
          center: "50%",
          end: "100%"
        }[placedAlign];
        const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
        const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
        let x2 = "";
        let y2 = "";
        if (placedSide === "bottom") {
          x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y2 = `${-arrowHeight}px`;
        } else if (placedSide === "top") {
          x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y2 = `${rects.floating.height + arrowHeight}px`;
        } else if (placedSide === "right") {
          x2 = `${-arrowHeight}px`;
          y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        } else if (placedSide === "left") {
          x2 = `${rects.floating.width + arrowHeight}px`;
          y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        }
        return {
          data: {
            x: x2,
            y: y2
          }
        };
      }
    });
    function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
      const [side, align = "center"] = placement.split("-");
      return [
        side,
        align
      ];
    }
    const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
    const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
    const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
    const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      var _globalThis$document;
      const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
      return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
        ref: forwardedRef
      })), container) : null;
    });
    function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
    } }) {
      const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp,
        onChange
      });
      const isControlled = prop !== void 0;
      const value1 = isControlled ? prop : uncontrolledProp;
      const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
      const setValue = reactExports.useCallback((nextValue) => {
        if (isControlled) {
          const setter = nextValue;
          const value = typeof nextValue === "function" ? setter(prop) : nextValue;
          if (value !== prop)
            handleChange(value);
        } else
          setUncontrolledProp(nextValue);
      }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
      ]);
      return [
        value1,
        setValue
      ];
    }
    function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
      const uncontrolledState = reactExports.useState(defaultProp);
      const [value] = uncontrolledState;
      const prevValueRef = reactExports.useRef(value);
      const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
      reactExports.useEffect(() => {
        if (prevValueRef.current !== value) {
          handleChange(value);
          prevValueRef.current = value;
        }
      }, [
        value,
        prevValueRef,
        handleChange
      ]);
      return uncontrolledState;
    }
    function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
      const ref = reactExports.useRef({
        value,
        previous: value
      });
      return reactExports.useMemo(() => {
        if (ref.current.value !== value) {
          ref.current.previous = ref.current.value;
          ref.current.value = value;
        }
        return ref.current.previous;
      }, [
        value
      ]);
    }
    const $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }));
    });
    var getDefaultParent = function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    };
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    };
    var correctTargets = function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x2) {
        return Boolean(x2);
      });
    };
    var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = function(el2) {
        if (!el2 || elementsToKeep.has(el2)) {
          return;
        }
        elementsToKeep.add(el2);
        keep(el2.parentNode);
      };
      targets.forEach(keep);
      var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      };
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    };
    var hideOthers = function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    };
    var __assign = function() {
      __assign = Object.assign || function __assign2(t2) {
        for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
          s = arguments[i];
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2))
              t2[p2] = s[p2];
        }
        return t2;
      };
      return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t2 = {};
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
          t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
          if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
            t2[p2[i]] = s[p2[i]];
        }
      return t2;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l2 = from.length, ar; i < l2; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    var zeroRightClassName = "right-scroll-bar-position";
    var fullWidthClassName = "width-before-scroll-bar";
    var noScrollbarsClassName = "with-scroll-bars-hidden";
    var removedBarSizeVariable = "--removed-body-scroll-bar-size";
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    function useCallbackRef(initialValue, callback) {
      var ref = reactExports.useState(function() {
        return {
          // value
          value: initialValue,
          // last callback
          callback,
          // "memoized" public interface
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    var currentValues = /* @__PURE__ */ new WeakMap();
    function useMergeRefs(refs, defaultValue) {
      var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
          return assignRef(ref, newValue);
        });
      });
      reactExports.useLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
          var prevRefs_1 = new Set(oldValue);
          var nextRefs_1 = new Set(refs);
          var current_1 = callbackRef.current;
          prevRefs_1.forEach(function(ref) {
            if (!nextRefs_1.has(ref)) {
              assignRef(ref, null);
            }
          });
          nextRefs_1.forEach(function(ref) {
            if (!prevRefs_1.has(ref)) {
              assignRef(ref, current_1);
            }
          });
        }
        currentValues.set(callbackRef, refs);
      }, [refs]);
      return callbackRef;
    }
    function ItoI(a) {
      return a;
    }
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x2) {
              return x2 !== item;
            });
          };
        },
        assignSyncMedium: function(cb2) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb2);
          }
          buffer = {
            push: function(x2) {
              return cb2(x2);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb2) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb2);
            pendingQueue = buffer;
          }
          var executeQueue = function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb2);
          };
          var cycle = function() {
            return Promise.resolve().then(executeQueue);
          };
          cycle();
          buffer = {
            push: function(x2) {
              pendingQueue.push(x2);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    function createSidecarMedium(options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = __assign({ async: true, ssr: false }, options2);
      return medium;
    }
    var SideCar$1 = function(_a) {
      var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return reactExports.createElement(Target, __assign({}, rest));
    };
    SideCar$1.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar$1;
    }
    var effectCar = createSidecarMedium();
    var nothing = function() {
      return;
    };
    var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
      var ref = reactExports.useRef(null);
      var _a = reactExports.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar2 = sideCar;
      var containerRef = useMergeRefs([ref, parentRef]);
      var containerProps = __assign(__assign({}, rest), callbacks);
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    RemoveScroll.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll.classNames = {
      fullWidth: fullWidthClassName,
      zeroRight: zeroRightClassName
    };
    var getNonce = function() {
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = getNonce();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    var stylesheetSingleton = function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    };
    var styleHookSingleton = function() {
      var sheet = stylesheetSingleton();
      return function(styles, isDynamic) {
        reactExports.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    };
    var styleSingleton = function() {
      var useStyle = styleHookSingleton();
      var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
      };
      return Sheet;
    };
    var zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = function(x2) {
      return parseInt(x2 || "", 10) || 0;
    };
    var getOffset = function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    };
    var getGapWidth = function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    };
    var Style = styleSingleton();
    var lockAttribute = "data-scroll-locked";
    var getStyles = function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    };
    var RemoveScrollBar = function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = reactExports.useMemo(function() {
        return getGapWidth(gapMode);
      }, [gapMode]);
      reactExports.useEffect(function() {
        document.body.setAttribute(lockAttribute, "");
        return function() {
          document.body.removeAttribute(lockAttribute);
        };
      }, []);
      return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    };
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        var options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var nonPassive = passiveSupported ? { passive: false } : false;
    var alwaysContainsScroll = function(node) {
      return node.tagName === "TEXTAREA";
    };
    var elementCanBeScrolled = function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return (
        // not-not-scrollable
        styles[overflow] !== "hidden" && // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
      );
    };
    var elementCouldBeVScrolled = function(node) {
      return elementCanBeScrolled(node, "overflowY");
    };
    var elementCouldBeHScrolled = function(node) {
      return elementCanBeScrolled(node, "overflowX");
    };
    var locationCouldBeScrolled = function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    };
    var getVScrollVariables = function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    };
    var getHScrollVariables = function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    };
    var elementCouldBeScrolled = function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    };
    var getScrollVariables = function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    };
    var getDirectionFactor = function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    };
    var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (
        // portaled content
        !targetInLock && target !== document.body || // self content
        targetInLock && (endTarget.contains(target) || endTarget === target)
      );
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    };
    var getTouchXY = function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    };
    var getDeltaXY = function(event) {
      return [event.deltaX, event.deltaY];
    };
    var extractRef = function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    };
    var deltaCompare = function(x2, y2) {
      return x2[0] === y2[0] && x2[1] === y2[1];
    };
    var generateStyle = function(id2) {
      return "\n  .block-interactivity-".concat(id2, " {pointer-events: none;}\n  .allow-interactivity-").concat(id2, " {pointer-events: all;}\n");
    };
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = reactExports.useRef([]);
      var touchStartRef = reactExports.useRef([0, 0]);
      var activeAxis = reactExports.useRef();
      var id2 = reactExports.useState(idCounter++)[0];
      var Style2 = reactExports.useState(function() {
        return styleSingleton();
      })[0];
      var lastProps = reactExports.useRef(props);
      reactExports.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      reactExports.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id2));
          var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el2) {
            return el2.classList.add("allow-interactivity-".concat(id2));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id2));
            allow_1.forEach(function(el2) {
              return el2.classList.remove("allow-interactivity-".concat(id2));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = reactExports.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
          return;
        }
        var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = reactExports.useCallback(function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = reactExports.useCallback(function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = reactExports.useCallback(function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      reactExports.useEffect(function() {
        lockStack.push(Style2);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, nonPassive);
        document.addEventListener("touchmove", shouldPrevent, nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style2;
          });
          document.removeEventListener("wheel", shouldPrevent, nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        inert ? reactExports.createElement(Style2, { styles: generateStyle(id2) }) : null,
        removeScrollBar ? reactExports.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
    var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
      return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
    });
    ReactRemoveScroll.classNames = RemoveScroll.classNames;
    const $epM9y$RemoveScroll = ReactRemoveScroll;
    const $cc7e05a45900e73f$var$OPEN_KEYS = [
      " ",
      "Enter",
      "ArrowUp",
      "ArrowDown"
    ];
    const $cc7e05a45900e73f$var$SELECTION_KEYS = [
      " ",
      "Enter"
    ];
    const $cc7e05a45900e73f$var$SELECT_NAME = "Select";
    const [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
    const [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
      $cc7e05a45900e73f$var$createCollectionScope,
      $cf1ac5d9fe0e8206$export$722aac194ae923
    ]);
    const $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
    const [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
    const [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
    const $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
      const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required } = props;
      const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
      const [trigger, setTrigger] = reactExports.useState(null);
      const [valueNode, setValueNode] = reactExports.useState(null);
      const [valueNodeHasChildren, setValueNodeHasChildren] = reactExports.useState(false);
      const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
      const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      });
      const triggerPointerDownPosRef = reactExports.useRef(null);
      const isFormControl = trigger ? Boolean(trigger.closest("form")) : true;
      const [nativeOptionsSet, setNativeOptionsSet] = reactExports.useState(/* @__PURE__ */ new Set());
      const nativeSelectKey = Array.from(nativeOptionsSet).map(
        (option) => option.props.value
      ).join(";");
      return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectProvider, {
        required,
        scope: __scopeSelect,
        trigger,
        onTriggerChange: setTrigger,
        valueNode,
        onValueNodeChange: setValueNode,
        valueNodeHasChildren,
        onValueNodeHasChildrenChange: setValueNodeHasChildren,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        value,
        onValueChange: setValue,
        open,
        onOpenChange: setOpen,
        dir: direction,
        triggerPointerDownPosRef,
        disabled
      }, /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$Collection.Provider, {
        scope: __scopeSelect
      }, /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: reactExports.useCallback((option) => {
          setNativeOptionsSet(
            (prev) => new Set(prev).add(option)
          );
        }, []),
        onNativeOptionRemove: reactExports.useCallback((option) => {
          setNativeOptionsSet((prev) => {
            const optionsSet = new Set(prev);
            optionsSet.delete(option);
            return optionsSet;
          });
        }, [])
      }, children)), isFormControl ? /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$BubbleSelect, {
        key: nativeSelectKey,
        "aria-hidden": true,
        required,
        tabIndex: -1,
        name,
        autoComplete,
        value,
        onChange: (event) => setValue(event.target.value),
        disabled
      }, value === void 0 ? /* @__PURE__ */ reactExports.createElement("option", {
        value: ""
      }) : null, Array.from(nativeOptionsSet)) : null));
    };
    const $cc7e05a45900e73f$var$TRIGGER_NAME = "SelectTrigger";
    const $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, disabled = false, ...triggerProps } = props;
      const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
      const isDisabled = context.disabled || disabled;
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
      const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
      const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
        const enabledItems = getItems().filter(
          (item) => !item.disabled
        );
        const currentItem = enabledItems.find(
          (item) => item.value === context.value
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem !== void 0)
          context.onValueChange(nextItem.value);
      });
      const handleOpen = () => {
        if (!isDisabled) {
          context.onOpenChange(true);
          resetTypeahead();
        }
      };
      return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
        asChild: true
      }, popperScope), /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? "" : void 0
      }, triggerProps, {
        ref: composedRefs,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
        }),
        onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId))
            target.releasePointerCapture(event.pointerId);
          if (event.button === 0 && event.ctrlKey === false) {
            handleOpen();
            context.triggerPointerDownPosRef.current = {
              x: Math.round(event.pageX),
              y: Math.round(event.pageY)
            };
            event.preventDefault();
          }
        }),
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1)
            handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ")
            return;
          if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      })));
    });
    const $cc7e05a45900e73f$var$VALUE_NAME = "SelectValue";
    const $cc7e05a45900e73f$export$e288731fd71264f0 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
      const { onValueNodeHasChildrenChange } = context;
      const hasChildren = children !== void 0;
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onValueNodeChange);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        onValueNodeHasChildrenChange(hasChildren);
      }, [
        onValueNodeHasChildrenChange,
        hasChildren
      ]);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, valueProps, {
        ref: composedRefs,
        style: {
          pointerEvents: "none"
        }
      }), $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, placeholder) : children);
    });
    const $cc7e05a45900e73f$export$99b400cabb58c515 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, children, ...iconProps } = props;
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
        "aria-hidden": true
      }, iconProps, {
        ref: forwardedRef
      }), children || "▼");
    });
    const $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
      return /* @__PURE__ */ reactExports.createElement($f1701beae083dbae$export$602eac185826482c, _extends({
        asChild: true
      }, props));
    };
    const $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
    const $cc7e05a45900e73f$export$c973a4b3cb86a03d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
      const [fragment, setFragment] = reactExports.useState();
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        setFragment(new DocumentFragment());
      }, []);
      if (!context.open) {
        const frag = fragment;
        return frag ? /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectContentProvider, {
          scope: props.__scopeSelect
        }, /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$Collection.Slot, {
          scope: props.__scopeSelect
        }, /* @__PURE__ */ reactExports.createElement("div", null, props.children))), frag) : null;
      }
      return /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
        ref: forwardedRef
      }));
    });
    const $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
    const [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
    const $cc7e05a45900e73f$var$SelectContentImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const {
        __scopeSelect,
        position = "item-aligned",
        onCloseAutoFocus,
        onEscapeKeyDown,
        onPointerDownOutside,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions,
        //
        ...contentProps
      } = props;
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
      const [content, setContent] = reactExports.useState(null);
      const [viewport, setViewport] = reactExports.useState(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContent(node)
      );
      const [selectedItem, setSelectedItem] = reactExports.useState(null);
      const [selectedItemText, setSelectedItemText] = reactExports.useState(null);
      const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
      const [isPositioned, setIsPositioned] = reactExports.useState(false);
      const firstValidItemFoundRef = reactExports.useRef(false);
      reactExports.useEffect(() => {
        if (content)
          return hideOthers(content);
      }, [
        content
      ]);
      $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
      const focusFirst = reactExports.useCallback((candidates) => {
        const [firstItem, ...restItems] = getItems().map(
          (item) => item.ref.current
        );
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
            return;
          candidate === null || candidate === void 0 || candidate.scrollIntoView({
            block: "nearest"
          });
          if (candidate === firstItem && viewport)
            viewport.scrollTop = 0;
          if (candidate === lastItem && viewport)
            viewport.scrollTop = viewport.scrollHeight;
          candidate === null || candidate === void 0 || candidate.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
            return;
        }
      }, [
        getItems,
        viewport
      ]);
      const focusSelectedItem = reactExports.useCallback(
        () => focusFirst([
          selectedItem,
          content
        ]),
        [
          focusFirst,
          selectedItem,
          content
        ]
      );
      reactExports.useEffect(() => {
        if (isPositioned)
          focusSelectedItem();
      }, [
        isPositioned,
        focusSelectedItem
      ]);
      const { onOpenChange, triggerPointerDownPosRef } = context;
      reactExports.useEffect(() => {
        if (content) {
          let pointerMoveDelta = {
            x: 0,
            y: 0
          };
          const handlePointerMove = (event) => {
            var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
            pointerMoveDelta = {
              x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
              y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
            };
          };
          const handlePointerUp = (event) => {
            if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
              event.preventDefault();
            else if (!content.contains(event.target))
              onOpenChange(false);
            document.removeEventListener("pointermove", handlePointerMove);
            triggerPointerDownPosRef.current = null;
          };
          if (triggerPointerDownPosRef.current !== null) {
            document.addEventListener("pointermove", handlePointerMove);
            document.addEventListener("pointerup", handlePointerUp, {
              capture: true,
              once: true
            });
          }
          return () => {
            document.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("pointerup", handlePointerUp, {
              capture: true
            });
          };
        }
      }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
      ]);
      reactExports.useEffect(() => {
        const close = () => onOpenChange(false);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        return () => {
          window.removeEventListener("blur", close);
          window.removeEventListener("resize", close);
        };
      }, [
        onOpenChange
      ]);
      const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
        const enabledItems = getItems().filter(
          (item) => !item.disabled
        );
        const currentItem = enabledItems.find(
          (item) => item.ref.current === document.activeElement
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem)
          setTimeout(
            () => nextItem.ref.current.focus()
          );
      });
      const itemRefCallback = reactExports.useCallback((node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem)
            firstValidItemFoundRef.current = true;
        }
      }, [
        context.value
      ]);
      const handleItemLeave = reactExports.useCallback(
        () => content === null || content === void 0 ? void 0 : content.focus(),
        [
          content
        ]
      );
      const itemTextRefCallback = reactExports.useCallback((node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem)
          setSelectedItemText(node);
      }, [
        context.value
      ]);
      const SelectPosition = position === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
      const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions
      } : {};
      return /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectContentProvider, {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef
      }, /* @__PURE__ */ reactExports.createElement($epM9y$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true
      }, /* @__PURE__ */ reactExports.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        trapped: context.open,
        onMountAutoFocus: (event) => {
          event.preventDefault();
        },
        onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
          var _context$trigger;
          (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
            preventScroll: true
          });
          event.preventDefault();
        })
      }, /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: () => context.onOpenChange(false)
      }, /* @__PURE__ */ reactExports.createElement(SelectPosition, _extends({
        role: "listbox",
        id: context.contentId,
        "data-state": context.open ? "open" : "closed",
        dir: context.dir,
        onContextMenu: (event) => event.preventDefault()
      }, contentProps, popperContentProps, {
        onPlaced: () => setIsPositioned(true),
        ref: composedRefs,
        style: {
          // flex layout so we can place the scroll buttons properly
          display: "flex",
          flexDirection: "column",
          // reset the outline by default as the content MAY get focused
          outline: "none",
          ...contentProps.style
        },
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (event.key === "Tab")
            event.preventDefault();
          if (!isModifierKey && event.key.length === 1)
            handleTypeaheadSearch(event.key);
          if ([
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End"
          ].includes(event.key)) {
            const items = getItems().filter(
              (item) => !item.disabled
            );
            let candidateNodes = items.map(
              (item) => item.ref.current
            );
            if ([
              "ArrowUp",
              "End"
            ].includes(event.key))
              candidateNodes = candidateNodes.slice().reverse();
            if ([
              "ArrowUp",
              "ArrowDown"
            ].includes(event.key)) {
              const currentElement = event.target;
              const currentIndex = candidateNodes.indexOf(currentElement);
              candidateNodes = candidateNodes.slice(currentIndex + 1);
            }
            setTimeout(
              () => focusFirst(candidateNodes)
            );
            event.preventDefault();
          }
        })
      }))))));
    });
    const $cc7e05a45900e73f$var$SelectItemAlignedPosition = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, onPlaced, ...popperProps } = props;
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
      const [contentWrapper, setContentWrapper] = reactExports.useState(null);
      const [content, setContent] = reactExports.useState(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContent(node)
      );
      const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
      const shouldExpandOnScrollRef = reactExports.useRef(false);
      const shouldRepositionRef = reactExports.useRef(true);
      const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
      const position = reactExports.useCallback(() => {
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
          const triggerRect = context.trigger.getBoundingClientRect();
          const contentRect = content.getBoundingClientRect();
          const valueNodeRect = context.valueNode.getBoundingClientRect();
          const itemTextRect = selectedItemText.getBoundingClientRect();
          if (context.dir !== "rtl") {
            const itemTextOffset = itemTextRect.left - contentRect.left;
            const left = valueNodeRect.left - itemTextOffset;
            const leftDelta = triggerRect.left - left;
            const minContentWidth = triggerRect.width + leftDelta;
            const contentWidth = Math.max(minContentWidth, contentRect.width);
            const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
            const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
              $cc7e05a45900e73f$var$CONTENT_MARGIN,
              rightEdge - contentWidth
            ]);
            contentWrapper.style.minWidth = minContentWidth + "px";
            contentWrapper.style.left = clampedLeft + "px";
          } else {
            const itemTextOffset = contentRect.right - itemTextRect.right;
            const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
            const rightDelta = window.innerWidth - triggerRect.right - right;
            const minContentWidth = triggerRect.width + rightDelta;
            const contentWidth = Math.max(minContentWidth, contentRect.width);
            const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
            const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
              $cc7e05a45900e73f$var$CONTENT_MARGIN,
              leftEdge - contentWidth
            ]);
            contentWrapper.style.minWidth = minContentWidth + "px";
            contentWrapper.style.right = clampedRight + "px";
          }
          const items = getItems();
          const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
          const itemsHeight = viewport.scrollHeight;
          const contentStyles = window.getComputedStyle(content);
          const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
          const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
          const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
          const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
          const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
          const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
          const viewportStyles = window.getComputedStyle(viewport);
          const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
          const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
          const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
          const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
          const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
          const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
          const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
          const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
          const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
          if (willAlignWithoutTopOverflow) {
            const isLastItem = selectedItem === items[items.length - 1].ref.current;
            contentWrapper.style.bottom = "0px";
            const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
            const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
            const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
            contentWrapper.style.height = height + "px";
          } else {
            const isFirstItem = selectedItem === items[0].ref.current;
            contentWrapper.style.top = "0px";
            const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
            const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
            contentWrapper.style.height = height + "px";
            viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
          }
          contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
          contentWrapper.style.minHeight = minContentHeight + "px";
          contentWrapper.style.maxHeight = availableHeight + "px";
          onPlaced === null || onPlaced === void 0 || onPlaced();
          requestAnimationFrame(
            () => shouldExpandOnScrollRef.current = true
          );
        }
      }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
      ]);
      $9f79659886946c16$export$e5c5a5f917a5871c(
        () => position(),
        [
          position
        ]
      );
      const [contentZIndex, setContentZIndex] = reactExports.useState();
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (content)
          setContentZIndex(window.getComputedStyle(content).zIndex);
      }, [
        content
      ]);
      const handleScrollButtonChange = reactExports.useCallback((node) => {
        if (node && shouldRepositionRef.current === true) {
          position();
          focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
          shouldRepositionRef.current = false;
        }
      }, [
        position,
        focusSelectedItem
      ]);
      return /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper,
        shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange
      }, /* @__PURE__ */ reactExports.createElement("div", {
        ref: setContentWrapper,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: contentZIndex
        }
      }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
        ref: composedRefs,
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%",
          ...popperProps.style
        }
      }))));
    });
    const $cc7e05a45900e73f$var$SelectPopperPosition = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
      const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
      return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
        ref: forwardedRef,
        align,
        collisionPadding,
        style: {
          // Ensure border-box for floating-ui calculations
          boxSizing: "border-box",
          ...popperProps.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }));
    });
    const [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
    const $cc7e05a45900e73f$var$VIEWPORT_NAME = "SelectViewport";
    const $cc7e05a45900e73f$export$9ed6e7b40248d36d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, ...viewportProps } = props;
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
      const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
      const prevScrollTopRef = reactExports.useRef(0);
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
        }
      }), /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$Collection.Slot, {
        scope: __scopeSelect
      }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-radix-select-viewport": "",
        role: "presentation"
      }, viewportProps, {
        ref: composedRefs,
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto",
          ...viewportProps.style
        },
        onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event) => {
          const viewport = event.currentTarget;
          const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
          if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
            if (scrolledBy > 0) {
              const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
              const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
              const cssHeight = parseFloat(contentWrapper.style.height);
              const prevHeight = Math.max(cssMinHeight, cssHeight);
              if (prevHeight < availableHeight) {
                const nextHeight = prevHeight + scrolledBy;
                const clampedNextHeight = Math.min(availableHeight, nextHeight);
                const heightDiff = nextHeight - clampedNextHeight;
                contentWrapper.style.height = clampedNextHeight + "px";
                if (contentWrapper.style.bottom === "0px") {
                  viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                  contentWrapper.style.justifyContent = "flex-end";
                }
              }
            }
          }
          prevScrollTopRef.current = viewport.scrollTop;
        })
      }))));
    });
    const $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
    const [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
    const $cc7e05a45900e73f$var$LABEL_NAME = "SelectLabel";
    const $cc7e05a45900e73f$export$f67338d29bd972f8 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, ...labelProps } = props;
      const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        id: groupContext.id
      }, labelProps, {
        ref: forwardedRef
      }));
    });
    const $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
    const [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
    const $cc7e05a45900e73f$export$13ef48a934230896 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
      const isSelected = context.value === value;
      const [textValue, setTextValue] = reactExports.useState(textValueProp !== null && textValueProp !== void 0 ? textValueProp : "");
      const [isFocused, setIsFocused] = reactExports.useState(false);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => {
        var _contentContext$itemR;
        return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
      });
      const textId = $1746a345f3d73bb7$export$f680877a34711e37();
      const handleSelect = () => {
        if (!disabled) {
          context.onValueChange(value);
          context.onOpenChange(false);
        }
      };
      if (value === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
      return /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectItemContextProvider, {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: reactExports.useCallback((node) => {
          setTextValue((prevTextValue) => {
            var _node$textContent;
            return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").trim();
          });
        }, [])
      }, /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$Collection.ItemSlot, {
        scope: __scopeSelect,
        value,
        disabled,
        textValue
      }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? "" : void 0,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? "checked" : "unchecked",
        "aria-disabled": disabled || void 0,
        "data-disabled": disabled ? "" : void 0,
        tabIndex: disabled ? void 0 : -1
      }, itemProps, {
        ref: composedRefs,
        onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
          itemProps.onFocus,
          () => setIsFocused(true)
        ),
        onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
          itemProps.onBlur,
          () => setIsFocused(false)
        ),
        onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event) => {
          if (disabled) {
            var _contentContext$onIte;
            (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
          } else
            event.currentTarget.focus({
              preventScroll: true
            });
        }),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event) => {
          if (event.currentTarget === document.activeElement) {
            var _contentContext$onIte2;
            (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
          }
        }),
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event) => {
          var _contentContext$searc;
          const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== "";
          if (isTypingAhead && event.key === " ")
            return;
          if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key))
            handleSelect();
          if (event.key === " ")
            event.preventDefault();
        })
      }))));
    });
    const $cc7e05a45900e73f$var$ITEM_TEXT_NAME = "SelectItemText";
    const $cc7e05a45900e73f$export$3572fb0fb821ff49 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, className, style, ...itemTextProps } = props;
      const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
      const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
      const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
      const [itemTextNode, setItemTextNode] = reactExports.useState(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setItemTextNode(node),
        itemContext.onItemTextChange,
        (node) => {
          var _contentContext$itemT;
          return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
        }
      );
      const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
      const nativeOption = reactExports.useMemo(
        () => /* @__PURE__ */ reactExports.createElement("option", {
          key: itemContext.value,
          value: itemContext.value,
          disabled: itemContext.disabled
        }, textContent),
        [
          itemContext.disabled,
          itemContext.value,
          textContent
        ]
      );
      const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        onNativeOptionAdd(nativeOption);
        return () => onNativeOptionRemove(nativeOption);
      }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
      ]);
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
        id: itemContext.textId
      }, itemTextProps, {
        ref: composedRefs
      })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /* @__PURE__ */ reactDomExports.createPortal(itemTextProps.children, context.valueNode) : null);
    });
    const $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = "SelectItemIndicator";
    const $cc7e05a45900e73f$export$6b9198de19accfe6 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, ...itemIndicatorProps } = props;
      const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
      return itemContext.isSelected ? /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
        "aria-hidden": true
      }, itemIndicatorProps, {
        ref: forwardedRef
      })) : null;
    });
    const $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
    const $cc7e05a45900e73f$export$d8117927658af6d7 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
      const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
      const [canScrollUp1, setCanScrollUp] = reactExports.useState(false);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (contentContext.viewport && contentContext.isPositioned) {
          let handleScroll3 = function() {
            const canScrollUp = viewport.scrollTop > 0;
            setCanScrollUp(canScrollUp);
          };
          var handleScroll2 = handleScroll3;
          const viewport = contentContext.viewport;
          handleScroll3();
          viewport.addEventListener("scroll", handleScroll3);
          return () => viewport.removeEventListener("scroll", handleScroll3);
        }
      }, [
        contentContext.viewport,
        contentContext.isPositioned
      ]);
      return canScrollUp1 ? /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
        ref: composedRefs,
        onAutoScroll: () => {
          const { viewport, selectedItem } = contentContext;
          if (viewport && selectedItem)
            viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      })) : null;
    });
    const $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
    const $cc7e05a45900e73f$export$ff951e476c12189 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
      const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
      const [canScrollDown1, setCanScrollDown] = reactExports.useState(false);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (contentContext.viewport && contentContext.isPositioned) {
          let handleScroll3 = function() {
            const maxScroll = viewport.scrollHeight - viewport.clientHeight;
            const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
            setCanScrollDown(canScrollDown);
          };
          var handleScroll2 = handleScroll3;
          const viewport = contentContext.viewport;
          handleScroll3();
          viewport.addEventListener("scroll", handleScroll3);
          return () => viewport.removeEventListener("scroll", handleScroll3);
        }
      }, [
        contentContext.viewport,
        contentContext.isPositioned
      ]);
      return canScrollDown1 ? /* @__PURE__ */ reactExports.createElement($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
        ref: composedRefs,
        onAutoScroll: () => {
          const { viewport, selectedItem } = contentContext;
          if (viewport && selectedItem)
            viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      })) : null;
    });
    const $cc7e05a45900e73f$var$SelectScrollButtonImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
      const contentContext = $cc7e05a45900e73f$var$useSelectContentContext("SelectScrollButton", __scopeSelect);
      const autoScrollTimerRef = reactExports.useRef(null);
      const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
      const clearAutoScrollTimer = reactExports.useCallback(() => {
        if (autoScrollTimerRef.current !== null) {
          window.clearInterval(autoScrollTimerRef.current);
          autoScrollTimerRef.current = null;
        }
      }, []);
      reactExports.useEffect(() => {
        return () => clearAutoScrollTimer();
      }, [
        clearAutoScrollTimer
      ]);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        var _activeItem$ref$curre;
        const activeItem = getItems().find(
          (item) => item.ref.current === document.activeElement
        );
        activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
          block: "nearest"
        });
      }, [
        getItems
      ]);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "aria-hidden": true
      }, scrollIndicatorProps, {
        ref: forwardedRef,
        style: {
          flexShrink: 0,
          ...scrollIndicatorProps.style
        },
        onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerDown, () => {
          if (autoScrollTimerRef.current === null)
            autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerMove, () => {
          var _contentContext$onIte3;
          (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
          if (autoScrollTimerRef.current === null)
            autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerLeave, () => {
          clearAutoScrollTimer();
        })
      }));
    });
    const $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeSelect, ...separatorProps } = props;
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "aria-hidden": true
      }, separatorProps, {
        ref: forwardedRef
      }));
    });
    function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
      return value === "" || value === void 0;
    }
    const $cc7e05a45900e73f$var$BubbleSelect = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { value, ...selectProps } = props;
      const ref = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
      const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
      reactExports.useEffect(() => {
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
          const event = new Event("change", {
            bubbles: true
          });
          setValue.call(select, value);
          select.dispatchEvent(event);
        }
      }, [
        prevValue,
        value
      ]);
      return /* @__PURE__ */ reactExports.createElement($ea1ef594cf570d83$export$439d29a4e110a164, {
        asChild: true
      }, /* @__PURE__ */ reactExports.createElement("select", _extends({}, selectProps, {
        ref: composedRefs,
        defaultValue: value
      })));
    });
    $cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
    function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
      const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
      const searchRef = reactExports.useRef("");
      const timerRef = reactExports.useRef(0);
      const handleTypeaheadSearch = reactExports.useCallback((key) => {
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
          searchRef.current = value;
          window.clearTimeout(timerRef.current);
          if (value !== "")
            timerRef.current = window.setTimeout(
              () => updateSearch(""),
              1e3
            );
        })(search);
      }, [
        handleSearchChange
      ]);
      const resetTypeahead = reactExports.useCallback(() => {
        searchRef.current = "";
        window.clearTimeout(timerRef.current);
      }, []);
      reactExports.useEffect(() => {
        return () => window.clearTimeout(timerRef.current);
      }, []);
      return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
      ];
    }
    function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
      const isRepeated = search.length > 1 && Array.from(search).every(
        (char) => char === search[0]
      );
      const normalizedSearch = isRepeated ? search[0] : search;
      const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
      let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
      const excludeCurrentItem = normalizedSearch.length === 1;
      if (excludeCurrentItem)
        wrappedItems = wrappedItems.filter(
          (v2) => v2 !== currentItem
        );
      const nextItem = wrappedItems.find(
        (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
      );
      return nextItem !== currentItem ? nextItem : void 0;
    }
    function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
      return array.map(
        (_, index2) => array[(startIndex + index2) % array.length]
      );
    }
    const $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
    const $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
    const $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
    const $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
    const $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
    const $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
    const $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
    const $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
    const $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
    const $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
    const $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
    const $cc7e05a45900e73f$export$2f60d3ec9ad468f2 = $cc7e05a45900e73f$export$d8117927658af6d7;
    const $cc7e05a45900e73f$export$bf1aedc3039c8d63 = $cc7e05a45900e73f$export$ff951e476c12189;
    const $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const createLucideIcon = (iconName, iconNode) => {
      const Component = reactExports.forwardRef(
        ({
          color = "currentColor",
          size: size2 = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          ...rest
        }, ref) => {
          return reactExports.createElement(
            "svg",
            {
              ref,
              ...defaultAttributes,
              width: size2,
              height: size2,
              stroke: color,
              strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
              className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
              ...rest
            },
            [
              ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
              ...Array.isArray(children) ? children : [children]
            ]
          );
        }
      );
      Component.displayName = `${iconName}`;
      return Component;
    };
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const ChevronDown = createLucideIcon("ChevronDown", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
    ]);
    /**
     * @license lucide-react v0.359.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
    function r$1(e) {
      var t2, f2, n2 = "";
      if ("string" == typeof e || "number" == typeof e)
        n2 += e;
      else if ("object" == typeof e)
        if (Array.isArray(e)) {
          var o = e.length;
          for (t2 = 0; t2 < o; t2++)
            e[t2] && (f2 = r$1(e[t2])) && (n2 && (n2 += " "), n2 += f2);
        } else
          for (f2 in e)
            e[f2] && (n2 && (n2 += " "), n2 += f2);
      return n2;
    }
    function clsx$1() {
      for (var e, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
        (e = arguments[f2]) && (t2 = r$1(e)) && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    const CLASS_PART_SEPARATOR = "-";
    function createClassUtils(config) {
      const classMap = createClassMap(config);
      const {
        conflictingClassGroups,
        conflictingClassGroupModifiers
      } = config;
      function getClassGroupId(className) {
        const classParts = className.split(CLASS_PART_SEPARATOR);
        if (classParts[0] === "" && classParts.length !== 1) {
          classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
      }
      function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
          return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
        }
        return conflicts;
      }
      return {
        getClassGroupId,
        getConflictingClassGroupIds
      };
    }
    function getGroupRecursive(classParts, classPartObject) {
      var _a;
      if (classParts.length === 0) {
        return classPartObject.classGroupId;
      }
      const currentClassPart = classParts[0];
      const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
      const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
      if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
      }
      if (classPartObject.validators.length === 0) {
        return void 0;
      }
      const classRest = classParts.join(CLASS_PART_SEPARATOR);
      return (_a = classPartObject.validators.find(({
        validator
      }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
    }
    const arbitraryPropertyRegex = /^\[(.+)\]$/;
    function getGroupIdForArbitraryProperty(className) {
      if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) {
          return "arbitrary.." + property;
        }
      }
    }
    function createClassMap(config) {
      const {
        theme,
        prefix
      } = config;
      const classMap = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      };
      const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
      prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
      });
      return classMap;
    }
    function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
      classGroup.forEach((classDefinition) => {
        if (typeof classDefinition === "string") {
          const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
          classPartObjectToEdit.classGroupId = classGroupId;
          return;
        }
        if (typeof classDefinition === "function") {
          if (isThemeGetter(classDefinition)) {
            processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
            return;
          }
          classPartObject.validators.push({
            validator: classDefinition,
            classGroupId
          });
          return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup2]) => {
          processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
        });
      });
    }
    function getPart(classPartObject, path) {
      let currentClassPartObject = classPartObject;
      path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
          currentClassPartObject.nextPart.set(pathPart, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
          });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
      });
      return currentClassPartObject;
    }
    function isThemeGetter(func) {
      return func.isThemeGetter;
    }
    function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
      if (!prefix) {
        return classGroupEntries;
      }
      return classGroupEntries.map(([classGroupId, classGroup]) => {
        const prefixedClassGroup = classGroup.map((classDefinition) => {
          if (typeof classDefinition === "string") {
            return prefix + classDefinition;
          }
          if (typeof classDefinition === "object") {
            return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
          }
          return classDefinition;
        });
        return [classGroupId, prefixedClassGroup];
      });
    }
    function createLruCache(maxCacheSize) {
      if (maxCacheSize < 1) {
        return {
          get: () => void 0,
          set: () => {
          }
        };
      }
      let cacheSize = 0;
      let cache = /* @__PURE__ */ new Map();
      let previousCache = /* @__PURE__ */ new Map();
      function update(key, value) {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
          cacheSize = 0;
          previousCache = cache;
          cache = /* @__PURE__ */ new Map();
        }
      }
      return {
        get(key) {
          let value = cache.get(key);
          if (value !== void 0) {
            return value;
          }
          if ((value = previousCache.get(key)) !== void 0) {
            update(key, value);
            return value;
          }
        },
        set(key, value) {
          if (cache.has(key)) {
            cache.set(key, value);
          } else {
            update(key, value);
          }
        }
      };
    }
    const IMPORTANT_MODIFIER = "!";
    function createSplitModifiers(config) {
      const separator = config.separator;
      const isSeparatorSingleCharacter = separator.length === 1;
      const firstSeparatorCharacter = separator[0];
      const separatorLength = separator.length;
      return function splitModifiers(className) {
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for (let index2 = 0; index2 < className.length; index2++) {
          let currentCharacter = className[index2];
          if (bracketDepth === 0) {
            if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index2, index2 + separatorLength) === separator)) {
              modifiers.push(className.slice(modifierStart, index2));
              modifierStart = index2 + separatorLength;
              continue;
            }
            if (currentCharacter === "/") {
              postfixModifierPosition = index2;
              continue;
            }
          }
          if (currentCharacter === "[") {
            bracketDepth++;
          } else if (currentCharacter === "]") {
            bracketDepth--;
          }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        };
      };
    }
    function sortModifiers(modifiers) {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isArbitraryVariant = modifier[0] === "[";
        if (isArbitraryVariant) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    }
    function createConfigUtils(config) {
      return {
        cache: createLruCache(config.cacheSize),
        splitModifiers: createSplitModifiers(config),
        ...createClassUtils(config)
      };
    }
    const SPLIT_CLASSES_REGEX = /\s+/;
    function mergeClassList(classList, configUtils) {
      const {
        splitModifiers,
        getClassGroupId,
        getConflictingClassGroupIds
      } = configUtils;
      const classGroupsInConflict = /* @__PURE__ */ new Set();
      return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
        const {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        } = splitModifiers(originalClassName);
        let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        if (!classGroupId) {
          if (!maybePostfixModifierPosition) {
            return {
              isTailwindClass: false,
              originalClassName
            };
          }
          classGroupId = getClassGroupId(baseClassName);
          if (!classGroupId) {
            return {
              isTailwindClass: false,
              originalClassName
            };
          }
          hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(":");
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        return {
          isTailwindClass: true,
          modifierId,
          classGroupId,
          originalClassName,
          hasPostfixModifier
        };
      }).reverse().filter((parsed) => {
        if (!parsed.isTailwindClass) {
          return true;
        }
        const {
          modifierId,
          classGroupId,
          hasPostfixModifier
        } = parsed;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.has(classId)) {
          return false;
        }
        classGroupsInConflict.add(classId);
        getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
        return true;
      }).reverse().map((parsed) => parsed.originalClassName).join(" ");
    }
    function twJoin() {
      let index2 = 0;
      let argument;
      let resolvedValue;
      let string = "";
      while (index2 < arguments.length) {
        if (argument = arguments[index2++]) {
          if (resolvedValue = toValue(argument)) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    }
    function toValue(mix) {
      if (typeof mix === "string") {
        return mix;
      }
      let resolvedValue;
      let string = "";
      for (let k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (resolvedValue = toValue(mix[k2])) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    }
    function createTailwindMerge(createConfigFirst, ...createConfigRest) {
      let configUtils;
      let cacheGet;
      let cacheSet;
      let functionToCall = initTailwindMerge;
      function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
      }
      function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
          return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
      }
      return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
      };
    }
    function fromTheme(key) {
      const themeGetter = (theme) => theme[key] || [];
      themeGetter.isThemeGetter = true;
      return themeGetter;
    }
    const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
    const fractionRegex = /^\d+\/\d+$/;
    const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
    const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
    const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
    function isLength(value) {
      return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
    }
    function isArbitraryLength(value) {
      return getIsArbitraryValue(value, "length", isLengthOnly);
    }
    function isNumber(value) {
      return Boolean(value) && !Number.isNaN(Number(value));
    }
    function isArbitraryNumber(value) {
      return getIsArbitraryValue(value, "number", isNumber);
    }
    function isInteger(value) {
      return Boolean(value) && Number.isInteger(Number(value));
    }
    function isPercent(value) {
      return value.endsWith("%") && isNumber(value.slice(0, -1));
    }
    function isArbitraryValue(value) {
      return arbitraryValueRegex.test(value);
    }
    function isTshirtSize(value) {
      return tshirtUnitRegex.test(value);
    }
    const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
    function isArbitrarySize(value) {
      return getIsArbitraryValue(value, sizeLabels, isNever);
    }
    function isArbitraryPosition(value) {
      return getIsArbitraryValue(value, "position", isNever);
    }
    const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
    function isArbitraryImage(value) {
      return getIsArbitraryValue(value, imageLabels, isImage);
    }
    function isArbitraryShadow(value) {
      return getIsArbitraryValue(value, "", isShadow);
    }
    function isAny() {
      return true;
    }
    function getIsArbitraryValue(value, label, testValue) {
      const result = arbitraryValueRegex.exec(value);
      if (result) {
        if (result[1]) {
          return typeof label === "string" ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
      }
      return false;
    }
    function isLengthOnly(value) {
      return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
    }
    function isNever() {
      return false;
    }
    function isShadow(value) {
      return shadowRegex.test(value);
    }
    function isImage(value) {
      return imageRegex.test(value);
    }
    function getDefaultConfig() {
      const colors = fromTheme("colors");
      const spacing = fromTheme("spacing");
      const blur = fromTheme("blur");
      const brightness = fromTheme("brightness");
      const borderColor = fromTheme("borderColor");
      const borderRadius = fromTheme("borderRadius");
      const borderSpacing = fromTheme("borderSpacing");
      const borderWidth = fromTheme("borderWidth");
      const contrast = fromTheme("contrast");
      const grayscale = fromTheme("grayscale");
      const hueRotate = fromTheme("hueRotate");
      const invert = fromTheme("invert");
      const gap = fromTheme("gap");
      const gradientColorStops = fromTheme("gradientColorStops");
      const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
      const inset = fromTheme("inset");
      const margin = fromTheme("margin");
      const opacity = fromTheme("opacity");
      const padding = fromTheme("padding");
      const saturate = fromTheme("saturate");
      const scale = fromTheme("scale");
      const sepia = fromTheme("sepia");
      const skew = fromTheme("skew");
      const space = fromTheme("space");
      const translate = fromTheme("translate");
      const getOverscroll = () => ["auto", "contain", "none"];
      const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
      const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
      const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
      const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
      const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
      const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
      const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
      const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
      const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
      const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
      const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
      const getNumber = () => [isNumber, isArbitraryNumber];
      const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [isAny],
          spacing: [isLength, isArbitraryLength],
          blur: ["none", "", isTshirtSize, isArbitraryValue],
          brightness: getNumber(),
          borderColor: [colors],
          borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
          borderSpacing: getSpacingWithArbitrary(),
          borderWidth: getLengthWithEmptyAndArbitrary(),
          contrast: getNumber(),
          grayscale: getZeroAndEmpty(),
          hueRotate: getNumberAndArbitrary(),
          invert: getZeroAndEmpty(),
          gap: getSpacingWithArbitrary(),
          gradientColorStops: [colors],
          gradientColorStopPositions: [isPercent, isArbitraryLength],
          inset: getSpacingWithAutoAndArbitrary(),
          margin: getSpacingWithAutoAndArbitrary(),
          opacity: getNumber(),
          padding: getSpacingWithArbitrary(),
          saturate: getNumber(),
          scale: getNumber(),
          sepia: getZeroAndEmpty(),
          skew: getNumberAndArbitrary(),
          space: getSpacingWithArbitrary(),
          translate: getSpacingWithArbitrary()
        },
        classGroups: {
          // Layout
          /**
           * Aspect Ratio
           * @see https://tailwindcss.com/docs/aspect-ratio
           */
          aspect: [{
            aspect: ["auto", "square", "video", isArbitraryValue]
          }],
          /**
           * Container
           * @see https://tailwindcss.com/docs/container
           */
          container: ["container"],
          /**
           * Columns
           * @see https://tailwindcss.com/docs/columns
           */
          columns: [{
            columns: [isTshirtSize]
          }],
          /**
           * Break After
           * @see https://tailwindcss.com/docs/break-after
           */
          "break-after": [{
            "break-after": getBreaks()
          }],
          /**
           * Break Before
           * @see https://tailwindcss.com/docs/break-before
           */
          "break-before": [{
            "break-before": getBreaks()
          }],
          /**
           * Break Inside
           * @see https://tailwindcss.com/docs/break-inside
           */
          "break-inside": [{
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          /**
           * Box Decoration Break
           * @see https://tailwindcss.com/docs/box-decoration-break
           */
          "box-decoration": [{
            "box-decoration": ["slice", "clone"]
          }],
          /**
           * Box Sizing
           * @see https://tailwindcss.com/docs/box-sizing
           */
          box: [{
            box: ["border", "content"]
          }],
          /**
           * Display
           * @see https://tailwindcss.com/docs/display
           */
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          /**
           * Floats
           * @see https://tailwindcss.com/docs/float
           */
          float: [{
            float: ["right", "left", "none", "start", "end"]
          }],
          /**
           * Clear
           * @see https://tailwindcss.com/docs/clear
           */
          clear: [{
            clear: ["left", "right", "both", "none", "start", "end"]
          }],
          /**
           * Isolation
           * @see https://tailwindcss.com/docs/isolation
           */
          isolation: ["isolate", "isolation-auto"],
          /**
           * Object Fit
           * @see https://tailwindcss.com/docs/object-fit
           */
          "object-fit": [{
            object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          /**
           * Object Position
           * @see https://tailwindcss.com/docs/object-position
           */
          "object-position": [{
            object: [...getPositions(), isArbitraryValue]
          }],
          /**
           * Overflow
           * @see https://tailwindcss.com/docs/overflow
           */
          overflow: [{
            overflow: getOverflow()
          }],
          /**
           * Overflow X
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-x": [{
            "overflow-x": getOverflow()
          }],
          /**
           * Overflow Y
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-y": [{
            "overflow-y": getOverflow()
          }],
          /**
           * Overscroll Behavior
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          overscroll: [{
            overscroll: getOverscroll()
          }],
          /**
           * Overscroll Behavior X
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-x": [{
            "overscroll-x": getOverscroll()
          }],
          /**
           * Overscroll Behavior Y
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-y": [{
            "overscroll-y": getOverscroll()
          }],
          /**
           * Position
           * @see https://tailwindcss.com/docs/position
           */
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          /**
           * Top / Right / Bottom / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          inset: [{
            inset: [inset]
          }],
          /**
           * Right / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-x": [{
            "inset-x": [inset]
          }],
          /**
           * Top / Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-y": [{
            "inset-y": [inset]
          }],
          /**
           * Start
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          start: [{
            start: [inset]
          }],
          /**
           * End
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          end: [{
            end: [inset]
          }],
          /**
           * Top
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          top: [{
            top: [inset]
          }],
          /**
           * Right
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          right: [{
            right: [inset]
          }],
          /**
           * Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          bottom: [{
            bottom: [inset]
          }],
          /**
           * Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          left: [{
            left: [inset]
          }],
          /**
           * Visibility
           * @see https://tailwindcss.com/docs/visibility
           */
          visibility: ["visible", "invisible", "collapse"],
          /**
           * Z-Index
           * @see https://tailwindcss.com/docs/z-index
           */
          z: [{
            z: ["auto", isInteger, isArbitraryValue]
          }],
          // Flexbox and Grid
          /**
           * Flex Basis
           * @see https://tailwindcss.com/docs/flex-basis
           */
          basis: [{
            basis: getSpacingWithAutoAndArbitrary()
          }],
          /**
           * Flex Direction
           * @see https://tailwindcss.com/docs/flex-direction
           */
          "flex-direction": [{
            flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          /**
           * Flex Wrap
           * @see https://tailwindcss.com/docs/flex-wrap
           */
          "flex-wrap": [{
            flex: ["wrap", "wrap-reverse", "nowrap"]
          }],
          /**
           * Flex
           * @see https://tailwindcss.com/docs/flex
           */
          flex: [{
            flex: ["1", "auto", "initial", "none", isArbitraryValue]
          }],
          /**
           * Flex Grow
           * @see https://tailwindcss.com/docs/flex-grow
           */
          grow: [{
            grow: getZeroAndEmpty()
          }],
          /**
           * Flex Shrink
           * @see https://tailwindcss.com/docs/flex-shrink
           */
          shrink: [{
            shrink: getZeroAndEmpty()
          }],
          /**
           * Order
           * @see https://tailwindcss.com/docs/order
           */
          order: [{
            order: ["first", "last", "none", isInteger, isArbitraryValue]
          }],
          /**
           * Grid Template Columns
           * @see https://tailwindcss.com/docs/grid-template-columns
           */
          "grid-cols": [{
            "grid-cols": [isAny]
          }],
          /**
           * Grid Column Start / End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start-end": [{
            col: ["auto", {
              span: ["full", isInteger, isArbitraryValue]
            }, isArbitraryValue]
          }],
          /**
           * Grid Column Start
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start": [{
            "col-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Column End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-end": [{
            "col-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Template Rows
           * @see https://tailwindcss.com/docs/grid-template-rows
           */
          "grid-rows": [{
            "grid-rows": [isAny]
          }],
          /**
           * Grid Row Start / End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start-end": [{
            row: ["auto", {
              span: [isInteger, isArbitraryValue]
            }, isArbitraryValue]
          }],
          /**
           * Grid Row Start
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start": [{
            "row-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Row End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-end": [{
            "row-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Auto Flow
           * @see https://tailwindcss.com/docs/grid-auto-flow
           */
          "grid-flow": [{
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          /**
           * Grid Auto Columns
           * @see https://tailwindcss.com/docs/grid-auto-columns
           */
          "auto-cols": [{
            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
          }],
          /**
           * Grid Auto Rows
           * @see https://tailwindcss.com/docs/grid-auto-rows
           */
          "auto-rows": [{
            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
          }],
          /**
           * Gap
           * @see https://tailwindcss.com/docs/gap
           */
          gap: [{
            gap: [gap]
          }],
          /**
           * Gap X
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-x": [{
            "gap-x": [gap]
          }],
          /**
           * Gap Y
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-y": [{
            "gap-y": [gap]
          }],
          /**
           * Justify Content
           * @see https://tailwindcss.com/docs/justify-content
           */
          "justify-content": [{
            justify: ["normal", ...getAlign()]
          }],
          /**
           * Justify Items
           * @see https://tailwindcss.com/docs/justify-items
           */
          "justify-items": [{
            "justify-items": ["start", "end", "center", "stretch"]
          }],
          /**
           * Justify Self
           * @see https://tailwindcss.com/docs/justify-self
           */
          "justify-self": [{
            "justify-self": ["auto", "start", "end", "center", "stretch"]
          }],
          /**
           * Align Content
           * @see https://tailwindcss.com/docs/align-content
           */
          "align-content": [{
            content: ["normal", ...getAlign(), "baseline"]
          }],
          /**
           * Align Items
           * @see https://tailwindcss.com/docs/align-items
           */
          "align-items": [{
            items: ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Align Self
           * @see https://tailwindcss.com/docs/align-self
           */
          "align-self": [{
            self: ["auto", "start", "end", "center", "stretch", "baseline"]
          }],
          /**
           * Place Content
           * @see https://tailwindcss.com/docs/place-content
           */
          "place-content": [{
            "place-content": [...getAlign(), "baseline"]
          }],
          /**
           * Place Items
           * @see https://tailwindcss.com/docs/place-items
           */
          "place-items": [{
            "place-items": ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Place Self
           * @see https://tailwindcss.com/docs/place-self
           */
          "place-self": [{
            "place-self": ["auto", "start", "end", "center", "stretch"]
          }],
          // Spacing
          /**
           * Padding
           * @see https://tailwindcss.com/docs/padding
           */
          p: [{
            p: [padding]
          }],
          /**
           * Padding X
           * @see https://tailwindcss.com/docs/padding
           */
          px: [{
            px: [padding]
          }],
          /**
           * Padding Y
           * @see https://tailwindcss.com/docs/padding
           */
          py: [{
            py: [padding]
          }],
          /**
           * Padding Start
           * @see https://tailwindcss.com/docs/padding
           */
          ps: [{
            ps: [padding]
          }],
          /**
           * Padding End
           * @see https://tailwindcss.com/docs/padding
           */
          pe: [{
            pe: [padding]
          }],
          /**
           * Padding Top
           * @see https://tailwindcss.com/docs/padding
           */
          pt: [{
            pt: [padding]
          }],
          /**
           * Padding Right
           * @see https://tailwindcss.com/docs/padding
           */
          pr: [{
            pr: [padding]
          }],
          /**
           * Padding Bottom
           * @see https://tailwindcss.com/docs/padding
           */
          pb: [{
            pb: [padding]
          }],
          /**
           * Padding Left
           * @see https://tailwindcss.com/docs/padding
           */
          pl: [{
            pl: [padding]
          }],
          /**
           * Margin
           * @see https://tailwindcss.com/docs/margin
           */
          m: [{
            m: [margin]
          }],
          /**
           * Margin X
           * @see https://tailwindcss.com/docs/margin
           */
          mx: [{
            mx: [margin]
          }],
          /**
           * Margin Y
           * @see https://tailwindcss.com/docs/margin
           */
          my: [{
            my: [margin]
          }],
          /**
           * Margin Start
           * @see https://tailwindcss.com/docs/margin
           */
          ms: [{
            ms: [margin]
          }],
          /**
           * Margin End
           * @see https://tailwindcss.com/docs/margin
           */
          me: [{
            me: [margin]
          }],
          /**
           * Margin Top
           * @see https://tailwindcss.com/docs/margin
           */
          mt: [{
            mt: [margin]
          }],
          /**
           * Margin Right
           * @see https://tailwindcss.com/docs/margin
           */
          mr: [{
            mr: [margin]
          }],
          /**
           * Margin Bottom
           * @see https://tailwindcss.com/docs/margin
           */
          mb: [{
            mb: [margin]
          }],
          /**
           * Margin Left
           * @see https://tailwindcss.com/docs/margin
           */
          ml: [{
            ml: [margin]
          }],
          /**
           * Space Between X
           * @see https://tailwindcss.com/docs/space
           */
          "space-x": [{
            "space-x": [space]
          }],
          /**
           * Space Between X Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-x-reverse": ["space-x-reverse"],
          /**
           * Space Between Y
           * @see https://tailwindcss.com/docs/space
           */
          "space-y": [{
            "space-y": [space]
          }],
          /**
           * Space Between Y Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-y-reverse": ["space-y-reverse"],
          // Sizing
          /**
           * Width
           * @see https://tailwindcss.com/docs/width
           */
          w: [{
            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
          }],
          /**
           * Min-Width
           * @see https://tailwindcss.com/docs/min-width
           */
          "min-w": [{
            "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
          }],
          /**
           * Max-Width
           * @see https://tailwindcss.com/docs/max-width
           */
          "max-w": [{
            "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
              screen: [isTshirtSize]
            }, isTshirtSize]
          }],
          /**
           * Height
           * @see https://tailwindcss.com/docs/height
           */
          h: [{
            h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Min-Height
           * @see https://tailwindcss.com/docs/min-height
           */
          "min-h": [{
            "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Max-Height
           * @see https://tailwindcss.com/docs/max-height
           */
          "max-h": [{
            "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Size
           * @see https://tailwindcss.com/docs/size
           */
          size: [{
            size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
          }],
          // Typography
          /**
           * Font Size
           * @see https://tailwindcss.com/docs/font-size
           */
          "font-size": [{
            text: ["base", isTshirtSize, isArbitraryLength]
          }],
          /**
           * Font Smoothing
           * @see https://tailwindcss.com/docs/font-smoothing
           */
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          /**
           * Font Style
           * @see https://tailwindcss.com/docs/font-style
           */
          "font-style": ["italic", "not-italic"],
          /**
           * Font Weight
           * @see https://tailwindcss.com/docs/font-weight
           */
          "font-weight": [{
            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
          }],
          /**
           * Font Family
           * @see https://tailwindcss.com/docs/font-family
           */
          "font-family": [{
            font: [isAny]
          }],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-normal": ["normal-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-ordinal": ["ordinal"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-slashed-zero": ["slashed-zero"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          /**
           * Letter Spacing
           * @see https://tailwindcss.com/docs/letter-spacing
           */
          tracking: [{
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
          }],
          /**
           * Line Clamp
           * @see https://tailwindcss.com/docs/line-clamp
           */
          "line-clamp": [{
            "line-clamp": ["none", isNumber, isArbitraryNumber]
          }],
          /**
           * Line Height
           * @see https://tailwindcss.com/docs/line-height
           */
          leading: [{
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
          }],
          /**
           * List Style Image
           * @see https://tailwindcss.com/docs/list-style-image
           */
          "list-image": [{
            "list-image": ["none", isArbitraryValue]
          }],
          /**
           * List Style Type
           * @see https://tailwindcss.com/docs/list-style-type
           */
          "list-style-type": [{
            list: ["none", "disc", "decimal", isArbitraryValue]
          }],
          /**
           * List Style Position
           * @see https://tailwindcss.com/docs/list-style-position
           */
          "list-style-position": [{
            list: ["inside", "outside"]
          }],
          /**
           * Placeholder Color
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/placeholder-color
           */
          "placeholder-color": [{
            placeholder: [colors]
          }],
          /**
           * Placeholder Opacity
           * @see https://tailwindcss.com/docs/placeholder-opacity
           */
          "placeholder-opacity": [{
            "placeholder-opacity": [opacity]
          }],
          /**
           * Text Alignment
           * @see https://tailwindcss.com/docs/text-align
           */
          "text-alignment": [{
            text: ["left", "center", "right", "justify", "start", "end"]
          }],
          /**
           * Text Color
           * @see https://tailwindcss.com/docs/text-color
           */
          "text-color": [{
            text: [colors]
          }],
          /**
           * Text Opacity
           * @see https://tailwindcss.com/docs/text-opacity
           */
          "text-opacity": [{
            "text-opacity": [opacity]
          }],
          /**
           * Text Decoration
           * @see https://tailwindcss.com/docs/text-decoration
           */
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          /**
           * Text Decoration Style
           * @see https://tailwindcss.com/docs/text-decoration-style
           */
          "text-decoration-style": [{
            decoration: [...getLineStyles(), "wavy"]
          }],
          /**
           * Text Decoration Thickness
           * @see https://tailwindcss.com/docs/text-decoration-thickness
           */
          "text-decoration-thickness": [{
            decoration: ["auto", "from-font", isLength, isArbitraryLength]
          }],
          /**
           * Text Underline Offset
           * @see https://tailwindcss.com/docs/text-underline-offset
           */
          "underline-offset": [{
            "underline-offset": ["auto", isLength, isArbitraryValue]
          }],
          /**
           * Text Decoration Color
           * @see https://tailwindcss.com/docs/text-decoration-color
           */
          "text-decoration-color": [{
            decoration: [colors]
          }],
          /**
           * Text Transform
           * @see https://tailwindcss.com/docs/text-transform
           */
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          /**
           * Text Overflow
           * @see https://tailwindcss.com/docs/text-overflow
           */
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          /**
           * Text Wrap
           * @see https://tailwindcss.com/docs/text-wrap
           */
          "text-wrap": [{
            text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          /**
           * Text Indent
           * @see https://tailwindcss.com/docs/text-indent
           */
          indent: [{
            indent: getSpacingWithArbitrary()
          }],
          /**
           * Vertical Alignment
           * @see https://tailwindcss.com/docs/vertical-align
           */
          "vertical-align": [{
            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
          }],
          /**
           * Whitespace
           * @see https://tailwindcss.com/docs/whitespace
           */
          whitespace: [{
            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          /**
           * Word Break
           * @see https://tailwindcss.com/docs/word-break
           */
          break: [{
            break: ["normal", "words", "all", "keep"]
          }],
          /**
           * Hyphens
           * @see https://tailwindcss.com/docs/hyphens
           */
          hyphens: [{
            hyphens: ["none", "manual", "auto"]
          }],
          /**
           * Content
           * @see https://tailwindcss.com/docs/content
           */
          content: [{
            content: ["none", isArbitraryValue]
          }],
          // Backgrounds
          /**
           * Background Attachment
           * @see https://tailwindcss.com/docs/background-attachment
           */
          "bg-attachment": [{
            bg: ["fixed", "local", "scroll"]
          }],
          /**
           * Background Clip
           * @see https://tailwindcss.com/docs/background-clip
           */
          "bg-clip": [{
            "bg-clip": ["border", "padding", "content", "text"]
          }],
          /**
           * Background Opacity
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/background-opacity
           */
          "bg-opacity": [{
            "bg-opacity": [opacity]
          }],
          /**
           * Background Origin
           * @see https://tailwindcss.com/docs/background-origin
           */
          "bg-origin": [{
            "bg-origin": ["border", "padding", "content"]
          }],
          /**
           * Background Position
           * @see https://tailwindcss.com/docs/background-position
           */
          "bg-position": [{
            bg: [...getPositions(), isArbitraryPosition]
          }],
          /**
           * Background Repeat
           * @see https://tailwindcss.com/docs/background-repeat
           */
          "bg-repeat": [{
            bg: ["no-repeat", {
              repeat: ["", "x", "y", "round", "space"]
            }]
          }],
          /**
           * Background Size
           * @see https://tailwindcss.com/docs/background-size
           */
          "bg-size": [{
            bg: ["auto", "cover", "contain", isArbitrarySize]
          }],
          /**
           * Background Image
           * @see https://tailwindcss.com/docs/background-image
           */
          "bg-image": [{
            bg: ["none", {
              "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isArbitraryImage]
          }],
          /**
           * Background Color
           * @see https://tailwindcss.com/docs/background-color
           */
          "bg-color": [{
            bg: [colors]
          }],
          /**
           * Gradient Color Stops From Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from-pos": [{
            from: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops Via Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via-pos": [{
            via: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops To Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to-pos": [{
            to: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops From
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from": [{
            from: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops Via
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via": [{
            via: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops To
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to": [{
            to: [gradientColorStops]
          }],
          // Borders
          /**
           * Border Radius
           * @see https://tailwindcss.com/docs/border-radius
           */
          rounded: [{
            rounded: [borderRadius]
          }],
          /**
           * Border Radius Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-s": [{
            "rounded-s": [borderRadius]
          }],
          /**
           * Border Radius End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-e": [{
            "rounded-e": [borderRadius]
          }],
          /**
           * Border Radius Top
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-t": [{
            "rounded-t": [borderRadius]
          }],
          /**
           * Border Radius Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-r": [{
            "rounded-r": [borderRadius]
          }],
          /**
           * Border Radius Bottom
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-b": [{
            "rounded-b": [borderRadius]
          }],
          /**
           * Border Radius Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-l": [{
            "rounded-l": [borderRadius]
          }],
          /**
           * Border Radius Start Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ss": [{
            "rounded-ss": [borderRadius]
          }],
          /**
           * Border Radius Start End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-se": [{
            "rounded-se": [borderRadius]
          }],
          /**
           * Border Radius End End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ee": [{
            "rounded-ee": [borderRadius]
          }],
          /**
           * Border Radius End Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-es": [{
            "rounded-es": [borderRadius]
          }],
          /**
           * Border Radius Top Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tl": [{
            "rounded-tl": [borderRadius]
          }],
          /**
           * Border Radius Top Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tr": [{
            "rounded-tr": [borderRadius]
          }],
          /**
           * Border Radius Bottom Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-br": [{
            "rounded-br": [borderRadius]
          }],
          /**
           * Border Radius Bottom Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-bl": [{
            "rounded-bl": [borderRadius]
          }],
          /**
           * Border Width
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w": [{
            border: [borderWidth]
          }],
          /**
           * Border Width X
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-x": [{
            "border-x": [borderWidth]
          }],
          /**
           * Border Width Y
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-y": [{
            "border-y": [borderWidth]
          }],
          /**
           * Border Width Start
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-s": [{
            "border-s": [borderWidth]
          }],
          /**
           * Border Width End
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-e": [{
            "border-e": [borderWidth]
          }],
          /**
           * Border Width Top
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-t": [{
            "border-t": [borderWidth]
          }],
          /**
           * Border Width Right
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-r": [{
            "border-r": [borderWidth]
          }],
          /**
           * Border Width Bottom
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-b": [{
            "border-b": [borderWidth]
          }],
          /**
           * Border Width Left
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-l": [{
            "border-l": [borderWidth]
          }],
          /**
           * Border Opacity
           * @see https://tailwindcss.com/docs/border-opacity
           */
          "border-opacity": [{
            "border-opacity": [opacity]
          }],
          /**
           * Border Style
           * @see https://tailwindcss.com/docs/border-style
           */
          "border-style": [{
            border: [...getLineStyles(), "hidden"]
          }],
          /**
           * Divide Width X
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x": [{
            "divide-x": [borderWidth]
          }],
          /**
           * Divide Width X Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x-reverse": ["divide-x-reverse"],
          /**
           * Divide Width Y
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y": [{
            "divide-y": [borderWidth]
          }],
          /**
           * Divide Width Y Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y-reverse": ["divide-y-reverse"],
          /**
           * Divide Opacity
           * @see https://tailwindcss.com/docs/divide-opacity
           */
          "divide-opacity": [{
            "divide-opacity": [opacity]
          }],
          /**
           * Divide Style
           * @see https://tailwindcss.com/docs/divide-style
           */
          "divide-style": [{
            divide: getLineStyles()
          }],
          /**
           * Border Color
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color": [{
            border: [borderColor]
          }],
          /**
           * Border Color X
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-x": [{
            "border-x": [borderColor]
          }],
          /**
           * Border Color Y
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-y": [{
            "border-y": [borderColor]
          }],
          /**
           * Border Color Top
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-t": [{
            "border-t": [borderColor]
          }],
          /**
           * Border Color Right
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-r": [{
            "border-r": [borderColor]
          }],
          /**
           * Border Color Bottom
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-b": [{
            "border-b": [borderColor]
          }],
          /**
           * Border Color Left
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-l": [{
            "border-l": [borderColor]
          }],
          /**
           * Divide Color
           * @see https://tailwindcss.com/docs/divide-color
           */
          "divide-color": [{
            divide: [borderColor]
          }],
          /**
           * Outline Style
           * @see https://tailwindcss.com/docs/outline-style
           */
          "outline-style": [{
            outline: ["", ...getLineStyles()]
          }],
          /**
           * Outline Offset
           * @see https://tailwindcss.com/docs/outline-offset
           */
          "outline-offset": [{
            "outline-offset": [isLength, isArbitraryValue]
          }],
          /**
           * Outline Width
           * @see https://tailwindcss.com/docs/outline-width
           */
          "outline-w": [{
            outline: [isLength, isArbitraryLength]
          }],
          /**
           * Outline Color
           * @see https://tailwindcss.com/docs/outline-color
           */
          "outline-color": [{
            outline: [colors]
          }],
          /**
           * Ring Width
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w": [{
            ring: getLengthWithEmptyAndArbitrary()
          }],
          /**
           * Ring Width Inset
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w-inset": ["ring-inset"],
          /**
           * Ring Color
           * @see https://tailwindcss.com/docs/ring-color
           */
          "ring-color": [{
            ring: [colors]
          }],
          /**
           * Ring Opacity
           * @see https://tailwindcss.com/docs/ring-opacity
           */
          "ring-opacity": [{
            "ring-opacity": [opacity]
          }],
          /**
           * Ring Offset Width
           * @see https://tailwindcss.com/docs/ring-offset-width
           */
          "ring-offset-w": [{
            "ring-offset": [isLength, isArbitraryLength]
          }],
          /**
           * Ring Offset Color
           * @see https://tailwindcss.com/docs/ring-offset-color
           */
          "ring-offset-color": [{
            "ring-offset": [colors]
          }],
          // Effects
          /**
           * Box Shadow
           * @see https://tailwindcss.com/docs/box-shadow
           */
          shadow: [{
            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
          }],
          /**
           * Box Shadow Color
           * @see https://tailwindcss.com/docs/box-shadow-color
           */
          "shadow-color": [{
            shadow: [isAny]
          }],
          /**
           * Opacity
           * @see https://tailwindcss.com/docs/opacity
           */
          opacity: [{
            opacity: [opacity]
          }],
          /**
           * Mix Blend Mode
           * @see https://tailwindcss.com/docs/mix-blend-mode
           */
          "mix-blend": [{
            "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
          }],
          /**
           * Background Blend Mode
           * @see https://tailwindcss.com/docs/background-blend-mode
           */
          "bg-blend": [{
            "bg-blend": getBlendModes()
          }],
          // Filters
          /**
           * Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/filter
           */
          filter: [{
            filter: ["", "none"]
          }],
          /**
           * Blur
           * @see https://tailwindcss.com/docs/blur
           */
          blur: [{
            blur: [blur]
          }],
          /**
           * Brightness
           * @see https://tailwindcss.com/docs/brightness
           */
          brightness: [{
            brightness: [brightness]
          }],
          /**
           * Contrast
           * @see https://tailwindcss.com/docs/contrast
           */
          contrast: [{
            contrast: [contrast]
          }],
          /**
           * Drop Shadow
           * @see https://tailwindcss.com/docs/drop-shadow
           */
          "drop-shadow": [{
            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
          }],
          /**
           * Grayscale
           * @see https://tailwindcss.com/docs/grayscale
           */
          grayscale: [{
            grayscale: [grayscale]
          }],
          /**
           * Hue Rotate
           * @see https://tailwindcss.com/docs/hue-rotate
           */
          "hue-rotate": [{
            "hue-rotate": [hueRotate]
          }],
          /**
           * Invert
           * @see https://tailwindcss.com/docs/invert
           */
          invert: [{
            invert: [invert]
          }],
          /**
           * Saturate
           * @see https://tailwindcss.com/docs/saturate
           */
          saturate: [{
            saturate: [saturate]
          }],
          /**
           * Sepia
           * @see https://tailwindcss.com/docs/sepia
           */
          sepia: [{
            sepia: [sepia]
          }],
          /**
           * Backdrop Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/backdrop-filter
           */
          "backdrop-filter": [{
            "backdrop-filter": ["", "none"]
          }],
          /**
           * Backdrop Blur
           * @see https://tailwindcss.com/docs/backdrop-blur
           */
          "backdrop-blur": [{
            "backdrop-blur": [blur]
          }],
          /**
           * Backdrop Brightness
           * @see https://tailwindcss.com/docs/backdrop-brightness
           */
          "backdrop-brightness": [{
            "backdrop-brightness": [brightness]
          }],
          /**
           * Backdrop Contrast
           * @see https://tailwindcss.com/docs/backdrop-contrast
           */
          "backdrop-contrast": [{
            "backdrop-contrast": [contrast]
          }],
          /**
           * Backdrop Grayscale
           * @see https://tailwindcss.com/docs/backdrop-grayscale
           */
          "backdrop-grayscale": [{
            "backdrop-grayscale": [grayscale]
          }],
          /**
           * Backdrop Hue Rotate
           * @see https://tailwindcss.com/docs/backdrop-hue-rotate
           */
          "backdrop-hue-rotate": [{
            "backdrop-hue-rotate": [hueRotate]
          }],
          /**
           * Backdrop Invert
           * @see https://tailwindcss.com/docs/backdrop-invert
           */
          "backdrop-invert": [{
            "backdrop-invert": [invert]
          }],
          /**
           * Backdrop Opacity
           * @see https://tailwindcss.com/docs/backdrop-opacity
           */
          "backdrop-opacity": [{
            "backdrop-opacity": [opacity]
          }],
          /**
           * Backdrop Saturate
           * @see https://tailwindcss.com/docs/backdrop-saturate
           */
          "backdrop-saturate": [{
            "backdrop-saturate": [saturate]
          }],
          /**
           * Backdrop Sepia
           * @see https://tailwindcss.com/docs/backdrop-sepia
           */
          "backdrop-sepia": [{
            "backdrop-sepia": [sepia]
          }],
          // Tables
          /**
           * Border Collapse
           * @see https://tailwindcss.com/docs/border-collapse
           */
          "border-collapse": [{
            border: ["collapse", "separate"]
          }],
          /**
           * Border Spacing
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing": [{
            "border-spacing": [borderSpacing]
          }],
          /**
           * Border Spacing X
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-x": [{
            "border-spacing-x": [borderSpacing]
          }],
          /**
           * Border Spacing Y
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-y": [{
            "border-spacing-y": [borderSpacing]
          }],
          /**
           * Table Layout
           * @see https://tailwindcss.com/docs/table-layout
           */
          "table-layout": [{
            table: ["auto", "fixed"]
          }],
          /**
           * Caption Side
           * @see https://tailwindcss.com/docs/caption-side
           */
          caption: [{
            caption: ["top", "bottom"]
          }],
          // Transitions and Animation
          /**
           * Tranisition Property
           * @see https://tailwindcss.com/docs/transition-property
           */
          transition: [{
            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
          }],
          /**
           * Transition Duration
           * @see https://tailwindcss.com/docs/transition-duration
           */
          duration: [{
            duration: getNumberAndArbitrary()
          }],
          /**
           * Transition Timing Function
           * @see https://tailwindcss.com/docs/transition-timing-function
           */
          ease: [{
            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
          }],
          /**
           * Transition Delay
           * @see https://tailwindcss.com/docs/transition-delay
           */
          delay: [{
            delay: getNumberAndArbitrary()
          }],
          /**
           * Animation
           * @see https://tailwindcss.com/docs/animation
           */
          animate: [{
            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
          }],
          // Transforms
          /**
           * Transform
           * @see https://tailwindcss.com/docs/transform
           */
          transform: [{
            transform: ["", "gpu", "none"]
          }],
          /**
           * Scale
           * @see https://tailwindcss.com/docs/scale
           */
          scale: [{
            scale: [scale]
          }],
          /**
           * Scale X
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-x": [{
            "scale-x": [scale]
          }],
          /**
           * Scale Y
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-y": [{
            "scale-y": [scale]
          }],
          /**
           * Rotate
           * @see https://tailwindcss.com/docs/rotate
           */
          rotate: [{
            rotate: [isInteger, isArbitraryValue]
          }],
          /**
           * Translate X
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-x": [{
            "translate-x": [translate]
          }],
          /**
           * Translate Y
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-y": [{
            "translate-y": [translate]
          }],
          /**
           * Skew X
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-x": [{
            "skew-x": [skew]
          }],
          /**
           * Skew Y
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-y": [{
            "skew-y": [skew]
          }],
          /**
           * Transform Origin
           * @see https://tailwindcss.com/docs/transform-origin
           */
          "transform-origin": [{
            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
          }],
          // Interactivity
          /**
           * Accent Color
           * @see https://tailwindcss.com/docs/accent-color
           */
          accent: [{
            accent: ["auto", colors]
          }],
          /**
           * Appearance
           * @see https://tailwindcss.com/docs/appearance
           */
          appearance: [{
            appearance: ["none", "auto"]
          }],
          /**
           * Cursor
           * @see https://tailwindcss.com/docs/cursor
           */
          cursor: [{
            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
          }],
          /**
           * Caret Color
           * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
           */
          "caret-color": [{
            caret: [colors]
          }],
          /**
           * Pointer Events
           * @see https://tailwindcss.com/docs/pointer-events
           */
          "pointer-events": [{
            "pointer-events": ["none", "auto"]
          }],
          /**
           * Resize
           * @see https://tailwindcss.com/docs/resize
           */
          resize: [{
            resize: ["none", "y", "x", ""]
          }],
          /**
           * Scroll Behavior
           * @see https://tailwindcss.com/docs/scroll-behavior
           */
          "scroll-behavior": [{
            scroll: ["auto", "smooth"]
          }],
          /**
           * Scroll Margin
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-m": [{
            "scroll-m": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin X
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mx": [{
            "scroll-mx": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Y
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-my": [{
            "scroll-my": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Start
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ms": [{
            "scroll-ms": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin End
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-me": [{
            "scroll-me": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Top
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mt": [{
            "scroll-mt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Right
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mr": [{
            "scroll-mr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Bottom
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mb": [{
            "scroll-mb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Left
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ml": [{
            "scroll-ml": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-p": [{
            "scroll-p": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding X
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-px": [{
            "scroll-px": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Y
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-py": [{
            "scroll-py": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Start
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-ps": [{
            "scroll-ps": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding End
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pe": [{
            "scroll-pe": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Top
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pt": [{
            "scroll-pt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Right
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pr": [{
            "scroll-pr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Bottom
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pb": [{
            "scroll-pb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Left
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pl": [{
            "scroll-pl": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Snap Align
           * @see https://tailwindcss.com/docs/scroll-snap-align
           */
          "snap-align": [{
            snap: ["start", "end", "center", "align-none"]
          }],
          /**
           * Scroll Snap Stop
           * @see https://tailwindcss.com/docs/scroll-snap-stop
           */
          "snap-stop": [{
            snap: ["normal", "always"]
          }],
          /**
           * Scroll Snap Type
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-type": [{
            snap: ["none", "x", "y", "both"]
          }],
          /**
           * Scroll Snap Type Strictness
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-strictness": [{
            snap: ["mandatory", "proximity"]
          }],
          /**
           * Touch Action
           * @see https://tailwindcss.com/docs/touch-action
           */
          touch: [{
            touch: ["auto", "none", "manipulation"]
          }],
          /**
           * Touch Action X
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-x": [{
            "touch-pan": ["x", "left", "right"]
          }],
          /**
           * Touch Action Y
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-y": [{
            "touch-pan": ["y", "up", "down"]
          }],
          /**
           * Touch Action Pinch Zoom
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-pz": ["touch-pinch-zoom"],
          /**
           * User Select
           * @see https://tailwindcss.com/docs/user-select
           */
          select: [{
            select: ["none", "text", "all", "auto"]
          }],
          /**
           * Will Change
           * @see https://tailwindcss.com/docs/will-change
           */
          "will-change": [{
            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
          }],
          // SVG
          /**
           * Fill
           * @see https://tailwindcss.com/docs/fill
           */
          fill: [{
            fill: [colors, "none"]
          }],
          /**
           * Stroke Width
           * @see https://tailwindcss.com/docs/stroke-width
           */
          "stroke-w": [{
            stroke: [isLength, isArbitraryLength, isArbitraryNumber]
          }],
          /**
           * Stroke
           * @see https://tailwindcss.com/docs/stroke
           */
          stroke: [{
            stroke: [colors, "none"]
          }],
          // Accessibility
          /**
           * Screen Readers
           * @see https://tailwindcss.com/docs/screen-readers
           */
          sr: ["sr-only", "not-sr-only"],
          /**
           * Forced Color Adjust
           * @see https://tailwindcss.com/docs/forced-color-adjust
           */
          "forced-color-adjust": [{
            "forced-color-adjust": ["auto", "none"]
          }]
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
          "font-size": ["leading"]
        }
      };
    }
    const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
    function cn(...inputs) {
      return twMerge(clsx$1(inputs));
    }
    const Select = $cc7e05a45900e73f$export$be92b6f5f03c0fe9;
    const SelectValue = $cc7e05a45900e73f$export$4c8d1a57a761ef94;
    const SelectTrigger = reactExports.forwardRef(
      ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $cc7e05a45900e73f$export$41fb9f06171c75f4,
        {
          ref,
          className: cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
            className
          ),
          ...props,
          children: [
            children,
            /* @__PURE__ */ jsxRuntimeExports.jsx($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
          ]
        }
      )
    );
    SelectTrigger.displayName = $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName;
    const SelectScrollUpButton = reactExports.forwardRef(
      ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        $cc7e05a45900e73f$export$2f60d3ec9ad468f2,
        {
          ref,
          className: cn(
            "flex cursor-default items-center justify-center py-1",
            className
          ),
          ...props,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
        }
      )
    );
    SelectScrollUpButton.displayName = $cc7e05a45900e73f$export$2f60d3ec9ad468f2.displayName;
    const SelectScrollDownButton = reactExports.forwardRef(
      ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        $cc7e05a45900e73f$export$bf1aedc3039c8d63,
        {
          ref,
          className: cn(
            "flex cursor-default items-center justify-center py-1",
            className
          ),
          ...props,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
        }
      )
    );
    SelectScrollDownButton.displayName = $cc7e05a45900e73f$export$bf1aedc3039c8d63.displayName;
    const SelectContent = reactExports.forwardRef(
      ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx($cc7e05a45900e73f$export$602eac185826482c, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $cc7e05a45900e73f$export$7c6e2c02157bb7d2,
        {
          ref,
          className: cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className
          ),
          position,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              $cc7e05a45900e73f$export$d5c6c08dc2d3ca7,
              {
                className: cn(
                  "p-1",
                  position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
          ]
        }
      ) })
    );
    SelectContent.displayName = $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName;
    const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $cc7e05a45900e73f$export$b04be29aa201d4f5,
      {
        ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
      }
    ));
    SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName;
    const SelectItem = reactExports.forwardRef(
      ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $cc7e05a45900e73f$export$6d08773d2e66f8f2,
        {
          ref,
          className: cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
          ),
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx($cc7e05a45900e73f$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children })
          ]
        }
      )
    );
    SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
    const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $cc7e05a45900e73f$export$1ff3c3f08ae963c0,
      {
        ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
      }
    ));
    SelectSeparator.displayName = $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName;
    const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
    const $89eedd556c436f6a$var$ORIENTATIONS = [
      "horizontal",
      "vertical"
    ];
    const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
      const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
      const ariaOrientation = orientation === "vertical" ? orientation : void 0;
      const semanticProps = decorative ? {
        role: "none"
      } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
      };
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-orientation": orientation
      }, semanticProps, domProps, {
        ref: forwardedRef
      }));
    });
    $89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
      orientation(props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
          return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
        return null;
      }
    };
    function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
      return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
    }
    function $89eedd556c436f6a$var$isValidOrientation(orientation) {
      return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
    }
    const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;
    const Separator = reactExports.forwardRef(
      ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        $89eedd556c436f6a$export$be92b6f5f03c0fe9,
        {
          ref,
          decorative,
          orientation,
          className: cn(
            "shrink-0 bg-border",
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
            className
          ),
          ...props
        }
      )
    );
    Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
    function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
      return reactExports.useReducer((state, event) => {
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
      }, initialState);
    }
    const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
      const { present, children } = props;
      const presence = $921a889cee6df7e8$var$usePresence(present);
      const child = typeof children === "function" ? children({
        present: presence.isPresent
      }) : reactExports.Children.only(children);
      const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
      const forceMount = typeof children === "function";
      return forceMount || presence.isPresent ? /* @__PURE__ */ reactExports.cloneElement(child, {
        ref
      }) : null;
    };
    $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
    function $921a889cee6df7e8$var$usePresence(present) {
      const [node1, setNode] = reactExports.useState();
      const stylesRef = reactExports.useRef({});
      const prevPresentRef = reactExports.useRef(present);
      const prevAnimationNameRef = reactExports.useRef("none");
      const initialState = present ? "mounted" : "unmounted";
      const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
        },
        unmounted: {
          MOUNT: "mounted"
        }
      });
      reactExports.useEffect(() => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
      }, [
        state
      ]);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
          const prevAnimationName = prevAnimationNameRef.current;
          const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
          if (present)
            send("MOUNT");
          else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
            send("UNMOUNT");
          else {
            const isAnimating = prevAnimationName !== currentAnimationName;
            if (wasPresent && isAnimating)
              send("ANIMATION_OUT");
            else
              send("UNMOUNT");
          }
          prevPresentRef.current = present;
        }
      }, [
        present,
        send
      ]);
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        if (node1) {
          const handleAnimationEnd = (event) => {
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            const isCurrentAnimation = currentAnimationName.includes(event.animationName);
            if (event.target === node1 && isCurrentAnimation)
              reactDomExports.flushSync(
                () => send("ANIMATION_END")
              );
          };
          const handleAnimationStart = (event) => {
            if (event.target === node1)
              prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
          };
          node1.addEventListener("animationstart", handleAnimationStart);
          node1.addEventListener("animationcancel", handleAnimationEnd);
          node1.addEventListener("animationend", handleAnimationEnd);
          return () => {
            node1.removeEventListener("animationstart", handleAnimationStart);
            node1.removeEventListener("animationcancel", handleAnimationEnd);
            node1.removeEventListener("animationend", handleAnimationEnd);
          };
        } else
          send("ANIMATION_END");
      }, [
        node1,
        send
      ]);
      return {
        isPresent: [
          "mounted",
          "unmountSuspended"
        ].includes(state),
        ref: reactExports.useCallback((node) => {
          if (node)
            stylesRef.current = getComputedStyle(node);
          setNode(node);
        }, [])
      };
    }
    function $921a889cee6df7e8$var$getAnimationName(styles) {
      return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
    }
    const $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
    const [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
      $cf1ac5d9fe0e8206$export$722aac194ae923
    ]);
    const $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
    const [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
    const $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
      const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
      const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
      const triggerRef = reactExports.useRef(null);
      const [hasCustomAnchor, setHasCustomAnchor] = reactExports.useState(false);
      const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PopoverProvider, {
        scope: __scopePopover,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        triggerRef,
        open,
        onOpenChange: setOpen,
        onOpenToggle: reactExports.useCallback(
          () => setOpen(
            (prevOpen) => !prevOpen
          ),
          [
            setOpen
          ]
        ),
        hasCustomAnchor,
        onCustomAnchorAdd: reactExports.useCallback(
          () => setHasCustomAnchor(true),
          []
        ),
        onCustomAnchorRemove: reactExports.useCallback(
          () => setHasCustomAnchor(false),
          []
        ),
        modal
      }, children));
    };
    const $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
    const $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopePopover, ...triggerProps } = props;
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
      const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
      const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
      const trigger = /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
      }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
      }));
      return context.hasCustomAnchor ? trigger : /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
        asChild: true
      }, popperScope), trigger);
    });
    const $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
    const [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
      forceMount: void 0
    });
    const $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
      const { __scopePopover, forceMount, children, container } = props;
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
      return /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PortalProvider, {
        scope: __scopePopover,
        forceMount
      }, /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, /* @__PURE__ */ reactExports.createElement($f1701beae083dbae$export$602eac185826482c, {
        asChild: true,
        container
      }, children)));
    };
    const $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
    const $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
      return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, context.modal ? /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
        ref: forwardedRef
      })) : /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
        ref: forwardedRef
      })));
    });
    const $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
      const contentRef = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
      const isRightClickOutsideRef = reactExports.useRef(false);
      reactExports.useEffect(() => {
        const content = contentRef.current;
        if (content)
          return hideOthers(content);
      }, []);
      return /* @__PURE__ */ reactExports.createElement($epM9y$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true
      }, /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
          var _context$triggerRef$c;
          event.preventDefault();
          if (!isRightClickOutsideRef.current)
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          isRightClickOutsideRef.current = isRightClick;
        }, {
          checkForDefaultPrevented: false
        }),
        onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          {
            checkForDefaultPrevented: false
          }
        )
      })));
    });
    const $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
      const hasInteractedOutsideRef = reactExports.useRef(false);
      const hasPointerDownOutsideRef = reactExports.useRef(false);
      return /* @__PURE__ */ reactExports.createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _props$onCloseAutoFoc;
          (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
          if (!event.defaultPrevented) {
            var _context$triggerRef$c2;
            if (!hasInteractedOutsideRef.current)
              (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _props$onInteractOuts, _context$triggerRef$c3;
          (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown")
              hasPointerDownOutsideRef.current = true;
          }
          const target = event.target;
          const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
            event.preventDefault();
        }
      }));
    });
    const $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
      const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
      const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
      $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
      return /* @__PURE__ */ reactExports.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
      }, /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
        asChild: true,
        disableOutsidePointerEvents,
        onInteractOutside,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onDismiss: () => context.onOpenChange(false)
      }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
        role: "dialog",
        id: context.contentId
      }, popperScope, contentProps, {
        ref: forwardedRef,
        style: {
          ...contentProps.style,
          "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
          "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
          "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }))));
    });
    function $cb5cc270b50c6fcd$var$getState(open) {
      return open ? "open" : "closed";
    }
    const $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
    const $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
    const $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
    const $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
    const Popover = $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9;
    const PopoverTrigger = $cb5cc270b50c6fcd$export$41fb9f06171c75f4;
    const PopoverContent = reactExports.forwardRef(
      ({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2,
        {
          ref,
          align,
          sideOffset,
          className: cn(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          ),
          ...props
        }
      ) })
    );
    PopoverContent.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
    function r(e) {
      var t2, f2, n2 = "";
      if ("string" == typeof e || "number" == typeof e)
        n2 += e;
      else if ("object" == typeof e)
        if (Array.isArray(e))
          for (t2 = 0; t2 < e.length; t2++)
            e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
        else
          for (t2 in e)
            e[t2] && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    function clsx() {
      for (var e, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
        (e = arguments[f2++]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    const falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
    const cx = clsx;
    const cva = (base, config) => {
      return (props) => {
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null)
          return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant) => {
          const variantProp = props === null || props === void 0 ? void 0 : props[variant];
          const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
          if (variantProp === null)
            return null;
          const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
          return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
          let [key, value] = param;
          if (value === void 0) {
            return acc;
          }
          acc[key] = value;
          return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
          let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
          return Object.entries(compoundVariantOptions).every((param) => {
            let [key, value] = param;
            return Array.isArray(value) ? value.includes({
              ...defaultVariants,
              ...propsWithoutUndefined
            }[key]) : {
              ...defaultVariants,
              ...propsWithoutUndefined
            }[key] === value;
          }) ? [
            ...acc,
            cvClass,
            cvClassName
          ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
      };
    };
    const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      }
    );
    const Button = reactExports.forwardRef(
      ({ className, variant, size: size2, asChild = false, ...props }, ref) => {
        const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Comp,
          {
            className: cn(buttonVariants({ variant, size: size2, className })),
            ref,
            ...props
          }
        );
      }
    );
    Button.displayName = "Button";
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var _excluded$2l = ["color"];
    var GearIcon = /* @__PURE__ */ reactExports.forwardRef(function(_ref, forwardedRef) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2l);
      return reactExports.createElement("svg", Object.assign({
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props, {
        ref: forwardedRef
      }), reactExports.createElement("path", {
        d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
        fill: color,
        fillRule: "evenodd",
        clipRule: "evenodd"
      }));
    });
    var _excluded$2m = ["color"];
    var GitHubLogoIcon = /* @__PURE__ */ reactExports.forwardRef(function(_ref, forwardedRef) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2m);
      return reactExports.createElement("svg", Object.assign({
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props, {
        ref: forwardedRef
      }), reactExports.createElement("path", {
        d: "M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",
        fill: color,
        fillRule: "evenodd",
        clipRule: "evenodd"
      }));
    });
    const formatSeconds = (s) => {
      const totalSecs = Number(s);
      const hours = Math.floor(totalSecs / 3600);
      const minutes = Math.floor(totalSecs / 60) % 60;
      const seconds = totalSecs % 60;
      return [hours, minutes, seconds].map((time) => time < 10 ? "0" + time : time).filter((time, idx) => time !== "00" || idx > 0).join(":");
    };
    const dispatchStorageEvent = (key, newValue) => {
      window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
    };
    const getItem = (key) => localStorage.getItem(key);
    const setItem = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
      dispatchStorageEvent(key, value);
    };
    const removeItem = (key) => {
      localStorage.removeItem(key);
      dispatchStorageEvent(key, null);
    };
    const clearStorage = () => {
      localStorage.clear();
      dispatchStorageEvent(null, null);
    };
    const subscribe = (callback) => {
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    };
    function useLocalStorage(key, initialValue) {
      const getSnapshot = () => getItem(key);
      const store = reactExports.useSyncExternalStore(subscribe, getSnapshot);
      const setState = reactExports.useCallback(
        (arg) => {
          try {
            const nextState = typeof arg === "function" ? arg(JSON.parse(store)) : arg;
            if (nextState === void 0 || nextState === null) {
              removeItem(key);
            } else {
              setItem(key, nextState);
            }
          } catch (error) {
            console.warn(error);
          }
        },
        [key, store]
      );
      reactExports.useEffect(() => {
        if (getItem(key) === null && initialValue !== null && initialValue !== void 0) {
          setItem(key, initialValue);
        }
      }, [key, initialValue]);
      return [store ? JSON.parse(store) : initialValue, setState];
    }
    function MenuPopover({ handleReset }) {
      const [easyTime] = useLocalStorage("bestMinesweeperTime:EASY");
      const [medTime] = useLocalStorage("bestMinesweeperTime:MEDIUM");
      const [hardTime] = useLocalStorage("bestMinesweeperTime:HARD");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { className: "justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GearIcon, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-slate-900 mb-2", children: "Personal Bests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600", children: "Easy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: easyTime ? formatSeconds(easyTime) : "--" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-orange-600", children: "Medium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: medTime ? formatSeconds(medTime) : "--" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600", children: "Hard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hardTime ? formatSeconds(hardTime) : "--" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleReset, children: "Reset Game" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: clearStorage, children: "Clear Best Time" })
          ] })
        ] })
      ] });
    }
    const MenuPopoverMemo = reactExports.memo(MenuPopover);
    function Menubar({ flags, time, changeDifficulty, handleReset }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 items-center p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { className: "justify-self-start", onValueChange: changeDifficulty, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Easy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EASY", children: "Easy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "MEDIUM", children: "Medium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HARD", children: "Hard" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-x-3 justify-self-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "⛳️ ",
              flags
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "⏱️ ",
              time
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPopoverMemo, { handleReset })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
      ] });
    }
    function getNumberColor(value) {
      switch (value) {
        case "1":
          return "text-blue-600";
        case "2":
          return "text-green-600";
        case "3":
          return "text-red-600";
        case "4":
          return "text-indigo-700";
        case "5":
          return "text-rose-700";
        case "6":
          return "text-teal-600";
        case "7":
          return "text-slate-600";
        case "8":
          return "text-zinc-400";
        default:
          return "text-current";
      }
    }
    function GameboardCell({ value, onClick }) {
      let display = "";
      if (value === "X") {
        display = "💣";
      } else if ("12345678".includes(value)) {
        display = value;
      } else if (value.endsWith("F")) {
        display = "🚩";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex justify-center items-center",
            "border border-white font-bold transition-all duration-75",
            value === "_" || value === "M" ? "cursor-pointer hover:bg-slate-100" : "cursor-default",
            value === "0" || "12345678".includes(value) ? `bg-slate-200 ${getNumberColor(value)}` : "bg-slate-300"
          ),
          onClick,
          onContextMenu: onClick,
          children: display
        }
      );
    }
    function Gameboard({
      board,
      setBoard,
      gameStarted,
      setGameStarted,
      numBombs,
      setTime,
      timerRef
    }) {
      function handleCellClick(e, r2, c, board2, setBoard2) {
        let boardCopy = JSON.parse(JSON.stringify(board2));
        if (!gameStarted && e.type !== "contextmenu") {
          boardCopy = placeBombs(r2, c, boardCopy, numBombs);
          setGameStarted(true);
          timerRef.current = setInterval(() => {
            setTime((time) => time + 1);
          }, 1e3);
        }
        if (e.type === "contextmenu") {
          handlePlaceFlag(e, r2, c, boardCopy);
        } else if (boardCopy[r2][c][1] === "F") {
          return;
        } else if (boardCopy[r2][c] === "M") {
          boardCopy[r2][c] = "X";
        } else {
          revealEmptyAreaAroundClick(r2, c, boardCopy);
        }
        setBoard2(boardCopy);
      }
      function handlePlaceFlag(e, r2, c, board2) {
        e.preventDefault();
        if (board2[r2][c].length > 1) {
          board2[r2][c] = board2[r2][c][0];
        } else if (board2[r2][c] === "_" || board2[r2][c] === "M") {
          board2[r2][c] += "F";
        }
      }
      function renderBoard() {
        const arr = [];
        for (let r2 = 0; r2 < board.length; r2++) {
          for (let c = 0; c < board[0].length; c++) {
            arr.push(
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GameboardCell,
                {
                  value: board[r2][c],
                  onClick: (e) => handleCellClick(e, r2, c, board, setBoard)
                },
                `${r2},${c}`
              )
            );
          }
        }
        return arr;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplate: `repeat(${board.length}, 40px) / repeat(${board[0].length}, 40px)`
          },
          children: renderBoard()
        }
      );
    }
    const $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
    const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
    const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
    const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
      const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
      const triggerRef = reactExports.useRef(null);
      const contentRef = reactExports.useRef(null);
      const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
        descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: reactExports.useCallback(
          () => setOpen(
            (prevOpen) => !prevOpen
          ),
          [
            setOpen
          ]
        ),
        modal
      }, children);
    };
    const $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
    const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
      forceMount: void 0
    });
    const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
      const { __scopeDialog, forceMount, children, container } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount
      }, reactExports.Children.map(
        children,
        (child) => /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
          present: forceMount || context.open
        }, /* @__PURE__ */ reactExports.createElement($f1701beae083dbae$export$602eac185826482c, {
          asChild: true,
          container
        }, child))
      ));
    };
    const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
    const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
      const { forceMount = portalContext.forceMount, ...overlayProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
      return context.modal ? /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
        ref: forwardedRef
      }))) : null;
    });
    const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeDialog, ...overlayProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
      return (
        // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
        // ie. when `Overlay` and `Content` are siblings
        /* @__PURE__ */ reactExports.createElement($epM9y$RemoveScroll, {
          as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
          allowPinchZoom: true,
          shards: [
            context.contentRef
          ]
        }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
          "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
        }, overlayProps, {
          ref: forwardedRef,
          style: {
            pointerEvents: "auto",
            ...overlayProps.style
          }
        })))
      );
    });
    const $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
    const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
      return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, context.modal ? /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
        ref: forwardedRef
      })) : /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
        ref: forwardedRef
      })));
    });
    /* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
      displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
    });
    const $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
      const contentRef = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
      reactExports.useEffect(() => {
        const content = contentRef.current;
        if (content)
          return hideOthers(content);
      }, []);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
          var _context$triggerRef$c;
          event.preventDefault();
          (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick)
            event.preventDefault();
        }),
        onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }));
    });
    const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
      const hasInteractedOutsideRef = reactExports.useRef(false);
      const hasPointerDownOutsideRef = reactExports.useRef(false);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _props$onCloseAutoFoc;
          (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
          if (!event.defaultPrevented) {
            var _context$triggerRef$c2;
            if (!hasInteractedOutsideRef.current)
              (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _props$onInteractOuts, _context$triggerRef$c3;
          (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown")
              hasPointerDownOutsideRef.current = true;
          }
          const target = event.target;
          const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
            event.preventDefault();
        }
      }));
    });
    const $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
      const contentRef = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
      $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
      }, /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
      }, contentProps, {
        ref: composedRefs,
        onDismiss: () => context.onOpenChange(false)
      }))), false);
    });
    const $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
    const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeDialog, ...titleProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
        id: context.titleId
      }, titleProps, {
        ref: forwardedRef
      }));
    });
    /* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
      displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
    });
    const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
    const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeDialog, ...descriptionProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
        id: context.descriptionId
      }, descriptionProps, {
        ref: forwardedRef
      }));
    });
    /* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
      displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
    });
    const $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
    const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeDialog, ...closeProps } = props;
      const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
      return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
        type: "button"
      }, closeProps, {
        ref: forwardedRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
          props.onClick,
          () => context.onOpenChange(false)
        )
      }));
    });
    /* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
      displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
    });
    function $5d3850c4d0b4e6c7$var$getState(open) {
      return open ? "open" : "closed";
    }
    const $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
    const [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
      contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
      titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
      docsSlug: "dialog"
    });
    const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
    const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
    const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
    const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
    const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
    const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
    const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
    const $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
    const [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
      $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
    ]);
    const $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
    const $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
      const { __scopeAlertDialog, ...alertDialogProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
        modal: true
      }));
    };
    const $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
      const { __scopeAlertDialog, ...portalProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
    };
    const $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...overlayProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
        ref: forwardedRef
      }));
    });
    const $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
    const [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
    const $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, children, ...contentProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      const contentRef = reactExports.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
      const cancelRef = reactExports.useRef(null);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
        contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
        titleName: $905f4ae918aab1aa$var$TITLE_NAME,
        docsSlug: "alert-dialog"
      }, /* @__PURE__ */ reactExports.createElement($905f4ae918aab1aa$var$AlertDialogContentProvider, {
        scope: __scopeAlertDialog,
        cancelRef
      }, /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
        role: "alertdialog"
      }, dialogScope, contentProps, {
        ref: composedRefs,
        onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
          var _cancelRef$current;
          event.preventDefault();
          (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
            preventScroll: true
          });
        }),
        onPointerDownOutside: (event) => event.preventDefault(),
        onInteractOutside: (event) => event.preventDefault()
      }), /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
    });
    const $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
    const $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...titleProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
        ref: forwardedRef
      }));
    });
    const $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...descriptionProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
        ref: forwardedRef
      }));
    });
    const $905f4ae918aab1aa$export$b454f818c58ee85d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...actionProps } = props;
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, actionProps, {
        ref: forwardedRef
      }));
    });
    const $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
    const $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...cancelProps } = props;
      const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
      const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
      const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
      return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
        ref
      }));
    });
    const $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
    const $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
    const $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
    const $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
    const $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
    const $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
    const $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
    const $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;
    const AlertDialog = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
    const AlertDialogPortal = $905f4ae918aab1aa$export$602eac185826482c;
    const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $905f4ae918aab1aa$export$c6fdb837b070b4ff,
      {
        className: cn(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        ),
        ...props,
        ref
      }
    ));
    AlertDialogOverlay.displayName = $905f4ae918aab1aa$export$c6fdb837b070b4ff.displayName;
    const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $905f4ae918aab1aa$export$7c6e2c02157bb7d2,
        {
          ref,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
          ),
          ...props
        }
      )
    ] }));
    AlertDialogContent.displayName = $905f4ae918aab1aa$export$7c6e2c02157bb7d2.displayName;
    const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          className
        ),
        ...props
      }
    );
    AlertDialogHeader.displayName = "AlertDialogHeader";
    const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          className
        ),
        ...props
      }
    );
    AlertDialogFooter.displayName = "AlertDialogFooter";
    const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $905f4ae918aab1aa$export$f99233281efd08a0,
      {
        ref,
        className: cn("text-lg font-semibold", className),
        ...props
      }
    ));
    AlertDialogTitle.displayName = $905f4ae918aab1aa$export$f99233281efd08a0.displayName;
    const AlertDialogDescription = reactExports.forwardRef(
      ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        $905f4ae918aab1aa$export$393edc798c47379d,
        {
          ref,
          className: cn("text-sm text-muted-foreground", className),
          ...props
        }
      )
    );
    AlertDialogDescription.displayName = $905f4ae918aab1aa$export$393edc798c47379d.displayName;
    const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $905f4ae918aab1aa$export$e19cd5f9376f8cee,
      {
        ref,
        className: cn(buttonVariants(), className),
        ...props
      }
    ));
    AlertDialogAction.displayName = $905f4ae918aab1aa$export$e19cd5f9376f8cee.displayName;
    const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $905f4ae918aab1aa$export$848c9b7ead0df967,
      {
        ref,
        className: cn(
          buttonVariants({ variant: "outline" }),
          "mt-2 sm:mt-0",
          className
        ),
        ...props
      }
    ));
    AlertDialogCancel.displayName = $905f4ae918aab1aa$export$848c9b7ead0df967.displayName;
    var module = {};
    (function main(global, module2, isWorker, workerSize) {
      var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
      var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
      var canDrawBitmap = function() {
        if (!global.OffscreenCanvas) {
          return false;
        }
        var canvas = new OffscreenCanvas(1, 1);
        var ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, 1, 1);
        var bitmap = canvas.transferToImageBitmap();
        try {
          ctx.createPattern(bitmap, "no-repeat");
        } catch (e) {
          return false;
        }
        return true;
      }();
      function noop2() {
      }
      function promise(func) {
        var ModulePromise = module2.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === "function") {
          return new Prom(func);
        }
        func(noop2, noop2);
        return null;
      }
      var bitmapMapper = /* @__PURE__ */ function(skipTransform, map) {
        return {
          transform: function(bitmap) {
            if (skipTransform) {
              return bitmap;
            }
            if (map.has(bitmap)) {
              return map.get(bitmap);
            }
            var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            var ctx = canvas.getContext("2d");
            ctx.drawImage(bitmap, 0, 0);
            map.set(bitmap, canvas);
            return canvas;
          },
          clear: function() {
            map.clear();
          }
        };
      }(canDrawBitmap, /* @__PURE__ */ new Map());
      var raf = function() {
        var TIME = Math.floor(1e3 / 60);
        var frame, cancel;
        var frames = {};
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
          frame = function(cb2) {
            var id2 = Math.random();
            frames[id2] = requestAnimationFrame(function onFrame(time) {
              if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                lastFrameTime = time;
                delete frames[id2];
                cb2();
              } else {
                frames[id2] = requestAnimationFrame(onFrame);
              }
            });
            return id2;
          };
          cancel = function(id2) {
            if (frames[id2]) {
              cancelAnimationFrame(frames[id2]);
            }
          };
        } else {
          frame = function(cb2) {
            return setTimeout(cb2, TIME);
          };
          cancel = function(timer) {
            return clearTimeout(timer);
          };
        }
        return { frame, cancel };
      }();
      var getWorker = /* @__PURE__ */ function() {
        var worker;
        var prom;
        var resolves = {};
        function decorate(worker2) {
          function execute(options2, callback) {
            worker2.postMessage({ options: options2 || {}, callback });
          }
          worker2.init = function initWorker(canvas) {
            var offscreen = canvas.transferControlToOffscreen();
            worker2.postMessage({ canvas: offscreen }, [offscreen]);
          };
          worker2.fire = function fireWorker(options2, size2, done) {
            if (prom) {
              execute(options2, null);
              return prom;
            }
            var id2 = Math.random().toString(36).slice(2);
            prom = promise(function(resolve) {
              function workerDone(msg) {
                if (msg.data.callback !== id2) {
                  return;
                }
                delete resolves[id2];
                worker2.removeEventListener("message", workerDone);
                prom = null;
                bitmapMapper.clear();
                done();
                resolve();
              }
              worker2.addEventListener("message", workerDone);
              execute(options2, id2);
              resolves[id2] = workerDone.bind(null, { data: { callback: id2 } });
            });
            return prom;
          };
          worker2.reset = function resetWorker() {
            worker2.postMessage({ reset: true });
            for (var id2 in resolves) {
              resolves[id2]();
              delete resolves[id2];
            }
          };
        }
        return function() {
          if (worker) {
            return worker;
          }
          if (!isWorker && canUseWorker) {
            var code = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + main.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}"
            ].join("\n");
            try {
              worker = new Worker(URL.createObjectURL(new Blob([code])));
            } catch (e) {
              typeof console !== void 0 && typeof console.warn === "function" ? console.warn("🎊 Could not load worker", e) : null;
              return null;
            }
            decorate(worker);
          }
          return worker;
        };
      }();
      var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff"
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
      };
      function convert(val, transform) {
        return transform ? transform(val) : val;
      }
      function isOk(val) {
        return !(val === null || val === void 0);
      }
      function prop(options2, name, transform) {
        return convert(
          options2 && isOk(options2[name]) ? options2[name] : defaults[name],
          transform
        );
      }
      function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
      }
      function randomInt(min2, max2) {
        return Math.floor(Math.random() * (max2 - min2)) + min2;
      }
      function toDecimal(str) {
        return parseInt(str, 16);
      }
      function colorsToRgb(colors) {
        return colors.map(hexToRgb);
      }
      function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, "");
        if (val.length < 6) {
          val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        }
        return {
          r: toDecimal(val.substring(0, 2)),
          g: toDecimal(val.substring(2, 4)),
          b: toDecimal(val.substring(4, 6))
        };
      }
      function getOrigin(options2) {
        var origin = prop(options2, "origin", Object);
        origin.x = prop(origin, "x", Number);
        origin.y = prop(origin, "y", Number);
        return origin;
      }
      function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
      }
      function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
      function getCanvas(zIndex) {
        var canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = zIndex;
        return canvas;
      }
      function ellipse(context, x2, y2, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x2, y2);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
      }
      function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
          x: opts.x,
          y: opts.y,
          wobble: Math.random() * 10,
          wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
          velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
          angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
          tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
          color: opts.color,
          shape: opts.shape,
          tick: 0,
          totalTicks: opts.ticks,
          decay: opts.decay,
          drift: opts.drift,
          random: Math.random() + 2,
          tiltSin: 0,
          tiltCos: 0,
          wobbleX: 0,
          wobbleY: 0,
          gravity: opts.gravity * 3,
          ovalScalar: 0.6,
          scalar: opts.scalar,
          flat: opts.flat
        };
      }
      function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.velocity *= fetti.decay;
        if (fetti.flat) {
          fetti.wobble = 0;
          fetti.wobbleX = fetti.x + 10 * fetti.scalar;
          fetti.wobbleY = fetti.y + 10 * fetti.scalar;
          fetti.tiltSin = 0;
          fetti.tiltCos = 0;
          fetti.random = 1;
        } else {
          fetti.wobble += fetti.wobbleSpeed;
          fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
          fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
          fetti.tiltAngle += 0.1;
          fetti.tiltSin = Math.sin(fetti.tiltAngle);
          fetti.tiltCos = Math.cos(fetti.tiltAngle);
          fetti.random = Math.random() + 2;
        }
        var progress = fetti.tick++ / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
        context.beginPath();
        if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
          context.fill(transformPath2D(
            fetti.shape.path,
            fetti.shape.matrix,
            fetti.x,
            fetti.y,
            Math.abs(x2 - x1) * 0.1,
            Math.abs(y2 - y1) * 0.1,
            Math.PI / 10 * fetti.wobble
          ));
        } else if (fetti.shape.type === "bitmap") {
          var rotation = Math.PI / 10 * fetti.wobble;
          var scaleX = Math.abs(x2 - x1) * 0.1;
          var scaleY = Math.abs(y2 - y1) * 0.1;
          var width = fetti.shape.bitmap.width * fetti.scalar;
          var height = fetti.shape.bitmap.height * fetti.scalar;
          var matrix = new DOMMatrix([
            Math.cos(rotation) * scaleX,
            Math.sin(rotation) * scaleX,
            -Math.sin(rotation) * scaleY,
            Math.cos(rotation) * scaleY,
            fetti.x,
            fetti.y
          ]);
          matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
          var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
          pattern.setTransform(matrix);
          context.globalAlpha = 1 - progress;
          context.fillStyle = pattern;
          context.fillRect(
            fetti.x - width / 2,
            fetti.y - height / 2,
            width,
            height
          );
          context.globalAlpha = 1;
        } else if (fetti.shape === "circle") {
          context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        } else if (fetti.shape === "star") {
          var rot = Math.PI / 2 * 3;
          var innerRadius = 4 * fetti.scalar;
          var outerRadius = 8 * fetti.scalar;
          var x3 = fetti.x;
          var y3 = fetti.y;
          var spikes = 5;
          var step = Math.PI / spikes;
          while (spikes--) {
            x3 = fetti.x + Math.cos(rot) * outerRadius;
            y3 = fetti.y + Math.sin(rot) * outerRadius;
            context.lineTo(x3, y3);
            rot += step;
            x3 = fetti.x + Math.cos(rot) * innerRadius;
            y3 = fetti.y + Math.sin(rot) * innerRadius;
            context.lineTo(x3, y3);
            rot += step;
          }
        } else {
          context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
          context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
          context.lineTo(Math.floor(x2), Math.floor(y2));
          context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
      }
      function animate(canvas, fettis, resizer, size2, done) {
        var animatingFettis = fettis.slice();
        var context = canvas.getContext("2d");
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
          function onDone() {
            animationFrame = destroy = null;
            context.clearRect(0, 0, size2.width, size2.height);
            bitmapMapper.clear();
            done();
            resolve();
          }
          function update() {
            if (isWorker && !(size2.width === workerSize.width && size2.height === workerSize.height)) {
              size2.width = canvas.width = workerSize.width;
              size2.height = canvas.height = workerSize.height;
            }
            if (!size2.width && !size2.height) {
              resizer(canvas);
              size2.width = canvas.width;
              size2.height = canvas.height;
            }
            context.clearRect(0, 0, size2.width, size2.height);
            animatingFettis = animatingFettis.filter(function(fetti) {
              return updateFetti(context, fetti);
            });
            if (animatingFettis.length) {
              animationFrame = raf.frame(update);
            } else {
              onDone();
            }
          }
          animationFrame = raf.frame(update);
          destroy = onDone;
        });
        return {
          addFettis: function(fettis2) {
            animatingFettis = animatingFettis.concat(fettis2);
            return prom;
          },
          canvas,
          promise: prom,
          reset: function() {
            if (animationFrame) {
              raf.cancel(animationFrame);
            }
            if (destroy) {
              destroy();
            }
          }
        };
      }
      function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {}, "resize");
        var hasResizeEventRegistered = false;
        var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
        var animationObj;
        function fireLocal(options2, size2, done) {
          var particleCount = prop(options2, "particleCount", onlyPositiveInt);
          var angle = prop(options2, "angle", Number);
          var spread = prop(options2, "spread", Number);
          var startVelocity = prop(options2, "startVelocity", Number);
          var decay = prop(options2, "decay", Number);
          var gravity = prop(options2, "gravity", Number);
          var drift = prop(options2, "drift", Number);
          var colors = prop(options2, "colors", colorsToRgb);
          var ticks = prop(options2, "ticks", Number);
          var shapes = prop(options2, "shapes");
          var scalar = prop(options2, "scalar");
          var flat = !!prop(options2, "flat");
          var origin = getOrigin(options2);
          var temp = particleCount;
          var fettis = [];
          var startX = canvas.width * origin.x;
          var startY = canvas.height * origin.y;
          while (temp--) {
            fettis.push(
              randomPhysics({
                x: startX,
                y: startY,
                angle,
                spread,
                startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks,
                decay,
                gravity,
                drift,
                scalar,
                flat
              })
            );
          }
          if (animationObj) {
            return animationObj.addFettis(fettis);
          }
          animationObj = animate(canvas, fettis, resizer, size2, done);
          return animationObj.promise;
        }
        function fire(options2) {
          var disableForReducedMotion = globalDisableForReducedMotion || prop(options2, "disableForReducedMotion", Boolean);
          var zIndex = prop(options2, "zIndex", Number);
          if (disableForReducedMotion && preferLessMotion) {
            return promise(function(resolve) {
              resolve();
            });
          }
          if (isLibCanvas && animationObj) {
            canvas = animationObj.canvas;
          } else if (isLibCanvas && !canvas) {
            canvas = getCanvas(zIndex);
            document.body.appendChild(canvas);
          }
          if (allowResize && !initialized) {
            resizer(canvas);
          }
          var size2 = {
            width: canvas.width,
            height: canvas.height
          };
          if (worker && !initialized) {
            worker.init(canvas);
          }
          initialized = true;
          if (worker) {
            canvas.__confetti_initialized = true;
          }
          function onResize() {
            if (worker) {
              var obj = {
                getBoundingClientRect: function() {
                  if (!isLibCanvas) {
                    return canvas.getBoundingClientRect();
                  }
                }
              };
              resizer(obj);
              worker.postMessage({
                resize: {
                  width: obj.width,
                  height: obj.height
                }
              });
              return;
            }
            size2.width = size2.height = null;
          }
          function done() {
            animationObj = null;
            if (allowResize) {
              hasResizeEventRegistered = false;
              global.removeEventListener("resize", onResize);
            }
            if (isLibCanvas && canvas) {
              if (document.body.contains(canvas)) {
                document.body.removeChild(canvas);
              }
              canvas = null;
              initialized = false;
            }
          }
          if (allowResize && !hasResizeEventRegistered) {
            hasResizeEventRegistered = true;
            global.addEventListener("resize", onResize, false);
          }
          if (worker) {
            return worker.fire(options2, size2, done);
          }
          return fireLocal(options2, size2, done);
        }
        fire.reset = function() {
          if (worker) {
            worker.reset();
          }
          if (animationObj) {
            animationObj.reset();
          }
        };
        return fire;
      }
      var defaultFire;
      function getDefaultFire() {
        if (!defaultFire) {
          defaultFire = confettiCannon(null, { useWorker: true, resize: true });
        }
        return defaultFire;
      }
      function transformPath2D(pathString, pathMatrix, x2, y2, scaleX, scaleY, rotation) {
        var path2d = new Path2D(pathString);
        var t1 = new Path2D();
        t1.addPath(path2d, new DOMMatrix(pathMatrix));
        var t2 = new Path2D();
        t2.addPath(t1, new DOMMatrix([
          Math.cos(rotation) * scaleX,
          Math.sin(rotation) * scaleX,
          -Math.sin(rotation) * scaleY,
          Math.cos(rotation) * scaleY,
          x2,
          y2
        ]));
        return t2;
      }
      function shapeFromPath(pathData) {
        if (!canUsePaths) {
          throw new Error("path confetti are not supported in this browser");
        }
        var path, matrix;
        if (typeof pathData === "string") {
          path = pathData;
        } else {
          path = pathData.path;
          matrix = pathData.matrix;
        }
        var path2d = new Path2D(path);
        var tempCanvas = document.createElement("canvas");
        var tempCtx = tempCanvas.getContext("2d");
        if (!matrix) {
          var maxSize = 1e3;
          var minX = maxSize;
          var minY = maxSize;
          var maxX = 0;
          var maxY = 0;
          var width, height;
          for (var x2 = 0; x2 < maxSize; x2 += 2) {
            for (var y2 = 0; y2 < maxSize; y2 += 2) {
              if (tempCtx.isPointInPath(path2d, x2, y2, "nonzero")) {
                minX = Math.min(minX, x2);
                minY = Math.min(minY, y2);
                maxX = Math.max(maxX, x2);
                maxY = Math.max(maxY, y2);
              }
            }
          }
          width = maxX - minX;
          height = maxY - minY;
          var maxDesiredSize = 10;
          var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
          matrix = [
            scale,
            0,
            0,
            scale,
            -Math.round(width / 2 + minX) * scale,
            -Math.round(height / 2 + minY) * scale
          ];
        }
        return {
          type: "path",
          path,
          matrix
        };
      }
      function shapeFromText(textData) {
        var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        if (typeof textData === "string") {
          text = textData;
        } else {
          text = textData.text;
          scalar = "scalar" in textData ? textData.scalar : scalar;
          fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
          color = "color" in textData ? textData.color : color;
        }
        var fontSize = 10 * scalar;
        var font = "" + fontSize + "px " + fontFamily;
        var canvas = new OffscreenCanvas(fontSize, fontSize);
        var ctx = canvas.getContext("2d");
        ctx.font = font;
        var size2 = ctx.measureText(text);
        var width = Math.ceil(size2.actualBoundingBoxRight + size2.actualBoundingBoxLeft);
        var height = Math.ceil(size2.actualBoundingBoxAscent + size2.actualBoundingBoxDescent);
        var padding = 2;
        var x2 = size2.actualBoundingBoxLeft + padding;
        var y2 = size2.actualBoundingBoxAscent + padding;
        width += padding + padding;
        height += padding + padding;
        canvas = new OffscreenCanvas(width, height);
        ctx = canvas.getContext("2d");
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x2, y2);
        var scale = 1 / scalar;
        return {
          type: "bitmap",
          // TODO these probably need to be transfered for workers
          bitmap: canvas.transferToImageBitmap(),
          matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
        };
      }
      module2.exports = function() {
        return getDefaultFire().apply(this, arguments);
      };
      module2.exports.reset = function() {
        getDefaultFire().reset();
      };
      module2.exports.create = confettiCannon;
      module2.exports.shapeFromPath = shapeFromPath;
      module2.exports.shapeFromText = shapeFromText;
    })(function() {
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return this || {};
    }(), module, false);
    const confetti = module.exports;
    module.exports.create;
    function EndGameModal({ gameOver, handleReset, time, difficulty }) {
      const [bestTime, setBestTime] = useLocalStorage(
        `bestMinesweeperTime:${difficulty}`
      );
      const [prevBestTime] = reactExports.useState(bestTime);
      const [comparison, setComparison] = reactExports.useState(null);
      reactExports.useEffect(() => {
        if (gameOver === "win" && (!bestTime || time < bestTime))
          setBestTime(time);
        if (prevBestTime !== null && prevBestTime !== void 0) {
          let message = "Your best time is ";
          if (time < prevBestTime)
            message = "You beat your previous record of ";
          if (time === prevBestTime)
            message = "You matched your previous record of ";
          setComparison(
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              message,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-800", children: formatSeconds(prevBestTime) })
            ] })
          );
        }
      }, [gameOver, time, bestTime, prevBestTime, setBestTime]);
      if (gameOver === "win") {
        confetti();
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
            "You ",
            gameOver,
            " ",
            gameOver === "win" ? "😁" : "😿"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { asChild: true, children: gameOver === "win" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Your time was",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600", children: formatSeconds(time) })
            ] }),
            comparison
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleReset, children: "Try Again" }) })
      ] }) });
    }
    function Minesweeper() {
      const [board, setBoard] = reactExports.useState(makeBoard(DIFFICULTIES.EASY));
      const [difficulty, setDifficulty] = reactExports.useState("EASY");
      const [time, setTime] = reactExports.useState(0);
      const [gameStarted, setGameStarted] = reactExports.useState(false);
      const gameOver = isGameOver(board);
      const flagsRemaining = countFlagsRemaining(board, difficulty);
      const timerRef = reactExports.useRef();
      if (gameOver)
        clearInterval(timerRef.current);
      function changeDifficulty(dif) {
        setDifficulty(dif);
        setGameStarted(false);
        setTime(0);
        clearInterval(timerRef.current);
        setBoard(makeBoard(DIFFICULTIES[dif]));
      }
      const handleReset = reactExports.useCallback(() => {
        setGameStarted(false);
        setTime(0);
        setBoard(makeBoard(DIFFICULTIES[difficulty]));
        clearInterval(timerRef.current);
      }, [difficulty]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center content-center border-4 rounded-xl relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Menubar,
          {
            flags: flagsRemaining,
            time,
            changeDifficulty,
            handleReset
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Gameboard,
          {
            board,
            setBoard,
            gameStarted,
            setGameStarted,
            numBombs: DIFFICULTIES[difficulty].numberOfBombs,
            timerRef,
            setTime
          }
        ),
        gameOver && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EndGameModal,
          {
            handleReset,
            gameOver,
            time,
            difficulty
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-[16px] right-[-16px] rotate-[-15deg] rounded-full bg-white border-2 hover:rotate-0 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/andrewblum/minesweeper", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubLogoIcon, { width: "32", height: "32" }) }) })
      ] });
    }
    var classnames = { exports: {} };
    /*!
    	Copyright (c) 2018 Jed Watson.
    	Licensed under the MIT License (MIT), see
    	http://jedwatson.github.io/classnames
    */
    (function(module2) {
      (function() {
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (module2.exports) {
          classNames2.default = classNames2;
          module2.exports = classNames2;
        } else {
          window.classNames = classNames2;
        }
      })();
    })(classnames);
    var classnamesExports = classnames.exports;
    const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
    const [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
      $cf1ac5d9fe0e8206$export$722aac194ae923
    ]);
    $cf1ac5d9fe0e8206$export$722aac194ae923();
    const $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
    const $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
    const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
    const $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props) => {
      const { __scopeTooltip, delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
      const [isOpenDelayed, setIsOpenDelayed] = reactExports.useState(true);
      const isPointerInTransitRef = reactExports.useRef(false);
      const skipDelayTimerRef = reactExports.useRef(0);
      reactExports.useEffect(() => {
        const skipDelayTimer = skipDelayTimerRef.current;
        return () => window.clearTimeout(skipDelayTimer);
      }, []);
      return /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
        scope: __scopeTooltip,
        isOpenDelayed,
        delayDuration,
        onOpen: reactExports.useCallback(() => {
          window.clearTimeout(skipDelayTimerRef.current);
          setIsOpenDelayed(false);
        }, []),
        onClose: reactExports.useCallback(() => {
          window.clearTimeout(skipDelayTimerRef.current);
          skipDelayTimerRef.current = window.setTimeout(
            () => setIsOpenDelayed(true),
            skipDelayDuration
          );
        }, [
          skipDelayDuration
        ]),
        isPointerInTransitRef,
        onPointerInTransitChange: reactExports.useCallback((inTransit) => {
          isPointerInTransitRef.current = inTransit;
        }, []),
        disableHoverableContent
      }, children);
    };
    const $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
    $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
    const $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
    $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
      forceMount: void 0
    });
    $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
      isInside: false
    });
    const $a093c7e1ec25a057$export$2881499e37b75b9a = $a093c7e1ec25a057$export$f78649fb9ca566b8;
    const radixColorScalesRegular = ["tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "brown", "orange"];
    const radixColorScalesBright = ["sky", "mint", "lime", "yellow", "amber"];
    const radixColorScalesMetal = ["gold", "bronze"];
    const radixColorScales = [...radixColorScalesRegular, ...radixColorScalesBright, ...radixColorScalesMetal];
    const radixGrayScalePure = "gray";
    const radixGrayScalesDesaturated = ["mauve", "slate", "sage", "olive", "sand"];
    const radixGrayScales = [radixGrayScalePure, ...radixGrayScalesDesaturated];
    function radixGetMatchingGrayScale(colorScale) {
      switch (colorScale) {
        case "tomato":
        case "red":
        case "ruby":
        case "crimson":
        case "pink":
        case "plum":
        case "purple":
        case "violet":
          return "mauve";
        case "iris":
        case "indigo":
        case "blue":
        case "sky":
        case "cyan":
          return "slate";
        case "teal":
        case "jade":
        case "mint":
        case "green":
          return "sage";
        case "grass":
        case "lime":
          return "olive";
        case "yellow":
        case "amber":
        case "orange":
        case "brown":
        case "gold":
        case "bronze":
          return "sand";
      }
    }
    const appearances = ["inherit", "light", "dark"];
    const accentColors = [...radixColorScales, "gray"];
    const grayColors = [...radixGrayScales, "auto"];
    const panelBackgrounds = ["solid", "translucent"];
    const radii = ["none", "small", "medium", "large", "full"];
    const scalings = ["90%", "95%", "100%", "105%", "110%"];
    const themePropDefs = {
      hasBackground: { type: "boolean", default: true },
      appearance: { type: "enum", values: appearances, default: "inherit" },
      accentColor: { type: "enum", values: accentColors, default: "indigo" },
      grayColor: { type: "enum", values: grayColors, default: "auto" },
      panelBackground: { type: "enum", values: panelBackgrounds, default: "translucent" },
      radius: { type: "enum", values: radii, default: "medium" },
      scaling: { type: "enum", values: scalings, default: "100%" }
    };
    function getMatchingGrayColor(accentColor) {
      if (accentColor === "gray")
        return "gray";
      return radixGetMatchingGrayScale(accentColor);
    }
    const noop = () => {
    };
    const ThemeContext = reactExports.createContext(void 0);
    const Theme = reactExports.forwardRef((props, forwardedRef) => {
      const context = reactExports.useContext(ThemeContext);
      const isRoot = context === void 0;
      if (isRoot) {
        return reactExports.createElement(
          $a093c7e1ec25a057$export$2881499e37b75b9a,
          null,
          reactExports.createElement(
            $f631663db3294ace$export$c760c09fdd558351,
            { dir: "ltr" },
            reactExports.createElement(ThemeRoot, { ...props, ref: forwardedRef })
          )
        );
      }
      return reactExports.createElement(ThemeImpl, { ...props, ref: forwardedRef });
    });
    Theme.displayName = "Theme";
    const ThemeRoot = reactExports.forwardRef((props, forwardedRef) => {
      const { appearance: appearanceProp = themePropDefs.appearance.default, accentColor: accentColorProp = themePropDefs.accentColor.default, grayColor: grayColorProp = themePropDefs.grayColor.default, panelBackground: panelBackgroundProp = themePropDefs.panelBackground.default, radius: radiusProp = themePropDefs.radius.default, scaling: scalingProp = themePropDefs.scaling.default, hasBackground = themePropDefs.hasBackground.default, ...rootProps } = props;
      const [appearance, setAppearance] = reactExports.useState(appearanceProp);
      reactExports.useEffect(() => setAppearance(appearanceProp), [appearanceProp]);
      const [accentColor, setAccentColor] = reactExports.useState(accentColorProp);
      reactExports.useEffect(() => setAccentColor(accentColorProp), [accentColorProp]);
      const [grayColor, setGrayColor] = reactExports.useState(grayColorProp);
      reactExports.useEffect(() => setGrayColor(grayColorProp), [grayColorProp]);
      const [panelBackground, setPanelBackground] = reactExports.useState(panelBackgroundProp);
      reactExports.useEffect(() => setPanelBackground(panelBackgroundProp), [panelBackgroundProp]);
      const [radius, setRadius] = reactExports.useState(radiusProp);
      reactExports.useEffect(() => setRadius(radiusProp), [radiusProp]);
      const [scaling, setScaling] = reactExports.useState(scalingProp);
      reactExports.useEffect(() => setScaling(scalingProp), [scalingProp]);
      const ExplicitRootAppearanceScript = reactExports.memo(
        ({ appearance: appearance2 }) => reactExports.createElement("script", { dangerouslySetInnerHTML: {
          __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance2}';c.add('${appearance2}');}catch(e){}})();`
        } }),
        () => true
        // Never re-render
      );
      ExplicitRootAppearanceScript.displayName = "ExplicitRootAppearanceScript";
      reactExports.useEffect(() => updateThemeAppearanceClass(appearanceProp), [appearanceProp]);
      const resolvedGrayColor = grayColor === "auto" ? getMatchingGrayColor(accentColor) : grayColor;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        appearance !== "inherit" && reactExports.createElement(ExplicitRootAppearanceScript, { appearance }),
        hasBackground && reactExports.createElement("style", { dangerouslySetInnerHTML: {
          __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${resolvedGrayColor}-1); }
body { background-color: var(--color-page-background); }
`
        } }),
        reactExports.createElement(ThemeImpl, {
          ...rootProps,
          ref: forwardedRef,
          isRoot: true,
          hasBackground,
          //
          appearance,
          accentColor,
          grayColor,
          panelBackground,
          radius,
          scaling,
          //
          onAppearanceChange: setAppearance,
          onAccentColorChange: setAccentColor,
          onGrayColorChange: setGrayColor,
          onPanelBackgroundChange: setPanelBackground,
          onRadiusChange: setRadius,
          onScalingChange: setScaling
        })
      );
    });
    ThemeRoot.displayName = "ThemeRoot";
    const ThemeImpl = reactExports.forwardRef((props, forwardedRef) => {
      var _a, _b, _c, _d, _e, _f;
      const context = reactExports.useContext(ThemeContext);
      const {
        asChild,
        isRoot,
        hasBackground,
        //
        appearance = (_a = context === null || context === void 0 ? void 0 : context.appearance) !== null && _a !== void 0 ? _a : themePropDefs.appearance.default,
        accentColor = (_b = context === null || context === void 0 ? void 0 : context.accentColor) !== null && _b !== void 0 ? _b : themePropDefs.accentColor.default,
        grayColor = (_c = context === null || context === void 0 ? void 0 : context.resolvedGrayColor) !== null && _c !== void 0 ? _c : themePropDefs.grayColor.default,
        panelBackground = (_d = context === null || context === void 0 ? void 0 : context.panelBackground) !== null && _d !== void 0 ? _d : themePropDefs.panelBackground.default,
        radius = (_e = context === null || context === void 0 ? void 0 : context.radius) !== null && _e !== void 0 ? _e : themePropDefs.radius.default,
        scaling = (_f = context === null || context === void 0 ? void 0 : context.scaling) !== null && _f !== void 0 ? _f : themePropDefs.scaling.default,
        //
        onAppearanceChange = noop,
        onAccentColorChange = noop,
        onGrayColorChange = noop,
        onPanelBackgroundChange = noop,
        onRadiusChange = noop,
        onScalingChange = noop,
        //
        ...themeProps
      } = props;
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div";
      const resolvedGrayColor = grayColor === "auto" ? getMatchingGrayColor(accentColor) : grayColor;
      const isExplicitAppearance = props.appearance !== void 0 && props.appearance !== "inherit";
      const isExplicitGrayColor = props.grayColor !== void 0;
      const shouldHaveBackground = !isRoot && (hasBackground === true || hasBackground !== false && (isExplicitAppearance || isExplicitGrayColor));
      return reactExports.createElement(
        ThemeContext.Provider,
        { value: reactExports.useMemo(() => ({
          appearance,
          accentColor,
          grayColor,
          resolvedGrayColor,
          panelBackground,
          radius,
          scaling,
          //
          onAppearanceChange,
          onAccentColorChange,
          onGrayColorChange,
          onPanelBackgroundChange,
          onRadiusChange,
          onScalingChange
        }), [
          appearance,
          accentColor,
          grayColor,
          resolvedGrayColor,
          panelBackground,
          radius,
          scaling,
          //
          onAppearanceChange,
          onAccentColorChange,
          onGrayColorChange,
          onPanelBackgroundChange,
          onRadiusChange,
          onScalingChange
        ]) },
        reactExports.createElement(Comp, { "data-is-root-theme": isRoot ? "true" : "false", "data-accent-color": accentColor, "data-gray-color": resolvedGrayColor, "data-has-background": shouldHaveBackground ? "true" : "false", "data-panel-background": panelBackground, "data-radius": radius, "data-scaling": scaling, ref: forwardedRef, ...themeProps, className: classNames("radix-themes", {
          // Only apply theme class to nested `Theme` sections.
          //
          // If it's the root `Theme`, we either rely on
          // - something else setting the theme class when root `appearance` is `inherit`
          // - our script setting it when root `appearance` is explicit
          light: !isRoot && appearance === "light",
          dark: !isRoot && appearance === "dark"
        }, themeProps.className) })
      );
    });
    ThemeImpl.displayName = "ThemeImpl";
    function updateThemeAppearanceClass(appearance) {
      if (appearance === "inherit")
        return;
      const root = document.documentElement;
      if (root.classList.contains("light-theme") || root.classList.contains("dark-theme")) {
        root.classList.remove("light-theme", "dark-theme");
        root.style.colorScheme = appearance;
        root.classList.add(`${appearance}-theme`);
      }
      if (root.classList.contains("light") || root.classList.contains("dark")) {
        root.classList.remove("light", "dark");
        root.style.colorScheme = appearance;
        root.classList.add(appearance);
      }
    }
    function App() {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Theme, { className: "flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minesweeper, {}) }) });
    }
    client.createRoot(document.getElementById("root")).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
    );
  }
});
export default require_index_001();
//# sourceMappingURL=index-BGWId3qc.js.map
